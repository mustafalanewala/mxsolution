"use client";

import { useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading, Accent } from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Taher Mahudawala",
    role: "Gujarat Food Products",
    quote:
      "They delivered exactly what we envisioned, stayed within budget, and kept every detail clean and professional.",
  },
  {
    name: "Sagar Kahar",
    role: "SK Attire Hub",
    quote:
      "Within a month everything was live — listings to payments. An e-commerce UI customers connected with instantly.",
  },
  {
    name: "Bipin Daniel",
    role: "Guidance (Govt. of Tamil Nadu)",
    quote:
      "A large, complex government project managed with clear planning, strong execution, and consistent communication.",
  },
  {
    name: "Vishal Sahetai",
    role: "Vishaka Fashion",
    quote:
      "They helped us significantly improve our online presence. Professional, responsive, and reliable throughout.",
  },
  {
    name: "Zenab Limdi",
    role: "Mubarak Collection",
    quote:
      "Top-quality work, guidance through the whole process, and a UI that is beautiful and very user-friendly.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    // Spacing lives on the card (not flex gap) so each half of the doubled
    // track is exactly 50% wide — otherwise the loop visibly jumps.
    <article className="mr-4 md:mr-6 w-[78vw] max-w-[22rem] sm:max-w-none sm:w-96 md:w-112 shrink-0 border border-border bg-card p-5 sm:p-6 md:p-8 flex flex-col justify-between gap-5 md:gap-6 transition-colors duration-500 hover:bg-foreground hover:text-background group/card">
      <p className="font-serif italic text-lead">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold uppercase text-display-xs [font-stretch:118%]">
            {testimonial.name}
          </div>
          <div className="font-mono text-label uppercase text-muted-foreground group-hover/card:text-background/60 transition-colors duration-500 mt-1">
            {testimonial.role}
          </div>
        </div>
        <span className="text-2xl font-light text-muted-foreground/50 group-hover/card:text-background/50 transition-colors duration-500">
          ×
        </span>
      </div>
    </article>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="group relative overflow-hidden">
      {/* marquee-track: paused by the section's IntersectionObserver when
          off-screen so the layers don't animate for the whole session */}
      <div
        className={`marquee-track flex w-max items-stretch py-1 will-change-transform transform-gpu group-hover:[animation-play-state:paused] motion-reduce:[animation:none] ${
          reverse
            ? "animate-[marquee-reverse_45s_linear_infinite]"
            : "animate-[marquee_45s_linear_infinite]"
        }`}
      >
        {doubled.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 md:w-32 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 md:w-32 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Run the marquees only while the section is on screen
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const tracks = section.querySelectorAll<HTMLElement>(".marquee-track");
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[entries.length - 1].isIntersecting;
        tracks.forEach((t) => {
          t.style.animationPlayState = visible ? "running" : "paused";
        });
      },
      { threshold: 0 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section bg-background text-foreground overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl mb-12 md:mb-16">
        <SectionHeading
          eyebrow="Client words"
          className="md:text-center"
          lines={[
            <>
              Taken at their <Accent>word</Accent>
            </>,
          ]}
        />
      </div>

      <div className="space-y-5 md:space-y-6">
        <AnimatedSection delay={0.1}>
          <MarqueeRow />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <MarqueeRow reverse />
        </AnimatedSection>
      </div>
    </section>
  );
}
