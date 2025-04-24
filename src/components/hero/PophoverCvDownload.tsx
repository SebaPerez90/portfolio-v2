import { DonwloadBtn } from '@/components/ui/DonwloadBtn';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FaRegFileAlt } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const PophoverCvDownload = ({ label }: { label: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size={'lg'} variant={'outline'}>
          {label}
          <FaRegFileAlt size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max flex flex-col gap-1 mt-2 p-1 dark:border-slate-600/60">
        <DonwloadBtn label="english.pdf" fileName="sebastian_perez.pdf" href="sebastian_perez.pdf" />
        <DonwloadBtn label="español.pdf" fileName="sebastian-perez.pdf" href="sebastian-perez.pdf" />
      </PopoverContent>
    </Popover>
  );
};

export default PophoverCvDownload;
