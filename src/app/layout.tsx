import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";

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
    "geo.region": "IN",
    "geo.placename": "Gujarat, India",
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
      "Transform ideas into scalable digital systems. We blend strategy, design, and full-stack engineering to build high-performance web, mobile, e-commerce, and AI solutions.",
    url: "https://www.mxsolution.in",
    siteName: "Mx Solution",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
      "Transform ideas into scalable digital systems. We blend strategy, design, and full-stack engineering to build high-performance web, mobile, e-commerce, and AI solutions.",
    creator: "@mxsolution",
    images: ["/og-image.png"],
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
  logo: "https://www.mxsolution.in/logo.png",
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  slogan: "Ideas. Multiplied. Results. Maximized.",
  foundingDate: "2025",
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
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "E-commerce Development",
    "AI Integration",
    "UI/UX Design",
    "Digital Strategy",
  ],
  areaServed: "Worldwide",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  description:
    "Mx Solution transforms ideas into high-performance digital systems. We blend strategy, design, and full-stack engineering to build scalable web, mobile, e-commerce, and AI solutions that multiply impact, optimize growth, and deliver real business results.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.3094",
    longitude: "72.1362",
  },
  areaServed: "Gujarat, India",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "E-commerce Development",
    "AI Integration",
    "UI/UX Design",
    "Digital Strategy",
  ],
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
  },
  inLanguage: "en-US",
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
      </head>
      <body className={`${inter.variable} antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
          <Analytics />
        </TooltipProvider>
      </body>
    </html>
  );
}
