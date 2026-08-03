"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Accent } from "@/components/SectionHeading";
import { faqs } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              lines={[
                <>Know before</>,
                <>
                  you <Accent>build</Accent>
                </>,
              ]}
            />
            <p className="mt-6 text-body text-muted-foreground max-w-xs">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="#contact"
                className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
              >
                Ask us directly.
              </a>
            </p>
          </div>

          {/* Right — rows */}
          <div className="lg:col-span-7 border-t border-border">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.question} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left cursor-pointer"
                  >
                    <span className="flex items-baseline gap-5 md:gap-8 min-w-0">
                      <span className="font-mono text-label text-muted-foreground/60 shrink-0">
                        0{index + 1}
                      </span>
                      <span
                        className={`font-display font-bold uppercase text-display-sm [font-stretch:118%] transition-colors duration-300 ${
                          isOpen
                            ? "text-foreground"
                            : "text-foreground/70 group-hover:text-foreground"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 0 : 45 }}
                      transition={{ duration: 0.35, ease }}
                      className="text-2xl font-light text-muted-foreground shrink-0"
                    >
                      ×
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pl-9 md:pl-14 max-w-[65ch] text-body text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
