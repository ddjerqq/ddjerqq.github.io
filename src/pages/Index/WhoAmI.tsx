import {motion} from "framer-motion";
import {World} from "@/components/ui/globe";
import {SparklesCore} from "@/components/ui/Sparkles";
import React from "react";
import {SectionWrapper} from "@/components/SectionWrapper";
import {AuroraBackground} from "@/components/ui/Aurora";

export const WhoAmI = () => {
  return (
    <SectionWrapper>
      <AuroraBackground>
        <motion.h2
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            delay: 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          I am a{' '}
          <span className="font-black bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
                  10x
                </span>
          {' '}
          developer
        </motion.h2>
      </AuroraBackground>
    </SectionWrapper>
  );
}