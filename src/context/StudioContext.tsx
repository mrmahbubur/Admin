import React, { createContext, useContext, useEffect, useState } from 'react';
import { ADMIN_SITE_CONFIG, ESTABLISHED_YEAR, getCurrentYear, getCopyrightNotice } from '../data/contentData';
import { MRS_SERVICES_CATALOG, SERVICES_PORTAL_URL } from '../data/servicesCatalog';
import type {
  AdminProfileData,
  CatalogServiceItem,
  EcosystemWebsite,
  LiveServiceCategory,
  RssFeedItem,
  ServicesPortalStatus,
  UpstreamConnectionStatus,
  WebsitePostPreview,
  WebsitesHubState,
  YearlySystemData,
} from '../types';

export type {
  AdminProfileData,
  CatalogServiceItem,
  EcosystemWebsite,
  LiveServiceCategory,
  RssFeedItem,
  ServicesPortalStatus,
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
  servicesCatalog: CatalogServiceItem[];
  servicesPortalStatus: ServicesPortalStatus;
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
  avatarAltText: 'M R S official profile portrait',
  pronouns: '',
  pronunciation: '',
  lastProfileEdit: '',
  certification: ADMIN_SITE_CONFIG.certification,
  availabilityNote: ADMIN_SITE_CONFIG.availabilityNote,
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
        'WordPress and web CMS content management',
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
        'WordPress & Web CMS',
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
    'Certified Computer & MS Office Professional',
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
    wordpressUrl: 'https://mrxshahin.wordpress.com',
    calendlyUrl: 'https://calendly.com/mrxshahin',
    contactForm: 'https://mrxshahin.wordpress.com',
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
    feedUrl: 'https://mrxshahin.wordpress.com/feed/',
    latestPosts: [],
  },
];

const fallbackUpstreamStatus: UpstreamConnectionStatus = {
  sourceUrl: '',
  connected: false,
  sseActive: false,
  healthStatus: 'connecting',
  lastSyncedAt: new Date().toISOString(),
  rssItems: [],
};

const fallbackServicesPortalStatus: ServicesPortalStatus = {
  url: SERVICES_PORTAL_URL,
  status: 'online',
  lastChecked: new Date().toISOString(),
};

const fallbackHubState: WebsitesHubState = {
  siteName: 'M R S',
  sourceUrl: '',
  upstreamStatus: fallbackUpstreamStatus,
  adminProfile: defaultAdminProfile,
  lastUpdated: new Date().toISOString(),
  syncCycle: 0,
  yearlySystem: initialYearly,
  websites: fallbackWebsites,
  servicesCatalog: MRS_SERVICES_CATALOG,
  servicesPortalStatus: fallbackServicesPortalStatus,
};

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
  servicesCatalog: MRS_SERVICES_CATALOG,
  servicesPortalStatus: fallbackServicesPortalStatus,
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

  const runClientSideSync = async () => {
    setHubState((prev) => ({
      ...prev,
      siteName: prev.adminProfile.siteName || prev.siteName,
      websites: prev.websites.map((site) => ({
        ...site,
        lastChecked: new Date().toISOString(),
      })),
      lastUpdated: new Date().toISOString(),
      syncCycle: prev.syncCycle + 1,
    }));
  };

  const fetchWebsites = async (): Promise<boolean> => {
    try {
      const res = await fetch(`./api/websites?_t=${Date.now()}`, { cache: 'no-store' });
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
    let reconnectDelayMs = 1500;
    let sseStarted = false;
    let mounted = true;

    const connectSSE = () => {
      if (!mounted) return;
      if (eventSource) {
        try {
          eventSource.close();
        } catch {
          // Ignore close error
        }
      }
      sseStarted = true;
      try {
        eventSource = new EventSource('./api/websites/stream');
        eventSource.onopen = () => {
          reconnectDelayMs = 1500;
          if (mounted) {
            setSseConnected(true);
            fetchWebsites().catch(() => {});
          }
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
          try {
            eventSource?.close();
          } catch {
            // Ignore
          }
          eventSource = null;
          if (mounted) {
            const delay = reconnectDelayMs;
            reconnectDelayMs = Math.min(reconnectDelayMs * 2, 15000);
            reconnectTimer = setTimeout(connectSSE, delay);
          }
        };
      } catch {
        if (mounted) setSseConnected(false);
      }
    };

    const refreshOrUpgrade = async () => {
      const ok = await fetchWebsites();
      if (!mounted) return;
      if (ok && !sseStarted) {
        connectSSE();
        if (pollInterval) clearInterval(pollInterval);
        pollInterval = setInterval(refreshOrUpgrade, 15000);
      } else if (!ok && !sseStarted) {
        await runClientSideSync();
      }
    };

    const handleVisibilityOrFocus = () => {
      if (!mounted) return;
      if (document.visibilityState === 'visible') {
        refreshOrUpgrade().catch(() => {});
      }
    };

    const handleOnline = () => {
      if (!mounted) return;
      refreshOrUpgrade().catch(() => {});
      if (!eventSource) {
        connectSSE();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityOrFocus);
    window.addEventListener('focus', handleVisibilityOrFocus);
    window.addEventListener('online', handleOnline);

    (async () => {
      const hasBackend = await fetchWebsites();
      if (!mounted) return;
      if (hasBackend) {
        connectSSE();
        pollInterval = setInterval(refreshOrUpgrade, 15000);
      } else {
        await runClientSideSync();
        pollInterval = setInterval(refreshOrUpgrade, 10000);
      }
    })();

    return () => {
      mounted = false;
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
      window.removeEventListener('focus', handleVisibilityOrFocus);
      window.removeEventListener('online', handleOnline);
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
        servicesCatalog: hubState.servicesCatalog || MRS_SERVICES_CATALOG,
        servicesPortalStatus: hubState.servicesPortalStatus || fallbackServicesPortalStatus,
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
