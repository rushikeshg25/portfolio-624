import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";

const Page = () => {
  return (
    <main className='flex flex-col items-center  '>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Page;
