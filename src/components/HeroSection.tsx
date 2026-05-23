"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const codeLines = [
  { type: "comment", text: "// @/app/system/[slug]/page.tsx — Edge Node" },
  { type: "keyword", text: "import { cache, Suspense } from 'react';" },
  { type: "keyword", text: "import type { Metadata } from 'next';" },
  { type: "keyword", text: "import { db } from '@/lib/infrastructure/db';" },
  { type: "empty", text: "" },
  { type: "keyword", text: "interface SystemNodeProps {" },
  { type: "variable", text: "  params: { slug: string };" },
  {
    type: "variable",
    text: "  searchParams: Record<string, string | string[]>;",
  },
  { type: "keyword", text: "}" },
  { type: "empty", text: "" },
  { type: "comment", text: "// Force Edge caching for maximum throughput" },
  { type: "keyword", text: "export const revalidate = 3600;" },
  { type: "keyword", text: "export const runtime = 'edge';" },
  { type: "empty", text: "" },
  {
    type: "keyword",
    text: "const fetchTelemetry = cache(async (nodeId: string) => {",
  },
  { type: "variable", text: "  const t0 = performance.now();" },
  {
    type: "variable",
    text: "  const metrics = await db.telemetry.findUnique({",
  },
  { type: "variable", text: "    where: { nodeId }," },
  {
    type: "variable",
    text: "    include: { activeConnections: true, load: true }",
  },
  { type: "variable", text: "  });" },
  {
    type: "function",
    text: "  Logger.info(`Fetch latency: ${performance.now() - t0}ms`);",
  },
  { type: "keyword", text: "  return metrics;" },
  { type: "keyword", text: "});" },
  { type: "empty", text: "" },
  {
    type: "keyword",
    text: "export default async function SystemDashboard({ params }: SystemNodeProps) {",
  },
  {
    type: "variable",
    text: "  const telemetryState = await fetchTelemetry(params.slug);",
  },
  { type: "empty", text: "" },
  {
    type: "keyword",
    text: "  if (!telemetryState?.active) throw new Error('ERR_NODE_OFFLINE');",
  },
  { type: "empty", text: "" },
  { type: "keyword", text: "  return (" },
  {
    type: "variable",
    text: '    <main className="relative flex min-h-screen w-full flex-col">',
  },
  { type: "function", text: "      <Suspense fallback={<SystemSkeleton />}>" },
  {
    type: "function",
    text: "        <DataStreamer state={telemetryState} optimize={true} />",
  },
  { type: "function", text: "      </Suspense>" },
  { type: "variable", text: "    </main>" },
  { type: "keyword", text: "  );" },
  { type: "keyword", text: "}" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const mockupY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  const lineTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col pt-24 md:pt-32 overflow-hidden bg-black text-white selection:bg-primary selection:text-black"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden
      >
        <div className="gradient-mesh opacity-70">
          <span />
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-12 max-w-screen-2xl flex-1 flex flex-col items-center justify-center text-center pb-8 md:pb-12">
        <div className="max-w-6xl flex flex-col items-center">
          <h1 className="font-display font-black text-[clamp(2.15rem,7.4vw,6.1rem)] leading-[0.85] tracking-[-0.04em] uppercase w-full flex flex-col items-center">
            <span className="overflow-hidden block w-full pb-2">
              <motion.span
                initial={{ y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ ...lineTransition, delay: 0.1 }}
                className="block md:whitespace-nowrap origin-bottom-left"
              >
                We Multiply Ideas
              </motion.span>
            </span>
            <span className="overflow-hidden block w-full pb-2">
              <motion.span
                initial={{ y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ ...lineTransition, delay: 0.2 }}
                className="block whitespace-nowrap origin-bottom-left text-muted-foreground"
              >
                Into Maximum
              </motion.span>
            </span>
            <span className="overflow-hidden block w-full pb-2">
              <motion.span
                initial={{ y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ ...lineTransition, delay: 0.3 }}
                className="block text-gradient whitespace-nowrap origin-bottom-left"
              >
                Results
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base md:text-2xl text-muted-foreground max-w-2xl leading-snug mx-auto font-light"
          >
            Transforming ideas into scalable digital systems designed for
            absolute performance and real business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6 w-full"
          >
            <Button
              variant="glow"
              className="w-auto shrink-0 px-5 py-5 md:px-10 md:py-6 text-sm md:text-lg rounded-full"
              asChild
            >
              <a href="#contact">
                Start a Project
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-auto shrink-0 px-5 py-5 md:px-10 md:py-6 text-sm md:text-lg border-primary text-white hover:bg-primary/10 hover:border-primary rounded-full"
              asChild
            >
              <a href="#portfolio">View Work</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 w-full h-[30vh] sm:h-[35vh] md:h-[45vh] mt-auto flex justify-center perspective-1000">
        <motion.div
          style={isDesktop ? { y: mockupY } : {}}
          initial={{ y: "20%", opacity: 0, rotateX: 10 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          // FIXED: Hard math width calculation prevents the absolute element from stretching edge-to-edge
          className="absolute top-0 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl mx-auto left-0 right-0"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-t-[3rem] -z-10 opacity-60" />

          <div className="relative w-full aspect-[14/10] sm:aspect-[16/10] md:aspect-[16/9] bg-[#050505] rounded-t-2xl md:rounded-t-[2.5rem] border-t border-x border-white/10 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ring-1 ring-white/5">
            <div className="w-full h-10 md:h-12 bg-white/[0.03] border-b border-white/5 flex items-center px-4 md:px-6 relative backdrop-blur-md z-10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-[10px] md:text-xs text-zinc-500 font-mono">
                <Terminal className="w-3 h-3 mr-2" /> system-core.tsx
              </div>
            </div>

            <div className="flex-1 px-4 md:px-8 pt-4 md:pt-8 pb-20 font-mono text-[9px] sm:text-[11px] md:text-[14px] leading-relaxed overflow-hidden relative bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0)_100%)]">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex flex-col gap-[3px]"
              >
                {[...codeLines, ...codeLines].map((line, idx) => (
                  <div key={idx} className="flex whitespace-nowrap">
                    <span className="text-zinc-700 w-6 md:w-10 select-none text-right pr-3 md:pr-4 shrink-0 font-medium">
                      {(idx % codeLines.length) + 1}
                    </span>
                    <span
                      className={`${
                        line.type === "comment" ? "text-zinc-500 italic" : ""
                      } ${
                        line.type === "keyword"
                          ? "text-primary font-semibold"
                          : ""
                      } ${line.type === "variable" ? "text-zinc-300" : ""} ${
                        line.type === "function" ? "text-white" : ""
                      }`}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
