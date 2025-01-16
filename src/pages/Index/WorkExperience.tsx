import React from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {textVariant} from "@/lib/motionUtils";
import {SectionWrapper} from "@/components/SectionWrapper";

const EXPERIENCES: Experience[] = [
  {
    title: "ASP.NET core Back End developer",
    company_url: "https://libertybank.ge/en/",
    company_name: "Liberty Bank",
    icon: "/images/liberty.png",
    date: "2020 - 2021",
    points: [
      "The true beginning of my .NET era, in this position I was introduced to a lot of OOP design patterns.",
      "Worked on a part of the automatic loan system.",
      "Wrote custom middleware that ensured that requests were valid.",
      "Gained invaluable experience with web development, learned teamwork in a large corporate setting.",
    ],
  },
  {
    title: "Full Stack Web developer",
    company_url: "https://mavefund.com",
    company_name: "Contract - Mavefund",
    icon: "/images/mavefund.webp",
    date: "2021 - 2022",
    points: [
      "Direct the initial team of 3 other developers to build the whole skeleton of the app, along the main UI components.",
      "Reviewed code and conducted testing for all features which were implemented",
    ],
  },
  {
    title: "ASP.NET core Full Stack Web developer",
    company_url: "https://www.cog.ge",
    company_name: "Children Of Georgia",
    icon: "/images/cog.png",
    date: "2022 - 2023",
    points: [
      "Built and maintained an ASP.NET core web app, used Blazor server, EFcore, Mediator, etc.",
      "Built the entire app myself, from database management, web development, to hosting and cloudflare integration.",
    ],
  },
  {
    title: "Full Stack Web3 Developer",
    company_url: "https://hinkal.pro",
    company_name: "Hinkal Protocol",
    icon: "/images/hinkal.png",
    date: "2023 - 2024",
    points: [
      "Won first place on their hackathon event in Tbilisi, Georgia.",
      "Worked with NodeJs, ReactJs, MongoDB, TailwindCSS, and many more technologies in this crypto startup company. Mainly focused on web3 development.",
      "Worked on the landing page, roadmap and GMX integration features.",
    ],
  },
  {
    title: "OSS Developer",
    company_url: "https://blazorise.com",
    company_name: "Blazorise",
    icon: "/images/blazorise.svg",
    date: "2024 - 2025",
    points: [
      "Contributed to development of the form components.",
      "Contributed to development of the internal base components.",
      "Wrote blogs about Blazor and Blazorise.",
    ],
  },
  {
    title: "ASP.NET core Full Stack Web developer",
    company_url: "https://chfs.ge",
    company_name: "Child Family Society",
    icon: "/images/chfs.png",
    date: "2024 - 2025",
    points: [
      "Materialized a client’s idea into a real app. I did everything from:",
      "Writing the business process that matched with the client’s requirements, to buying their domain, to writing the full stack web app (once again using my template),",
      "Containerizing the app using docker, setting up CI-CD pipelines using github actions that auto-test and auto-deploy new changes to the cloud,",
      "Integrating SEQ for log analytics, implementing rate limits,",
      "custom (FlagEnum) Permission based authorization flows, and much, much more.",
      "Built the entire front-end of the project using Blazor server.",
    ],
  },
  {
    title: "ASP.NET core Full Stack Web developer",
    company_url: "https://sangoway.ge",
    company_name: "SanGoWay",
    icon: "/images/sangoway.png",
    date: "2024 - 2025",
    points: [
      "Created the full stack web app using my DDD template",
      "Writing the business process that matched with the client’s requirements, to buying their domain, to writing the full stack web app",
      "Containerizing the app using docker, setting up CI-CD pipelines using github actions that auto-test and auto-deploy new changes to the cloud,",
      "Integrating SEQ for log analytics, implementing rate limits,",
      "Used Amazon S3 for package invoice storage",
      "Integrated payments using Stripe API",
      "Used Redis for caching.",
      "Used gRPC and microservice architecture.",
      "Integrated Apache Kafka for notification streaming.",
    ],
  }
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