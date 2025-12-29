import {SectionWrapper} from "@/components/SectionWrapper";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {BookMarkedIcon, GitCompare, GitFork, Star} from "lucide-react";
import {textVariant} from "@/lib/motionUtils";
import {motion} from "framer-motion";
import { Carousel } from "react-responsive-carousel";

interface Project {
  name: string;
  description: string;
  url: string;
  stars: string;
  forks: number;
  primaryLang: string;
  imagePaths: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Klean",
    description: "ASP.NET Core ready-to-go Domain Driven Design template",
    url: "https://github.com/ddjerqq/klean",
    stars: "14",
    forks: 2,
    primaryLang: "C#",
    imagePaths: [
      "/images/klean.png"
    ],
  },
  {
    name: "IronId",
    description: "Small Roslyn source-generator for strongly-typed ID value types backed by ULIDs.",
    url: "https://github.com/ddjerqq/ironid",
    stars: "3",
    forks: 0,
    primaryLang: "C#",
    imagePaths: [
      "https://images-ext-1.discordapp.net/external/xyhn0_x6rd1GXxAimMNS45tlHvzVR_Xpz_JgGmHorIw/https/opengraph.githubassets.com/da69218ff14930be4daf3b18ed171b94165e0c488886b0533f0e044f5c643115/ddjerqq/ironid?format=webp"
    ],
  },
  {
    name: "EFCoreDp",
    description: "A plugin for EF Core that adds support for encrypted AND queryable properties",
    url: "https://github.com/ddjerqq/Klean.EntityFrameworkCore.DataProtection",
    stars: "6",
    forks: 0,
    primaryLang: "C#",
    imagePaths: [
      "/images/efcoredp.png"
    ],
  },
  {
    name: "RGBPrint",
    description: "Print colorful gradients on your terminal!",
    url: "https://github.com/ddjerqq/rgbprint",
    stars: "37",
    forks: 3,
    primaryLang: "Python",
    imagePaths: [
      "/images/rgbprint.png"
    ],
  },
  {
    name: "QuickForm",
    description: "Blazor component library for creating downright gorgeous HTML forms with minimal effort.",
    url: "https://github.com/ddjerqq/quickform",
    stars: "38",
    forks: 7,
    primaryLang: "C#",
    imagePaths: [
      "/images/quickform.png"
    ],
  },
  {
    name: "veritas",
    description: "Cryptographically secure, digital election system with in-house blockchain technology",
    url: "https://github.com/ddjerqq/veritas",
    stars: "6",
    forks: 3,
    primaryLang: "C#",
    imagePaths: [
      "https://images-ext-1.discordapp.net/external/D2E-VtCAoGF382VT67g9wmK6jRkQfwD2SZ84MnSpy9E/https/opengraph.githubassets.com/e9527539935b0abb152a97eb969383857305373d09fb56874ab7fef9ba1ca840/ddjerqq/veritas?format=webp"
    ],
  },
  {
    name: "Blazorise",
    description: "A framework-agnostic component library built on top of Blazor",
    url: "https://github.com/megabit/blazorise",
    stars: "3.4k",
    forks: 532,
    primaryLang: "C#",
    imagePaths: [
      "/images/blazorise.png"
    ],
  },
  {
    name: "RustKit",
    description: "A Python library that adds option and result types to Python",
    url: "https://github.com/ddjerqq/rustkit",
    stars: "9",
    forks: 1,
    primaryLang: "Python",
    imagePaths: [
      "/images/rustkit.png"
    ],
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="items-center bg-dot-neutral-800">

      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black text-6xl text-center mt-16 mb-4">
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
              delay: index / 10,
              duration: 0.4,
              ease: "easeInOut",
            }}>
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex gap-2 mb-2">
                  <BookMarkedIcon/>
                  <a className="text-blue-500 underline underline-offset-2" href={project.url} target="_blank">
                    {project.name}
                  </a>
                </CardTitle>
                <CardDescription className="h-14">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel swipeable={true} emulateTouch={true} infiniteLoop={true} showStatus={false} showIndicators={true} showThumbs={false}>
                  {project.imagePaths.map((path, index) => (
                    <div>
                      <img src={path} alt="cover" className="aspect-1/2"/>
                    </div>
                  ))}
                </Carousel>
              </CardContent>
              <CardFooter className="flex justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star size={16}/>
                  {project.stars}
                </div>

                <div className="flex items-center gap-2">
                  <GitFork size={16}/>
                  {project.forks}
                </div>

                <div className="flex items-center gap-2">
                  <GitCompare size={16}/>
                  {project.primaryLang}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};