"use client";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <main className="min-h-screen bg-background overflow-x-hidden">
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
    </>
  );
}
