"use client";
import SidebarTabs from "@/lib/SidebarTabs";
import { cn } from "@/lib/utils";
import SidebarItem from "./ui/SidebarItem";
import Socials from "./Socials";
import { ModeToggle } from "./ui/ThemeToggleButton";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col w-28 h-full ", className)}>
      <div>Logo</div>
      {SidebarTabs.map((tab) => (
        <SidebarItem key={tab.name} href={tab.href}>
          {tab.name}
        </SidebarItem>
      ))}
      <div className='mt-auto'>
        <ModeToggle />
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
