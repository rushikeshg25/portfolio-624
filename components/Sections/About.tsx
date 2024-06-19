import Link from "next/link";
import GradualSpacing from "../magicui/gradual-spacing";

const About = () => {
  return (
    <div className='flex flex-col pt-10'>
      {/* <div className='text-5xl font-semibold'>Rushikesh Ghotekar</div> */}
      <GradualSpacing
        className='font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]'
        text='Rushikesh Ghotekar'
      />
      <div className='text-subheading text-xl px-1 italic'>
        Fullstack Developer
      </div>
      <div className='mt-9 text-wrap text-justify'>
        Welcome to my Portfolio Website! I am Your friendly neighborhood
        Software Developer based out of Mumbai, India. I spend my days (and
        often nights) painting the Internet canvas with{" "}
        <Link href='/#projects' className='font-bold'>
          PROJECTS
        </Link>{" "}
        and lines of code, turning zeroes and ones into cools and useful
        experiences.
      </div>
    </div>
  );
};

export default About;
