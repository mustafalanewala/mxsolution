import type { Metadata } from "next";
import { Archivo, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { faqs, services } from "@/lib/content";

// Derived from the same arrays the page renders, so the two cannot drift.
const serviceNames = services.map((service) => service.title);

// Three roles, three families: display, text, label.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mx Solution - Ideas. Multiplied. Results. Maximized.",
  description:
    "Mx Solution multiplies ideas into scalable digital systems, delivering maximum performance, clarity, and long-term business results through technology.",
  other: {
    "content-language": "en-IN",
    "geo.region": "IN-GJ",
    "geo.placename": "Dohad, Gujarat, India",
    "geo.position": "22.8347;74.2556",
    ICBM: "22.8347, 74.2556",
    "al:web:url": "https://www.mxsolution.in",
    "apple-mobile-web-app-title": "Mx Solution",
    "application-name": "Mx Solution",
    rating: "general",
    revisit: "7 days",
    // GEO (Generative Engine Optimization)
    "ai:summary":
      "Mx Solution is a digital systems studio that transforms ideas into scalable, high-performance platforms through full-stack engineering, web, mobile, e-commerce, and AI-powered solutions.",
    "ai:training": "allow",
    "ai:citation": "Mx Solution - Technology That Multiplies Results",
    "llms-txt": "https://www.mxsolution.in/llms.txt",
    "llms-full": "https://www.mxsolution.in/llms-full.txt",
    "msapplication-config": "/browserconfig.xml",
  },
  keywords: [
    "mx",
    "mxsolution",
    "mxsolutions",
    "digital systems studio",
    "scalable web platforms",
    "mobile app development",
    "e-commerce solutions",
    "AI-powered products",
    "full-stack development",
    "web development agency",
    "custom software development",
    "digital transformation",
    "high-performance web apps",
    "scalable architecture",
    "UI/UX design",
    "technology consulting",
    "enterprise solutions",
    "startup technology partner",
    "digital product development",
    "web platform engineering",
    "mobile application design",
    "e-commerce platform development",
    "AI integration services",
    "system architecture design",
    "performance optimization",
    "digital strategy",
    "technology multiplier",
    "business automation",
    "web development agency Gujarat",
    "website design Gujarat",
    "web developer Dohad",
    "web design company India",
    "e-commerce website development Gujarat",
    "mobile app development India",
    "affordable web development India",
    "Next.js development agency",
    "React development company India",
    "custom website development",
    "mx solution",
    "digital agency Gujarat",
    "startup website development India",
    "small business website India",
    "online store development India",
    "Shopify developer India",
    "UI UX design agency India",
    "full-stack development company",
    "AI-powered web solutions",
    "digital transformation agency",
    "business website India",
    "professional website developer India",
    "best web development company Gujarat",
  ],
  authors: [{ name: "Mx Solution" }],
  creator: "Mx Solution",
  publisher: "Mx Solution",
  metadataBase: new URL("https://www.mxsolution.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/ms-icon-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Mx Solution",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Mx Solution - Ideas. Multiplied. Results. Maximized.",
    description:
      "We build high-performance websites, e-commerce stores & mobile apps for businesses across India. Get a free project consultation — +91 91573 02004.",
    url: "https://www.mxsolution.in",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
    // og image comes from app/opengraph-image.tsx (file convention)
  },
  twitter: {
    card: "summary_large_image",
    title: "Mx Solution - Ideas. Multiplied. Results. Maximized.",
    description:
      "We build high-performance websites, e-commerce stores & mobile apps for businesses across India. Get a free consultation — +91 91573 02004.",
    creator: "@mxsolution",
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

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.mxsolution.in/android-icon-192x192.png",
    width: 192,
    height: 192,
  },
  image: "https://www.mxsolution.in/opengraph-image",
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  slogan: "Ideas. Multiplied. Results. Maximized.",
  foundingDate: "2025",
  email: "info@mxsolution.in",
  telephone: "+919157302004",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dohad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919157302004",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      email: "info@mxsolution.in",
      contactType: "customer support",
      areaServed: "Worldwide",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/mxsolution53",
    "https://instagram.com/mxsolution.in",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  telephone: "+919157302004",
  email: "info@mxsolution.in",
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  serviceType: serviceNames,
  areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mxsolution.in/#business",
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  image: "https://www.mxsolution.in/opengraph-image",
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dohad",
    addressRegion: "Gujarat",
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
  sameAs: [
    "https://www.linkedin.com/company/mxsolution53",
    "https://instagram.com/mxsolution.in",
  ],
  // No aggregateRating: Google requires it to be backed by reviews actually
  // shown on the page, and self-serving ratings breach their policy.
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.mxsolution.in/#website",
  url: "https://www.mxsolution.in",
  name: "Mx Solution",
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  publisher: {
    "@type": "Organization",
    name: "Mx Solution",
    "@id": "https://www.mxsolution.in/#organization",
  },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.mxsolution.in/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="cho4mR2gXwMqTai3zKCa0VYleMWURbjrdtWGQ7arvoM"
        />
        {/* Apply saved / system theme before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t)t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <TooltipProvider>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to main content
          </a>

          <ErrorBoundary>{children}</ErrorBoundary>
          <WhatsAppButton />
          <Toaster />
          <Sonner />
          <Analytics />
        </TooltipProvider>
      </body>
    </html>
  );
}
