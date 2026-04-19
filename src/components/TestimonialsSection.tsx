"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Taher Mahudawala",
    role: "Gujarat Food Products",
    quote:
      "They delivered exactly what we envisioned, stayed within budget, and kept every detail clean and professional. We are genuinely impressed with the final result.",
  },
  {
    name: "Sagar Kahar",
    role: "Sk Attire Hub",
    quote:
      "Within a month, everything was live, from product listings to payments. They designed a Gen Z-friendly ecommerce UI that customers connected with instantly. Seamless process, and I definitely recommend them.",
  },
  {
    name: "Bipin Daniel",
    role: "Guidance (Government of Tamil Nadu)",
    quote:
      "Guidance was a large and complex Government project, and the team managed it with clear planning, strong execution, and consistent communication from start to finish.",
  },
  {
    name: "Vishal Sahetai",
    role: "Vishaka Fashion",
    quote:
      "They helped us significantly improve our online presence. The team was professional, responsive, and reliable throughout the project.",
  },
  {
    name: "Zenab Limdi",
    role: "Mubarak Collection",
    quote:
      "I was looking for a website for Mubarak Collection, and they reached us at the right time. They delivered top-quality work, guided us throughout the process, and helped us in many ways. The UI was beautiful and very user-friendly.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="w-[66vw] sm:w-90 md:w-107.5 lg:w-120 shrink-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
      <p className="text-foreground text-sm sm:text-base md:text-xl leading-relaxed mb-5 sm:mb-7">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-2.5 sm:gap-4">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
          <span className="font-display font-semibold text-[11px] sm:text-sm">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <div className="font-medium text-xs sm:text-sm text-foreground">{testimonial.name}</div>
          <div className="text-[11px] sm:text-xs text-neutral-400">{testimonial.role}</div>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof testimonials;
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max items-stretch gap-5 md:gap-6 py-2 will-change-transform"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-24 pb-20 md:pt-40 md:pb-28 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none text-white">
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="overflow-hidden block"
            >
              Words From Our
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="overflow-hidden block"
            >
              Clients
            </motion.span>
          </h2>
        </div>

        {/* Testimonials Marquee */}
        <div className="space-y-5 md:space-y-6">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-32 bg-linear-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-32 bg-linear-to-l from-black to-transparent" />
              <MarqueeRow items={testimonials} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-32 bg-linear-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-32 bg-linear-to-l from-black to-transparent" />
              <MarqueeRow items={[...testimonials].reverse()} reverse />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
