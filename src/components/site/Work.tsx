"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Heading, Reveal, Section } from "@/components/site/primitives";

/**
 * Four projects, one card each. The headline is the outcome rather than
 * the client name, and the single line under it is the result — enough to
 * make the point without retelling the whole engagement here. The full
 * problem → change → outcome story lives on /projects.
 */
export function Work() {
  return (
    <Section id="work">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Heading
          className="text-headline"
          lines={["Problem, solution,", "outcome."]}
        />
        {/* Beside the heading from md up; below the work on a phone, where
            a link to "all projects" before you've seen any is premature. */}
        <Reveal delay={0.15} className="hidden md:block">
          <AllProjects />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={(i % 2) * 0.08}>
            <article className="group">
              <Link
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="frame">
                  <Image
                    src={study.image}
                    alt={`${study.client} — ${study.headline}`}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority={i < 2}
                    className="h-auto w-full"
                  />
                </div>

                <p className="mt-5 text-body-sm text-muted-foreground">
                  {study.client} — {study.sector}
                </p>
                <h3 className="mt-2 text-subtitle">
                  <span className="link-underline">{study.headline}</span>
                </h3>
                <p className="mt-3 text-body text-muted-foreground">
                  {study.result}
                </p>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center md:hidden">
        <AllProjects />
      </Reveal>
    </Section>
  );
}

function AllProjects() {
  return (
    <Button variant="outline" size="lg" asChild>
      <Link href="/projects">All projects</Link>
    </Button>
  );
}
