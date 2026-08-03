import { useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore private-mode storage errors */
  }
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

// One store for every mounted toggle. The navbar renders ThemeToggle twice —
// desktop and mobile are hidden with CSS, not unmounted — so per-hook state
// would leave the hidden one showing the wrong icon.
let current: Theme | null = null;
const listeners = new Set<() => void>();
let transitioning = false;

function getSnapshot(): Theme {
  if (current === null) current = readTheme();
  return current;
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function commit(theme: Theme) {
  current = theme;
  applyThemeClass(theme);
  for (const listener of listeners) listener();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // x/y = click origin so the new theme expands out from the toggle button.
  const toggleTheme = useCallback((x?: number, y?: number) => {
    if (transitioning) return;

    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";

    const startViewTransition = (
      document as unknown as {
        startViewTransition?: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      }
    ).startViewTransition?.bind(document);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The circular reveal makes the browser rasterise the whole document
    // twice, old state and new. That is cheap on a desktop GPU and far too
    // slow on a phone, where this page is many viewports tall — so touch
    // devices get an instant swap instead of a janky wipe.
    const pointerDevice = window.matchMedia(
      "(pointer: fine) and (hover: hover)",
    ).matches;

    if (!startViewTransition || reduce || !pointerDevice) {
      commit(next);
      return;
    }

    transitioning = true;

    const cx = x ?? window.innerWidth - 40;
    const cy = y ?? 40;
    // Radius that reaches the farthest corner from the click point.
    const endRadius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy),
    );

    const vt = startViewTransition(() => commit(next));

    vt.ready
      .then(() => {
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
      })
      .catch(() => {
        /* transition skipped by the browser */
      });

    vt.finished.finally(() => {
      transitioning = false;
    });
  }, []);

  return { theme, toggleTheme };
}
