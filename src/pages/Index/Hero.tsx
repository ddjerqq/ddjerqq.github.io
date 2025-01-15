import {World} from "@/components/ui/globe";
import {SparklesCore} from "@/components/ui/Sparkles";
import React from "react";
import {SectionWrapper} from "@/components/SectionWrapper";

export const Hero = () => {
  return (
    <SectionWrapper id="whoami">
      <div className="h-screen flex flex-col justify-center items-center align-middle">
        <div className="text-center mt-24">
          <div className="z-40">
          <span
            className="text-4xl sm:text-6xl absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-cyan-500 to-purple-500 bg-clip-text box-content font-extrabold text-transparent">
            Hello, I'm Gio
          </span>
            <h1
              className="text-4xl sm:text-6xl relative top-0 w-fit py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-cyan-500 to-purple-500 bg-clip-text font-extrabold text-transparent">
              Hello, I'm Gio
            </h1>
          </div>

          <span className="text-2xl sm:text-3xl ">
          Welcome to my portfolio
        </span>
      </div>

        <div className="h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] mx-auto z-40">
          <World/>
        </div>

          <div className="w-full absolute inset-0  z-20">
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
      </div>
    </SectionWrapper>
  );
}