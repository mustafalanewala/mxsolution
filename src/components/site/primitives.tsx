"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

/* ── Section shell ─────────────────────────────────────────────────
   Every section is the same object: an optional dark act, the shared
   vertical beat, and the one container. Sections never invent their own
   padding — that is what keeps the page's pulse even. */
export function Section({
  id,
  children,
  ink = false,
  className,
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  /** Render as a dark act — full-bleed warm near-black */
  ink?: boolean;
  className?: string;
  /** Skip the container, for sections that manage their own edges */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("section relative", ink && "ink-block", className)}
    >
      {bleed ? children : <div className="wrap">{children}</div>}
    </section>
  );
}

/* ── Reveal ────────────────────────────────────────────────────────
   The only entrance animation on the site. The distance is deliberately
   short — 16px, not 60 — so the page settles rather than performs. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* ── Heading reveal ────────────────────────────────────────────────
   Words tip up from their own baseline in 3D and come into focus as
   they land — transform, blur and opacity moving together, staggered
   across the line.

   Why per-word rather than per-line: a masked line slides as one rigid
   block, which reads mechanical at display sizes. Letting each word
   arrive on its own beat is what makes a headline feel typeset rather
   than animated.

   One useInView drives the whole heading, so a fast scroll can never
   strand a word in its hidden state. */

const HIDDEN = {
  opacity: 0,
  rotateX: -78,
  y: "0.3em",
  filter: "blur(9px)",
} as const;

const SHOWN = {
  opacity: 1,
  rotateX: 0,
  y: "0em",
  filter: "blur(0px)",
} as const;

function Word({
  children,
  show,
  delay,
}: {
  children: string;
  show: boolean;
  delay: number;
}) {
  return (
    <span
      className="mr-[0.25em] inline-block [transform-style:preserve-3d]"
      style={{ perspective: 1000 }}
    >
      <motion.span
        initial={HIDDEN}
        animate={show ? SHOWN : HIDDEN}
        transition={{ duration: 0.85, ease: EASE, delay }}
        className="inline-block origin-bottom will-change-[transform,filter,opacity]"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Heading({
  lines,
  className,
  as: Tag = "h2",
  /** "load" for above-the-fold headings, "view" for everything below */
  trigger = "view",
  delay = 0,
  /** Index of the line to set in the accent colour */
  accent,
  /** Turns the accent line into a link, animated as a single block */
  accentHref,
  cta,
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  trigger?: "load" | "view";
  delay?: number;
  accent?: number;
  accentHref?: string;
  cta?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const show = trigger === "load" ? true : inView;

  // Words carry their own stagger, so each line has to know how many
  // words ran before it.
  let spoken = 0;

  return (
    <Tag
      ref={ref}
      className={cn(
        "flex flex-row flex-wrap items-start gap-x-2 md:flex-col md:gap-x-0",
        className,
      )}
    >
      {lines.map((line, i) => {
        const words = line.split(" ");
        const start = delay + spoken * 0.055 + i * 0.04;
        spoken += words.length;
        const isAccent = accent === i;

        // The accent line is a link, so it moves as one block — a hover
        // target that flickers word by word is a worse target.
        if (isAccent && accentHref) {
          return (
            <motion.a
              key={line}
              href={accentHref}
              data-cta={cta}
              initial={HIDDEN}
              animate={show ? SHOWN : HIDDEN}
              transition={{ duration: 0.85, ease: EASE, delay: start }}
              className="inline-block origin-bottom whitespace-nowrap text-primary transition-opacity duration-300 will-change-[transform,filter,opacity] hover:opacity-80"
            >
              {line}
            </motion.a>
          );
        }

        return (
          <span
            key={line}
            className={cn(
              "inline-flex flex-wrap items-center",
              isAccent && "text-primary",
            )}
          >
            {words.map((word, w) => (
              <Word
                key={`${word}-${w}`}
                show={show}
                delay={start + w * 0.055}
              >
                {word}
              </Word>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}

/* ── Page header ───────────────────────────────────────────────────
   The opening of every page that isn't the homepage. One shape, so the
   site's second-level pages all start on the same beat. */
export function PageHeader({
  lines,
  intro,
  accent,
  className,
}: {
  lines: string[];
  intro?: string;
  /** Index of the line to set in the accent colour */
  accent?: number;
  /** Overrides on the heading itself — a long title wants a smaller size */
  className?: string;
}) {
  return (
    // One opening beat for every page. Desktop gets more than mobile
    // because the nav floats there — the pill overlaps the top of the
    // page, so the first line has to clear it rather than sit under it.
    <section className="pt-14 pb-4 md:pt-16 lg:pt-28">
      <div className="wrap">
        <Heading
          as="h1"
          trigger="load"
          className={cn("max-w-4xl text-display", className)}
          lines={lines}
          accent={accent}
        />
        {intro && (
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-2xl text-lead text-muted-foreground">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ── Inline arrow link ─────────────────────────────────────────────
   The underline draws in from the left; the arrow steps forward. Two
   small movements, both on transform. */
export function ArrowLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group/link inline-flex items-center gap-2 text-body font-medium",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

