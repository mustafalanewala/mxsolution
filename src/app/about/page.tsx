import Image from "next/image";
import { approach, philosophy } from "@/lib/content";
import { approachIcons } from "@/components/site/icons";
import { Nav } from "@/components/site/Nav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ClosingCta } from "@/components/site/ClosingCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Heading, Reveal, Section } from "@/components/site/primitives";

/** The one image on this page. Null renders an empty frame rather than
    collapsing the layout, so it can be swapped or removed safely. */
const openingImage: { src: string; alt: string } | null = {
  src: "/about/business-problem-diagnosis.webp",
  alt: "A desk seen from above: a laptop showing a dashboard, a notebook with a hand-drawn flow diagram, a phone with a chat thread, and a magnifier over one marked line of a printed report.",
};

/**
 * Short on prose by design. The homepage already argues the case — this
 * page shows the shape of it: one statement, three refusals, five steps.
 */
export default function AboutPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        {/* ── The opening ──
            Same beat as every other page. The headline is top aligned so
            it starts exactly where /solutions and /blog start; the image
            centres itself against it instead of dragging the row down. */}
        <section className="pt-14 pb-12 md:pt-16 md:pb-14 lg:pt-28 lg:pb-16">
          <div className="wrap">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Heading
                  as="h1"
                  trigger="load"
                  className="text-display"
                  lines={["We start with the", "business, not", "the stack."]}
                  accent={2}
                />
                <Reveal delay={0.25}>
                  <p className="mt-7 max-w-xl text-lead text-muted-foreground">
                    So the first thing you get is a diagnosis, not a proposal.
                    Sometimes it points at a build, sometimes at fixing what
                    you already have, and sometimes at nothing at all.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.3} className="lg:col-span-5 lg:self-center">
                <div className="frame aspect-[4/3] w-full">
                  {openingImage && (
                    <Image
                      src={openingImage.src}
                      alt={openingImage.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── The refusals ── */}
        <Section>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {philosophy.map((line, i) => (
              <Reveal
                key={line}
                delay={i * 0.06}
                className="flex flex-col bg-background p-8 md:p-9"
              >
                <span className="label tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 text-subtitle">{line}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── The method ── */}
        <Section ink>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading className="text-headline" lines={["How the work runs."]} />
            <Reveal delay={0.15}>
              <p className="max-w-lg text-lead text-muted-foreground">
                Five steps, in order. The first two are the ones that get
                skipped — and they decide everything after.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-14 md:grid-cols-2 xl:grid-cols-5">
            {approach.map((step, i) => {
              const Glyph = approachIcons[step.icon];
              return (
                <Reveal
                  key={step.title}
                  delay={i * 0.06}
                  className="group flex flex-col bg-[hsl(var(--ink))] p-7 md:p-8"
                >
                  <Glyph className="size-7 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" />
                  <h2 className="mt-6 text-subtitle">{step.title}</h2>
                  <p className="mt-2 text-body-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <ClosingCta heading="Tell us what isn't working." />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
