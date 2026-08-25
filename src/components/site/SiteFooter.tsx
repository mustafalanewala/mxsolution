import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Wordmark } from "@/components/site/Wordmark";

/**
 * Deliberately thin: who we are, where to find us, where to go next.
 * A footer that repeats the whole site is a sitemap, not a close.
 */

type FooterItem = { label: string; href?: string; external?: boolean };

/**
 * Pages on the left, ways to reach us on the right. Home is dropped — the
 * wordmark directly above already goes there, and a footer link to the
 * page you can always get to is filler.
 */
const columns: FooterItem[][] = [
  nav.filter((item) => item.href !== "/"),
  [
    { label: `${site.locality}, ${site.region} — ${site.country}` },
    { label: "WhatsApp", href: site.whatsapp, external: true },
    { label: "Book a call", href: site.booking, external: true },
  ],
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ink-block border-t border-border">
      {/* Bottom padding stays short — the copyright is the last line of
          the page, not a block that needs room under it. */}
      <div className="wrap pt-14 pb-6 md:pt-16 md:pb-7">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Who ── */}
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-sm text-body text-muted-foreground">
              {site.blurb}
            </p>
            <div className="mt-7 flex items-center gap-6">
              <FooterLink href={site.social.instagram} external>
                Instagram
              </FooterLink>
              <FooterLink href={site.social.linkedin} external>
                LinkedIn
              </FooterLink>
            </div>
          </div>

          {/* ── Where ── */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 lg:col-span-5 lg:col-start-8"
          >
            {columns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-3">
                {column.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <FooterLink href={item.href} external={item.external}>
                        {item.label}
                      </FooterLink>
                    ) : (
                      <span className="text-body-sm text-muted-foreground">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-6 sm:order-2">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </div>
          <p className="label sm:order-1">
            © {year} {site.name} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="link-underline text-body-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
