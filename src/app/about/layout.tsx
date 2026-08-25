import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us — how we think and how we work",
  description:
    "Mx Solution is a technology partner based in Dohad, Gujarat, working with businesses across India. What we believe, the five steps every engagement runs through, and how to reach us.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About us | Mx Solution",
    description:
      "A technology partner for businesses that need something more specific than an off-the-shelf answer. How we think, and how the work actually runs.",
    url: "https://mxsolution.in/about",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About us | Mx Solution",
    description:
      "How we think, and how the work actually runs. Based in Dohad, working across India.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
