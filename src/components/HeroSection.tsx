"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const lineTransition = { duration: 0.9, ease: [0.33, 1, 0.68, 1] as const };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center pt-10 overflow-hidden bg-black text-white selection:bg-white selection:text-black"
    >
      {/* Animated gradient mesh backdrop with subtle parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <div className="gradient-mesh">
          <span />
        </div>
      </motion.div>

      {/* Parallax Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 md:px-8 max-w-screen-2xl py-20 md:py-32"
      >
        <div className="max-w-5xl">
          <div>
            <h1 className="font-display font-black text-[clamp(2.8rem,10vw,6.25rem)] md:text-[clamp(3rem,8vw,6.25rem)] leading-[0.88] tracking-tighter uppercase max-w-5xl">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...lineTransition, delay: 0.15 }}
                  className="block md:whitespace-nowrap"
                >
                  We Multiply Ideas
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...lineTransition, delay: 0.28 }}
                  className="block whitespace-nowrap"
                >
                  Into Maximum
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...lineTransition, delay: 0.41 }}
                  className="block text-gradient whitespace-nowrap"
                >
                  Results
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              We help brands transform ideas into scalable digital systems
              designed for maximum performance and real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-start md:items-center gap-4"
            >
              <Button variant="glow" size="xl" className="w-fit shrink-0 px-6 md:px-10" asChild>
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="w-fit shrink-0 px-6 md:px-10 border-primary text-white hover:bg-primary/10 hover:border-primary" asChild>
                <a href="#portfolio">View Work</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
