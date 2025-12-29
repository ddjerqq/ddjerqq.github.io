import {SectionWrapper} from "@/components/SectionWrapper";

export const Overview = () => {
  return (
    <SectionWrapper id="overview" className="items-center bg-dot-neutral-800">
      <div className="h-screen flex flex-col justify-center space-y-4">
        <h2 className="text-white text-6xl font-black text-center mb-4">
          Overview
        </h2>

        <div className="max-w-4xl text-2xl space-y-2 flex flex-col">
          <span>I solve problems. Every day brings new challenges, and I tackle them head-on.</span> 
          <span>Since 2013, I've been building solutions and pushing boundaries.</span> 
          <span>I lead teams, rebuild systems, and make things work better.</span> 
          <span>When others see obstacles, I see opportunities to create something that matters.</span>
        </div>
      </div>
    </SectionWrapper>
  );
};