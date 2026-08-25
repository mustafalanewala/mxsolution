"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Heading,
  Reveal,
  Section,
} from "@/components/site/primitives";

const channels = [
  {
    label: "WhatsApp",
    value: "Fastest reply",
    href: site.whatsapp,
    external: true,
  },
  {
    label: "Book a call",
    value: "15 minutes, free",
    href: site.booking,
    external: true,
  },
  { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
  {
    label: "Based in",
    value: `${site.locality}, ${site.region} — ${site.country}`,
  },
];

export function Contact({
  /** The /contact page runs the same block under its own headline. */
  lines = ["Have a problem", "worth solving?"],
  intro = "Tell us what's not working. We'll tell you what we think it actually is, and what it would take to fix — before anyone talks about a quote.",
  /** /contact opens with this block, so it takes the page-top spacing */
  className,
}: {
  lines?: string[];
  intro?: string;
  className?: string;
} = {}) {
  const [form, setForm] = useState({ name: "", contact: "", problem: "" });

  // No backend — the form hands the message straight to WhatsApp, which is
  // where this audience actually replies.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Mx Solution — I'm ${form.name}${
        form.contact ? ` (${form.contact})` : ""
      }.\n\nWhat's not working:\n${form.problem}`,
    );
    window.open(`https://wa.me/${site.phone.replace("+", "")}?text=${text}`, "_blank");
    setForm({ name: "", contact: "", problem: "" });
  };

  return (
    <Section id="contact" className={className}>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* ── The ask ── */}
        <div className="lg:col-span-5">
          <Heading className="text-headline" lines={lines} />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-md text-lead text-muted-foreground">
              {intro}
            </p>
          </Reveal>

          <div className="mt-10">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={0.2 + i * 0.05}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="group/ch flex items-center justify-between gap-4 border-t border-border py-4 last:border-b"
                  >
                    <span className="label">{channel.label}</span>
                    <span className="flex items-center gap-2 text-body font-medium">
                      <span className="link-underline">{channel.value}</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/ch:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-4 border-t border-border py-4 last:border-b">
                    <span className="label">{channel.label}</span>
                    <span className="text-body font-medium">
                      {channel.value}
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── The form ── */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-xl border border-border bg-surface/60 p-6 md:p-8"
            >
              <Field
                id="name"
                label="Your name"
                placeholder="Who we're speaking to"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                id="contact"
                label="Phone or WhatsApp"
                placeholder="How we reach you back"
                value={form.contact}
                onChange={(v) => setForm({ ...form, contact: v })}
              />
              <div className="flex flex-col gap-2.5">
                <label htmlFor="problem" className="label">
                  What&apos;s not working *
                </label>
                <textarea
                  id="problem"
                  rows={5}
                  required
                  placeholder="Leads have dried up, orders live in a spreadsheet…"
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  className={cn(fieldClass, "resize-none")}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="mt-1 w-full"
              >
                Send it over
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/**
 * Boxed rather than underlined. An underline field is elegant on a page
 * with two inputs and ambiguous the moment there are three — the box says
 * where to type without anyone having to work it out.
 */
const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3.5 text-body text-foreground transition-[border-color,box-shadow] duration-300 placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-2 focus:ring-foreground/10 focus:outline-none";

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="label">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        type="text"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
    </div>
  );
}
