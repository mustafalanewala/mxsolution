"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type WebGLFluidEnhanced from "webgl-fluid-enhanced";

/**
 * FluidInk — real-time WebGL fluid simulation behind the hero.
 * White ink on black in dark mode; blue ink on paper in light mode.
 * Pointer devices only; touch gets <HeroBackdrop>.
 */
function FluidInk() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(
      window.matchMedia("(pointer: fine) and (hover: hover)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (!supported) return;
    const container = containerRef.current;
    if (!container) return;

    let sim: WebGLFluidEnhanced | null = null;
    let disposed = false;
    let observer: MutationObserver | null = null;
    let io: IntersectionObserver | null = null;
    let stopped = false;

    // Dye must stay bright (additive rendering); light mode feeds gold,
    // which the CSS invert flips into the brand blue.
    const paletteFor = (dark: boolean) =>
      dark
        ? ["#ffffff", "#d9d9d9", "#a6a6a6"]
        : ["#c59a25", "#d9b34c", "#b9861e"];

    import("webgl-fluid-enhanced").then(({ default: WebGLFluidEnhanced }) => {
      if (disposed || !containerRef.current) return;

      const boot = (splats: number) => {
        if (disposed || !containerRef.current) return;
        const simulation = new WebGLFluidEnhanced(containerRef.current);
        sim = simulation;

        const isDark = document.documentElement.classList.contains("dark");
        simulation.setConfig({
          transparent: true,
          hover: true,
          colorful: false,
          colorPalette: paletteFor(isDark),
          bloom: true,
          bloomIntensity: 0.4,
          bloomThreshold: 0.5,
          sunrays: false,
          simResolution: 128,
          dyeResolution: 512,
          densityDissipation: 2.2,
          velocityDissipation: 1.6,
          curl: 26,
          splatRadius: 0.22,
          splatForce: 5200,
          pressureIterations: 18,
          shading: true,
          brightness: 0.55,
        });
        simulation.start();

        if (splats > 0) {
          setTimeout(() => {
            if (sim === simulation && !disposed)
              simulation.multipleSplats(splats);
          }, 500);
        }
      };

      boot(4);

      // Rebuild only when the dark class actually flips — Lenis mutates
      // <html> classes on every scroll and must not reset the sim.
      let wasDark = document.documentElement.classList.contains("dark");
      observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark === wasDark) return;
        wasDark = isDark;

        sim?.stop();
        if (containerRef.current) containerRef.current.innerHTML = "";
        stopped = false;
        boot(2);
        io?.unobserve(container);
        io?.observe(container);
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // Hard-stop the sim off-screen (its "pause" still renders every frame).
      // start() reuses the same WebGL context. Act on the LAST entry — fast
      // scrolls batch several into one callback.
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[entries.length - 1];
          const shouldStop = !entry.isIntersecting;
          if (shouldStop !== stopped) {
            stopped = shouldStop;
            if (stopped) sim?.stop();
            else sim?.start();
          }
        },
        { threshold: 0 },
      );
      io.observe(container);
    });

    return () => {
      disposed = true;
      observer?.disconnect();
      io?.disconnect();
      sim?.stop();
      if (container) container.innerHTML = "";
    };
  }, [supported]);

  if (!supported) return null;

  return (
    // h-svh keeps the canvas size stable on mobile scroll; the library
    // mutates its own container, so it gets an inner div.
    <div
      className="absolute inset-x-0 top-0 h-svh z-0 overflow-hidden invert dark:invert-0"
      aria-hidden
    >
      <div
        ref={containerRef}
        className="w-full h-full [&_canvas]:w-full [&_canvas]:h-full"
      />
    </div>
  );
}

// Static wash under the hero — painted once, never animated.
function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-svh z-0 [background:radial-gradient(65%_45%_at_50%_12%,hsl(var(--primary)/0.16),transparent_72%),radial-gradient(50%_40%_at_88%_82%,hsl(var(--foreground)/0.07),transparent_72%)]"
    />
  );
}

const lineReveal = {
  initial: { y: "115%" },
  animate: { y: 0 },
};

export function HeroSection() {
  const lineTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden bg-background text-foreground">
      <HeroBackdrop />
      <FluidInk />

      {/* Single real heading — the responsive visual versions below are
          presentational, so crawlers/readers see exactly one h1 */}
      <h1 className="sr-only">
        We multiply ideas into results — Mx Solution, digital systems studio
      </h1>

      {/* ── Mobile composition: eyebrow top, edge-to-edge type, grounded CTAs ── */}
      <div className="relative z-10 flex-1 flex flex-col md:hidden container mx-auto px-4 pt-24 pb-8 pointer-events-none">
        {/* Giant stacked type — fills the width, one word per breath */}
        <div
          aria-hidden
          className="my-auto font-display font-black uppercase text-hero-stack [font-stretch:118%]"
        >
          <span className="block overflow-hidden">
            <motion.span
              {...lineReveal}
              transition={{ ...lineTransition, delay: 0.15 }}
              className="block"
            >
              We
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              {...lineReveal}
              transition={{ ...lineTransition, delay: 0.25 }}
              className="block"
            >
              multiply
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              {...lineReveal}
              transition={{ ...lineTransition, delay: 0.35 }}
              className="block"
            >
              <span className="headline-accent text-[1.06em]">ideas</span>{" "}
              <span className="text-muted-foreground text-[0.55em] tracking-normal">
                into
              </span>
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span
              {...lineReveal}
              transition={{ ...lineTransition, delay: 0.45 }}
              className="block text-outline"
            >
              results
            </motion.span>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...lineTransition, delay: 0.6 }}
          className="max-w-[22rem] text-body text-muted-foreground mb-6"
        >
          Strategy, design, and full-stack engineering for web, mobile,
          commerce, and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...lineTransition, delay: 0.75 }}
          className="flex flex-col gap-3 pointer-events-auto"
        >
          <Button size="lg" className="w-full justify-center" asChild>
            <a href="#contact">
              Start a project
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full justify-center"
            asChild
          >
            <a href="#portfolio">
              See the work
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* ── Desktop composition: intro top-right, type bottom-left, CTAs on baseline.
             Only CTAs catch the pointer so ink can be stirred through the type ── */}
      <div className="relative z-10 flex-1 hidden md:flex flex-col container mx-auto px-8 max-w-screen-2xl pt-32 pb-10 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...lineTransition, delay: 0.55 }}
          className="self-end max-w-sm text-body text-muted-foreground text-right"
        >
          Strategy, design, and full-stack engineering for web, mobile,
          commerce, and AI — every product built as a system, not a feature.
        </motion.p>

        <div className="mt-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
          <div
            aria-hidden
            className="font-display font-black uppercase text-hero [font-stretch:118%]"
          >
            <span className="block overflow-hidden pb-1">
              <motion.span
                {...lineReveal}
                transition={{ ...lineTransition, delay: 0.15 }}
                className="block"
              >
                We multiply
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                {...lineReveal}
                transition={{ ...lineTransition, delay: 0.27 }}
                className="block"
              >
                <span className="headline-accent pr-[0.06em] text-[1.05em]">
                  ideas
                </span>{" "}
                <span className="text-muted-foreground">into</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                {...lineReveal}
                transition={{ ...lineTransition, delay: 0.39 }}
                className="block"
              >
                results
              </motion.span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...lineTransition, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 shrink-0 lg:pb-3 pointer-events-auto"
          >
            <Button size="lg" className="px-8" asChild>
              <a href="#contact">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="#portfolio">
                See the work
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
