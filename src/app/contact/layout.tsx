import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's talk — tell us what's not working",
  description:
    "Tell Mx Solution what's costing you leads, hours or customers. We'll tell you what the real problem is and what it would take to fix — before anyone talks about a quote. WhatsApp, phone, or book a 15-minute call.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Let's talk | Mx Solution",
    description:
      "Tell us what's not working. We'll tell you what we think it actually is, and what it would take to fix — before anyone talks about a quote.",
    url: "https://mxsolution.in/contact",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's talk | Mx Solution",
    description:
      "Tell us what's not working. We'll tell you what it would take to fix.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
