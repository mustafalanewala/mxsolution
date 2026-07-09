"use client";

const items = [
  "Custom Software",
  "CRM Systems",
  "ERP Solutions",
  "Web Development",
  "E-commerce",
  "AI Agents",
  "Mobile Apps",
  "UI / UX & Brand",
];

function Track({ reverse = false }: { reverse?: boolean }) {
  // Two identical copies inside one track; the keyframe shifts by exactly
  // one copy (-50%), so the loop is seamless. Pure CSS transform = GPU.
  const sequence = [...items, ...items];
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex w-max shrink-0 items-center will-change-transform group-hover:[animation-play-state:paused] ${
          reverse
            ? "animate-[marquee-reverse_38s_linear_infinite]"
            : "animate-[marquee_38s_linear_infinite]"
        }`}
      >
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-5 md:px-8 font-display font-black uppercase tracking-tight text-[clamp(1.9rem,4.4vw,4rem)] [font-stretch:118%] ${
                i % 2 === 0 ? "text-foreground" : "text-outline"
              }`}
            >
              {item}
            </span>
            <span className="text-2xl md:text-4xl font-light text-muted-foreground/40">
              ×
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="relative border-y border-border bg-background text-foreground overflow-hidden py-8 md:py-12">
      <Track />
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-40 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-40 bg-linear-to-l from-background to-transparent" />
    </section>
  );
}
