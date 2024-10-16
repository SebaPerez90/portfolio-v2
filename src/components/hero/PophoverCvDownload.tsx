import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const PophoverCvDownload = ({ label }: { label: string }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const linkStyles =
    'row-center px-6 py-4 rounded-md font-medium hover:duration-300 duration-300 hover:bg-slate-200/70 dark:hover:bg-custom-orange/20 text-slate-500 hover:text-slate-600 dark:text-white';

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={'lg'} variant={'secondary'} className="z-50 flex gap-3 text-purple-500 dark:text-custom-orange items-center">
          {label}
          <MdDownload size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max flex flex-col gap-1 mt-2 p-1 dark:border-slate-600/60">
        <button type="button" onClick={() => setIsDownloaded(!isDownloaded)}>
          <a
            aria-label="curriculum formato pdf en ingles"
            className={linkStyles}
            href="sebastian_perez.pdf"
            download="sebastian_perez.pdf"
          >
            cv-english.pdf <span className='text-purple-500 dark:text-custom-orange'><FaRegFilePdf size={20} /></span>
          </a>
        </button>
        <button type="button" onClick={() => setIsDownloaded(!isDownloaded)}>
          <a
            aria-label="curriculum formato pdf en español"
            className={linkStyles}
            href="sebastian-perez.pdf"
            download="sebastian-perez.pdf"
          >
            cv-español.pdf <span className='text-purple-500 dark:text-custom-orange'><FaRegFilePdf size={20} /></span>
          </a>
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default PophoverCvDownload;
