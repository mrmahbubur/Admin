import type { EcosystemWebsite } from '../types';

export interface SiteDetailSpec {
  category: string;
  badge: string;
  description: string;
  overview: string;
  features: string[];
  techHighlights: string[];
  audience: string;
  imageKey: EcosystemWebsite['imageKey'];
}

export const CURATED_SITE_DETAILS: Record<string, SiteDetailSpec> = {
  'mrs-services.ai.studio': {
    category: 'Automation & Digital Services Portal',
    badge: 'SERVICES',
    description:
      'Automate. Deliver. Grow. Browse professional technical and digital solutions, request quotes, Client ID & PIN portal access, and SLA-backed delivery.',
    overview:
      'Dedicated digital services storefront and client operations portal of M R S. Features 12 specialized technical, web management, writing, design, and administrative services (S-MRS-01 to S-MRS-12) plus IPTV VIP Pass subscriptions (S-IPTV-01), with dedicated direct request endpoints (/request/:id), structured scope definitions, and transparent USD and BDT rates.',
    features: [
      'Direct per-service request intake pages (/request/:id) and catalog browsing',
      '12 technical, CMS, AI, and admin services plus M R S IPTV VIP Pass plans',
      'Client ID & PIN workspace portal with QA checklists and turnaround tracking',
      'Transparent USD and BDT pricing with clear scope inclusions and revision terms',
    ],
    techHighlights: ['React + Router', 'Direct Request URLs', 'Client Workspace Portal', 'USD & BDT Catalog'],
    audience: 'Businesses, founders, and individuals commissioning remote IT, web, AI, or administrative solutions.',
    imageKey: 'admin',
  },
  'shahin-iptv.ai.studio': {
    category: 'Live Streaming & Media Platform',
    badge: 'LIVE WEB APP',
    description:
      'A premium Android-style live sports and cinema streaming web application featuring Camellia Stream Doctor, real-time M3U playlist processing, direct m3u8 playback, and TV mode navigation.',
    overview:
      'Browser-based live TV and sports streaming platform engineered with an Android-style fullscreen interface. Processes live M3U playlists and direct HTTP Live Streaming (.m3u8) feeds on the fly, includes Camellia Stream Doctor automated diagnostics for broken stream recovery, supports Chromecast casting, and offers ad-supported 1-hour VIP viewing passes.',
    features: [
      'Direct m3u8 adaptive HLS video playback and real-time M3U playlist parsing',
      'Camellia Stream Doctor health checks and fallback stream recovery',
      'Keyboard-friendly Smart TV mode navigation and Google Cast sender support',
      'Personal favorites library and live sports, cinema, and global news categories',
    ],
    techHighlights: ['HLS / m3u8 Engine', 'Chromecast SDK', 'TV Mode Navigation', 'Camellia Stream Doctor'],
    audience: 'Viewers streaming live sports, cinema, and international TV feeds directly from desktop, mobile, or Smart TV.',
    imageKey: 'flagship',
  },
  'mrmahbubur.github.io/apps-store': {
    category: 'Official IPTV & Software Store',
    badge: 'APPS STORE',
    description:
      'Official MRS App Store owned by M R S — direct Android APK, Smart TV, and Windows (.exe, .msi, .msix, .zip) downloads with SHA-256 verification and real user reviews.',
    overview:
      'Official direct-download application distribution portal curated by M R S. Publishes signed M R S IPTV Android APKs, Android Smart TV builds, and Windows 10/11 desktop installers (.exe, .msi, .msix, .zip) without third-party store middlemen, backing every release with SHA-256 integrity hashes, QR code transfer links, and verified user reviews.',
    features: [
      'Direct hosting for M R S IPTV Android (API 26+) and Smart TV APK packages',
      'Verified Windows 10/11 desktop installer packages (.exe, .msi, .msix, .zip)',
      'Cryptographic SHA-256 checksum validation on every distributed release',
      'QR code scan-to-device download transfer and authentic user review logs',
    ],
    techHighlights: ['SHA-256 Checksums', 'Android & TV APKs', 'Windows Installers', 'QR Link Transfer'],
    audience: 'Android phone, Smart TV, Firestick, and Windows desktop users downloading verified official software builds.',
    imageKey: 'tech',
  },
  'mrs-pcn.ai.studio': {
    category: 'Private Communication Network',
    badge: 'PRIVATE APP',
    description: 'Everything is Private And Safe',
    overview:
      'Production-grade private communication network designed around client-side zero-exposure cryptography. Generates and stores ECDH P-256 keypairs and AES-256-GCM encryption keys strictly on the user’s device, supporting end-to-end encrypted text messaging, authenticated private file sharing, WebRTC audio/video calling, and Secret Code account recovery.',
    features: [
      'Local ECDH P-256 key exchange and AES-256-GCM encrypted chat payloads',
      'Encrypted peer-to-peer WebRTC voice and video calling inside the browser',
      'Authenticated private file and document attachment transfers',
      'Installable PWA with Unique Secret Code identity and device key protection',
    ],
    techHighlights: ['ECDH P-256', 'AES-256-GCM', 'WebRTC Audio/Video', 'Installable PWA'],
    audience: 'Individuals and distributed teams needing confidential, device-key protected messaging and calls.',
    imageKey: 'tech',
  },
  'mrmahbubur.github.io/camellia-shop': {
    category: 'Workspace Electronics & Hardware Store',
    badge: 'E-COMMERCE',
    description: 'Global E-commerce Site, For making life easier.',
    overview:
      'Curated hardware and workspace electronics storefront operated by M R S. Simplifies sourcing tested computing gear, desk setups, studio audio equipment, and everyday tech accessories by organizing verified Amazon Prime and Shopz BD listings inside a fast, lightweight static storefront.',
    features: [
      'Curated remote workstation electronics, keyboards, displays, and PC hardware',
      'Audio gear, microphones, headsets, and creator productivity equipment',
      'Direct verified fulfillment links to Amazon Prime and Shopz BD product pages',
      'Fast dark/light adaptive storefront built for instant global browsing',
    ],
    techHighlights: ['Global Curated Catalog', 'Hardware & Audio Gear', 'Direct Fulfillment Links', 'Zero-Bloat Storefront'],
    audience: 'Remote workers, developers, and shoppers looking for vetted electronics and workstation hardware.',
    imageKey: 'admin',
  },
  'mrmahbubur.github.io/charity-foundation': {
    category: 'Humanitarian & Community Initiative',
    badge: 'CHARITY',
    description:
      'M R S Charity Foundation — Poverty Ends With Us. Supporting rural child education, classroom meals, healthcare, clean water, and emergency relief through 100% free sponsor-backed giving.',
    overview:
      'Humanitarian click-to-donate initiative by M R S (“Poverty Ends With Us”) enabling anyone worldwide to fund real community aid without spending money or entering financial details. Sponsor-supported ad clicks directly fund free child education, school classrooms, hot midday meals, healthcare camps, and emergency flood relief batches with live batch tracking.',
    features: [
      '100% free click-to-donate humanitarian model requiring zero money from visitors',
      'Free rural child education, school supplies, classrooms, and daily hot midday meals',
      'Community healthcare access, clean drinking water, and flood crisis relief aid',
      'Live daily community aid batch counters tracking clicks toward real milestones',
    ],
    techHighlights: ['100% Free Aid Model', 'Sponsor-Funded Giving', 'Education & Meals', 'Disaster Relief'],
    audience: 'Global visitors contributing free clicks to fund education, nutrition, healthcare, and crisis relief.',
    imageKey: 'charity',
  },
  'mrmahbubur.github.io/camellia-ai': {
    category: 'Multi-Provider AI Assistant',
    badge: 'AI TOOL',
    description:
      'Camellia AI, the interactive assistant of M R S — multi-provider SSE streaming across Gemini, Anthropic, and OpenRouter with live search grounding, math, code, and voice.',
    overview:
      'Interactive multi-provider AI workspace built by M R S. Streams real-time SSE responses across Google Gemini, Anthropic Claude, and OpenRouter free & pro models with live Google Search grounding and source citations, multimodal file uploads (images, PDFs, and code up to 10MB), voice input/speech synthesis, and local browser-only chat persistence.',
    features: [
      'Multi-provider SSE streaming across Gemini, Anthropic, and OpenRouter models',
      'Live web search grounding with clickable inline citations and math/code formatting',
      'Multimodal image, PDF document, and source-code attachment analysis (up to 10MB)',
      'Browser-local conversation history, prompt editing, and voice interaction',
    ],
    techHighlights: ['Multi-Provider SSE', 'Search Grounding', 'Multimodal 10MB', 'Voice & Code Blocks'],
    audience: 'Engineers, researchers, writers, and problem-solvers using grounded multi-model AI workflows.',
    imageKey: 'tech',
  },
  'mrmahbubur.github.io/admin': {
    category: 'Official Admin Hub Portal',
    badge: 'ADMIN HUB',
    description:
      'Official M R S hub & live websites showcase. Available for Remote IT Support, Virtual Assistance & Administrative Work, Web Management, and Technical Documentation.',
    overview:
      'Central command hub and portfolio ecosystem portal of M R S. Continuously synchronizes profile credentials, technical competencies, real-time HTTP availability & response latency across all connected web properties via Server-Sent Events, and provides a verified catalog linking directly to service intake endpoints.',
    features: [
      '24/7 Server-Sent Events (SSE) synchronization with live ecosystem HTTP telemetry',
      'Unified showcase of all verified M R S web portals, capabilities, and site dossiers',
      'Full 13-service catalog wired directly to exact request URLs on mrs-services.ai.studio',
      'Verified external social directory and direct technical inquiry dispatch form',
    ],
    techHighlights: ['24/7 SSE Sync', 'Live HTTP Probing', 'Service Catalog API', 'Zero Personal Exposure'],
    audience: 'Clients, organizations, and partners exploring M R S credentials, live sites, and remote services.',
    imageKey: 'admin',
  },
  'mrxshahin.ai.studio': {
    category: 'Official Portfolio & AI Concierge',
    badge: 'AI CONCIERGE',
    description:
      'Certified IT Support, Remote System Administration, Microsoft Office document workflows, and Web Management. Interactive AI Concierge & Portfolio for M R S.',
    overview:
      'Interactive portfolio flagship and AI Voice Concierge of M R S. Features a multi-language spoken guided audio tour explaining each M R S platform in the visitor’s chosen language, interactive Camellia AI Q&A focused on IT support and credentials, verified network links, and official RSS & policy endpoints.',
    features: [
      'Interactive multi-language spoken Audio Concierge guided tour across all platforms',
      'Dedicated Camellia AI chat specialized in M R S credentials, IT support, and coding',
      'Executive credentials overview covering systems maintenance, documentation, and CMS work',
      'Official RSS feed (/rss.xml) and compliance policy endpoints (/api/policies/current)',
    ],
    techHighlights: ['AI Voice Concierge', 'Multi-Language Tour', 'RSS XML Feed', 'Interactive Portfolio'],
    audience: 'Hiring managers, remote clients, and partners seeking an interactive narrated introduction to M R S.',
    imageKey: 'flagship',
  },
  'mrs-smart-finds.onrender.com': {
    category: 'Curated Shopping & Buying Guides',
    badge: 'CURATED SHOP',
    description:
      'Thoughtful shopping starts here — carefully curated products, multilingual buying guides, and transparent retailer recommendations.',
    overview:
      'Independent product-discovery and smart shopping guide platform curated by M R S. Helps shoppers make confident choices with hand-selected product collections, concise comparison notes, 5-language support (English, Bangla, Hindi, Spanish, and Arabic), clear affiliate disclosures, and direct verified retailer referral links.',
    features: [
      'Instant product search bar across hand-selected collections and featured finds',
      'Multi-language interface supporting English, বাংলা, हिन्दी, Español, and العربية',
      'Practical 3-step buying checks and structured sizing and fabric product guides',
      'Transparent affiliate disclosure with direct verified retailer fulfillment links',
    ],
    techHighlights: ['Multi-Language UI', 'Product Search', 'Buying Guides', 'Transparent Disclosure'],
    audience: 'Everyday shoppers comparing curated collections, apparel, and lifestyle finds with transparent retailer guidance.',
    imageKey: 'admin',
  },
  'mrxshahin.onrender.com': {
    category: 'Automated Tech & Releases Editorial',
    badge: 'AUTO BLOG',
    description:
      'M R S Auto Blog — automated editorial publication monitoring ecosystem websites, releases, and technical dispatches with RSS syndication.',
    overview:
      'Automated editorial publication by M R S that continuously monitors connected web properties, GitHub commits, APK builds, and ecosystem launches. Generates grounded technical dispatches with bespoke 1280×720 article thumbnails and exposes a live RSS 2.0 XML feed (/rss.xml) for syndication.',
    features: [
      'Real-time monitoring of M R S websites, GitHub commits, and software releases',
      'Automated editorial dispatches paired with custom 1280×720 article thumbnails',
      'Standards-compliant RSS 2.0 and Media RSS feed (/rss.xml) for live syndication',
      'Categorized ecosystem changelog covering Cloud, IPTV, Portfolio, and APK updates',
    ],
    techHighlights: ['Automated Monitoring', 'RSS 2.0 / MRSS Feed', 'Release Dispatches', 'Bespoke Thumbnails'],
    audience: 'Developers, followers, and subscribers tracking live releases and updates across M R S properties.',
    imageKey: 'tech',
  },
};

