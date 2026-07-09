"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-[70] left-0 right-0 mx-auto transition-all duration-500 w-[92%] md:max-w-3xl rounded-full ${
          isScrolled
            ? "top-4 bg-background/90 backdrop-blur-md border border-border/60 py-2 shadow-[var(--shadow-soft)]"
            : "top-6 bg-background/70 backdrop-blur-md border border-border/30 py-3"
        }`}
      >
        <div className="flex items-center justify-between px-5">
          {/* Wordmark — the X is the brand mark */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="shrink-0 font-sans font-semibold text-[17px] tracking-[-0.01em] text-foreground"
          >
            M<span className="text-primary">x</span> Solution
          </Link>

          {/* Desktop Navigation — mono label language */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className="rounded-full h-9 px-5"
              asChild
            >
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button — same spot toggles open/close */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-60 bg-background md:hidden flex flex-col"
          >
            {/* Noise texture matching home page */}
            <div className="noise-overlay" />

            {/* Subtle gradient accent */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-foreground/5 via-transparent to-transparent" />

            {/* Nav links — large, numbered (real navbar stays on top) */}
            <div className="relative flex-1 flex flex-col justify-center px-8 gap-0 pt-24">
              <p className="eyebrow mb-6">Menu</p>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-4 border-b border-border/60 last:border-0"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary w-6 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-display font-black uppercase tracking-tight text-[2.4rem] leading-none [font-stretch:118%] text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="ml-auto text-lg font-light text-muted-foreground/40 rotate-45 group-hover:rotate-0 group-hover:text-primary transition-all duration-300">
                      ×
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative px-8 pb-10 flex items-center justify-between gap-4"
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8"
                asChild
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground font-mono">
                © {new Date().getFullYear()} Mx Solution
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
