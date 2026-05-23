"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Custom Software",
    description:
      "Bespoke applications built around your exact workflow — no off-the-shelf compromises.",
    image: "/services/customsoftware.png",
  },
  {
    title: "CRM Systems",
    description:
      "Tailored CRM platforms that centralise customer data, automate pipelines, and grow revenue.",
    image: "/services/crmsystems.png",
  },
  {
    title: "ERP Solutions",
    description:
      "End-to-end ERP systems that unify finance, inventory, HR, and operations in one platform.",
    image: "/services/erpsolutions.png",
  },
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies. Fast, responsive, and conversion-focused.",
    image: "/services/webdevelopment.png",
  },
  {
    title: "E-commerce",
    description:
      "Online stores that sell. Complete with inventory, payments, and analytics.",
    image: "/services/ecommerce.png",
  },
  {
    title: "AI Agents",
    description:
      "Smart automation and AI-powered features to scale your operations.",
    image: "/services/aiautomation.png",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps that users love and businesses rely on.",
    image: "/services/appdevelopment.png",
  },
  {
    title: "UI / UX & Brand",
    description:
      "Visual identities, design systems, and interfaces that users remember and trust.",
    image: "/services/design-branding.png",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const dotsRef = useRef<Array<HTMLDivElement | null>>([]);

  // 1. Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // Apple-like easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // 2. Main GSAP Animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Use clientWidth instead of innerWidth to ignore the vertical scrollbar width
      const getScrollAmount = () =>
        Math.max(
          0,
          (track?.scrollWidth || 0) - document.documentElement.clientWidth,
        );

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount() * 1.5}`, // Multiplied by 1.5 to slow down the scroll speed slightly
        pin: true,
        animation: tween,
        scrub: true, // Has to be 'true' since Lenis is handling the smoothing
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Calculate active index
          const nextIdx = Math.round(self.progress * (services.length - 1));

          // DIRECT DOM MANIPULATION: Update counter
          if (counterRef.current) {
            counterRef.current.textContent = String(nextIdx + 1).padStart(
              2,
              "0",
            );
          }

          // DIRECT DOM MANIPULATION: Update dots without re-rendering component
          dotsRef.current.forEach((dot, i) => {
            if (!dot) return;
            if (i === nextIdx) {
              dot.style.width = "20px";
              dot.style.backgroundColor = "rgba(255,255,255,0.5)";
            } else {
              dot.style.width = "6px";
              dot.style.backgroundColor = "rgba(255,255,255,0.1)";
            }
          });
        },
      });

      // Header entrance animation
      gsap.fromTo(
        ".header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-black text-white">
      <div className="h-screen flex flex-col overflow-hidden">
        {/* ── Header ── */}
        <div className="shrink-0 flex items-end justify-between gap-10 px-8 md:px-16 pt-10 pb-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display font-black uppercase tracking-tighter leading-none text-white text-[clamp(2.2rem,4.5vw,4rem)]">
              <span className="overflow-hidden block">
                <span className="block header-anim">Services</span>
              </span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-400 header-anim">
              End-to-end product engineering — from strategy and design to
              scalable systems built around your business.
            </p>
          </div>
          <span className="font-mono text-sm tracking-widest shrink-0">
            <span ref={counterRef} className="text-white/70 tabular-nums">
              01
            </span>
            <span className="text-white/15 mx-1.5">/</span>
            <span className="text-white/25">
              {String(services.length).padStart(2, "0")}
            </span>
          </span>
        </div>

        {/* ── Card track ── */}
        <div className="flex-1 flex items-center overflow-hidden min-h-0">
          <div
            ref={trackRef}
            className="flex gap-5 md:gap-7 pl-8 md:pl-16 will-change-transform w-max"
          >
            {services.map(({ title, description, image }) => (
              <div
                key={title}
                className="group relative shrink-0 flex flex-col w-[82vw] sm:w-[56vw] md:w-[40vw] lg:w-[30vw] xl:w-[24vw] max-w-115 border border-white/15 bg-[#0d0d0d] overflow-hidden"
                style={{ height: "clamp(460px, 62vh, 600px)" }}
              >
                <div
                  className="relative shrink-0 overflow-hidden border-b border-white/15"
                  style={{ height: "60%" }}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 82vw, (max-width: 1280px) 40vw, 24vw"
                    className="object-cover grayscale-[0.15] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

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
            {/* The tighter spacer block so it sits flush at the very end */}
            <div className="shrink-0 w-4 md:w-8" aria-hidden />
          </div>
        </div>

        {/* ── Dot indicator ── */}
        <div className="shrink-0 flex items-center justify-between px-8 md:px-16 pb-7 pt-3">
          <div className="flex items-center gap-1.5">
            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => {
                  dotsRef.current[i] = el;
                }}
                className="h-0.5 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: i === 0 ? "20px" : "6px",
                  backgroundColor:
                    i === 0 ? "rgba(255,255,255,.5)" : "rgba(255,255,255,.1)",
                  willChange: "width, background-color",
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
