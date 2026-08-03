/**
 * Single source of truth for content that appears both on the page and in
 * the JSON-LD in app/layout.tsx. Keep it free of "use client" so the server
 * layout can import it.
 */

export type Service = {
  title: string;
  description: string;
  image: string;
  specs: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom sites and platforms on modern frameworks — fast, responsive, and built to turn visitors into customers.",
    image: "/services/webdevelopment.png",
    specs: ["Next.js", "Platforms", "SEO"],
  },
  {
    title: "E-commerce",
    description:
      "Storefronts that sell — payments, inventory, order tracking, and the analytics to keep revenue growing.",
    image: "/services/ecommerce.png",
    specs: ["Payments", "Inventory"],
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps users love and businesses rely on — from first concept to store launch.",
    image: "/services/appdevelopment.png",
    specs: ["iOS", "Android"],
  },
  {
    title: "Custom Software",
    description:
      "Bespoke systems shaped around your exact workflow — dashboards, automation, and tools with no compromises.",
    image: "/services/customsoftware.png",
    specs: ["Dashboards", "Automation"],
  },
  {
    title: "CRM Systems",
    description:
      "Centralise customer data, automate sales pipelines, and give your team the clarity to grow revenue faster.",
    image: "/services/crmsystems.png",
    specs: ["Pipelines", "Sales"],
  },
  {
    title: "ERP Solutions",
    description:
      "Unify finance, inventory, HR, and operations in one platform — one source of truth for the whole business.",
    image: "/services/erpsolutions.png",
    specs: ["Operations", "Finance"],
  },
  {
    title: "AI Agents",
    description:
      "Assistants, automated workflows, and integrations woven into your product to scale without scaling headcount.",
    image: "/services/aiautomation.png",
    specs: ["Automation", "Assistants"],
  },
  {
    title: "UI/UX & Brand",
    description:
      "Visual identities, design systems, and interfaces that people remember, trust, and genuinely enjoy using.",
    image: "/services/design-branding.png",
    specs: ["Identity", "Interfaces"],
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What services do you offer?",
    answer:
      "Web development, e-commerce platforms, mobile apps, UI/UX design, branding, and AI integration. Every project is tailored to your business — nothing off the shelf.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A business website typically takes 2–4 weeks. Complex e-commerce platforms or apps run 2–3 months. You get a detailed timeline after the discovery call.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing follows scope. After the discovery phase you receive a detailed, fixed quote — no surprises mid-project. The first consultation is free.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes — support and maintenance packages cover updates, security patches, performance monitoring, and technical assistance around the clock.",
  },
  {
    question: "Can you work with existing designs or systems?",
    answer:
      "Absolutely. We work within existing brand guidelines and systems, and we also redesign and improve existing platforms without breaking what works.",
  },
];
