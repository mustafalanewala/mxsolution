"use client";

import { useState } from "react";
import {
  MapPin,
  ArrowUpRight,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

// Premium Easing Curve
const customEase = [0.76, 0, 0.24, 1] as const;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Something went wrong",
      description: "Please call or WhatsApp us directly at: +91 91573 02004",
      variant: "destructive",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative pt-10 md:pt-16 pb-24 md:pb-32 bg-black text-white overflow-hidden">
      
      {/* Subtle Ambient Background Glow */}

      <div className="container mx-auto px-4 md:px-8 max-w-400 relative z-10">
      

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-t border-white/10 pt-10 md:pt-14">
          
          {/* Left - Info */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: customEase }}
              className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-6 text-white"
            >
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden block"
              >
                Let&apos;s Talk
              </motion.span>
            </motion.h2>
            <AnimatedSection delay={0.2}>
              <p className="text-neutral-400 text-lg max-w-md">
                Have a project in mind? Drop us a message and let's discuss how we can help bring your vision to life.
              </p>
            </AnimatedSection>

            {/* Premium Contact Links */}
            <div className="mt-8 flex flex-col gap-4">
              <ContactRow 
                label="WhatsApp" 
                value="Chat instantly" 
                href="https://wa.me/919157302004?text=Hi%20Mx%20Solution%2C%20I%20want%20to%20discuss%20a%20project"
                icon={<MessageCircle className="w-5 h-5" />}
                delay={0.1}
                highlightColor="group-hover:text-[#25D366]"
              />
              <ContactRow 
                label="Phone" 
                value="+91 91573 02004" 
                href="tel:+919157302004"
                icon={<ArrowUpRight className="w-5 h-5" />}
                delay={0.2}
              />
              <ContactInfoCard
                label="Location"
                value="Dohad, Gujarat, India"
                icon={<MapPin className="w-5 h-5" />}
                delay={0.3}
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="hidden md:block lg:col-start-7 lg:col-span-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 md:gap-9">
              <div className="grid sm:grid-cols-2 gap-7 md:gap-9">
                <FormInput
                  label="Name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                  required
                  delay={0.1}
                />
                <FormInput
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
                  delay={0.2}
                />
              </div>
              
              <FormInput
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                required
                delay={0.3}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: customEase, delay: 0.4 }}
                className="relative group"
              >
                <label className={`text-xs font-mono uppercase tracking-[0.2em] mb-3 block transition-colors duration-300 ${formData.message ? 'text-neutral-600' : 'text-neutral-400 group-focus-within:text-white'}`}>
                  Message *
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={3}
                  className="w-full bg-transparent! border-b border-white/20 pb-3 text-xl text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors duration-500 resize-none"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: customEase, delay: 0.5 }}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-between w-full rounded-full bg-white text-black px-6 py-4 text-lg font-medium overflow-hidden disabled:opacity-70 mt-1 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span 
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3"
                      >
                        Sending... <Loader2 className="w-5 h-5 animate-spin" />
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="submit"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Submit Inquiry
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                
                <div className="relative z-10 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-components for cleaner code
function FormInput({ label, type, placeholder, value, onChange, required, delay }: any) {
  const isFilled = value.length > 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: customEase, delay }}
      className="relative group"
    >
      <label className={`text-xs font-mono uppercase tracking-[0.2em] mb-4 block transition-colors duration-300 ${isFilled ? 'text-neutral-600' : 'text-neutral-400 group-focus-within:text-white'}`}>
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent! border-b border-white/20 pb-4 text-xl text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors duration-500"
      />
    </motion.div>
  );
}

function ContactRow({ label, value, href, icon, delay, highlightColor = "group-hover:text-white" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: customEase, delay }}
    >
      <Link 
        href={href} 
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/3 px-5 py-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/6"
      >
        <div className="flex min-w-0 items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
            {icon}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
              {label}
            </div>
            <div className={`truncate text-base md:text-lg font-medium text-neutral-200 transition-colors duration-300 ${highlightColor}`}>
              {value}
            </div>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors duration-300 shrink-0" />
      </Link>
    </motion.div>
  );
}

function ContactInfoCard({ label, value, icon, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: customEase, delay }}
      className="rounded-2xl border border-white/10 bg-white/3 px-5 py-5 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
            {label}
          </div>
          <div className="text-base md:text-lg font-medium text-neutral-200">
            {value}
          </div>
        </div>
      </div>
    </motion.div>
  );
}