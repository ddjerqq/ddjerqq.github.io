import * as React from "react";
import {cn} from "@/lib/utils";
import {LinkProps} from "@/components/ui/link";

export const SectionWrapper = React.forwardRef<HTMLTableSectionElement, LinkProps>(({className, children, ...props}) =>
  (
    <section {...props}
             className={cn("relative w-full z-40 flex flex-col justify-center items-center justify-items-stretch align-middle select-none snap-start space-y-8 p-16", className)}>
      {children}
    </section>
  ));