"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
}

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, checkedIcon, uncheckedIcon, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-10 w-[4.25rem] shrink-0 cursor-pointer items-center rounded-xl border-3 border-primary-light bg-primary-darkest bg-opacity-50 hover:bg-opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-zinc-300 focus-visible:ring-offset-zinc-950",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "group pointer-events-none flex items-center justify-center h-7 w-7 rounded-md shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[31px] data-[state=unchecked]:translate-x-[3px] bg-primary-light"
      )}
    >
      <div className="group-data-[state=checked]:hidden group-data-[state=unchecked]:block">
        {checkedIcon}
      </div>
      <div className="group-data-[state=unchecked]:hidden group-data-[state=checked]:block">
        {uncheckedIcon}
      </div>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
