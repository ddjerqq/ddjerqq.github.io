import {motion} from "framer-motion";
import {World} from "@/components/ui/globe";
import {SparklesCore} from "@/components/ui/Sparkles";
import React from "react";
import {SectionWrapper} from "@/components/SectionWrapper";

export const Hero = () => {
  return (
    <SectionWrapper id="whoami">
      <div>
        <motion.h1
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="text-6xl sm:text-8xl font-geist font-semibold">
          Hello, I'm <span className="text-purple-300">Gio</span>
        </motion.h1>
        <span>
          I am a 10x developer. I have a deep passion for programming.
        </span>
      </div>

      <div className="h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] mx-auto z-40">
        <World/>
      </div>

      <div className="w-full absolute inset-0 h-screen z-30">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#808080"
        />
      </div>
    </SectionWrapper>
  );
}