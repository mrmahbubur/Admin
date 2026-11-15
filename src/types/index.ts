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
  nextRolloverDate?: string;
}

export interface ServiceCatalogSample {
  id: string;
  title: string;
  description: string;
  results: string;
}

export interface ServiceCatalogFaq {
  question: string;
  answer: string;
}

export interface CatalogServiceItem {
  id: string;
  serviceId: string;
  slug: string;
  category: 'M R S Services' | 'M R S IPTV';
  name: string;
  shortDescription: string;
  inclusions: string[];
  typicalTurnaround: string;
  priceType: 'quote' | 'fixed' | 'hourly' | 'plan';
  rateUSD: string;
  rateBDT: string;
  depositPercent: number;
  revisionsIncluded: number;
  guarantee: string;
  clientMustProvide: string[];
  notIncluded: string[];
  samples?: ServiceCatalogSample[];
  faq?: ServiceCatalogFaq[];
  portalUrl: string;
  requestUrl: string;
}

export interface SponsorAdLink {
  id: string;
  zoneId: string;
  url: string;
  category: 'Cloud & Streaming' | 'Media & Apps' | 'Privacy & Tech' | 'Productivity & Gear' | 'Community';
  title: string;
  description: string;
  ctaLabel: string;
}

export interface ServicesPortalStatus {
  url: string;
  status: 'online' | 'standby';
  httpCode?: number;
  latencyMs?: number;
  lastChecked: string;
}

export interface WebsitesHubState {
  siteName: string;
  sourceUrl: string;
  upstreamStatus: UpstreamConnectionStatus;
  adminProfile: AdminProfileData;
  websites: EcosystemWebsite[];
  servicesCatalog?: CatalogServiceItem[];
  servicesPortalStatus?: ServicesPortalStatus;
  lastUpdated: string;
  syncCycle: number;
  yearlySystem: YearlySystemData;
}
