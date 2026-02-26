import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mx Solution - Ideas. Multiplied. Results. Maximized.",
  description:
    "Mx Solution multiplies ideas into scalable digital systems, delivering maximum performance, clarity, and long-term business results through technology.",
  other: {
    "content-language": "en-IN",
    "geo.region": "IN-GJ",
    "geo.placename": "Dohad, Gujarat, India",
    "geo.position": "22.3094;72.1362",
    ICBM: "22.3094, 72.1362",
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
    "msapplication-config": "/favicons/browserconfig.xml",
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
      { url: "/favicons/favicon.ico" },
      {
        url: "/favicons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/ms-icon-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: [
      {
        url: "/favicons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicons/manifest.json",
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
    images: [
      {
        url: "https://www.mxsolution.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mx Solution - Technology That Multiplies Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mx Solution - Ideas. Multiplied. Results. Maximized.",
    description:
      "We build high-performance websites, e-commerce stores & mobile apps for businesses across India. Get a free consultation — +91 91573 02004.",
    creator: "@mxsolution",
    images: ["https://www.mxsolution.in/og-image.png"],
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
    url: "https://www.mxsolution.in/favicons/android-icon-192x192.png",
    width: 192,
    height: 192,
  },
  image: "https://www.mxsolution.in/og-image.png",
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
  serviceType: [
    "Web Development",
    "Website Design",
    "Mobile App Development",
    "E-commerce Development",
    "AI Integration",
    "UI/UX Design",
    "Digital Strategy",
  ],
  areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scalable Web Platforms",
          description:
            "Custom web applications built with modern frameworks, optimized for performance and scalability",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Applications",
          description:
            "Native and cross-platform mobile apps designed for maximum user engagement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Systems",
          description:
            "Complete e-commerce solutions with seamless payment integration and inventory management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Products",
          description:
            "Intelligent systems leveraging machine learning and AI to automate and optimize business processes",
        },
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mxsolution.in/#business",
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  image: "https://www.mxsolution.in/og-image.png",
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
    latitude: "22.3094",
    longitude: "72.1362",
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
  serviceType: [
    "Web Development",
    "Website Design",
    "Mobile App Development",
    "E-commerce Development",
    "AI Integration",
    "UI/UX Design",
    "Digital Strategy",
  ],
  sameAs: [
    "https://www.linkedin.com/company/mxsolution53",
    "https://instagram.com/mxsolution.in",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "27",
    bestRating: "5",
    worstRating: "1",
  },
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Mx Solution offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mx Solution offers web development, e-commerce platforms, mobile app development, UI/UX design, branding, and AI integration services. Every project is custom-built to match your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website pricing depends on scope and features. A professional business website starts from affordable rates. Contact us at +91 91573 02004 for a free custom quote tailored to your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical business website takes 2–4 weeks. More complex e-commerce platforms or mobile apps may take 6–12 weeks. We provide a detailed timeline after the free discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide website maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing support and maintenance packages including regular updates, security patches, performance monitoring, and 24/7 technical assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Can Mx Solution build an e-commerce website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We build fully custom e-commerce platforms with product management, payment integration, order tracking, and inventory systems tailored for Indian and international markets.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="cho4mR2gXwMqTai3zKCa0VYleMWURbjrdtWGQ7arvoM"
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
      <body className={`${inter.variable} antialiased`}>
        <TooltipProvider>
          {children}
          <WhatsAppButton />
          <Toaster />
          <Sonner />
          <Analytics />
        </TooltipProvider>
      </body>
    </html>
  );
}
