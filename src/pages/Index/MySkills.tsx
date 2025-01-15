import React from "react";
import {SectionWrapper} from "@/components/SectionWrapper";
import {motion} from "framer-motion";

export const MySkills = () => {
  const skills = [
    {
      hover: "hover:bg-purple-600 hover:border-purple-600 hover:shadow-purple-600",
      icon: "aspnet",
      name: "ASP.NET",
      border: "group-hover:border-purple-600"
    },
    {
      hover: "hover:bg-cyan-600 hover:border-cyan-600 hover:shadow-cyan-600",
      icon: "docker",
      name: "Docker",
      border: "group-hover:border-cyan-600"
    },
    {
      hover: "hover:bg-green-600 hover:border-green-600 hover:shadow-green-600",
      icon: "cuda",
      name: "CUDA",
      border: "group-hover:border-green-600"
    },
    {
      hover: "hover:bg-gray-200 hover:border-gray-200 hover:shadow-gray-200",
      icon: "rust",
      name: "Rust",
      border: "group-hover:border-gray-200"
    },
    {
      hover: "hover:bg-blue-600 hover:border-blue-600 hover:shadow-blue-600",
      icon: "postgressql",
      name: "PostgresSQL",
      border: "group-hover:border-blue-600"
    },
    {
      hover: "hover:bg-gray-200 hover:border-gray-200 hover:shadow-gray-200",
      icon: "grpc",
      name: "gRPC",
      border: "group-hover:border-gray-200"
    },
    {
      hover: "hover:bg-purple-600 hover:border-purple-600 hover:shadow-purple-600",
      icon: "efcore",
      name: "EF Core",
      border: "group-hover:border-purple-600"
    },
    {
      hover: "hover:bg-gray-200 hover:border-gray-200 hover:shadow-gray-200",
      icon: "ddd",
      name: "Domain Driven Design",
      border: "group-hover:border-gray-200"
    },
  ];

  return (
    <SectionWrapper id="my-skills" className="items-center bg-dot-neutral-800">
      <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="text-6xl font-bold dark:text-white text-center mb-4 mt-16">
        Some of my skills
      </motion.h2>

      <div className="max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 gap-4">
        {skills.map((skill, index) => (
          <motion.div key={index}
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      transition={{
                        delay: index / 10,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className={
                        skill.hover +
                        " group flex flex-col flex-grow-0 rounded-md select-none bg-gray-600 border-2 border-gray-600 " +
                        "hover:z-40 transition-[colors,transform] duration-300 ease-sweet hover:scale-105 shadow-gray-700 " +
                        "shadow-party-card hover:shadow-party-card-hover"}>
            <div className="relative overflow-hidden">
              <img className="object-cover z-10 transition grayscale group-hover:grayscale-0 blur-[1px]"
                   src="/images/empty.webp"
                   alt="logo"/>

              <img className="absolute top-5 inset-0 origin-bottom
                    transition-[opacity,transform] duration-[1200ms] ease-sweet
                    group-hover:-translate-y-1
                    group-hover:scale-[102%] group-hover:opacity-100 object-cover z-20"
                   src={`/images/${skill.icon}.webp`} alt={skill.name}/>

              <img className="absolute top-5 inset-0 origin-bottom
                    transition-[opacity,transform] duration-[400ms] ease-sweet
                    group-hover:-translate-y-1 blur-[1px]
                    group-hover:scale-[102%] group-hover:opacity-0 object-cover z-20"
                   src={`/images/${skill.icon}-gold.webp`} alt={skill.name}/>
            </div>

            <div className={
              skill.border +
              " p-3 bg-gray-800 text-gray-400 group-hover:text-white rounded-b-md text-center border-t-2 border-gray-600 " +
              "text-2xl sm:text-xl md:text-lg lg:text-base text-nowrap truncate transition duration-200 ease-sweet"}>
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}