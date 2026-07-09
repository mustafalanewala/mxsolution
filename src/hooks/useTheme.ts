import { useState, useEffect } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore private-mode storage errors */
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  // x/y = click origin so the new theme expands out from the toggle button.
  const toggleTheme = (x?: number, y?: number) => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    const startViewTransition = (
      document as unknown as {
        startViewTransition?: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      }
    ).startViewTransition?.bind(document);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!startViewTransition || reduce) {
      applyThemeClass(next);
      setTheme(next);
      return;
    }

    const cx = x ?? window.innerWidth - 40;
    const cy = y ?? 40;
    // Radius that reaches the farthest corner from the click point.
    const endRadius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy),
    );

    const vt = startViewTransition(() => applyThemeClass(next));

    vt.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${cx}px ${cy}px)`,
            `circle(${endRadius}px at ${cx}px ${cy}px)`,
          ],
        },
        {
          duration: 620,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });

    vt.finished.finally(() => setTheme(next));
  };

  return { theme, setTheme, toggleTheme };
}
