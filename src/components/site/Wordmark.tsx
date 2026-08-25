import { cn } from "@/lib/utils";

/** The lockup. Plain type, tight tracking — no mark, no ornament. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.25rem] leading-none font-bold tracking-normal",
        className,
      )}
    >
      Mx Solution
    </span>
  );
}
