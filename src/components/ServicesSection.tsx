"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading, Accent } from "@/components/SectionHeading";
import { services } from "@/lib/content";

const swing = "cubic-bezier(0.16,1,0.3,1)";
const AUTOPLAY_MS = 5000;

export function ServicesSection() {
  // Swipe on touch, arrows and dots on desktop. Defaults to draggable so a
  // phone can swipe on the very first paint.
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    const sync = () => setIsTouch(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    watchDrag: isTouch,
  });

  const [selected, setSelected] = useState(0);
  const [offscreen, setOffscreen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const paused = offscreen || hovering;

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Hold the carousel while it is off screen or under the pointer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      (entries) => setOffscreen(!entries[entries.length - 1].isIntersecting),
      { threshold: 0 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section bg-background text-foreground border-y border-border overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
          <SectionHeading
            eyebrow="What we build"
            lines={[
              <>Systems, not</>,
              <>
                just <Accent>features</Accent>
              </>,
            ]}
          />

          <div className="flex items-center gap-5 shrink-0 md:pb-2">
            <span className="font-mono text-label-lg tabular-nums">
              <span className="text-foreground">
                {String(selected + 1).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground/40 mx-1.5">/</span>
              <span className="text-muted-foreground/60">
                {String(services.length).padStart(2, "0")}
              </span>
            </span>

            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous service"
                className="w-11 h-11 border border-border flex items-center justify-center transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next service"
                className="w-11 h-11 border border-border flex items-center justify-center transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div
          ref={emblaRef}
          className="overflow-hidden"
          // Bound only on pointer devices: a tap fires mouseenter and never
          // leaves, which would stall autoplay on a phone for good.
          onMouseEnter={isTouch ? undefined : () => setHovering(true)}
          onMouseLeave={isTouch ? undefined : () => setHovering(false)}
        >
          <div className="flex items-stretch touch-pan-y -ml-4 md:-ml-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="relative min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6"
              >
                <div className="group relative h-full">
                  <div className="relative h-full flex flex-col bg-card border border-border transition-colors duration-500 lg:group-hover:border-foreground/30 overflow-hidden">
                    {/* Plate */}
                    <div className="relative aspect-[4/3] shrink-0 overflow-hidden border-b border-border bg-secondary">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
                        loading="lazy"
                        className="object-cover scale-105 transition-transform duration-700 lg:group-hover:scale-100"
                        style={{ transitionTimingFunction: swing }}
                      />
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5 md:p-6">
                      <h3 className="font-display font-black uppercase text-display-sm [font-stretch:118%]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-body-sm text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="relative h-px w-full bg-border mb-3.5 overflow-hidden">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-primary origin-left scale-x-0 transition-transform duration-700 lg:group-hover:scale-x-100"
                            style={{ transitionTimingFunction: swing }}
                          />
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-label uppercase text-muted-foreground">
                            {service.specs.join(" · ")}
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 shrink-0 text-primary transition-transform duration-500 lg:group-hover:rotate-45"
                            style={{ transitionTimingFunction: swing }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators — the active bar fills over the autoplay interval */}
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="mt-9 md:mt-12 flex items-center justify-center gap-2">
          {services.map((service, i) => {
            const active = selected === i;
            return (
              <button
                key={service.title}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Show ${service.title}`}
                aria-current={active}
                className="group/dot py-3 outline-none"
              >
                <span
                  className={`relative block h-0.5 overflow-hidden bg-border transition-[width] duration-500 ${
                    active ? "w-10 md:w-14" : "w-5 md:w-7"
                  }`}
                  style={{ transitionTimingFunction: swing }}
                >
                  {active ? (
                    <span
                      key={selected}
                      className="absolute inset-0 bg-foreground origin-left animate-[dot-fill_5s_linear_forwards]"
                      style={{ animationPlayState: paused ? "paused" : "running" }}
                    />
                  ) : (
                    <span className="absolute inset-0 bg-foreground origin-left scale-x-0 transition-transform duration-300 group-hover/dot:scale-x-100" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
