import type { Metadata } from "next";
import { privacyPolicy } from "@/lib/legal";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.summary,
  alternates: { canonical: "/privacy" },
  // Legal pages are for people who go looking for them, not for search.
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
