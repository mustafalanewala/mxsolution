"use client";

import { motion } from "framer-motion";
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
    <section id="faq" className="pt-16 pb-24 md:pt-24 md:pb-40 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-6 text-white">
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden block"
              >
                Questions?
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="overflow-hidden block"
              >
                We've Got Answers
              </motion.span>
            </h2>
            <AnimatedSection delay={0.2}>
              <p className="text-neutral-400 text-lg">
                Can't find what you're looking for? Reach out to us directly.
              </p>
            </AnimatedSection>
          </div>

          {/* Right - Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-base md:text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
