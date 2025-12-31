"use client";

import { useState } from "react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Palette,
  Brain,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies. Fast, responsive, and conversion-focused.",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Online stores that sell. Complete with inventory, payments, and analytics.",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps that users love and businesses rely on.",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description:
      "Visual identities that stand out. Logos, UI/UX, and marketing materials.",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Smart automation and AI-powered features to scale your operations.",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="services"
      className="section-padding bg-card"
      onMouseMove={handleMouseMove}
    >
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
                What We Do
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Services built for
                <br />
                <span className="text-muted-foreground">modern brands</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg">
              We offer end-to-end digital solutions to help your business grow
              and thrive in the digital age.
            </p>
          </div>
        </AnimatedSection>

        {/* Services List */}
        <StaggerContainer className="space-y-2">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div
                className="group border-b border-border py-8 md:py-10 cursor-pointer relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-6 md:gap-12">
                  {/* Number */}
                  <span className="text-sm text-muted-foreground font-mono w-8">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base max-w-lg hidden md:block">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Floating Image Popup */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: mousePosition.x - 200,
                y: mousePosition.y - 150,
              }}
              exit={{ opacity: 0, scale: 0.6, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.5,
              }}
              className="fixed pointer-events-none z-50 hidden md:block"
              style={{ left: 0, top: 0 }}
            >
              <motion.div
                className="relative w-72 h-52 rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Liquid blob effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    borderRadius: [
                      "30% 70% 70% 30% / 30% 30% 70% 70%",
                      "70% 30% 30% 70% / 70% 70% 30% 30%",
                      "30% 70% 70% 30% / 30% 30% 70% 70%",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image */}
                <img
                  src={services[hoveredIndex].image}
                  alt={services[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

                {/* Service title badge */}
                <motion.div
                  className="absolute bottom-3 left-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {services[hoveredIndex].title}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
