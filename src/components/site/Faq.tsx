"use client";

import { useState } from "react";
import { IconPlus } from "@/components/site/icons";
import {
  Heading,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="faq" ink>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Heading
              className="text-headline"
              lines={["Frequently asked", "questions."]}
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const triggerId = `faq-trigger-${i}`;
              const contentId = `faq-content-${i}`;

              return (
                <Reveal key={faq.question} delay={i * 0.04}>
                  <div className="border-b border-border first:border-t">
                    <h3>
                      <button
                        type="button"
                        id={triggerId}
                        aria-controls={contentId}
                        aria-expanded={isOpen}
                        onClick={() => toggle(i)}
                        className="group/faq flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span className="text-subtitle transition-colors duration-300 group-hover/faq:text-primary">
                          {faq.question}
                        </span>
                        <IconPlus
                          className={cn(
                            "mt-1 size-5 flex-none text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            isOpen && "rotate-45 text-foreground",
                          )}
                        />
                      </button>
                    </h3>
                    <section
                      id={contentId}
                      aria-labelledby={triggerId}
                      className={cn(
                        "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 text-body text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </section>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

