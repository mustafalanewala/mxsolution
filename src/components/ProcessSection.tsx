"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your ecosystem, users, and market gaps to define the exact problem we are solving before writing a single line of code.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Mapping the blueprint. We deliver a roadmap with clear milestones, technical architecture, and a focused product direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting the visual language. Pixel-perfect, high-fidelity prototypes that balance aesthetic dominance with flawless user experience.",
  },
  {
    number: "04",
    title: "Development",
    description: "Building the engine. Clean, scalable, and modular code built on modern web infrastructure for maximum performance.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, monitor, and scale. We ensure a flawless transition to production and provide ongoing evolution for your product.",
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="process" 
      className="bg-black text-white h-dvh lg:h-screen min-h-150 border-y border-white/20 selection:bg-white selection:text-black flex flex-col"
    >
      
      {/* Responsive Typographic Header */}
      <div className="flex-none px-6 py-6 lg:px-8 lg:py-8 border-b border-white/20 flex justify-between items-end gap-4">
        <h2 className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tighter leading-none">
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden inline md:block"
          >
            The{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
            className="overflow-hidden inline md:block"
          >
            Blueprint
          </motion.span>
        </h2>
        <p className="text-neutral-400 max-w-37.5 lg:max-w-sm text-right text-xs lg:text-lg uppercase tracking-widest font-mono">
          Phase breakdown <br className="hidden md:block" /> & Methodology
        </p>
      </div>

      {/* The Flex Grid Container - Stacks vertically on mobile, horizontally on desktop */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {steps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={step.number}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              animate={{ flexGrow: isActive ? 5 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b lg:border-b-0 lg:border-r border-white/20 last:border-b-0 lg:last:border-r-0 h-full flex-[1_1_0%] flex flex-col cursor-pointer group bg-black overflow-hidden"
            >
              
              {/* ==========================================
                  MOBILE & TABLET UI (Hidden on Desktop)
                  ========================================== */}
              <div className="flex lg:hidden flex-col justify-center h-full w-full px-6 py-4">
                <div className="flex justify-between items-center w-full">
                  <span className={`font-mono text-lg transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                    {step.number}
                  </span>
                  <span className={`font-display font-bold uppercase text-2xl tracking-tight transition-colors duration-300 ${isActive ? 'text-white group-hover:text-primary' : 'text-neutral-600 group-hover:text-primary'}`}>
                    {step.title}
                  </span>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? "auto" : 0,
                    marginTop: isActive ? 16 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>


              {/* ==========================================
                  DESKTOP UI (Hidden on Mobile)
                  ========================================== */}
              <div className="hidden lg:flex flex-col h-full w-full">
                
                {/* Top Section: Number */}
                <div className="p-8 shrink-0">
                  <span className={`font-mono text-3xl transition-colors duration-500 ${isActive ? "text-white" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                    {step.number}
                  </span>
                </div>

                {/* Middle Section: Revealed Description */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
                  className="px-8 max-w-md shrink-0 absolute top-32 left-0"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <div className="w-12 h-px bg-white mb-6" />
                  <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Bottom Section: Typography Container */}
                <div className="relative flex-1 flex items-end p-8">
                  
                  {/* INACTIVE STATE: Vertical Text */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ 
                      // 0s duration (INSTANT) when becoming active. Smooth fade when becoming inactive.
                      duration: isActive ? 0 : 0.4, 
                      delay: isActive ? 0 : 0.3 
                    }}
                    className="absolute bottom-8 left-0 w-full flex justify-center pointer-events-none"
                  >
                    <span 
                      className="font-display font-bold uppercase tracking-widest text-3xl text-neutral-600 group-hover:text-primary transition-colors duration-300"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {step.title}
                    </span>
                  </motion.div>

                  {/* ACTIVE STATE: Massive Horizontal Text */}
                  <motion.h3
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                    transition={{ 
                      // Smooth slide when becoming active. 0s duration (INSTANT) when hiding.
                      duration: isActive ? 0.4 : 0, 
                      ease: "easeOut",
                      delay: isActive ? 0.2 : 0 
                    }}
                    className="font-display font-black uppercase tracking-tighter whitespace-nowrap absolute bottom-8 left-8 text-[clamp(2.75rem,4vw,5rem)] text-white group-hover:text-primary transition-colors duration-300 leading-none pointer-events-none"
                  >
                    {step.title}
                  </motion.h3>

                </div>
              </div>
              
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}