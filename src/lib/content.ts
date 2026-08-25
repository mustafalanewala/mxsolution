/**
 * Single source of truth for everything the page says and everything the
 * JSON-LD in app/layout.tsx claims. Keep it free of "use client" so the
 * server layout can import it — the two can then never drift.
 */

export const site = {
  name: "Mx Solution",
  url: "https://mxsolution.in",
  tagline: "Technology built around your business.",
  /** The footer's one paragraph — who we are, in the fewest words. */
  blurb:
    "A technology partner for businesses that need something more specific than an off-the-shelf answer. Based in Dohad, working across India.",
  // No email anywhere on the site by choice — every enquiry comes through
  // WhatsApp, the phone, or the booking link, which is where they actually
  // get answered.
  phone: "+919157302004",
  phoneDisplay: "+91 91573 02004",
  locality: "Dohad",
  region: "Gujarat",
  country: "India",
  whatsapp:
    "https://wa.me/919157302004?text=Hi%20Mx%20Solution%20%E2%80%94%20here%27s%20what%27s%20not%20working%20for%20us%3A",
  /** Every "Book a call" on the site points here. 15 minutes, no form first. */
  booking: "https://cal.com/mustafalanewala/15min",
  social: {
    linkedin: "https://www.linkedin.com/company/mxsolution53",
    instagram: "https://instagram.com/mxsolution.in",
  },
} as const;

/**
 * Real routes, not homepage anchors — the site is a set of pages now, and
 * a nav that only jumps around one document can't survive leaving it.
 * One list, read by both the header and the footer.
 */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Solutions", href: "/solutions" },
  { label: "About us", href: "/about" },
  { label: "Blogs", href: "/blog" },
] as const;

/* ── The premise ──────────────────────────────────────────────────────
   What the visitor recognises about their own business before we have
   said a word about ours. */

/** Short enough to read at a glance. The section is the list, nothing else. */
export const problems = [
  "Not enough qualified leads",
  "Invisible on Google",
  "Traffic that never converts",
  "Work that runs on spreadsheets",
  "Software that doesn’t fit",
  "Growth that needs another hire",
] as const;

/* ── How the work runs ───────────────────────────────────────────── */

export type Step = {
  title: string;
  description: string;
  icon: "understand" | "identify" | "strategize" | "build" | "grow";
};

export const approach: Step[] = [
  {
    title: "Understand",
    description: "How the business runs, and where the hours and money go.",
    icon: "understand",
  },
  {
    title: "Identify",
    description: "The real problem, separated from the obvious one.",
    icon: "identify",
  },
  {
    title: "Strategize",
    description: "What to build, improve, automate — or leave alone.",
    icon: "strategize",
  },
  {
    title: "Build",
    description: "The solution shaped around you, not the other way round.",
    icon: "build",
  },
  {
    title: "Grow",
    description: "Visibility, speed and conversion, kept moving after launch.",
    icon: "grow",
  },
];

/* ── What we solve, framed as outcomes ─────────────────────────────
   Technology is listed underneath on purpose. It supports the story;
   it is never the story. */

export type Solution = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  capabilities: string[];
  tech: string[];
};

