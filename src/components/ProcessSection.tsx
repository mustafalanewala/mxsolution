"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Accent } from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your ecosystem, users, and market gaps to define the exact problem before writing a single line of code.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Mapping the blueprint — a roadmap with clear milestones, technical architecture, and a focused product direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crafting the visual language. High-fidelity prototypes that balance aesthetics with flawless user experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Building the engine. Clean, scalable, modular code on modern infrastructure for maximum performance.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploy, monitor, and scale. A flawless transition to production with ongoing evolution for your product.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="section bg-background text-foreground border-b border-border"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="How we work"
            lines={[
              <>
                The <Accent>blueprint</Accent>
              </>,
            ]}
          />
          <p className="max-w-sm text-body text-muted-foreground md:pb-2 md:text-right">
            Five phases. No surprises — every step is visible, reviewed, and
            shipped with you in the loop.
          </p>
        </div>

        {/* ── Desktop: expanding columns, active one inverts ── */}
        <div className="hidden lg:flex border border-border h-[26rem] overflow-hidden">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <motion.button
                type="button"
                key={step.number}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                animate={{ flexGrow: isActive ? 4 : 1 }}
                transition={{ duration: 0.55, ease }}
                className={`relative border-r border-border last:border-r-0 flex-[1_1_0%] min-w-0 flex flex-col justify-between text-left p-7 cursor-pointer transition-colors duration-500 ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`font-mono text-label transition-colors duration-500 ${
                      isActive ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`text-xl font-light transition-all duration-500 ${
                      isActive ? "rotate-0" : "rotate-45 opacity-40"
                    }`}
                  >
                    ×
                  </span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease, delay: 0.15 }}
                      className="text-background/75 max-w-sm text-body"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="relative h-14 overflow-visible">
                  {/* Vertical label when collapsed */}
                  <motion.span
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-0 left-1 font-display font-bold uppercase tracking-widest text-display-sm text-muted-foreground/70 whitespace-nowrap origin-bottom-left -rotate-90 translate-x-4 pointer-events-none [font-stretch:118%]"
                  >
                    {step.title}
                  </motion.span>
                  {/* Horizontal title when active */}
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 24,
                    }}
                    transition={{ duration: 0.45, ease, delay: isActive ? 0.1 : 0 }}
                    className="absolute bottom-0 left-0 font-display font-black uppercase text-display-md whitespace-nowrap pointer-events-none [font-stretch:118%]"
                  >
                    {step.title}
                  </motion.span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ── Mobile: vertical phase list ── */}
        <div className="lg:hidden border-t border-border">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <button
                type="button"
                key={step.number}
                onClick={() => setActive(index)}
                className={`w-full text-left border-b border-border transition-colors duration-400 ${
                  isActive ? "bg-foreground text-background" : ""
                }`}
                aria-expanded={isActive}
              >
                <div className="flex items-center justify-between px-5 py-5">
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-label ${
                        isActive
                          ? "text-background/60"
                          : "text-muted-foreground/60"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-display font-black uppercase text-display-sm [font-stretch:118%]">
                      {step.title}
                    </span>
                  </span>
                  <span
                    className={`text-xl font-light transition-transform duration-300 ${
                      isActive ? "rotate-0" : "rotate-45 opacity-40"
                    }`}
                  >
                    ×
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-body-sm text-background/75">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
