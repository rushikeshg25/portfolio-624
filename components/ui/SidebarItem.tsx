"use client";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  children: string;
  keyValue: string;
  href: string;
}

const SidebarItem = ({ children, keyValue, href }: SidebarItemProps) => {
  const router = useRouter();
  return (
    <Button
      key={keyValue}
      variant={"link"}
      className='py-0'
      onClick={() => router.push(href)}
    >
      {children}
    </Button>
  );
};

export default SidebarItem;
