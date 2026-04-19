"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Custom Software",
    description: "Bespoke applications built around your exact workflow — no off-the-shelf compromises.",
    image: "/services/customsoftware.png",
  },
  {
    title: "CRM Systems",
    description: "Tailored CRM platforms that centralise customer data, automate pipelines, and grow revenue.",
    image: "/services/crmsystems.png",
  },
  {
    title: "ERP Solutions",
    description: "End-to-end ERP systems that unify finance, inventory, HR, and operations in one platform.",
    image: "/services/erpsolutions.png",
  },
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies. Fast, responsive, and conversion-focused.",
    image: "/services/webdevelopment.png",
  },
  {
    title: "E-commerce",
    description: "Online stores that sell. Complete with inventory, payments, and analytics.",
    image: "/services/ecommerce.png",
  },
  {
    title: "AI Agents",
    description: "Smart automation and AI-powered features to scale your operations.",
    image: "/services/aiautomation.png",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform apps that users love and businesses rely on.",
    image: "/services/appdevelopment.png",
  },
  {
    title: "UI / UX & Brand",
    description: "Visual identities, design systems, and interfaces that users remember and trust.",
    image: "/services/design-branding.png",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      // Small timeout ensures fonts/images are parsed before calculating track width
      const initScroll = setTimeout(() => {
        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1, // 1 adds a smooth 1-second delay. Change to `true` if you want it instantly locked to the scrollbar
            invalidateOnRefresh: true,
            onUpdate(self) {
              const nextIdx = Math.round(self.progress * (services.length - 1));
              setActiveIdx((prev) => (prev === nextIdx ? prev : nextIdx));
            },
          },
        });
      }, 50);

      return () => clearTimeout(initScroll);
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-black text-white">
      <div className="h-screen flex flex-col overflow-hidden">

        {/* ── Header ── */}
        <div className="shrink-0 flex items-end justify-between gap-10 px-8 md:px-16 pt-10 pb-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display font-black uppercase tracking-tighter leading-none text-white text-[clamp(2.2rem,4.5vw,4rem)]">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="block"
                >
                  Services
                </motion.span>
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="max-w-md text-sm leading-relaxed text-neutral-400"
            >
              End-to-end product engineering — from strategy and design to scalable systems built around your business.
            </motion.p>
          </div>
          <span className="font-mono text-sm tracking-widest shrink-0">
            <span className="text-white/70 tabular-nums">{String(activeIdx + 1).padStart(2, "0")}</span>
            <span className="text-white/15 mx-1.5">/</span>
            <span className="text-white/25">{String(services.length).padStart(2, "0")}</span>
          </span>
        </div>

        {/* ── Card track ── */}
        <div className="flex-1 flex items-center overflow-hidden min-h-0">
          <div ref={trackRef} className="flex gap-5 md:gap-7 pl-8 md:pl-16 will-change-transform">
            {services.map(({ title, description, image }) => (
              <div
                key={title}
                className="group relative shrink-0 flex flex-col w-[82vw] sm:w-[56vw] md:w-[40vw] lg:w-[30vw] xl:w-[24vw] max-w-115 border border-white/15 bg-[#0d0d0d] overflow-hidden"
                style={{ height: "clamp(460px, 62vh, 600px)" }}
              >
                {/* Image */}
                <div className="relative shrink-0 overflow-hidden border-b border-white/15" style={{ height: "60%" }}>
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale-[0.15]"
                  />
                </div>

                {/* Content */}
                <div className="relative flex flex-col flex-1 px-6 pt-6 pb-6 min-h-0">
                  <h3 className="font-display font-black uppercase tracking-tighter leading-[0.95] text-white group-hover:text-primary mb-4 text-[clamp(1.6rem,2.4vw,2.1rem)] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-neutral-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-4 md:w-8" aria-hidden />
          </div>
        </div>

        {/* ── Dot indicator + label ── */}
        <div className="shrink-0 flex items-center justify-between px-8 md:px-16 pb-7 pt-3">
          <div className="flex items-center gap-1.5">
            {services.map((_, i) => (
              <div
                key={i}
                className="h-0.5 rounded-full transition-all duration-500"
                style={{
                  width: i === activeIdx ? 20 : 6,
                  backgroundColor: i === activeIdx ? "rgba(255,255,255,.5)" : "rgba(255,255,255,.1)",
                }}
              />
            ))}
          </div>
          <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-white/20">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}