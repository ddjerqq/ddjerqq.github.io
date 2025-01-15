import React, {MouseEventHandler, ReactNode, useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

export interface HackProps {
  text: string;
  icon: ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

const INTERVAL = 25;
const ITERATIONS = 3;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const HackedDropdownMenuItem: React.FC<HackProps> = ({text, icon, href, className, onClick}: HackProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const linkElement = useRef<HTMLLinkElement>(null);

  useEffect(() => {
    if (!isAnimating) return;

    let iteration = 0;
    const originalText = text.split("");
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return LETTERS[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }

      iteration += 1 / ITERATIONS;
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [isAnimating, text]);

  const handleMouseOver = (_: MouseEvent) => {
    if (!isAnimating) setIsAnimating(true);
  };

  const buttonOnClick = () => {
    if (onClick)
      onClick();

    if (linkElement.current)
      linkElement.current.click();
  }

  return (
    <a href={href}>
      <DropdownMenuItem
        className={cn("font-geistMono", className)}
        onMouseOver={handleMouseOver as unknown as MouseEventHandler}
        onClick={buttonOnClick}>
        {icon}
        {displayText}
      </DropdownMenuItem>
    </a>
  );
}