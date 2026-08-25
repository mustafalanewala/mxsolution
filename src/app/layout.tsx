import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { faqs, services, site, solutions } from "@/lib/content";

// One superfamily, two optical cuts. `opsz` is what makes Inter behave as
// a display face at headline sizes — without the axis it stays the 14pt
// text drawing all the way up and large type looks slack.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

// Narrower cut, so body copy holds a comfortable measure.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

// Derived from the same arrays the pages render, so the two cannot drift.
// serviceType wants what a buyer would search for — "Custom software",
// not "Work smarter" — so it reads the concrete list, while the offer
// catalogue keeps the outcome framing underneath it.
const serviceNames = services.map((service) => service.title);

const description =
  "Mx Solution is a technology partner for businesses with a digital problem that has no off-the-shelf answer. We find what's actually holding the business back — leads, search visibility, manual processes, systems that don't fit — then build the solution that fixes it.";

export const metadata: Metadata = {
  title: {
    default: "Mx Solution — We solve business problems with technology",
    template: "%s | Mx Solution",
  },
  description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  keywords: [
    "mx solution",
    "mxsolution",
    "technology partner India",
    "custom software development",
    "business automation",
    "web development Gujarat",
    "e-commerce development India",
    "SEO agency India",
    "custom CRM development",
    "ERP solutions India",
    "lead generation websites",
    "conversion optimisation",
    "technical SEO services",
    "workflow automation",
    "internal tools development",
    "Next.js development agency",
    "digital transformation partner",
    "web developer Dohad",
    "software company Gujarat",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  other: {
    "content-language": "en-IN",
    "geo.region": "IN-GJ",
    "geo.placename": "Dohad, Gujarat, India",
    "geo.position": "22.8347;74.2556",
    ICBM: "22.8347, 74.2556",
    "application-name": site.name,
    "apple-mobile-web-app-title": site.name,
    "msapplication-config": "/browserconfig.xml",
    "ai:summary":
      "Mx Solution is a technology partner that identifies the underlying business problem before recommending a solution, then builds it — websites, e-commerce, custom software, automation and search visibility.",
    "llms-txt": `${site.url}/llms.txt`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  appleWebApp: { title: site.name, statusBarStyle: "default" },
  openGraph: {
    title: "Mx Solution — We solve business problems with technology",
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    // og image comes from app/opengraph-image.tsx (file convention)
  },
  twitter: {
    card: "summary_large_image",
    title: "Mx Solution — We solve business problems with technology",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── Structured data ──────────────────────────────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  description,
  slogan: site.tagline,
  foundingDate: "2025",
  telephone: site.phone,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/icon-512.png`,
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: "IN",
  },
  sameAs: [site.social.linkedin, site.social.instagram],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#service`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  description,
  serviceType: serviceNames,
  areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `${site.url}/solutions#${service.id}`,
      },
    })),
  },
  makesOffer: solutions.map((solution) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: solution.title,
      description: solution.detail,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  description,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: "389151",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.8347",
    longitude: "74.2556",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Gujarat" },
  ],
  serviceType: serviceNames,
  sameAs: [site.social.linkedin, site.social.instagram],
  // No aggregateRating: Google requires it to be backed by reviews shown
  // on the page, and self-serving ratings breach their policy.
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description,
  inLanguage: "en-IN",
  publisher: { "@id": `${site.url}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const schemas = [
  organizationSchema,
  serviceSchema,
  localBusinessSchema,
  websiteSchema,
  faqSchema,
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The font variables must land on :root. @theme declares
    // --font-display/--font-sans there, and a var() that resolves against a
    // property defined further down the tree computes to invalid — which
    // silently drops the whole page to the system UI font.
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="cho4mR2gXwMqTai3zKCa0VYleMWURbjrdtWGQ7arvoM"
        />
        <script
          type="application/ld+json"
          // One graph, one tag — fewer parses for the crawler.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to main content
        </a>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
