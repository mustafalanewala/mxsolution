"use client";

import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/mxsolution.in",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/mxsolution53",
    label: "LinkedIn",
  },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Work", href: "#portfolio" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "E-commerce", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "AI Solutions", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Main Footer */}
      <div className="container-wide px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="font-display font-semibold text-xl text-foreground">
                Mx Solution
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Technology that multiplies impact. We help brands transform ideas
              into scalable digital systems designed for maximum performance.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.div key={social.label} whileHover={{ y: -2 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-semibold text-foreground mb-6">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide px-5 md:px-8 py-6 flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mx Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
