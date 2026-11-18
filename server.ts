import express, { type Response } from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { MRS_SERVICES_CATALOG, SERVICES_PORTAL_URL } from './src/data/servicesCatalog';
import { CURATED_SITE_DETAILS } from './src/data/siteDetailsData';
import type { CatalogServiceItem, ServicesPortalStatus } from './src/types';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(
  (process.env.RENDER ? process.env.PORT : '') ||
    process.env.APP_PORT ||
    process.env.DEFAULT_APP_PORT ||
    '3000',
  10
);
const isProd = process.env.NODE_ENV === 'production';
const APP_URL = (process.env.APP_URL || process.env.RENDER_EXTERNAL_URL || '').replace(/\/$/, '');

app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const WEBSITES_CACHE_FILE = path.join(DATA_DIR, 'websites_cache.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const LOGO_FILE = path.join(__dirname, 'public', 'site_logo.svg');

function resolveGravatarIdentifier(raw: string): string {
  const cleaned = raw.trim();
  if (!cleaned) return 'mrxshahin';
  if (cleaned.includes('@')) {
    return crypto.createHash('sha256').update(cleaned.toLowerCase()).digest('hex');
  }
  return cleaned;
}

const GRAVATAR_IDENTIFIER = resolveGravatarIdentifier(
  process.env.GRAVATAR_USERNAME || process.env.GRAVATAR_EMAIL || 'mrxshahin'
);
const GRAVATAR_API_KEY = (
  process.env.GRAVATAR_API_KEY ||
  process.env.GRAVATAR_KEY ||
  process.env.GRAVATAR_TOKEN ||
  process.env.GRAVATAR ||
  process.env.GRAVATAR_SECRET ||
  ''
).trim();
const GRAVATAR_V3_PROFILE_URL = `https://api.gravatar.com/v3/profiles/${encodeURIComponent(GRAVATAR_IDENTIFIER)}`;
const GRAVATAR_PUBLIC_JSON_URL = `https://gravatar.com/${encodeURIComponent(GRAVATAR_IDENTIFIER)}.json`;

const UPSTREAM_BASE = (process.env.UPSTREAM_SOURCE_URL || 'https://mrxshahin.ai.studio').replace(/\/$/, '');
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
  overview?: string;
  features?: string[];
  techHighlights?: string[];
  audience?: string;
  liveTitle?: string;
  imageKey: 'flagship' | 'admin' | 'tech' | 'charity';
  status: 'online' | 'standby' | 'probing';
  httpCode?: number;
  latencyMs?: number;
  lastChecked: string;
  isCore: boolean;
  isCustom?: boolean;
  hasProfileDescription?: boolean;
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
  authenticated?: boolean;
  rateLimitRemaining?: number;
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
  timezone?: string;
  headerImage?: string;
  avatarUrl: string;
  avatarAltText?: string;
  pronouns?: string;
  pronunciation?: string;
  lastProfileEdit?: string;
  certification: string;
  availabilityNote: string;
  bioParagraphs: string[];
  whyWorkWithMe?: string[];
  backgroundHighlights?: string[];
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
  servicesCatalog: CatalogServiceItem[];
  servicesPortalStatus: ServicesPortalStatus;
  lastUpdated: string;
  syncCycle: number;
  yearlySystem: YearlySystemData;
}

const DEFAULT_ESTABLISHED_YEAR = 2018;

function computeYearlyData(siteName = 'M R S', establishedYear = DEFAULT_ESTABLISHED_YEAR): YearlySystemData {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  return {
    currentYear,
    establishedYear,
    copyrightNotice: `© ${currentYear} ${siteName}. All rights reserved.`,
    nextRolloverDate: new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0)).toISOString(),
  };
}

const BASE_ADMIN_PROFILE: AdminProfileData = {
  siteName: 'M R S',
  roleTitle: 'Available for Remote IT Support, Virtual Assistance & Administrative Work',
  tagline: 'Available for Remote IT Support, Virtual Assistance & Administrative Work',
  location: 'Global / Remote',
  timezone: 'GMT+06:00',
  headerImage: 'https://1.gravatar.com/userimage/140624186/eb80b95de8da05aca3d1b6e47836f736?size=1024',
  avatarUrl: './mrs_profile_avatar.jpg',
  avatarAltText: 'M R S official profile portrait',
  pronouns: '',
  pronunciation: '',
  lastProfileEdit: '',
  certification: '360-hour computer systems course',
  availabilityNote:
    'Whether you need a remote IT support assistant, virtual assistant, website content manager, technical writer, online researcher, or general digital operations support, I am open to discussing how I can help. I am happy to consider both ongoing support arrangements and clearly defined, project-based tasks that match my skills.',
  bioParagraphs: [
    'I help businesses, entrepreneurs, and individuals simplify their daily operations, solve technical problems, manage digital tasks, and stay productive — without the overhead of hiring a full-time employee.',
    'With years of independent online work experience and a strong interest in technology, web solutions, and digital productivity, I can support a wide range of technical, administrative, and content-related tasks remotely.',
  ],
  whyWorkWithMe: [
    'I value accuracy, reliability, clear communication, and independent problem-solving. I am comfortable working remotely, handling asynchronous tasks, and organizing my workload around agreed deadlines.',
    'I focus on understanding the desired outcome, finding a practical way to achieve it, and delivering organized work with minimal unnecessary back-and-forth.',
    'I am particularly interested in opportunities where technology, administration, research, writing, and digital solutions come together.',
  ],
  backgroundHighlights: [
    'Certified: 360-hour computer systems course',
    'Technical writing: Writing technology guides and solutions since 2018',
    'Remote work: Years of independent online work experience',
    'Work style: Self-directed, detail-oriented, adaptable, and comfortable across time zones',
  ],
  whatICanHelpWith: [
    'IT Support & Technical Troubleshooting',
    'Virtual Assistance & Administrative Support',
    'Website Management & Digital Content',
    'Technical Writing & Documentation',
    'Online Research & Digital Problem-Solving',
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
        'CMS and web content management',
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
      role: 'Available for Remote IT Support, Virtual Assistance & Administrative Work',
      period: '2018 – Present',
      location: 'Global / Remote',
      highlights: [
        'Certified: 360-hour computer systems course',
        'Technical writing: Writing technology guides and solutions since 2018',
        'Remote work: Years of independent online work experience',
        'Work style: Self-directed, detail-oriented, adaptable, and comfortable across time zones',
      ],
    },
  ],
  skillsList: [
    {
      category: 'IT Support & Technical Troubleshooting',
      skills: [
        'Windows PC troubleshooting and basic system maintenance',
        'Android device support and app-related troubleshooting',
        'Browser, internet connectivity, Wi-Fi, and common software issues',
        'Software installation, configuration, and basic technical guidance',
        'Step-by-step technical documentation and user support',
      ],
    },
    {
      category: 'Virtual Assistance & Administrative Support',
      skills: [
        'Data entry, data organization, and document formatting',
        'Microsoft Word, Excel, PowerPoint, and office productivity tasks',
        'Email management, professional correspondence, and inbox organization',
        'Online research, information collection, and data verification',
        'Form filling, job application assistance, and document preparation',
      ],
    },
    {
      category: 'Website Management & Digital Content',
      skills: [
        'Website content updates and basic website administration',
        'CMS and web content management',
        'SEO-friendly article writing and on-page content optimization',
        'Website testing, troubleshooting, and basic usability checks',
        'AI-assisted content creation, editing, and proofreading',
      ],
    },
    {
      category: 'Technical Writing & Documentation',
      skills: [
        'Writing technology guides, tutorials, and how-to articles',
        'Creating step-by-step troubleshooting instructions',
        'Preparing FAQs, user guides, and knowledge-base articles',
        'Rewriting, proofreading, and improving existing content',
      ],
    },
    {
      category: 'Technical Interests & Focus Areas',
      skills: ['Web Development', 'web3', 'ethical hacking', 'Social Sciences', 'Remote Working'],
    },
  ],
  coursesCertifications: [
    '360-hour computer systems course',
    'Writing technology guides and solutions since 2018',
    'Years of independent online work experience',
  ],
  education: [],
  languages: [{ name: 'English', level: 'Proficient' }],
  interests: ['Web Development', 'web3', 'ethical hacking', 'Social Sciences', 'Remote Working'],
  socials: {
    email: '',
    phone: '',
    gravatarUrl: '',
    githubUrl: 'https://github.com/mrmahbubur',
    linkedinUrl: 'https://www.linkedin.com/in/mrmahbubur',
    xUrl: 'https://x.com/Mrshahinx',
    blueskyUrl: 'https://bsky.app/profile/mrxshahin.bsky.social',
    calendlyUrl: 'https://calendly.com/mrxshahin',
    contactForm: 'https://mrs-services.ai.studio/',
    goodreadsUrl: 'https://www.goodreads.com/mrxshahin',
  },
  verifiedAccounts: [
    { label: 'X', handle: '@Mrshahinx', url: 'https://x.com/Mrshahinx' },
    { label: 'GitHub', handle: 'mrmahbubur', url: 'https://github.com/mrmahbubur' },
    { label: 'Bluesky', handle: 'mrxshahin.bsky.social', url: 'https://bsky.app/profile/mrxshahin.bsky.social' },
    { label: 'LinkedIn', handle: 'mrmahbubur', url: 'https://www.linkedin.com/in/mrmahbubur' },
    { label: 'Goodreads', handle: 'goodreads.com/mrxshahin', url: 'https://www.goodreads.com/mrxshahin' },
  ],
};

