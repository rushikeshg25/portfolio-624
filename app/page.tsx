import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import Connect from "@/components/Sections/Connect";
import Stack from "@/components/Sections/Stack";

const Page = () => {
  return (
    <main className='flex flex-col items-center gap-10'>
      <About />
      <Stack />
      <Projects />
      <Connect />
    </main>
  );
};

export default Page;
