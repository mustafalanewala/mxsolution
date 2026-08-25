"use client";

import { problems } from "@/lib/content";
import { Heading, Reveal, Section } from "@/components/site/primitives";

/**
 * The reframe, kept to one screen. Statement on the left, the six things
 * people actually arrive with on the right — set as a tile grid so the
 * whole list reads in a glance instead of scrolling past as six rows.
 */
export function Problem() {
  return (
    <Section id="problem">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Heading
            className="text-headline"
            lines={["Your problem isn’t", "always a website."]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-lead text-muted-foreground">
              It&apos;s usually one of these. That&apos;s where we come in.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {problems.map((problem, i) => (
              <Reveal
                as="li"
                key={problem}
                delay={(i % 2) * 0.05}
                className="group flex items-center bg-background p-6 md:p-7"
              >
                <span className="text-subtitle transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  {problem}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
