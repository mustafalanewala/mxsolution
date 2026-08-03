/**
 * The brand lockup. Always this markup — the lowercase x is the brand mark,
 * so it must never inherit an uppercase or mono treatment from its container.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold normal-case tracking-[-0.01em] ${className}`}
    >
      M<span className="text-primary">x</span> Solution
    </span>
  );
}
