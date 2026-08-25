"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { HeroScreens } from "@/components/site/HeroScreens";
import { EASE, Heading } from "@/components/site/primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="wrap">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ── Statement ── */}
          <div className="lg:col-span-7">
            <Heading
              as="h1"
              trigger="load"
              className="text-display"
              lines={["We solve business", "problems with", "technology."]}
              accent={2}
              accentHref="/contact"
              cta="hero_headline"
            />

            {/* Measure is set to break this across exactly two lines */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="mt-7 max-w-[42rem] text-lead text-muted-foreground"
            >
              Most agencies start with a stack. We start with what&apos;s
              costing you leads, hours or customers — then build only what fixes
              it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button variant="primary" size="lg" asChild>
                <a
                  href={site.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </a>
              </Button>
              <Button variant="default" size="lg" asChild>
                <a href="#work">See our work</a>
              </Button>
            </motion.div>
          </div>

          {/* ── What we build, shown ── */}
          <div className="lg:col-span-5">
            <HeroScreens className="mx-auto w-full max-w-md lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
