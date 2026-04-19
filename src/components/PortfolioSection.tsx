"use client";

import { useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button";

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
};

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const imageY = useTransform(smooth, [0, 1], [60, -60]);
  const textY = useTransform(smooth, [0, 1], [40, -40]);

  return (
    <Link href={project.link} target="_blank" className="block">
      <div ref={ref} className="group cursor-pointer">
        {/* Image */}
        <div className="overflow-hidden relative mb-6">
          <motion.div
            style={{ y: imageY }}
            className="will-change-transform"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-auto block"
            />
          </motion.div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 z-10">
            <ArrowUpRight className="w-5 h-5 text-background" />
          </div>
        </div>

        {/* Info */}
        <motion.div
          style={{ y: textY }}
          className="flex items-start justify-between gap-4 will-change-transform"
        >
          <div>
            <h3 className="font-display font-semibold text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {project.category}
            </p>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

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

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-40">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="overflow-hidden block"
                >
                  Projects That
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                  className="overflow-hidden block"
                >
                  Speak For Us
                </motion.span>
              </h2>
            </div>
          </div>
        </div>

        {/* Projects Grid - 2x2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <AnimatedSection className="mt-12 md:mt-16 text-center">
          <Link href="/projects">
            <RippleButton variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </RippleButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
