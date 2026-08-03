"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

// Pointer devices only — touch screens scroll better natively.
export function SmoothScroll({ children }: SmoothScrollProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
