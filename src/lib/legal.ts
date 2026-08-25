/**
 * The legal pages, as data.
 *
 * Written against what this site actually does, not against a template:
 * the contact form has no backend and hands off to WhatsApp, analytics is
 * cookieless, and the fonts are self-hosted at build time rather than
 * fetched from Google. Each of those is a real claim, so each is stated
 * plainly rather than hedged into meaninglessness.
 *
 * Three things below are business decisions rather than facts, and are
 * marked with TODO — confirm them before this goes live, and have the
 * whole thing read by someone qualified. This file is not legal advice.
 */

import { site } from "@/lib/content";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  /** Stable anchor — written by hand so it survives a heading rewrite */
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  /** Sits under the title, and doubles as the meta description */
  summary: string;
  /** ISO date of the last substantive change */
  updated: string;
  sections: LegalSection[];
};

/* ── Privacy ──────────────────────────────────────────────────────── */

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy policy",
  summary:
    "What we collect when you use this site, what happens to it, and what we don't do. Short, because the site does very little with your data.",
  updated: "2026-08-25",
  sections: [
    {
      id: "short-version",
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "This website has no accounts, no logins and no database of visitors. The contact form does not send anything to a server of ours. We do not sell data, we do not run advertising trackers, and we do not build profiles of the people who read this site.",
        },
        {
          type: "p",
          text: "The rest of this page explains that in enough detail to be checkable.",
        },
      ],
    },
    {
      id: "who-we-are",
      heading: "Who we are",
      blocks: [
        {
          type: "p",
          // TODO: replace with the registered entity name and type once
          // confirmed — "Mx Solution" is the trading name.
          text: `${site.name} is a technology studio based in ${site.locality}, ${site.region}, ${site.country}, operating the website at ${site.url}. For anything on this page, message us on WhatsApp or call ${site.phoneDisplay}.`,
        },
      ],
    },
    {
      id: "what-you-send-us",
      heading: "Information you send us",
      blocks: [
        {
          type: "p",
          text: "The contact form on this site has no backend. When you press send, it opens WhatsApp with your message already written out — your name, your phone or email, and what you told us isn't working. Nothing leaves your device until you press send inside WhatsApp, and nothing is stored by this website at any point.",
        },
        {
          type: "p",
          text: "That means the message reaches us the same way any WhatsApp message does, and is handled by WhatsApp under Meta's own privacy terms. The same applies if you message us on WhatsApp directly, or call the number listed on the site.",
        },
        {
          type: "p",
          text: "If you book a call, that booking is handled by Cal.com. You give them your name, email address and a time; they pass it to us and add the meeting to both calendars. Their privacy terms govern what they do with it.",
        },
        {
          type: "p",
          text: "Once an enquiry reaches us, we keep it for as long as we are talking to you and for a reasonable period afterwards, so that we can pick up a conversation you restart. Ask us to delete it and we will.",
        },
      ],
    },
    {
      id: "collected-automatically",
      heading: "Information collected automatically",
      blocks: [
        {
          type: "p",
          text: "We use Vercel Analytics to understand which pages get read. It is cookieless: it records aggregate page views along with coarse details such as the referring site, the country, and the browser and device type. It does not set a cookie, does not follow you to other websites, and does not identify you.",
        },
        {
          type: "p",
          text: "Our hosting provider also keeps standard server logs, including IP addresses, for security and for diagnosing faults. These are kept short-term and are not used to identify visitors.",
        },
      ],
    },
    {
      id: "what-we-dont-do",
      heading: "What we don't do",
      blocks: [
        {
          type: "list",
          items: [
            "No advertising or retargeting pixels of any kind",
            "No cookies set by this site for tracking or advertising",
            "No selling, renting or sharing of personal data with data brokers",
            "No newsletter sign-up, and no mailing list you can end up on by accident",
            "No calls to Google for fonts — the typefaces are downloaded at build time and served from our own domain, so reading this page does not tell Google you were here",
          ],
        },
      ],
    },
    {
      id: "why",
      heading: "Why we use what we collect",
      blocks: [
        {
          type: "list",
          items: [
            "To answer your enquiry, quote for work, and carry out an engagement you have asked us for",
            "To keep the site working, fast and secure",
            "To understand in aggregate which pages are useful, so we can write better ones",
            "To meet a legal or tax obligation where one applies to us",
          ],
        },
        {
          type: "p",
          text: "We do not use your information for anything else, and we do not make automated decisions about you.",
        },
      ],
    },
    {
      id: "processors",
      heading: "Who else is involved",
      blocks: [
        {
          type: "p",
          text: "A small number of service providers necessarily handle data as part of running the site:",
        },
        {
          type: "list",
          items: [
            "Vercel — hosting, delivery and cookieless analytics",
            "Meta / WhatsApp — every message you send us through WhatsApp",
            "Cal.com — call bookings made through the booking link",
          ],
        },
        {
          type: "p",
          text: "Each operates under its own privacy terms. Some of them process data outside India, which is a normal consequence of using internet infrastructure.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Under the Digital Personal Data Protection Act, 2023, you can ask us what personal data of yours we hold, ask us to correct it if it is wrong, ask us to erase it, and raise a grievance if you are not satisfied with how we have handled it.",
        },
        {
          type: "p",
          text: `Message us on WhatsApp or call ${site.phoneDisplay} and we will respond within a reasonable period. There is no charge for asking.`,
        },
      ],
    },
    {
      id: "children",
      heading: "Children",
      blocks: [
        {
          type: "p",
          text: "This site sells business services and is not directed at children. We do not knowingly collect personal data from anyone under 18.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "If the site changes in a way that changes this policy — a form that actually stores something, a new analytics tool — we will update this page and the date at the top of it. We will not quietly widen what we do and leave the old text standing.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact and grievances",
      blocks: [
        {
          type: "p",
          // TODO: name a grievance officer here if you want to follow the
          // SPDI Rules to the letter — a named person, not just an inbox.
          text: `Questions, requests and complaints about privacy: message us on WhatsApp, call ${site.phoneDisplay}, or write to us at ${site.locality}, ${site.region}, ${site.country}.`,
        },
      ],
    },
  ],
};

