import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPostDate,
  getPost,
  headingId,
  otherPosts,
  posts,
  tableOfContents,
} from "@/lib/blog";
import { site } from "@/lib/content";
import { Nav } from "@/components/site/Nav";
import { PostCard } from "@/components/site/PostCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ClosingCta } from "@/components/site/ClosingCta";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Heading, Reveal, Section } from "@/components/site/primitives";

type Params = { params: Promise<{ slug: string }> };

/** Every post in the file gets a static route. */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      tags: [...post.tags],
      images: [
        { url: post.image, width: 1200, height: 630, alt: post.imageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const contents = tableOfContents(post);
  const more = otherPosts(post.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${site.url}${post.image}`,
    keywords: post.tags.join(", "),
    articleSection: post.tags[0],
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <main id="main-content">
        {/* ── Masthead ── */}
        <section className="pt-14 pb-10 md:pt-16 lg:pt-28">
          <div className="wrap">
            <Reveal>
              <Link
                href="/blog"
                className="group/back inline-flex items-center gap-2 text-body-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <span
                  aria-hidden
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/back:-translate-x-1"
                >
                  ←
                </span>
                All writing
              </Link>
            </Reveal>

            <ul className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="label rounded-full bg-surface px-3.5 py-2"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* Headline size, not display — a sentence-long title set at
                72px is a wall, not a headline. */}
            <Heading
              as="h1"
              trigger="load"
              className="mt-6 max-w-4xl text-headline"
              lines={[post.title]}
            />

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-5">
                <time dateTime={post.date} className="label">
                  {formatPostDate(post.date)}
                </time>
                <span
                  aria-hidden
                  className="size-1 rounded-full bg-muted-foreground/40"
                />
                <span className="label">{post.readingMinutes} min read</span>
                <span
                  aria-hidden
                  className="size-1 rounded-full bg-muted-foreground/40"
                />
                <span className="label">{site.name}</span>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="frame relative mt-10 aspect-[1.91/1] w-full">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── The piece ── */}
        <Section className="pt-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Contents rides along on desktop and sits above the piece on
                mobile, where a sticky rail would just eat the screen. */}
            {contents.length > 0 && (
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <h2 className="label border-t border-border pt-5">
                    Contents
                  </h2>
                  <ol className="mt-4 flex flex-col gap-3">
                    {contents.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="link-underline text-body-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            )}

            <article className="lg:col-span-8 lg:col-start-5">
              <div className="max-w-2xl">
                {post.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={i}
                        id={headingId(block.text)}
                        className="mt-14 scroll-mt-28 text-title first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={i} className="mt-7 flex flex-col">
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
                    );
                  }

                  // The opening paragraph carries the piece; the rest read
                  // as body, so only the first one gets lead size.
                  return (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-lead"
                          : "mt-6 text-body text-muted-foreground"
                      }
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <span className="label">
                    Written by {site.name} · {site.locality}, {site.region}
                  </span>
                  <Link
                    href="/contact"
                    className="link-underline text-body-sm font-medium"
                  >
                    Recognise the problem? Let&apos;s talk
                  </Link>
                </div>
              </Reveal>
            </article>
          </div>
        </Section>

        {/* ── Keep reading ── */}
        {more.length > 0 && (
          <Section className="pt-0">
            <div className="border-t border-border pt-12 md:pt-14">
              <Heading className="text-headline" lines={["More writing."]} />
              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {more.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.slug}
                    delay={i * 0.06}
                    className="h-full"
                  >
                    <PostCard post={item} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </Section>
        )}

        <ClosingCta heading="Have a problem worth solving?" />
      </main>
      <SiteFooter />
    </SmoothScroll>
  );
}
