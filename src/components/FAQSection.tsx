"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital solutions including web development, e-commerce platforms, mobile app development, UI/UX design, branding, and AI integration. Every project is tailored to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex e-commerce platforms or apps may take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing based on project scope and requirements. We provide detailed quotes after understanding your needs during the discovery phase. Contact us for a free consultation and custom quote.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer 24/7 support and maintenance packages to ensure your digital products run smoothly. This includes regular updates, security patches, and technical assistance.",
  },
  {
    question: "Can you work with existing designs or systems?",
    answer:
      "Absolutely. We can work with existing brand guidelines, designs, or systems. We're also experienced in redesigning and improving existing platforms while maintaining brand consistency.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <AnimatedSection>
            <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              Questions?
              <br />
              <span className="text-muted-foreground">We've got answers</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Can't find what you're looking for? Reach out to us directly.
            </p>
          </AnimatedSection>

          {/* Right - Accordion */}
          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:bg-background"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-base md:text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
