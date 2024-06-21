"use client";

import { MagicCard, MagicContainer } from "@/components/magic-card";
import { projects } from "@/lib/Projects";
import { Button } from "../ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
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
  SiMongodb,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAws, FaDocker, FaNodeJs, FaJava } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";
import Connect from "./Connect";
import { GlareCard } from "../ui/glare-card";

export const icons: { [key: string]: JSX.Element } = {
  TypeScript: <SiTypescript size={22} />,
  ReactJs: <SiReact size={22} />,
  Prisma: <SiPrisma size={22} />,
  Express: <SiExpress size={22} />,
  Springboot: <SiSpringboot size={22} />,
  NextJs: <RiNextjsFill size={22} />,
  TailwindCSS: <RiTailwindCssFill size={22} />,
  NodeJs: <FaNodeJs size={22} />,
  JavaScript: <IoLogoJavascript size={22} />,
  PostgreSQL: <BiLogoPostgresql size={22} />,
  Redis: <DiRedis size={22} />,
  AWS: <FaAws size={22} />,
  Docker: <FaDocker size={22} />,
  Java: <FaJava size={22} />,
  Turborepo: <SiTurborepo size={22} />,
  Clerk: <SiClerk />,
  Websockets: <TbBrandSocketIo size={22} />,
  MUI: <SiMui size={22} />,
  Cloudinary: <SiCloudinary size={22} />,
  MongoDB: <SiMongodb size={22} />,
  ChakraUI: <SiChakraui size={22} />,
};

const Projects = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <div className='flex flex-col w-full py-8 gap-7'>
      <div className='flex gap-3'>
        <h1 className='text-3xl font-semibold'>Projects</h1>
        <div className='flex items-center text-subheading'>
          (Sorted by most recent)
        </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2  gap-4 "}>
        {projects.map((project) => (
          <GlareCard
            key={project.name}
            className='flex flex-col w-full shadow-2xl cursor-pointer'
          >
            <div className='flex flex-col gap-1'>
              <div className='font-semibold'>{project.name}</div>
              <div className='text-subheading'>{project.description}</div>
              <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row justify-end gap-2'>
                  {project.TechStack.map((tech) => (
                    <div
                      key={tech}
                      className='flex items-center justify-center'
                    >
                      {icons[tech]}
                    </div>
                  ))}
                </div>
                <div className='flex flex-row gap-2'>
                  {project.DeployedLink && (
                    <Button
                      className='dark:bg-black'
                      variant={"outline"}
                      onClick={() => {
                        if (project.DeployedLink) {
                          router.push(project.DeployedLink);
                        }
                      }}
                    >
                      <FaExternalLinkAlt size={22} />
                    </Button>
                  )}
                  <Button className='dark:bg-black' variant={"outline"}>
                    <FaGithub size={22} />
                  </Button>
                </div>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(150,145,150,0.3),rgba(255,255,255,0))]' />
          </GlareCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;

{
  /* <MagicCard className='flex flex-col items-center justify-center w-full p-20 overflow-hidden shadow-2xl cursor-pointer'>
  <p className='z-10 text-4xl font-medium text-gray-800 whitespace-nowrap dark:text-gray-200'>
    Magic
  </p>
  <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
</MagicCard>
<MagicCard className='flex flex-col items-center justify-center w-full p-20 overflow-hidden shadow-2xl cursor-pointer'>
  <p className='z-10 text-4xl font-medium text-gray-800 whitespace-nowrap dark:text-gray-200'>
    Card
  </p>
  <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
</MagicCard>
<MagicCard className='flex flex-col items-center justify-center w-full p-20 overflow-hidden shadow-2xl cursor-pointer'>
  <p className='z-10 text-4xl font-medium text-gray-800 whitespace-nowrap dark:text-gray-200'>
    Demo
  </p>
  <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
</MagicCard>*/
}
