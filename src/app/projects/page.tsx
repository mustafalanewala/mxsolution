"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TextReveal } from "@/components/TextReveal";

// Project images - using public paths
const allProjects = [
  {
    title: "Valor Jets",
    category: "Web Development",
    year: "2024",
    image: "/projects/valor-jets.png",
    description:
      "Private aviation booking platform with premium luxury design and seamless flight reservations.",
  },
  {
    title: "Aether Construction",
    category: "Web Development",
    year: "2024",
    image: "/projects/aether-construction.png",
    description:
      "Modern construction company website with 3D visualization and project showcases.",
  },
  {
    title: "Fuoco Pizzeria",
    category: "Web Development",
    year: "2024",
    image: "/projects/fuoco-pizzeria.png",
    description:
      "Elegant restaurant website with menu showcase and reservation system.",
  },
  {
    title: "Aura Skins",
    category: "E-commerce",
    year: "2024",
    image: "/projects/aura-skins.png",
    description:
      "Premium skincare brand e-commerce with minimalist aesthetic and product discovery.",
  },
  {
    title: "Mubarak Collection",
    category: "E-commerce",
    year: "2024",
    image: "/projects/mubarak-collection.webp",
    description:
      "Premium Dawoodi Bohra Topis crafted with tradition since 2011.",
  },
  {
    title: "Gujarat Food Products",
    category: "Web Development",
    year: "2024",
    image: "/projects/gujarat-food.webp",
    description:
      "Authentic Makai Poha manufacturer - naturally grown, perfectly processed.",
  },
  {
    title: "SK Attire Hub",
    category: "E-commerce",
    year: "2024",
    image: "/projects/sk-attire.webp",
    description:
      "Modern fashion e-commerce platform - step up your style game.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container-wide">
          {/* Header */}
          <AnimatedSection className="mb-16 md:mb-24">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
                  All Projects
                </span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight">
                  <TextReveal>Our Complete</TextReveal>
                  <br />
                  <span className="text-muted-foreground">
                    <TextReveal>Portfolio</TextReveal>
                  </span>
                </h1>
              </div>
              <p className="text-muted-foreground max-w-md">
                Explore our full collection of projects across web development,
                e-commerce, branding, and digital marketing.
              </p>
            </div>
          </AnimatedSection>

          {/* Projects Grid - 2x2 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {allProjects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  {/* Image Area - 16:8 aspect ratio for full website view */}
                  <div className="aspect-16/8 rounded-2xl border border-border mb-6 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-background" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-mono shrink-0">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.category}
                    </p>
                    <p className="text-sm text-muted-foreground/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
