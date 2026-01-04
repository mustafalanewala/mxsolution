"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/TextReveal";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center pt-10 overflow-hidden"
    >
      {/* Parallax Content */}
      <motion.div
        style={{ y, opacity }}
        className="container-wide px-5 md:px-8 py-20 md:py-32"
      >
        <div className="max-w-5xl">
          {/* Overline
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Mx Solution
            </span>
          </motion.div> */}

          {/* Main Heading with Text Reveal */}
          <h1 className="font-display font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight mb-8">
            <TextReveal delay={0.3}>We Multiply</TextReveal>
            <br />
            <span className="text-muted-foreground">
              <TextReveal delay={0.4}>Ideas Into</TextReveal>
            </span>
            <br />
            <TextReveal delay={0.5} className="text-gradient">
              Maximum Results
            </TextReveal>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            We help brands transform ideas into scalable digital systems
            designed for maximum performance and real business results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button variant="glow" size="xl" asChild>
              <a href="#contact">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#portfolio">View Work</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Parallax Background Accent */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
        className="absolute top-1/3 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
      />
    </section>
  );
}
