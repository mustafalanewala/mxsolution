/**
 * The blog, as a file. No CMS and no backend — at the volume a studio
 * this size actually publishes, a typed array is the whole system: add an
 * entry below and the index, the post page, the sitemap and the JSON-LD
 * all pick it up with nothing else to wire.
 *
 * Kept out of content.ts so posts can pile up without burying the copy
 * the rest of the site is built from.
 */

/**
 * A post is a list of blocks rather than a list of paragraphs. Headings
 * are what let a reader skim a 1,200-word piece — and what search engines
 * lift for the "jump to" links under a result — so they have to be real
 * elements, not bold text inside a paragraph.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  /** Becomes the URL: /blog/<slug>. Lowercase, hyphens, no dates in it. */
  slug: string;
  title: string;
  /** The line under the title on the index, and the meta description */
  excerpt: string;
  /** ISO date (YYYY-MM-DD) — sortable, and formatted at render */
  date: string;
  readingMinutes: number;
  tags: string[];
  /** Cover, in /public/blogs, named after the slug. 1.91:1 — it doubles
      as the Open Graph image, and that's the ratio the crawlers crop to. */
  image: string;
  /** What the illustration shows, for screen readers and for search */
  imageAlt: string;
  body: Block[];
};

/**
 * Newest first — the index and the sitemap both read it in this order.
 */
