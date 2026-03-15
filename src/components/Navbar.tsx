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
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed z-50 left-0 right-0 mx-auto transition-all duration-500 w-[92%] md:max-w-2xl rounded-full ${
          isScrolled
            ? "top-4 bg-background/80 backdrop-blur-xl border border-border/50 py-2"
            : "top-6 bg-background/60 backdrop-blur-lg border border-border/30 py-3"
        }`}
      >
        <div className="flex items-center justify-between px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="font-display font-semibold text-lg text-foreground">
              Mx Solution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Button
              variant="glow"
              size="sm"
              className="rounded-full h-9 px-5"
              asChild
            >
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
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
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />

            {/* Header row */}
            <div className="relative flex items-center justify-between px-6 pt-7 shrink-0">
              <Link
                href="/"
                className="font-display font-semibold text-lg text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mx Solution
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  className="text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Nav links — large, numbered */}
            <div className="relative flex-1 flex flex-col justify-center px-8 gap-0">
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
                    className="group flex items-baseline gap-4 py-5 border-b border-border/40 last:border-0"
                  >
                    <span className="text-xs text-primary font-mono w-6 shrink-0 translate-y-[-0.15rem] bg-primary/10 rounded px-1 py-0.5">
                      0{i + 1}
                    </span>
                    <span className="font-display font-bold text-[3rem] leading-none text-foreground group-hover:text-primary transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="ml-auto text-muted-foreground/0 group-hover:text-muted-foreground transition-colors duration-300 text-sm font-mono translate-y-1">
                      →
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
                variant="glow"
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
