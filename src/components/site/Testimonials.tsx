"use client";

import { Heading, Reveal, Section } from "@/components/site/primitives";
import { site, testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Heading
          className="text-headline"
          lines={["What our clients", "say about us."]}
        />
        <Reveal delay={0.15}>
          <p className="max-w-sm text-lead text-muted-foreground">
            Real feedback from businesses we’ve built for.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
        {testimonials.map((item, i) => (
          <Reveal
            key={item.author}
            delay={i * 0.05}
            className="group flex flex-col justify-between bg-background p-6 md:p-7 transition-colors duration-300 hover:bg-surface/40"
          >
            <div>
              <blockquote className="text-body-sm text-foreground/90 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-caption font-semibold text-primary">
                {item.initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-body-sm font-semibold text-foreground">
                  {item.author}
                </p>
                <p className="truncate text-caption text-muted-foreground">
                  {item.company}
                </p>
              </div>
            </div>
          </Reveal>
        ))}

        {/* 6th balanced action tile */}
        <Reveal
          delay={5 * 0.05}
          className="group flex flex-col justify-between bg-surface/50 p-6 md:p-7 transition-colors duration-300 hover:bg-surface"
        >
          <div>
            <span className="label text-primary">Your project next</span>
            <h3 className="mt-3 text-subtitle font-semibold">
              Have a problem worth solving?
            </h3>
            <p className="mt-2 text-body-sm text-muted-foreground">
              We diagnose the actual issue and build what fixes it.
            </p>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 text-body-sm font-medium text-foreground group-hover:text-primary transition-colors"
            >
              <span>Book a call</span>
              <span
                aria-hidden
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
