import React, {MouseEventHandler, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {User} from "lucide-react";
import {Link} from "react-router-dom";

export interface HackProps {
  text: string;
  className?: string;
}

const INTERVAL = 25;
const ITERATIONS = 3;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const HackText: React.FC<HackProps> = ({text, className}: HackProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <span
      className={cn("font-geistMono", className)}
      onMouseOver={handleMouseOver as unknown as MouseEventHandler}>
      {displayText}
    </span>
  );
}