export function normalizeSiteLookupKey(rawUrl: string): string {
  return String(rawUrl || '')
    .trim()
    .replace(/^https?:\/\/(www\.)?/i, '')
    .replace(/\/$/, '')
    .toLowerCase();
}

export function resolveCuratedSiteDetail(normalizedKeyOrUrl: string, label = ''): SiteDetailSpec | undefined {
  const k = normalizeSiteLookupKey(normalizedKeyOrUrl);
  if (CURATED_SITE_DETAILS[k]) return CURATED_SITE_DETAILS[k];

  const cleanLabel = label.trim().toLowerCase();
  const hay = `${k} ${cleanLabel}`;
  if (
    hay.includes('mrs-services') ||
    hay.includes('services-5jpe') ||
    hay.includes('all services') ||
    hay.includes('services portal')
  ) {
    return CURATED_SITE_DETAILS['mrs-services.ai.studio'];
  }
  if (hay.includes('shahin-iptv') || hay.includes('iptv')) {
    return CURATED_SITE_DETAILS['shahin-iptv.ai.studio'];
  }
  if (hay.includes('apps-store') || hay.includes('apps store') || hay.includes('app store')) {
    return CURATED_SITE_DETAILS['mrmahbubur.github.io/apps-store'];
  }
  if (
    hay.includes('mrs-pcn') ||
    hay.includes('p-c-n') ||
    hay.includes('private-cn') ||
    hay.includes('private c n') ||
    hay.includes('private communication')
  ) {
    return CURATED_SITE_DETAILS['mrs-pcn.ai.studio'];
  }
  if (hay.includes('camellia-shop') || hay.includes('camellia shop')) {
    return CURATED_SITE_DETAILS['mrmahbubur.github.io/camellia-shop'];
  }
  if (hay.includes('charity-foundation') || hay.includes('charity project') || hay.includes('charity')) {
    return CURATED_SITE_DETAILS['mrmahbubur.github.io/charity-foundation'];
  }
  if (hay.includes('camellia-ai') || hay.includes('camellia ai')) {
    return CURATED_SITE_DETAILS['mrmahbubur.github.io/camellia-ai'];
  }
  if (
    hay.includes('admin-maa0') ||
    hay.includes('mrmahbubur.github.io/admin') ||
    hay.includes('admin cloud') ||
    hay.includes('admin hub') ||
    cleanLabel === 'cloud'
  ) {
    return CURATED_SITE_DETAILS['mrmahbubur.github.io/admin'];
  }
  if (hay.includes('mrxshahin.ai.studio') || hay.includes('ai portfolio') || hay.includes('ai concierge')) {
    return CURATED_SITE_DETAILS['mrxshahin.ai.studio'];
  }
  if (
    hay.includes('mrs-smart-finds') ||
    hay.includes('smart-finds') ||
    hay.includes('smart finds')
  ) {
    return CURATED_SITE_DETAILS['mrs-smart-finds.onrender.com'];
  }
  if (
    hay.includes('mrxshahin.onrender') ||
    hay.includes('auto blog') ||
    cleanLabel === 'blogs' ||
    hay.includes('/blogs')
  ) {
    return CURATED_SITE_DETAILS['mrxshahin.onrender.com'];
  }
  return undefined;
}