export const posts: Post[] = [
  {
    slug: "whatsapp-business-api-vs-app",
    title: "WhatsApp Business API vs the free app: what actually changes",
    excerpt:
      "The free WhatsApp Business app is fine until enquiries outgrow one phone. What the API adds, what it costs you in setup, and how to tell which one you actually need.",
    date: "2026-08-11",
    readingMinutes: 8,
    tags: ["WhatsApp", "Automation", "Systems"],
    image: "/blogs/whatsapp-business-api-vs-app.png",
    imageAlt:
      "One phone showing a WhatsApp conversation, connected by lines to three laptops showing the same thread — one number answered by a whole team.",
    body: [
      {
        type: "p",
        text: "In India, the enquiry almost never arrives as an email. It arrives on WhatsApp, usually as three words and a photo, usually after hours. Which is why almost every business we work with is already running on the free WhatsApp Business app — and why almost every one of them eventually asks the same question: do we need the API?",
      },
      {
        type: "p",
        text: "The honest answer is that most businesses don't, right up until the day they very obviously do. Here is where the line actually sits.",
      },
      { type: "h2", text: "What the free app already does well" },
      {
        type: "p",
        text: "The WhatsApp Business app is more capable than people give it credit for. It costs nothing, it takes ten minutes to set up, and it covers a genuine amount of ground:",
      },
      {
        type: "list",
        items: [
          "A business profile with your address, hours and website",
          "Labels, so enquiries can be sorted into new, quoted, closed",
          "Quick replies for the answers you type forty times a week",
          "Greeting and away messages outside working hours",
          "A catalogue, so you can send products without a PDF",
        ],
      },
      {
        type: "p",
        text: "If one person handles enquiries and the volume is manageable, this is the right tool. Adding infrastructure to it would be a cost with no return. Do not let anyone sell you an integration for a problem you don't have yet.",
      },
      { type: "h2", text: "Where it breaks" },
      {
        type: "p",
        text: "The free app is built around one number on one phone. Every limitation that matters comes from that single design decision.",
      },
      {
        type: "list",
        items: [
          "Two people can't work the same inbox properly — someone ends up shouting across the office about who replied",
          "There's no routing: sales, service and accounts all land in the same thread",
          "Nothing syncs to your CRM, so the history lives on a device that can be lost, sold or resigned with",
          "Automation stops at canned replies — nothing can react to an order status or a payment",
          "You can't send a proactive update to 400 customers without it looking like spam, because it is",
        ],
      },
      {
        type: "p",
        text: "The usual tell is a business that has started keeping a parallel spreadsheet of WhatsApp enquiries so nothing gets lost. That spreadsheet is the symptom. The app has stopped being the system.",
      },
      { type: "h2", text: "What the API changes" },
      {
        type: "p",
        text: "The WhatsApp Business Platform — what everyone calls the API — is not an app. There is no interface. It is a connection between WhatsApp and something else: a shared inbox tool, your CRM, or software built for the way you work. That distinction is the whole point.",
      },
      {
        type: "list",
        items: [
          "Several agents on one number, with conversations assigned rather than fought over",
          "Enquiries routed by what the customer picked, not by who noticed first",
          "Every message written into the customer's record automatically",
          "Automated messages triggered by real events — order confirmed, payment received, delivery out",
          "Outbound campaigns to customers who opted in, sent as approved templates",
        ],
      },
      {
        type: "p",
        text: "The gain is not that WhatsApp gets smarter. It's that WhatsApp stops being a separate island from the rest of your business.",
      },
      { type: "h2", text: "What it costs you" },
      {
        type: "p",
        text: "Three things, and only one of them is money.",
      },
      {
        type: "p",
        text: "First, setup. You need a verified business, a number that isn't already on the app, and either Meta's Cloud API directly or a Business Solution Provider sitting in front of it. Verification takes days rather than minutes, and it fails on small mismatches between your Meta business details and your registration documents.",
      },
      {
        type: "p",
        text: "Second, messaging charges. Meta prices messages by category — marketing, utility, authentication, service — and has changed the model more than once, including a shift from per-conversation to per-message pricing. Do not budget from a blog post, this one included: check the current rate card for India before you commit, and model it against your real monthly volume.",
      },
      {
        type: "p",
        text: "Third, a client. Because the API has no interface, you also need whatever your team will actually type into. That's either an off-the-shelf shared inbox or a screen inside your own system. Businesses that skip this step end up with a working API and nowhere to use it.",
      },
      { type: "h2", text: "The rules that trip people up" },
      {
        type: "p",
        text: "You cannot message whoever you like. Marketing messages require opt-in you can evidence. Outside a rolling window after a customer's last message, you can only send pre-approved template messages, and templates get rejected for being too promotional or too vague. Quality ratings drop when people block you, and a low rating cuts your sending limits.",
      },
      {
        type: "p",
        text: "None of this is unreasonable. It's the price of a channel where people actually read what arrives. But it does mean the API rewards businesses with something worth sending and punishes businesses that treat it as cheap SMS.",
      },
      { type: "h2", text: "How to tell which one you need" },
      {
        type: "p",
        text: "Stay on the free app if one person handles enquiries, replies inside a few hours, and nothing is falling through. Move to the API when any two of these are true:",
      },
      {
        type: "list",
        items: [
          "More than one person needs to answer the same number",
          "Enquiries are being lost, or answered twice by different people",
          "You're copying WhatsApp conversations into a spreadsheet or CRM by hand",
          "You want order, delivery or payment updates sent automatically",
          "You need to reach past customers without exporting numbers and blasting them",
        ],
      },
      {
        type: "p",
        text: "One is a nice-to-have. Two is a process problem that will get worse with growth, and that's the point where the setup pays for itself.",
      },
    ],
  },
  {
    slug: "rank-on-google-maps-india",
    title: "How a local business actually ranks on Google Maps in India",
    excerpt:
      "Local search is decided on proximity, relevance and prominence — not on how often you post. What genuinely moves a Google Business Profile, in the order it's worth doing.",
    date: "2026-07-21",
    readingMinutes: 9,
    tags: ["Local SEO", "Google Business Profile", "Search"],
    image: "/blogs/rank-on-google-maps-india.png",
    imageAlt:
      "A small shop front with a map pin above its roof, beside a phone showing three ranked local search results with the top one highlighted.",
    body: [
      {
        type: "p",
        text: "For a business with a physical location, the map pack is worth more than the first organic result below it. Someone searching \"CA near me\" or \"modular kitchen Dohad\" is not researching. They're choosing, usually within the hour, from three names.",
      },
      {
        type: "p",
        text: "The good news is that local ranking is one of the few areas of search where the rules are publicly stated. The bad news is that most of the advice around it ignores them.",
      },
      { type: "h2", text: "The three things Google is weighing" },
      {
        type: "p",
        text: "Google is explicit that local results are ranked on relevance, distance and prominence. Everything that works comes back to one of the three.",
      },
      {
        type: "list",
        items: [
          "Relevance — how well your profile matches what was actually typed",
          "Distance — how far you are from the searcher, or from the place they named",
          "Prominence — how well known and well referenced the business is, online and off",
        ],
      },
      {
        type: "p",
        text: "Distance you cannot change. Relevance you control almost entirely. Prominence you earn slowly. That ordering is also the order in which you should spend your effort.",
      },
      { type: "h2", text: "Fix the profile before you touch the website" },
      {
        type: "p",
        text: "The single most common reason a business doesn't rank locally is a profile that was filled in once, three years ago, by whoever had the phone. Before anything else, work through it properly:",
      },
      {
        type: "list",
        items: [
          "Primary category set to what you actually are, not what you aspire to",
          "Secondary categories for genuine additional services, and nothing else",
          "Address and service area that match how you really operate",
          "Hours that are correct, including holidays — wrong hours generate one-star reviews",
          "Real photographs of the premises, team and work, not stock images",
          "Services or products listed individually, each with a description",
        ],
      },
      {
        type: "p",
        text: "Every one of these is a relevance signal. A profile with one category and three photos is competing against profiles with eight services described in the customer's own words.",
      },
      { type: "h2", text: "Categories are the biggest single lever" },
      {
        type: "p",
        text: "If you change one thing this week, change your primary category. It has more influence on which searches you appear in than anything else on the profile, and the difference between two plausible-sounding options is often the difference between appearing and not.",
      },
      {
        type: "p",
        text: "The way to choose is not to guess. Search the term you want to rank for, look at the businesses in the map pack, and check what category they are using. If every result for your target search shares a category and you don't have it, that's your answer.",
      },
      { type: "h2", text: "Reviews: quantity, recency, and the words in them" },
      {
        type: "p",
        text: "Reviews feed prominence, but they also feed relevance, because Google reads what's written in them. A review that says \"quick response on a leaking RO purifier in Dohad\" is doing work that no amount of profile editing can replicate.",
      },
      {
        type: "p",
        text: "So ask, consistently, at the moment the work is finished and the customer is happiest. Send the review link by WhatsApp rather than reading it out. Reply to every review, including the bad ones, because a calm reply to a one-star is read by everyone who comes after it.",
      },
      {
        type: "p",
        text: "What not to do: buy reviews, incentivise them, or write them from the office WiFi. Removals and suspensions are enforced, and rebuilding a suspended profile costs more than the reviews were ever worth.",
      },
      { type: "h2", text: "Your website still matters" },
      {
        type: "p",
        text: "The profile does not sit on its own. Google cross-checks it against the rest of the web, so the site has to agree with it.",
      },
      {
        type: "list",
        items: [
          "Name, address and phone number identical everywhere — including the format",
          "A real page for each location and each main service, not one page listing all of them",
          "LocalBusiness structured data with the same details as the profile",
          "Local citations on the directories that matter in India — JustDial, IndiaMART, Sulekha and your trade bodies",
          "A page that loads fast on a mid-range Android over 4G, because that's the actual device",
        ],
      },
      { type: "h2", text: "What doesn't work" },
      {
        type: "p",
        text: "Posting to your profile every day does not rank you; posts are a conversion feature, not a ranking one. Stuffing keywords into the business name is against the guidelines and is one of the easiest things for a competitor to report. Buying links from a monthly SEO package with no reporting is money set on fire.",
      },
      {
        type: "p",
        text: "The uncomfortable truth is that local ranking is mostly diligence. It rewards the business that keeps the profile accurate, collects reviews every month, and has a site that agrees with itself.",
      },
      { type: "h2", text: "A realistic order of work" },
      {
        type: "list",
        items: [
          "Week one: claim and verify the profile, fix categories, hours, services and photos",
          "Week two: make name, address and phone identical across the site and the main directories",
          "Week three: add service and location pages with structured data",
          "Every month after: ask for reviews, reply to all of them, keep the profile current",
        ],
      },
      {
        type: "p",
        text: "Most businesses see movement within a few weeks of the first two steps alone, because so few of their competitors have done them.",
      },
    ],
  },
  {
    slug: "traffic-but-no-enquiries",
    title: "Your website gets traffic. Why doesn't it get enquiries?",
    excerpt:
      "Visits are not the problem, and neither is your design. Six reasons a site people actually visit still produces nothing — and which one to fix first.",
    date: "2026-06-16",
    readingMinutes: 7,
    tags: ["Conversion", "Websites", "Analytics"],
    image: "/blogs/traffic-but-no-enquiries.png",
    imageAlt:
      "A laptop showing a steeply rising visitor graph with a crowd of people streaming past it, next to a blank phone screen and an empty inbox tray.",
    body: [
      {
        type: "p",
        text: "The most common brief we receive is some version of this: the website looks good, Analytics says people are visiting, and the phone doesn't ring. The instinct is always to blame the design and rebuild. Usually the design isn't the problem.",
      },
      {
        type: "p",
        text: "Here are the six causes we find, roughly in the order they turn out to be responsible.",
      },
      { type: "h2", text: "1. The traffic was never going to buy" },
      {
        type: "p",
        text: "Traffic and intent are different things. A thousand visitors reading a blog post about GST filing dates will produce no enquiries for an accounting firm, and that is not a failure of the website.",
      },
      {
        type: "p",
        text: "Before changing anything, split your traffic by landing page and by query. If the pages people arrive on are informational and the pages that describe what you sell get almost nothing, you don't have a conversion problem. You have a visibility problem on the pages that matter.",
      },
      { type: "h2", text: "2. The page answers a question nobody asked" },
      {
        type: "p",
        text: "Most business sites open by describing the business. The visitor did not arrive wanting to know about you; they arrived with a problem and roughly fifteen seconds of patience.",
      },
      {
        type: "p",
        text: "A page converts when the first thing on it names the visitor's situation back to them clearly enough that they recognise it. Everything else — history, values, the team — is support that goes further down or nowhere.",
      },
      { type: "h2", text: "3. You're asking for commitment too early" },
      {
        type: "p",
        text: "\"Book a consultation\" is a large ask from someone who has read four lines. It carries an implied sales call, a calendar and an obligation.",
      },
      {
        type: "p",
        text: "The fix is not a louder button. It's a smaller step: a question answered on WhatsApp, a price range, a one-page example of the work. Make the next step cost less than the decision it leads to.",
      },
      { type: "h2", text: "4. There's proof of claims, but no proof of results" },
      {
        type: "p",
        text: "Every competitor claims quality, experience and customer focus. None of it is evidence, and visitors have learned to skip it.",
      },
      {
        type: "p",
        text: "What does work is specific: a named client, the situation they were in, what changed. Photographs of real work rather than stock. A review that mentions the actual problem. If you can't say a number honestly, describe the change instead — a vague claim you can defend beats a precise one you invented.",
      },
      { type: "h2", text: "5. The form is the bottleneck" },
      {
        type: "p",
        text: "A nine-field form with a mandatory company name and a dropdown of budget ranges is a filter, and it filters out the people who were only mildly interested — which is most of them.",
      },
      {
        type: "p",
        text: "Ask for the minimum you need to reply: who you're speaking to, how to reach them, what's wrong. And put the channel your customers actually use next to it. In most of India that's WhatsApp, and a form-only site is quietly turning away the people who would have messaged.",
      },
      { type: "h2", text: "6. Nothing is measured, so nothing improves" },
      {
        type: "p",
        text: "If you cannot see how many people reached the contact section, how many started the form, and how many finished it, then every change you make is a guess with a nice story attached.",
      },
      {
        type: "p",
        text: "Track the steps, not just the sessions. The drop-off tells you which of the five problems above you actually have, and stops you rebuilding a site that was working.",
      },
      { type: "h2", text: "What to change first" },
      {
        type: "p",
        text: "In order, and stopping as soon as the enquiries start:",
      },
      {
        type: "list",
        items: [
          "Check whether the traffic has buying intent at all",
          "Rewrite the first screen so it names the visitor's problem",
          "Add one lower-commitment way to make contact, WhatsApp included",
          "Replace one claim with one piece of evidence",
          "Cut the form to three fields",
          "Instrument all of it before you touch anything else",
        ],
      },
      {
        type: "p",
        text: "A rebuild is occasionally the right answer. It is almost never the first one, and it's the most expensive way to find out you had a messaging problem.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Everything except the one being read, newest first. */
export function otherPosts(slug: string, limit = 2): Post[] {
  return posts.filter((post) => post.slug !== slug).slice(0, limit);
}

/** Heading text → anchor id, so the contents list can link into the piece. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** The h2s of a post, in order — the contents list reads this. */
export function tableOfContents(post: Post) {
  return post.body.flatMap((block) =>
    block.type === "h2" ? [{ id: headingId(block.text), text: block.text }] : [],
  );
}

/** "11 August 2026" — one format, used everywhere a date appears. */
export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
