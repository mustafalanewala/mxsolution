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
    <footer className="relative bg-background text-foreground overflow-hidden border-t border-border">
      {/* Top Meta Strip */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span>Available for projects — {year}</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Dohad · IND</span>
              <span className="tabular-nums">{time || "--:--:--"} IST</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl pt-10 md:pt-12 pb-10 md:pb-12">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 md:gap-10">
          {/* Brand */}
          <AnimatedSection className="col-span-2 md:col-span-6">
            <div className="mb-6">
              <span className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-foreground">
                M<span className="text-primary">x</span> Solution
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base mb-8">
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
                    className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="relative">
                      {social.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Sitemap */}
          <AnimatedSection delay={0.1} className="col-span-1 md:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-6">
              Sitemap
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection delay={0.2} className="col-span-1 md:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl py-4 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center">
          <p>© {year} Mx Solution — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
