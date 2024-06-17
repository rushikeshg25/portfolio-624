"use client";
import SidebarTabs from "@/lib/SidebarTabs";
import { cn } from "@/lib/utils";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col w-64  ", className)}>
      <div>Logo</div>
      {SidebarTabs.map((tab) => (
        <div key={tab.name}>{tab.name}</div>
      ))}
      <div>Socials</div>
    </div>
  );
};

export default Sidebar;
