import Image from "next/image";
import Link from "next/link";
import { caseStudies, concepts, site } from "@/lib/content";
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

type Card = {
  key: string;
  title: string;
  client: string;
  sector: string;
  image: string;
  link: string;
  line: string;
  tags: readonly string[];
};

const clientWork: Card[] = caseStudies.map((study) => ({
  key: study.slug,
  title: study.headline,
  client: study.client,
  sector: study.sector,
  image: study.image,
  link: study.link,
  line: study.result,
  tags: study.tags,
}));

const conceptWork: Card[] = concepts.map((concept) => ({
  key: concept.title,
  title: concept.title,
  client: concept.title,
  sector: concept.sector,
  image: concept.image,
  link: concept.link,
  line: concept.description,
  tags: concept.tags,
}));

/**
 * Two lists, never one. Client work carries an outcome because there was a
 * business on the other side of it; the concepts are self-initiated builds
 * and are labelled as such rather than quietly padding the grid.
 */
export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <PageHeader
          lines={["Everything here started", "as a business problem."]}
          intro="Not a design brief, not a technology choice. Where a result isn't measured, we describe what changed rather than invent a number for it."
        />

        <Section>
          <WorkGrid items={clientWork} priority />
        </Section>

        <Section className="pt-0">
          <div className="border-t border-border pt-14 md:pt-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Heading className="text-headline" lines={["Concepts."]} />
              <Reveal delay={0.15}>
                <p className="max-w-lg text-lead text-muted-foreground">
                  Self-initiated builds — no client, no brief. Here to show how
                  we design and build.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 md:mt-14">
              <WorkGrid items={conceptWork} />
            </div>
          </div>
        </Section>

        <ClosingCta
          heading="Have a problem worth solving?"
          cta="Book a call"
          href={site.booking}
        />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </SmoothScroll>
  );
}

function WorkGrid({
  items,
  priority = false,
}: {
  items: Card[];
  priority?: boolean;
}) {
  return (
    <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-16">
      {items.map((item, i) => (
        <Reveal key={item.key} delay={(i % 2) * 0.08}>
          <article className="group flex h-full flex-col">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col"
            >
              <div className="frame">
                <Image
                  src={item.image}
                  alt={`${item.client} — ${item.sector}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority={priority && i < 2}
                  className="h-auto w-full"
                />
              </div>
              <p className="label mt-6">{item.sector}</p>
              <h2 className="mt-3 text-subtitle">
                <span className="link-underline">{item.title}</span>
              </h2>
              <p className="mt-3 text-body text-muted-foreground">
                {item.line}
              </p>
              {item.tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="label rounded-full bg-surface px-3.5 py-2"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
