import {motion} from "framer-motion";
import React from "react";
import {buttonVariants} from "@/components/ui/button";
import {Link} from "react-router-dom";

export const NotFound = () => {
  return (

    <div className="relative w-full h-[100vh] h-[100svh] flex flex-col justify-center align-middle select-none snap-start space-y-4">
      <motion.h1
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="text-4xl sm:text-6xl font-semibold">
        Lost in cyberspace
      </motion.h1>

      <motion.span
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.5,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="text-xl sm:text-2xl text-muted-foreground">
        You've ventured too far into the deep.
      </motion.span>

      <motion.span
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 1,
          duration: 0.4,
          ease: "easeInOut",
        }}>
        <Link to="/" className={buttonVariants({variant: "default", size: "lg"})}>
          Return to page
        </Link>
      </motion.span>
    </div>
  );
}