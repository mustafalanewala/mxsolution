"use client";

import Image from "next/image";
import { philosophy } from "@/lib/content";
import { Heading, Reveal, Section } from "@/components/site/primitives";

/** Null renders an empty frame rather than collapsing the layout, so this
    can be swapped for a photograph later without touching the markup. */
const studioImage: string | null = "/about/mx-solution-studio-dohad.webp";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ── The belief ── */}
        <div className="lg:col-span-6">
          <Heading
            className="text-headline"
            lines={[
              "Technology is not the",
              "solution. The right",
              "technology is.",
            ]}
            accent={2}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-lead text-muted-foreground">
              A technology partner for businesses that need something more
              specific than an off-the-shelf answer.
            </p>
            <ul className="mt-8 flex flex-col">
              {philosophy.map((line) => (
                <li
                  key={line}
                  className="border-t border-border py-4 text-body last:border-b"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── The studio ── */}
        <Reveal delay={0.1} className="lg:col-span-6">
          <figure>
            <div className="frame aspect-[4/3] w-full">
              {studioImage && (
                <Image
                  src={studioImage}
                  alt="Illustration of a small studio: two desks with laptops, a whiteboard carrying a flow diagram, a window and plants."
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              )}
            </div>
            {/* The image is a drawing, not a photograph of the room, so the
                caption states where we work rather than captioning a record. */}
            <figcaption className="mt-4 text-body-sm text-muted-foreground">
              Working from Dohad, Gujarat — with businesses across India.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
