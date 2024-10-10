import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const PophoverCvDownload = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const linkStyles =
    'row-center px-6 py-4 rounded-md font-medium hover:duration-300 duration-300 hover:bg-slate-200/70 text-slate-500 hover:text-slate-600';

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"lg"} variant={"secondary"} className="flex gap-3 items-center">
          Descargar cv
          <MdDownload color='#a855f7' size={25}/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max flex flex-col gap-1 mt-2 p-1">
        <button type="button" onClick={() => setIsDownloaded(!isDownloaded)}>
          <a
            aria-label="curriculum formato pdf en ingles"
            className={linkStyles}
            href="/sebastian-perez-en.pdf"
            download="sebastian_perez.pdf"
          >
            cv-english.pdf <FaRegFilePdf />
          </a>
        </button>
        <button type="button" onClick={() => setIsDownloaded(!isDownloaded)}>
          <a
            aria-label="curriculum formato pdf en español"
            className={linkStyles}
            href="/sebastian-perez-es.pdf"
            download="sebastian-perez.pdf"
          >
            cv-español.pdf <FaRegFilePdf />
          </a>
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default PophoverCvDownload;
