"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and target audience to understand exactly what you need.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a roadmap with clear milestones, tech stack decisions, and design direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers craft pixel-perfect interfaces that balance aesthetics with functionality.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build with clean, scalable code using the latest technologies and best practices.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support to ensure continued success.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-24">
          <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
            How We Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            A process designed for{" "}
            <span className="text-muted-foreground">clarity and results</span>
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="p-8 rounded-2xl border border-border bg-background h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl md:text-5xl font-display font-bold text-primary/60">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}

          {/* Last two items centered */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
            {steps.slice(3).map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="p-8 rounded-2xl border border-border bg-background h-full flex-1 max-w-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl md:text-5xl font-display font-bold text-primary/60">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
