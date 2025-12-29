import React from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {textVariant} from "@/lib/motionUtils";
import {SectionWrapper} from "@/components/SectionWrapper";

const EXPERIENCES: Experience[] = [
  {
    title: "Senior Full Stack ASP.NET Core Developer",
    company_url: "https://engini.io",
    company_name: "Engini.io",
    icon: "/images/engini.png",
    date: "2025 - 2025",
    points: [
      "Led a team of 3 developers and wrote the majority of the component library for the entire project.",
      "Completely redesigned the entire UI of the legacy application.",
      "Played a major part in migrating the Blazor client from .NET 6 to .NET 10.",
      "Built the entire subproject for the company's MCP server and chatbot.",
      "Decreased the main dashboard page’s load time by ~35% by introducing AOT.",
      "Worked closely with the CEO to align business goals and steer the design.",
    ],
  },
  {
    title: "Team lead / Senior ASP.NET Core Developer",
    company_url: "https://sangoway.ge",
    company_name: "SanGoWay",
    icon: "/images/sangoway.png",
    date: "2024 - 2025",
    points: [
      "Led a team of 3 and created a full stack web app using a DDD template with microservice architecture.",
      "Implemented CI/CD pipelines with GitHub Actions, integrated SEQ for log analytics, and used AWS S3 for storage.",
      "Integrated Stripe API payments, Redis caching, and gRPC.",
      "Completely overhauled the UI and increased user retention rate by 28%.",
    ],
  },
  {
    title: "Senior Full Stack ASP.NET Core Developer",
    company_url: "https://chfs.ge",
    company_name: "Child Family Society",
    icon: "/images/chfs.png",
    date: "2024 - ongoing",
    points: [
      "Led a team of 4 and materialized client's ideas from business requirements to full deployment.",
      "Built the entire front-end using Blazor Server with custom permission-based authorization flows.",
      "Implemented Docker containerization, CI/CD pipelines, SEQ log analytics, and rate limiting.",
    ],
  },
  {
    title: "OSS Developer",
    company_url: "https://blazorise.com",
    company_name: "Blazorise",
    icon: "/images/blazorise.svg",
    date: "2023 - 2024",
    points: [
      "Contributed to development of components and internal base components.",
      "Optimized WASM components to reduce library download size by 20%.",
      "Wrote blogs about Blazor and Blazorise usage.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_url: "https://hinkal.pro",
    company_name: "Hinkal Protocol",
    icon: "/images/hinkal.png",
    date: "2023 - 2024",
    points: [
      "Won first place at a hackathon event in Tbilisi, Georgia.",
      "Worked with Node.js, React, MongoDB, and Tailwind CSS in a crypto startup.",
      "Developed landing page, roadmap, and integration features.",
    ],
  },
  {
    title: "Full Stack ASP.NET Core Developer",
    company_url: "https://mavefund.com",
    company_name: "Maverick Tech",
    icon: "/images/mavefund.webp",
    date: "2022 - 2023",
    points: [
      "Led a team of 2 other developers to build the whole skeleton of the app, along with the main UI components.",
      "Reviewed code and conducted testing for all features which were implemented.",
    ],
  },
  {
    title: "Full Stack ASP.NET Core Developer",
    company_url: "https://www.cog.ge",
    company_name: "Children Of Georgia",
    icon: "/images/cog.png",
    date: "2022 - ongoing",
    points: [
      "Built an ASP.NET core web app using Blazor server, EFcore, Mediator, and DDD principles.",
      "Managed the entire lifecycle: database management, backend API, and front-end components.",
      "Implemented role-based authorization, custom reporting, and CI/CD pipelines with GitHub Actions and Docker.",
    ],
  },
  {
    title: "Intern Back-End Developer",
    company_url: "https://libertybank.ge/en/",
    company_name: "Liberty Bank",
    icon: "/images/liberty.png",
    date: "2021 - 2022",
    points: [
      "Introduced to OOP concepts, design patterns, and SCRUM/AGILE methodologies using JIRA.",
      "Worked on an automatic loan system and wrote custom middleware for request validation.",
      "Gained experience with web development and teamwork in a large corporate setting.",
    ],
  },
];

export interface Experience {
  title: string;
  company_name: string;
  company_url: string;
  date: string;
  icon: string;
  points: string[];
}

const ExperienceCard = ({experience}: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0A0A0A",
        color: "#f4f4f4",
        border: "1px solid #262626"
      }}
      date={experience.date}
      icon={
        <div className="flex justify-center bg-white rounded-full items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="rounded-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold leading-7">{experience.title}</h3>
        <a href={experience.company_url} className="font-bold text-blue-500 mt-2 underline underline-offset-2">{experience.company_name}</a>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-1">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const WorkExperience = () => {
  return (
    <SectionWrapper id="work-experience" className="items-center bg-dot-neutral-800">
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black text-6xl text-center mt-16 mb-4">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};