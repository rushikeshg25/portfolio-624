import {
  SiTypescript,
  SiReact,
  SiPrisma,
  SiExpress,
  SiSpringboot,
  SiTurborepo,
  SiClerk,
  SiMui,
  SiCloudinary,
  SiChakraui,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAws, FaDocker, FaNodeJs, FaJava } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";

export const icons: { [key: string]: any } = {
  Typescript: SiTypescript,
  React: SiReact,
  Prisma: SiPrisma,
  Express: SiExpress,
  Springboot: SiSpringboot,
  NextJs: RiNextjsFill,
  TailwindCSS: RiTailwindCssFill,
  NodeJs: FaNodeJs,
  Javascript: IoLogoJavascript,
  PostgreSQL: BiLogoPostgresql,
  Redis: DiRedis,
  AWS: FaAws,
  Docker: FaDocker,
  Java: FaJava,
  Turborepo: SiTurborepo,
  Clerk: SiClerk,
  Websockets: TbBrandSocketIo,
  MUI: SiMui,
  Cloudinary: SiCloudinary,
  ChakraUI: SiChakraui,
};

export const projects: {
  name: string;
  description: string;
  GithubLink: string;
  DeployedLink?: string;
  TechStack: string[];
}[] = [
  {
    name: "Poll-eze",
    description: "Creating Polls made easy",
    GithubLink: "https://github.com/rushikeshg25/Poll-eze",
    DeployedLink: "https://poll-eze.vercel.app/",
    TechStack: [
      "NextJs",
      "TailwindCSS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
    ],
  },
  {
    name: "BidRealm",
    description: "Auction/Betting Platform",
    GithubLink: "https://github.com/rushikeshg25/BidRealm",
    TechStack: [
      "NextJs",
      "Turborepo",
      "Websockets",
      "TailwindCSS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    name: "Rent My Space",
    description: "List your homes and rent them with ease",
    GithubLink: "https://github.com/rushikeshg25/rent-app",
    TechStack: [
      "NextJs",
      "TailwindCSS",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "Cloudinary",
    ],
  },
  {
    name: "Social-eze",
    description: "Modern social media made easy",
    GithubLink: "https://github.com/rushikeshg25/Social-eze",
    TechStack: ["ReactJs", "NodeJs", "JavaScript", "MongoDB", "MUI"],
  },
  {
    name: "Codewise",
    description:
      "Code with ease using Codewise which supports C++,JavaScript,Java and Python",
    GithubLink: "https://github.com/rushikeshg25/Social-eze",
    DeployedLink: "https://codewise-iota.vercel.app/",
    TechStack: ["ReactJs", "NodeJs", "JavaScript", "MongoDB"],
  },
  {
    name: "QuizWiser",
    description:
      "Test your knowledge with QuizWiser with questions on random Questions",
    GithubLink: "https://github.com/rushikeshg25/Social-eze",
    DeployedLink: "https://quizwiser.netlify.app/",
    TechStack: ["ReactJs", "ChakraUI", "JavaScript"],
  },
];
