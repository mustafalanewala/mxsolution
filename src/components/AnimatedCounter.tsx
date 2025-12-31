"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        className="font-display font-bold text-4xl text-foreground mb-1"
      >
        {count}
        {suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
