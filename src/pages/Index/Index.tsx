import {World} from "@/components/ui/globe";
import {motion} from "framer-motion";
import React from "react";
import {AuroraBackground} from "@/components/ui/Aurora";
import {Button, buttonVariants} from "@/components/ui/button";
import {Link} from "react-router-dom";

export const Index = () => {
  return (
    <>
      <section id="hero" className="w-full h-[100vh] h-[100svh] flex flex-col justify-center align-middle select-none snap-start space-y-8">
        <motion.h1
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="text-6xl sm:text-8xl font-geist font-semibold">
          Hello, I'm <span className="text-primary">Gio</span>
        </motion.h1>

        <div className="h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] mx-auto">
          <World/>
        </div>
      </section>

      <section id="who_am_i" className="w-full h-screen select-none snap-start">
        <AuroraBackground>
          <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-full relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <h2 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              I make full stack web apps.
            </h2>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Like this one, and many others
            </div>
            <Link to="/contact" className={buttonVariants({variant: "default", size: "lg"})}>
              Get in touch
            </Link>
          </motion.div>
        </AuroraBackground>
      </section>
    </>
  );
}