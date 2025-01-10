import * as React from "react";
import {cn} from "@/lib/utils";
import { Link as RouterLink } from "react-router-dom";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({className, href, ...props}, ref) => {
    return (
      <RouterLink
        to={href!}
        className={cn("underline underline-offset-4 text-muted-foreground decoration-muted-foreground hover:text-primary", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
