"use client";

import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/mustafa.lanewala",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/mustafa-lanewala-m2004",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/mustafalanewala", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
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
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  M
                </span>
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                Mx Solution
              </span>
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Technology that multiplies impact. We help brands transform ideas
              into scalable digital systems designed for maximum performance.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
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
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mx Solution. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion in India
          </p>
        </div>
      </div>
    </footer>
  );
}
