import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Signature button: an ink layer sweeps up from the bottom edge on hover
 * (GPU transform, no repaint), the label/icon color cross-fades with it,
 * icons nudge forward, and the whole pill compresses slightly on press.
 */
const buttonVariants = cva(
  [
    "group relative isolate overflow-hidden inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-full text-sm font-medium cursor-pointer select-none",
    "transition-[color,border-color,transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "active:scale-[0.96]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "[&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-[cubic-bezier(0.16,1,0.3,1)]",
    "hover:[&_svg]:translate-x-1",
    // The sweep layer
    "before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-full",
    "before:translate-y-[102%] hover:before:translate-y-0",
    "before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)]",
  ].join(" "),
  {
    variants: {
      variant: {
        // Blue pill → ink floods up, text flips to page color
        default:
          "bg-primary text-primary-foreground before:bg-foreground hover:text-background",
        // Hairline pill → ink floods up, text inverts
        outline:
          "border border-foreground/25 bg-transparent text-foreground before:bg-foreground hover:text-background hover:border-foreground",
        // Quiet pill → soft fill sweeps up
        ghost:
          "bg-transparent text-foreground before:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground before:bg-foreground hover:text-background",
        destructive:
          "bg-destructive text-destructive-foreground before:bg-foreground hover:text-background",
        link: "text-foreground underline-offset-4 hover:underline before:hidden hover:[&_svg]:translate-x-0.5",
        // Legacy aliases — same treatment as default
        pill: "bg-primary text-primary-foreground before:bg-foreground hover:text-background",
        glow: "bg-primary text-primary-foreground before:bg-foreground hover:text-background",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
