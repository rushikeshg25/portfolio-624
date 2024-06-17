"use client";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  children: string;
  key: string;
  href: string;
}

const SidebarItem = ({ children, key, href }: SidebarItemProps) => {
  const router = useRouter();
  return (
    <Button variant={"link"} className='' onClick={() => router.push(href)}>
      {children}
    </Button>
  );
};

export default SidebarItem;
