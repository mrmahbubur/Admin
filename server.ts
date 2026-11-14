import express, { type Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.APP_PORT || process.env.DEFAULT_APP_PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';
const APP_URL = (process.env.APP_URL || '').replace(/\/$/, '');

app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const WEBSITES_CACHE_FILE = path.join(DATA_DIR, 'websites_cache.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const LOGO_FILE = path.join(__dirname, 'public', 'site_logo.svg');

const GRAVATAR_USERNAME = (process.env.GRAVATAR_USERNAME || 'mrxshahin').trim();
const GRAVATAR_API_KEY = (
  process.env.GRAVATAR_API_KEY ||
  process.env.GRAVATAR_KEY ||
  process.env.GRAVATAR_TOKEN ||
  process.env.GRAVATAR ||
  ''
).trim();
const GRAVATAR_V3_PROFILE_URL = `https://api.gravatar.com/v3/profiles/${encodeURIComponent(GRAVATAR_USERNAME)}`;
const GRAVATAR_PUBLIC_JSON_URL = `https://gravatar.com/${encodeURIComponent(GRAVATAR_USERNAME)}.json`;

const UPSTREAM_BASE = (process.env.UPSTREAM_SOURCE_URL || 'https://mrxshahin.ai.studio').replace(/\/$/, '');
const UPSTREAM_GRAVATAR_API = `${UPSTREAM_BASE}/api/gravatar?username=${encodeURIComponent(GRAVATAR_USERNAME)}&email=mr216873@gmail.com`;
const UPSTREAM_GRAVATAR_STREAM = `${UPSTREAM_BASE}/api/gravatar/stream?username=${encodeURIComponent(GRAVATAR_USERNAME)}&email=mr216873@gmail.com`;
const UPSTREAM_RSS_URL = `${UPSTREAM_BASE}/rss.xml`;
const UPSTREAM_POLICIES_URL = `${UPSTREAM_BASE}/api/policies/current`;

export interface WebsitePostPreview {
  title: string;
  url: string;
  published: string;
}

export interface EcosystemWebsite {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  badge?: string;
  description: string;
  liveTitle?: string;
  imageKey: 'flagship' | 'admin' | 'tech' | 'charity';
  status: 'online' | 'standby' | 'probing';
  httpCode?: number;
  latencyMs?: number;
  lastChecked: string;
  isCore: boolean;
  feedUrl?: string;
  latestPosts: WebsitePostPreview[];
}

export interface LiveServiceCategory {
  title: string;
  items: string[];
}

export interface RssFeedItem {
  title: string;
  link: string;
  description: string;
  category: string;
  pubDate: string;
}

export interface UpstreamConnectionStatus {
  sourceUrl: string;
  connected: boolean;
  sseActive: boolean;
  healthStatus: string;
  lastSyncedAt: string;
  rssBuildDate?: string;
  rssItems: RssFeedItem[];
}

export interface AdminProfileData {
  siteName: string;
  roleTitle: string;
  tagline: string;
  location: string;
  avatarUrl: string;
  certification: string;
  availabilityNote: string;
  bioParagraphs: string[];
  whatICanHelpWith: string[];
  liveServices: LiveServiceCategory[];
  workExperience: {
    role: string;
    period: string;
    location: string;
    highlights: string[];
  }[];
  skillsList: {
    category: string;
    skills: string[];
  }[];
  coursesCertifications: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  interests: string[];
  socials: {
    email: string;
    phone: string;
    gravatarUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    xUrl: string;
    blueskyUrl: string;
    wordpressUrl: string;
    calendlyUrl: string;
    contactForm: string;
    goodreadsUrl: string;
  };
  verifiedAccounts: {
    label: string;
    handle: string;
    url: string;
  }[];
}

export interface YearlySystemData {
  currentYear: number;
  establishedYear: number;
  copyrightNotice: string;
  nextRolloverDate: string;
}

export interface WebsitesHubState {
  siteName: string;
  sourceUrl: string;
  upstreamStatus: UpstreamConnectionStatus;
  adminProfile: AdminProfileData;
  websites: EcosystemWebsite[];
  lastUpdated: string;
  syncCycle: number;
  yearlySystem: YearlySystemData;
}

const ESTABLISHED_YEAR = 2018;

function computeYearlyData(siteName = 'M R S'): YearlySystemData {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  return {
    currentYear,
    establishedYear: ESTABLISHED_YEAR,
    copyrightNotice: `© ${currentYear} ${siteName}. All rights reserved.`,
    nextRolloverDate: new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0)).toISOString(),
  };
}

