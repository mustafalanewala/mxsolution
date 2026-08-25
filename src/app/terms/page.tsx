import type { Metadata } from "next";
import { termsOfUse } from "@/lib/legal";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: termsOfUse.title,
  description: termsOfUse.summary,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalPage doc={termsOfUse} />;
}