export const solutions: Solution[] = [
  {
    id: "get-found",
    title: "Get found",
    summary: "You are the right answer. Search doesn't know it yet.",
    detail:
      "We build search visibility into the structure of the thing itself — how pages are organised, what they answer, how fast they load, how clearly a machine can read them. Not a checklist bolted on after launch.",
    capabilities: [
      "Technical SEO",
      "Local & map visibility",
      "Site architecture",
      "Content structure",
      "Core Web Vitals",
      "Search intent mapping",
    ],
    tech: ["Structured data", "Server rendering", "GSC", "Analytics"],
  },
  {
    id: "get-customers",
    title: "Get more customers",
    summary: "Visits are not the goal. Enquiries are.",
    detail:
      "We design the path a buyer actually walks — what they need to believe, in what order, before they'll pick up the phone. Then we remove everything else standing in the way.",
    capabilities: [
      "Conversion-led websites",
      "Landing pages",
      "Lead capture & routing",
      "Enquiry automation",
      "Copy & message hierarchy",
      "Funnel analytics",
    ],
    tech: ["Next.js", "CRM integrations", "WhatsApp API", "A/B testing"],
  },
  {
    id: "work-smarter",
    title: "Work smarter",
    summary: "The repetitive part of your week shouldn't need a person.",
    detail:
      "Quotes, follow-ups, stock counts, reports, handoffs between tools that don't talk. We map where the hours leak and build the system that closes the gap.",
    capabilities: [
      "Business automation",
      "Internal tools",
      "Dashboards & reporting",
      "Workflow systems",
      "Third-party integrations",
      "Role-based access",
    ],
    tech: ["APIs", "Webhooks", "Databases", "Scheduled jobs"],
  },
  {
    id: "build-missing",
    title: "Build what's missing",
    summary: "When nothing off the shelf fits how you actually operate.",
    detail:
      "Some businesses don't have a category. We build the platform that matches yours — the one no vendor sells because only you need it in that shape.",
    capabilities: [
      "Custom software",
      "Business platforms",
      "CRM & ERP systems",
      "APIs and integrations",
      "Data modelling",
      "Migration from legacy tools",
    ],
    tech: ["TypeScript", "Postgres", "REST & GraphQL", "Cloud infrastructure"],
  },
  {
    id: "sell-better",
    title: "Sell better",
    summary: "A storefront that answers the question before it's asked.",
    detail:
      "Product experiences built for how people really decide — enough information to commit, few enough steps to finish. Payments, stock and fulfilment behind it that don't need babysitting.",
    capabilities: [
      "E-commerce platforms",
      "Product experience design",
      "Payments & checkout",
      "Inventory & orders",
      "Conversion optimisation",
      "Commerce analytics",
    ],
    tech: ["Headless commerce", "Payment gateways", "Order pipelines"],
  },
  {
    id: "scale",
    title: "Scale digitally",
    summary: "What you build this year should still hold next year.",
    detail:
      "Ongoing ownership rather than a handover and a goodbye. We keep the thing fast, visible and current, and we tell you what to invest in next based on what it's doing.",
    capabilities: [
      "Technology strategy",
      "Performance engineering",
      "Maintenance & monitoring",
      "Analytics & reporting",
      "Security & uptime",
      "Roadmap planning",
    ],
    tech: ["Observability", "CI/CD", "Edge caching", "Uptime monitoring"],
  },
];

/* ── What we actually build ────────────────────────────────────────
   The outcomes above are why someone calls. This is what they get, named
   the way they'd name it themselves. Twelve, so the grid fills evenly at
   two and three columns — a hole in a hairline grid reads as a bug. */