const BASE_ADMIN_PROFILE: AdminProfileData = {
  siteName: 'M R S',
  roleTitle: 'IT Support Professional | Remote Admin & Documentation Specialist | Web Manager',
  tagline: 'Helping businesses run smoother, one ticket at a time',
  location: 'Global / Remote',
  avatarUrl: './mrs_profile_avatar.jpg',
  certification: '360-Hour Certified Computer Specialist & MS Office Professional',
  availabilityNote: 'Open to remote contract, freelance, and part-time opportunities.',
  bioParagraphs: [
    "I'm an IT support and administrative professional with a track record of solving technical problems reliably, remotely, and with precision. My core strengths are Microsoft Office systems, document management, job application processing, and professional correspondence — backed by a 360-hour certified computer course and hands-on system troubleshooting experience.",
    "I've spent years working independently across remote platforms, building a reputation for adaptability and consistent, high-quality delivery without the structure of a traditional office. That means I show up, communicate clearly, and get things done — no hand-holding required.",
    'Alongside client work, I run a small portfolio of digital projects (web management, content, tech media, and humanitarian initiatives), which keeps me sharp on emerging tech — from web development to Web3 to cybersecurity defense — sharing tech fixes and guides since 2018.',
  ],
  whatICanHelpWith: [
    'Document management & formatting',
    'Professional email & correspondence handling',
    'IT troubleshooting (Windows, Android, browsers, WiFi)',
    'Job application processing & admin support',
    'Web management & content creation',
  ],
  liveServices: [
    {
      title: 'IT Support & Technical Troubleshooting',
      items: [
        'Windows PC troubleshooting and basic system maintenance',
        'Android device support and app-related troubleshooting',
        'Browser, internet connectivity, Wi-Fi, and common software issues',
        'Software installation, configuration, and basic technical guidance',
        'Step-by-step technical documentation and user support',
      ],
    },
    {
      title: 'Virtual Assistance & Administrative Support',
      items: [
        'Data entry, data organization, and document formatting',
        'Microsoft Word, Excel, PowerPoint, and office productivity tasks',
        'Email management, professional correspondence, and inbox organization',
        'Online research, information collection, and data verification',
        'Form filling, job application assistance, and document preparation',
        'File organization, record keeping, and digital documentation',
        'Task coordination and routine administrative assistance',
      ],
    },
    {
      title: 'Website Management & Digital Content',
      items: [
        'Website content updates and basic website administration',
        'Blog post publishing and content formatting',
        'WordPress and Blogger content management',
        'SEO-friendly article writing and on-page content optimization',
        'Website testing, troubleshooting, and basic usability checks',
        'Web research, content planning, and topic development',
        'AI-assisted content creation, editing, and proofreading',
      ],
    },
    {
      title: 'Technical Writing & Documentation',
      items: [
        'Writing technology guides, tutorials, and how-to articles',
        'Creating step-by-step troubleshooting instructions',
        'Explaining websites, apps, and digital tools in simple language',
        'Preparing FAQs, user guides, and knowledge-base articles',
        'Rewriting, proofreading, and improving existing content',
        'Creating informative articles about software, websites, apps, and online services',
      ],
    },
    {
      title: 'Online Research & Digital Problem-Solving',
      items: [
        'Finding and evaluating online resources',
        'Researching websites, apps, and technology solutions',
        'Comparing digital tools and identifying practical alternatives',
        'Organizing research findings into clear, useful reports',
        'Testing online services and documenting user experiences',
        'Identifying workflow improvements and opportunities for automation',
      ],
    },
    {
      title: 'AI Tools & Productivity Assistance',
      items: [
        'Using AI tools to support research, writing, and content development',
        'Improving repetitive workflows with practical digital tools',
        'Assisting with AI-generated content review and refinement',
        'Developing detailed prompts for writing, research, and creative tasks',
        'Exploring no-code and low-code solutions for everyday business needs',
      ],
    },
    {
      title: 'Social Media & Online Business Support',
      items: [
        'Preparing social media posts, captions, and content descriptions',
        'Managing content schedules and organizing publishing materials',
        'Creating promotional copy for websites, apps, and digital services',
        'Assisting with basic online brand and content management',
        'Supporting digital projects through research, documentation, and coordination',
      ],
    },
  ],
  workExperience: [
    {
      role: 'Independent IT Support Specialist & Web Manager',
      period: '2018 – Present',
      location: 'Global / Remote',
      highlights: [
        'Providing end-to-end remote IT administration, Windows & Android OS troubleshooting, hardware diagnostics, and WiFi network configuration for diverse clients.',
        'Structuring, formatting, and proofreading high-stakes documentation, official correspondence, and job applications with precision and rapid turnaround.',
        'Managing content, architecture, and live operations for web platforms, tech blogs, and streaming web services.',
      ],
    },
  ],
  skillsList: [
    {
      category: 'IT Support & Administration',
      skills: [
        'System Troubleshooting',
        'Microsoft 365 & Office Suite',
        'Document Management',
        'Professional Correspondence',
        'User Hardware & Network Diagnostics',
      ],
    },
    {
      category: 'Web & Digital Management',
      skills: [
        'Blogspot & WordPress CMS',
        'Web Architecture',
        'Domain & DNS Management',
        'SEO & Analytics',
        'Content Strategy',
      ],
    },
    {
      category: 'Digital Operations & Interactive Systems',
      skills: [
        'Digital Interactive Concierge Systems',
        'Workflow Automation',
        'Autonomous Systems Management',
        'E-Commerce Operations',
        'Remote Team Collaboration',
      ],
    },
    {
      category: 'Core Competencies & Digital Skills',
      skills: ['Remote Work Autonomy', 'Data Organization', 'Technical Writing', 'Client Communication'],
    },
  ],
  coursesCertifications: [
    'Basic Computer Course (360 Hrs)',
    'Android Hardware Repair',
    'IELTS — Band 5.5',
  ],
  education: [
    {
      degree: 'Bachelor of Social Science',
      institution: 'Sylhet Government College, Sylhet',
      period: 'Jan 2021 – Present',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Tajpur Degree College, Sylhet',
      period: 'Jan 2019 – Dec 2020',
      gpa: 'GPA: 3.33',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Mongol Chondi Nishikanto High School, Sylhet',
      period: 'Jan 2017 – Dec 2018',
      gpa: 'GPA: 3.39',
    },
  ],
  languages: [
    { name: 'English', level: 'Conversational' },
    { name: 'Bengali', level: 'Native' },
    { name: 'Hindi', level: 'Basic' },
  ],
  interests: ['Web Development', 'Web3', 'Cybersecurity & IT Defense', 'Social Sciences', 'Remote Working'],
  socials: {
    email: 'mr216873@gmail.com',
    phone: '+8809611056361',
    gravatarUrl: 'https://gravatar.com/mrxshahin',
    githubUrl: 'https://github.com/mrmahbubur',
    linkedinUrl: 'https://www.linkedin.com/in/mrmahbubur',
    xUrl: 'https://x.com/Mrshahinx',
    blueskyUrl: 'https://bsky.app/profile/mrxshahin.bsky.social',
    wordpressUrl: 'https://mrxshahin.wordpress.com',
    calendlyUrl: 'https://calendly.com/mrxshahin',
    contactForm: 'https://mrsadmin.blogspot.com/p/contact-us.html?m=1',
    goodreadsUrl: 'https://www.goodreads.com/mrxshahin',
  },
  verifiedAccounts: [
    { label: 'LinkedIn', handle: 'mrmahbubur', url: 'https://www.linkedin.com/in/mrmahbubur' },
    { label: 'GitHub', handle: 'mrmahbubur', url: 'https://github.com/mrmahbubur' },
    { label: 'X', handle: '@Mrshahinx', url: 'https://x.com/Mrshahinx' },
    { label: 'Bluesky', handle: 'mrxshahin.bsky.social', url: 'https://bsky.app/profile/mrxshahin.bsky.social' },
    { label: 'WordPress', handle: 'mrxshahin.wordpress.com', url: 'https://mrxshahin.wordpress.com' },
  ],
};

