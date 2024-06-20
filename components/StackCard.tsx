import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface StackCardProps {
  stackName: string;
  stackLogo: React.ElementType<{ className?: string }>;
}

const StackCard: React.FC<StackCardProps> = ({
  stackName,
  stackLogo: StackLogo,
}) => {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='p-2 gap-2 bg-gray-50 flex flex-row relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl border'>
        <CardItem
          translateZ='60'
          className='flex items-center justify-center text-xl font-bold text-neutral-600 dark:text-white'
        >
          <StackLogo className='w-6 h-6' />
        </CardItem>

        <div className=''>
          <CardItem
            translateZ={60}
            className='text-lg font-normal rounded-xl dark:text-white'
          >
            {stackName}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default StackCard;
