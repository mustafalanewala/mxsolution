import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects & Portfolio | Mx Solution",
  description:
    "See the websites, e-commerce stores, and mobile apps we've built for clients across India. Explore Mx Solution's full portfolio of real-world projects.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects & Portfolio | Mx Solution",
    description:
      "See the websites, e-commerce stores, and mobile apps we've built for clients across India. Explore Mx Solution's complete portfolio.",
    url: "https://www.mxsolution.in/projects",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.mxsolution.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mx Solution Portfolio - Web Design & Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects & Portfolio | Mx Solution",
    description:
      "Real websites, e-commerce stores & mobile apps built by Mx Solution for clients across India.",
    images: ["https://www.mxsolution.in/og-image.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