const DEFAULT_WEBSITES: EcosystemWebsite[] = [
  {
    id: 'proj-6-ai-assistant',
    name: 'M R S Portfolio & AI Assistant',
    url: 'https://mrxshahin.ai.studio/',
    domain: 'mrxshahin.ai.studio',
    category: 'Official Portfolio & AI Concierge',
    badge: 'AI CONCIERGE',
    description:
      'Official portfolio of M R S featuring verified credentials, live projects, and an interactive multimodal AI concierge.',
    imageKey: 'flagship',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'proj-1-cloud',
    name: 'Cloud (MRS ADMIN Web Hub)',
    url: 'https://mrsadmin.blogspot.com/?m=1',
    domain: 'mrsadmin.blogspot.com',
    category: 'Portfolio & Web Hub',
    badge: 'CENTRAL HUB',
    description:
      'Central portfolio and web hub for M R S covering IT administration, web management, and digital projects since 2018.',
    imageKey: 'admin',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    feedUrl: 'https://mrsadmin.blogspot.com/feeds/posts/default?alt=json&max-results=3',
    latestPosts: [],
  },
  {
    id: 'proj-2-blogger',
    name: 'BLOGGER (mrxshahin Tech Blog)',
    url: 'https://mrxshahin.blogspot.com/',
    domain: 'mrxshahin.blogspot.com',
    category: 'Tech Blog',
    badge: 'TECH BLOG',
    description:
      'Practical fixes and step-by-step guides for everyday tech problems covering Windows, Android, WiFi, and browsers.',
    imageKey: 'tech',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    feedUrl: 'https://mrxshahin.blogspot.com/feeds/posts/default?alt=json&max-results=3',
    latestPosts: [],
  },
  {
    id: 'proj-3-iptv-web',
    name: 'IPTV WEB',
    url: 'https://shahin-iptv.ai.studio',
    domain: 'shahin-iptv.ai.studio',
    category: 'Live Streaming & Media Platform',
    badge: 'LIVE WEB APP',
    description:
      'Web streaming platform delivering 10,000+ live international channels spanning Sports, Movies, Dramas, and News.',
    imageKey: 'flagship',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'proj-4-iptv-apk',
    name: 'Android TV Apk',
    url: 'https://www.upload-apk.com/en/0Jr71hMVlsFwN9Y%20',
    domain: 'upload-apk.com',
    category: 'Android Package Download',
    badge: 'DIRECT APK',
    description:
      'Direct Mrs IPTV APK package download supporting Android TVs, set-top boxes, and Android mobile devices.',
    imageKey: 'tech',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'proj-5-charity',
    name: 'M R S Charity Foundation',
    url: 'https://mrscharityfoundation.blogspot.com/?m',
    domain: 'mrscharityfoundation.blogspot.com',
    category: 'Humanitarian Non-Profit',
    badge: 'FOUNDATION',
    description:
      'Humanitarian initiative dedicated to healthcare, education, shelter, and community empowerment.',
    imageKey: 'charity',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    feedUrl: 'https://mrscharityfoundation.blogspot.com/feeds/posts/default?alt=json&max-results=3',
    latestPosts: [],
  },
  {
    id: 'wordpress-hub',
    name: 'WordPress Knowledge Portal',
    url: 'https://mrxshahin.wordpress.com',
    domain: 'mrxshahin.wordpress.com',
    category: 'Verified Publication',
    badge: 'WORDPRESS',
    description:
      'Verified WordPress publication sharing technical solutions, digital guides, and documentation crafted by M R S.',
    imageKey: 'admin',
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
];

let websitesState: WebsitesHubState = {
  siteName: 'M R S',
  sourceUrl: '',
  upstreamStatus: {
    sourceUrl: '',
    connected: false,
    sseActive: false,
    healthStatus: 'connecting',
    lastSyncedAt: new Date().toISOString(),
    rssItems: [],
  },
  adminProfile: BASE_ADMIN_PROFILE,
  websites: DEFAULT_WEBSITES,
  lastUpdated: new Date().toISOString(),
  syncCycle: 0,
  yearlySystem: computeYearlyData(),
};

const sseClients = new Set<Response>();

function broadcastWebsitesUpdate(eventType: 'initial' | 'websites_update', data: WebsitesHubState) {
  const payload = `data: ${JSON.stringify({ type: eventType, data })}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch {
      sseClients.delete(client);
    }
  }
}

function saveWebsitesCache() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(WEBSITES_CACHE_FILE, JSON.stringify(websitesState, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Websites Cache] Write warning:', err);
  }
}

try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (fs.existsSync(WEBSITES_CACHE_FILE)) {
    const parsed = JSON.parse(fs.readFileSync(WEBSITES_CACHE_FILE, 'utf-8'));
    if (Array.isArray(parsed?.websites)) {
      const customSites = parsed.websites.filter((s: EcosystemWebsite) => !s.isCore);
      websitesState = {
        ...websitesState,
        websites: [...DEFAULT_WEBSITES, ...customSites],
        yearlySystem: computeYearlyData(),
      };
    }
  }
} catch {
  // Use defaults
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&bull;/g, '·')
    .replace(/&mdash;|&#8212;/g, '—')
    .replace(/&ndash;|&#8211;/g, '–')
    .replace(/&rsquo;|&#8217;/g, '’')
    .replace(/&lsquo;|&#8216;/g, '‘')
    .replace(/&ldquo;|&#8220;/g, '“')
    .replace(/&rdquo;|&#8221;/g, '”');
}

function extractMetaFromHtml(html: string): { title?: string; description?: string } {
  const titleMatch = html.match(/<title[^>]*>([^<]{1,180})<\/title>/i);
  const descMatch =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,320})["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']{1,320})["'][^>]+name=["']description["']/i);

  return {
    title: titleMatch?.[1] ? decodeHtmlEntities(titleMatch[1]).trim() : undefined,
    description: descMatch?.[1] ? decodeHtmlEntities(descMatch[1]).trim() : undefined,
  };
}

function cleanMarkdownInline(text: string): string {
  return decodeHtmlEntities(text)
    .replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\uFE0F\s]+/gu, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseGravatarBioMarkdown(rawBio: string): {
  bioParagraphs: string[];
  liveServices: LiveServiceCategory[];
  availabilityNote?: string;
} {
  if (!rawBio || typeof rawBio !== 'string') {
    return { bioParagraphs: [], liveServices: [] };
  }

  const normalized = decodeHtmlEntities(rawBio);
  const lines = normalized.split(/\r?\n/);

  const introParagraphs: string[] = [];
  const whyParagraphs: string[] = [];
  const availabilityParagraphs: string[] = [];
  const liveServices: LiveServiceCategory[] = [];

  type SectionMode = 'intro' | 'services' | 'why' | 'background' | 'availability' | 'other';
  let mode: SectionMode = 'intro';
  let currentService: LiveServiceCategory | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('###')) {
      if (currentService && currentService.items.length > 0) {
        liveServices.push(currentService);
        currentService = null;
      }
      const lowerHeading = line.toLowerCase();
      if (lowerHeading.includes('what i can do')) {
        mode = 'services';
      } else if (lowerHeading.includes('why work with me')) {
        mode = 'why';
      } else if (lowerHeading.includes('my background')) {
        mode = 'background';
      } else if (lowerHeading.includes('available')) {
        mode = 'availability';
      } else {
        mode = 'other';
      }
      continue;
    }

    if (mode === 'services') {
      const catMatch = line.match(/^[✅🔹📌💼]\s*\*\*(.+?)\*\*/);
      if (catMatch) {
        if (currentService && currentService.items.length > 0) {
          liveServices.push(currentService);
        }
        currentService = { title: cleanMarkdownInline(catMatch[1]), items: [] };
        continue;
      }
      if (currentService && line.startsWith('* ')) {
        currentService.items.push(cleanMarkdownInline(line.slice(2)));
        continue;
      }
    }

    if (mode === 'intro') {
      // Skip the leading emoji/bold availability banner line in intro paragraphs
      if (/^[🖥️💻🚀✅🔹📌💼]/.test(line)) {
        continue;
      }
      const cleaned = cleanMarkdownInline(line);
      if (cleaned.length > 20) introParagraphs.push(cleaned);
      continue;
    }

    if (mode === 'why') {
      const cleaned = cleanMarkdownInline(line);
      if (cleaned.length > 20) whyParagraphs.push(cleaned);
      continue;
    }

    if (mode === 'availability') {
      const cleaned = cleanMarkdownInline(line);
      if (cleaned.length > 15) availabilityParagraphs.push(cleaned);
    }
  }

  if (currentService && currentService.items.length > 0) {
    liveServices.push(currentService);
  }

  const combinedParagraphs = [...introParagraphs, ...whyParagraphs].slice(0, 5);
  return {
    bioParagraphs: combinedParagraphs,
    liveServices,
    availabilityNote: availabilityParagraphs[0],
  };
}

function normalizeVerifiedUrlKey(rawUrl: string): string {
  return rawUrl.trim().replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '').toLowerCase();
}

function formatAccountHandle(url: string): string {
  let handle = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  if (handle.includes('x.com/')) return `@${handle.split('x.com/')[1]}`;
  if (handle.includes('github.com/')) return handle.split('github.com/')[1];
  if (handle.includes('linkedin.com/in/')) return handle.split('linkedin.com/in/')[1];
  if (handle.includes('bsky.app/profile/')) return handle.split('bsky.app/profile/')[1];
  return handle;
}

function applyUpstreamProfilePayload(payload: any) {
  const remoteProfile = payload?.profile;
  if (!remoteProfile || typeof remoteProfile !== 'object') return;

  const prev = websitesState.adminProfile;

  // Normalize interests when provided
  let interests = prev.interests;
  if (Array.isArray(remoteProfile.interests) && remoteProfile.interests.length > 0) {
    const normalized = remoteProfile.interests
      .map((item: any) => (typeof item === 'string' ? item.trim() : String(item?.name || '').trim()))
      .filter(Boolean);
    if (normalized.length > 0) {
      interests = normalized;
    }
  }

  websitesState = {
    ...websitesState,
    siteName: prev.siteName,
    sourceUrl: '',
    adminProfile: {
      ...prev,
      siteName: prev.siteName,
      interests,
    },
  };
}

function parseRssXml(xml: string): { buildDate?: string; items: RssFeedItem[] } {
  const buildDateMatch = xml.match(/<lastBuildDate>([^<]+)<\/lastBuildDate>/i);
  const items: RssFeedItem[] = [];
  const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/gi);

  const readTag = (block: string, tag: string) => {
    const m = block.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, 'i'));
    return m?.[1] ? decodeHtmlEntities(m[1]).trim() : '';
  };

  for (const match of itemMatches) {
    const block = match[1];
    const title = readTag(block, 'title');
    const link = readTag(block, 'link');
    const description = readTag(block, 'description');
    const category = readTag(block, 'category');
    const pubDate = readTag(block, 'pubDate');
    if (title && link) {
      items.push({ title, link, description, category, pubDate });
    }
  }

  return {
    buildDate: buildDateMatch?.[1]?.trim(),
    items,
  };
}

function applyGravatarDirectPayload(v3Profile: any, legacyJson?: any) {
  const legacyEntry = Array.isArray(legacyJson?.entry) ? legacyJson.entry[0] : null;
  if ((!v3Profile || typeof v3Profile !== 'object') && !legacyEntry) return;

  const syncedAt = new Date().toISOString();
  const prev = websitesState.adminProfile;

  const rawV3Name =
    typeof v3Profile?.display_name === 'string' && v3Profile.display_name.trim()
      ? decodeHtmlEntities(v3Profile.display_name).trim()
      : '';
  const rawLegacyName =
    typeof legacyEntry?.displayName === 'string' && legacyEntry.displayName.trim()
      ? decodeHtmlEntities(legacyEntry.displayName).trim()
      : '';
  const siteName = rawV3Name || rawLegacyName || prev.siteName;

  const rawLocation =
    (typeof v3Profile?.location === 'string' && v3Profile.location.trim()
      ? decodeHtmlEntities(v3Profile.location).trim()
      : '') ||
    (typeof legacyEntry?.currentLocation === 'string' && legacyEntry.currentLocation.trim()
      ? decodeHtmlEntities(legacyEntry.currentLocation).trim()
      : '') ||
    prev.location;

  const rawJobTitle =
    typeof v3Profile?.job_title === 'string' && v3Profile.job_title.trim()
      ? decodeHtmlEntities(v3Profile.job_title).trim()
      : '';
  const roleTitle = rawJobTitle || prev.roleTitle;

  const rawAvatar =
    (typeof v3Profile?.avatar_url === 'string' && v3Profile.avatar_url.startsWith('https://')
      ? v3Profile.avatar_url
      : '') ||
    (typeof legacyEntry?.thumbnailUrl === 'string' && legacyEntry.thumbnailUrl.startsWith('https://')
      ? legacyEntry.thumbnailUrl
      : '');
  const avatarUrl = rawAvatar
    ? `${rawAvatar}${rawAvatar.includes('?') ? '&' : '?'}s=512`
    : prev.avatarUrl;

  const bioMarkdown =
    (typeof v3Profile?.description === 'string' && v3Profile.description.trim()
      ? v3Profile.description
      : '') ||
    (typeof legacyEntry?.aboutMe === 'string' && legacyEntry.aboutMe.trim()
      ? legacyEntry.aboutMe
      : '');

  const parsedBio = parseGravatarBioMarkdown(bioMarkdown);

  // Merge contact info from v3 + legacy JSON
  const socials = { ...prev.socials, gravatarUrl: '' };

  if (v3Profile?.contact_info && typeof v3Profile.contact_info === 'object') {
    const ci = v3Profile.contact_info;
    if (typeof ci.email === 'string' && ci.email.includes('@')) socials.email = ci.email.trim();
    if (typeof ci.cell_phone === 'string' && ci.cell_phone.trim()) socials.phone = ci.cell_phone.trim();
    if (typeof ci.calendar === 'string' && ci.calendar.startsWith('https://')) socials.calendlyUrl = ci.calendar.trim();
    if (typeof ci.contact_form === 'string' && ci.contact_form.startsWith('https://')) {
      socials.contactForm = ci.contact_form.trim();
    }
  }

  if (Array.isArray(legacyEntry?.emails)) {
    const primaryEmail = legacyEntry.emails.find((e: any) => e?.value)?.value;
    if (typeof primaryEmail === 'string' && primaryEmail.includes('@') && !socials.email) {
      socials.email = primaryEmail.trim();
    }
  }
  if (Array.isArray(legacyEntry?.phoneNumbers)) {
    const primaryPhone = legacyEntry.phoneNumbers.find((p: any) => p?.value)?.value;
    if (typeof primaryPhone === 'string' && primaryPhone.trim() && !socials.phone) {
      socials.phone = primaryPhone.trim();
    }
  }
  if (Array.isArray(legacyEntry?.contactInfo)) {
    for (const item of legacyEntry.contactInfo) {
      const val = String(item?.value || '').trim();
      const kind = String(item?.type || '').toLowerCase();
      if (kind === 'calendar' && val.startsWith('https://') && !socials.calendlyUrl) {
        socials.calendlyUrl = val;
      }
      if (kind === 'contactform' && val.startsWith('https://') && !socials.contactForm) {
        socials.contactForm = val;
      }
    }
  }

  // Merge verified_accounts (v3) + accounts (legacy JSON), excluding gravatar.com links
  const mergedAccounts: { label: string; handle: string; url: string }[] = [];
  const seenAccountKeys = new Set<string>();

  const pushVerifiedAccount = (rawUrl: any, rawLabel: any) => {
    const u = String(rawUrl || '').trim();
    if (!u.startsWith('https://') || u.length >= 160 || /[\s<>]/.test(u)) return;
    if (u.toLowerCase().includes('gravatar.com/')) return;
    const key = normalizeVerifiedUrlKey(u);
    if (seenAccountKeys.has(key)) return;
    seenAccountKeys.add(key);

    const label = String(rawLabel || 'Profile').trim();
    const lowerUrl = u.toLowerCase();
    if (lowerUrl.includes('github.com/')) socials.githubUrl = u;
    if (lowerUrl.includes('linkedin.com/')) socials.linkedinUrl = u;
    if (lowerUrl.includes('x.com/') || lowerUrl.includes('twitter.com/')) socials.xUrl = u;
    if (lowerUrl.includes('bsky.app/')) socials.blueskyUrl = u;
    if (lowerUrl.includes('wordpress.com')) socials.wordpressUrl = u;

    mergedAccounts.push({
      label,
      handle: formatAccountHandle(u),
      url: u,
    });
  };

  if (Array.isArray(v3Profile?.verified_accounts)) {
    for (const acc of v3Profile.verified_accounts) {
      if (acc?.is_hidden) continue;
      pushVerifiedAccount(acc?.url, acc?.service_label || acc?.service_type);
    }
  }

  if (Array.isArray(legacyEntry?.accounts)) {
    for (const acc of legacyEntry.accounts) {
      if (acc?.is_hidden || acc?.verified === false) continue;
      pushVerifiedAccount(acc?.url, acc?.name || acc?.shortname);
    }
  }

  // Interests (authenticated v3 profile or legacy JSON)
  let interests = prev.interests;
  const rawInterests = Array.isArray(v3Profile?.interests)
    ? v3Profile.interests
    : Array.isArray(legacyEntry?.interests)
      ? legacyEntry.interests
      : null;
  if (rawInterests && rawInterests.length > 0) {
    const normalized = rawInterests
      .map((item: any) => (typeof item === 'string' ? item.trim() : String(item?.name || '').trim()))
      .filter(Boolean);
    if (normalized.length > 0) {
      interests = normalized;
    }
  }

  // Languages (when populated on Gravatar authenticated API)
  let languages = prev.languages;
  if (Array.isArray(v3Profile?.languages) && v3Profile.languages.length > 0) {
    const parsedLangs = v3Profile.languages
      .map((l: any) => ({
        name: String(l?.name || '').trim(),
        level: String(l?.proficiency || l?.level || 'Proficient').trim(),
      }))
      .filter((l: { name: string }) => Boolean(l.name));
    if (parsedLangs.length > 0) {
      languages = parsedLangs;
    }
  }

  const whatICanHelpWith =
    parsedBio.liveServices.length > 0
      ? parsedBio.liveServices.slice(0, 5).map((s) => s.title)
      : prev.whatICanHelpWith;

  websitesState = {
    ...websitesState,
    siteName,
    sourceUrl: '',
    upstreamStatus: {
      ...websitesState.upstreamStatus,
      sourceUrl: '',
      connected: true,
      healthStatus: 'ok',
      lastSyncedAt: syncedAt,
    },
    adminProfile: {
      ...prev,
      siteName,
      roleTitle,
      location: rawLocation,
      avatarUrl,
      availabilityNote: parsedBio.availabilityNote || prev.availabilityNote,
      bioParagraphs: parsedBio.bioParagraphs.length > 0 ? parsedBio.bioParagraphs : prev.bioParagraphs,
      whatICanHelpWith,
      liveServices: parsedBio.liveServices.length > 0 ? parsedBio.liveServices : prev.liveServices,
      languages,
      interests,
      socials,
      verifiedAccounts: mergedAccounts.length > 0 ? mergedAccounts : prev.verifiedAccounts,
    },
    lastUpdated: syncedAt,
    yearlySystem: computeYearlyData(siteName),
  };
}

let lastGravatarSyncMs = 0;
let gravatarSyncInFlight: Promise<boolean> | null = null;

async function syncGravatarProfileLive(force = false): Promise<boolean> {
  if (!force && Date.now() - lastGravatarSyncMs < 4000) {
    return true;
  }
  if (gravatarSyncInFlight) return gravatarSyncInFlight;

  gravatarSyncInFlight = (async () => {
    const gravatarHeaders: Record<string, string> = {
      'User-Agent': 'MRS-Portfolio-Sync/1.0',
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    };
    if (GRAVATAR_API_KEY) {
      gravatarHeaders.Authorization = `Bearer ${GRAVATAR_API_KEY}`;
    }

    const cacheBust = `?_t=${Date.now()}`;
    const [v3Res, legacyRes] = await Promise.allSettled([
      fetch(`${GRAVATAR_V3_PROFILE_URL}${cacheBust}`, {
        signal: AbortSignal.timeout(6000),
        headers: gravatarHeaders,
        cache: 'no-store',
      }),
      fetch(`${GRAVATAR_PUBLIC_JSON_URL}${cacheBust}`, {
        signal: AbortSignal.timeout(6000),
        headers: {
          'User-Agent': 'MRS-Portfolio-Sync/1.0',
          Accept: 'application/json',
          'Cache-Control': 'no-cache',
        },
        cache: 'no-store',
      }),
    ]);

    let v3Json: any = null;
    let legacyJson: any = null;

    if (v3Res.status === 'fulfilled' && v3Res.value.ok) {
      try {
        v3Json = await v3Res.value.json();
      } catch {
        // Ignore parse error
      }
    }

    if (legacyRes.status === 'fulfilled' && legacyRes.value.ok) {
      try {
        legacyJson = await legacyRes.value.json();
      } catch {
        // Ignore parse error
      }
    }

    if (v3Json || legacyJson) {
      applyGravatarDirectPayload(v3Json, legacyJson);
      lastGravatarSyncMs = Date.now();
      return true;
    }
    return false;
  })().finally(() => {
    gravatarSyncInFlight = null;
  });

  return gravatarSyncInFlight;
}

async function syncFromMrxshahinBackend(): Promise<void> {
  const [gravatarOk, profileRes, rssRes, policiesRes] = await Promise.allSettled([
    syncGravatarProfileLive(true),
    fetch(UPSTREAM_GRAVATAR_API, {
      signal: AbortSignal.timeout(5000),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0', Accept: 'application/json' },
    }),
    fetch(UPSTREAM_RSS_URL, {
      signal: AbortSignal.timeout(6000),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0', Accept: 'application/xml,text/xml' },
    }),
    fetch(UPSTREAM_POLICIES_URL, {
      signal: AbortSignal.timeout(4500),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0' },
    }),
  ]);

  let upstreamOk = gravatarOk.status === 'fulfilled' && gravatarOk.value;

  if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
    try {
      const json = await profileRes.value.json();
      applyUpstreamProfilePayload(json);
    } catch {
      // Ignore parse warning
    }
  }

  if (rssRes.status === 'fulfilled' && rssRes.value.ok) {
    try {
      const xml = await rssRes.value.text();
      const parsed = parseRssXml(xml);
      websitesState.upstreamStatus = {
        ...websitesState.upstreamStatus,
        sourceUrl: '',
        rssBuildDate: parsed.buildDate,
        rssItems: parsed.items,
      };

      // Update website descriptions dynamically when RSS items match
      websitesState.websites = websitesState.websites.map((site) => {
        const matched = parsed.items.find((it) => {
          try {
            return new URL(it.link).hostname === site.domain && !it.link.includes('#cv-download');
          } catch {
            return false;
          }
        });
        if (matched && matched.description) {
          return { ...site, description: matched.description };
        }
        return site;
      });
      upstreamOk = true;
    } catch {
      // Ignore RSS parse warning
    }
  }

  if (policiesRes.status === 'fulfilled' && policiesRes.value.ok) {
    try {
      const pJson = await policiesRes.value.json();
      if (typeof pJson?.effectiveYear === 'number') {
        websitesState.yearlySystem = {
          ...computeYearlyData(),
          currentYear: pJson.effectiveYear,
        };
      }
    } catch {
      // Ignore
    }
  }

  websitesState.upstreamStatus = {
    ...websitesState.upstreamStatus,
    sourceUrl: '',
    connected: upstreamOk || websitesState.upstreamStatus.sseActive,
    lastSyncedAt: new Date().toISOString(),
  };
}

// Persistent real-time SSE bridge for upstream events
async function connectUpstreamSseBridge() {
  while (true) {
    try {
      const res = await fetch(UPSTREAM_GRAVATAR_STREAM, {
        headers: {
          Accept: 'text/event-stream',
          'User-Agent': 'MRS-Realtime-Bridge/1.0',
        },
      });

      if (!res.ok || !res.body) {
        throw new Error(`Upstream SSE HTTP ${res.status}`);
      }

      websitesState.upstreamStatus = {
        ...websitesState.upstreamStatus,
        connected: true,
        sseActive: true,
      };

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';

        for (const rawEvent of events) {
          const dataLines = rawEvent
            .split('\n')
            .filter((line) => line.startsWith('data:'))
            .map((line) => line.slice(5).trim());

          if (dataLines.length === 0) continue;
          try {
            const payload = JSON.parse(dataLines.join('\n'));
            if (payload?.profile) {
              applyUpstreamProfilePayload(payload);
              websitesState.upstreamStatus = {
                ...websitesState.upstreamStatus,
                connected: true,
                sseActive: true,
                healthStatus: 'ok',
              };
              saveWebsitesCache();
              broadcastWebsitesUpdate('websites_update', websitesState);
            }
          } catch {
            // Ignore heartbeat or partial JSON frames
          }
        }
      }
    } catch {
      websitesState.upstreamStatus = {
        ...websitesState.upstreamStatus,
        sseActive: false,
      };
    }

    await new Promise((r) => setTimeout(r, 12000));
  }
}

async function fetchBloggerPosts(feedUrl: string): Promise<WebsitePostPreview[]> {
  try {
    const res = await fetch(feedUrl, {
      signal: AbortSignal.timeout(4500),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0' },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const entries = json?.feed?.entry;
    if (!Array.isArray(entries)) return [];

    return entries.slice(0, 3).map((entry: any) => {
      const rawTitle = entry?.title?.$t || 'Untitled Post';
      const alternateLink = Array.isArray(entry?.link)
        ? entry.link.find((l: any) => l.rel === 'alternate')?.href
        : undefined;
      const publishedRaw = entry?.published?.$t || '';
      const published = publishedRaw ? publishedRaw.slice(0, 10) : '';
      return {
        title: decodeHtmlEntities(rawTitle).trim(),
        url: alternateLink || feedUrl.replace('/feeds/posts/default?alt=json&max-results=3', ''),
        published,
      };
    });
  } catch {
    return [];
  }
}

async function probeSingleWebsite(site: EcosystemWebsite): Promise<EcosystemWebsite> {
  const start = Date.now();
  let status: EcosystemWebsite['status'] = 'standby';
  let httpCode: number | undefined;
  let latencyMs: number | undefined;
  let liveTitle = site.liveTitle;
  let description = site.description;
  let latestPosts = site.latestPosts || [];

  try {
    const res = await fetch(site.url, {
      signal: AbortSignal.timeout(4500),
      headers: {
        'User-Agent': 'MRS-Realtime-Bridge/1.0',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    latencyMs = Date.now() - start;
    httpCode = res.status;

    if (res.ok || (res.status >= 300 && res.status < 400)) {
      status = 'online';
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        const html = (await res.text()).slice(0, 60000);
        const meta = extractMetaFromHtml(html);
        if (meta.title && meta.title.length > 2) {
          liveTitle = meta.title;
        }
        if (meta.description && meta.description.length > 25 && !site.isCore) {
          description = meta.description;
        }
      }
    }
  } catch {
    status = 'standby';
  }

  const effectiveFeedUrl =
    site.feedUrl ||
    (site.domain.endsWith('.blogspot.com')
      ? `https://${site.domain}/feeds/posts/default?alt=json&max-results=3`
      : undefined);

  if (effectiveFeedUrl) {
    const posts = await fetchBloggerPosts(effectiveFeedUrl);
    if (posts.length > 0) {
      latestPosts = posts;
    }
  }

  return {
    ...site,
    status,
    httpCode,
    latencyMs,
    liveTitle,
    description,
    latestPosts,
    lastChecked: new Date().toISOString(),
  };
}

