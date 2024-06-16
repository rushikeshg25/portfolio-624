import { cn } from "@/lib/utils";

const BackgroundContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("background-design", className)}>
      <div className='blur-gradient' />
      <div className='relative z-10'>{children}</div>
    </div>
  );
};

export default BackgroundContainer;
