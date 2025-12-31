"use client";

import { useState } from "react";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
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
              <a
                href="mailto:info@mxnoorsolutions.in"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                    info@mxnoorsolutions.in
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="tel:+919157302004"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                    +91 9157302004
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground">Dahod, Gujarat, India</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Name
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
                    Email
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
                    Message
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
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
