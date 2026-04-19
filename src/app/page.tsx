"use client";

import dynamic from "next/dynamic";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ScrollProgress } from "@/components/ScrollProgress";

// Dynamically import heavy components for better performance
const AboutSection = dynamic(() =>
  import("@/components/AboutSection").then((mod) => mod.AboutSection),
);
const ServicesSection = dynamic(() =>
  import("@/components/ServicesSection").then((mod) => mod.ServicesSection),
);
const PortfolioSection = dynamic(() =>
  import("@/components/PortfolioSection").then((mod) => mod.PortfolioSection),
);
const ProcessSection = dynamic(() =>
  import("@/components/ProcessSection").then((mod) => mod.ProcessSection),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection").then(
    (mod) => mod.TestimonialsSection,
  ),
);
const FAQSection = dynamic(
  () => import("@/components/FAQSection").then((mod) => mod.FAQSection),
  { ssr: false },
);
const ContactSection = dynamic(() =>
  import("@/components/ContactSection").then((mod) => mod.ContactSection),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer),
);

export default function Home() {
  return (
    <SmoothScroll>
      <main
        id="main-content"
        className="min-h-screen bg-black text-white overflow-x-hidden"
      >
        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Animated Noise Overlay */}
        <div className="noise-overlay" />

        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
