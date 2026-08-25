"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/content";
import { EASE } from "@/components/site/primitives";

/**
 * Floating WhatsApp affordance.
 *
 * Two rules keep it from becoming wallpaper:
 *  1. It stays out of the hero — nothing floats over the first screen.
 *  2. It hides once the contact section is in view, where the form is
 *     already the better version of the same action.
 *
 * The glyph is WhatsApp's own filled mark, so it lives here rather than
 * in icons.tsx — that set is stroke-only, on one grid, and a brand logo
 * would be the exception that breaks it.
 */
export function WhatsAppButton() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { rootMargin: "-15% 0px -15% 0px" },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !atContact;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          data-cta="whatsapp-float"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="group/wa fixed right-5 bottom-5 z-30 block md:right-8 md:bottom-8"
        >
          <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_-8px_rgba(37,211,102,0.7)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/wa:scale-105 group-focus-visible/wa:ring-2 group-focus-visible/wa:ring-foreground group-focus-visible/wa:ring-offset-2">
            {/* Slow ring, low opacity — a signal that it's live, not a siren */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 [animation-duration:2.6s] animate-ping"
            />
            <svg
              className="relative"
              viewBox="0 0 32 32"
              width="26"
              height="26"
              fill="currentColor"
              aria-hidden
              focusable="false"
            >
              <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.5 2.06 7.83L.5 31.5l7.87-2.05A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.1a12.5 12.5 0 01-6.35-1.73l-.45-.27-4.68 1.22 1.24-4.55-.3-.47A12.5 12.5 0 1116 28.6zm6.86-9.37c-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.43.28-.8.09-.37-.19-1.57-.58-2.99-1.84-1.1-.98-1.84-2.2-2.06-2.57-.22-.37-.02-.57.16-.75.17-.17.37-.43.56-.65.19-.21.25-.37.37-.62.12-.25.06-.46-.03-.65-.09-.19-.84-2.03-1.15-2.78-.3-.73-.61-.63-.84-.64l-.71-.01c-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.19.25 2.62 4 6.35 5.61.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.77.31-.87.31-1.61.22-1.77-.09-.16-.34-.25-.71-.44z" />
            </svg>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