/* ── Terms ────────────────────────────────────────────────────────── */

export const termsOfUse: LegalDoc = {
  slug: "terms",
  title: "Terms of use",
  summary:
    "The terms you agree to by using this website. They cover the site itself — the work we do for clients is governed by a separate written agreement.",
  updated: "2026-08-25",
  sections: [
    {
      id: "scope",
      heading: "What these terms cover",
      blocks: [
        {
          type: "p",
          text: `These terms apply to your use of ${site.url}. They do not govern any work we do for you. If we take on an engagement, that is covered by a separate written proposal and agreement, and where the two disagree, that agreement wins.`,
        },
        {
          type: "p",
          text: "By using the site you accept these terms. If you don't accept them, don't use the site.",
        },
      ],
    },
    {
      id: "using-the-site",
      heading: "Using the site",
      blocks: [
        {
          type: "p",
          text: "You may read, share and quote from this site freely, with attribution. You may not:",
        },
        {
          type: "list",
          items: [
            "Copy the site's design, code or written content to pass off as your own",
            "Scrape it at a rate that degrades it for anyone else",
            "Attempt to breach, probe or interfere with the site or its infrastructure",
            "Use the contact channels to send bulk, automated or unsolicited commercial messages",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: `The design, code, illustrations, wordmark and written content of this site belong to ${site.name} unless stated otherwise.`,
        },
        {
          type: "p",
          text: "Client work shown in the portfolio remains the property of those clients, including their names, logos and brand assets. It appears here as a record of work carried out, not as a claim over their marks.",
        },
      ],
    },
    {
      id: "enquiries",
      heading: "Enquiries, quotes and pricing",
      blocks: [
        {
          type: "p",
          text: "Nothing on this site is an offer capable of acceptance. Sending an enquiry, booking a call or discussing a project does not create a contract, and neither does a verbal or written estimate given before scope is agreed.",
        },
        {
          type: "p",
          text: "Work begins when a written scope and quote have been agreed by both sides. Timeframes mentioned anywhere on this site — including on the FAQ — are typical ranges, not commitments for any particular project.",
        },
      ],
    },
    {
      id: "no-advice",
      heading: "The writing here is general information",
      blocks: [
        {
          type: "p",
          text: "Articles on this site describe how we approach problems and what tends to work. They are not professional, legal, financial or technical advice for your specific situation, and third-party platforms, pricing and rules change without warning. Check anything that matters against the source before you act on it.",
        },
      ],
    },
    {
      id: "third-party",
      heading: "Links to other sites",
      blocks: [
        {
          type: "p",
          text: "We link to client websites, booking and messaging tools, and occasionally to other people's writing. We don't control those sites and aren't responsible for their content, their availability or their handling of your data.",
        },
      ],
    },
    {
      id: "availability",
      heading: "Availability",
      blocks: [
        {
          type: "p",
          text: "We keep this site up and fast, but we don't promise it will be available without interruption or free of errors. We may change, move or remove any part of it without notice.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Liability",
      blocks: [
        {
          type: "p",
          text: "To the extent the law allows, we are not liable for any loss arising from your use of this site or from reliance on anything published on it. Nothing here limits liability that cannot legally be limited.",
        },
      ],
    },
    {
      id: "law",
      heading: "Governing law",
      blocks: [
        {
          type: "p",
          // TODO: confirm the jurisdiction you want named here.
          text: `These terms are governed by the laws of ${site.country}, and the courts at ${site.locality}, ${site.region} have exclusive jurisdiction over any dispute arising from them.`,
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may update these terms. The date at the top of the page tells you when they last changed, and continuing to use the site after that means you accept the new version.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: `Anything about these terms: call ${site.phoneDisplay} or message us on WhatsApp.`,
        },
      ],
    },
  ],
};

/** "25 August 2026" — matches the format the blog uses. */
export function formatLegalDate(date: string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