export type Service = {
  id: string;
  icon:
    | "web"
    | "design"
    | "commerce"
    | "software"
    | "records"
    | "dashboard"
    | "automate"
    | "api"
    | "chat"
    | "search"
    | "customise"
    | "support";
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "websites",
    icon: "web",
    title: "Websites & web platforms",
    summary:
      "The site itself — fast, findable, and built to convert rather than just exist.",
    items: [
      "Business & corporate sites",
      "Landing & campaign pages",
      "Portals and multi-page platforms",
      "Content management",
      "Multi-language sites",
    ],
  },
  {
    id: "design",
    icon: "design",
    title: "Design & brand experience",
    summary:
      "How it looks, and more importantly the order in which it makes someone believe you.",
    items: [
      "UI & UX design",
      "Design systems",
      "Brand-consistent interfaces",
      "Prototypes before anything is built",
    ],
  },
  {
    id: "ecommerce",
    icon: "commerce",
    title: "E-commerce & storefronts",
    summary:
      "Catalogue to checkout, plus the order machinery running behind it.",
    items: [
      "Online stores",
      "Payments & checkout",
      "Inventory & order management",
      "Shipping & fulfilment flows",
      "Commerce analytics",
    ],
  },
  {
    id: "software",
    icon: "software",
    title: "Custom software",
    summary: "When nothing off the shelf fits how you actually operate.",
    items: [
      "Business platforms",
      "Web applications",
      "Portals & marketplaces",
      "Data modelling",
      "Role-based access",
    ],
  },
  {
    id: "crm-erp",
    icon: "records",
    title: "CRM & ERP systems",
    summary:
      "One place the whole business reads from, instead of six that disagree.",
    items: [
      "CRM setup & customisation",
      "ERP workflows",
      "Lead & pipeline tracking",
      "Migration from legacy tools",
    ],
  },
  {
    id: "internal-tools",
    icon: "dashboard",
    title: "Internal tools & dashboards",
    summary: "The screen your team actually works in every day.",
    items: [
      "Admin panels",
      "Reporting dashboards",
      "Approval workflows",
      "Team & role management",
    ],
  },
  {
    id: "automation",
    icon: "automate",
    title: "Business automation",
    summary: "The repetitive part of the week that shouldn't need a person.",
    items: [
      "Quotes & follow-ups",
      "Scheduled reports",
      "Document generation",
      "Notifications & reminders",
      "Stock & order sync",
    ],
  },
  {
    id: "integrations",
    icon: "api",
    title: "APIs & integrations",
    summary: "Making the tools you already pay for talk to each other.",
    items: [
      "REST & GraphQL APIs",
      "Third-party integrations",
      "Payment & shipping gateways",
      "Webhooks & data sync",
      "Accounting & billing tools",
    ],
  },
  {
    id: "whatsapp",
    icon: "chat",
    title: "WhatsApp & messaging",
    summary: "Where your customers already are — automated, not spammed.",
    items: [
      "WhatsApp Business API",
      "Enquiry capture & routing",
      "Order & delivery updates",
      "Chatbots & auto-replies",
      "Broadcast campaigns",
    ],
  },
  {
    id: "seo",
    icon: "search",
    title: "SEO & search visibility",
    summary: "Being the right answer isn't enough if search doesn't know it.",
    items: [
      "Technical SEO",
      "Local & Google Maps visibility",
      "Site architecture",
      "Core Web Vitals",
      "Search intent mapping",
    ],
  },
  {
    id: "customisation",
    icon: "customise",
    title: "Customisation & improvements",
    summary:
      "Sometimes the answer is fixing what you already have, not replacing it.",
    items: [
      "Feature additions",
      "Redesigns & rebuilds",
      "Performance fixes",
      "Bug fixing & cleanup",
      "Customising third-party software",
    ],
  },
  {
    id: "support",
    icon: "support",
    title: "Support, hosting & performance",
    summary:
      "Launch is the middle of the project. Someone has to keep it running.",
    items: [
      "Hosting & deployment",
      "Uptime monitoring",
      "Security updates",
      "Performance tuning",
      "Ongoing support retainers",
    ],
  },
];

/* ── The four things that actually separate us ────────────────────
   Search and customisation are the two biggest, so they get a column
   each rather than a line in a service list. */

export type Differentiator = {
  title: string;
  body: string;
  points: string[];
};

export const differentiators: Differentiator[] = [
  {
    title: "We find the real problem",
    body: "The obvious problem and the actual problem are rarely the same thing. We spend the start of every engagement telling them apart — including the times the honest answer is that you don't need what you came in asking for.",
    points: ["Discovery first", "Written diagnosis", "Scope you can refuse"],
  },
  {
    title: "Built to be found",
    body: "A beautiful website nobody finds is not doing its job. Search intent, technical SEO, architecture, performance and structured content are constraints we design under from the first sitemap — never a phase bolted on at the end.",
    points: ["Technical SEO", "Site architecture", "Core Web Vitals"],
  },
  {
    title: "Built to fit",
    body: "Your business isn't standard, so your solution isn't either. We don't reshape how you work to suit a template or a licence — we shape the system around the way the work already runs.",
    points: ["Understand → design", "Build → integrate", "Then optimise"],
  },
  {
    title: "Still here after launch",
    body: "Launch is the middle of the project, not the end of it. We keep the thing fast, visible and current, and we tell you what to invest in next based on what the numbers are actually doing.",
    points: ["Performance & uptime", "Search visibility", "Quarterly review"],
  },
];

