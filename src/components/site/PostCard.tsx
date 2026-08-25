import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/blog";

/**
 * One post, as a card. Used by the index and by the "more writing" strip
 * at the foot of a post, so the two can never drift apart.
 *
 * The whole card is the link — a title-only hit area on a card this size
 * is a target people miss. The cover sits flush to the edges rather than
 * inset, so the card reads as one object.
 */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface"
    >
      <div className="relative aspect-[1.91/1] w-full overflow-hidden border-b border-border bg-surface">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
        />
      </div>

      {/* No tag pills here — they cost a whole row for information the
          title already carries. The arrow rides the meta line instead. */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <time dateTime={post.date} className="label">
              {formatPostDate(post.date)}
            </time>
            <span
              aria-hidden
              className="size-1 rounded-full bg-muted-foreground/40"
            />
            <span className="label">{post.readingMinutes} min read</span>
          </div>
          <span
            aria-hidden
            className="text-body text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          >
            →
          </span>
        </div>

        <h3 className="mt-4 text-subtitle">{post.title}</h3>

        <p className="mt-2.5 line-clamp-2 text-body-sm text-muted-foreground">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
