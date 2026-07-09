"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and platforms built on modern frameworks — fast, responsive, and engineered to turn visitors into customers.",
    image: "/services/webdevelopment.png",
    tags: ["Next.js", "Platforms", "SEO"],
  },
  {
    title: "E-commerce",
    description:
      "Storefronts that sell — complete with payments, inventory, order tracking, and the analytics to keep revenue growing.",
    image: "/services/ecommerce.png",
    tags: ["Payments", "Inventory"],
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps users love and businesses rely on — from first concept to app store launch.",
    image: "/services/appdevelopment.png",
    tags: ["iOS", "Android"],
  },
  {
    title: "Custom Software",
    description:
      "Bespoke systems shaped around your exact workflow — dashboards, automation, and tools with no off-the-shelf compromises.",
    image: "/services/customsoftware.png",
    tags: ["Dashboards", "Automation"],
  },
  {
    title: "CRM Systems",
    description:
      "Centralise customer data, automate your sales pipelines, and give your team the clarity to grow revenue faster.",
    image: "/services/crmsystems.png",
    tags: ["Pipelines", "Sales"],
  },
  {
    title: "ERP Solutions",
    description:
      "Unify finance, inventory, HR, and operations in one platform — one source of truth for the whole business.",
    image: "/services/erpsolutions.png",
    tags: ["Operations", "Finance"],
  },
  {
    title: "AI Agents",
    description:
      "Smart assistants, automated workflows, and integrations woven into your product to scale operations without scaling headcount.",
    image: "/services/aiautomation.png",
    tags: ["Automation", "Assistants"],
  },
  {
    title: "UI/UX & Brand",
    description:
      "Visual identities, design systems, and interfaces that people remember, trust, and genuinely enjoy using.",
    image: "/services/design-branding.png",
    tags: ["Identity", "Interfaces"],
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);
  const [current, setCurrent] = useState(0);

  // How far the track must travel horizontally
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setMaxShift(
        Math.max(0, track.scrollWidth - document.documentElement.clientWidth),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);
  const barScale = scrollYProgress;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      services.length - 1,
      Math.round(v * (services.length - 1)),
    );
    setCurrent(idx);
  });

  return (
    <section id="services" className="bg-background text-foreground border-y border-border">
      {/* Scroll room: exactly the horizontal distance + one pinned viewport */}
      <div ref={sectionRef} style={{ height: `calc(100svh + ${maxShift}px)` }}>
        <div className="sticky top-0 h-svh flex flex-col overflow-hidden">
          {/* Header */}
          <div className="shrink-0 container mx-auto px-4 md:px-8 max-w-screen-2xl w-full pt-24 md:pt-28 pb-4 md:pb-10 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-4 md:mb-5">What we build</p>
              <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,5vw,4.2rem)] [font-stretch:118%]">
                Systems, not just{" "}
                <span className="headline-accent text-[1.05em]">features</span>
              </h2>
            </div>
            <div className="hidden md:flex flex-col items-end gap-3 shrink-0 pb-1">
              <span className="font-mono text-sm tracking-[0.2em] tabular-nums">
                <span className="text-foreground">
                  0{current + 1}
                </span>
                <span className="text-muted-foreground/40 mx-1.5">/</span>
                <span className="text-muted-foreground/60">
                  0{services.length}
                </span>
              </span>
              <div className="w-40 h-px bg-border relative overflow-hidden">
                <motion.div
                  style={{ scaleX: barScale }}
                  className="absolute inset-0 bg-foreground origin-left"
                />
              </div>
            </div>
          </div>

          {/* Horizontal track driven by vertical scroll */}
          <div className="flex-1 flex items-center min-h-0 pb-3 md:pb-14">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-5 md:gap-7 pl-4 md:pl-8 pr-8 will-change-transform w-max items-stretch"
            >
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="group relative shrink-0 flex flex-col w-[84vw] sm:w-[52vw] md:w-[38vw] lg:w-[28vw] xl:w-[23vw] max-w-md border border-border bg-card overflow-hidden"
                  style={{ height: "clamp(390px, 58svh, 580px)" }}
                >
                  {/* Image */}
                  <div
                    className="relative shrink-0 overflow-hidden border-b border-border"
                    style={{ height: "55%" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1280px) 38vw, 23vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white bg-black/40 backdrop-blur-sm px-2.5 py-1">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col flex-1 p-5 md:p-6 min-h-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(1.35rem,1.9vw,1.8rem)] [font-stretch:118%]">
                        {service.title}
                      </h3>
                      <span className="text-lg font-light text-muted-foreground/40 group-hover:rotate-90 transition-transform duration-500">
                        ×
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile counter */}
          <div className="shrink-0 container mx-auto px-4 md:px-8 max-w-screen-2xl w-full pb-4 flex justify-end items-center md:hidden">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50 tabular-nums">
              0{current + 1} / 0{services.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