/* ── Work ─────────────────────────────────────────────────────────
   Every project is a problem → change → result story. Where a number
   isn't measured and verified, none is claimed. */

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  image: string;
  link: string;
  /** Outcome-led headline — what changed for the business */
  headline: string;
  problem: string;
  change: string;
  result: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "guidance-tamil-nadu",
    client: "Guidance Tamil Nadu",
    sector: "Government · Investment promotion",
    image: "/projects/guidance-tamil-nadu-investment-portal.png",
    link: "https://investingintamilnadu.com",
    headline: "An investment portal investors can act on",
    problem:
      "A brochure site would have described the offer. It wouldn't have helped an investor act on it.",
    change:
      "Rebuilt around investor intent — organised by sector and by question, with architecture, performance and search treated as requirements rather than polish.",
    result:
      "A portal that holds up to government scale, and gives a serious investor a straight line from landing to conversation.",
    tags: ["Web platform", "Information architecture", "SEO", "Performance"],
  },
  {
    slug: "sk-attire-hub",
    client: "SK Attire Hub",
    sector: "Fashion · E-commerce",
    image: "/projects/sk-attire-hub-ecommerce-store.png",
    link: "https://skattirehub.in",
    headline: "From DMs to a storefront they own",
    problem:
      "Orders came through messages and marketplaces. Nothing about the buying experience belonged to the brand.",
    change:
      "A commerce platform end to end — listings, payments, order flow — built for a buyer who decides in seconds.",
    result:
      "Live within a month. The brand now owns its storefront, its customer data and the experience around both.",
    tags: ["E-commerce", "Payments", "Product experience"],
  },
  {
    slug: "mubarak-collection",
    client: "Mubarak Collection",
    sector: "Craft retail · E-commerce",
    image: "/projects/mubarak-collection-ecommerce-store.webp",
    link: "https://www.mubarakcollection.in",
    headline: "A 2011 reputation, finally buyable online",
    problem:
      "A name people already trusted, and no way for them to buy without a phone call.",
    change:
      "A product experience shaped around the catalogue — how the pieces differ, and what a buyer needs to see before committing.",
    result:
      "A storefront that reads as carefully made as the product it sells, and walks a buyer through the order without a phone call.",
    tags: ["E-commerce", "Brand experience", "Catalogue design"],
  },
  {
    slug: "gujarat-food-products",
    client: "Gujarat Food Products",
    sector: "Food manufacturing · B2B",
    image: "/projects/gujarat-food-products-manufacturer-website.webp",
    link: "https://www.gujaratfoodproducts.in",
    headline: "A manufacturer a distributor can evaluate",
    problem:
      "Distribution ran on relationships and phone calls. A new buyer had no way to judge the product, or the operation behind it, before making contact.",
    change:
      "A site built around a distributor's questions rather than a shopper's — what the product is, how it's grown and processed, and who to speak to about volume.",
    result:
      "Enquiries now arrive from buyers who already know what they're asking for.",
    tags: ["Manufacturer website", "B2B enquiries", "SEO"],
  },
];

/* ── Concepts ──────────────────────────────────────────────────────
   Self-initiated builds: no client, no brief, no engagement behind them.
   They are kept strictly apart from the case studies above and labelled
   as concepts wherever they appear, because a demo presented as client
   work is the exact kind of claim the rest of this site refuses to make.

   For the same reason they carry no problem → change → result: there was
   no business on the other side of them to change anything for. */

export type Concept = {
  title: string;
  sector: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
};

