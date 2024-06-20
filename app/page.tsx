import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Stack from "@/components/Sections/Stack";

const Page = () => {
  return (
    <main className='flex flex-col items-center '>
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
