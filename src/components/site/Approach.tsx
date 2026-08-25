"use client";

import { approach } from "@/lib/content";
import { approachIcons } from "@/components/site/icons";
import { Heading, Reveal, Section } from "@/components/site/primitives";

export function Approach() {
  return (
    <Section id="approach" ink>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Heading className="text-headline" lines={["How we work."]} />
        <Reveal delay={0.15}>
          <p className="max-w-sm text-lead text-muted-foreground">
            Five steps, in order. The first two are the ones that get skipped.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-14 md:grid-cols-2 xl:grid-cols-5">
        {approach.map((step, i) => {
          const Glyph = approachIcons[step.icon];
          return (
            <Reveal
              key={step.title}
              delay={i * 0.06}
              className="group flex flex-col bg-[hsl(var(--ink))] p-7 md:p-8"
            >
              <Glyph className="size-7 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" />
              <h3 className="mt-6 text-subtitle">{step.title}</h3>
              <p className="mt-2 text-body-sm text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