let probeInFlight: Promise<WebsitesHubState> | null = null;

async function syncAllWebsites(): Promise<WebsitesHubState> {
  if (probeInFlight) return probeInFlight;

  probeInFlight = (async () => {
    try {
      await syncFromMrxshahinBackend();
      const updatedSites = await Promise.all(websitesState.websites.map((s) => probeSingleWebsite(s)));
      const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
      websitesState = {
        ...websitesState,
        siteName: activeSiteName,
        sourceUrl: '',
        websites: updatedSites,
        lastUpdated: new Date().toISOString(),
        syncCycle: websitesState.syncCycle + 1,
        yearlySystem: computeYearlyData(activeSiteName),
      };
      saveWebsitesCache();
      broadcastWebsitesUpdate('websites_update', websitesState);
    } finally {
      probeInFlight = null;
    }
    return websitesState;
  })();

  return probeInFlight;
}

const GRAVATAR_REALTIME_INTERVAL_MS = 15 * 1000;
const PROBE_INTERVAL_MS = 45 * 1000;
const YEARLY_CHECK_INTERVAL_MS = 60 * 60 * 1000;
const SSE_PING_INTERVAL_MS = 25 * 1000;

// ================= API ROUTES =================

app.get(['/health', '/api/health'], (_req, res) => {
  res.status(200).json({
    status: 'ok',
    siteName: websitesState.siteName,
    port: PORT,
    syncCycle: websitesState.syncCycle,
  });
});

