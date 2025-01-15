import {SectionWrapper} from "@/components/SectionWrapper";

export const Overview = () => {
  return (
    <SectionWrapper id="overview" className="items-center bg-dot-neutral-800">
      <div className="h-screen flex flex-col justify-center space-y-4">
        <h2 className="text-white text-6xl font-black text-center mb-4">
          Overview
        </h2>

        <div className="max-w-3xl text-lg space-y-2 flex flex-col">
          <span>I am a passionate software developer with 5 years of professional experience. I have been writing code since 2017. I'm known for my innate technical expertise, reliability and my mindset of a leader.</span>
          <span>I have a deep passion for programming and problem solving which fuels my relentless pursuit of knowledge.</span>
          <span>Learning programming concepts since 2013, allowed me to elevate my skills every year. Every year, my goal is to improve and outdo my past self.</span>
        </div>
      </div>
    </SectionWrapper>
  );
};