export const concepts: Concept[] = [
  {
    title: "Valor Jets",
    sector: "Private aviation",
    image: "/projects/valor-jets-charter-booking-platform.png",
    link: "https://valor-jets.vercel.app",
    description:
      "A charter booking flow built on the premise that in private aviation the decision is made on credibility long before it is made on price.",
    tags: ["Booking flow", "Brand experience", "Web platform"],
  },
  {
    title: "Aetherial Reality",
    sector: "Construction",
    image: "/projects/aetherial-reality-construction-website.png",
    link: "https://aetherial-reality.vercel.app",
    description:
      "A construction firm's work shown the way clients judge it — spatially, in progress, at scale.",
    tags: ["Web platform", "Project showcase", "3D visualisation"],
  },
  {
    title: "Tropic UK",
    sector: "Fashion & lifestyle",
    image: "/projects/tropic-uk-lifestyle-brand-website.png",
    link: "https://tropic-uk.vercel.app",
    description:
      "A lifestyle brand whose product range needed a home with as much character as the range itself.",
    tags: ["Brand website", "Product experience", "Content structure"],
  },
];

/* ── Philosophy ───────────────────────────────────────────────────── */

export const philosophy = [
  "We don't recommend technology because it's new.",
  "We don't build features because they look impressive.",
  'We start with the business, then build what matters.',
] as const;

/* ── Questions worth answering before the first call ──────────────── */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What if we don't know what the actual problem is?",
    answer:
      "That's the normal starting point, and it's the part we're good at. You describe what isn't working — slow enquiries, manual processes, invisible on Google — and we work backwards to the cause before anyone talks about building anything.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. A website is one possible answer. Others are automation, an internal tool, a custom platform, a search strategy, or fixing what you already have. We recommend whichever one solves the problem, including the cheapest one.",
  },
  {
    question: "How do you price work?",
    answer:
      "Scope decides price. After the first conversation and a short discovery, you get a fixed written quote with the scope attached to it — so nothing moves mid-project without you agreeing to it first. The first conversation costs nothing.",
  },
  {
    question: "How long does it take?",
    answer:
      "A focused website is usually 2–4 weeks. Commerce platforms and custom systems typically run 2–3 months depending on integrations. You get a dated timeline before work starts, not after.",
  },
  {
    question: "Can you work with what we already have?",
    answer:
      "Yes. We work inside existing brand guidelines, codebases and systems, and we improve rather than replace where replacing isn't justified. Migrations from legacy tools are part of the job.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on it — performance, security, search visibility, and the analytics that tell us what to improve next. Ongoing support is a package, not an afterthought.",
  },
];

/* ── Testimonials ─────────────────────────────────────────────────── */

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Within a month everything was live — custom catalogue to checkout. We moved our business from manual DMs into a high-converting storefront our customers buy from instantly.",
    author: "Sagar Kahar",
    company: "Sk Attire Hub",
    initials: "SK",
  },
  {
    quote:
      "A high-stakes government platform delivered with precise information architecture, rock-solid performance, and disciplined execution at every milestone.",
    author: "Bipin Daniel",
    company: "Guidance (Govt. of Tamil Nadu)",
    initials: "BD",
  },
  {
    quote:
      "They pinpointed why our online presence wasn't generating inquiries and rebuilt it with intent. The turnaround in Google visibility and inbound buyer leads was remarkable.",
    author: "Vishal Sahetai",
    company: "Vishaka Fashion",
    initials: "VS",
  },
  {
    quote:
      "They took the time to understand how our customers evaluate craft products. The platform feels bespoke, loads instantly, and automates orders without needing a single phone call.",
    author: "Zenab Limdi",
    company: "Mubarak Collection",
    initials: "ZL",
  },
  {
    quote:
      "Instead of pitching generic templates, they diagnosed our distribution bottlenecks. The custom portal they built has become a reliable engine for verified B2B leads.",
    author: "Taher Mahudawala",
    company: "Gujarat Food Products",
    initials: "TM",
  },
];