const DEFAULT_WEBSITES: EcosystemWebsite[] = [
  {
    id: 'proj-mrs-services',
    name: 'All Services',
    url: 'https://mrs-services.ai.studio/',
    domain: 'mrs-services.ai.studio',
    ...CURATED_SITE_DETAILS['mrs-services.ai.studio'],
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'proj-3-iptv-web',
    name: 'IPTV WEB',
    url: 'https://shahin-iptv.ai.studio',
    domain: 'shahin-iptv.ai.studio',
    ...CURATED_SITE_DETAILS['shahin-iptv.ai.studio'],
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'site-profile-a7b60340',
    name: 'Apps Store',
    url: 'https://mrmahbubur.github.io/APPS-STORE/',
    domain: 'mrmahbubur.github.io',
    ...CURATED_SITE_DETAILS['mrmahbubur.github.io/apps-store'],
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'site-profile-3bb884d2',
    name: 'Private C N',
    url: 'https://mrs-pcn.ai.studio/',
    domain: 'mrs-pcn.ai.studio',
    ...CURATED_SITE_DETAILS['mrs-pcn.ai.studio'],
    hasProfileDescription: true,
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'site-profile-067f4942',
    name: 'Camellia Shop',
    url: 'https://mrmahbubur.github.io/Camellia-Shop/',
    domain: 'mrmahbubur.github.io',
    ...CURATED_SITE_DETAILS['mrmahbubur.github.io/camellia-shop'],
    hasProfileDescription: true,
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'site-profile-f58418d3',
    name: 'Charity Project',
    url: 'https://mrmahbubur.github.io/Charity-Foundation/',
    domain: 'mrmahbubur.github.io',
    ...CURATED_SITE_DETAILS['mrmahbubur.github.io/charity-foundation'],
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'site-profile-11431945',
    name: 'Camellia Ai',
    url: 'https://mrmahbubur.github.io/Camellia-Ai/',
    domain: 'mrmahbubur.github.io',
    ...CURATED_SITE_DETAILS['mrmahbubur.github.io/camellia-ai'],
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'site-profile-d8f3fd0c',
    name: 'Cloud',
    url: 'https://mrmahbubur.github.io/Admin/',
    domain: 'mrmahbubur.github.io',
    ...CURATED_SITE_DETAILS['mrmahbubur.github.io/admin'],
    status: 'standby',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
  {
    id: 'proj-6-ai-assistant',
    name: 'Ai Portfolio',
    url: 'https://mrxshahin.ai.studio/',
    domain: 'mrxshahin.ai.studio',
    ...CURATED_SITE_DETAILS['mrxshahin.ai.studio'],
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
  servicesCatalog: MRS_SERVICES_CATALOG,
  servicesPortalStatus: {
    url: SERVICES_PORTAL_URL,
    status: 'standby',
    lastChecked: new Date().toISOString(),
  },
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
    let restoredProfile = websitesState.adminProfile;
    if (parsed?.adminProfile && typeof parsed.adminProfile === 'object') {
      const candidate = parsed.adminProfile as AdminProfileData;
      const cleanSocials = {
        ...BASE_ADMIN_PROFILE.socials,
        ...(candidate.socials || {}),
        email: '',
        phone: '',
        gravatarUrl: '',
      };
      if (/blogspot\.|blogger\.|wordpress\./i.test(cleanSocials.contactForm || '')) {
        cleanSocials.contactForm = BASE_ADMIN_PROFILE.socials.contactForm;
      }
      restoredProfile = {
        ...BASE_ADMIN_PROFILE,
        ...candidate,
        pronouns: '',
        pronunciation: '',
        coursesCertifications: Array.isArray(candidate.coursesCertifications) && candidate.coursesCertifications.length > 0
          ? candidate.coursesCertifications
          : BASE_ADMIN_PROFILE.coursesCertifications,
        education: [],
        socials: cleanSocials,
        verifiedAccounts: Array.isArray(candidate.verifiedAccounts)
          ? candidate.verifiedAccounts.filter(
              (a) =>
                !/blogspot\.|blogger\.|wordpress\.|gravatar\.com\//i.test(String(a?.url || '')) &&
                isSocialAccountOnlyUrl(String(a?.url || ''))
            )
          : BASE_ADMIN_PROFILE.verifiedAccounts,
      };
    }

    const restoredSites = Array.isArray(parsed?.websites)
      ? parsed.websites
          .filter(
            (s: EcosystemWebsite) =>
              !String(s.domain || '').toLowerCase().includes('blogspot.') &&
              !String(s.url || '').toLowerCase().includes('blogspot.') &&
              !String(s.domain || '').toLowerCase().includes('wordpress.') &&
              !String(s.url || '').toLowerCase().includes('wordpress.') &&
              !String(s.domain || '').toLowerCase().includes('upload-apk.com')
          )
          .map((s: EcosystemWebsite) => {
            const k = normalizeVerifiedUrlKey(s.url);
            const detail = CURATED_SITE_DETAILS[k];
            return detail
              ? {
                  ...s,
                  overview: s.overview || detail.overview,
                  features: s.features?.length ? s.features : detail.features,
                  techHighlights: s.techHighlights?.length ? s.techHighlights : detail.techHighlights,
                  audience: s.audience || detail.audience,
                }
              : s;
          })
      : DEFAULT_WEBSITES;

    websitesState = {
      ...websitesState,
      siteName: restoredProfile.siteName || websitesState.siteName,
      adminProfile: restoredProfile,
      websites: restoredSites.length > 0 ? restoredSites : DEFAULT_WEBSITES,
      yearlySystem: computeYearlyData(restoredProfile.siteName || websitesState.siteName),
    };
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
    .replace(/\bWordPress\s*(?:and|&|\/)\s*Blogger\b/gi, 'CMS and web')
    .replace(/\bWordPress\s*(?:and|&|\/)\s*CMS\b/gi, 'CMS and web')
    .replace(/\bWordPress\b/gi, 'CMS')
    .replace(/\bBlogger\b/gi, 'CMS')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseGravatarBioMarkdown(rawBio: string): {
  tagline?: string;
  bioParagraphs: string[];
  whyWorkWithMe: string[];
  backgroundHighlights: string[];
  liveServices: LiveServiceCategory[];
  availabilityNote?: string;
} {
  if (!rawBio || typeof rawBio !== 'string') {
    return { bioParagraphs: [], whyWorkWithMe: [], backgroundHighlights: [], liveServices: [] };
  }

  const normalized = decodeHtmlEntities(rawBio);
  const lines = normalized.split(/\r?\n/);

  let tagline: string | undefined;
  const introParagraphs: string[] = [];
  const whyParagraphs: string[] = [];
  const backgroundHighlights: string[] = [];
  const availabilityParagraphs: string[] = [];
  const liveServices: LiveServiceCategory[] = [];

  type SectionMode = 'intro' | 'services' | 'why' | 'background' | 'availability' | 'other';
  let mode: SectionMode = 'intro';
  let currentService: LiveServiceCategory | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('###') && !line.startsWith('####')) {
      if (currentService && currentService.items.length > 0) {
        liveServices.push(currentService);
        currentService = null;
      }
      const lowerHeading = line.toLowerCase();
      if (
        lowerHeading.includes('what i can do') ||
        lowerHeading.includes('services') ||
        lowerHeading.includes('expertise')
      ) {
        mode = 'services';
      } else if (lowerHeading.includes('why work with me')) {
        mode = 'why';
      } else if (lowerHeading.includes('background')) {
        mode = 'background';
      } else if (lowerHeading.includes('available') || lowerHeading.includes('availability')) {
        mode = 'availability';
      } else if (lowerHeading.includes('about') || lowerHeading.includes('overview')) {
        mode = 'intro';
      } else {
        mode = 'other';
      }
      continue;
    }

    if (mode === 'services') {
      const catMatch =
        line.match(/^[✅🔹📌💼⚡🛠️🔧]\s*\*\*(.+?)\*\*/) ||
        line.match(/^####\s+(.+)/) ||
        line.match(/^\*\*(.+?)\*\*$/);
      if (catMatch) {
        if (currentService && currentService.items.length > 0) {
          liveServices.push(currentService);
        }
        currentService = { title: cleanMarkdownInline(catMatch[1]), items: [] };
        continue;
      }
      if (currentService && (line.startsWith('* ') || line.startsWith('- '))) {
        currentService.items.push(cleanMarkdownInline(line.slice(2)));
        continue;
      }
    }

    if (mode === 'intro') {
      if (/^[🖥️💻🚀✅🔹📌💼]/.test(line)) {
        const cleanedHeadline = cleanMarkdownInline(line);
        if (!tagline && cleanedHeadline.length > 10) {
          tagline = cleanedHeadline;
        }
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

    if (mode === 'background') {
      if (line.startsWith('* ') || line.startsWith('- ')) {
        const cleaned = cleanMarkdownInline(line.slice(2));
        if (cleaned.length > 8) backgroundHighlights.push(cleaned);
      }
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

  return {
    tagline,
    bioParagraphs: introParagraphs.slice(0, 6),
    whyWorkWithMe: whyParagraphs.slice(0, 6),
    backgroundHighlights,
    liveServices,
    availabilityNote: availabilityParagraphs.length > 0 ? availabilityParagraphs.join(' ') : undefined,
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

function stripHtmlTags(raw: string): string {
  return decodeHtmlEntities(raw.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function formatRssDate(rawDate: string): string {
  if (!rawDate) return '';
  const parsed = new Date(rawDate);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }
  return rawDate.slice(0, 16);
}

function parseRssXml(xml: string): { buildDate?: string; items: RssFeedItem[] } {
  const buildDateMatch = xml.match(/<lastBuildDate>([^<]+)<\/lastBuildDate>/i);
  const items: RssFeedItem[] = [];
  const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/gi);

  const readTag = (block: string, tag: string) => {
    const m = block.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, 'i'));
    return m?.[1] ? stripHtmlTags(m[1]) : '';
  };

  for (const match of itemMatches) {
    const block = match[1];
    const title = readTag(block, 'title');
    const link = readTag(block, 'link');
    const description = readTag(block, 'description').slice(0, 260);
    const category = readTag(block, 'category');
    const pubDate = readTag(block, 'pubDate');
    if (
      title &&
      link &&
      !/blogspot\.|wordpress\./i.test(link) &&
      !/blogspot|wordpress/i.test(title)
    ) {
      items.push({ title, link, description, category, pubDate });
    }
  }

  return {
    buildDate: buildDateMatch?.[1]?.trim(),
    items,
  };
}

function inferProjectImageKey(
  url: string,
  label: string
): EcosystemWebsite['imageKey'] {
  const hay = `${url} ${label}`.toLowerCase();
  if (hay.includes('charity') || hay.includes('foundation')) return 'charity';
  if (hay.includes('shop') || hay.includes('service') || hay.includes('cloud') || hay.includes('admin')) {
    return 'admin';
  }
  if (hay.includes('app') || hay.includes('apk') || hay.includes('ai') || hay.includes('pcn')) {
    return 'tech';
  }
  return 'flagship';
}

function isSocialAccountOnlyUrl(url: string): boolean {
  const lower = url.toLowerCase();
  return (
    lower.includes('x.com/') ||
    lower.includes('twitter.com/') ||
    lower.includes('linkedin.com/') ||
    lower.includes('bsky.app/') ||
    lower.includes('goodreads.com/') ||
    lower.includes('calendly.com/') ||
    /^https?:\/\/(www\.)?github\.com\/[^/]+\/?$/.test(lower)
  );
}

function isRestrictedProfileUrl(url: string): boolean {
  const lower = url.toLowerCase();
  return (
    lower.includes('gravatar.com/') ||
    lower.includes('blogspot.') ||
    lower.includes('blogger.') ||
    lower.includes('wordpress.') ||
    lower.includes('profitableratecpmnetwork.') ||
    lower.includes('uplcm.com') ||
    lower.includes('upload-apk.com')
  );
}

function isPersonalLocationText(loc: string): boolean {
  return /sylhet|tajpur|osmaninagar|balaganj|bangladesh\s*\d/i.test(loc);
}

function cleanProfileDescription(raw: any): string {
  if (typeof raw !== 'string') return '';
  const cleaned = cleanMarkdownInline(raw);
  if (!cleaned || /blogspot\.|blogger\b|wordpress\.|\bwordpress\b/i.test(cleaned)) return '';
  return cleaned;
}

function extractCertificationFromHighlights(highlights: string[]): string | undefined {
  for (const hl of highlights) {
    const m = hl.match(/^certified[:\-\s]+(.+)$/i);
    if (m?.[1]) return m[1].trim();
  }
  return undefined;
}

function extractEstablishedYearFromHighlights(highlights: string[]): number {
  for (const hl of highlights) {
    const m = hl.match(/\bsince\s+(20\d{2})\b/i);
    if (m?.[1]) {
      const y = parseInt(m[1], 10);
      if (y >= 2000 && y <= new Date().getFullYear()) return y;
    }
  }
  return DEFAULT_ESTABLISHED_YEAR;
}

function extractBackgroundImageUrl(raw: any): string | undefined {
  if (typeof raw !== 'string' || !raw.trim()) return undefined;
  const m = raw.match(/https:\/\/[^\s'")]+/i);
  return m?.[0];
}

function formatTimezoneLabel(tzRaw: any, htmlTz?: string): string {
  if (htmlTz && /^GMT[+-]\d{2}:\d{2}$/i.test(htmlTz)) return htmlTz;
  const tz = typeof tzRaw === 'string' ? tzRaw.trim() : '';
  if (!tz) return 'GMT+06:00';
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'longOffset',
    }).formatToParts(new Date());
    const offset = parts.find((p) => p.type === 'timeZoneName')?.value;
    if (offset && offset.startsWith('GMT')) return offset;
  } catch {
    // Fallback below
  }
  return tz.includes('Dhaka') ? 'GMT+06:00' : 'Remote / Async';
}

function parseGravatarHtmlProfile(html: string): {
  links: { label: string; url: string; description: string }[];
  timezone?: string;
} {
  const links: { label: string; url: string; description: string }[] = [];
  const seen = new Set<string>();
  const linksSectionMatch = html.match(/>Links<\/h2>([\s\S]*?)(?:<h2[^>]*class="g-profile-card__card-title"|$)/i);
  const linksSection = linksSectionMatch?.[1] || '';
  const cardBlocks = linksSection.split(/class="g-profile-card__card-item\s+card-item/i).slice(1);
  for (const rawBlock of cardBlocks) {
    const block = rawBlock.slice(0, 1800);
    const linkMatch =
      block.match(/<a[^>]+class="card-item__link"[^>]+href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/i) ||
      block.match(/href="(https?:\/\/[^"]+)"[^>]*title="([^"]+)"/i);
    if (!linkMatch) continue;
    const url = decodeHtmlEntities(linkMatch[1]).trim();
    if (!url.startsWith('https://') || isRestrictedProfileUrl(url) || isSocialAccountOnlyUrl(url)) continue;
    const key = normalizeVerifiedUrlKey(url);
    if (seen.has(key)) continue;
    seen.add(key);

    const rawLabel = decodeHtmlEntities(linkMatch[2].replace(/<[^>]+>/g, ' ').replace(/[↗]/g, '').trim());
    const pMatch = block.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    let desc = '';
    if (pMatch?.[1]) {
      const candidate = cleanProfileDescription(pMatch[1].replace(/<[^>]+>/g, ' '));
      if (candidate && !candidate.endsWith('...') && !candidate.endsWith('…')) {
        desc = candidate;
      }
    }
    links.push({ label: rawLabel || url, url, description: desc });
  }
  const tzMatch = html.match(/Time:\s*\d{1,2}:\d{2}\s*\((GMT[+-]\d{2}:\d{2})\)/i);
  return {
    links,
    timezone: tzMatch?.[1] || undefined,
  };
}

function applyGravatarDirectPayload(
  v3Profile: any,
  legacyJson?: any,
  htmlProfile?: { links: { label: string; url: string; description: string }[]; timezone?: string } | null
) {
  const legacyEntry = Array.isArray(legacyJson?.entry) ? legacyJson.entry[0] : null;
  if ((!v3Profile || typeof v3Profile !== 'object') && !legacyEntry && !htmlProfile) return;

  const syncedAt = new Date().toISOString();
  const base = BASE_ADMIN_PROFILE;

  const rawV3Name =
    typeof v3Profile?.display_name === 'string' && v3Profile.display_name.trim()
      ? decodeHtmlEntities(v3Profile.display_name).trim()
      : '';
  const rawLegacyName =
    typeof legacyEntry?.displayName === 'string' && legacyEntry.displayName.trim()
      ? decodeHtmlEntities(legacyEntry.displayName).trim()
      : '';
  const siteName = rawV3Name || rawLegacyName || base.siteName;

  const bioMarkdown =
    (typeof v3Profile?.description === 'string' && v3Profile.description.trim()
      ? v3Profile.description
      : '') ||
    (typeof legacyEntry?.aboutMe === 'string' && legacyEntry.aboutMe.trim()
      ? legacyEntry.aboutMe
      : '');

  const parsedBio = parseGravatarBioMarkdown(bioMarkdown);

  const rawV3Location =
    typeof v3Profile?.location === 'string' && v3Profile.location.trim()
      ? decodeHtmlEntities(v3Profile.location).trim()
      : '';
  const rawLocation =
    rawV3Location && !isPersonalLocationText(rawV3Location) ? rawV3Location : base.location;

  const rawJobTitle =
    typeof v3Profile?.job_title === 'string' && v3Profile.job_title.trim()
      ? decodeHtmlEntities(v3Profile.job_title).trim()
      : '';
  const rawCompany =
    typeof v3Profile?.company === 'string' && v3Profile.company.trim()
      ? decodeHtmlEntities(v3Profile.company).trim()
      : '';
  const tagline = parsedBio.tagline || base.tagline;
  const roleTitle =
    rawJobTitle && rawCompany
      ? `${rawJobTitle} · ${rawCompany}`
      : rawJobTitle || tagline;

  const pronouns = '';
  const pronunciation = '';
  const avatarAltText =
    typeof v3Profile?.avatar_alt_text === 'string' && v3Profile.avatar_alt_text.trim()
      ? decodeHtmlEntities(v3Profile.avatar_alt_text).trim()
      : base.avatarAltText;
  const lastProfileEdit =
    typeof v3Profile?.last_profile_edit === 'string'
      ? v3Profile.last_profile_edit.trim()
      : websitesState.adminProfile.lastProfileEdit || '';

  const rawAvatar =
    (typeof v3Profile?.avatar_url === 'string' && v3Profile.avatar_url.startsWith('https://')
      ? v3Profile.avatar_url
      : '') ||
    (typeof legacyEntry?.thumbnailUrl === 'string' && legacyEntry.thumbnailUrl.startsWith('https://')
      ? legacyEntry.thumbnailUrl
      : '');
  const avatarUrl = rawAvatar
    ? `${rawAvatar}${rawAvatar.includes('?') ? '&' : '?'}s=512`
    : base.avatarUrl;

  const headerImage =
    extractBackgroundImageUrl(v3Profile?.header_image) ||
    extractBackgroundImageUrl(legacyEntry?.header_image) ||
    extractBackgroundImageUrl(legacyEntry?.profileBackground?.url) ||
    websitesState.adminProfile.headerImage ||
    base.headerImage;

  const timezone = formatTimezoneLabel(v3Profile?.timezone, htmlProfile?.timezone);

  // Merge public business channels from v3 + legacy JSON cleanly (excluding personal email/phone & restricted links)
  const isExcludedExternalUrl = (val: string) => /blogspot\.|blogger\.|wordpress\./i.test(val);
  const socials = { ...base.socials, email: '', phone: '', gravatarUrl: '' };

  if (v3Profile?.contact_info && typeof v3Profile.contact_info === 'object') {
    const ci = v3Profile.contact_info;
    if (typeof ci.calendar === 'string' && ci.calendar.startsWith('https://')) {
      socials.calendlyUrl = ci.calendar.trim();
    }
    if (
      typeof ci.contact_form === 'string' &&
      ci.contact_form.startsWith('https://') &&
      !isExcludedExternalUrl(ci.contact_form)
    ) {
      socials.contactForm = ci.contact_form.trim();
    }
  }

  if (Array.isArray(legacyEntry?.contactInfo)) {
    for (const item of legacyEntry.contactInfo) {
      const val = String(item?.value || '').trim();
      const kind = String(item?.type || '').toLowerCase();
      if (kind === 'calendar' && val.startsWith('https://')) {
        socials.calendlyUrl = val;
      }
      if (kind === 'contactform' && val.startsWith('https://') && !isExcludedExternalUrl(val)) {
        socials.contactForm = val;
      }
    }
  }

  // Separate verified social accounts vs website project links cleanly (excluding gravatar.com, blogspot, wordpress & unlisted links)
  const verifiedAccountsList: { label: string; handle: string; url: string }[] = [];
  const seenAccountKeys = new Set<string>();
  const discoveredWebProjects: { label: string; url: string; key: string; description: string }[] = [];
  const seenProjectKeys = new Set<string>();

  const registerSocialFields = (u: string) => {
    const lowerUrl = u.toLowerCase();
    if (lowerUrl.includes('github.com/') && /^https?:\/\/(www\.)?github\.com\/[^/]+\/?$/.test(lowerUrl)) {
      socials.githubUrl = u;
    }
    if (lowerUrl.includes('linkedin.com/')) socials.linkedinUrl = u;
    if (lowerUrl.includes('x.com/') || lowerUrl.includes('twitter.com/')) socials.xUrl = u;
    if (lowerUrl.includes('bsky.app/')) socials.blueskyUrl = u;
    if (lowerUrl.includes('goodreads.com')) socials.goodreadsUrl = u;
  };

  const pushVerifiedAccountOnly = (rawUrl: any, rawLabel: any, includeAsWebsite = false) => {
    const u = String(rawUrl || '').trim();
    if (!u.startsWith('https://') || u.length >= 160 || /[\s<>]/.test(u)) return;
    if (isRestrictedProfileUrl(u)) return;
    const key = normalizeVerifiedUrlKey(u);
    const label = decodeHtmlEntities(String(rawLabel || 'Account').trim());

    if (!seenAccountKeys.has(key)) {
      seenAccountKeys.add(key);
      registerSocialFields(u);
      verifiedAccountsList.push({
        label,
        handle: formatAccountHandle(u),
        url: u,
      });
    }

    if (includeAsWebsite && !isSocialAccountOnlyUrl(u) && !seenProjectKeys.has(key)) {
      seenProjectKeys.add(key);
      discoveredWebProjects.push({ label, url: u, key, description: '' });
    }
  };

  const htmlLinksByKey = new Map<string, { label: string; url: string; description: string }>();
  if (htmlProfile?.links) {
    for (const hl of htmlProfile.links) {
      htmlLinksByKey.set(normalizeVerifiedUrlKey(hl.url), hl);
    }
  }

  const pushWebsiteLink = (rawUrl: any, rawLabel: any, rawDescription?: any) => {
    const u = String(rawUrl || '').trim();
    if (!u.startsWith('https://') || u.length >= 160 || /[\s<>]/.test(u)) return;
    if (isRestrictedProfileUrl(u)) return;
    if (isSocialAccountOnlyUrl(u)) return;
    const key = normalizeVerifiedUrlKey(u);
    const label = decodeHtmlEntities(String(rawLabel || 'Website').trim());
    const htmlMatch = htmlLinksByKey.get(key);
    const desc = cleanProfileDescription(rawDescription) || htmlMatch?.description || '';

    if (!seenProjectKeys.has(key)) {
      seenProjectKeys.add(key);
      discoveredWebProjects.push({ label, url: u, key, description: desc });
    }
  };

  if (Array.isArray(v3Profile?.links)) {
    for (const lnk of v3Profile.links) {
      pushWebsiteLink(lnk?.url, lnk?.label || lnk?.title || 'Website', lnk?.description);
    }
  }

  if (Array.isArray(legacyEntry?.urls)) {
    for (const lnk of legacyEntry.urls) {
      pushWebsiteLink(lnk?.value, lnk?.title || 'Website', lnk?.description);
    }
  }

  if (htmlProfile?.links) {
    for (const hl of htmlProfile.links) {
      pushWebsiteLink(hl.url, hl.label, hl.description);
    }
  }

  if (Array.isArray(v3Profile?.verified_accounts)) {
    for (const acc of v3Profile.verified_accounts) {
      if (acc?.is_hidden) continue;
      const accUrl = String(acc?.url || '');
      pushVerifiedAccountOnly(accUrl, acc?.service_label || acc?.service_type, false);
    }
  }

  if (Array.isArray(legacyEntry?.accounts)) {
    for (const acc of legacyEntry.accounts) {
      if (acc?.is_hidden || acc?.verified === false) continue;
      const accUrl = String(acc?.url || '');
      pushVerifiedAccountOnly(accUrl, acc?.name || acc?.shortname, false);
    }
  }

  if (isExcludedExternalUrl(socials.contactForm)) {
    socials.contactForm = base.socials.contactForm;
  }

  // Interests (authenticated v3 profile or legacy JSON)
  let interests = base.interests;
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

  // Languages (when populated on authenticated API)
  let languages = base.languages;
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

  const backgroundHighlights =
    parsedBio.backgroundHighlights.length > 0
      ? parsedBio.backgroundHighlights
      : base.backgroundHighlights || [];
  const liveServices =
    parsedBio.liveServices.length > 0 ? parsedBio.liveServices : base.liveServices;
  const bioParagraphs =
    parsedBio.bioParagraphs.length > 0 ? parsedBio.bioParagraphs : base.bioParagraphs;
  const establishedYear = extractEstablishedYearFromHighlights(backgroundHighlights);
  const certification =
    extractCertificationFromHighlights(backgroundHighlights) || base.certification;
  const coursesCertifications =
    backgroundHighlights.length > 0
      ? backgroundHighlights.map((hl) => hl.replace(/^[a-z\s]+:\s*/i, (m) => m))
      : base.coursesCertifications;

  const whatICanHelpWith =
    liveServices.length > 0
      ? liveServices.slice(0, 5).map((s) => s.title)
      : base.whatICanHelpWith;

  // Build skillsList dynamically from liveServices + interests (zero leftover static skills)
  const dynamicSkillsList: { category: string; skills: string[] }[] = liveServices.map((svc) => ({
    category: svc.title,
    skills: svc.items,
  }));
  if (interests.length > 0) {
    dynamicSkillsList.push({
      category: 'Technical Interests & Focus Areas',
      skills: interests,
    });
  }

  // Derive workExperience cleanly from live profile data (no fabricated CV entries)
  const dynamicWorkExperience = [
    {
      role: roleTitle,
      period: `${establishedYear} – Present`,
      location: rawLocation,
      highlights:
        backgroundHighlights.length > 0
          ? backgroundHighlights
          : bioParagraphs.slice(0, 2),
    },
  ];

  // Dynamically sync profile web project links into websitesState.websites
  let syncedWebsites = websitesState.websites;
  if (discoveredWebProjects.length > 0) {
    const prevByKey = new Map<string, EcosystemWebsite>();
    for (const site of websitesState.websites) {
      prevByKey.set(normalizeVerifiedUrlKey(site.url), site);
    }
    const defaultByKey = new Map<string, EcosystemWebsite>();
    for (const site of DEFAULT_WEBSITES) {
      defaultByKey.set(normalizeVerifiedUrlKey(site.url), site);
    }

    const nextSites: EcosystemWebsite[] = [];
    const includedKeys = new Set<string>();

    for (const proj of discoveredWebProjects) {
      includedKeys.add(proj.key);
      const existing = prevByKey.get(proj.key) || defaultByKey.get(proj.key);
      const hint = CURATED_SITE_DETAILS[proj.key];
      let domain = proj.key.split('/')[0];
      try {
        domain = new URL(proj.url).hostname;
      } catch {
        // Fallback already set
      }

      const exactName = proj.label || existing?.name || domain;
      const hasProfileDesc = Boolean(proj.description);
      const resolvedDescription =
        proj.description ||
        hint?.description ||
        existing?.description ||
        `${exactName} — verified property of ${siteName}.`;
      const resolvedOverview =
        hint?.overview ||
        existing?.overview ||
        `${exactName} is an official digital platform operated by ${siteName} on ${domain}.`;
      const resolvedFeatures = hint?.features || existing?.features || [];
      const resolvedTechHighlights = hint?.techHighlights || existing?.techHighlights || [];
      const resolvedAudience = hint?.audience || existing?.audience;

      if (existing) {
        nextSites.push({
          ...existing,
          name: exactName,
          url: proj.url,
          domain,
          description: resolvedDescription,
          overview: resolvedOverview,
          features: resolvedFeatures,
          techHighlights: resolvedTechHighlights,
          audience: resolvedAudience,
          hasProfileDescription: hasProfileDesc || existing.hasProfileDescription,
        });
      } else {
        nextSites.push({
          id: `site-profile-${crypto.createHash('sha1').update(proj.key).digest('hex').slice(0, 8)}`,
          name: exactName,
          url: proj.url,
          domain,
          category: hint?.category || 'Verified Web Property',
          badge: hint?.badge || 'VERIFIED LINK',
          description: resolvedDescription,
          overview: resolvedOverview,
          features: resolvedFeatures,
          techHighlights: resolvedTechHighlights,
          audience: resolvedAudience,
          hasProfileDescription: hasProfileDesc,
          imageKey: hint?.imageKey || inferProjectImageKey(proj.url, exactName),
          status: 'standby',
          lastChecked: syncedAt,
          isCore: Boolean(hint),
          latestPosts: [],
        });
      }
    }

    // Preserve user-added custom sites if not already included
    for (const site of websitesState.websites) {
      const k = normalizeVerifiedUrlKey(site.url);
      if (includedKeys.has(k) || isRestrictedProfileUrl(site.url)) continue;
      if (site.isCustom) {
        includedKeys.add(k);
        nextSites.push(site);
      }
    }

    syncedWebsites = nextSites;
  }

  websitesState = {
    ...websitesState,
    siteName,
    sourceUrl: '',
    upstreamStatus: {
      ...websitesState.upstreamStatus,
      sourceUrl: '',
      connected: true,
      authenticated: Boolean(GRAVATAR_API_KEY),
      rateLimitRemaining: gravatarRateState.remaining,
      healthStatus: 'ok',
      lastSyncedAt: syncedAt,
    },
    adminProfile: {
      ...base,
      siteName,
      roleTitle,
      tagline,
      location: rawLocation,
      timezone,
      headerImage,
      avatarUrl,
      avatarAltText,
      pronouns,
      pronunciation,
      lastProfileEdit,
      certification,
      availabilityNote: parsedBio.availabilityNote || base.availabilityNote,
      bioParagraphs,
      whyWorkWithMe: parsedBio.whyWorkWithMe.length > 0 ? parsedBio.whyWorkWithMe : base.whyWorkWithMe,
      backgroundHighlights,
      whatICanHelpWith,
      liveServices,
      workExperience: dynamicWorkExperience,
      skillsList: dynamicSkillsList,
      coursesCertifications,
      education: [],
      languages,
      interests,
      socials,
      verifiedAccounts: verifiedAccountsList.length > 0 ? verifiedAccountsList : base.verifiedAccounts,
    },
    websites: syncedWebsites,
    lastUpdated: syncedAt,
    yearlySystem: computeYearlyData(siteName, establishedYear),
  };
}

let lastGravatarSyncMs = 0;
let lastV3SyncMs = 0;
let lastLegacyModifiedHeader = '';
let lastLegacyBodyHash = '';
let lastV3BodyHash = '';
let lastGravatarEditStamp = '';
let gravatarSyncInFlight: Promise<boolean> | null = null;
const gravatarRateState = {
  limit: 100,
  remaining: 100,
  resetAtMs: 0,
  backoffUntilMs: 0,
};

function computeNextGravatarPollMs(): number {
  const now = Date.now();
  if (gravatarRateState.backoffUntilMs > now) {
    return Math.min(Math.max(gravatarRateState.backoffUntilMs - now, 10000), 120000);
  }
  if (gravatarRateState.limit >= 500 && gravatarRateState.remaining > 20) {
    return 10 * 1000;
  }
  if (gravatarRateState.remaining <= 8 && gravatarRateState.resetAtMs > now) {
    return Math.min(Math.max(gravatarRateState.resetAtMs - now + 2000, 30000), 180000);
  }
  return 12 * 1000;
}

async function syncGravatarProfileLive(force = false): Promise<boolean> {
  const now = Date.now();
  if (!force && now - lastGravatarSyncMs < 2000) {
    return true;
  }
  if (gravatarSyncInFlight) return gravatarSyncInFlight;

  gravatarSyncInFlight = (async () => {
    const reqNow = Date.now();
    const cacheBust = `?_t=${reqNow}`;

    // Always probe lightweight public JSON (zero hourly rate cap + full entry hash comparison)
    let legacyJson: any = null;
    let legacyPayloadChanged = false;
    try {
      const legacyRes = await fetch(`${GRAVATAR_PUBLIC_JSON_URL}${cacheBust}`, {
        signal: AbortSignal.timeout(6000),
        headers: {
          'User-Agent': 'MRS-Portfolio-Sync/1.0',
          Accept: 'application/json',
          'Cache-Control': 'no-cache, no-store, max-age=0',
          Pragma: 'no-cache',
        },
        cache: 'no-store',
      });
      if (legacyRes.ok) {
        const modHeader = legacyRes.headers.get('last-modified') || '';
        if (modHeader && modHeader !== lastLegacyModifiedHeader) {
          legacyPayloadChanged = true;
          lastLegacyModifiedHeader = modHeader;
        }
        legacyJson = await legacyRes.json();
        const entryHash = crypto
          .createHash('sha256')
          .update(JSON.stringify(legacyJson?.entry?.[0] || {}))
          .digest('hex');
        if (entryHash !== lastLegacyBodyHash) {
          if (lastLegacyBodyHash !== '') {
            legacyPayloadChanged = true;
          }
          lastLegacyBodyHash = entryHash;
        }
      }
    } catch {
      // Transient legacy fetch issue handled below
    }

    // Fetch v3 REST API cleanly (immediate when authenticated, hash-triggered or paced when unauthenticated)
    const v3BackoffActive = gravatarRateState.backoffUntilMs > reqNow;
    const lowQuotaWait =
      !force &&
      gravatarRateState.limit <= 100 &&
      !legacyPayloadChanged &&
      reqNow - lastV3SyncMs < 50 * 1000;
    const reserveExhausted =
      gravatarRateState.remaining <= (force ? 1 : 6) &&
      gravatarRateState.resetAtMs > reqNow;

    let v3Json: any = null;
    if (!v3BackoffActive && !lowQuotaWait && !reserveExhausted) {
      const gravatarHeaders: Record<string, string> = {
        'User-Agent': 'MRS-Portfolio-Sync/1.0',
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store, max-age=0',
        Pragma: 'no-cache',
      };
      if (GRAVATAR_API_KEY) {
        gravatarHeaders.Authorization = `Bearer ${GRAVATAR_API_KEY}`;
      }

      try {
        const v3Res = await fetch(`${GRAVATAR_V3_PROFILE_URL}${cacheBust}`, {
          signal: AbortSignal.timeout(6000),
          headers: gravatarHeaders,
          cache: 'no-store',
        });

        const limitHeader = parseInt(v3Res.headers.get('x-ratelimit-limit') || '', 10);
        const remHeader = parseInt(v3Res.headers.get('x-ratelimit-remaining') || '', 10);
        const resetHeader = parseInt(v3Res.headers.get('x-ratelimit-reset') || '', 10);
        if (!Number.isNaN(limitHeader) && limitHeader > 0) gravatarRateState.limit = limitHeader;
        if (!Number.isNaN(remHeader) && remHeader >= 0) gravatarRateState.remaining = remHeader;
        if (!Number.isNaN(resetHeader) && resetHeader > 0) gravatarRateState.resetAtMs = resetHeader * 1000;

        if (v3Res.status === 429) {
          gravatarRateState.remaining = 0;
          gravatarRateState.backoffUntilMs =
            gravatarRateState.resetAtMs > reqNow ? gravatarRateState.resetAtMs : reqNow + 60 * 1000;
        } else if (v3Res.ok) {
          lastV3SyncMs = Date.now();
          gravatarRateState.backoffUntilMs = 0;
          v3Json = await v3Res.json();
          if (typeof v3Json?.last_profile_edit === 'string') {
            lastGravatarEditStamp = v3Json.last_profile_edit;
          }
          lastV3BodyHash = crypto.createHash('sha256').update(JSON.stringify(v3Json || {})).digest('hex');
        }
      } catch {
        // Ignore transient network error; legacyJson or cached v3 state keeps service resilient 24/7
      }
    }

    // Fetch public HTML profile card links (captures link-card descriptions + timezone offset cleanly)
    let htmlProfile: { links: { label: string; url: string; description: string }[]; timezone?: string } | null =
      null;
    if (force || legacyPayloadChanged || websitesState.syncCycle === 0) {
      try {
        const htmlRes = await fetch(`https://gravatar.com/${encodeURIComponent(GRAVATAR_IDENTIFIER)}${cacheBust}`, {
          signal: AbortSignal.timeout(6000),
          headers: {
            'User-Agent': 'MRS-Portfolio-Sync/1.0',
            Accept: 'text/html',
            'Cache-Control': 'no-cache, no-store, max-age=0',
          },
          cache: 'no-store',
        });
        if (htmlRes.ok) {
          const html = await htmlRes.text();
          htmlProfile = parseGravatarHtmlProfile(html);
        }
      } catch {
        // Ignore transient HTML fetch issue
      }
    }

    const syncedAt = new Date().toISOString();
    if (v3Json || legacyJson || htmlProfile) {
      applyGravatarDirectPayload(v3Json, legacyJson, htmlProfile);
      websitesState.upstreamStatus = {
        ...websitesState.upstreamStatus,
        sourceUrl: '',
        connected: true,
        sseActive: true,
        authenticated: Boolean(GRAVATAR_API_KEY),
        rateLimitRemaining: gravatarRateState.remaining,
        healthStatus: 'ok',
        lastSyncedAt: syncedAt,
      };
      lastGravatarSyncMs = Date.now();
      return true;
    }

    websitesState.upstreamStatus = {
      ...websitesState.upstreamStatus,
      sourceUrl: '',
      connected: Boolean(GRAVATAR_API_KEY || websitesState.adminProfile.siteName),
      authenticated: Boolean(GRAVATAR_API_KEY),
      rateLimitRemaining: gravatarRateState.remaining,
      healthStatus: 'standby',
      lastSyncedAt: syncedAt,
    };
    return false;
  })().finally(() => {
    gravatarSyncInFlight = null;
  });

  return gravatarSyncInFlight;
}

async function syncProfileAndFeeds(): Promise<void> {
  const [gravatarOk, rssRes, policiesRes] = await Promise.allSettled([
    syncGravatarProfileLive(true),
    fetch(UPSTREAM_RSS_URL, {
      signal: AbortSignal.timeout(6000),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0', Accept: 'application/xml,text/xml' },
      cache: 'no-store',
    }),
    fetch(UPSTREAM_POLICIES_URL, {
      signal: AbortSignal.timeout(4500),
      headers: { 'User-Agent': 'MRS-Realtime-Bridge/1.0' },
      cache: 'no-store',
    }),
  ]);

  const gravatarConnected = gravatarOk.status === 'fulfilled' && gravatarOk.value;
  const combinedRssItems: RssFeedItem[] = [];
  const seenRssLinks = new Set<string>();
  let rssBuildDate = websitesState.upstreamStatus.rssBuildDate;

  if (rssRes.status === 'fulfilled' && rssRes.value.ok) {
    try {
      const xml = await rssRes.value.text();
      const parsed = parseRssXml(xml);
      if (parsed.buildDate && !rssBuildDate) {
        rssBuildDate = parsed.buildDate;
      }
      for (const item of parsed.items) {
        if (/blogspot\.|wordpress\./i.test(item.link) || /blogspot|wordpress/i.test(item.title)) continue;
        const norm = normalizeVerifiedUrlKey(item.link);
        if (seenRssLinks.has(norm)) continue;
        seenRssLinks.add(norm);
        combinedRssItems.push(item);
      }
    } catch {
      // Ignore RSS parse warning
    }
  }

  websitesState.upstreamStatus = {
    ...websitesState.upstreamStatus,
    sourceUrl: '',
    rssBuildDate,
    rssItems: combinedRssItems.slice(0, 12),
  };

  if (combinedRssItems.length > 0) {
    websitesState.websites = websitesState.websites.map((site) => {
      if (site.hasProfileDescription || site.isCore) {
        return site;
      }
      const matched = combinedRssItems.find((it) => {
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
  }

  const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
  const activeEstablished = extractEstablishedYearFromHighlights(
    websitesState.adminProfile.backgroundHighlights || []
  );
  if (policiesRes.status === 'fulfilled' && policiesRes.value.ok) {
    try {
      const pJson = await policiesRes.value.json();
      if (typeof pJson?.effectiveYear === 'number') {
        websitesState.yearlySystem = {
          ...computeYearlyData(activeSiteName, activeEstablished),
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
    connected: gravatarConnected,
    sseActive: gravatarConnected,
    healthStatus: gravatarConnected ? 'ok' : 'standby',
    lastSyncedAt: new Date().toISOString(),
  };
}

async function fetchRssPosts(feedUrl: string): Promise<WebsitePostPreview[]> {
  if (/blogspot\.|wordpress\./i.test(feedUrl)) return [];
  try {
    const res = await fetch(feedUrl, {
      signal: AbortSignal.timeout(5000),
      headers: {
        'User-Agent': 'MRS-Realtime-Bridge/1.0',
        Accept: 'application/rss+xml,application/xml,text/xml',
      },
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parsed = parseRssXml(xml);
    return parsed.items.slice(0, 3).map((item) => ({
      title: item.title,
      url: item.link,
      published: formatRssDate(item.pubDate),
    }));
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
      cache: 'no-store',
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
        if (
          !site.hasProfileDescription &&
          meta.description &&
          meta.description.length > 35
        ) {
          description = meta.description;
        }
      }
    }
  } catch {
    status = 'standby';
  }

  if (site.feedUrl) {
    const posts = await fetchRssPosts(site.feedUrl);
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

async function probeServicesPortal(): Promise<ServicesPortalStatus> {
  const start = Date.now();
  try {
    const res = await fetch(SERVICES_PORTAL_URL, {
      signal: AbortSignal.timeout(4500),
      headers: {
        'User-Agent': 'MRS-Realtime-Bridge/1.0',
        Accept: 'text/html,application/xhtml+xml',
      },
      cache: 'no-store',
    });
    const latencyMs = Date.now() - start;
    return {
      url: SERVICES_PORTAL_URL,
      status: res.ok || (res.status >= 300 && res.status < 400) ? 'online' : 'standby',
      httpCode: res.status,
      latencyMs,
      lastChecked: new Date().toISOString(),
    };
  } catch {
    return {
      url: SERVICES_PORTAL_URL,
      status: 'standby',
      lastChecked: new Date().toISOString(),
    };
  }
}

let probeInFlight: Promise<WebsitesHubState> | null = null;

async function syncAllWebsites(): Promise<WebsitesHubState> {
  if (probeInFlight) return probeInFlight;

  probeInFlight = (async () => {
    try {
      await syncProfileAndFeeds();
      const [updatedSites, portalStatus] = await Promise.all([
        Promise.all(websitesState.websites.map((s) => probeSingleWebsite(s))),
        probeServicesPortal(),
      ]);
      const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
      websitesState = {
        ...websitesState,
        siteName: activeSiteName,
        sourceUrl: '',
        websites: updatedSites,
        servicesCatalog: MRS_SERVICES_CATALOG,
        servicesPortalStatus: portalStatus,
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

const PROBE_INTERVAL_MS = 45 * 1000;
const YEARLY_CHECK_INTERVAL_MS = 60 * 60 * 1000;
const SSE_PING_INTERVAL_MS = 15 * 1000;

// ================= API ROUTES =================

app.get(['/health', '/api/health'], (_req, res) => {
  res.status(200).json({
    status: 'ok',
    siteName: websitesState.siteName,
    port: PORT,
    syncCycle: websitesState.syncCycle,
  });
});

app.get('/api/services', (req, res) => {
  const categoryFilter = String(req.query.category || '').trim().toLowerCase();
  const searchQuery = String(req.query.q || '').trim().toLowerCase();

  let list = websitesState.servicesCatalog || MRS_SERVICES_CATALOG;
  if (categoryFilter && categoryFilter !== 'all') {
    list = list.filter((svc) => svc.category.toLowerCase() === categoryFilter);
  }
  if (searchQuery) {
    list = list.filter(
      (svc) =>
        svc.name.toLowerCase().includes(searchQuery) ||
        svc.serviceId.toLowerCase().includes(searchQuery) ||
        svc.shortDescription.toLowerCase().includes(searchQuery) ||
        svc.inclusions.some((inc) => inc.toLowerCase().includes(searchQuery))
    );
  }

  res.setHeader('Cache-Control', 'no-store');
  res.json({
    success: true,
    sourceUrl: SERVICES_PORTAL_URL,
    total: list.length,
    portalStatus: websitesState.servicesPortalStatus,
    services: list,
  });
});

app.get('/api/websites', async (_req, res) => {
  await syncGravatarProfileLive(false).catch(() => false);
  const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
  websitesState.yearlySystem = computeYearlyData(activeSiteName);
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.json({
    success: true,
    data: websitesState,
  });
});

app.get('/api/mrxshahin/status', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store');
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
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  sseClients.add(res);
  req.on('close', () => {
    sseClients.delete(res);
  });

  await syncGravatarProfileLive(false).catch(() => false);
  if (req.destroyed || !sseClients.has(res)) return;

  const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
  websitesState.yearlySystem = computeYearlyData(activeSiteName);
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
      isCustom: true,
      latestPosts: [],
    };

    const probedSite = await probeSingleWebsite(draftSite);
    const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
    websitesState = {
      ...websitesState,
      websites: [...websitesState.websites, probedSite],
      lastUpdated: new Date().toISOString(),
      syncCycle: websitesState.syncCycle + 1,
      yearlySystem: computeYearlyData(activeSiteName),
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

  const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
  websitesState = {
    ...websitesState,
    websites: websitesState.websites.filter((s) => s.id !== id),
    lastUpdated: new Date().toISOString(),
    syncCycle: websitesState.syncCycle + 1,
    yearlySystem: computeYearlyData(activeSiteName),
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
  const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
  res.json({
    success: true,
    data: computeYearlyData(activeSiteName),
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
    '/services': '/#services-section',
    '/credentials': '/#about-section',
    '/about': '/#about-section',
    '/skills': '/#skills-section',
    '/sponsors': '/#sponsors-section',
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
    const distCandidate = path.join(__dirname, 'dist');
    const docsCandidate = path.join(__dirname, 'docs');
    const staticDir = fs.existsSync(path.join(distCandidate, 'index.html'))
      ? distCandidate
      : docsCandidate;
    app.use(express.static(staticDir, { maxAge: '1h', index: 'index.html' }));
    app.get('*', (req, res) => {
      if (req.path !== '/' && req.path.endsWith('/')) {
        return res.redirect(301, req.path.slice(0, -1));
      }
      res.sendFile(path.join(staticDir, 'index.html'));
    });
  }

  const httpServer = app.listen(PORT, '0.0.0.0', () => {
    const hostDisplay = APP_URL || `http://0.0.0.0:${PORT}`;
    console.log(`[Server] ${websitesState.siteName} backend running at ${hostDisplay} (port ${PORT})`);

    // Start immediate live profile & website sync after port 3000 is bound
    syncAllWebsites().catch(() => {});

    // 24/7 continuous adaptive Gravatar profile sync loop (self-pacing, zero rate-limit exhaustion)
    const scheduleNextGravatarSync = () => {
      const waitMs = computeNextGravatarPollMs();
      setTimeout(async () => {
        try {
          const beforeSnapshot = JSON.stringify({
            profile: websitesState.adminProfile,
            websiteUrls: websitesState.websites.map((w) => ({ id: w.id, name: w.name, url: w.url })),
            editStamp: lastGravatarEditStamp,
            modified: lastLegacyModifiedHeader,
            v3Hash: lastV3BodyHash,
          });
          const updated = await syncGravatarProfileLive(false).catch(() => false);
          const afterSnapshot = JSON.stringify({
            profile: websitesState.adminProfile,
            websiteUrls: websitesState.websites.map((w) => ({ id: w.id, name: w.name, url: w.url })),
            editStamp: lastGravatarEditStamp,
            modified: lastLegacyModifiedHeader,
            v3Hash: lastV3BodyHash,
          });
          if (updated && afterSnapshot !== beforeSnapshot) {
            saveWebsitesCache();
            broadcastWebsitesUpdate('websites_update', websitesState);
          }
        } catch (err) {
          console.error('[24/7 Profile Sync Warning]', err);
        } finally {
          scheduleNextGravatarSync();
        }
      }, waitMs);
    };
    scheduleNextGravatarSync();

    setInterval(() => {
      syncAllWebsites().catch((err) => console.error('[Live Prober Error]', err));
    }, PROBE_INTERVAL_MS);

    setInterval(() => {
      const activeSiteName = websitesState.adminProfile.siteName || websitesState.siteName;
      const yearly = computeYearlyData(activeSiteName);
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
