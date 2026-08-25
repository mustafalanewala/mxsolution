import Link from "next/link";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal, Section } from "@/components/site/primitives";

/**
 * How every second-level page ends. Centred, on white, above a hairline —
 * the only centred block on the site, which is what makes it read as a
 * stop rather than one more section to scroll past.
 *
 * Two ways out: the form for people who want to write it down, WhatsApp
 * for the ones who won't.
 */
export function ClosingCta({
  heading,
  cta = "Let's talk",
  href = "/contact",
}: {
  heading: string;
  cta?: string;
  /** Where the primary button goes — the booking link on some pages */
  href?: string;
}) {
  const external = href.startsWith("http");

  return (
    // Bleed, so the rule runs the full width of the viewport rather than
    // stopping at the container gutter — and no top padding, so it sits
    // flush against the section above it.
    <Section bleed className="pt-0 pb-14 md:pb-16">
      <div className="border-t border-border" />
      <div className="wrap flex flex-col items-center pt-12 text-center md:pt-14">
        <Reveal>
          <h2 className="max-w-4xl text-headline">{heading}</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-4 max-w-2xl text-lead text-muted-foreground">
            Tell us what&apos;s not working — you&apos;ll get a straight answer
            before anyone talks about a quote.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg" asChild>
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {cta}
                </a>
              ) : (
                <Link href={href}>{cta}</Link>
              )}
            </Button>
            <Button variant="default" size="lg" asChild>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
