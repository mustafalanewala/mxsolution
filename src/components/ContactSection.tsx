"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { SectionHeading, Accent } from "@/components/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // No backend needed — the form opens WhatsApp with the message prefilled
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Mx Solution, I'm ${formData.name}${
        formData.phone ? ` (${formData.phone})` : ""
      }.\n\n${formData.message}`,
    );
    window.open(`https://wa.me/919157302004?text=${text}`, "_blank");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section bg-background text-foreground border-t border-border overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <SectionHeading
          eyebrow="Contact"
          lines={[
            <>
              Let&apos;s <Accent>multiply</Accent>
            </>,
            <>something.</>,
          ]}
          className="mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
          {/* Left — channels */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatedSection>
              <p className="text-lead text-muted-foreground max-w-md mb-10">
                Have a project in mind? Tell us about it — we reply within a
                day, usually much faster.
              </p>
            </AnimatedSection>

            <div className="border-t border-border">
              <ContactRow
                label="WhatsApp"
                value="Chat instantly"
                href="https://wa.me/919157302004?text=Hi%20Mx%20Solution%2C%20I%20want%20to%20discuss%20a%20project"
                icon={<MessageCircle className="w-4 h-4" />}
                delay={0.05}
              />
              <ContactRow
                label="Phone"
                value="+91 91573 02004"
                href="tel:+919157302004"
                icon={<Phone className="w-4 h-4" />}
                delay={0.1}
              />
              <ContactRow
                label="Location"
                value="Dohad, Gujarat, India"
                icon={<MapPin className="w-4 h-4" />}
                delay={0.15}
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-start-7 lg:col-span-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <FormInput
                  label="Name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(v) => setFormData({ ...formData, name: v })}
                  required
                  delay={0.1}
                />
                <FormInput
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                  delay={0.15}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
                className="relative group"
              >
                <label className="eyebrow mb-3 block group-focus-within:text-foreground transition-colors duration-300">
                  Project
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border pb-3 text-lead text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.25 }}
              >
                <Button
                  type="submit"
                  size="xl"
                  className="w-full justify-between [&_svg]:size-5"
                >
                  Send via WhatsApp
                  <ArrowUpRight />
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  delay,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease, delay }}
      className="relative group"
    >
      <label className="eyebrow mb-3 block group-focus-within:text-foreground transition-colors duration-300">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-border pb-3 text-lead text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-500"
      />
    </motion.div>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
  delay,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  delay: number;
}) {
  const content = (
    <div className="flex items-center justify-between gap-4 py-5 border-b border-border group cursor-pointer">
      <div className="flex items-center gap-5 min-w-0">
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="font-mono text-label uppercase text-muted-foreground">
            {label}
          </div>
          <div className="truncate text-body font-medium text-foreground mt-0.5">
            {value}
          </div>
        </div>
      </div>
      {href && (
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-300 shrink-0" />
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {href ? (
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="block"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  );
}
