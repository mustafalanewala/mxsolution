import { formatLegalDate, type LegalDoc } from "@/lib/legal";
import { Nav } from "@/components/site/Nav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Heading, Reveal, Section } from "@/components/site/primitives";

/**
 * Both legal pages, rendered from one shape. A contents rail rather than
 * a wall — nobody reads these top to bottom, they arrive looking for one
 * clause.
 *
 * No closing CTA here on purpose: a page someone opened to check what you
 * do with their data is not the place to sell them something.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <section className="pt-14 pb-10 md:pt-16 lg:pt-28">
          <div className="wrap">
            <Heading
              as="h1"
              trigger="load"
              className="max-w-3xl text-headline"
              lines={[doc.title]}
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
                {doc.summary}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 border-t border-border pt-5">
                <span className="label">
                  Last updated {formatLegalDate(doc.updated)}
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        <Section className="pt-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <h2 className="label border-t border-border pt-5">Contents</h2>
                <ol className="mt-4 flex flex-col gap-3">
                  {doc.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="link-underline text-body-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <article className="lg:col-span-8 lg:col-start-5">
              <div className="max-w-2xl">
                {doc.sections.map((section, i) => (
                  <section key={section.id} className={i === 0 ? "" : "mt-14"}>
                    <h2
                      id={section.id}
                      className="scroll-mt-28 text-title"
                    >
                      {section.heading}
                    </h2>

                    {section.blocks.map((block, b) =>
                      block.type === "list" ? (
                        <ul key={b} className="mt-6 flex flex-col">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-4 border-t border-border py-3.5 text-body text-muted-foreground last:border-b"
                            >
                              <span
                                aria-hidden
                                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          key={b}
                          className="mt-5 text-body text-muted-foreground"
                        >
                          {block.text}
                        </p>
                      ),
                    )}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </SmoothScroll>
  );
}
