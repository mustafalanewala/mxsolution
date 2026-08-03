"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading, Accent } from "@/components/SectionHeading";

const projects = [
  {
    title: "Valor Jets",
    category: "Web Development",
    image: "/projects/valor.png",
    link: "https://valor-jets.vercel.app",
  },
  {
    title: "SK Attire Hub",
    category: "E-commerce",
    image: "/projects/sk.png",
    link: "https://skattirehub.in",
  },
  {
    title: "Mubarak Collection",
    category: "E-commerce",
    image: "/projects/mubarak-collection.webp",
    link: "https://www.mubarakcollection.in",
  },
  {
    title: "Guidance Tamil Nadu",
    category: "Web Development",
    image: "/projects/guidance.png",
    link: "https://investingintamilnadu.com",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function PortfolioSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const placed = useRef(false);

  // Cursor-following preview window
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 190, damping: 26, mass: 0.7 });
  const py = useSpring(my, { stiffness: 190, damping: 26, mass: 0.7 });

  // Position the preview at the pointer. The first placement jumps (no
  // spring) so the window can't fly in from the top-left corner — which is
  // what happened when a row scrolled under a stationary cursor.
  const setPos = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (!placed.current) {
      px.jump(x);
      py.jump(y);
      placed.current = true;
    }
    mx.set(x);
    my.set(y);
  };

  const enterRow = (e: React.MouseEvent, i: number) => {
    setPos(e);
    setHovered(i);
  };

  const leave = () => {
    setHovered(null);
    placed.current = false;
  };

  return (
    <section id="portfolio" className="section bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected work"
            lines={[
              <>Work that</>,
              <>
                <Accent>speaks</Accent> for us
              </>,
            ]}
          />
          <Button
            variant="outline"
            className="hidden md:inline-flex mb-2"
            asChild
          >
            <Link href="/projects">
              All projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* ── Desktop: index rows + floating preview ── */}
        <div
          ref={containerRef}
          onMouseMove={setPos}
          onMouseLeave={leave}
          className="relative hidden md:block border-t border-border"
        >
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              onMouseEnter={(e) => enterRow(e, i)}
              className="group relative block border-b border-border overflow-hidden"
            >
              {/* Ink fill sweeping up on hover */}
              <div className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              <div className="relative flex items-center justify-between gap-6 py-8 lg:py-10 px-2 lg:px-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
                <div className="flex items-baseline gap-6 lg:gap-10 min-w-0">
                  <span className="font-mono text-label text-muted-foreground group-hover:text-background/60 transition-colors duration-500 shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-black uppercase text-display-lg [font-stretch:118%] text-outline group-hover:text-background group-hover:[-webkit-text-stroke:0px] transition-colors duration-500 truncate">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <span className="font-mono text-label uppercase text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-background transition-all duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          ))}

          {/* Floating image preview following the cursor.
              Images are stacked and crossfaded on opacity (no mount churn),
              and object-contain keeps every screenshot fully visible. */}
          <motion.div
            style={{ x: px, y: py }}
            className="pointer-events-none absolute left-0 top-0 z-20 will-change-transform"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 w-[19rem] lg:w-[24rem]">
              <AnimatePresence mode="popLayout">
                {hovered !== null && (
                  <motion.div
                    key={hovered}
                    initial={{
                      opacity: 0,
                      scale: 0.55,
                      rotate: -4,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.88,
                      rotate: 2,
                      filter: "blur(8px)",
                    }}
                    transition={{ duration: 0.55, ease }}
                    className="border border-border shadow-[var(--shadow-soft)] leading-none will-change-transform"
                  >
                    <Image
                      src={projects[hovered].image}
                      alt={projects[hovered].title}
                      width={1600}
                      height={1000}
                      sizes="24rem"
                      className="w-full h-auto block"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="md:hidden flex flex-col gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <Link href={project.link} target="_blank" className="block group">
                <div className="overflow-hidden border border-border mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-black uppercase text-display-sm [font-stretch:118%]">
                      {project.title}
                    </h3>
                    <p className="font-mono text-label uppercase text-muted-foreground mt-1">
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}

          <Button variant="outline" className="self-start" asChild>
            <Link href="/projects">
              All projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
