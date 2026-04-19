"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

const socialLinks = [
  {
    href: "https://instagram.com/mxsolution.in",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/mxsolution53",
    label: "LinkedIn",
  },
];

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Custom Software", href: "#services" },
  { label: "CRM Systems", href: "#services" },
  { label: "ERP Solutions", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
];

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const time = useClock();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">
      {/* Top Meta Strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 py-5 text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Available for projects — 2026</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Dohad · IND</span>
              <span className="tabular-nums">{time || "--:--:--"} IST</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl pt-16 md:pt-24 pb-16 md:pb-20">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 md:gap-10">
          {/* Brand */}
          <AnimatedSection className="col-span-2 md:col-span-6">
            <div className="mb-6">
              <span className="font-display font-semibold text-lg text-white">
                Mx Solution
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-sm md:text-base mb-8">
              Technology that multiplies impact. We help brands transform ideas
              into scalable digital systems designed for maximum performance.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <span className="relative">
                      {social.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Sitemap */}
          <AnimatedSection delay={0.1} className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 mb-6">
              Sitemap
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-block text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection delay={0.2} className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-block text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>

      {/* Oversized wordmark — SVG scales to full width without clipping */}
      <div aria-hidden className="container mx-auto px-4 md:px-8 max-w-screen-2xl select-none pointer-events-none">
        <svg
          viewBox="0 0 1340 150"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto block"
        >
          <defs>
            <linearGradient id="mxFooterFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.02)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <text
            x="670"
            y="140"
            textAnchor="middle"
            fill="url(#mxFooterFade)"
            textLength="1340"
            lengthAdjust="spacingAndGlyphs"
            className="font-display"
            style={{
              fontSize: "200px",
              fontWeight: 900,
              letterSpacing: "-8px",
              textTransform: "uppercase",
            }}
          >
            MX SOLUTION
          </text>
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl py-6 flex items-center justify-center text-[11px] font-mono tracking-wider text-white/40">
          <p>© {year} Mx Solution — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