app.get('/api/websites', async (_req, res) => {
  await syncGravatarProfileLive(false).catch(() => false);
  websitesState.yearlySystem = computeYearlyData();
  res.setHeader('Cache-Control', 'no-store');
  res.json({
    success: true,
    data: websitesState,
  });
});

app.get('/api/mrxshahin/status', (_req, res) => {
  res.json({
    success: true,
    siteName: websitesState.siteName,
    upstream: websitesState.upstreamStatus,
    syncCycle: websitesState.syncCycle,
    connectedClients: sseClients.size,
  });
});

app.get('/api/websites/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseClients.add(res);
  req.on('close', () => {
    sseClients.delete(res);
  });

  await syncGravatarProfileLive(false).catch(() => false);
  if (req.destroyed || !sseClients.has(res)) return;

  websitesState.yearlySystem = computeYearlyData();
  res.write(`data: ${JSON.stringify({ type: 'initial', data: websitesState })}\n\n`);
});

app.post('/api/websites/sync', async (_req, res) => {
  try {
    const updated = await syncAllWebsites();
    res.json({
      success: true,
      data: updated,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err?.message || 'Sync failed',
      data: websitesState,
    });
  }
});

app.post('/api/websites', async (req, res) => {
  try {
    const { url, name, category, description } = req.body || {};
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ success: false, error: 'Valid website URL is required.' });
    }

    let parsedUrl: URL;
    try {
      const normalized = url.trim().startsWith('http') ? url.trim() : `https://${url.trim()}`;
      parsedUrl = new URL(normalized);
      if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') {
        throw new Error('Invalid protocol');
      }
    } catch {
      return res.status(400).json({ success: false, error: 'Please enter a valid http/https website URL.' });
    }

    const domain = parsedUrl.hostname;
    const cleanUrl = parsedUrl.toString().replace(/\/$/, '');
    const duplicate = websitesState.websites.find(
      (s) => s.domain.toLowerCase() === domain.toLowerCase() && s.url.replace(/\/$/, '') === cleanUrl
    );
    if (duplicate) {
      return res.status(409).json({ success: false, error: 'This website is already in the slideshow.' });
    }

    const imageKeys: EcosystemWebsite['imageKey'][] = ['flagship', 'admin', 'tech', 'charity'];
    const nextImageKey = imageKeys[websitesState.websites.length % imageKeys.length];

    const draftSite: EcosystemWebsite = {
      id: `site-${Date.now().toString(36)}`,
      name: String(name || domain).trim().slice(0, 80) || domain,
      url: cleanUrl,
      domain,
      category: String(category || 'Connected Property').trim().slice(0, 40) || 'Connected Property',
      description:
        String(description || '').trim().slice(0, 260) ||
        'Web property synchronized in real time by M R S.',
      imageKey: nextImageKey,
      status: 'probing',
      lastChecked: new Date().toISOString(),
      isCore: false,
      latestPosts: [],
    };

    const probedSite = await probeSingleWebsite(draftSite);
    websitesState = {
      ...websitesState,
      websites: [...websitesState.websites, probedSite],
      lastUpdated: new Date().toISOString(),
      syncCycle: websitesState.syncCycle + 1,
      yearlySystem: computeYearlyData(),
    };
    saveWebsitesCache();
    broadcastWebsitesUpdate('websites_update', websitesState);

    res.status(201).json({
      success: true,
      site: probedSite,
      data: websitesState,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Unable to add website.' });
  }
});

