import React, { createContext, useContext, useEffect, useState } from 'react';
import { ADMIN_SITE_CONFIG, ESTABLISHED_YEAR, getCurrentYear, getCopyrightNotice } from '../data/contentData';
import { MRS_SERVICES_CATALOG, SERVICES_PORTAL_URL } from '../data/servicesCatalog';
import { CURATED_SITE_DETAILS, resolveCuratedSiteDetail } from '../data/siteDetailsData';
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
  timezone: 'GMT+06:00',
  headerImage: 'https://1.gravatar.com/userimage/140624186/eb80b95de8da05aca3d1b6e47836f736?size=1024',
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

const fallbackWebsites: EcosystemWebsite[] = [
  {
    id: 'proj-mrs-services',
    name: 'All Services',
    url: 'https://mrs-services.ai.studio/',
    domain: 'mrs-services.ai.studio',
    ...CURATED_SITE_DETAILS['mrs-services.ai.studio'],
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
    ...CURATED_SITE_DETAILS['shahin-iptv.ai.studio'],
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
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
    status: 'online',
    lastChecked: new Date().toISOString(),
    isCore: true,
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

function enrichHubStateWithCuratedDetails(state: WebsitesHubState): WebsitesHubState {
  if (!Array.isArray(state?.websites)) return state;
  return {
    ...state,
    websites: state.websites.map((site) => {
      const normalizedKey = site.url
        .trim()
        .replace(/^https?:\/\/(www\.)?/i, '')
        .replace(/\/$/, '')
        .toLowerCase();
      const curated = resolveCuratedSiteDetail(normalizedKey, site.name);
      if (!curated) return site;
      return {
        ...site,
        category: curated.category || site.category,
        badge: curated.badge || site.badge,
        imageKey: curated.imageKey || site.imageKey,
        description: site.description || curated.description,
        overview: site.overview && site.features?.length ? site.overview : curated.overview,
        features: site.features?.length ? site.features : curated.features,
        techHighlights: site.techHighlights?.length ? site.techHighlights : curated.techHighlights,
        audience: site.audience || curated.audience,
      };
    }),
  };
}

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hubState, setHubState] = useState<WebsitesHubState>(fallbackHubState);
  const [isSyncing, setIsSyncing] = useState(false);
  const [sseConnected, setSseConnected] = useState(false);
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState('General Inquiry');

  const runClientSideSync = async () => {
    setHubState((prev) =>
      enrichHubStateWithCuratedDetails({
        ...prev,
        siteName: prev.adminProfile.siteName || prev.siteName,
        websites: prev.websites.map((site) => ({
          ...site,
          lastChecked: new Date().toISOString(),
        })),
        lastUpdated: new Date().toISOString(),
        syncCycle: prev.syncCycle + 1,
      })
    );
  };

  const fetchWebsites = async (): Promise<boolean> => {
    try {
      const res = await fetch(`./api/websites?_t=${Date.now()}`, { cache: 'no-store' });
      const json = await parseJsonIfAvailable(res);
      if (json?.success && json?.data) {
        setHubState(enrichHubStateWithCuratedDetails(json.data));
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
        setHubState(enrichHubStateWithCuratedDetails(json.data));
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
              setHubState(enrichHubStateWithCuratedDetails(payload.data));
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
