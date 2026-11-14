import { a as __toESM } from "./rolldown-runtime-oLLnCvco.js";
import { t as require_client } from "./vendor-react-eBEaD7QD.js";
import { C as ArrowDownRight, S as ArrowRight, _ as ChevronLeft, a as Play, b as Briefcase, c as Moon, d as Languages, f as Globe, g as ChevronRight, h as CircleCheck, i as RefreshCw, l as Menu, m as ExternalLink, n as Sun, o as Phone, p as GraduationCap, r as Send, s as Pause, t as X, u as Mail, v as Check, w as require_react, x as Award, y as Calendar } from "./vendor-icons-DdAOv8y0.js";
import { a as PresenceContext, c as LayoutGroupContext, i as isHTMLElement, l as require_jsx_runtime, n as usePresence, o as useIsomorphicLayoutEffect, r as MotionConfigContext, s as useConstant, t as motion } from "./vendor-motion-ICbx3hSM.js";
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
	roleTitle: "IT Support Professional | Remote Admin & Documentation Specialist | Web Manager",
	tagline: "Helping businesses run smoother, one ticket at a time",
	location: "Global / Remote",
	avatarUrl: "./mrs_profile_avatar.jpg",
	certification: "360-Hour Certified Computer Specialist & MS Office Professional",
	availabilityNote: "Open to remote contract, freelance, and part-time opportunities."
};
var ESTABLISHED_YEAR = 2018;
var getCurrentYear = () => (/* @__PURE__ */ new Date()).getFullYear();
var getCopyrightNotice = () => `© ${getCurrentYear()} ${ADMIN_SITE_CONFIG.siteName}. All rights reserved.`;
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
	avatarUrl: ADMIN_SITE_CONFIG.avatarUrl,
	certification: ADMIN_SITE_CONFIG.certification,
	availabilityNote: ADMIN_SITE_CONFIG.availabilityNote,
	bioParagraphs: [
		"I'm an IT support and administrative professional with a track record of solving technical problems reliably, remotely, and with precision. My core strengths are Microsoft Office systems, document management, job application processing, and professional correspondence — backed by a 360-hour certified computer course and hands-on system troubleshooting experience.",
		"I've spent years working independently across remote platforms, building a reputation for adaptability and consistent, high-quality delivery without the structure of a traditional office. That means I show up, communicate clearly, and get things done — no hand-holding required.",
		"Alongside client work, I run a small portfolio of digital projects (web management, content, tech media, and humanitarian initiatives), which keeps me sharp on emerging tech — from web development to Web3 to cybersecurity defense — sharing tech fixes and guides since 2018."
	],
	whatICanHelpWith: [
		"Document management & formatting",
		"Professional email & correspondence handling",
		"IT troubleshooting (Windows, Android, browsers, WiFi)",
		"Job application processing & admin support",
		"Web management & content creation"
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
				"WordPress and Blogger content management",
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
		role: "Independent IT Support Specialist & Web Manager",
		period: "2018 – Present",
		location: "Global / Remote",
		highlights: [
			"Providing end-to-end remote IT administration, Windows & Android OS troubleshooting, hardware diagnostics, and WiFi network configuration for diverse clients.",
			"Structuring, formatting, and proofreading high-stakes documentation, official correspondence, and job applications with precision and rapid turnaround.",
			"Managing content, architecture, and live operations for web platforms, tech blogs, and streaming web services."
		]
	}],
	skillsList: [
		{
			category: "IT Support & Administration",
			skills: [
				"System Troubleshooting",
				"Microsoft 365 & Office Suite",
				"Document Management",
				"Professional Correspondence",
				"User Hardware & Network Diagnostics"
			]
		},
		{
			category: "Web & Digital Management",
			skills: [
				"Blogspot & WordPress CMS",
				"Web Architecture",
				"Domain & DNS Management",
				"SEO & Analytics",
				"Content Strategy"
			]
		},
		{
			category: "Digital Operations & Interactive Systems",
			skills: [
				"Digital Interactive Concierge Systems",
				"Workflow Automation",
				"Autonomous Systems Management",
				"E-Commerce Operations",
				"Remote Team Collaboration"
			]
		},
		{
			category: "Core Competencies & Digital Skills",
			skills: [
				"Remote Work Autonomy",
				"Data Organization",
				"Technical Writing",
				"Client Communication"
			]
		}
	],
	coursesCertifications: [
		"Basic Computer Course (360 Hrs)",
		"Android Hardware Repair",
		"IELTS — Band 5.5"
	],
	education: [
		{
			degree: "Bachelor of Social Science",
			institution: "Sylhet Government College, Sylhet",
			period: "Jan 2021 – Present"
		},
		{
			degree: "Higher Secondary Certificate (HSC)",
			institution: "Tajpur Degree College, Sylhet",
			period: "Jan 2019 – Dec 2020",
			gpa: "GPA: 3.33"
		},
		{
			degree: "Secondary School Certificate (SSC)",
			institution: "Mongol Chondi Nishikanto High School, Sylhet",
			period: "Jan 2017 – Dec 2018",
			gpa: "GPA: 3.39"
		}
	],
	languages: [
		{
			name: "English",
			level: "Conversational"
		},
		{
			name: "Bengali",
			level: "Native"
		},
		{
			name: "Hindi",
			level: "Basic"
		}
	],
	interests: [
		"Web Development",
		"Web3",
		"Cybersecurity & IT Defense",
		"Social Sciences",
		"Remote Working"
	],
	socials: {
		email: "mr216873@gmail.com",
		phone: "+8809611056361",
		gravatarUrl: "",
		githubUrl: "https://github.com/mrmahbubur",
		linkedinUrl: "https://www.linkedin.com/in/mrmahbubur",
		xUrl: "https://x.com/Mrshahinx",
		blueskyUrl: "https://bsky.app/profile/mrxshahin.bsky.social",
		wordpressUrl: "https://mrxshahin.wordpress.com",
		calendlyUrl: "https://calendly.com/mrxshahin",
		contactForm: "https://mrsadmin.blogspot.com/p/contact-us.html?m=1",
		goodreadsUrl: "https://www.goodreads.com/mrxshahin"
	},
	verifiedAccounts: [
		{
			label: "LinkedIn",
			handle: "mrmahbubur",
			url: "https://www.linkedin.com/in/mrmahbubur"
		},
		{
			label: "GitHub",
			handle: "mrmahbubur",
			url: "https://github.com/mrmahbubur"
		},
		{
			label: "X",
			handle: "@Mrshahinx",
			url: "https://x.com/Mrshahinx"
		},
		{
			label: "Bluesky",
			handle: "mrxshahin.bsky.social",
			url: "https://bsky.app/profile/mrxshahin.bsky.social"
		},
		{
			label: "WordPress",
			handle: "mrxshahin.wordpress.com",
			url: "https://mrxshahin.wordpress.com"
		}
	]
};
var fallbackWebsites = [
	{
		id: "proj-6-ai-assistant",
		name: "M R S Portfolio & AI Assistant",
		url: "https://mrxshahin.ai.studio/",
		domain: "mrxshahin.ai.studio",
		category: "Official Portfolio & AI Concierge",
		badge: "AI CONCIERGE",
		description: "Official portfolio of M R S featuring verified credentials, live projects, and an interactive multimodal AI concierge.",
		imageKey: "flagship",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		latestPosts: []
	},
	{
		id: "proj-1-cloud",
		name: "Cloud (MRS ADMIN Web Hub)",
		url: "https://mrsadmin.blogspot.com/?m=1",
		domain: "mrsadmin.blogspot.com",
		category: "Portfolio & Web Hub",
		badge: "CENTRAL HUB",
		description: "Central portfolio and web hub for M R S covering IT administration, web management, and digital projects since 2018.",
		imageKey: "admin",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		feedUrl: "https://mrsadmin.blogspot.com/feeds/posts/default?alt=json&max-results=3",
		latestPosts: []
	},
	{
		id: "proj-2-blogger",
		name: "BLOGGER (mrxshahin Tech Blog)",
		url: "https://mrxshahin.blogspot.com/",
		domain: "mrxshahin.blogspot.com",
		category: "Tech Blog",
		badge: "TECH BLOG",
		description: "Practical fixes and step-by-step guides for everyday tech problems covering Windows, Android, WiFi, and browsers.",
		imageKey: "tech",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		feedUrl: "https://mrxshahin.blogspot.com/feeds/posts/default?alt=json&max-results=3",
		latestPosts: []
	},
	{
		id: "proj-3-iptv-web",
		name: "IPTV WEB",
		url: "https://shahin-iptv.ai.studio",
		domain: "shahin-iptv.ai.studio",
		category: "Live Streaming & Media Platform",
		badge: "LIVE WEB APP",
		description: "Web streaming platform delivering 10,000+ live international channels spanning Sports, Movies, Dramas, and News.",
		imageKey: "flagship",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		latestPosts: []
	},
	{
		id: "proj-4-iptv-apk",
		name: "Android TV Apk",
		url: "https://www.upload-apk.com/en/0Jr71hMVlsFwN9Y%20",
		domain: "upload-apk.com",
		category: "Android Package Download",
		badge: "DIRECT APK",
		description: "Direct Mrs IPTV APK package download supporting Android TVs, set-top boxes, and Android mobile devices.",
		imageKey: "tech",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		latestPosts: []
	},
	{
		id: "proj-5-charity",
		name: "M R S Charity Foundation",
		url: "https://mrscharityfoundation.blogspot.com/?m",
		domain: "mrscharityfoundation.blogspot.com",
		category: "Humanitarian Non-Profit",
		badge: "FOUNDATION",
		description: "Humanitarian initiative dedicated to healthcare, education, shelter, and community empowerment.",
		imageKey: "charity",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		feedUrl: "https://mrscharityfoundation.blogspot.com/feeds/posts/default?alt=json&max-results=3",
		latestPosts: []
	},
	{
		id: "wordpress-hub",
		name: "WordPress Knowledge Portal",
		url: "https://mrxshahin.wordpress.com",
		domain: "mrxshahin.wordpress.com",
		category: "Verified Publication",
		badge: "WORDPRESS",
		description: "Verified WordPress publication sharing technical solutions, digital guides, and documentation crafted by M R S.",
		imageKey: "admin",
		status: "online",
		lastChecked: (/* @__PURE__ */ new Date()).toISOString(),
		isCore: true,
		latestPosts: []
	}
];
var fallbackUpstreamStatus = {
	sourceUrl: "",
	connected: false,
	sseActive: false,
	healthStatus: "connecting",
	lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString(),
	rssItems: []
};
var fallbackHubState = {
	siteName: "M R S",
	sourceUrl: "",
	upstreamStatus: fallbackUpstreamStatus,
	adminProfile: defaultAdminProfile,
	lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
	syncCycle: 0,
	yearlySystem: initialYearly,
	websites: fallbackWebsites
};
function fetchBloggerJsonp(domain) {
	return new Promise((resolve) => {
		if (!domain.endsWith(".blogspot.com") || typeof document === "undefined") {
			resolve([]);
			return;
		}
		const cbName = `__mrsFeed_${domain.replace(/[^a-zA-Z0-9]/g, "_")}_${Date.now()}`;
		const script = document.createElement("script");
		let settled = false;
		const cleanup = () => {
			try {
				delete window[cbName];
			} catch {
				window[cbName] = void 0;
			}
			if (script.parentNode) script.parentNode.removeChild(script);
		};
		const timer = setTimeout(() => {
			if (settled) return;
			settled = true;
			cleanup();
			resolve([]);
		}, 4500);
		window[cbName] = (json) => {
			if (settled) return;
			settled = true;
			clearTimeout(timer);
			cleanup();
			const entries = json?.feed?.entry;
			if (!Array.isArray(entries)) {
				resolve([]);
				return;
			}
			resolve(entries.slice(0, 3).map((entry) => {
				const title = String(entry?.title?.$t || "Latest Post").trim();
				const altLink = Array.isArray(entry?.link) ? entry.link.find((l) => l.rel === "alternate")?.href : void 0;
				const published = typeof entry?.published?.$t === "string" ? entry.published.$t.slice(0, 10) : "";
				return {
					title,
					url: altLink || `https://${domain}`,
					published
				};
			}));
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
	yearly: initialYearly,
	isSyncing: false,
	sseConnected: false,
	selectedInquiryTopic: "General Inquiry",
	setSelectedInquiryTopic: () => {},
	syncWebsites: async () => {}
});
var StudioProvider = ({ children }) => {
	const [hubState, setHubState] = (0, import_react.useState)(fallbackHubState);
	const [isSyncing, setIsSyncing] = (0, import_react.useState)(false);
	const [sseConnected, setSseConnected] = (0, import_react.useState)(false);
	const [selectedInquiryTopic, setSelectedInquiryTopic] = (0, import_react.useState)("General Inquiry");
	const runClientSideSync = async () => {
		const updatedSites = await Promise.all(hubState.websites.map(async (site) => {
			if (site.domain.endsWith(".blogspot.com")) {
				const posts = await fetchBloggerJsonp(site.domain);
				return {
					...site,
					status: "online",
					latestPosts: posts.length > 0 ? posts : site.latestPosts,
					lastChecked: (/* @__PURE__ */ new Date()).toISOString()
				};
			}
			return {
				...site,
				lastChecked: (/* @__PURE__ */ new Date()).toISOString()
			};
		}));
		setHubState((prev) => ({
			...prev,
			siteName: prev.adminProfile.siteName || prev.siteName,
			websites: updatedSites,
			lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
			syncCycle: prev.syncCycle + 1
		}));
	};
	const fetchWebsites = async () => {
		try {
			const json = await parseJsonIfAvailable(await fetch("./api/websites", { cache: "no-store" }));
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
			const json = await parseJsonIfAvailable(await fetch("./api/websites/sync", { method: "POST" }));
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
	(0, import_react.useEffect)(() => {
		let eventSource = null;
		let reconnectTimer = null;
		let pollInterval = null;
		let mounted = true;
		const connectSSE = () => {
			try {
				eventSource = new EventSource("./api/websites/stream");
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
					} catch {}
				};
				eventSource.onerror = () => {
					if (mounted) setSseConnected(false);
					eventSource?.close();
					if (mounted) reconnectTimer = setTimeout(connectSSE, 8e3);
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
				pollInterval = setInterval(fetchWebsites, 45e3);
			} else {
				await runClientSideSync();
				pollInterval = setInterval(runClientSideSync, 6e4);
			}
		})();
		return () => {
			mounted = false;
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
		id: "about-section",
		label: "Credentials"
	},
	{
		id: "skills-section",
		label: "Skills"
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[15px] sm:text-[16px] text-[#475569] dark:text-[#94a3b8] leading-relaxed max-w-[60ch]",
									children: [
										adminProfile.tagline,
										". ",
										adminProfile.availabilityNote
									]
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
							className: "w-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white/95 dark:bg-[#0c121e]/95 backdrop-blur-sm tech-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 pb-5 border-b border-[#dbe3ee] dark:border-[#1c273b]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 rounded-full overflow-hidden border-2 border-[#2563eb]/80 dark:border-[#38bdf8]/80 bg-[#070b14] shrink-0 flex items-center justify-center text-white font-display font-bold text-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: adminProfile.avatarUrl,
										alt: adminProfile.siteName,
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-[#0f172a] dark:text-[#f1f5f9] text-right",
											children: adminProfile.location
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#64748b] dark:text-[#94a3b8]",
											children: "Direct Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${adminProfile.socials.email}`,
											className: "font-mono text-[12.5px] font-medium text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] truncate",
											children: adminProfile.socials.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#64748b] dark:text-[#94a3b8]",
											children: "Direct Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${adminProfile.socials.phone}`,
											className: "font-mono text-[12.5px] font-medium text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] tabular-nums",
											children: adminProfile.socials.phone
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#64748b] dark:text-[#94a3b8]",
											children: "Availability"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-[#0f172a] dark:text-[#f1f5f9] text-right",
											children: "Remote & Contract"
										})]
									})
								]
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums",
								children: "360 Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5",
								children: "Certified Computer & MS Office"
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
			className: "max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6",
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
					className: "relative rounded-2xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-[#070b14] min-h-[360px] sm:min-h-0 sm:aspect-[16/10] lg:aspect-[16/9] tech-surface",
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
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#070b14]/95 via-[#070b14]/65 to-[#070b14]/25" })]
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
								className: "max-w-2xl space-y-1.5 sm:space-y-2 min-w-0",
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
										className: "text-[13.5px] sm:text-[15px] text-slate-200 leading-relaxed line-clamp-2",
										children: activeSite.description
									}),
									activeSite.latestPosts && activeSite.latestPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-1 text-[12px] sm:text-[12.5px] text-slate-300 truncate",
										children: [
											"Latest:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: activeSite.latestPosts[0].url,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-[#38bdf8] hover:underline font-medium",
												children: activeSite.latestPosts[0].title
											}),
											activeSite.latestPosts[0].published && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-slate-400 font-mono tabular-nums ml-2",
												children: [
													"(",
													activeSite.latestPosts[0].published,
													")"
												]
											})
										]
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
					className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5",
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
				})
			]
		})
	});
};
//#endregion
//#region src/components/AboutCredentials.tsx
var AboutCredentials = () => {
	const { adminProfile, setSelectedInquiryTopic } = useStudio();
	const handleSelectServiceTopic = (topicTitle) => {
		setSelectedInquiryTopic(topicTitle);
		const contactEl = document.getElementById("contact-section");
		if (contactEl) contactEl.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about-section",
		className: "py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold text-[#0f172a] dark:text-white",
								children: "Background & Overview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 max-w-[65ch]",
								children: adminProfile.bioParagraphs.map((para, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15.5px] text-[#475569] dark:text-[#94a3b8] leading-[1.7]",
									children: para
								}, idx))
							})]
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => handleSelectServiceTopic(cat.title),
											className: "self-start inline-flex items-center gap-1.5 min-h-[36px] text-[12.5px] font-semibold text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4 cursor-pointer",
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => handleSelectServiceTopic(item),
											className: "shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3 h-3" })]
										})]
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13.5px] font-medium text-[#64748b] dark:text-[#94a3b8] pt-2",
									children: adminProfile.availabilityNote
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-display text-xl font-bold text-[#0f172a] dark:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Work Experience" })]
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
											children: [
												"0",
												i + 1,
												"."
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hl })]
									}, i))
								})]
							}, idx))]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] divide-y divide-[#dbe3ee] dark:divide-[#1c273b] tech-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 space-y-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Courses & Certifications" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "divide-y divide-[#dbe3ee] dark:divide-[#1c273b]",
									children: adminProfile.coursesCertifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "py-2.5 first:pt-0 last:pb-0 text-[14px] font-medium text-[#1e293b] dark:text-[#e2e8f0]",
										children: cert
									}, cert))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
					})
				})]
			})]
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
		className: "py-16 sm:py-20 border-b border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0a101b] transition-colors duration-200",
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
						className: "p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface flex flex-col justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[12px] font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8] font-semibold",
									children: [
										"0",
										idx + 1,
										"."
									]
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
							className: "group p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-3",
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
							className: "group p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-3",
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
				})
			]
		})
	});
};
//#endregion
//#region src/components/ContactSection.tsx
var ContactSection = () => {
	const { adminProfile, selectedInquiryTopic, setSelectedInquiryTopic } = useStudio();
	const topicOptions = Array.from(/* @__PURE__ */ new Set([
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
		className: "py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${adminProfile.socials.email}`,
								className: "flex items-center gap-3.5 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
										children: "Direct Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] font-mono font-medium text-[#0f172a] dark:text-white truncate",
										children: adminProfile.socials.email
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${adminProfile.socials.phone}`,
								className: "flex items-center gap-3.5 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
										children: "Telephone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] font-mono tabular-nums font-medium text-[#0f172a] dark:text-white truncate",
										children: adminProfile.socials.phone
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: adminProfile.socials.calendlyUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
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
								href: adminProfile.socials.contactForm,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11.5px] text-[#64748b] dark:text-[#94a3b8]",
											children: "Web Portal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13.5px] font-semibold text-[#0f172a] dark:text-white truncate",
											children: "mrsadmin.blogspot"
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
					className: "lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface",
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
										className: "w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
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
										className: "w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
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
									className: "w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]",
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
									className: "w-full px-3.5 py-2.5 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8] resize-none"
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
			})]
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
									alt: adminProfile.siteName,
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
									". ",
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
									href: "#about-section",
									className: "hover:text-white transition-colors",
									children: "About & Credentials"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#skills-section",
									className: "hover:text-white transition-colors",
									children: "Skills & Feeds"
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
							children: "Direct Channels"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2.5 text-[#94a3b8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${adminProfile.socials.email}`,
									className: "hover:text-white transition-colors font-mono text-[12.5px]",
									children: adminProfile.socials.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${adminProfile.socials.phone}`,
									className: "hover:text-white transition-colors font-mono text-[12.5px] tabular-nums",
									children: adminProfile.socials.phone
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
		const nextTitle = `${exactSiteName} — Certified IT Support Professional & Web Manager`;
		document.title = nextTitle;
		const ogTitle = document.querySelector("meta[property=\"og:title\"]");
		if (ogTitle) ogTitle.setAttribute("content", nextTitle);
		const ogSiteName = document.querySelector("meta[property=\"og:site_name\"]");
		if (ogSiteName) ogSiteName.setAttribute("content", exactSiteName);
		const twitterTitle = document.querySelector("meta[name=\"twitter:title\"]");
		if (twitterTitle) twitterTitle.setAttribute("content", nextTitle);
		const authorMeta = document.querySelector("meta[name=\"author\"]");
		if (authorMeta) authorMeta.setAttribute("content", exactSiteName);
	}, [adminProfile.siteName]);
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutCredentials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
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
