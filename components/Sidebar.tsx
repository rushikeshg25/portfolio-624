"use client";
import SidebarTabs from "@/lib/SidebarTabs";
import { cn } from "@/lib/utils";
import SidebarItem from "./ui/SidebarItem";
import Socials from "./Socials";
import { ModeToggle } from "./ui/ThemeToggleButton";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col w-28 h-full ", className)}>
      <div className='flex items-center justify-center mb-12'>Logo</div>
      <div className='flex flex-col items-center justify-center border-b-2'>
        {SidebarTabs.map((tab) => (
          <SidebarItem keyValue={tab.name} href={tab.href}>
            {tab.name}
          </SidebarItem>
        ))}
      </div>
      <div className='mt-auto border-t-2'>
        <ModeToggle />
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
