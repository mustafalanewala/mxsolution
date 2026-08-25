import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — everything we build, and what it fixes",
  description:
    "Websites, e-commerce, custom software, CRM and ERP systems, internal tools, business automation, API and WhatsApp integrations, SEO, customisation of what you already have, plus hosting and support. Twelve services from Mx Solution.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions — everything we build | Mx Solution",
    description:
      "Websites, e-commerce, custom software, CRM and ERP, internal tools, automation, API and WhatsApp integrations, SEO, customisation, hosting and support.",
    url: "https://mxsolution.in/solutions",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions — everything we build | Mx Solution",
    description:
      "Websites, custom software, automation, integrations and the search work that makes any of it findable.",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
