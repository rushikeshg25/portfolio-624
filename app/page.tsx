import { ModeToggle } from "@/components/ui/ThemeToggleButton";
import React from "react";

const Home = () => {
  return (
    <div className='bg-red-600 dark:text-white text-white'>
      Home <ModeToggle />
    </div>
  );
};

export default Home;
