import React from "react";
import {Hero} from "@/pages/Index/Hero";
import {Overview} from "@/pages/Index/Overview";
import {MySkills} from "@/pages/Index/MySkills";
import {WorkExperience} from "@/pages/Index/WorkExperience";
import {Projects} from "@/pages/Index/Projects";
import {Contact} from "@/pages/Index/Contact";

export const Index = () => {
  return (
    <>
      <Hero/>
      <Overview/>
      <MySkills/>
      <WorkExperience/>
      <Projects />
      <Contact />
    </>
  );
}