app.delete('/api/websites/:id', (req, res) => {
  const { id } = req.params;
  const target = websitesState.websites.find((s) => s.id === id);
  if (!target) {
    return res.status(404).json({ success: false, error: 'Website not found.' });
  }
  if (target.isCore) {
    return res.status(400).json({ success: false, error: 'Core M R S portfolio websites cannot be removed.' });
  }

  websitesState = {
    ...websitesState,
    websites: websitesState.websites.filter((s) => s.id !== id),
    lastUpdated: new Date().toISOString(),
    syncCycle: websitesState.syncCycle + 1,
    yearlySystem: computeYearlyData(),
  };
  saveWebsitesCache();
  broadcastWebsitesUpdate('websites_update', websitesState);

  res.json({ success: true, data: websitesState });
});

app.post('/api/inquiries', (req, res) => {
  const { name, email, topic, message } = req.body || {};
  const cleanName = String(name || '').trim();
  const cleanEmail = String(email || '').trim();
  const cleanTopic = String(topic || 'General Inquiry').trim();
  const cleanMessage = String(message || '').trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in your name, email address, and message.',
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address for follow-up.',
    });
  }

  const record = {
    id: `inq-${Date.now().toString(36)}`,
    name: cleanName.slice(0, 100),
    email: cleanEmail.slice(0, 140),
    topic: cleanTopic.slice(0, 80),
    message: cleanMessage.slice(0, 2000),
    receivedAt: new Date().toISOString(),
  };

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    let existing: any[] = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      existing = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'));
      if (!Array.isArray(existing)) existing = [];
    }
    existing.push(record);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existing.slice(-200), null, 2), 'utf-8');
  } catch (err) {
    console.error('[Inquiries] Save warning:', err);
  }

  res.status(201).json({
    success: true,
    id: record.id,
    receivedAt: record.receivedAt,
  });
});

