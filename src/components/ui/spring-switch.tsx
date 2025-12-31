import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SpringSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-primary" : "bg-input",
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
      ref={ref}
    >
      <motion.span
        className="pointer-events-none block rounded-full bg-background shadow-lg"
        initial={false}
        animate={{
          x: checked ? 22 : 2,
          width: isPressed ? 26 : 22,
          height: 22,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 1,
        }}
      />
    </SwitchPrimitives.Root>
  );
});
SpringSwitch.displayName = "SpringSwitch";

export { SpringSwitch };
