"use client";
import {
  SiTypescript,
  SiReact,
  SiPrisma,
  SiExpress,
  SiCplusplus,
  SiSpringboot,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAws, FaDocker, FaNodeJs, FaJava } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

import StackCard from "../StackCard";
const Stack = () => {
  return (
    <div className='flex flex-col gap-7 py-8'>
      <div className='flex '>
        <h1 className='text-3xl font-semibold'>Stack</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-3  px-2'>
        <StackCard stackLogo={SiTypescript} stackName='Typescript' />
        <StackCard stackLogo={IoLogoJavascript} stackName='Javascript' />
        <StackCard stackLogo={SiReact} stackName='React' />
        <StackCard stackLogo={FaNodeJs} stackName='NodeJs' />
        <StackCard stackLogo={RiNextjsFill} stackName='NextJs' />
        <StackCard stackLogo={SiExpress} stackName='Express' />
        <StackCard stackLogo={RiTailwindCssFill} stackName='Tailwind CSS' />
        <StackCard stackLogo={SiPrisma} stackName='Prisma' />
        <StackCard stackLogo={SiCplusplus} stackName='C++' />
        <StackCard stackLogo={BiLogoPostgresql} stackName='Postgres' />
        <StackCard stackLogo={DiRedis} stackName='Redis' />
        <StackCard stackLogo={FaAws} stackName='AWS' />
        <StackCard stackLogo={FaDocker} stackName='Docker' />
        <StackCard stackLogo={FaJava} stackName='Java' />
        <StackCard stackLogo={SiSpringboot} stackName='Springboot' />
      </div>
      <div className='text-md'>
        My Strength is building core web applications which are problem-solving
        and scalable. I'm currently working with TypeScript,NextJs and Postgres.
      </div>
    </div>
  );
};

export default Stack;
