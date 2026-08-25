"use client";

import { differentiators } from "@/lib/content";
import {
  Heading,
  Reveal,
  Section,
} from "@/components/site/primitives";

/**
 * The dark act. One tonal break in an otherwise white page, carrying the
 * two claims the brand actually rests on — found, and fitted.
 */
export function Difference() {
  return (
    <Section id="difference" ink>
      <div className="max-w-3xl">
        <Heading
          className="text-headline"
          lines={["Four things most", "agencies leave out."]}
        />
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-16 md:grid-cols-2 xl:grid-cols-4">
        {differentiators.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.06}
            className="flex flex-col bg-[hsl(var(--ink))] p-7 md:p-9"
          >
            <span className="label tabular-nums text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-subtitle">{item.title}</h3>
            <p className="mt-4 text-body-sm text-muted-foreground">
              {item.body}
            </p>
            <ul className="mt-auto flex flex-col pt-7">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="border-t border-border py-2.5 text-body-sm last:pb-0"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}
