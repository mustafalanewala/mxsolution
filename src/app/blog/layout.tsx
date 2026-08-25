import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — notes on the problems behind the builds",
  description:
    "Writing from Mx Solution on search visibility, conversion, automation and custom software — what actually moves a business, and what only looks like it does.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Mx Solution",
    description:
      "Notes on search visibility, conversion, automation and custom software — what actually moves a business.",
    url: "https://mxsolution.in/blog",
    siteName: "Mx Solution",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Mx Solution",
    description:
      "Notes on search visibility, conversion, automation and custom software.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
