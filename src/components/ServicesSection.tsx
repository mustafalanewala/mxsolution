"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Custom SVG marks — hand-crafted per service, not pulled from any icon lib ──
const Icons = {
  CustomSoftware: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* 4 modular blocks connected at midpoints with node dots */}
      <rect x="3" y="3" width="14" height="14" rx="1.5" />
      <rect x="23" y="3" width="14" height="14" rx="1.5" />
      <rect x="3" y="23" width="14" height="14" rx="1.5" />
      <rect x="23" y="23" width="14" height="14" rx="1.5" />
      <line x1="17" y1="10" x2="23" y2="10" />
      <line x1="17" y1="30" x2="23" y2="30" />
      <line x1="10" y1="17" x2="10" y2="23" />
      <line x1="30" y1="17" x2="30" y2="23" />
      <circle cx="20" cy="10" r="2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="30" r="2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="20" r="2" fill="currentColor" stroke="none" />
      <circle cx="30" cy="20" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  CRMSystems: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      {/* Hub-and-spoke — 6 relationship nodes around a central circle */}
      <circle cx="20" cy="20" r="4" />
      <circle cx="20" cy="5"  r="2.5" />
      <circle cx="33" cy="12" r="2.5" />
      <circle cx="33" cy="28" r="2.5" />
      <circle cx="20" cy="35" r="2.5" />
      <circle cx="7"  cy="28" r="2.5" />
      <circle cx="7"  cy="12" r="2.5" />
      <line x1="20" y1="16"  x2="20" y2="7.5" />
      <line x1="23.2" y1="17.2" x2="30.7" y2="13.8" />
      <line x1="23.2" y1="22.8" x2="30.7" y2="26.2" />
      <line x1="20" y1="24"  x2="20" y2="32.5" />
      <line x1="16.8" y1="22.8" x2="9.3"  y2="26.2" />
      <line x1="16.8" y1="17.2" x2="9.3"  y2="13.8" />
    </svg>
  ),
  ERPSolutions: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Org-chart hierarchy — top single → wide middle → two bottom */}
      <rect x="14" y="3"  width="12" height="8" rx="1.5" />
      <line x1="20" y1="11" x2="20" y2="16" />
      <rect x="4"  y="16" width="32" height="8" rx="1.5" />
      <line x1="11" y1="24" x2="11" y2="28" />
      <line x1="29" y1="24" x2="29" y2="28" />
      <line x1="11" y1="26" x2="29" y2="26" />
      <rect x="2"  y="28" width="17" height="8" rx="1.5" />
      <rect x="21" y="28" width="17" height="8" rx="1.5" />
    </svg>
  ),
  AIAgents: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      {/* Neural network: 3 input → 4 hidden → 1 output */}
      <circle cx="5"  cy="11" r="2.5" />
      <circle cx="5"  cy="20" r="2.5" />
      <circle cx="5"  cy="29" r="2.5" />
      <circle cx="20" cy="6"  r="2.5" />
      <circle cx="20" cy="15" r="2.5" />
      <circle cx="20" cy="25" r="2.5" />
      <circle cx="20" cy="34" r="2.5" />
      <circle cx="35" cy="20" r="2.5" />
      {/* Input → Hidden */}
      <line x1="7.5" y1="11" x2="17.5" y2="7.5"  />
      <line x1="7.5" y1="11" x2="17.5" y2="15"   />
      <line x1="7.5" y1="20" x2="17.5" y2="15"   />
      <line x1="7.5" y1="20" x2="17.5" y2="25"   />
      <line x1="7.5" y1="29" x2="17.5" y2="25"   />
      <line x1="7.5" y1="29" x2="17.5" y2="32.5" />
      {/* Hidden → Output */}
      <line x1="22.5" y1="7.5"  x2="32.5" y2="20" />
      <line x1="22.5" y1="15"   x2="32.5" y2="20" />
      <line x1="22.5" y1="25"   x2="32.5" y2="20" />
      <line x1="22.5" y1="32.5" x2="32.5" y2="20" />
    </svg>
  ),
  WebDevelopment: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Browser chrome with wireframe content layout */}
      <rect x="2" y="5" width="36" height="30" rx="2.5" />
      <line x1="2" y1="13" x2="38" y2="13" />
      <circle cx="7.5"  cy="9" r="1.5" />
      <circle cx="12.5" cy="9" r="1.5" />
      <circle cx="17.5" cy="9" r="1.5" />
      <rect x="22" y="7" width="13" height="4" rx="1" strokeOpacity="0.4" />
      {/* Wireframe blocks */}
      <rect x="6"  y="17" width="28" height="4"  rx="1" />
      <rect x="6"  y="24" width="12" height="7"  rx="1" />
      <rect x="21" y="24" width="13" height="3"  rx="1" />
      <rect x="21" y="29" width="13" height="2.5" rx="1" strokeOpacity="0.4" />
    </svg>
  ),
  Ecommerce: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Shopping bag with product card inside */}
      <path d="M7 16 L4.5 36 L35.5 36 L33 16 Z" />
      <path d="M14 16 Q14 7 20 7 Q26 7 26 16" />
      <rect x="12" y="20" width="16" height="11" rx="1.5" />
      <line x1="12" y1="26" x2="28" y2="26" />
      <circle cx="20" cy="23" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  MobileApps: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Phone frame with UI skeleton */}
      <rect x="10" y="2" width="20" height="36" rx="4" />
      <rect x="13" y="7" width="14" height="22" rx="1.5" />
      <line x1="17" y1="33" x2="23" y2="33" />
      {/* UI elements */}
      <line x1="15" y1="11" x2="25" y2="11" />
      <rect x="15" y="14" width="10" height="6" rx="1" />
      <line x1="15" y1="23" x2="23" y2="23" />
      <line x1="15" y1="26" x2="20" y2="26" />
    </svg>
  ),
  UIUXBrand: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Design composition grid with focal-point accent */}
      <rect x="2" y="2" width="36" height="36" rx="2" />
      <line x1="2"  y1="14" x2="38" y2="14" strokeOpacity="0.3" />
      <line x1="2"  y1="26" x2="38" y2="26" strokeOpacity="0.3" />
      <line x1="14" y1="2"  x2="14" y2="38" strokeOpacity="0.3" />
      <line x1="26" y1="2"  x2="26" y2="38" strokeOpacity="0.3" />
      {/* Primary focal circle */}
      <circle cx="14" cy="14" r="4.5" />
      {/* Secondary accent dot */}
      <circle cx="26" cy="26" r="2.5" fill="currentColor" stroke="none" />
      {/* Composition guide lines */}
      <line x1="18.5" y1="14" x2="26" y2="14" strokeOpacity="0.5" />
      <line x1="14"   y1="18.5" x2="14" y2="26" strokeOpacity="0.5" />
    </svg>
  ),
};

