import { services, solutions } from "@/lib/content";
import { serviceIcons } from "@/components/site/icons";
import { Nav } from "@/components/site/Nav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ClosingCta } from "@/components/site/ClosingCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SmoothScroll } from "@/components/SmoothScroll";
import {
  Heading,
  PageHeader,
  Reveal,
  Section,
} from "@/components/site/primitives";

/**
 * Concrete first. Anyone landing here is asking "do you do the thing I
 * need?" — so the twelve named services answer that above the fold-ish,
 * and the outcome framing follows as the reason they add up, rather than
 * standing in front of the list as a riddle.
 */
export default function SolutionsPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <PageHeader
          lines={["Everything we build,", "and what it fixes."]}
          intro="Websites, custom software, automation, integrations and the search work that makes any of it findable. If what you need isn't named here, it's usually a combination of two things that are."
        />

        {/* ── The list ── */}
        <Section>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => {
              const Glyph = serviceIcons[service.icon];
              return (
                <Reveal
                  key={service.id}
                  delay={(i % 3) * 0.05}
                  className="group flex scroll-mt-32 flex-col bg-background p-7 md:p-8"
                >
                  <Glyph className="size-7 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" />

                  <h2 id={service.id} className="mt-6 scroll-mt-32 text-subtitle">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 text-body-sm text-muted-foreground">
                    {service.summary}
                  </p>

                  <ul className="mt-auto flex flex-col pt-7">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-border py-2.5 text-body-sm last:pb-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* ── Why any of it ── */}
        <Section ink>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading
              className="text-headline"
              lines={["What it all adds", "up to."]}
            />
            <Reveal delay={0.15}>
              <p className="max-w-sm text-lead text-muted-foreground">
                Nobody buys a stack. These are the six results the work above
                is bought for.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-16 md:mt-14 md:grid-cols-2">
            {solutions.map((solution, i) => (
              <Reveal
                key={solution.id}
                delay={(i % 2) * 0.06}
                className="flex flex-col gap-2 border-t border-border py-7 md:gap-3"
              >
                <span className="label tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-subtitle">{solution.title}</h3>
                <p className="max-w-md text-body text-muted-foreground">
                  {solution.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        <ClosingCta heading="Not sure which of these you need?" />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
