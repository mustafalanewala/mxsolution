"use client";

import { useState } from "react";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Something went wrong",
      description: "Call or WhatsApp us at: +91 91573 02004",
      variant: "destructive",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <AnimatedText>
              <span className="text-sm text-primary font-mono uppercase tracking-wider mb-4 block">
                Get in Touch
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Let's build
                <br />
                <span className="text-muted-foreground">something great</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Have a project in mind? Drop us a message and let's discuss how
                we can help bring your vision to life.
              </p>
            </AnimatedText>

            {/* Contact Info */}
            <AnimatedSection delay={0.3} className="space-y-6">
              <Link
                href="tel:+919157302004"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                    +91 91573 02004
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="https://wa.me/919157302004?text=Hi%20Mx%20Solution%2C%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="text-foreground group-hover:text-[#25D366] transition-colors duration-300">
                    Chat with us instantly
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground">Dohad, Gujarat, India</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background border-border h-12 rounded-xl focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background border-border h-12 rounded-xl focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border h-12 rounded-xl focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background border-border rounded-xl resize-none focus:border-primary"
                  />
                </div>
                <Button
                  variant="glow"
                  size="xl"
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Or reach us directly via{" "}
                  <Link
                    href="https://wa.me/919157302004?text=Hi%20Mx%20Solution%2C%20I%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium"
                  >
                    WhatsApp
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="tel:+919157302004"
                    className="text-primary hover:underline font-medium"
                  >
                    +91 91573 02004
                  </Link>
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
