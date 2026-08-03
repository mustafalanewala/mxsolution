"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e.clientX, e.clientY)}
      // hover only from md up — on touch it sticks after a tap
      className="relative w-10 h-10 rounded-full bg-secondary/50 md:hover:bg-secondary border border-border/50 flex items-center justify-center transition-colors"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Moon
        className={`absolute w-4 h-4 text-foreground transition-[opacity,transform] duration-300 ease-out ${
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
        }`}
      />
      <Sun
        className={`absolute w-4 h-4 text-foreground transition-[opacity,transform] duration-300 ease-out ${
          isDark ? "opacity-0 scale-0 -rotate-90" : "opacity-100 scale-100 rotate-0"
        }`}
      />
    </button>
  );
}