export function enrichWebsiteWithCuratedDetails<T extends EcosystemWebsite>(site: T): T {
  const curated = resolveCuratedSiteDetail(site.url, site.name);
  if (!curated) return site;

  return {
    ...site,
    category: curated.category || site.category,
    badge: curated.badge || site.badge,
    imageKey: curated.imageKey || site.imageKey,
    description: curated.description || site.description,
    overview: curated.overview || site.overview,
    features: curated.features?.length ? curated.features : site.features,
    techHighlights: curated.techHighlights?.length ? curated.techHighlights : site.techHighlights,
    audience: curated.audience || site.audience,
  };
}

export function enrichWebsitesStateWithCuratedDetails<T extends { websites: EcosystemWebsite[] }>(
  state: T
): T {
  if (!state || !Array.isArray(state.websites)) return state;
  return {
    ...state,
    websites: state.websites.map((site) => enrichWebsiteWithCuratedDetails(site)),
  };
}

interface CoreWebsiteSeed {
  id: string;
  name: string;
  url: string;
  domain: string;
  hasProfileDescription?: boolean;
}

const CORE_WEBSITE_SEEDS: CoreWebsiteSeed[] = [
  { id: 'proj-mrs-services', name: 'All Services', url: 'https://mrs-services.ai.studio/', domain: 'mrs-services.ai.studio' },
  { id: 'proj-3-iptv-web', name: 'IPTV WEB', url: 'https://shahin-iptv.ai.studio', domain: 'shahin-iptv.ai.studio' },
  { id: 'site-profile-a7b60340', name: 'Apps Store', url: 'https://mrmahbubur.github.io/APPS-STORE/', domain: 'mrmahbubur.github.io' },
  { id: 'site-profile-3bb884d2', name: 'Private C N', url: 'https://mrs-pcn.ai.studio/', domain: 'mrs-pcn.ai.studio', hasProfileDescription: true },
  { id: 'site-profile-067f4942', name: 'Camellia Shop', url: 'https://mrmahbubur.github.io/Camellia-Shop/', domain: 'mrmahbubur.github.io', hasProfileDescription: true },
  { id: 'site-profile-f58418d3', name: 'Charity Project', url: 'https://mrmahbubur.github.io/Charity-Foundation/', domain: 'mrmahbubur.github.io' },
  { id: 'site-profile-11431945', name: 'Camellia Ai', url: 'https://mrmahbubur.github.io/Camellia-Ai/', domain: 'mrmahbubur.github.io' },
  { id: 'site-profile-d8f3fd0c', name: 'Cloud', url: 'https://mrmahbubur.github.io/Admin/', domain: 'mrmahbubur.github.io' },
  { id: 'proj-6-ai-assistant', name: 'Ai Portfolio', url: 'https://mrxshahin.ai.studio/', domain: 'mrxshahin.ai.studio' },
  { id: 'site-smart-finds', name: 'Smart Finds', url: 'https://mrs-smart-finds.onrender.com', domain: 'mrs-smart-finds.onrender.com' },
  { id: 'site-auto-blog', name: 'Blogs', url: 'https://mrxshahin.onrender.com/', domain: 'mrxshahin.onrender.com' },
];

export function createDefaultCoreWebsites(
  initialStatus: EcosystemWebsite['status'] = 'standby'
): EcosystemWebsite[] {
  const checkedAt = new Date().toISOString();
  return CORE_WEBSITE_SEEDS.map((seed) =>
    enrichWebsiteWithCuratedDetails({
      id: seed.id,
      name: seed.name,
      url: seed.url,
      domain: seed.domain,
      category: 'Verified Web Property',
      description: '',
      imageKey: 'flagship',
      hasProfileDescription: seed.hasProfileDescription,
      status: initialStatus,
      lastChecked: checkedAt,
      isCore: true,
      latestPosts: [],
    })
  );
}
