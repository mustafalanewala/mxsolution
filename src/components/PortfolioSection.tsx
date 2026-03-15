"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button";

const projects = [
  {
    title: "Valor Jets",
    category: "Web Development",
    year: "2025",
    image: "/projects/valor.png",
    link: "https://valor-jets.vercel.app",
  },
  {
    title: "Aetherial Reality",
    category: "Web Development",
    year: "2025",
    image: "/projects/aether.png",
    link: "https://aetherial-reality.vercel.app",
  },
  {
    title: "Mubarak Collection",
    category: "E-commerce",
    year: "2025",
    image: "/projects/mubarak-collection.webp",
    link: "https://www.mubarakcollection.in",
  },
  {
    title: "Guidance Tamil Nadu",
    category: "Web Development",
    year: "2025",
    image: "/projects/guidance.png",
    link: "https://investingintamilnadu.com",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
                Selected Work
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Projects that
                <br />
                <span className="text-muted-foreground">speak for us</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid - 2x2 */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Link href={project.link} target="_blank" className="block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  {/* Image Area - Custom aspect ratio for website view */}
                  <div className="aspect-16/8 rounded-2xl border border-border mb-6 relative overflow-hidden bg-muted/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-background" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

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
