"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Taher Mahudawala",
    role: "Gujarat Food Products",
    quote:
      "They delivered exactly what we had in mind, on budget, and super clean. Highly impressed!",
    rating: 5,
  },
  {
    name: "Sagar Kahar",
    role: "Sk Attire Hub",
    quote:
      "Got everything up and running within a month—products, payments, everything! Would definitely recommend!",
    rating: 5,
  },
  {
    name: "Vishal Sahetai",
    role: "Vishaka Fashion",
    quote:
      "They really boosted our online presence. The team was professional and very responsive.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-24 text-center">
          <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Words from our{" "}
            <span className="text-muted-foreground">clients</span>
          </h2>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <div
                className={`p-8 rounded-2xl border border-border bg-card h-full flex flex-col ${
                  index === 1 ? "md:-translate-y-8" : ""
                }`}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed mb-8 flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <span className="font-display font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
