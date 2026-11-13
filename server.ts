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

const UPSTREAM_BASE = (process.env.UPSTREAM_SOURCE_URL || 'https://mrxshahin.ai.studio').replace(/\/$/, '');
const UPSTREAM_GRAVATAR_API = `${UPSTREAM_BASE}/api/gravatar?username=mrxshahin&email=mr216873@gmail.com`;
const UPSTREAM_GRAVATAR_STREAM = `${UPSTREAM_BASE}/api/gravatar/stream?username=mrxshahin&email=mr216873@gmail.com`;
const UPSTREAM_RSS_URL = `${UPSTREAM_BASE}/rss.xml`;
const UPSTREAM_HEALTH_URL = `${UPSTREAM_BASE}/api/health`;
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

function computeYearlyData(): YearlySystemData {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  return {
    currentYear,
    establishedYear: ESTABLISHED_YEAR,
    copyrightNotice: `© ${currentYear} M R S. All rights reserved.`,
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
  liveServices: [],
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
    { label: 'X (Twitter)', handle: '@Mrshahinx', url: 'https://x.com/Mrshahinx' },
    { label: 'Bluesky', handle: 'mrxshahin.bsky.social', url: 'https://bsky.app/profile/mrxshahin.bsky.social' },
    { label: 'WordPress', handle: 'mrxshahin.wordpress.com', url: 'https://mrxshahin.wordpress.com' },
    { label: 'Gravatar', handle: 'gravatar.com/mrxshahin', url: 'https://gravatar.com/mrxshahin' },
    { label: 'Goodreads', handle: 'mrxshahin', url: 'https://www.goodreads.com/mrxshahin' },
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
  sourceUrl: UPSTREAM_BASE,
  upstreamStatus: {
    sourceUrl: UPSTREAM_BASE,
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

function parseGravatarBioServices(markdownBio: string): LiveServiceCategory[] {
  if (!markdownBio || typeof markdownBio !== 'string') return [];
  const categories: LiveServiceCategory[] = [];
  const lines = markdownBio.split(/\r?\n/);
  let current: LiveServiceCategory | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('###') && current) {
      categories.push(current);
      current = null;
      continue;
    }

    const catMatch = line.match(/^[✅🔹📌💼]\s*\*\*(.+?)\*\*/);
    if (catMatch) {
      if (current && current.items.length > 0) {
        categories.push(current);
      }
      current = { title: catMatch[1].trim(), items: [] };
      continue;
    }

    if (current && line.startsWith('* ')) {
      current.items.push(line.slice(2).replace(/\*\*/g, '').trim());
    }
  }

  if (current && current.items.length > 0) {
    categories.push(current);
  }
  return categories;
}

function applyUpstreamProfilePayload(payload: any) {
  const remoteProfile = payload?.profile;
  if (!remoteProfile || typeof remoteProfile !== 'object') return;

  const syncedAt = payload.syncedAt || new Date().toISOString();
  const prev = websitesState.adminProfile;

  // Clean roleTitle and tagline if combined on upstream
  let roleTitle = prev.roleTitle;
  let tagline = prev.tagline;
  if (typeof remoteProfile.roleTitle === 'string' && remoteProfile.roleTitle.trim()) {
    const parts = remoteProfile.roleTitle.split('|').map((p: string) => p.trim()).filter(Boolean);
    if (parts.length > 3 && parts[parts.length - 1].toLowerCase().includes('helping')) {
      tagline = parts.pop()!;
      roleTitle = parts.join(' | ');
    } else {
      roleTitle = remoteProfile.roleTitle.trim();
    }
  }

  // Strictly sanitize verifiedAccounts (filter out any malformed HTML entries)
  let verifiedAccounts = prev.verifiedAccounts;
  if (Array.isArray(remoteProfile.verifiedAccounts)) {
    const cleanAccounts = remoteProfile.verifiedAccounts
      .filter((acc: any) => {
        const u = String(acc?.url || '').trim();
        return u.startsWith('https://') && u.length < 160 && !/[\s<>]/.test(u);
      })
      .map((acc: any) => {
        const u = String(acc.url).trim();
        const label = String(acc.service_label || acc.label || 'Profile').trim();
        let handle = u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
        if (handle.includes('x.com/')) handle = `@${handle.split('x.com/')[1]}`;
        return { label, handle, url: u };
      });

    if (cleanAccounts.length > 0) {
      verifiedAccounts = cleanAccounts;
    }
  }

  // Normalize interests cleanly from strings or { name } objects
  let interests = prev.interests;
  if (Array.isArray(remoteProfile.interests) && remoteProfile.interests.length > 0) {
    const normalized = remoteProfile.interests
      .map((item: any) => (typeof item === 'string' ? item.trim() : String(item?.name || '').trim()))
      .filter(Boolean);
    if (normalized.length > 0) {
      interests = normalized;
    }
  }

  // Parse live markdown service blocks from upstream gravatarBio
  const liveServices =
    typeof remoteProfile.gravatarBio === 'string'
      ? parseGravatarBioServices(remoteProfile.gravatarBio)
      : prev.liveServices;

  const socials = {
    ...prev.socials,
    ...(remoteProfile.socials && typeof remoteProfile.socials === 'object' ? remoteProfile.socials : {}),
  };

  websitesState = {
    ...websitesState,
    siteName: 'M R S',
    upstreamStatus: {
      ...websitesState.upstreamStatus,
      connected: true,
      lastSyncedAt: syncedAt,
    },
    adminProfile: {
      ...prev,
      siteName: 'M R S',
      roleTitle,
      tagline,
      location: typeof remoteProfile.location === 'string' && remoteProfile.location.trim()
        ? remoteProfile.location.trim()
        : prev.location,
      avatarUrl:
        typeof remoteProfile.avatarUrl === 'string' && remoteProfile.avatarUrl.startsWith('https://')
          ? remoteProfile.avatarUrl
          : prev.avatarUrl,
      liveServices: liveServices.length > 0 ? liveServices : prev.liveServices,
      interests,
      socials,
      verifiedAccounts,
    },
    lastUpdated: new Date().toISOString(),
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

async function syncFromMrxshahinBackend(): Promise<void> {
  const [profileRes, rssRes, healthRes, policiesRes] = await Promise.allSettled([
    fetch(UPSTREAM_GRAVATAR_API, {
      signal: AbortSignal.timeout(6000),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0', Accept: 'application/json' },
    }),
    fetch(UPSTREAM_RSS_URL, {
      signal: AbortSignal.timeout(6000),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0', Accept: 'application/xml,text/xml' },
    }),
    fetch(UPSTREAM_HEALTH_URL, {
      signal: AbortSignal.timeout(4500),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0' },
    }),
    fetch(UPSTREAM_POLICIES_URL, {
      signal: AbortSignal.timeout(4500),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0' },
    }),
  ]);

  let upstreamOk = false;

  if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
    try {
      const json = await profileRes.value.json();
      applyUpstreamProfilePayload(json);
      upstreamOk = true;
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

  if (healthRes.status === 'fulfilled' && healthRes.value.ok) {
    try {
      const hJson = await healthRes.value.json();
      websitesState.upstreamStatus = {
        ...websitesState.upstreamStatus,
        healthStatus: String(hJson?.status || 'ok'),
        connected: true,
      };
      upstreamOk = true;
    } catch {
      // Ignore
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
    connected: upstreamOk || websitesState.upstreamStatus.sseActive,
    lastSyncedAt: new Date().toISOString(),
  };
}

// Persistent real-time SSE bridge connected directly to https://mrxshahin.ai.studio
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
      websitesState = {
        ...websitesState,
        siteName: 'M R S',
        sourceUrl: UPSTREAM_BASE,
        websites: updatedSites,
        lastUpdated: new Date().toISOString(),
        syncCycle: websitesState.syncCycle + 1,
        yearlySystem: computeYearlyData(),
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

const PROBE_INTERVAL_MS = 45 * 1000;
const YEARLY_CHECK_INTERVAL_MS = 60 * 60 * 1000;
const SSE_PING_INTERVAL_MS = 25 * 1000;

// ================= API ROUTES =================

app.get('/api/websites', (_req, res) => {
  websitesState.yearlySystem = computeYearlyData();
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

app.get('/api/websites/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  websitesState.yearlySystem = computeYearlyData();
  res.write(`data: ${JSON.stringify({ type: 'initial', data: websitesState })}\n\n`);

  sseClients.add(res);
  req.on('close', () => {
    sseClients.delete(res);
  });
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
    return res.status(400).json({ success: false, error: 'Core mrxshahin.ai.studio websites cannot be removed.' });
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

app.get(['/api/blogger-theme', '/blogger-theme.xml'], (req, res) => {
  const themeFile = path.join(__dirname, 'public', 'blogger-theme.xml');
  if (fs.existsSync(themeFile)) {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    if (req.query.download === '1') {
      res.setHeader('Content-Disposition', 'attachment; filename="mrs-blogger-theme.xml"');
    }
    fs.createReadStream(themeFile).pipe(res);
  } else {
    res.status(404).json({ error: 'Blogger theme XML not found' });
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
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
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

  app.listen(PORT, '0.0.0.0', () => {
    const hostDisplay = APP_URL || `http://0.0.0.0:${PORT}`;
    console.log(`[Server] M R S backend connected to ${UPSTREAM_BASE} running at ${hostDisplay} (port ${PORT})`);

    // Start background sync and upstream SSE bridge after port 3000 is bound
    syncAllWebsites().catch(() => {});
    connectUpstreamSseBridge().catch(() => {});

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
}

startServer().catch((err) => {
  console.error('[Server Startup Error]', err);
  process.exit(1);
});