app.get('/api/system/yearly', (_req, res) => {
  res.json({
    success: true,
    data: computeYearlyData(),
  });
});

app.get('/api/logo', (_req, res) => {
  if (fs.existsSync(LOGO_FILE)) {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    fs.createReadStream(LOGO_FILE).pipe(res);
  } else {
    res.status(404).json({ error: 'Logo not found' });
  }
});

async function startServer() {
  // Explicit API 404 before static/SPA path redirection
  app.use('/api/*', (_req, res) => {
    res.status(404).json({ success: false, error: 'API endpoint not found.' });
  });

  // Canonical section & /dist path redirection for production hosting
  const sectionRedirects: Record<string, string> = {
    '/websites': '/#websites-section',
    '/credentials': '/#about-section',
    '/about': '/#about-section',
    '/skills': '/#skills-section',
    '/contact': '/#contact-section',
  };

  for (const [routePath, anchorTarget] of Object.entries(sectionRedirects)) {
    app.get(routePath, (_req, res) => {
      res.redirect(302, anchorTarget);
    });
  }

  app.get(['/dist', '/dist/*'], (_req, res) => {
    res.redirect(301, '/');
  });

  if (!isProd) {
    const vitePromise = import('vite').then(({ createServer: createViteServer }) =>
      createViteServer({
        server: {
          middlewareMode: true,
          hmr: false,
          watch: null,
        },
        appType: 'spa',
      })
    );
    vitePromise.catch((err) => {
      console.error('[Vite Middleware Startup Error]', err);
    });
    app.use(async (req, res, next) => {
      try {
        const vite = await vitePromise;
        vite.middlewares(req, res, next);
      } catch (err) {
        next(err);
      }
    });
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir, { maxAge: '1h', index: 'index.html' }));
    app.get('*', (req, res) => {
      if (req.path !== '/' && req.path.endsWith('/')) {
        return res.redirect(301, req.path.slice(0, -1));
      }
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  const httpServer = app.listen(PORT, '0.0.0.0', () => {
    const hostDisplay = APP_URL || `http://0.0.0.0:${PORT}`;
    console.log(`[Server] M R S backend running at ${hostDisplay} (port ${PORT})`);

    // Start background sync and upstream SSE bridge after port 3000 is bound
    syncAllWebsites().catch(() => {});
    connectUpstreamSseBridge().catch(() => {});

    setInterval(async () => {
      const beforeSnapshot = JSON.stringify(websitesState.adminProfile);
      const updated = await syncGravatarProfileLive(true).catch(() => false);
      if (updated && JSON.stringify(websitesState.adminProfile) !== beforeSnapshot) {
        saveWebsitesCache();
        broadcastWebsitesUpdate('websites_update', websitesState);
      }
    }, GRAVATAR_REALTIME_INTERVAL_MS);

    setInterval(() => {
      syncAllWebsites().catch((err) => console.error('[Live Prober Error]', err));
    }, PROBE_INTERVAL_MS);

    setInterval(() => {
      const yearly = computeYearlyData();
      if (yearly.currentYear !== websitesState.yearlySystem.currentYear) {
        websitesState = {
          ...websitesState,
          yearlySystem: yearly,
          lastUpdated: new Date().toISOString(),
        };
        saveWebsitesCache();
        broadcastWebsitesUpdate('websites_update', websitesState);
      }
    }, YEARLY_CHECK_INTERVAL_MS);

    setInterval(() => {
      const ping = ': ping\n\n';
      for (const client of sseClients) {
        try {
          client.write(ping);
        } catch {
          sseClients.delete(client);
        }
      }
    }, SSE_PING_INTERVAL_MS);
  });

  httpServer.on('error', (err) => {
    console.error('[Server Listen Error]', err);
    process.exit(1);
  });
}

startServer().catch((err) => {
  console.error('[Server Startup Error]', err);
  process.exit(1);
});
