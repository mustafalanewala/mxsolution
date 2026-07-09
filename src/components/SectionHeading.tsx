"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Shared section heading — every section opens with the same beat:
 * ( eyebrow ) then a masked line-by-line display headline where one
 * word is set in the serif italic accent face.
 *
 * Reveal is driven by a single useInView on the wrapper (fires once the
 * heading scrolls into view) rather than per-element whileInView, so the
 * masked lines can never get stuck in their hidden state.
 */
export function SectionHeading({
  eyebrow,
  lines,
  className = "",
  align = "left",
  size = "text-[clamp(2.4rem,6vw,4.9rem)]",
}: {
  eyebrow: string;
  /** Each entry is one headline line; wrap accent words in <Accent> */
  lines: ReactNode[];
  className?: string;
  align?: "left" | "center";
  /** Override the headline font-size classes (rhythm/reveal stay shared) */
  size?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="eyebrow mb-5 md:mb-7"
      >
        {eyebrow}
      </motion.p>
      <h2
        className={`font-display font-black uppercase tracking-tight leading-[0.95] [font-stretch:118%] ${size}`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.12em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: i * 0.12 }}
              className="block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="headline-accent text-[1.05em]">{children}</span>;
}
