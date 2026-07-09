"use client";

import { useRef } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const allProjects = [
  {
    title: "Valor Jets",
    category: "Web Development",
    image: "/projects/valor.png",
    description:
      "Private aviation booking platform with premium luxury design and seamless flight reservations.",
    link: "https://valor-jets.vercel.app",
  },
    {
    title: "SK Attire Hub",
    category: "E-commerce",
    image: "/projects/sk.png",
    description:
      "Modern fashion e-commerce platform - step up your style game.",
    link: "https://skattirehub.in",
  },
  {
    title: "Guidance Tamil Nadu",
    category: "Web Development",
    image: "/projects/guidance.png",
    description: "Official investment portal for Guidance Tamil Nadu.",
    link: "https://investingintamilnadu.com",
  },
  {
    title: "Mubarak Collection",
    category: "E-commerce",
    image: "/projects/mubarak-collection.webp",
    description:
      "Premium Dawoodi Bohra Topis crafted with tradition since 2011.",
    link: "https://www.mubarakcollection.in",
  },
  {
    title: "Gujarat Food Products",
    category: "Web Development",
    image: "/projects/gujarat-food.webp",
    description:
      "Authentic Makai Poha manufacturer - naturally grown, perfectly processed.",
    link: "https://www.gujaratfoodproducts.in",
  },
  {
    title: "Aetherial Reality",
    category: "Web Development",
    image: "/projects/aether.png",
    description:
      "Modern construction company website with 3D visualization and project showcases.",
    link: "https://aetherial-reality.vercel.app",
  },
  {
    title: "Tropic UK",
    category: "Web Development",
    image: "/projects/tropic.png",
    description:
      "Tropical fashion and lifestyle brand website with modern design and product showcases.",
    link: "https://tropic-uk.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-32">
          <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm font-mono uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="font-display font-black text-[clamp(2.6rem,12vw,4.75rem)] md:text-8xl lg:text-[9vw] leading-[0.92] tracking-tight uppercase [font-stretch:118%]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                Projects
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="block text-muted-foreground"
              >
                &amp;{" "}
                <span className="headline-accent text-[1.05em]">
                  playgrounds
                </span>
              </motion.span>
            </h1>

            <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-start-7 lg:col-span-6"
              >
                <p className="text-xl md:text-2xl font-light leading-snug text-muted-foreground">
                  A collection of digital systems we've crafted across web, commerce, and brand.{" "}
                  <span className="text-foreground font-medium">
                    Each one built as a foundation, not a feature.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project list */}
        <section className="pb-14 md:pb-20">
          {allProjects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof allProjects)[number];
  index: number;
}) {
  const isMobile = useIsMobile();
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

  const imageY = useTransform(smooth, [0, 1], [90, -90]);
  const textY = useTransform(smooth, [0, 1], [160, -160]);
  const opacity = useTransform(smooth, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);
  const mobileImageY = useTransform(smooth, [0, 1], [24, -24]);
  const mobileTextY = useTransform(smooth, [0, 1], [36, -36]);
  const mobileOpacity = useTransform(smooth, [0, 0.15, 0.85, 1], [0.8, 1, 1, 0.8]);

  const isOdd = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      style={{ opacity: isMobile ? mobileOpacity : opacity }}
      className="border-t border-border py-10 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center ${
            isOdd ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* 1. IMAGE COLUMN */}
          <div className="lg:col-span-7 overflow-hidden relative">
            <motion.div
              style={{ y: isMobile ? mobileImageY : imageY }}
              className="will-change-transform"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1600}
                height={1000}
                className="w-full h-auto block"
              />
            </motion.div>
          </div>

          {/* 2. TEXT COLUMN */}
          <motion.div
            style={{ y: isMobile ? mobileTextY : textY }}
            className="lg:col-span-5 flex flex-col gap-6 relative z-10 will-change-transform"
          >
            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
            <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] leading-[0.95] tracking-tight uppercase [font-stretch:118%]">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              {project.description}
            </p>
            <Button variant="outline" className="w-fit" asChild>
              <Link href={project.link} target="_blank">
                View live
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}