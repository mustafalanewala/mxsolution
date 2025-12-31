"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Web Development",
  "•",
  "E-commerce",
  "•",
  "Mobile Apps",
  "•",
  "UI/UX Design",
  "•",
  "AI Solutions",
  "•",
  "Branding",
  "•",
  "SEO",
  "•",
];

export function MarqueeSection() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex"
      >
        <div className="flex items-center gap-8 marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className={`text-2xl md:text-4xl font-display font-semibold whitespace-nowrap ${
                item === "•" ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className={`text-2xl md:text-4xl font-display font-semibold whitespace-nowrap ${
                item === "•" ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
