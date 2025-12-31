"use client";

import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Founder */}
          <AnimatedSection>
            <div className="relative">
              {/* Image Placeholder */}
              <div className="aspect-4/5 md:aspect-square rounded-3xl bg-card border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
                      <span className="font-display font-bold text-3xl text-foreground">
                        ML
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <Button variant="pill" size="icon" asChild>
                      <a
                        href="https://instagram.com/mustafa.lanewala"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="pill" size="icon" asChild>
                      <a
                        href="https://linkedin.com/in/mustafa-lanewala-m2004"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="pill" size="icon" asChild>
                      <a
                        href="https://github.com/mustafalanewala"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Founder & CEO
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div className="lg:sticky lg:top-32">
            <AnimatedText>
              <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
                About Mx Solution
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
                The Multiplier Mindset
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Mx Solution was built on a simple belief: technology should do
                more than work — it should multiply impact. We help brands
                transform ideas into scalable digital systems designed for
                maximum performance and real business results.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.25}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our approach blends strategic thinking with full-stack
                execution, covering web platforms, mobile applications,
                e-commerce systems, and AI-powered solutions. Every product we
                build is treated as a system, not a feature — optimized for
                clarity, speed, and growth from day one.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <blockquote className="border-l-2 border-primary pl-6 mb-8">
                <p className="text-foreground/80 italic text-lg">
                  "We don't just deliver projects — we create foundations for
                  long-term success."
                </p>
              </blockquote>
            </AnimatedText>

            {/* Animated Stats Counter
            <div className="grid grid-cols-2 gap-8 mb-8">
              <AnimatedCounter end={50} suffix="+" label="Projects Delivered" />
              <AnimatedCounter end={30} suffix="+" label="Happy Clients" />
            </div> */}

            <AnimatedText delay={0.5}>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Work with us
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
