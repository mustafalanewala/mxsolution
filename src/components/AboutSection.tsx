"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading, Accent } from "@/components/SectionHeading";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(false);

  // Parallax on large screens only
  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setParallax(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Setup scroll-based parallax for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["-10%", "10%"] : ["0%", "0%"],
  );

  return (
    <section 
      id="about" 
      className="relative section bg-background text-foreground overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        {/* Massive Section Header */}
        <SectionHeading
          eyebrow="About the studio"
          size="text-display-xl whitespace-nowrap"
          lines={[
            <>The multiplier</>,
            <>
              <span className="text-muted-foreground">
                <Accent>mindset</Accent>
              </span>
            </>,
          ]}
          className="mb-14 md:mb-20"
        />

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left - Scrolling Content */}
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1 flex flex-col gap-12 pt-8">
            <AnimatedSection>
              <p className="text-display-sm leading-snug text-muted-foreground">
                Mx Solution was built on a simple belief: technology should do
                more than work — <span className="text-foreground font-medium">it should multiply impact.</span> We help brands
                transform ideas into scalable digital systems designed for
                maximum performance and real business results.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-display-sm leading-snug text-muted-foreground">
                We blend strategic thinking with full-stack execution across
                web, mobile, e-commerce, and AI —{" "}
                <span className="text-foreground font-medium">
                  every product treated as a system, not a feature.
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Work with us
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
            </AnimatedSection>
          </div>

          {/* Right - Sticky Image (Editorial Portrait) */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:sticky lg:top-32 lg:-mt-24">
            <div className="relative w-full md:w-[88%] md:ml-auto aspect-[3/4] md:aspect-[4/5] rounded-none overflow-hidden group">
              
              {/* Parallax Image */}
              <motion.div
                className="absolute inset-0 w-full h-[120%]"
                style={{ y: imageY }}
              >
                <Image
                  src="/founder&ceo.png"
                  alt="Mustafa Lanewala - Founder & CEO"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Minimalist Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Typography Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3 overflow-hidden">
                <span className="text-label font-mono uppercase text-white bg-black/45 md:bg-black/20 md:backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
                  Founder & CEO
                </span>
              </div>

              {/* Social Links - Slide in from right on hover */}
              <div className="absolute bottom-6 right-6 hidden lg:flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <SocialButton href="https://instagram.com/mustafa.lanewala" icon={<Instagram className="w-4 h-4" />} />
                <SocialButton href="https://linkedin.com/in/mustafa-lanewala" icon={<Linkedin className="w-4 h-4" />} />
                <SocialButton href="https://github.com/mustafalanewala" icon={<Github className="w-4 h-4" />} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper component for ultra-minimalist social buttons
function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
    >
      {icon}
    </a>
  );
}