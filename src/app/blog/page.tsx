import { posts } from "@/lib/blog";
import { site } from "@/lib/content";
import { Nav } from "@/components/site/Nav";
import { PostCard } from "@/components/site/PostCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ClosingCta } from "@/components/site/ClosingCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ArrowLink, PageHeader, Reveal, Section } from "@/components/site/primitives";

/**
 * Reads the array in src/lib/blog.ts. The empty branch is kept rather than
 * deleted — it's what the page falls back to if the file is ever emptied,
 * and an empty shelf beats a broken grid.
 */
export default function BlogPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <PageHeader
          lines={["Notes on the problems", "behind the builds."]}
          intro="Search visibility, conversion, automation and custom software — what actually moves a business, and what only looks like it does."
        />

        <Section>
          {posts.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal
                  as="li"
                  key={post.slug}
                  delay={(i % 3) * 0.06}
                  className="h-full"
                >
                  <PostCard post={post} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal>
              <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-surface p-10 md:p-14">
                <p className="max-w-xl text-title">
                  Nothing published yet — the first pieces are being written.
                </p>
                <p className="max-w-xl text-body text-muted-foreground">
                  They&apos;ll cover the same ground the work does: why a site
                  nobody finds isn&apos;t a design problem, what actually
                  separates traffic from enquiries, and where the hours leak in
                  a business that runs on spreadsheets.
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <ArrowLink href={site.social.linkedin} external>
                    Follow along on LinkedIn
                  </ArrowLink>
                  <ArrowLink href="/projects">Read the work instead</ArrowLink>
                </div>
              </div>
            </Reveal>
          )}
        </Section>

        <ClosingCta heading="Have a problem worth solving?" />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
