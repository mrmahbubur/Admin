import React, { createContext, useContext, useEffect, useState } from 'react';
import { ADMIN_SITE_CONFIG, ESTABLISHED_YEAR, getCurrentYear, getCopyrightNotice } from '../data/contentData';
import type {
  AdminProfileData,
  EcosystemWebsite,
  LiveServiceCategory,
  RssFeedItem,
  UpstreamConnectionStatus,
  WebsitePostPreview,
  WebsitesHubState,
  YearlySystemData,
} from '../types';

export type {
  AdminProfileData,
  EcosystemWebsite,
  LiveServiceCategory,
  RssFeedItem,
  UpstreamConnectionStatus,
  WebsitePostPreview,
  WebsitesHubState,
  YearlySystemData,
};

interface StudioContextType {
  hubState: WebsitesHubState;
  upstreamStatus: UpstreamConnectionStatus;
  adminProfile: AdminProfileData;
  websites: EcosystemWebsite[];
  yearly: YearlySystemData;
  isSyncing: boolean;
  sseConnected: boolean;
  selectedInquiryTopic: string;
  setSelectedInquiryTopic: (topic: string) => void;
  syncWebsites: () => Promise<void>;
}

const initialYearly: YearlySystemData = {
  currentYear: getCurrentYear(),
  establishedYear: ESTABLISHED_YEAR,
  copyrightNotice: getCopyrightNotice(),
};

const defaultAdminProfile: AdminProfileData = {
  siteName: ADMIN_SITE_CONFIG.siteName,
  roleTitle: ADMIN_SITE_CONFIG.roleTitle,
  tagline: ADMIN_SITE_CONFIG.tagline,
  location: ADMIN_SITE_CONFIG.location,
  avatarUrl: ADMIN_SITE_CONFIG.avatarUrl,
  certification: ADMIN_SITE_CONFIG.certification,
  availabilityNote: ADMIN_SITE_CONFIG.availabilityNote,
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
    { label: 'X (Twitter)', handle: '@Mrshahinx', url: 'https://x.com/Mrshahinx' },
    { label: 'Bluesky', handle: 'mrxshahin.bsky.social', url: 'https://bsky.app/profile/mrxshahin.bsky.social' },
    { label: 'WordPress', handle: 'mrxshahin.wordpress.com', url: 'https://mrxshahin.wordpress.com' },
    { label: 'Gravatar', handle: 'gravatar.com/mrxshahin', url: 'https://gravatar.com/mrxshahin' },
    { label: 'Goodreads', handle: 'mrxshahin', url: 'https://www.goodreads.com/mrxshahin' },
  ],
};

const fallbackWebsites: EcosystemWebsite[] = [
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
    lastChecked: new Date().toISOString(),
    isCore: true,
    latestPosts: [],
  },
];

const fallbackUpstreamStatus: UpstreamConnectionStatus = {
  sourceUrl: 'https://mrxshahin.ai.studio',
  connected: false,
  sseActive: false,
  healthStatus: 'connecting',
  lastSyncedAt: new Date().toISOString(),
  rssItems: [],
};

const fallbackHubState: WebsitesHubState = {
  siteName: 'M R S',
  sourceUrl: 'https://mrxshahin.ai.studio',
  upstreamStatus: fallbackUpstreamStatus,
  adminProfile: defaultAdminProfile,
  lastUpdated: new Date().toISOString(),
  syncCycle: 0,
  yearlySystem: initialYearly,
  websites: fallbackWebsites,
};

function fetchBloggerJsonp(domain: string): Promise<WebsitePostPreview[]> {
  return new Promise((resolve) => {
    if (!domain.endsWith('.blogspot.com') || typeof document === 'undefined') {
      resolve([]);
      return;
    }

    const cbName = `__mrsFeed_${domain.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}`;
    const script = document.createElement('script');
    let settled = false;

    const cleanup = () => {
      try {
        delete (window as any)[cbName];
      } catch {
        (window as any)[cbName] = undefined;
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve([]);
    }, 4500);

    (window as any)[cbName] = (json: any) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      cleanup();

      const entries = json?.feed?.entry;
      if (!Array.isArray(entries)) {
        resolve([]);
        return;
      }

      const posts: WebsitePostPreview[] = entries.slice(0, 3).map((entry: any) => {
        const title = String(entry?.title?.$t || 'Latest Post').trim();
        const altLink = Array.isArray(entry?.link)
          ? entry.link.find((l: any) => l.rel === 'alternate')?.href
          : undefined;
        const published = typeof entry?.published?.$t === 'string' ? entry.published.$t.slice(0, 10) : '';
        return {
          title,
          url: altLink || `https://${domain}`,
          published,
        };
      });
      resolve(posts);
    };

    script.src = `https://${domain}/feeds/posts/default?alt=json-in-script&max-results=3&callback=${cbName}`;
    script.async = true;
    script.onerror = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      cleanup();
      resolve([]);
    };

    document.body.appendChild(script);
  });
}

async function parseJsonIfAvailable(res: Response): Promise<any | null> {
  const ct = res.headers.get('content-type') || '';
  if (!res.ok || !ct.includes('application/json')) {
    return null;
  }
  try {
    return await res.json();
  } catch {
    return null;
  }
}