const services = [
  {
    Icon: Icons.CustomSoftware,
    title: "Custom Software",
    tag: "Customization",
    number: "01",
    description: "Bespoke applications built around your exact workflow — no off-the-shelf compromises.",
    image: "/services/customsoftware.png",
  },
  {
    Icon: Icons.CRMSystems,
    title: "CRM Systems",
    tag: "Software",
    number: "02",
    description: "Tailored CRM platforms that centralise customer data, automate pipelines, and grow revenue.",
    image: "/services/crmsystems.png",
  },
  {
    Icon: Icons.ERPSolutions,
    title: "ERP Solutions",
    tag: "Enterprise",
    number: "03",
    description: "End-to-end ERP systems that unify finance, inventory, HR, and operations in one platform.",
    image: "/services/erpsolutions.png",
  },
  {
    Icon: Icons.WebDevelopment,
    title: "Web Development",
    tag: "Development",
    number: "04",
    description: "Custom websites built with modern technologies. Fast, responsive, and conversion-focused.",
    image: "/services/webdevelopment.png",
  },
  {
    Icon: Icons.Ecommerce,
    title: "E-commerce",
    tag: "Commerce",
    number: "05",
    description: "Online stores that sell. Complete with inventory, payments, and analytics.",
    image: "/services/ecommerce.png",
  },
  {
    Icon: Icons.AIAgents,
    title: "AI Agents",
    tag: "Automation",
    number: "06",
    description: "Smart automation and AI-powered features to scale your operations.",
    image: "/services/aiautomation.png",
  },
  {
    Icon: Icons.MobileApps,
    title: "Mobile Apps",
    tag: "Mobile",
    number: "07",
    description: "Native and cross-platform apps that users love and businesses rely on.",
    image: "/services/appdevelopment.png",
  },
  {
    Icon: Icons.UIUXBrand,
    title: "UI / UX & Brand",
    tag: "Design",
    number: "08",
    description: "Visual identities, design systems, and interfaces that users remember and trust.",
    image: "/services/design-branding.png",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    let ctx: gsap.Context | undefined;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate(self) {
              setActiveIdx(Math.round(self.progress * (services.length - 1)));
            },
          },
        });
        ScrollTrigger.refresh();
      }, section);
    }, 300);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
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
