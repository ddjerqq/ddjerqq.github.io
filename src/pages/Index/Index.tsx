import React from "react";
import {Hero} from "@/pages/Index/Hero";
import {WhoAmI} from "@/pages/Index/WhoAmI";
import {MySkills} from "@/pages/Index/MySkills";

export const Index = () => {
  return (
    <>
      <Hero/>
      <WhoAmI/>
      <MySkills/>
    </>
  );
}