const StudioContext = createContext<StudioContextType>({
  hubState: fallbackHubState,
  upstreamStatus: fallbackUpstreamStatus,
  adminProfile: defaultAdminProfile,
  websites: fallbackHubState.websites,
  yearly: initialYearly,
  isSyncing: false,
  sseConnected: false,
  selectedInquiryTopic: 'General Inquiry',
  setSelectedInquiryTopic: () => {},
  syncWebsites: async () => {},
});

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hubState, setHubState] = useState<WebsitesHubState>(fallbackHubState);
  const [isSyncing, setIsSyncing] = useState(false);
  const [sseConnected, setSseConnected] = useState(false);
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState('General Inquiry');

  const parseGravatarServicesClient = (markdown: string): LiveServiceCategory[] => {
    const categories: LiveServiceCategory[] = [];
    const decode = (s: string) =>
      s
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

    let current: LiveServiceCategory | null = null;
    for (const rawLine of markdown.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith('###') && current) {
        if (current.items.length > 0) categories.push(current);
        current = null;
        continue;
      }
      const catMatch = line.match(/^[✅🔹📌💼]\s*\*\*(.+?)\*\*/);
      if (catMatch) {
        if (current && current.items.length > 0) categories.push(current);
        current = { title: decode(catMatch[1]).trim(), items: [] };
        continue;
      }
      if (current && line.startsWith('* ')) {
        current.items.push(decode(line.slice(2).replace(/\*\*/g, '')).trim());
      }
    }
    if (current && current.items.length > 0) categories.push(current);
    return categories;
  };

  const runClientSideSync = async () => {
    let nextProfile = hubState.adminProfile;
    try {
      const gravRes = await fetch('https://api.gravatar.com/v3/profiles/mrxshahin', {
        headers: { Accept: 'application/json' },
      });
      if (gravRes.ok) {
        const g = await gravRes.json();
        const parsedServices =
          typeof g?.description === 'string' ? parseGravatarServicesClient(g.description) : [];
        const ci = g?.contact_info && typeof g.contact_info === 'object' ? g.contact_info : {};
        nextProfile = {
          ...nextProfile,
          siteName: 'M R S',
          avatarUrl:
            typeof g?.avatar_url === 'string' && g.avatar_url.startsWith('https://')
              ? `${g.avatar_url}?s=512`
              : nextProfile.avatarUrl,
          liveServices: parsedServices.length > 0 ? parsedServices : nextProfile.liveServices,
          socials: {
            ...nextProfile.socials,
            email: typeof ci.email === 'string' && ci.email.includes('@') ? ci.email.trim() : nextProfile.socials.email,
            phone: typeof ci.cell_phone === 'string' && ci.cell_phone.trim() ? ci.cell_phone.trim() : nextProfile.socials.phone,
            calendlyUrl: typeof ci.calendar === 'string' && ci.calendar.startsWith('https://') ? ci.calendar.trim() : nextProfile.socials.calendlyUrl,
            contactForm: typeof ci.contact_form === 'string' && ci.contact_form.startsWith('https://') ? ci.contact_form.trim() : nextProfile.socials.contactForm,
          },
        };
      }
    } catch {
      // Fall back quietly to static verified defaults
    }

    const updatedSites = await Promise.all(
      hubState.websites.map(async (site) => {
        if (site.domain.endsWith('.blogspot.com')) {
          const posts = await fetchBloggerJsonp(site.domain);
          return {
            ...site,
            status: 'online' as const,
            latestPosts: posts.length > 0 ? posts : site.latestPosts,
            lastChecked: new Date().toISOString(),
          };
        }
        return {
          ...site,
          lastChecked: new Date().toISOString(),
        };
      })
    );

    setHubState((prev) => ({
      ...prev,
      siteName: 'M R S',
      adminProfile: nextProfile,
      websites: updatedSites,
      lastUpdated: new Date().toISOString(),
      syncCycle: prev.syncCycle + 1,
    }));
  };

  const fetchWebsites = async (): Promise<boolean> => {
    try {
      const res = await fetch('./api/websites');
      const json = await parseJsonIfAvailable(res);
      if (json?.success && json?.data) {
        setHubState(json.data);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const syncWebsites = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('./api/websites/sync', { method: 'POST' });
      const json = await parseJsonIfAvailable(res);
      if (json?.success && json?.data) {
        setHubState(json.data);
        return;
      }
      await runClientSideSync();
    } catch {
      await runClientSideSync();
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    let eventSource: EventSource | null = null;
    let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
    let pollInterval: ReturnType<typeof setInterval> | null = null;
    let mounted = true;

    const connectSSE = () => {
      try {
        eventSource = new EventSource('./api/websites/stream');
        eventSource.onopen = () => {
          if (mounted) setSseConnected(true);
        };
        eventSource.onmessage = (event) => {
          try {
            const payload = JSON.parse(event.data);
            if (payload?.data && mounted) {
              setHubState(payload.data);
              setSseConnected(true);
            }
          } catch {
            // Ignore pings
          }
        };
        eventSource.onerror = () => {
          if (mounted) setSseConnected(false);
          eventSource?.close();
          if (mounted) {
            reconnectTimer = setTimeout(connectSSE, 8000);
          }
        };
      } catch {
        if (mounted) setSseConnected(false);
      }
    };

    (async () => {
      const hasBackend = await fetchWebsites();
      if (!mounted) return;
      if (hasBackend) {
        connectSSE();
        pollInterval = setInterval(fetchWebsites, 45000);
      } else {
        await runClientSideSync();
        pollInterval = setInterval(runClientSideSync, 60000);
      }
    })();

    return () => {
      mounted = false;
      if (pollInterval) clearInterval(pollInterval);
      if (reconnectTimer) clearTimeout(reconnectTimer);
      if (eventSource) eventSource.close();
    };
  }, []);

  return (
    <StudioContext.Provider
      value={{
        hubState,
        upstreamStatus: hubState.upstreamStatus || fallbackUpstreamStatus,
        adminProfile: hubState.adminProfile || defaultAdminProfile,
        websites: hubState.websites,
        yearly: hubState.yearlySystem || initialYearly,
        isSyncing,
        sseConnected,
        selectedInquiryTopic,
        setSelectedInquiryTopic,
        syncWebsites,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => useContext(StudioContext);
