"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { IconClose, IconMenu } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/Wordmark";
import { nav } from "@/lib/content";
import { EASE } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/** The mobile menu items are routes, so they animate as links, not anchors. */
const MotionLink = motion.create(Link);

/**
 * On desktop the whole bar — mark, links and CTA — lifts out of the
 * document into one floating pill that follows the reader down.
 *
 * Below lg it stays a plain bar in flow: a floating pill on a phone is
 * just a chunk of screen you can't read through.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  /**
   * "/" has to match exactly — every path starts with it. Everything else
   * matches by prefix so a post keeps "Blogs" lit.
   */
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /**
   * Next won't re-scroll for a link pointing at the page you're already
   * on, so the mark and "Home" would do nothing from the top of the
   * homepage. Send them back up ourselves — through Lenis where it's
   * running, natively where it isn't.
   */
  const toTop = useCallback(() => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lenis]);

  return (
    <>
      {/* Sticky on a phone, where the bar is in flow and would otherwise
          scroll away; static from lg up, where the pill inside it is
          already fixed and the header is just holding its space. */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-xl lg:static lg:border-b-0 lg:bg-transparent lg:backdrop-blur-none">
        <div className="lg:fixed lg:inset-x-0 lg:top-4 lg:z-30">
          <div className="wrap">
            <div className="flex h-18 items-center justify-between gap-4 md:h-20 lg:mx-auto lg:h-auto lg:w-fit lg:gap-8 lg:rounded-full lg:border lg:border-border lg:bg-background/80 lg:py-2 lg:pr-2 lg:pl-6 lg:shadow-[0_16px_44px_-20px_rgba(28,26,25,0.4)] lg:backdrop-blur-xl">
              <Link
                href="/"
                aria-label="Mx Solution — home"
                onClick={toTop}
                className="shrink-0"
              >
                <Wordmark />
              </Link>

              <nav className="hidden items-center lg:flex">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={item.href === "/" ? toTop : undefined}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 text-body-sm font-medium transition-colors duration-300",
                        active
                          ? "bg-surface text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex shrink-0 items-center gap-2">
                <Button
                  variant="primary"
                  size="default"
                  className="hidden sm:inline-flex"
                  asChild
                >
                  <Link href="/contact">Let&apos;s talk</Link>
                </Button>
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-surface lg:hidden"
                >
                  {open ? (
                    <IconClose className="size-5" />
                  ) : (
                    <IconMenu className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Holds the space the pill vacated, so the page doesn't slide up
            underneath it. */}
        <div aria-hidden className="hidden lg:block lg:h-16" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="wrap flex h-full flex-col justify-between pb-10">
              {/* Same height and no top padding, so the mark and the button
                  land exactly where they sit in the bar behind this. */}
              <div className="flex h-18 shrink-0 items-center justify-between md:h-20">
                <Link
                  href="/"
                  aria-label="Mx Solution — home"
                  onClick={() => {
                    setOpen(false);
                    toTop();
                  }}
                  className="shrink-0"
                >
                  <Wordmark />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-surface"
                >
                  <IconClose className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col">
                {nav.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <MotionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        if (item.href === "/") toTop();
                      }}
                      aria-current={active ? "page" : undefined}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.05,
                        duration: 0.4,
                        ease: EASE,
                      }}
                      className="flex items-center justify-between gap-4 border-b border-border py-5 text-title"
                    >
                      {item.label}
                      {/* A dot rather than a colour change — at this size,
                          greying the other five reads as disabled. */}
                      {active && (
                        <span
                          aria-hidden
                          className="size-2 shrink-0 rounded-full bg-primary"
                        />
                      )}
                    </MotionLink>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Let&apos;s talk
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
