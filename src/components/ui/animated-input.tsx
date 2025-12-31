import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface AnimatedInputProps extends React.ComponentProps<"input"> {
  label?: string;
}

const AnimatedInput = React.forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    return (
      <div className="relative">
        {label && (
          <motion.label
            className="absolute left-3 pointer-events-none text-muted-foreground origin-left"
            initial={false}
            animate={{
              y: isFocused || hasValue ? -24 : 10,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {label}
          </motion.label>
        )}
        <motion.div
          className="relative"
          initial={false}
          animate={{
            scale: isFocused ? 1.01 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-lg border-2 bg-background px-3 py-2 text-base transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              isFocused
                ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                : "border-border hover:border-muted-foreground/50",
              className
            )}
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              setHasValue(e.target.value.length > 0);
              props.onBlur?.(e);
            }}
            onChange={(e) => {
              setHasValue(e.target.value.length > 0);
              props.onChange?.(e);
            }}
            {...props}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 h-0.5 bg-primary rounded-full"
            initial={{ width: 0, x: "-50%" }}
            animate={{
              width: isFocused ? "100%" : "0%",
              x: "-50%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </motion.div>
      </div>
    );
  }
);
AnimatedInput.displayName = "AnimatedInput";

export { AnimatedInput };
