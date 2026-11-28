import { a as __toESM } from "./rolldown-runtime-oLLnCvco.js";
import { t as require_client } from "./vendor-react-Bahl9n17.js";
import { C as Briefcase, D as ArrowDownRight, E as ArrowRight, O as require_react, S as Calendar, T as ArrowUpRight, _ as Clock, a as Search, b as ChevronLeft, c as Pause, d as Menu, f as Languages, g as ExternalLink, h as GraduationCap, i as Send, l as Moon, m as Globe, n as Sun, o as RefreshCw, p as Info, r as ShieldCheck, s as Play, t as X, u as MessageSquare, v as CircleCheck, w as Award, x as Check, y as ChevronRight } from "./vendor-icons-DWzXABhI.js";
import { a as PresenceContext, c as LayoutGroupContext, i as isHTMLElement, l as require_jsx_runtime, n as usePresence, o as useIsomorphicLayoutEffect, r as MotionConfigContext, s as useConstant, t as motion } from "./vendor-motion-qNVjUgu_.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/data/contentData.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
var ADMIN_SITE_CONFIG = {
	siteName: "M R S",
	sourceUrl: "",
	roleTitle: "Available for Remote IT Support, Virtual Assistance & Administrative Work",
	tagline: "Available for Remote IT Support, Virtual Assistance & Administrative Work",
	location: "Global / Remote",
	avatarUrl: "./mrs_profile_avatar.jpg",
	certification: "360-hour computer systems course",
	availabilityNote: "Whether you need a remote IT support assistant, virtual assistant, website content manager, technical writer, online researcher, or general digital operations support, I am open to discussing how I can help."
};
var ESTABLISHED_YEAR = 2018;
var getCurrentYear = () => (/* @__PURE__ */ new Date()).getFullYear();
var getCopyrightNotice = () => `© ${getCurrentYear()} ${ADMIN_SITE_CONFIG.siteName}. All rights reserved.`;
//#endregion
//#region src/data/servicesCatalog.ts
var SERVICES_PORTAL_URL = "https://mrs-services.ai.studio/";
var buildServicePortalUrl = (slug) => `https://mrs-services.ai.studio/services/${slug}`;
var buildServiceRequestUrl = (slug) => `https://mrs-services.ai.studio/request/${slug}`;
var MRS_SERVICES_CATALOG = [
	{
		id: "ai-digital-productivity",
		serviceId: "S-MRS-01",
		slug: "ai-digital-productivity",
		category: "M R S Services",
		name: "AI & Digital Productivity",
		shortDescription: "Custom prompt engineering, autonomous agent pipelines, workflow automation, and Gemini/OpenAI API integrations.",
		inclusions: [
			"Tailored prompt architectures & multi-step agent chains",
			"Zapier / Make / n8n workflow integrations",
			"Custom API connectors and automated data extraction",
			"Quality benchmarking, output verification, and live staff walkthrough"
		],
		typicalTurnaround: "24–48 hours",
		priceType: "quote",
		rateUSD: "$50 – $100 / hour",
		rateBDT: "5,000 – 10,000 TK / hour",
		depositPercent: 50,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: [
			"Target workflow description and current manual process",
			"Access to relevant tool API keys or test environment",
			"Sample inputs and expected structured outputs"
		],
		notIncluded: ["Third-party API subscription costs", "Proprietary platform license fees"],
		faq: [{
			question: "What tools can you automate?",
			answer: "We automate Google Workspace, Notion, Slack, Airtable, CRM pipelines, and custom Python/Node endpoints."
		}, {
			question: "How is the final rate calculated?",
			answer: "Quotes are based on workflow complexity and API integration scope."
		}],
		portalUrl: buildServicePortalUrl("ai-digital-productivity"),
		requestUrl: buildServiceRequestUrl("ai-digital-productivity")
	},
	{
		id: "technical-writing-proofreading",
		serviceId: "S-MRS-02",
		slug: "technical-writing-proofreading",
		category: "M R S Services",
		name: "Technical Writing & Proofreading",
		shortDescription: "Developer-grade tutorials, software user manuals, architectural walkthroughs, API reference docs, and meticulous proofreading.",
		inclusions: [
			"Structured Markdown/DOCX technical guides",
			"Annotated schematics and workflow diagrams",
			"Grammar, precision terminology, and code snippet testing",
			"Revision warranty until stakeholder sign-off"
		],
		typicalTurnaround: "2–4 business days",
		priceType: "quote",
		rateUSD: "$40 – $80 / hour",
		rateBDT: "4,000 – 8,000 TK / hour",
		depositPercent: 50,
		revisionsIncluded: 3,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: [
			"Feature specs or codebase link",
			"Target audience persona",
			"Style guide or formatting requirements"
		],
		notIncluded: ["Original software development"],
		samples: [{
			id: "smp-tw-1",
			title: "Microservices REST API Comprehensive Developer Manual",
			description: "80-page interactive developer onboarding and OpenAPI 3.1 specification.",
			results: "Passed internal compliance review with zero developer blockers."
		}],
		faq: [{
			question: "Can you document proprietary codebases?",
			answer: "Yes, with signed mutual non-disclosure and strict source code confidentiality."
		}],
		portalUrl: buildServicePortalUrl("technical-writing-proofreading"),
		requestUrl: buildServiceRequestUrl("technical-writing-proofreading")
	},
	{
		id: "website-management",
		serviceId: "S-MRS-03",
		slug: "website-management",
		category: "M R S Services",
		name: "Website Management & CMS",
		shortDescription: "Full CMS administration, Core Web Vitals optimization, on-page SEO, speed hardening, and rapid bug troubleshooting.",
		inclusions: [
			"CMS updates, plugin security audits, and automated backups",
			"PageSpeed score optimization (<2.0s load)",
			"Schema markup, canonicals, and image compression",
			"Mobile viewport layout troubleshooting"
		],
		typicalTurnaround: "24–72 hours",
		priceType: "quote",
		rateUSD: "$30 – $60 / hour",
		rateBDT: "3,000 – 6,000 TK / hour",
		depositPercent: 50,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: [
			"Temporary CMS Admin or hosting access",
			"List of target speed or layout issues",
			"Full backup authorization"
		],
		notIncluded: ["Premium plugin purchase fees", "External hosting migration server fees"],
		samples: [{
			id: "smp-web-1",
			title: "CMS Speed & Core Web Vitals Overhaul",
			description: "Reduced LCP from 5.4s to 1.1s on high-traffic content portal.",
			results: "Mobile PageSpeed score increased from 38 to 96."
		}],
		faq: [{
			question: "Which CMS platforms do you manage?",
			answer: "We manage modern CMS platforms, headless CMS deployments, and custom static or full-stack web portals."
		}],
		portalUrl: buildServicePortalUrl("website-management"),
		requestUrl: buildServiceRequestUrl("website-management")
	},
	{
		id: "it-support-troubleshooting",
		serviceId: "S-MRS-04",
		slug: "it-support-troubleshooting",
		category: "M R S Services",
		name: "IT Support & Troubleshooting",
		shortDescription: "Remote systems diagnostics, software configuration, peripheral connectivity, malware removal, and AnyDesk/RustDesk session support.",
		inclusions: [
			"Encrypted remote session via AnyDesk or RustDesk",
			"OS latency cleanup, registry repair, driver conflict resolution",
			"Network router DNS, VPN, and firewall security audits",
			"Post-session hardening notes and maintenance checklist"
		],
		typicalTurnaround: "Within 2–6 hours",
		priceType: "quote",
		rateUSD: "$25 – $50 / hour",
		rateBDT: "2,500 – 5,000 TK / hour",
		depositPercent: 100,
		revisionsIncluded: 1,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["AnyDesk or RustDesk session connection ID", "Detailed description of error message or symptom"],
		notIncluded: ["Hardware physical replacement"],
		faq: [{
			question: "How is remote access secured?",
			answer: "You supervise the entire screen session live and can terminate the connection at any instant."
		}],
		portalUrl: buildServicePortalUrl("it-support-troubleshooting"),
		requestUrl: buildServiceRequestUrl("it-support-troubleshooting")
	},
	{
		id: "app-store-publishing",
		serviceId: "S-MRS-05",
		slug: "app-store-publishing",
		category: "M R S Services",
		name: "App Store Publishing",
		shortDescription: "Submission management for Google Play Console and Apple App Store. Metadata compliance, policy verification, and signing.",
		inclusions: [
			"AAB/IPA bundle validation and 64-bit architecture checks",
			"Privacy policy URL linkage and Data Safety declaration",
			"Target audience classification and content rating questionnaire",
			"Rejection resolution guidance and resubmission review"
		],
		typicalTurnaround: "24–48 hours",
		priceType: "fixed",
		rateUSD: "$25 USD",
		rateBDT: "2,500 TK",
		depositPercent: 100,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: [
			"Google Play / Apple developer account invited access",
			"Signed release APK/AAB bundle",
			"Store assets (icon, screenshots, short/long description)"
		],
		notIncluded: ["Developer account enrollment fees ($25 Google / $99 Apple)"],
		faq: [{
			question: "Can you guarantee 100% store approval?",
			answer: "We ensure technical and policy compliance; ultimate approval authority resides with Google and Apple review boards."
		}],
		portalUrl: buildServicePortalUrl("app-store-publishing"),
		requestUrl: buildServiceRequestUrl("app-store-publishing")
	},
	{
		id: "ats-cv-resume",
		serviceId: "S-MRS-06",
		slug: "ats-cv-resume",
		category: "M R S Services",
		name: "Advanced ATS CV & Resume",
		shortDescription: "Executive resume rewrite engineered to clear modern Applicant Tracking Systems (Workday, Greenhouse, Taleo, Lever) with metrics-driven achievements.",
		inclusions: [
			"Full architectural resume restructuring for target roles",
			"Keyword density optimization and skills taxonomy alignment",
			"High-impact bullet point phrasing with quantifiable outcomes",
			"Dual deliverable: Print-ready vector PDF + editable Word/DOCX source"
		],
		typicalTurnaround: "24–48 hours",
		priceType: "fixed",
		rateUSD: "$15 USD",
		rateBDT: "1,500 TK",
		depositPercent: 50,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Current resume draft or career notes", "Link or text of 1–3 target job postings"],
		notIncluded: ["Cover letter (available as add-on quote)"],
		samples: [{
			id: "smp-cv-1",
			title: "Senior DevOps / SRE ATS Resume Overhaul",
			description: "Complete restructure for US/EU tech roles with 98% ATS scan score.",
			results: "Client secured 4 remote interviews within 14 days of distribution."
		}],
		faq: [{
			question: "What formats do you deliver?",
			answer: "Both an ATS-clean printable vector PDF and an editable Microsoft Word (DOCX) source file."
		}],
		portalUrl: buildServicePortalUrl("ats-cv-resume"),
		requestUrl: buildServiceRequestUrl("ats-cv-resume")
	},
	{
		id: "web-setup",
		serviceId: "S-MRS-07",
		slug: "web-setup",
		category: "M R S Services",
		name: "Web Setup Services",
		shortDescription: "Domain registration DNS routing, nameserver mapping, Cloudflare SSL configuration, business email setup, and hosting environment spin-up.",
		inclusions: [
			"DNS records management (A, CNAME, MX, TXT, SPF, DKIM, DMARC)",
			"Custom domain business email routing (Google Workspace / Zoho)",
			"Cloudflare CDN, TLS/SSL certificate, and DDoS protection",
			"Hosting cPanel / VPS / Netlify / Vercel initial provisioning"
		],
		typicalTurnaround: "12–24 hours",
		priceType: "hourly",
		rateUSD: "~$18 / hour",
		rateBDT: "~1,800 TK / hour",
		depositPercent: 50,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Registrar and hosting account credentials", "Domain ownership verification access"],
		notIncluded: ["Domain purchase or hosting subscription costs"],
		faq: [{
			question: "How long does DNS propagation take?",
			answer: "With Cloudflare DNS, propagation typically completes in 5 to 30 minutes."
		}],
		portalUrl: buildServicePortalUrl("web-setup"),
		requestUrl: buildServiceRequestUrl("web-setup")
	},
	{
		id: "tutoring",
		serviceId: "S-MRS-08",
		slug: "tutoring",
		category: "M R S Services",
		name: "Peer & Subject Tutoring",
		shortDescription: "Live 1-on-1 coaching in computer science, software engineering fundamentals, web development (React/Node), algorithms, and technical problem-solving.",
		inclusions: [
			"Live interactive video & screen-share lesson",
			"Hands-on code walkthrough and bug debugging guidance",
			"Curated exercise problem sets and reference cheat-sheets",
			"Session recording and notes repository access"
		],
		typicalTurnaround: "Scheduled by appointment",
		priceType: "hourly",
		rateUSD: "~$16 / hour",
		rateBDT: "~1,600 TK / hour",
		depositPercent: 100,
		revisionsIncluded: 1,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Syllabus, topics, or code problem statement in advance"],
		notIncluded: ["Completing academic exam submissions on behalf of student"],
		faq: [{
			question: "What platforms are used for tutoring?",
			answer: "Google Meet, Zoom, or Discord with interactive VS Code Live Share."
		}],
		portalUrl: buildServicePortalUrl("tutoring"),
		requestUrl: buildServiceRequestUrl("tutoring")
	},
	{
		id: "graphics-design",
		serviceId: "S-MRS-09",
		slug: "graphics-design",
		category: "M R S Services",
		name: "Graphics Design",
		shortDescription: "Vector logos, branding assets, social media banners, marketing collateral, UI icons, and technical system diagrams.",
		inclusions: [
			"Vector master files (SVG, EPS, AI) + Web exports (PNG, WebP)",
			"Color palette specifications and typography pairings",
			"Social media dimension presets (LinkedIn, X, YouTube)",
			"Full commercial usage rights upon completion"
		],
		typicalTurnaround: "24–48 hours",
		priceType: "hourly",
		rateUSD: "~$15 / hour",
		rateBDT: "~1,500 TK / hour",
		depositPercent: 50,
		revisionsIncluded: 3,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Brand guidelines, color preferences, copy text, or visual references"],
		notIncluded: ["Print press production delivery fees"],
		samples: [{
			id: "smp-gfx-1",
			title: "Minimalist Vector Wordmark & Brand Kit",
			description: "Complete brand identity kit with dark-mode optimized vector typography.",
			results: "High-res scalable vectors delivered across all web formats."
		}],
		faq: [{
			question: "Do I get the source files?",
			answer: "Yes, full vector source files (SVG/AI) are released upon project completion."
		}],
		portalUrl: buildServicePortalUrl("graphics-design"),
		requestUrl: buildServiceRequestUrl("graphics-design")
	},
	{
		id: "virtual-assistance",
		serviceId: "S-MRS-10",
		slug: "virtual-assistance",
		category: "M R S Services",
		name: "Virtual Assistance & Admin Support",
		shortDescription: "Executive administrative operations, email inbox management, calendar booking coordination, document formatting, and spreadsheet automation.",
		inclusions: [
			"Inbox triage, spam filtering, and structured drafting",
			"Calendar management and appointment scheduling",
			"Customer correspondence and support ticket routing",
			"Daily/weekly task completion summary logs"
		],
		typicalTurnaround: "Daily ongoing blocks",
		priceType: "quote",
		rateUSD: "$15 – $25 / hour",
		rateBDT: "1,500 – 2,500 TK / hour",
		depositPercent: 100,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Workflow SOPs, delegate email/tool permissions"],
		notIncluded: ["Legal or financial fiduciary execution"],
		faq: [{
			question: "How do we track hours?",
			answer: "We maintain a timestamped digital timesheet available live during delivery."
		}],
		portalUrl: buildServicePortalUrl("virtual-assistance"),
		requestUrl: buildServiceRequestUrl("virtual-assistance")
	},
	{
		id: "data-entry",
		serviceId: "S-MRS-11",
		slug: "data-entry",
		category: "M R S Services",
		name: "Data Entry",
		shortDescription: "High-accuracy data transcription, deduplication, schema normalization, CSV/JSON spreadsheet cleanup, and database population.",
		inclusions: [
			"Manual and script-assisted data normalization",
			"Strict error checking, duplicate removal, and validation rules",
			"Standardized CSV, Excel (.xlsx), or JSON export formatting",
			"Confidentiality assurance with immediate post-delivery data wipe"
		],
		typicalTurnaround: "24–48 hours",
		priceType: "hourly",
		rateUSD: "~$10 / hour",
		rateBDT: "~1,000 TK / hour",
		depositPercent: 100,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Source spreadsheets, PDFs, or database format specs"],
		notIncluded: ["Live external account scraping requiring login bypass"],
		faq: [{
			question: "What is your error rate guarantee?",
			answer: "We ensure a 99.8%+ accuracy benchmark with programmatic schema validation."
		}],
		portalUrl: buildServicePortalUrl("data-entry"),
		requestUrl: buildServiceRequestUrl("data-entry")
	},
	{
		id: "online-learning-resources",
		serviceId: "S-MRS-12",
		slug: "online-learning-resources",
		category: "M R S Services",
		name: "Online Learning Resources",
		shortDescription: "Custom curriculum design, interactive study blueprints, technical quiz authoring, and structured digital training materials.",
		inclusions: [
			"Modular lesson syllabus and learning objective mapping",
			"Code challenge problem sets with solution keys and rubrics",
			"Cheat-sheet quick references and summary slide decks",
			"LMS-compatible SCORM / Markdown export packages"
		],
		typicalTurnaround: "3–5 business days",
		priceType: "quote",
		rateUSD: "$20 – $40 / hour",
		rateBDT: "2,000 – 4,000 TK / hour",
		depositPercent: 50,
		revisionsIncluded: 2,
		guarantee: "Work matches the agreed scope or we fix it free.",
		clientMustProvide: ["Target course topic, learner level, and module outline"],
		notIncluded: ["Video hosting or third-party LMS licensing fees"],
		faq: [{
			question: "Can these materials be used for commercial courses?",
			answer: "Yes, full commercial ownership rights transfer upon completion."
		}],
		portalUrl: buildServicePortalUrl("online-learning-resources"),
		requestUrl: buildServiceRequestUrl("online-learning-resources")
	},
	{
		id: "iptv-vip-pass",
		serviceId: "S-IPTV-01",
		slug: "iptv-vip-pass",
		category: "M R S IPTV",
		name: "M R S IPTV VIP Pass",
		shortDescription: "High-definition live channels, sports, news, and global entertainment with 99.9% uptime. Available in 1, 2, 6, or 12-month plans.",
		inclusions: [
			"15,000+ HD/4K global channels (Live Sports, Cinema, News, Documentaries)",
			"Fast anti-freeze server infrastructure with 99.9% uptime guarantee",
			"Compatible with Smart TV, Firestick, Android, iOS, Windows, and MAG boxes",
			"Private M3U playlist & Xtream Codes credentials delivery upon verification"
		],
		typicalTurnaround: "Verified in 15–30 minutes",
		priceType: "plan",
		rateUSD: "1, 2, 6, 12 Month Plans",
		rateBDT: "1, 2, 6, 12 Month Plans",
		depositPercent: 100,
		revisionsIncluded: 0,
		guarantee: "Service functions reliably with guided setup support.",
		clientMustProvide: ["Target device type (Smart TV / Firestick / Phone) and preferred player app"],
		notIncluded: ["Physical media streaming hardware"],
		faq: [{
			question: "What devices are supported?",
			answer: "TiviMate, IPTV Smarters, VLC, Apple TV, Fire TV, Samsung/LG Smart TVs, and Android mobile."
		}, {
			question: "How are credentials delivered?",
			answer: "Private M3U playlist and Xtream Codes credentials are delivered securely after request verification."
		}],
		portalUrl: buildServicePortalUrl("iptv-vip-pass"),
		requestUrl: buildServiceRequestUrl("iptv-vip-pass")
	}
];
//#endregion
//#region src/data/siteDetailsData.ts
var CURATED_SITE_DETAILS = {
	"mrs-services.ai.studio": {
		category: "Automation & Digital Services Portal",
		badge: "SERVICES",
		description: "Automate. Deliver. Grow. Browse professional technical and digital solutions, request quotes, Client ID & PIN portal access, and SLA-backed delivery.",
		overview: "Dedicated digital services storefront and client operations portal of M R S. Features 12 specialized technical, web management, writing, design, and administrative services (S-MRS-01 to S-MRS-12) plus IPTV VIP Pass subscriptions (S-IPTV-01), with dedicated direct request endpoints (/request/:id), structured scope definitions, and transparent USD and BDT rates.",
		features: [
			"Direct per-service request intake pages (/request/:id) and catalog browsing",
			"12 technical, CMS, AI, and admin services plus M R S IPTV VIP Pass plans",
			"Client ID & PIN workspace portal with QA checklists and turnaround tracking",
			"Transparent USD and BDT pricing with clear scope inclusions and revision terms"
		],
		techHighlights: [
			"React + Router",
			"Direct Request URLs",
			"Client Workspace Portal",
			"USD & BDT Catalog"
		],
		audience: "Businesses, founders, and individuals commissioning remote IT, web, AI, or administrative solutions.",
		imageKey: "admin"
	},
	"shahin-iptv.ai.studio": {
		category: "Live Streaming & Media Platform",
		badge: "LIVE WEB APP",
		description: "A premium Android-style live sports and cinema streaming web application featuring Camellia Stream Doctor, real-time M3U playlist processing, direct m3u8 playback, and TV mode navigation.",
		overview: "Browser-based live TV and sports streaming platform engineered with an Android-style fullscreen interface. Processes live M3U playlists and direct HTTP Live Streaming (.m3u8) feeds on the fly, includes Camellia Stream Doctor automated diagnostics for broken stream recovery, supports Chromecast casting, and offers ad-supported 1-hour VIP viewing passes.",
		features: [
			"Direct m3u8 adaptive HLS video playback and real-time M3U playlist parsing",
			"Camellia Stream Doctor health checks and fallback stream recovery",
			"Keyboard-friendly Smart TV mode navigation and Google Cast sender support",
			"Personal favorites library and live sports, cinema, and global news categories"
		],
		techHighlights: [
			"HLS / m3u8 Engine",
			"Chromecast SDK",
			"TV Mode Navigation",
			"Camellia Stream Doctor"
		],
		audience: "Viewers streaming live sports, cinema, and international TV feeds directly from desktop, mobile, or Smart TV.",
		imageKey: "flagship"
	},
	"mrmahbubur.github.io/apps-store": {
		category: "Official IPTV & Software Store",
		badge: "APPS STORE",
		description: "Official MRS App Store owned by M R S — direct Android APK, Smart TV, and Windows (.exe, .msi, .msix, .zip) downloads with SHA-256 verification and real user reviews.",
		overview: "Official direct-download application distribution portal curated by M R S. Publishes signed M R S IPTV Android APKs, Android Smart TV builds, and Windows 10/11 desktop installers (.exe, .msi, .msix, .zip) without third-party store middlemen, backing every release with SHA-256 integrity hashes, QR code transfer links, and verified user reviews.",
		features: [
			"Direct hosting for M R S IPTV Android (API 26+) and Smart TV APK packages",
			"Verified Windows 10/11 desktop installer packages (.exe, .msi, .msix, .zip)",
			"Cryptographic SHA-256 checksum validation on every distributed release",
			"QR code scan-to-device download transfer and authentic user review logs"
		],
		techHighlights: [
			"SHA-256 Checksums",
			"Android & TV APKs",
			"Windows Installers",
			"QR Link Transfer"
		],
		audience: "Android phone, Smart TV, Firestick, and Windows desktop users downloading verified official software builds.",
		imageKey: "tech"
	},
	"mrs-pcn.ai.studio": {
		category: "Private Communication Network",
		badge: "PRIVATE APP",
		description: "Everything is Private And Safe",
		overview: "Production-grade private communication network designed around client-side zero-exposure cryptography. Generates and stores ECDH P-256 keypairs and AES-256-GCM encryption keys strictly on the user’s device, supporting end-to-end encrypted text messaging, authenticated private file sharing, WebRTC audio/video calling, and Secret Code account recovery.",
		features: [
			"Local ECDH P-256 key exchange and AES-256-GCM encrypted chat payloads",
			"Encrypted peer-to-peer WebRTC voice and video calling inside the browser",
			"Authenticated private file and document attachment transfers",
			"Installable PWA with Unique Secret Code identity and device key protection"
		],
		techHighlights: [
			"ECDH P-256",
			"AES-256-GCM",
			"WebRTC Audio/Video",
			"Installable PWA"
		],
		audience: "Individuals and distributed teams needing confidential, device-key protected messaging and calls.",
		imageKey: "tech"
	},
	"mrmahbubur.github.io/camellia-shop": {
		category: "Workspace Electronics & Hardware Store",
		badge: "E-COMMERCE",
		description: "Global E-commerce Site, For making life easier.",
		overview: "Curated hardware and workspace electronics storefront operated by M R S. Simplifies sourcing tested computing gear, desk setups, studio audio equipment, and everyday tech accessories by organizing verified Amazon Prime and Shopz BD listings inside a fast, lightweight static storefront.",
		features: [
			"Curated remote workstation electronics, keyboards, displays, and PC hardware",
			"Audio gear, microphones, headsets, and creator productivity equipment",
			"Direct verified fulfillment links to Amazon Prime and Shopz BD product pages",
			"Fast dark/light adaptive storefront built for instant global browsing"
		],
		techHighlights: [
			"Global Curated Catalog",
			"Hardware & Audio Gear",
			"Direct Fulfillment Links",
			"Zero-Bloat Storefront"
		],
		audience: "Remote workers, developers, and shoppers looking for vetted electronics and workstation hardware.",
		imageKey: "admin"
	},
	"mrmahbubur.github.io/charity-foundation": {
		category: "Humanitarian & Community Initiative",
		badge: "CHARITY",
		description: "M R S Charity Foundation — Poverty Ends With Us. Supporting rural child education, classroom meals, healthcare, clean water, and emergency relief through 100% free sponsor-backed giving.",
		overview: "Humanitarian click-to-donate initiative by M R S (“Poverty Ends With Us”) enabling anyone worldwide to fund real community aid without spending money or entering financial details. Sponsor-supported ad clicks directly fund free child education, school classrooms, hot midday meals, healthcare camps, and emergency flood relief batches with live batch tracking.",
		features: [
			"100% free click-to-donate humanitarian model requiring zero money from visitors",
			"Free rural child education, school supplies, classrooms, and daily hot midday meals",
			"Community healthcare access, clean drinking water, and flood crisis relief aid",
			"Live daily community aid batch counters tracking clicks toward real milestones"
		],
		techHighlights: [
			"100% Free Aid Model",
			"Sponsor-Funded Giving",
			"Education & Meals",
			"Disaster Relief"
		],
		audience: "Global visitors contributing free clicks to fund education, nutrition, healthcare, and crisis relief.",
		imageKey: "charity"
	},
	"mrmahbubur.github.io/camellia-ai": {
		category: "Multi-Provider AI Assistant",
		badge: "AI TOOL",
		description: "Camellia AI, the interactive assistant of M R S — multi-provider SSE streaming across Gemini, Anthropic, and OpenRouter with live search grounding, math, code, and voice.",
		overview: "Interactive multi-provider AI workspace built by M R S. Streams real-time SSE responses across Google Gemini, Anthropic Claude, and OpenRouter free & pro models with live Google Search grounding and source citations, multimodal file uploads (images, PDFs, and code up to 10MB), voice input/speech synthesis, and local browser-only chat persistence.",
		features: [
			"Multi-provider SSE streaming across Gemini, Anthropic, and OpenRouter models",
			"Live web search grounding with clickable inline citations and math/code formatting",
			"Multimodal image, PDF document, and source-code attachment analysis (up to 10MB)",
			"Browser-local conversation history, prompt editing, and voice interaction"
		],
		techHighlights: [
			"Multi-Provider SSE",
			"Search Grounding",
			"Multimodal 10MB",
			"Voice & Code Blocks"
		],
		audience: "Engineers, researchers, writers, and problem-solvers using grounded multi-model AI workflows.",
		imageKey: "tech"
	},
	"mrmahbubur.github.io/admin": {
		category: "Official Admin Hub Portal",
		badge: "ADMIN HUB",
		description: "Official M R S hub & live websites showcase. Available for Remote IT Support, Virtual Assistance & Administrative Work, Web Management, and Technical Documentation.",
		overview: "Central command hub and portfolio ecosystem portal of M R S. Continuously synchronizes profile credentials, technical competencies, real-time HTTP availability & response latency across all connected web properties via Server-Sent Events, and provides a verified catalog linking directly to service intake endpoints.",
		features: [
			"24/7 Server-Sent Events (SSE) synchronization with live ecosystem HTTP telemetry",
			"Unified showcase of all verified M R S web portals, capabilities, and site dossiers",
			"Full 13-service catalog wired directly to exact request URLs on mrs-services.ai.studio",
			"Verified external social directory and direct technical inquiry dispatch form"
		],
		techHighlights: [
			"24/7 SSE Sync",
			"Live HTTP Probing",
			"Service Catalog API",
			"Zero Personal Exposure"
		],
		audience: "Clients, organizations, and partners exploring M R S credentials, live sites, and remote services.",
		imageKey: "admin"
	},
	"mrxshahin.ai.studio": {
		category: "Official Portfolio & AI Concierge",
		badge: "AI CONCIERGE",
		description: "Certified IT Support, Remote System Administration, Microsoft Office document workflows, and Web Management. Interactive AI Concierge & Portfolio for M R S.",
		overview: "Interactive portfolio flagship and AI Voice Concierge of M R S. Features a multi-language spoken guided audio tour explaining each M R S platform in the visitor’s chosen language, interactive Camellia AI Q&A focused on IT support and credentials, verified network links, and official RSS & policy endpoints.",
		features: [
			"Interactive multi-language spoken Audio Concierge guided tour across all platforms",
			"Dedicated Camellia AI chat specialized in M R S credentials, IT support, and coding",
			"Executive credentials overview covering systems maintenance, documentation, and CMS work",
			"Official RSS feed (/rss.xml) and compliance policy endpoints (/api/policies/current)"
		],
		techHighlights: [
			"AI Voice Concierge",
			"Multi-Language Tour",
			"RSS XML Feed",
			"Interactive Portfolio"
		],
		audience: "Hiring managers, remote clients, and partners seeking an interactive narrated introduction to M R S.",
		imageKey: "flagship"
	},
	"mrs-smart-finds.onrender.com": {
		category: "Curated Shopping & Buying Guides",
		badge: "CURATED SHOP",
		description: "Thoughtful shopping starts here — carefully curated products, multilingual buying guides, and transparent retailer recommendations.",
		overview: "Independent product-discovery and smart shopping guide platform curated by M R S. Helps shoppers make confident choices with hand-selected product collections, concise comparison notes, 5-language support (English, Bangla, Hindi, Spanish, and Arabic), clear affiliate disclosures, and direct verified retailer referral links.",
		features: [
			"Instant product search bar across hand-selected collections and featured finds",
			"Multi-language interface supporting English, বাংলা, हिन्दी, Español, and العربية",
			"Practical 3-step buying checks and structured sizing and fabric product guides",
			"Transparent affiliate disclosure with direct verified retailer fulfillment links"
		],
		techHighlights: [
			"Multi-Language UI",
			"Product Search",
			"Buying Guides",
			"Transparent Disclosure"
		],
		audience: "Everyday shoppers comparing curated collections, apparel, and lifestyle finds with transparent retailer guidance.",
		imageKey: "admin"
	},
	"mrxshahin.onrender.com": {
		category: "Automated Tech & Releases Editorial",
		badge: "AUTO BLOG",
		description: "M R S Auto Blog — automated editorial publication monitoring ecosystem websites, releases, and technical dispatches with RSS syndication.",
		overview: "Automated editorial publication by M R S that continuously monitors connected web properties, GitHub commits, APK builds, and ecosystem launches. Generates grounded technical dispatches with bespoke 1280×720 article thumbnails and exposes a live RSS 2.0 XML feed (/rss.xml) for syndication.",
		features: [
			"Real-time monitoring of M R S websites, GitHub commits, and software releases",
			"Automated editorial dispatches paired with custom 1280×720 article thumbnails",
			"Standards-compliant RSS 2.0 and Media RSS feed (/rss.xml) for live syndication",
			"Categorized ecosystem changelog covering Cloud, IPTV, Portfolio, and APK updates"
		],
		techHighlights: [
			"Automated Monitoring",
			"RSS 2.0 / MRSS Feed",
			"Release Dispatches",
			"Bespoke Thumbnails"
		],
		audience: "Developers, followers, and subscribers tracking live releases and updates across M R S properties.",
		imageKey: "tech"
	}
};
function normalizeSiteLookupKey(rawUrl) {
	return String(rawUrl || "").trim().replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "").toLowerCase();
}
function resolveCuratedSiteDetail(normalizedKeyOrUrl, label = "") {
	const k = normalizeSiteLookupKey(normalizedKeyOrUrl);
	if (CURATED_SITE_DETAILS[k]) return CURATED_SITE_DETAILS[k];
	const cleanLabel = label.trim().toLowerCase();
	const hay = `${k} ${cleanLabel}`;
	if (hay.includes("mrs-services") || hay.includes("services-5jpe") || hay.includes("all services") || hay.includes("services portal")) return CURATED_SITE_DETAILS["mrs-services.ai.studio"];
	if (hay.includes("shahin-iptv") || hay.includes("iptv")) return CURATED_SITE_DETAILS["shahin-iptv.ai.studio"];
	if (hay.includes("apps-store") || hay.includes("apps store") || hay.includes("app store")) return CURATED_SITE_DETAILS["mrmahbubur.github.io/apps-store"];
	if (hay.includes("mrs-pcn") || hay.includes("p-c-n") || hay.includes("private-cn") || hay.includes("private c n") || hay.includes("private communication")) return CURATED_SITE_DETAILS["mrs-pcn.ai.studio"];
	if (hay.includes("camellia-shop") || hay.includes("camellia shop")) return CURATED_SITE_DETAILS["mrmahbubur.github.io/camellia-shop"];
	if (hay.includes("charity-foundation") || hay.includes("charity project") || hay.includes("charity")) return CURATED_SITE_DETAILS["mrmahbubur.github.io/charity-foundation"];
	if (hay.includes("camellia-ai") || hay.includes("camellia ai")) return CURATED_SITE_DETAILS["mrmahbubur.github.io/camellia-ai"];
	if (hay.includes("admin-maa0") || hay.includes("mrmahbubur.github.io/admin") || hay.includes("admin cloud") || hay.includes("admin hub") || cleanLabel === "cloud") return CURATED_SITE_DETAILS["mrmahbubur.github.io/admin"];
	if (hay.includes("mrxshahin.ai.studio") || hay.includes("ai portfolio") || hay.includes("ai concierge")) return CURATED_SITE_DETAILS["mrxshahin.ai.studio"];
	if (hay.includes("mrs-smart-finds") || hay.includes("smart-finds") || hay.includes("smart finds")) return CURATED_SITE_DETAILS["mrs-smart-finds.onrender.com"];
	if (hay.includes("mrxshahin.onrender") || hay.includes("auto blog") || cleanLabel === "blogs" || hay.includes("/blogs")) return CURATED_SITE_DETAILS["mrxshahin.onrender.com"];
}
function enrichWebsiteWithCuratedDetails(site) {
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
		audience: curated.audience || site.audience
	};
}
function enrichWebsitesStateWithCuratedDetails(state) {
	if (!state || !Array.isArray(state.websites)) return state;
	return {
		...state,
		websites: state.websites.map((site) => enrichWebsiteWithCuratedDetails(site))
	};
}
var CORE_WEBSITE_SEEDS = [
	{
		id: "proj-mrs-services",
		name: "All Services",
		url: "https://mrs-services.ai.studio/",
		domain: "mrs-services.ai.studio"
	},
	{
		id: "proj-3-iptv-web",
		name: "IPTV WEB",
		url: "https://shahin-iptv.ai.studio",
		domain: "shahin-iptv.ai.studio"
	},
	{
		id: "site-profile-a7b60340",
		name: "Apps Store",
		url: "https://mrmahbubur.github.io/APPS-STORE/",
		domain: "mrmahbubur.github.io"
	},
	{
		id: "site-profile-3bb884d2",
		name: "Private C N",
		url: "https://mrs-pcn.ai.studio/",
		domain: "mrs-pcn.ai.studio",
		hasProfileDescription: true
	},
	{
		id: "site-profile-067f4942",
		name: "Camellia Shop",
		url: "https://mrmahbubur.github.io/Camellia-Shop/",
		domain: "mrmahbubur.github.io",
		hasProfileDescription: true
	},
	{
		id: "site-profile-f58418d3",
		name: "Charity Project",
		url: "https://mrmahbubur.github.io/Charity-Foundation/",
		domain: "mrmahbubur.github.io"
	},
	{
		id: "site-profile-11431945",
		name: "Camellia Ai",
		url: "https://mrmahbubur.github.io/Camellia-Ai/",
		domain: "mrmahbubur.github.io"
	},
	{
		id: "site-profile-d8f3fd0c",
		name: "Cloud",
		url: "https://mrmahbubur.github.io/Admin/",
		domain: "mrmahbubur.github.io"
	},
	{
		id: "proj-6-ai-assistant",
		name: "Ai Portfolio",
		url: "https://mrxshahin.ai.studio/",
		domain: "mrxshahin.ai.studio"
	},
	{
		id: "site-smart-finds",
		name: "Smart Finds",
		url: "https://mrs-smart-finds.onrender.com",
		domain: "mrs-smart-finds.onrender.com"
	},
	{
		id: "site-auto-blog",
		name: "Blogs",
		url: "https://mrxshahin.onrender.com/",
		domain: "mrxshahin.onrender.com"
	}
];
function createDefaultCoreWebsites(initialStatus = "standby") {
	const checkedAt = (/* @__PURE__ */ new Date()).toISOString();
	return CORE_WEBSITE_SEEDS.map((seed) => enrichWebsiteWithCuratedDetails({
		id: seed.id,
		name: seed.name,
		url: seed.url,
		domain: seed.domain,
		category: "Verified Web Property",
		description: "",
		imageKey: "flagship",
		hasProfileDescription: seed.hasProfileDescription,
		status: initialStatus,
		lastChecked: checkedAt,
		isCore: true,
		latestPosts: []
	}));
}
//#endregion
//#region src/context/StudioContext.tsx
var import_jsx_runtime = require_jsx_runtime();
var initialYearly = {
	currentYear: getCurrentYear(),
	establishedYear: ESTABLISHED_YEAR,
	copyrightNotice: getCopyrightNotice()
};
var defaultAdminProfile = {
	siteName: ADMIN_SITE_CONFIG.siteName,
	roleTitle: ADMIN_SITE_CONFIG.roleTitle,
	tagline: ADMIN_SITE_CONFIG.tagline,
	location: ADMIN_SITE_CONFIG.location,
	timezone: "GMT+06:00",
	headerImage: "https://1.gravatar.com/userimage/140624186/eb80b95de8da05aca3d1b6e47836f736?size=1024",
	avatarUrl: ADMIN_SITE_CONFIG.avatarUrl,
	avatarAltText: "M R S official profile portrait",
	pronouns: "",
	pronunciation: "",
	lastProfileEdit: "",
	certification: ADMIN_SITE_CONFIG.certification,
	availabilityNote: ADMIN_SITE_CONFIG.availabilityNote,
	bioParagraphs: ["I help businesses, entrepreneurs, and individuals simplify their daily operations, solve technical problems, manage digital tasks, and stay productive — without the overhead of hiring a full-time employee.", "With years of independent online work experience and a strong interest in technology, web solutions, and digital productivity, I can support a wide range of technical, administrative, and content-related tasks remotely."],
	whyWorkWithMe: [
		"I value accuracy, reliability, clear communication, and independent problem-solving. I am comfortable working remotely, handling asynchronous tasks, and organizing my workload around agreed deadlines.",
		"I focus on understanding the desired outcome, finding a practical way to achieve it, and delivering organized work with minimal unnecessary back-and-forth.",
		"I am particularly interested in opportunities where technology, administration, research, writing, and digital solutions come together."
	],
	backgroundHighlights: [
		"Certified: 360-hour computer systems course",
		"Technical writing: Writing technology guides and solutions since 2018",
		"Remote work: Years of independent online work experience",
		"Work style: Self-directed, detail-oriented, adaptable, and comfortable across time zones"
	],
	whatICanHelpWith: [
		"IT Support & Technical Troubleshooting",
		"Virtual Assistance & Administrative Support",
		"Website Management & Digital Content",
		"Technical Writing & Documentation",
		"Online Research & Digital Problem-Solving"
	],
	liveServices: [
		{
			title: "IT Support & Technical Troubleshooting",
			items: [
				"Windows PC troubleshooting and basic system maintenance",
				"Android device support and app-related troubleshooting",
				"Browser, internet connectivity, Wi-Fi, and common software issues",
				"Software installation, configuration, and basic technical guidance",
				"Step-by-step technical documentation and user support"
			]
		},
		{
			title: "Virtual Assistance & Administrative Support",
			items: [
				"Data entry, data organization, and document formatting",
				"Microsoft Word, Excel, PowerPoint, and office productivity tasks",
				"Email management, professional correspondence, and inbox organization",
				"Online research, information collection, and data verification",
				"Form filling, job application assistance, and document preparation",
				"File organization, record keeping, and digital documentation",
				"Task coordination and routine administrative assistance"
			]
		},
		{
			title: "Website Management & Digital Content",
			items: [
				"Website content updates and basic website administration",
				"Blog post publishing and content formatting",
				"CMS and web content management",
				"SEO-friendly article writing and on-page content optimization",
				"Website testing, troubleshooting, and basic usability checks",
				"Web research, content planning, and topic development",
				"AI-assisted content creation, editing, and proofreading"
			]
		},
		{
			title: "Technical Writing & Documentation",
			items: [
				"Writing technology guides, tutorials, and how-to articles",
				"Creating step-by-step troubleshooting instructions",
				"Explaining websites, apps, and digital tools in simple language",
				"Preparing FAQs, user guides, and knowledge-base articles",
				"Rewriting, proofreading, and improving existing content",
				"Creating informative articles about software, websites, apps, and online services"
			]
		},
		{
			title: "Online Research & Digital Problem-Solving",
			items: [
				"Finding and evaluating online resources",
				"Researching websites, apps, and technology solutions",
				"Comparing digital tools and identifying practical alternatives",
				"Organizing research findings into clear, useful reports",
				"Testing online services and documenting user experiences",
				"Identifying workflow improvements and opportunities for automation"
			]
		},
		{
			title: "AI Tools & Productivity Assistance",
			items: [
				"Using AI tools to support research, writing, and content development",
				"Improving repetitive workflows with practical digital tools",
				"Assisting with AI-generated content review and refinement",
				"Developing detailed prompts for writing, research, and creative tasks",
				"Exploring no-code and low-code solutions for everyday business needs"
			]
		},
		{
			title: "Social Media & Online Business Support",
			items: [
				"Preparing social media posts, captions, and content descriptions",
				"Managing content schedules and organizing publishing materials",
				"Creating promotional copy for websites, apps, and digital services",
				"Assisting with basic online brand and content management",
				"Supporting digital projects through research, documentation, and coordination"
			]
		}
	],
	workExperience: [{
		role: "Available for Remote IT Support, Virtual Assistance & Administrative Work",
		period: "2018 – Present",
		location: "Global / Remote",
		highlights: [
			"Certified: 360-hour computer systems course",
			"Technical writing: Writing technology guides and solutions since 2018",
			"Remote work: Years of independent online work experience",
			"Work style: Self-directed, detail-oriented, adaptable, and comfortable across time zones"
		]
	}],
	skillsList: [
		{
			category: "IT Support & Technical Troubleshooting",
			skills: [
				"Windows PC troubleshooting and basic system maintenance",
				"Android device support and app-related troubleshooting",
				"Browser, internet connectivity, Wi-Fi, and common software issues",
				"Software installation, configuration, and basic technical guidance",
				"Step-by-step technical documentation and user support"
			]
		},
		{
			category: "Virtual Assistance & Administrative Support",
			skills: [
				"Data entry, data organization, and document formatting",
				"Microsoft Word, Excel, PowerPoint, and office productivity tasks",
				"Email management, professional correspondence, and inbox organization",
				"Online research, information collection, and data verification",
				"Form filling, job application assistance, and document preparation"
			]
		},
		{
			category: "Website Management & Digital Content",
			skills: [
				"Website content updates and basic website administration",
				"CMS and web content management",
				"SEO-friendly article writing and on-page content optimization",
				"Website testing, troubleshooting, and basic usability checks",
				"AI-assisted content creation, editing, and proofreading"
			]
		},
		{
			category: "Technical Interests & Focus Areas",
			skills: [
				"Web Development",
				"web3",
				"ethical hacking",
				"Social Sciences",
				"Remote Working"
			]
		}
	],
	coursesCertifications: [
		"360-hour computer systems course",
		"Writing technology guides and solutions since 2018",
		"Years of independent online work experience"
	],
	education: [],
	languages: [{
		name: "English",
		level: "Proficient"
	}],
	interests: [
		"Web Development",
		"web3",
		"ethical hacking",
		"Social Sciences",
		"Remote Working"
	],
	socials: {
		email: "",
		phone: "",
		githubUrl: "https://github.com/mrmahbubur",
		linkedinUrl: "https://www.linkedin.com/in/mrmahbubur",
		xUrl: "https://x.com/Mrshahinx",
		blueskyUrl: "https://bsky.app/profile/mrxshahin.bsky.social",
		calendlyUrl: "https://calendly.com/mrxshahin",
		contactForm: "https://mrs-services.ai.studio/",
		goodreadsUrl: "https://www.goodreads.com/mrxshahin"
	},
	verifiedAccounts: [
		{
			label: "X",
			handle: "@Mrshahinx",
			url: "https://x.com/Mrshahinx"
		},
		{
			label: "GitHub",
			handle: "mrmahbubur",
			url: "https://github.com/mrmahbubur"
		},
		{
			label: "Bluesky",
			handle: "mrxshahin.bsky.social",
			url: "https://bsky.app/profile/mrxshahin.bsky.social"
		},
		{
			label: "LinkedIn",
			handle: "mrmahbubur",
			url: "https://www.linkedin.com/in/mrmahbubur"
		},
		{
			label: "Goodreads",
			handle: "goodreads.com/mrxshahin",
			url: "https://www.goodreads.com/mrxshahin"
		}
	]
};
var fallbackWebsites = createDefaultCoreWebsites("online");
var fallbackUpstreamStatus = {
	sourceUrl: "",
	connected: false,
	sseActive: false,
	healthStatus: "connecting",
	lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString(),
	rssItems: []
};
var fallbackServicesPortalStatus = {
	url: SERVICES_PORTAL_URL,
	status: "online",
	lastChecked: (/* @__PURE__ */ new Date()).toISOString()
};
var fallbackHubState = {
	siteName: "M R S",
	sourceUrl: "",
	upstreamStatus: fallbackUpstreamStatus,
	adminProfile: defaultAdminProfile,
	lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
	syncCycle: 0,
	yearlySystem: initialYearly,
	websites: fallbackWebsites,
	servicesCatalog: MRS_SERVICES_CATALOG,
	servicesPortalStatus: fallbackServicesPortalStatus
};
async function parseJsonIfAvailable(res) {
	const ct = res.headers.get("content-type") || "";
	if (!res.ok || !ct.includes("application/json")) return null;
	try {
		return await res.json();
	} catch {
		return null;
	}
}
var StudioContext = (0, import_react.createContext)({
	hubState: fallbackHubState,
	upstreamStatus: fallbackUpstreamStatus,
	adminProfile: defaultAdminProfile,
	websites: fallbackHubState.websites,
	servicesCatalog: MRS_SERVICES_CATALOG,
	servicesPortalStatus: fallbackServicesPortalStatus,
	yearly: initialYearly,
	isSyncing: false,
	sseConnected: false,
	selectedInquiryTopic: "General Inquiry",
	setSelectedInquiryTopic: () => {},
	syncWebsites: async () => {}
});
var StudioProvider = ({ children }) => {
	const [hubState, setHubState] = (0, import_react.useState)(() => enrichWebsitesStateWithCuratedDetails(fallbackHubState));
	const [isSyncing, setIsSyncing] = (0, import_react.useState)(false);
	const [sseConnected, setSseConnected] = (0, import_react.useState)(false);
	const [selectedInquiryTopic, setSelectedInquiryTopic] = (0, import_react.useState)("General Inquiry");
	const runClientSideSync = async () => {
		setHubState((prev) => enrichWebsitesStateWithCuratedDetails({
			...prev,
			siteName: prev.adminProfile.siteName || prev.siteName,
			websites: prev.websites.map((site) => ({
				...site,
				lastChecked: (/* @__PURE__ */ new Date()).toISOString()
			})),
			lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
			syncCycle: prev.syncCycle + 1
		}));
	};
	const fetchWebsites = async () => {
		try {
			const json = await parseJsonIfAvailable(await fetch(`./api/websites?_t=${Date.now()}`, { cache: "no-store" }));
			if (json?.success && json?.data) {
				setHubState(enrichWebsitesStateWithCuratedDetails(json.data));
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
			const json = await parseJsonIfAvailable(await fetch("./api/websites/sync", { method: "POST" }));
			if (json?.success && json?.data) {
				setHubState(enrichWebsitesStateWithCuratedDetails(json.data));
				return;
			}
			await runClientSideSync();
		} catch {
			await runClientSideSync();
		} finally {
			setIsSyncing(false);
		}
	};
	(0, import_react.useEffect)(() => {
		let eventSource = null;
		let reconnectTimer = null;
		let pollInterval = null;
		let reconnectDelayMs = 1500;
		let sseStarted = false;
		let mounted = true;
		const connectSSE = () => {
			if (!mounted) return;
			if (eventSource) try {
				eventSource.close();
			} catch {}
			sseStarted = true;
			try {
				eventSource = new EventSource("./api/websites/stream");
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
							setHubState(enrichWebsitesStateWithCuratedDetails(payload.data));
							setSseConnected(true);
						}
					} catch {}
				};
				eventSource.onerror = () => {
					if (mounted) setSseConnected(false);
					try {
						eventSource?.close();
					} catch {}
					eventSource = null;
					if (mounted) {
						const delay = reconnectDelayMs;
						reconnectDelayMs = Math.min(reconnectDelayMs * 2, 15e3);
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
				pollInterval = setInterval(refreshOrUpgrade, 15e3);
			} else if (!ok && !sseStarted) await runClientSideSync();
		};
		const handleVisibilityOrFocus = () => {
			if (!mounted) return;
			if (document.visibilityState === "visible") refreshOrUpgrade().catch(() => {});
		};
		const handleOnline = () => {
			if (!mounted) return;
			refreshOrUpgrade().catch(() => {});
			if (!eventSource) connectSSE();
		};
		document.addEventListener("visibilitychange", handleVisibilityOrFocus);
		window.addEventListener("focus", handleVisibilityOrFocus);
		window.addEventListener("online", handleOnline);
		(async () => {
			const hasBackend = await fetchWebsites();
			if (!mounted) return;
			if (hasBackend) {
				connectSSE();
				pollInterval = setInterval(refreshOrUpgrade, 15e3);
			} else {
				await runClientSideSync();
				pollInterval = setInterval(refreshOrUpgrade, 1e4);
			}
		})();
		return () => {
			mounted = false;
			document.removeEventListener("visibilitychange", handleVisibilityOrFocus);
			window.removeEventListener("focus", handleVisibilityOrFocus);
			window.removeEventListener("online", handleOnline);
			if (pollInterval) clearInterval(pollInterval);
			if (reconnectTimer) clearTimeout(reconnectTimer);
			if (eventSource) eventSource.close();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioContext.Provider, {
		value: {
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
			syncWebsites
		},
		children
	});
};
var useStudio = () => (0, import_react.useContext)(StudioContext);
//#endregion
//#region src/components/Navbar.tsx
var NAV_LINKS = [
	{
		id: "websites-section",
		label: "Websites"
	},
	{
		id: "services-section",
		label: "Services"
	},
	{
		id: "about-section",
		label: "Credentials"
	},
	{
		id: "skills-section",
		label: "Skills"
	},
	{
		id: "sponsors-section",
		label: "Sponsors"
	},
	{
		id: "contact-section",
		label: "Contact"
	}
];
var Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("websites-section");
	const { adminProfile } = useStudio();
	(0, import_react.useEffect)(() => {
		const elements = NAV_LINKS.map((l) => l.id).map((id) => document.getElementById(id)).filter((el) => el !== null);
		if (elements.length === 0 || typeof IntersectionObserver === "undefined") return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
		}, {
			rootMargin: "-20% 0px -55% 0px",
			threshold: [
				.1,
				.35,
				.6
			]
		});
		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-[#f4f7fb]/90 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: scrollToTop,
					className: "font-display text-xl font-extrabold tracking-tight text-[#0f172a] dark:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]",
					"aria-label": `${adminProfile.siteName} Home`,
					children: adminProfile.siteName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#475569] dark:text-[#94a3b8]",
					children: NAV_LINKS.map((link) => {
						const isActive = activeSection === link.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${link.id}`,
							className: `whitespace-nowrap shrink-0 transition-colors underline-offset-4 hover:underline ${isActive ? "text-[#2563eb] dark:text-[#38bdf8] font-semibold" : "hover:text-[#2563eb] dark:hover:text-[#38bdf8]"}`,
							children: link.label
						}, link.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact-section",
						className: "whitespace-nowrap shrink-0 inline-flex items-center justify-center px-3.5 sm:px-4 py-2 min-h-[40px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12.5px] sm:text-[13px] font-semibold transition-colors",
						children: ["Contact ", adminProfile.siteName]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileMenuOpen((prev) => !prev),
						className: "md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-[#475569] dark:text-[#94a3b8] hover:bg-[#dbe3ee]/60 dark:hover:bg-[#1c273b]/70 transition-colors cursor-pointer",
						"aria-label": "Toggle navigation",
						children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
					})]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] px-4 py-3 space-y-1 text-sm font-medium",
			children: NAV_LINKS.map((link) => {
				const isActive = activeSection === link.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${link.id}`,
					onClick: () => setMobileMenuOpen(false),
					className: `block py-2.5 ${isActive ? "text-[#2563eb] dark:text-[#38bdf8] font-semibold" : "text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa]"}`,
					children: link.label
				}, link.id);
			})
		})]
	});
};
//#endregion
//#region src/components/Hero.tsx
var Hero = ({ darkMode, onToggleDarkMode }) => {
	const { adminProfile, websites, upstreamStatus, yearly } = useStudio();
	const onlineCount = websites.filter((site) => site.status === "online").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero-section",
		className: "pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-[#dbe3ee] dark:border-[#1c273b] tech-hero-canvas transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#dbe3ee] dark:border-[#1c273b]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[13px] font-medium text-[#475569] dark:text-[#94a3b8] flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-semibold text-[#2563eb] dark:text-[#38bdf8]",
								children: "Verified Profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: adminProfile.location }),
							adminProfile.timezone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "·"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono tabular-nums",
								children: adminProfile.timezone
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono tabular-nums",
								children: ["Since ", yearly.establishedYear]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onToggleDarkMode,
						className: "whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white/90 dark:bg-[#0c121e]/90 tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer",
						"aria-label": "Toggle color theme",
						children: [darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-3.5 h-3.5 text-[#38bdf8]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-3.5 h-3.5 text-[#2563eb]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: darkMode ? "Light Theme" : "Dark Theme" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 flex flex-col justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display font-extrabold text-[#0f172a] dark:text-white tracking-tight leading-[1.04] text-balance",
									style: { fontSize: "clamp(2.25rem, 5vw, 4.25rem)" },
									children: adminProfile.siteName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg sm:text-[20px] font-semibold text-[#1e293b] dark:text-[#e2e8f0] leading-snug max-w-2xl",
									children: adminProfile.roleTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15px] sm:text-[16px] text-[#475569] dark:text-[#94a3b8] leading-relaxed max-w-[60ch]",
									children: adminProfile.tagline && adminProfile.tagline !== adminProfile.roleTitle ? `${adminProfile.tagline}. ${adminProfile.availabilityNote}` : adminProfile.availabilityNote
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#websites-section",
								className: "whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore All Websites" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "w-4 h-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: adminProfile.socials.calendlyUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white/90 dark:bg-[#0c121e]/90 tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[#0f172a] dark:text-[#f1f5f9] text-[13.5px] font-semibold transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Calendly" })]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full flex flex-col justify-between overflow-hidden rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white/95 dark:bg-[#0c121e]/95 backdrop-blur-sm tech-surface",
							children: [adminProfile.headerImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-20 w-full overflow-hidden border-b border-[#dbe3ee] dark:border-[#1c273b] bg-[#070b14]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: adminProfile.headerImage,
									alt: `${adminProfile.siteName} banner`,
									referrerPolicy: "no-referrer",
									className: "w-full h-full object-cover opacity-80"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-[#070b14]/30 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 sm:p-7 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 pb-5 border-b border-[#dbe3ee] dark:border-[#1c273b]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 h-16 rounded-full overflow-hidden border-2 border-[#2563eb]/80 dark:border-[#38bdf8]/80 bg-[#070b14] shrink-0 flex items-center justify-center text-white font-display font-bold text-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: adminProfile.avatarUrl,
											alt: adminProfile.avatarAltText || adminProfile.siteName,
											referrerPolicy: "no-referrer",
											className: "w-full h-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl font-bold text-[#0f172a] dark:text-white leading-tight",
											children: adminProfile.siteName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[12.5px] font-medium text-[#2563eb] dark:text-[#38bdf8] mt-0.5 leading-snug",
											children: adminProfile.certification
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "divide-y divide-[#dbe3ee] dark:divide-[#1c273b] text-[13px] pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "py-3 flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#64748b] dark:text-[#94a3b8]",
												children: "Operating Base"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold text-[#0f172a] dark:text-[#f1f5f9] text-right",
												children: [adminProfile.location, adminProfile.timezone ? ` (${adminProfile.timezone})` : ""]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "py-3 flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#64748b] dark:text-[#94a3b8]",
												children: "Services Portal"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://mrs-services.ai.studio/",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "font-mono text-[12.5px] font-medium text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] truncate",
												children: "mrs-services.ai.studio"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "py-3 flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#64748b] dark:text-[#94a3b8]",
												children: "Scheduling"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: adminProfile.socials.calendlyUrl,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "font-mono text-[12.5px] font-medium text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] truncate",
												children: "calendly.com/mrxshahin"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-3 flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#64748b] dark:text-[#94a3b8]",
												children: "Availability"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact-section",
												className: "font-medium text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4 text-right",
												children: "Remote & Contract"
											})]
										})
									]
								})]
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#dbe3ee] dark:bg-[#1c273b] overflow-hidden tech-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 bg-white dark:bg-[#0c121e]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums",
								children: ["Since ", yearly.establishedYear]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5",
								children: "Remote IT & Web Management"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 bg-white dark:bg-[#0c121e]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums truncate",
								children: [
									adminProfile.languages?.[0]?.name || "English",
									" · ",
									adminProfile.languages?.[0]?.level || "Proficient"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5 truncate",
								children: adminProfile.certification
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 bg-white dark:bg-[#0c121e]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums",
								children: [websites.length, " Live Sites"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5",
								children: "Official Digital Properties"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 bg-white dark:bg-[#0c121e]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums",
								children: onlineCount > 0 ? `${onlineCount}/${websites.length} Online` : upstreamStatus.sseActive || upstreamStatus.connected ? "Live" : "Active"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5",
								children: "Real-Time Status"
							})]
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
/**
* Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
*/
/**
* Set a given ref to a given value
* This utility takes care of different types of refs: callback refs and RefObject(s)
*/
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
/**
* A utility to compose multiple refs together
* Accepts callback refs and RefObject(s)
*/
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
/**
* A custom hook that composes multiple refs
* Accepts callback refs and RefObject(s)
*/
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
/**
* Measurement functionality has to be within a separate component
* to leverage snapshot lifecycle.
*/
var PopChildMeasure = class extends import_react.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
			const parent = element.offsetParent;
			const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
			const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
			const computedStyle = getComputedStyle(element);
			const size = this.props.sizeRef.current;
			size.height = parseFloat(computedStyle.height);
			size.width = parseFloat(computedStyle.width);
			size.top = element.offsetTop;
			size.left = element.offsetLeft;
			size.right = parentWidth - size.width - size.left;
			size.bottom = parentHeight - size.height - size.top;
			size.direction = computedStyle.direction;
		}
		return null;
	}
	/**
	* Required with getSnapshotBeforeUpdate to stop React complaining.
	*/
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
	const id = (0, import_react.useId)();
	const ref = (0, import_react.useRef)(null);
	const size = (0, import_react.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	});
	const { nonce } = (0, import_react.useContext)(MotionConfigContext);
	const composedRef = useComposedRefs(ref, pop !== false ? children.props?.ref ?? children?.ref : void 0);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	(0, import_react.useInsertionEffect)(() => {
		const { width, height, top, left, right, bottom, direction } = size.current;
		if (isPresent || pop === false || !ref.current || !width || !height) return;
		const isRTL = direction === "rtl";
		const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
		const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
		ref.current.dataset.motionPopId = id;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		const parent = root ?? document.head;
		parent.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
		return () => {
			ref.current?.removeAttribute("data-motion-pop-id");
			if (parent.contains(style)) parent.removeChild(style);
		};
	}, [isPresent]);
	return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
		isPresent,
		childRef: ref,
		sizeRef: size,
		pop,
		children: pop === false ? children : import_react.cloneElement(children, { ref: composedRef })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id = (0, import_react.useId)();
	const isPresentRef = (0, import_react.useRef)(isPresent);
	const onExitCompleteRef = (0, import_react.useRef)(onExitComplete);
	useIsomorphicLayoutEffect(() => {
		isPresentRef.current = isPresent;
		onExitCompleteRef.current = onExitComplete;
	});
	let isReusedContext = true;
	let context = (0, import_react.useMemo)(() => {
		isReusedContext = false;
		return {
			id,
			initial,
			isPresent,
			custom,
			onExitComplete: (childId) => {
				presenceChildren.set(childId, true);
				for (const isComplete of presenceChildren.values()) if (!isComplete) return;
				onExitComplete && onExitComplete();
			},
			register: (childId) => {
				presenceChildren.set(childId, false);
				return () => {
					presenceChildren.delete(childId);
					!isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
				};
			}
		};
	}, [
		isPresent,
		presenceChildren,
		onExitComplete
	]);
	/**
	* If the presence of a child affects the layout of the components around it,
	* we want to make a new context value to ensure they get re-rendered
	* so they can detect that layout change.
	*/
	if (presenceAffectsLayout && isReusedContext) context = { ...context };
	(0, import_react.useMemo)(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent]);
	/**
	* If there's no `motion` components to fire exit animations, we want to remove this
	* component immediately.
	*/
	import_react.useEffect(() => {
		!isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent]);
	children = (0, import_jsx_runtime.jsx)(PopChild, {
		pop: mode === "popLayout",
		isPresent,
		anchorX,
		anchorY,
		root,
		children
	});
	return (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
		value: context,
		children
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
	const filtered = [];
	import_react.Children.forEach(children, (child) => {
		if ((0, import_react.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
/**
* `AnimatePresence` enables the animation of components that have been removed from the tree.
*
* When adding/removing more than a single child, every child **must** be given a unique `key` prop.
*
* Any `motion` components that have an `exit` property defined will animate out when removed from
* the tree.
*
* ```jsx
* import { motion, AnimatePresence } from 'framer-motion'
*
* export const Items = ({ items }) => (
*   <AnimatePresence>
*     {items.map(item => (
*       <motion.div
*         key={item.id}
*         initial={{ opacity: 0 }}
*         animate={{ opacity: 1 }}
*         exit={{ opacity: 0 }}
*       />
*     ))}
*   </AnimatePresence>
* )
* ```
*
* You can sequence exit animations throughout a tree using variants.
*
* If a child contains multiple `motion` components with `exit` props, it will only unmount the child
* once all `motion` components have finished animating out. Likewise, any components using
* `usePresence` all need to call `safeToRemove`.
*
* @public
*/
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
	const [isParentPresent, safeToRemove] = usePresence(propagate);
	/**
	* Filter any children that aren't ReactElements. We can only track components
	* between renders with a props.key.
	*/
	const presentChildren = (0, import_react.useMemo)(() => onlyElements(children), [children]);
	/**
	* Track the keys of the currently rendered children. This is used to
	* determine which children are exiting.
	*/
	const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
	/**
	* If `initial={false}` we only want to pass this to components in the first render.
	*/
	const isInitialRender = (0, import_react.useRef)(true);
	/**
	* A ref containing the currently present children. When all exit animations
	* are complete, we use this to re-render the component with the latest children
	* *committed* rather than the latest children *rendered*.
	*/
	const pendingPresentChildren = (0, import_react.useRef)(presentChildren);
	/**
	* Track which exiting children have finished animating out.
	*/
	const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
	/**
	* Track which components are currently processing exit to prevent duplicate processing.
	*/
	const exitingComponents = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	/**
	* Save children to render as React state. To ensure this component is concurrent-safe,
	* we check for exiting children via an effect.
	*/
	const [diffedChildren, setDiffedChildren] = (0, import_react.useState)(presentChildren);
	const [renderedChildren, setRenderedChildren] = (0, import_react.useState)(presentChildren);
	useIsomorphicLayoutEffect(() => {
		isInitialRender.current = false;
		pendingPresentChildren.current = presentChildren;
		/**
		* Update complete status of exiting children.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const key = getChildKey(renderedChildren[i]);
			if (!presentKeys.includes(key)) {
				if (exitComplete.get(key) !== true) exitComplete.set(key, false);
			} else {
				exitComplete.delete(key);
				exitingComponents.current.delete(key);
			}
		}
	}, [
		renderedChildren,
		presentKeys.length,
		presentKeys.join("-")
	]);
	const exitingChildren = [];
	if (presentChildren !== diffedChildren) {
		let nextChildren = [...presentChildren];
		/**
		* Loop through all the currently rendered components and decide which
		* are exiting.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const child = renderedChildren[i];
			const key = getChildKey(child);
			if (!presentKeys.includes(key)) {
				nextChildren.splice(i, 0, child);
				exitingChildren.push(child);
			}
		}
		/**
		* If we're in "wait" mode, and we have exiting children, we want to
		* only render these until they've all exited.
		*/
		if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
		setRenderedChildren(onlyElements(nextChildren));
		setDiffedChildren(presentChildren);
		/**
		* Early return to ensure once we've set state with the latest diffed
		* children, we can immediately re-render.
		*/
		return null;
	}
	/**
	* If we've been provided a forceRender function by the LayoutGroupContext,
	* we can use it to force a re-render amongst all surrounding components once
	* all components have finished animating out.
	*/
	const { forceRender } = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
		const key = getChildKey(child);
		const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
		const onExit = () => {
			if (exitingComponents.current.has(key)) return;
			if (exitComplete.has(key)) {
				exitingComponents.current.add(key);
				exitComplete.set(key, true);
			} else return;
			let isEveryExitComplete = true;
			exitComplete.forEach((isExitComplete) => {
				if (!isExitComplete) isEveryExitComplete = false;
			});
			if (isEveryExitComplete) {
				forceRender?.();
				setRenderedChildren(pendingPresentChildren.current);
				propagate && safeToRemove?.();
				onExitComplete && onExitComplete();
			}
		};
		return (0, import_jsx_runtime.jsx)(PresenceChild, {
			isPresent,
			initial: !isInitialRender.current || initial ? void 0 : false,
			custom,
			presenceAffectsLayout,
			mode,
			root,
			onExitComplete: isPresent ? void 0 : onExit,
			anchorX,
			anchorY,
			children: child
		}, key);
	}) });
};
//#endregion
//#region src/assets/images/studio_flagship_portal_1794517091830.jpg
var studio_flagship_portal_1794517091830_default = new URL("studio_flagship_portal_1794517091830-DFH_hZZG.jpg", import.meta.url).href;
//#endregion
//#region src/data/mediaAssets.ts
var WEBSITE_MEDIA_MAP = {
	flagship: studio_flagship_portal_1794517091830_default,
	admin: new URL("business_admin_portal_1794517092190-eNKNtXiT.jpg", import.meta.url).href,
	tech: new URL("tech_learning_hub_1794517093096-CSPOFsWf.jpg", import.meta.url).href,
	charity: new URL("charity_foundation_portal_1794517091973-CQS6B_AX.jpg", import.meta.url).href
};
function resolveWebsiteImage(imageKey) {
	if (imageKey && imageKey in WEBSITE_MEDIA_MAP) return WEBSITE_MEDIA_MAP[imageKey];
	return studio_flagship_portal_1794517091830_default;
}
//#endregion
//#region src/data/sponsorsData.ts
var SPONSOR_ADS_LINKS = [
	{
		id: "sponsor-11226634",
		zoneId: "11226634",
		url: "https://uplcm.com/4/11226634",
		category: "Cloud & Streaming",
		title: "Ultra-HD Live Sports & Broadcast Priority Mirror",
		description: "Sponsor-backed high-bitrate streaming partner helping keep M R S live media and web tools freely accessible.",
		ctaLabel: "Visit Partner"
	},
	{
		id: "sponsor-11683565",
		zoneId: "11683565",
		url: "https://uplcm.com/4/11683565",
		category: "Cloud & Streaming",
		title: "Real-Time Match Alerts & Global Edge Routing",
		description: "Low-latency content delivery sponsor supporting continuous broadcast schedules, CDN caching, and live uptime.",
		ctaLabel: "Explore Offer"
	},
	{
		id: "sponsor-11242745",
		zoneId: "11242745",
		url: "https://uplcm.com/4/11242745",
		category: "Media & Apps",
		title: "Sports Replay Highlights & Interactive Hub",
		description: "Community media partner providing curated highlights, match recaps, and trending digital entertainment access.",
		ctaLabel: "Open Partner"
	},
	{
		id: "sponsor-11242069",
		zoneId: "11242069",
		url: "https://uplcm.com/4/11242069",
		category: "Media & Apps",
		title: "Verified Software & Mobile Utility Spotlight",
		description: "Official app ecosystem sponsor promoting Android, Smart TV, and cross-platform productivity downloads.",
		ctaLabel: "Check Resource"
	},
	{
		id: "sponsor-11242067",
		zoneId: "11242067",
		url: "https://uplcm.com/4/11242067",
		category: "Privacy & Tech",
		title: "Encrypted Connectivity & Secure Browsing Suite",
		description: "Privacy-focused technology sponsor supporting safe remote workflows, encrypted tunnels, and DNS security tools.",
		ctaLabel: "View Solution"
	},
	{
		id: "sponsor-11242742",
		zoneId: "11242742",
		url: "https://uplcm.com/4/11242742",
		category: "Privacy & Tech",
		title: "Remote Workstation & Cloud Hosting Partner",
		description: "Developer infrastructure sponsor powering fast static hosting, domain routing, and automated workspace pipelines.",
		ctaLabel: "Inspect Partner"
	},
	{
		id: "sponsor-11230440",
		zoneId: "11230440",
		url: "https://uplcm.com/4/11230440",
		category: "Productivity & Gear",
		title: "Hardware Peripherals & Workspace Gear Deals",
		description: "Sponsored workstation hardware partner featuring curated laptops, audio peripherals, and desk accessories.",
		ctaLabel: "Browse Deals"
	},
	{
		id: "sponsor-11683560",
		zoneId: "11683560",
		url: "https://uplcm.com/4/11683560",
		category: "Productivity & Gear",
		title: "AI Automation & Developer Productivity Toolkit",
		description: "Partner spotlight supporting intelligent workflow tools, technical documentation suites, and cloud utilities.",
		ctaLabel: "Explore Toolkit"
	},
	{
		id: "sponsor-9912130",
		zoneId: "9912130",
		url: "https://uplcm.com/4/9912130",
		category: "Community",
		title: "Free Click-to-Support Community Aid Sponsor",
		description: "Primary humanitarian sponsor slot turning zero-cost visitor engagement into rural school, meal, and relief support.",
		ctaLabel: "Support Free Aid"
	},
	{
		id: "sponsor-11242744",
		zoneId: "11242744",
		url: "https://uplcm.com/4/11242744",
		category: "Community",
		title: "Global Digital Access & Learning Network",
		description: "Educational partner helping fund open-access technical guides, starter tutorials, and community digital literacy.",
		ctaLabel: "Visit Network"
	}
];
//#endregion
//#region src/components/SponsorAdSlot.tsx
var SponsorAdSlot = ({ ids, heading = "Sponsored Partners", compact = false }) => {
	const slots = SPONSOR_ADS_LINKS.filter((item) => ids.includes(item.id));
	if (slots.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": heading,
		className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb]/80 dark:bg-[#0c121e] tech-surface overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 sm:px-5 py-2.5 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11.5px] font-mono font-semibold text-[#2563eb] dark:text-[#38bdf8]",
				children: heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#sponsors-section",
				className: "text-[11px] font-mono text-[#64748b] dark:text-[#94a3b8] hover:text-[#2563eb] dark:hover:text-[#38bdf8] transition-colors",
				children: "Sponsored · View All"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid grid-cols-1 ${slots.length >= 2 ? "md:grid-cols-2 md:divide-x" : ""} divide-y md:divide-y-0 divide-[#dbe3ee] dark:divide-[#1c273b]`,
			children: slots.map((sponsor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: sponsor.url,
				target: "_blank",
				rel: "noopener noreferrer sponsored nofollow",
				className: `group flex items-center justify-between gap-4 ${compact ? "p-4" : "p-4 sm:p-5"} bg-white/70 dark:bg-[#0c121e] hover:bg-white dark:hover:bg-[#11192a] transition-colors`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[11px] font-mono text-[#64748b] dark:text-[#94a3b8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#2563eb] dark:text-[#38bdf8] font-semibold",
									children: sponsor.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ad" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-[14px] text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors truncate",
							children: sponsor.title
						}),
						!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-[#475569] dark:text-[#94a3b8] line-clamp-1",
							children: sponsor.description
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "whitespace-nowrap shrink-0 inline-flex items-center gap-1 px-3 py-2 min-h-[38px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] group-hover:border-[#2563eb] dark:group-hover:border-[#38bdf8] text-[12px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sponsor.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5" })]
				})]
			}, sponsor.id))
		})]
	});
};
//#endregion
//#region src/components/WebsiteSlideshow.tsx
var WebsiteSlideshow = () => {
	const { websites, hubState, upstreamStatus, isSyncing, sseConnected, syncWebsites } = useStudio();
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(true);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const safeIndex = websites.length > 0 ? activeIndex % websites.length : 0;
	const activeSite = websites[safeIndex];
	(0, import_react.useEffect)(() => {
		if (!isPlaying || isHovered || websites.length <= 1) return;
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % websites.length);
		}, 6e3);
		return () => clearInterval(timer);
	}, [
		isPlaying,
		isHovered,
		websites.length
	]);
	const handlePrev = () => {
		if (websites.length === 0) return;
		setActiveIndex((prev) => (prev - 1 + websites.length) % websites.length);
	};
	const handleNext = () => {
		if (websites.length === 0) return;
		setActiveIndex((prev) => (prev + 1) % websites.length);
	};
	const handleKeyDown = (e) => {
		if (e.key === "ArrowLeft") handlePrev();
		if (e.key === "ArrowRight") handleNext();
	};
	const formattedUpdatedTime = (() => {
		try {
			return new Date(hubState.lastUpdated).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			});
		} catch {
			return "Live";
		}
	})();
	if (!activeSite) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "websites-section",
		tabIndex: -1,
		onKeyDown: handleKeyDown,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		className: "py-16 sm:py-20 bg-white dark:bg-[#0a101b] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200 focus:outline-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
								children: "Digital Network"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
								children: "Official Websites & Portals"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-[#64748b] dark:text-[#94a3b8]",
								children: [
									(upstreamStatus.sseActive || sseConnected) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-2 h-2 rounded-full bg-emerald-500 shrink-0",
										"aria-hidden": "true",
										title: "Live stream active"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: upstreamStatus.sseActive || sseConnected ? "Live Stream Active" : "Live Feed Active" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono tabular-nums",
										children: [websites.length, " Websites"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono tabular-nums",
										children: ["Updated ", formattedUpdatedTime]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsPlaying((prev) => !prev),
							className: "whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer",
							"aria-label": isPlaying ? "Pause slideshow" : "Play slideshow",
							children: [isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isPlaying ? "Pause" : "Play" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: syncWebsites,
							disabled: isSyncing,
							className: "whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSyncing ? "Syncing..." : "Sync Live" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-[#070b14] min-h-[380px] sm:min-h-0 sm:aspect-[16/10] lg:aspect-[16/9] tech-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#070b14] to-[#1e293b] flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
								className: "w-12 h-12 text-slate-700",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: .35 },
								animate: { opacity: 1 },
								exit: { opacity: .35 },
								transition: { duration: .25 },
								className: "absolute inset-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: resolveWebsiteImage(activeSite.imageKey),
									alt: `${activeSite.name} preview`,
									referrerPolicy: "no-referrer",
									className: "w-full h-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#070b14]/95 via-[#070b14]/70 to-[#070b14]/30" })]
							}, activeSite.id)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex items-center justify-between gap-3 p-4 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[12px] sm:text-[12.5px] font-mono tabular-nums font-medium text-slate-200 tracking-wide truncate",
								children: [
									String(safeIndex + 1).padStart(2, "0"),
									" / ",
									String(websites.length).padStart(2, "0"),
									" · ",
									activeSite.domain
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handlePrev,
									"aria-label": "Previous website slide",
									className: "w-11 h-11 rounded-lg bg-[#070b14]/75 hover:bg-[#070b14] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-4 h-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleNext,
									"aria-label": "Next website slide",
									className: "w-11 h-11 rounded-lg bg-[#070b14]/75 hover:bg-[#070b14] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative sm:absolute sm:inset-x-0 sm:bottom-0 z-10 p-4 pt-16 sm:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl space-y-2 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#38bdf8] font-semibold",
												children: activeSite.category
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-400",
												"aria-hidden": "true",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `font-mono tabular-nums ${activeSite.status === "online" ? "text-emerald-400" : "text-slate-300"}`,
												children: activeSite.status === "online" ? `HTTP ${activeSite.httpCode || 200}${activeSite.latencyMs ? ` · ${activeSite.latencyMs}ms` : ""}` : "Verified Property · Standby"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight text-balance",
										children: activeSite.name
									}),
									activeSite.liveTitle && activeSite.liveTitle.toLowerCase() !== activeSite.name.toLowerCase() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12px] text-slate-300 font-mono truncate",
										children: activeSite.liveTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13.5px] sm:text-[15px] text-slate-200 leading-relaxed line-clamp-3",
										children: activeSite.overview || activeSite.description
									}),
									activeSite.techHighlights && activeSite.techHighlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11.5px] font-mono text-slate-300/90 truncate pt-0.5",
										children: activeSite.techHighlights.join(" · ")
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: activeSite.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-full sm:w-auto whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-[13.5px] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit Website" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" })]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
					children: websites.map((site, idx) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveIndex(idx),
							className: `group relative p-3 sm:p-3.5 min-h-[44px] rounded-xl border text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] tech-surface ${idx === safeIndex ? "border-[#2563eb] dark:border-[#38bdf8] bg-white dark:bg-[#0c121e]" : "border-[#dbe3ee] dark:border-[#1c273b] bg-white/75 dark:bg-[#0c121e]/70 hover:border-[#94a3b8] dark:hover:border-[#334155]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-1.5 mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8]",
										children: String(idx + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[10.5px] font-mono tabular-nums font-medium ${site.status === "online" ? "text-emerald-600 dark:text-emerald-400" : "text-[#64748b] dark:text-[#94a3b8]"}`,
										children: site.status === "online" ? site.latencyMs ? `${site.latencyMs}ms` : "Live" : "Ready"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-[12.5px] text-[#0f172a] dark:text-[#f1f5f9] truncate",
									children: site.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-mono text-[#64748b] dark:text-[#94a3b8] truncate mt-0.5",
									children: site.domain
								})
							]
						}, site.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorAdSlot, {
					ids: ["sponsor-11226634", "sponsor-11242069"],
					heading: "Featured Streaming & Software Partners"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-end justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 text-[12.5px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									className: "w-3.5 h-3.5",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Complete Platform Dossiers" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight",
								children: [
									"All ",
									websites.length,
									" Websites — Full Information & Explanations"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-[#64748b] dark:text-[#94a3b8]",
							children: "Architecture summaries, core features, and live endpoint details for every listed site."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-5",
						children: websites.map((site, idx) => {
							const isSelected = idx === safeIndex;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `p-6 rounded-2xl border transition-colors tech-surface flex flex-col justify-between gap-5 ${isSelected ? "border-[#2563eb] dark:border-[#38bdf8] bg-[#f8fbff] dark:bg-[#0c121e]" : "border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb]/60 dark:bg-[#0c121e]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-2 text-[12px] font-mono tabular-nums",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[#2563eb] dark:text-[#38bdf8] font-semibold",
												children: [
													String(idx + 1).padStart(2, "0"),
													" · ",
													site.category
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `font-medium ${site.status === "online" ? "text-emerald-600 dark:text-emerald-400" : "text-[#64748b] dark:text-[#94a3b8]"}`,
												children: site.status === "online" ? `HTTP ${site.httpCode || 200}${site.latencyMs ? ` · ${site.latencyMs}ms` : ""}` : "Standby"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-xl font-bold text-[#0f172a] dark:text-white leading-snug",
													children: site.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[12px] font-mono text-[#64748b] dark:text-[#94a3b8] truncate",
													children: site.url
												}),
												site.liveTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[12px] text-[#475569] dark:text-[#cbd5e1] font-medium",
													children: ["Live Title: ", site.liveTitle]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [site.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13.5px] font-semibold text-[#1e293b] dark:text-[#e2e8f0] leading-relaxed",
												children: site.description
											}), site.overview && site.overview !== site.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
												children: site.overview
											})]
										}),
										site.features && site.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11.5px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]",
												children: "Key Capabilities & Details"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1.5",
												children: site.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-2 text-[13px] text-[#1e293b] dark:text-[#cbd5e1] leading-snug",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feat })]
												}, feat))
											})]
										}),
										(site.audience || site.techHighlights && site.techHighlights.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-1.5 text-[12.5px]",
											children: [site.audience && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[#475569] dark:text-[#94a3b8]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#0f172a] dark:text-[#e2e8f0]",
													children: "Designed for: "
												}), site.audience]
											}), site.techHighlights && site.techHighlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-[11.5px] text-[#2563eb] dark:text-[#38bdf8]",
												children: site.techHighlights.join(" · ")
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] flex flex-wrap items-center justify-between gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setActiveIndex(idx);
											document.getElementById("websites-section")?.scrollIntoView({
												behavior: "smooth",
												block: "start"
											});
										},
										className: "px-3.5 py-2 min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer",
										children: isSelected ? "Focused in Stage" : "Preview in Stage"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: site.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12.5px] font-bold transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Site" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
									})]
								})]
							}, `dossier-${site.id}`);
						})
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/data/displayAdsData.ts
var DISPLAY_BANNER_ADS = [
	{
		id: "alibaba-wide-20off",
		advertiser: "Alibaba WW",
		title: "20% Off Global Sourcing Offers",
		tagline: "Explore wholesale supplier discounts, hardware components, and business sourcing deals across global categories.",
		ctaLabel: "Shop Alibaba WW",
		href: "https://rzekl.com/g/1qbjalo1djcb5002cfdd219aa26f6f/?i=4",
		imgSrc: "https://ad.admitad.com/b/1qbjalo1djcb5002cfdd219aa26f6f/",
		alt: "Alibaba WW 20% Off Banners",
		width: 1200,
		height: 628,
		format: "wide"
	},
	{
		id: "aliexpress-leaderboard-logo",
		advertiser: "AliExpress WW",
		title: "AliExpress Worldwide Marketplace",
		tagline: "Discover consumer electronics, desk hardware, and everyday tools with direct international dispatch.",
		ctaLabel: "Visit AliExpress",
		href: "https://rzekl.com/g/hfzguitca6cb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/hfzguitca6cb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Global Marketplace",
		width: 468,
		height: 90,
		format: "leaderboard"
	},
	{
		id: "aliexpress-compact-ofertas",
		advertiser: "AliExpress WW",
		title: "Super Deals — Up to 90% Off",
		tagline: "Flash retail discounts across electronics, home workspace equipment, and global accessories.",
		ctaLabel: "View Super Deals",
		href: "https://rzekl.com/g/e1z3ho64gccb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/e1z3ho64gccb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Super Ofertas",
		width: 320,
		height: 100,
		format: "compact"
	},
	{
		id: "alibaba-rect-freeship",
		advertiser: "Alibaba WW",
		title: "Free Shipping Supplier Picks",
		tagline: "Curated hardware, office accessories, and bulk product listings qualifying for complimentary international shipping.",
		ctaLabel: "Browse Free Shipping",
		href: "https://rzekl.com/g/n11go1amqvcb5002cfdd219aa26f6f/?i=4",
		imgSrc: "https://ad.admitad.com/b/n11go1amqvcb5002cfdd219aa26f6f/",
		alt: "Alibaba WW Free Shipping Deals",
		width: 300,
		height: 250,
		format: "rectangle"
	},
	{
		id: "aliexpress-rect-seasonal",
		advertiser: "AliExpress WW",
		title: "Black Friday & Cyber Monday Event",
		tagline: "Seasonal global savings across computing peripherals, smart accessories, and workstation essentials.",
		ctaLabel: "Explore Event Deals",
		href: "https://rzekl.com/g/kyot8uekw2cb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/kyot8uekw2cb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Black Friday and Cyber Monday Deals",
		width: 300,
		height: 250,
		format: "rectangle"
	},
	{
		id: "alibaba-square-freeship",
		advertiser: "Alibaba WW",
		title: "Global Free Shipping Spotlight",
		tagline: "Direct manufacturer storefronts offering zero shipping charges across selected electronics and supplies.",
		ctaLabel: "View Spotlight",
		href: "https://rzekl.com/g/3q21xrzcs0cb5002cfdd219aa26f6f/?i=4",
		imgSrc: "https://ad.admitad.com/b/3q21xrzcs0cb5002cfdd219aa26f6f/",
		alt: "Alibaba WW Free Shipping Square Spotlight",
		width: 500,
		height: 500,
		format: "square"
	},
	{
		id: "alibaba-portrait-weekly",
		advertiser: "Alibaba WW",
		title: "Weekly Featured Sourcing Deals",
		tagline: "Updated weekly collections showcasing price reductions on verified electronics, gadgets, and essentials.",
		ctaLabel: "See Weekly Deals",
		href: "https://rzekl.com/g/2yynmq9itycb5002cfdd219aa26f6f/?i=4",
		imgSrc: "https://ad.admitad.com/b/2yynmq9itycb5002cfdd219aa26f6f/",
		alt: "Alibaba WW Weekly Deals",
		width: 320,
		height: 480,
		format: "portrait"
	},
	{
		id: "aliexpress-portrait-seasonal",
		advertiser: "AliExpress WW",
		title: "Seasonal Flash Markdowns",
		tagline: "Limited-time Black Friday & Cyber Monday promotions across global retail tech and daily essentials.",
		ctaLabel: "Shop Flash Deals",
		href: "https://rzekl.com/g/nbdijtg4iscb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/nbdijtg4iscb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Black Friday and Cyber Monday Vertical Banner",
		width: 320,
		height: 480,
		format: "portrait"
	},
	{
		id: "alibaba-sky-weekly",
		advertiser: "Alibaba WW",
		title: "Weekly Wholesale Highlights",
		tagline: "Direct factory pricing and bulk weekly markdowns.",
		ctaLabel: "Open Offer",
		href: "https://rzekl.com/g/r2ljfjnrjgcb5002cfdd219aa26f6f/?i=4",
		imgSrc: "https://ad.admitad.com/b/r2ljfjnrjgcb5002cfdd219aa26f6f/",
		alt: "Alibaba WW Weekly Deals Skyscraper",
		width: 160,
		height: 600,
		format: "skyscraper"
	},
	{
		id: "alibaba-sky-homepage",
		advertiser: "Alibaba WW",
		title: "Global Supplier Storefront",
		tagline: "Curated international catalog across electronics and gear.",
		ctaLabel: "Explore Hub",
		href: "https://rzekl.com/g/sg0n7lk10zcb5002cfdd219aa26f6f/?i=4",
		imgSrc: "https://ad.admitad.com/b/sg0n7lk10zcb5002cfdd219aa26f6f/",
		alt: "Alibaba WW Homepage Showcase",
		width: 160,
		height: 600,
		format: "skyscraper"
	},
	{
		id: "aliexpress-sky-160",
		advertiser: "AliExpress WW",
		title: "Black Friday Wide Selection",
		tagline: "Seasonal international tech and workspace event offers.",
		ctaLabel: "Shop Sale",
		href: "https://rzekl.com/g/ytg1jtfy3jcb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/ytg1jtfy3jcb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Black Friday and Cyber Monday 160x600",
		width: 160,
		height: 600,
		format: "skyscraper"
	},
	{
		id: "aliexpress-sky-120a",
		advertiser: "AliExpress WW",
		title: "Cyber Monday Spotlight",
		tagline: "Featured campaign savings across smart gadgets and tools.",
		ctaLabel: "View Deals",
		href: "https://rzekl.com/g/1klyrjkwp8cb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/1klyrjkwp8cb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Black Friday and Cyber Monday 120x600",
		width: 120,
		height: 600,
		format: "skyscraper"
	},
	{
		id: "aliexpress-sky-120b",
		advertiser: "AliExpress WW",
		title: "Holiday Tech Campaign",
		tagline: "Time-limited global promotional pricing across storefront picks.",
		ctaLabel: "Open Campaign",
		href: "https://rzekl.com/g/ypv5dkrd52cb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/ypv5dkrd52cb5002cfdd16525dc3e8/",
		alt: "AliExpress WW Black Friday and Cyber Monday 120x600 Alt",
		width: 120,
		height: 600,
		format: "skyscraper"
	},
	{
		id: "aliexpress-badge-234",
		advertiser: "AliExpress WW",
		title: "AliExpress Worldwide Portal",
		tagline: "Full-width verified marketplace badge.",
		ctaLabel: "Visit Portal",
		href: "https://rzekl.com/g/giqeddbbgxcb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/giqeddbbgxcb5002cfdd16525dc3e8/",
		alt: "AliExpress WW 234x60 Logo",
		width: 234,
		height: 60,
		format: "badge"
	},
	{
		id: "aliexpress-badge-216",
		advertiser: "AliExpress WW",
		title: "AliExpress Official Deals",
		tagline: "Medium commerce storefront badge.",
		ctaLabel: "Open Store",
		href: "https://rzekl.com/g/bzkgpak5cacb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/bzkgpak5cacb5002cfdd16525dc3e8/",
		alt: "AliExpress WW 216x54 Logo",
		width: 216,
		height: 54,
		format: "badge"
	},
	{
		id: "aliexpress-badge-120",
		advertiser: "AliExpress WW",
		title: "AliExpress Direct Link",
		tagline: "Compact partner navigation badge.",
		ctaLabel: "Explore",
		href: "https://rzekl.com/g/78wcl1iixpcb5002cfdd16525dc3e8/?i=4",
		imgSrc: "https://ad.admitad.com/b/78wcl1iixpcb5002cfdd16525dc3e8/",
		alt: "AliExpress WW 120x30 Logo",
		width: 120,
		height: 30,
		format: "badge"
	}
];
function getDisplayBannerAd(id) {
	return DISPLAY_BANNER_ADS.find((ad) => ad.id === id);
}
//#endregion
//#region src/components/DisplayAdBanner.tsx
var DisplayAdBanner = ({ adId, variant }) => {
	const ad = getDisplayBannerAd(adId);
	const [imgFailed, setImgFailed] = (0, import_react.useState)(false);
	if (!ad) return null;
	const fallbackBox = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full h-full flex flex-col items-center justify-center gap-2 p-4 text-center bg-gradient-to-br from-[#e9eff7] to-[#dbe3ee] dark:from-[#111a2b] dark:to-[#0c121e]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
				className: "w-6 h-6 text-[#2563eb] dark:text-[#38bdf8]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display font-bold text-sm text-[#0f172a] dark:text-white",
				children: ad.advertiser
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-[#475569] dark:text-[#94a3b8] line-clamp-2 max-w-[26ch]",
				children: ad.title
			})
		]
	});
	if (variant === "feature-split") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 items-stretch",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: ad.href,
				target: "_blank",
				rel: "noopener noreferrer sponsored nofollow",
				className: "lg:col-span-8 block relative bg-[#f8fafc] dark:bg-[#070b14] aspect-[1200/628] overflow-hidden group border-b lg:border-b-0 lg:border-r border-[#dbe3ee] dark:border-[#1c273b]",
				"aria-label": `${ad.advertiser} — ${ad.title}`,
				children: imgFailed ? fallbackBox : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ad.imgSrc,
					alt: ad.alt,
					width: ad.width,
					height: ad.height,
					loading: "lazy",
					referrerPolicy: "no-referrer",
					onError: () => setImgFailed(true),
					className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 text-[12px] font-mono text-[#64748b] dark:text-[#94a3b8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-[#2563eb] dark:text-[#38bdf8]",
								children: ad.advertiser
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sponsored Feature" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight leading-snug text-balance",
							children: ad.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
							children: ad.tagline
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11.5px] font-mono text-[#64748b] dark:text-[#94a3b8]",
						children: "Verified Affiliate Partner · Opens External Storefront"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: ad.href,
						target: "_blank",
						rel: "noopener noreferrer sponsored nofollow",
						className: "w-full whitespace-nowrap inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ad.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4" })]
					})]
				})]
			})]
		})
	});
	if (variant === "leaderboard" || variant === "compact-banner") {
		const isCompact = variant === "compact-banner";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			"aria-label": `${ad.advertiser} Sponsored Banner`,
			className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface p-4 sm:p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 text-center lg:text-left min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center lg:justify-start gap-2 text-[11.5px] font-mono text-[#64748b] dark:text-[#94a3b8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#2563eb] dark:text-[#38bdf8]",
									children: ad.advertiser
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sponsored Partner" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[16px] font-bold text-[#0f172a] dark:text-white leading-snug",
							children: ad.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-[#475569] dark:text-[#94a3b8] line-clamp-1",
							children: ad.tagline
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: ad.href,
						target: "_blank",
						rel: "noopener noreferrer sponsored nofollow",
						className: `block w-full ${isCompact ? "max-w-[320px] aspect-[320/100]" : "max-w-[468px] aspect-[468/90]"} rounded-xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-white transition-transform hover:scale-[1.01]`,
						"aria-label": `${ad.advertiser} — ${ad.title}`,
						children: imgFailed ? fallbackBox : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ad.imgSrc,
							alt: ad.alt,
							width: ad.width,
							height: ad.height,
							loading: "lazy",
							referrerPolicy: "no-referrer",
							onError: () => setImgFailed(true),
							className: "w-full h-full object-contain bg-white"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: ad.href,
						target: "_blank",
						rel: "noopener noreferrer sponsored nofollow",
						className: "whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[42px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] hover:border-[#2563eb] dark:hover:border-[#38bdf8] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ad.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5" })]
					})]
				})]
			})
		});
	}
	if (variant === "sidebar-rectangle") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": `${ad.advertiser} Sponsored Spotlight`,
		className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-3 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[11.5px] font-mono",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-[#2563eb] dark:text-[#38bdf8]",
				children: ad.advertiser
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#64748b] dark:text-[#94a3b8]",
				children: "Sponsored"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: ad.href,
				target: "_blank",
				rel: "noopener noreferrer sponsored nofollow",
				className: "block w-full max-w-[300px] aspect-[300/250] rounded-xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] group",
				"aria-label": `${ad.advertiser} — ${ad.title}`,
				children: imgFailed ? fallbackBox : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ad.imgSrc,
					alt: ad.alt,
					width: ad.width,
					height: ad.height,
					loading: "lazy",
					referrerPolicy: "no-referrer",
					onError: () => setImgFailed(true),
					className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex items-center justify-between gap-3 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-[13.5px] text-[#0f172a] dark:text-white truncate",
						children: ad.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12px] text-[#64748b] dark:text-[#94a3b8] truncate",
						children: ad.tagline
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: ad.href,
					target: "_blank",
					rel: "noopener noreferrer sponsored nofollow",
					className: "whitespace-nowrap shrink-0 inline-flex items-center gap-1 px-3 py-2 min-h-[38px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12px] font-semibold transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ad.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5" })]
				})]
			})]
		})]
	});
	if (variant === "skyscraper-card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: ad.href,
		target: "_blank",
		rel: "noopener noreferrer sponsored nofollow",
		className: "group min-w-[220px] sm:min-w-0 snap-start rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors overflow-hidden flex flex-col justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-2.5 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[11px] font-mono",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-[#2563eb] dark:text-[#38bdf8] truncate",
				children: ad.advertiser
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#64748b] dark:text-[#94a3b8] shrink-0",
				children: "Sponsored"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[380px] sm:h-[420px] p-3 bg-[#f8fafc] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-center overflow-hidden",
			children: imgFailed ? fallbackBox : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ad.imgSrc,
				alt: ad.alt,
				width: ad.width,
				height: ad.height,
				loading: "lazy",
				referrerPolicy: "no-referrer",
				onError: () => setImgFailed(true),
				className: "max-h-full max-w-full w-auto h-full rounded-md object-contain transition-transform duration-200 group-hover:scale-[1.02]"
			})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 flex items-center justify-between gap-2 text-[12px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold text-[13px] text-[#0f172a] dark:text-white truncate group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors",
					children: ad.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-[11px] text-[#64748b] dark:text-[#94a3b8] tabular-nums",
					children: [
						ad.width,
						"×",
						ad.height
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })]
		})]
	});
	if (variant === "badge-card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: ad.href,
		target: "_blank",
		rel: "noopener noreferrer sponsored nofollow",
		className: "group p-4 sm:p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 text-[11px] font-mono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-[#2563eb] dark:text-[#38bdf8]",
					children: ad.advertiser
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[#64748b] dark:text-[#94a3b8] tabular-nums",
					children: [
						ad.width,
						"×",
						ad.height,
						" · Ad"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-[84px] rounded-xl bg-white border border-[#dbe3ee] dark:border-[#1c273b] px-4 flex items-center justify-center overflow-hidden",
				children: imgFailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display font-bold text-sm text-[#0f172a]",
					children: ad.advertiser
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ad.imgSrc,
					alt: ad.alt,
					width: ad.width,
					height: ad.height,
					loading: "lazy",
					referrerPolicy: "no-referrer",
					onError: () => setImgFailed(true),
					style: {
						maxWidth: `${ad.width}px`,
						maxHeight: `${ad.height}px`
					},
					className: "w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 text-[12.5px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-[#0f172a] dark:text-white truncate group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors",
					children: ad.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 font-semibold text-[#2563eb] dark:text-[#38bdf8] shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ad.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5" })]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: ad.href,
		target: "_blank",
		rel: "noopener noreferrer sponsored nofollow",
		className: "group rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors overflow-hidden flex flex-col justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-3 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[11.5px] font-mono",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-[#2563eb] dark:text-[#38bdf8]",
				children: ad.advertiser
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#64748b] dark:text-[#94a3b8]",
				children: "Sponsored Display"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 p-4 bg-[#f8fafc] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-center overflow-hidden",
			children: imgFailed ? fallbackBox : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ad.imgSrc,
				alt: ad.alt,
				width: ad.width,
				height: ad.height,
				loading: "lazy",
				referrerPolicy: "no-referrer",
				onError: () => setImgFailed(true),
				className: "max-h-full max-w-full w-auto h-auto rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.02]"
			})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex-1 flex flex-col justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-[17px] font-bold text-[#0f172a] dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors",
					children: ad.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
					children: ad.tagline
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between text-[12.5px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[#64748b] dark:text-[#94a3b8] tabular-nums",
					children: [
						ad.width,
						"×",
						ad.height,
						" Creative"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 font-semibold text-[#2563eb] dark:text-[#38bdf8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ad.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })]
				})]
			})]
		})]
	});
};
//#endregion
//#region src/components/ServicesCatalogSection.tsx
var ServicesCatalogSection = () => {
	const { adminProfile, servicesCatalog, servicesPortalStatus } = useStudio();
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [currency, setCurrency] = (0, import_react.useState)("USD");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeServiceModal, setActiveServiceModal] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!activeServiceModal) return;
		const handleEsc = (e) => {
			if (e.key === "Escape") setActiveServiceModal(null);
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [activeServiceModal]);
	const categories = (0, import_react.useMemo)(() => {
		const counts = {
			All: servicesCatalog.length,
			"M R S Services": servicesCatalog.filter((s) => s.category === "M R S Services").length,
			"M R S IPTV": servicesCatalog.filter((s) => s.category === "M R S IPTV").length
		};
		return [
			{
				id: "All",
				label: "All Services",
				count: counts.All
			},
			{
				id: "M R S Services",
				label: "Technical & Admin",
				count: counts["M R S Services"]
			},
			{
				id: "M R S IPTV",
				label: "IPTV Plans",
				count: counts["M R S IPTV"]
			}
		];
	}, [servicesCatalog]);
	const filteredServices = (0, import_react.useMemo)(() => {
		const q = searchQuery.trim().toLowerCase();
		return servicesCatalog.filter((svc) => {
			if (!(selectedCategory === "All" || svc.category === selectedCategory)) return false;
			if (!q) return true;
			return svc.name.toLowerCase().includes(q) || svc.serviceId.toLowerCase().includes(q) || svc.shortDescription.toLowerCase().includes(q) || svc.inclusions.some((item) => item.toLowerCase().includes(q));
		});
	}, [
		servicesCatalog,
		selectedCategory,
		searchQuery
	]);
	const resolveExactRequestUrl = (svc) => svc.requestUrl || `https://mrs-services.ai.studio/request/${svc.id}`;
	const resolveExactDetailsUrl = (svc) => svc.portalUrl && svc.portalUrl !== "https://mrs-services.ai.studio/" ? svc.portalUrl : `https://mrs-services.ai.studio/services/${svc.id}`;
	const portalLatencyText = servicesPortalStatus.status === "online" ? `Service Portal Live${servicesPortalStatus.latencyMs ? ` (${servicesPortalStatus.latencyMs}ms)` : ""}` : "Service Portal Available";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services-section",
		className: "py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
								children: "Service Catalog & Direct Request"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
								children: [adminProfile.siteName, " Professional Services"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
								children: "Complete technical support, automation, CMS administration, documentation, and media solutions. Every service request links directly to its exact intake page on mrs-services.ai.studio."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] font-mono text-[#64748b] dark:text-[#94a3b8] pt-0.5 tabular-nums",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [servicesCatalog.length, " Active Services"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: portalLatencyText }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct Scope & Revision Guarantee" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: servicesPortalStatus.url || "https://mrs-services.ai.studio/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "whitespace-nowrap shrink-0 self-start md:self-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Services Portal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 pb-2 border-b border-[#dbe3ee] dark:border-[#1c273b]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-1 p-1 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e]",
						role: "tablist",
						"aria-label": "Filter services by category",
						children: categories.map((cat) => {
							const isActive = selectedCategory === cat.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": isActive,
								onClick: () => setSelectedCategory(cat.id),
								className: `whitespace-nowrap shrink-0 px-3 py-2 min-h-[40px] rounded-lg text-[12.5px] font-semibold transition-colors cursor-pointer tabular-nums ${isActive ? "bg-[#2563eb] text-white" : "text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white"}`,
								children: [
									cat.label,
									" (",
									cat.count,
									")"
								]
							}, cat.id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 sm:w-64",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "w-4 h-4 text-[#64748b] dark:text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "search",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search service or code...",
									"aria-label": "Search services",
									className: "w-full pl-9 pr-9 py-2 min-h-[44px] sm:min-h-[42px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
								}),
								searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSearchQuery(""),
									"aria-label": "Clear service search",
									className: "absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#64748b] hover:text-[#0f172a] dark:hover:text-white cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center p-1 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] self-start sm:self-auto",
							role: "group",
							"aria-label": "Select display currency",
							children: ["USD", "BDT"].map((unit) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCurrency(unit),
									className: `whitespace-nowrap shrink-0 px-3 py-1.5 min-h-[36px] rounded-md text-[12px] font-mono font-bold transition-colors cursor-pointer ${currency === unit ? "bg-[#0f172a] dark:bg-[#38bdf8] text-white dark:text-[#070b14]" : "text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white"}`,
									children: unit
								}, unit);
							})
						})]
					})]
				}),
				filteredServices.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: filteredServices.map((svc) => {
						const displayedRate = currency === "USD" ? svc.rateUSD : svc.rateBDT;
						const requestUrl = resolveExactRequestUrl(svc);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface flex flex-col justify-between gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-2 text-[12px] font-mono tabular-nums",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#64748b] dark:text-[#94a3b8] truncate",
											children: [
												svc.serviceId,
												" · ",
												svc.category
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#2563eb] dark:text-[#38bdf8] shrink-0",
											children: displayedRate
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-[18px] font-bold text-[#0f172a] dark:text-white leading-snug text-balance",
										children: svc.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
										children: svc.shortDescription
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b]",
										children: svc.inclusions.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-[13px] text-[#1e293b] dark:text-[#cbd5e1] leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, item))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 text-[12px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: svc.typicalTurnaround })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: svc.revisionsIncluded > 0 ? `${svc.revisionsIncluded} revision(s) included` : "Guided setup support" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActiveServiceModal(svc),
										className: "flex-1 whitespace-nowrap px-3 py-2 min-h-[42px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer",
										children: "View Scope"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: requestUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex-1 whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[42px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12.5px] font-bold transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
									})]
								})]
							})]
						}, svc.id);
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-10 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] text-center space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[15px] font-semibold text-[#0f172a] dark:text-white",
						children: [
							"No matching services found for “",
							searchQuery,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSearchQuery("");
							setSelectedCategory("All");
						},
						className: "px-4 py-2 min-h-[42px] rounded-lg bg-[#2563eb] text-white text-[13px] font-semibold cursor-pointer",
						children: "Reset Service Filters"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 border-b border-[#dbe3ee] dark:border-[#1c273b] flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[14px] font-semibold text-[#0f172a] dark:text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct Service Request & Scope Guarantee" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12.5px] text-[#64748b] dark:text-[#94a3b8]",
							children: "Work matches the agreed scope or we fix it free."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#dbe3ee] dark:divide-[#1c273b]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11.5px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-medium",
										children: "Step 01 · Exact Service Intake"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-[14.5px] text-[#0f172a] dark:text-white",
										children: "Direct Request Routing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] text-[#475569] dark:text-[#94a3b8]",
										children: "Every Request button routes directly to its dedicated /request page on mrs-services.ai.studio."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11.5px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-medium",
										children: "Step 02 · SLA Turnaround"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-[14.5px] text-[#0f172a] dark:text-white",
										children: "Verified Scope Delivery"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] text-[#475569] dark:text-[#94a3b8]",
										children: "Clear inclusions, prerequisites, and tracked turnaround windows on every engagement."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11.5px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-medium",
										children: "Step 03 · Quality Warranty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-[14.5px] text-[#0f172a] dark:text-white",
										children: "Revision Protection Included"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] text-[#475569] dark:text-[#94a3b8]",
										children: "Built-in revision rounds and structured sign-off checks before final delivery."
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
					adId: "aliexpress-leaderboard-logo",
					variant: "leaderboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorAdSlot, {
					ids: ["sponsor-11683560", "sponsor-11242067"],
					heading: "Recommended Productivity & Security Partners"
				})
			]
		}), activeServiceModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070b14]/80 backdrop-blur-sm",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "service-modal-title",
			onClick: () => setActiveServiceModal(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] p-6 sm:p-8 space-y-6 tech-surface",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 pb-4 border-b border-[#dbe3ee] dark:border-[#1c273b]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[12px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-semibold",
									children: [
										activeServiceModal.serviceId,
										" · ",
										activeServiceModal.category
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									id: "service-modal-title",
									className: "font-display text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
									children: activeServiceModal.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] font-mono tabular-nums text-[#475569] dark:text-[#94a3b8]",
									children: [
										activeServiceModal.rateUSD,
										" (",
										activeServiceModal.rateBDT,
										") · Turnaround:",
										" ",
										activeServiceModal.typicalTurnaround
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveServiceModal(null),
							"aria-label": "Close service scope details",
							className: "min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white cursor-pointer shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
						children: activeServiceModal.shortDescription
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[13.5px] font-semibold text-[#0f172a] dark:text-white",
							children: "Included Deliverables"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: activeServiceModal.inclusions.map((inc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-[13.5px] text-[#1e293b] dark:text-[#e2e8f0]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inc })]
							}, inc))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-[13px] font-semibold text-[#0f172a] dark:text-white",
								children: "Required from Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5 text-[13px] text-[#475569] dark:text-[#94a3b8]",
								children: activeServiceModal.clientMustProvide.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", req] }, req))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-[13px] font-semibold text-[#0f172a] dark:text-white",
								children: "Scope Exclusions & Terms"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1.5 text-[13px] text-[#475569] dark:text-[#94a3b8]",
								children: [activeServiceModal.notIncluded.map((excl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", excl] }, excl)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"·",
									" ",
									activeServiceModal.revisionsIncluded > 0 ? `${activeServiceModal.revisionsIncluded} revision(s) included` : "Guided plan onboarding included"
								] })]
							})]
						})]
					}),
					activeServiceModal.samples && activeServiceModal.samples.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[13px] font-semibold text-[#0f172a] dark:text-white",
							children: "Verified Case Benchmark"
						}), activeServiceModal.samples.map((smp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[13px] space-y-1 text-[#475569] dark:text-[#94a3b8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-[#0f172a] dark:text-[#e2e8f0]",
									children: smp.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: smp.description }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[12px] text-[#2563eb] dark:text-[#38bdf8]",
									children: ["Outcome: ", smp.results]
								})
							]
						}, smp.id))]
					}),
					activeServiceModal.faq && activeServiceModal.faq.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[13px] font-semibold text-[#0f172a] dark:text-white",
							children: "Frequently Asked Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: activeServiceModal.faq.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[13px] space-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-[#0f172a] dark:text-[#e2e8f0]",
									children: q.question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[#475569] dark:text-[#94a3b8]",
									children: q.answer
								})]
							}, q.question))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: resolveExactDetailsUrl(activeServiceModal),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] text-[13px] font-semibold text-[#0f172a] dark:text-white hover:border-[#94a3b8] dark:hover:border-[#334155]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Service Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: resolveExactRequestUrl(activeServiceModal),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13.5px] font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request This Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" })]
						})]
					})
				]
			})
		})]
	});
};
//#endregion
//#region src/components/AboutCredentials.tsx
function resolveExactServiceRequestUrl(topicTitle) {
	const t = topicTitle.toLowerCase();
	if (t.includes("it support") || t.includes("troubleshooting")) return "https://mrs-services.ai.studio/request/it-support-troubleshooting";
	if (t.includes("virtual assistance") || t.includes("administrative")) return "https://mrs-services.ai.studio/request/virtual-assistance";
	if (t.includes("website management") || t.includes("cms") || t.includes("digital content")) return "https://mrs-services.ai.studio/request/website-management";
	if (t.includes("technical writing") || t.includes("documentation") || t.includes("proofreading")) return "https://mrs-services.ai.studio/request/technical-writing-proofreading";
	if (t.includes("ai tools") || t.includes("productivity") || t.includes("digital")) return "https://mrs-services.ai.studio/request/ai-digital-productivity";
	if (t.includes("online research") || t.includes("problem-solving") || t.includes("learning")) return "https://mrs-services.ai.studio/request/online-learning-resources";
	if (t.includes("social media") || t.includes("online business") || t.includes("design")) return "https://mrs-services.ai.studio/request/graphics-design";
	if (t.includes("data entry")) return "https://mrs-services.ai.studio/request/data-entry";
	if (t.includes("web setup")) return "https://mrs-services.ai.studio/request/web-setup";
	return "https://mrs-services.ai.studio/request/it-support-troubleshooting";
}
var AboutCredentials = () => {
	const { adminProfile } = useStudio();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about-section",
		className: "py-16 sm:py-20 bg-white dark:bg-[#0a101b] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 sm:mb-12 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
						children: "Verified Credentials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
						children: [
							"About ",
							adminProfile.siteName,
							" & Verified Background"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 space-y-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold text-[#0f172a] dark:text-white",
										children: "Background & Overview"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-4 max-w-[65ch]",
										children: adminProfile.bioParagraphs.map((para, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[15.5px] text-[#475569] dark:text-[#94a3b8] leading-[1.7]",
											children: para
										}, idx))
									}),
									adminProfile.whyWorkWithMe && adminProfile.whyWorkWithMe.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 space-y-3 max-w-[65ch]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: "font-display text-base font-bold text-[#0f172a] dark:text-white",
											children: ["Why Work With ", adminProfile.siteName]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-3",
											children: adminProfile.whyWorkWithMe.map((para, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14.5px] text-[#475569] dark:text-[#94a3b8] leading-[1.7]",
												children: para
											}, idx))
										})]
									}),
									adminProfile.backgroundHighlights && adminProfile.backgroundHighlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "pt-2 space-y-2 max-w-[65ch]",
										children: adminProfile.backgroundHighlights.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2.5 text-[14px] text-[#1e293b] dark:text-[#cbd5e1] leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })]
										}, note))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-xl font-bold text-[#0f172a] dark:text-white",
											children: [
												"What ",
												adminProfile.siteName,
												" Can Help With"
											]
										})
									}),
									adminProfile.liveServices && adminProfile.liveServices.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6",
										children: adminProfile.liveServices.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b] flex flex-col justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-[14px] text-[#0f172a] dark:text-white",
													children: cat.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "space-y-1.5",
													children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-2 text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-snug",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
													}, item))
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: resolveExactServiceRequestUrl(cat.title),
												target: "_blank",
												rel: "noopener noreferrer",
												className: "self-start inline-flex items-center gap-1.5 min-h-[36px] text-[12.5px] font-semibold text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request this service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
											})]
										}, cat.title))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5",
										children: adminProfile.whatICanHelpWith.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between gap-3 text-[14.5px] text-[#0f172a] dark:text-[#e2e8f0]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-start gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: resolveExactServiceRequestUrl(item),
												target: "_blank",
												rel: "noopener noreferrer",
												className: "shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3 h-3" })]
											})]
										}, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13.5px] font-medium text-[#64748b] dark:text-[#94a3b8] pt-2",
										children: adminProfile.availabilityNote
									})
								]
							}),
							adminProfile.workExperience && adminProfile.workExperience.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-display text-xl font-bold text-[#0f172a] dark:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Experience & Availability" })]
								}), adminProfile.workExperience.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-baseline justify-between gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-[15.5px] text-[#0f172a] dark:text-white",
											children: exp.role
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[12.5px] font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8]",
											children: [
												exp.period,
												" · ",
												exp.location
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5 max-w-[65ch]",
										children: exp.highlights.map((hl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-[14.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8] text-[12.5px] mt-0.5 shrink-0",
												children: [String(i + 1).padStart(2, "0"), "."]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hl })]
										}, i))
									})]
								}, idx))]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] divide-y divide-[#dbe3ee] dark:divide-[#1c273b] tech-surface",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 space-y-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Credentials & Background" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "divide-y divide-[#dbe3ee] dark:divide-[#1c273b]",
											children: adminProfile.coursesCertifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "py-2.5 first:pt-0 last:pb-0 text-[14px] font-medium text-[#1e293b] dark:text-[#e2e8f0]",
												children: cert
											}, cert))
										})]
									}),
									adminProfile.education && adminProfile.education.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Education" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y divide-[#dbe3ee] dark:divide-[#1c273b]",
											children: adminProfile.education.map((edu, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-3 first:pt-0 last:pb-0 space-y-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold text-[14px] text-[#0f172a] dark:text-white",
														children: edu.degree
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[13px] text-[#475569] dark:text-[#94a3b8]",
														children: edu.institution
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-[12px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] pt-0.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: edu.period }), edu.gpa && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#2563eb] dark:text-[#38bdf8] font-semibold",
															children: edu.gpa
														})]
													})
												]
											}, idx))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 space-y-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Languages" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1",
												children: adminProfile.languages.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-[13.5px] text-[#0f172a] dark:text-white",
													children: lang.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[12px] text-[#64748b] dark:text-[#94a3b8]",
													children: lang.level
												})] }, lang.name))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[12px] font-semibold text-[#64748b] dark:text-[#94a3b8] mb-1.5",
												children: "Focus Areas"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[13.5px] text-[#0f172a] dark:text-[#e2e8f0] leading-relaxed",
												children: adminProfile.interests.join(" · ")
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
								adId: "alibaba-rect-freeship",
								variant: "sidebar-rectangle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
								adId: "aliexpress-rect-seasonal",
								variant: "sidebar-rectangle"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorAdSlot, {
						ids: ["sponsor-11230440", "sponsor-11242744"],
						heading: "Workstation Hardware & Learning Partners"
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/SkillsSection.tsx
var SkillsSection = () => {
	const { adminProfile, websites, upstreamStatus } = useStudio();
	const liveFeedItems = websites.flatMap((site) => (site.latestPosts || []).map((post) => ({
		...post,
		sourceDomain: site.domain,
		sourceName: site.name
	})));
	const rssItems = upstreamStatus?.rssItems || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills-section",
		className: "py-16 sm:py-20 border-b border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 space-y-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
							children: "Verified Competencies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
							children: "Skills & Technical Focus Areas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] text-[#475569] dark:text-[#94a3b8] max-w-2xl",
							children: "Core capabilities maintained across IT support, web platform administration, and remote documentation workflows."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
					children: adminProfile.skillsList.map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface flex flex-col justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[12px] font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8] font-semibold",
									children: [String(idx + 1).padStart(2, "0"), "."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-[15.5px] text-[#0f172a] dark:text-white leading-snug",
									children: group.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 pt-2 border-t border-[#dbe3ee] dark:border-[#1c273b]",
									children: group.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-[13px] text-[#475569] dark:text-[#94a3b8]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: skill })]
									}, skill))
								})
							]
						})
					}, group.category))
				})] }),
				rssItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-10 border-t border-[#dbe3ee] dark:border-[#1c273b]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
							children: "Directory Highlights"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
							children: [
								"Official ",
								adminProfile.siteName,
								" Directory Feed"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
						children: rssItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.link,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8] truncate",
										children: item.category || "Official Entry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-[15px] text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2",
										children: item.title
									}),
									item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-[#475569] dark:text-[#94a3b8] line-clamp-2 leading-relaxed",
										children: item.description
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11.5px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] flex items-center justify-between pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: item.pubDate ? item.pubDate.slice(0, 16) : "Featured"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 shrink-0" })]
							})]
						}, `${item.link}-${idx}`))
					})]
				}),
				liveFeedItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-10 border-t border-[#dbe3ee] dark:border-[#1c273b]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
							children: "Live Portal Updates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
							children: [
								"Latest Posts from ",
								adminProfile.siteName,
								" Portals"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-4",
						children: liveFeedItems.slice(0, 6).map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[12px] font-mono text-[#2563eb] dark:text-[#38bdf8] truncate",
									children: item.sourceDomain
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-[14.5px] text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2",
									children: item.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11.5px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] flex items-center justify-between pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.published || "Published" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
							})]
						}, `${item.url}-${idx}`))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
					adId: "aliexpress-compact-ofertas",
					variant: "compact-banner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorAdSlot, {
					ids: ["sponsor-11683565", "sponsor-11242745"],
					heading: "Global Delivery & Media Hub Partners"
				})
			]
		})
	});
};
//#endregion
//#region src/components/SponsorsSection.tsx
var SPONSOR_CATEGORIES = [
	"All",
	"Cloud & Streaming",
	"Media & Apps",
	"Privacy & Tech",
	"Productivity & Gear",
	"Community"
];
var SponsorsSection = () => {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const filteredSponsors = (0, import_react.useMemo)(() => {
		if (selectedCategory === "All") return SPONSOR_ADS_LINKS;
		return SPONSOR_ADS_LINKS.filter((item) => item.category === selectedCategory);
	}, [selectedCategory]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sponsors-section",
		className: "py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
								children: "Sponsored Network & Commerce Partners"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
								children: "Featured Sponsors & Partner Offers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
								children: "Verified commerce spotlights and infrastructure sponsors supporting free web platforms, live streaming, and community aid initiatives across the M R S network."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[12px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] shrink-0",
						children: [
							filteredSponsors.length,
							" of ",
							SPONSOR_ADS_LINKS.length,
							" Partner Links · External Offers"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
							adId: "alibaba-wide-20off",
							variant: "feature-split"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
									adId: "alibaba-square-freeship",
									variant: "gallery-card"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
									adId: "alibaba-portrait-weekly",
									variant: "gallery-card"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
									adId: "aliexpress-portrait-seasonal",
									variant: "gallery-card"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 text-[12px] font-mono text-[#64748b] dark:text-[#94a3b8]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#0f172a] dark:text-white",
									children: "Vertical Campaign Towers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Alibaba WW · AliExpress WW" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 sm:pb-0 sm:grid sm:grid-cols-3 lg:grid-cols-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
										adId: "alibaba-sky-weekly",
										variant: "skyscraper-card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
										adId: "alibaba-sky-homepage",
										variant: "skyscraper-card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
										adId: "aliexpress-sky-160",
										variant: "skyscraper-card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
										adId: "aliexpress-sky-120a",
										variant: "skyscraper-card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
										adId: "aliexpress-sky-120b",
										variant: "skyscraper-card"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
									adId: "aliexpress-badge-234",
									variant: "badge-card"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
									adId: "aliexpress-badge-216",
									variant: "badge-card"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayAdBanner, {
									adId: "aliexpress-badge-120",
									variant: "badge-card"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-[#0f172a] dark:text-white",
							children: "Partner Network Directory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-1 p-1 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] w-fit max-w-full",
							role: "tablist",
							"aria-label": "Filter sponsored partners by category",
							children: SPONSOR_CATEGORIES.map((category) => {
								const active = selectedCategory === category;
								const count = category === "All" ? SPONSOR_ADS_LINKS.length : SPONSOR_ADS_LINKS.filter((s) => s.category === category).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									role: "tab",
									"aria-selected": active,
									onClick: () => setSelectedCategory(category),
									className: `whitespace-nowrap shrink-0 px-3 py-2 min-h-[38px] rounded-lg text-[12.5px] font-semibold transition-colors cursor-pointer tabular-nums ${active ? "bg-[#2563eb] text-white" : "text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white"}`,
									children: [
										category,
										" (",
										count,
										")"
									]
								}, category);
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5",
						children: filteredSponsors.map((sponsor, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: sponsor.url,
							target: "_blank",
							rel: "noopener noreferrer sponsored nofollow",
							className: "group p-5 sm:p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2 text-[11.5px] font-mono tabular-nums",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#2563eb] dark:text-[#38bdf8] font-semibold truncate",
											children: [
												String(idx + 1).padStart(2, "0"),
												" · ",
												sponsor.category
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#64748b] dark:text-[#94a3b8] shrink-0",
											children: "Sponsored"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-[17px] font-bold text-[#0f172a] dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors",
										children: sponsor.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed",
										children: sponsor.description
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3.5 border-t border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[12.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[#64748b] dark:text-[#94a3b8] truncate",
									children: ["uplcm.com/4/", sponsor.zoneId]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 font-semibold text-[#2563eb] dark:text-[#38bdf8] shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sponsor.ctaLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })]
								})]
							})]
						}, sponsor.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#64748b] dark:text-[#94a3b8] pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All partner and affiliate placements open externally in a new tab with sponsored attributes." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact-section",
						className: "inline-flex items-center gap-1 font-medium text-[#2563eb] dark:text-[#38bdf8] hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sponsorship Inquiries" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" })]
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/components/ContactSection.tsx
var ContactSection = () => {
	const { adminProfile, servicesCatalog, selectedInquiryTopic, setSelectedInquiryTopic } = useStudio();
	const topicOptions = Array.from(/* @__PURE__ */ new Set([
		...(servicesCatalog || []).map((svc) => `${svc.serviceId}: ${svc.name}`),
		...(adminProfile.liveServices || []).map((svc) => svc.title),
		...adminProfile.whatICanHelpWith,
		"General Inquiry"
	]));
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)(selectedInquiryTopic || topicOptions[0] || "IT Support & Technical Troubleshooting");
	const [message, setMessage] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [receiptId, setReceiptId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (selectedInquiryTopic) {
			setTopic(selectedInquiryTopic);
			setReceiptId("");
		}
	}, [selectedInquiryTopic]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		setSubmitting(true);
		try {
			const res = await fetch("./api/inquiries", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					email,
					topic,
					message
				})
			});
			if ((res.headers.get("content-type") || "").includes("application/json")) {
				const json = await res.json();
				if (!res.ok || !json?.success) {
					setErrorMsg(json?.error || "Unable to submit your inquiry.");
					return;
				}
				setReceiptId(json.id || "Submitted");
				setName("");
				setEmail("");
				setMessage("");
				return;
			}
			const localId = `inq-${Date.now().toString(36)}`;
			try {
				const prev = JSON.parse(localStorage.getItem("mrs_inquiries_local") || "[]");
				localStorage.setItem("mrs_inquiries_local", JSON.stringify([...Array.isArray(prev) ? prev : [], {
					id: localId,
					name,
					email,
					topic,
					message,
					receivedAt: (/* @__PURE__ */ new Date()).toISOString()
				}]));
			} catch {}
			setReceiptId(localId);
			setName("");
			setEmail("");
			setMessage("");
		} catch {
			const localId = `inq-${Date.now().toString(36)}`;
			setReceiptId(localId);
			setName("");
			setEmail("");
			setMessage("");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact-section",
		className: "py-16 sm:py-20 bg-white dark:bg-[#0a101b] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]",
							children: "Verified Contact & Accounts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance",
							children: ["Connect with ", adminProfile.siteName]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[15px] text-[#475569] dark:text-[#94a3b8] max-w-2xl",
							children: ["Official channels and verified profiles for direct communication. ", adminProfile.availabilityNote]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://mrs-services.ai.studio/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
												children: "Services Portal"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[13px] font-mono font-medium text-[#0f172a] dark:text-white truncate",
												children: "mrs-services.ai.studio"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-[#64748b] shrink-0" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact-name",
									onClick: (e) => {
										e.preventDefault();
										document.getElementById("contact-name")?.focus();
									},
									className: "flex items-center gap-3.5 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
											children: "Direct Dispatch"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13.5px] font-semibold text-[#0f172a] dark:text-white truncate",
											children: "Submit Inquiry Form"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: adminProfile.socials.calendlyUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
												children: "Calendly"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[13.5px] font-semibold text-[#0f172a] dark:text-white truncate",
												children: "Book Meeting"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-[#64748b] shrink-0" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://mrxshahin.ai.studio/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
												children: "Ai Portfolio"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[13px] font-mono font-medium text-[#0f172a] dark:text-white truncate",
												children: "mrxshahin.ai.studio"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-[#64748b] shrink-0" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-semibold text-[#0f172a] dark:text-white",
								children: "Verified Accounts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 border-t border-[#dbe3ee] dark:border-[#1c273b]",
								children: adminProfile.verifiedAccounts.map((acc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: acc.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center justify-between py-3.5 px-1 sm:odd:pr-5 sm:even:pl-5 border-b border-[#dbe3ee] dark:border-[#1c273b] hover:text-[#2563eb] dark:hover:text-[#38bdf8] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 pr-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13.5px] font-semibold text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] truncate transition-colors",
											children: acc.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11.5px] font-mono text-[#64748b] dark:text-[#94a3b8] truncate",
											children: acc.handle
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-[#64748b] group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] shrink-0 transition-colors" })]
								}, acc.url))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-1",
								children: ["Send an Inquiry to ", adminProfile.siteName]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13.5px] text-[#475569] dark:text-[#94a3b8] mb-6",
								children: "Reach out for remote IT troubleshooting, document management, or web administration."
							}),
							receiptId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-[15px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquiry Recorded" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[13.5px] text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed",
										children: [
											"Your message regarding ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: topic }),
											" has been saved."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[12px] font-mono tabular-nums text-emerald-800 dark:text-emerald-300",
										children: ["Reference ID: ", receiptId]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setReceiptId(""),
										className: "px-4 py-2 min-h-[44px] rounded-lg bg-[#0f172a] dark:bg-[#f1f5f9] text-white dark:text-[#0f172a] text-[12.5px] font-semibold cursor-pointer",
										children: "Send Another Inquiry"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "contact-name",
											className: "block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5",
											children: "Your Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "contact-name",
											type: "text",
											placeholder: "Full name",
											required: true,
											value: name,
											onChange: (e) => setName(e.target.value),
											className: "w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "contact-email",
											className: "block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "contact-email",
											type: "email",
											placeholder: "you@example.com",
											required: true,
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-topic",
										className: "block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5",
										children: "Inquiry Topic"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "contact-topic",
										value: topic,
										onChange: (e) => {
											setTopic(e.target.value);
											setSelectedInquiryTopic(e.target.value);
										},
										className: "w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]",
										children: topicOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: option,
											children: option
										}, option))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-message",
										className: "block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "contact-message",
										rows: 4,
										placeholder: "Describe your technical issue, document task, or remote project...",
										required: true,
										value: message,
										onChange: (e) => setMessage(e.target.value),
										className: "w-full px-3.5 py-2.5 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8] resize-none"
									})] }),
									errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12.5px] font-semibold text-rose-600 dark:text-rose-400",
										children: errorMsg
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: submitting,
										className: "w-full py-3 px-5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: submitting ? "Submitting..." : "Submit Inquiry" })]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorAdSlot, {
						ids: ["sponsor-9912130", "sponsor-11242742"],
						heading: "Community Aid & Infrastructure Partners"
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/Footer.tsx
var Footer = ({ darkMode, onToggleDarkMode }) => {
	const { adminProfile, websites, yearly } = useStudio();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[#070b14] text-[#94a3b8] text-[13.5px] pt-16 pb-10 border-t border-[#1c273b]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#1c273b]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: adminProfile.avatarUrl,
									alt: adminProfile.avatarAltText || adminProfile.siteName,
									referrerPolicy: "no-referrer",
									className: "w-10 h-10 rounded-full object-cover border-2 border-[#38bdf8]/75 bg-[#0c121e]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-white font-bold text-[17px] leading-tight",
									children: adminProfile.siteName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11.5px] font-mono text-[#38bdf8] font-medium",
									children: adminProfile.location
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "leading-relaxed text-[#64748b] text-[13px]",
								children: [
									adminProfile.roleTitle,
									" · Certified: ",
									adminProfile.certification,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onToggleDarkMode,
								className: "whitespace-nowrap inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#1c273b] bg-[#0c121e] hover:border-[#334155] text-[12.5px] font-medium text-[#e2e8f0] transition-colors cursor-pointer",
								children: [darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-3.5 h-3.5 text-[#38bdf8]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-3.5 h-3.5 text-[#3b82f6]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: darkMode ? "Light Theme" : "Dark Theme" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-semibold text-[14px]",
							children: "Navigation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2.5 text-[#94a3b8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#websites-section",
									className: "hover:text-white transition-colors",
									children: "Websites Slideshow"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#services-section",
									className: "hover:text-white transition-colors",
									children: "Services Catalog"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about-section",
									className: "hover:text-white transition-colors",
									children: "About & Credentials"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#skills-section",
									className: "hover:text-white transition-colors",
									children: "Skills & Feeds"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#sponsors-section",
									className: "hover:text-white transition-colors",
									children: "Sponsored Partners"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact-section",
									className: "hover:text-white transition-colors",
									children: ["Contact ", adminProfile.siteName]
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-semibold text-[14px]",
							children: "Websites Network"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5 text-[#94a3b8]",
							children: websites.slice(0, 6).map((site) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-white transition-colors flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: site.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] font-mono shrink-0 ${site.status === "online" ? "text-emerald-400" : "text-[#64748b]"}`,
									children: site.status === "online" ? "Live" : "Ready"
								})]
							}) }, site.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-semibold text-[14px]",
							children: "Official Channels"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2.5 text-[#94a3b8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://mrs-services.ai.studio/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors font-mono text-[12.5px]",
									children: "mrs-services.ai.studio"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact-section",
									className: "hover:text-white transition-colors",
									children: "Send Service Inquiry"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: adminProfile.socials.calendlyUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: "Calendly Scheduling"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: adminProfile.socials.linkedinUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: "LinkedIn Profile"
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-[#64748b]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: yearly.currentYear
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-[#e2e8f0]",
						children: adminProfile.siteName
					}),
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[12px] font-mono tabular-nums text-[#64748b]",
					children: ["Official Digital Hub · Est. ", yearly.establishedYear]
				})]
			})]
		})
	});
};
//#endregion
//#region src/App.tsx
var ErrorBoundary = class extends import_react.Component {
	constructor(..._args) {
		super(..._args);
		this.state = { hasError: false };
		this.handleReset = () => {
			this.setState({ hasError: false });
		};
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error) {
		console.error("[M R S ErrorBoundary]", error);
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-screen flex items-center justify-center bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-extrabold tracking-tight",
						children: "M R S"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#475569] dark:text-[#94a3b8]",
						children: "A temporary display error occurred. Try restoring the view or reload the page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: this.handleReset,
							className: "px-4 py-2 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] text-[#0f172a] dark:text-[#f1f5f9] text-sm font-semibold cursor-pointer",
							children: "Try Again"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => window.location.reload(),
							className: "px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-bold cursor-pointer",
							children: "Reload Page"
						})]
					})
				]
			})
		});
		return this.props.children;
	}
};
function MainLayout() {
	const { adminProfile } = useStudio();
	const [darkMode, setDarkMode] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("mrs_tech_theme_mode");
			if (saved === "light") return false;
			if (saved === "dark") return true;
		} catch {}
		return true;
	});
	(0, import_react.useEffect)(() => {
		const exactSiteName = adminProfile.siteName || "M R S";
		const nextTitle = `${exactSiteName} — ${adminProfile.roleTitle || "Remote IT Support, Virtual Assistance & Digital Operations"}`;
		document.title = nextTitle;
		const ogTitle = document.querySelector("meta[property=\"og:title\"]");
		if (ogTitle) ogTitle.setAttribute("content", nextTitle);
		const ogSiteName = document.querySelector("meta[property=\"og:site_name\"]");
		if (ogSiteName) ogSiteName.setAttribute("content", exactSiteName);
		const twitterTitle = document.querySelector("meta[name=\"twitter:title\"]");
		if (twitterTitle) twitterTitle.setAttribute("content", nextTitle);
		const authorMeta = document.querySelector("meta[name=\"author\"]");
		if (authorMeta) authorMeta.setAttribute("content", exactSiteName);
	}, [adminProfile.siteName, adminProfile.roleTitle]);
	(0, import_react.useEffect)(() => {
		if (darkMode) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		const metaTheme = document.querySelector("meta[name=\"theme-color\"]");
		if (metaTheme) metaTheme.setAttribute("content", darkMode ? "#070b14" : "#f4f7fb");
	}, [darkMode]);
	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const next = !prev;
			try {
				localStorage.setItem("mrs_tech_theme_mode", next ? "dark" : "light");
			} catch {}
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] transition-colors duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
						darkMode,
						onToggleDarkMode: toggleDarkMode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebsiteSlideshow, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesCatalogSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutCredentials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {
				darkMode,
				onToggleDarkMode: toggleDarkMode
			})
		]
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainLayout, {}) }) });
}
//#endregion
//#region src/main.tsx
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}));
//#endregion
