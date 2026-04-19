"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "framer-motion";

const marqueeItems = [
  "Custom Software",
  "•",
  "CRM Systems",
  "•",
  "ERP Solutions",
  "•",
  "Web Development",
  "•",
  "E-commerce",
  "•",
  "AI Agents",
  "•",
  "Mobile Apps",
  "•",
  "UI / UX & Brand",
  "•",
];

function VelocityRow({
  baseVelocity = 2,
}: {
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        style={{ x }}
        className="flex flex-nowrap items-center gap-8 whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          (item, index) => (
            <span
              key={index}
              className={`text-3xl md:text-5xl lg:text-6xl font-display font-semibold whitespace-nowrap ${
                item === "•" ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item}
            </span>
          ),
        )}
      </motion.div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="py-14 md:py-20 border-y border-border/50 overflow-hidden">
      <VelocityRow baseVelocity={1.2} />
    </section>
  );
}
