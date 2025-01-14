import * as React from "react";
import {cn} from "@/lib/utils";
import {LinkProps} from "@/components/ui/link";

export const SectionWrapper = React.forwardRef<HTMLTableSectionElement, LinkProps>(({className, children, ...props}) =>
  (
    <section {...props}
             className={cn("relative w-full h-[100vh] h-[100svh] flex flex-col justify-center  align-middle select-none snap-start space-y-8", className)}>
      {children}
    </section>
  ));