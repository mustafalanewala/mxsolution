import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — problem, solution, outcome",
  description:
    "Case studies and shipped work from Mx Solution: what the business problem was, what we changed, and what it did. Government portals, e-commerce platforms, custom systems and brand sites.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Work — problem, solution, outcome | Mx Solution",
    description:
      "What the business problem was, what we changed, and what it did. Case studies and shipped work from Mx Solution.",
    url: "https://mxsolution.in/projects",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — problem, solution, outcome | Mx Solution",
    description:
      "What the business problem was, what we changed, and what it did.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
