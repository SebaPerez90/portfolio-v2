import AvatarProfile from '@/components/hero/AvatarProfile';
import { useTranslation } from 'react-i18next';
import { IoIosSend } from 'react-icons/io';
import { Button } from '../ui/button';
import Beams from './Beams';
import PophoverCvDownload from './PophoverCvDownload';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero-section"
      className="w-full relative sm:pt-32 bg-white dark:bg-dark-neutral row-center h-screen overflow-x-hidden px-8 sm:px-12 gap-20"
    >
      <Beams />
      <div className="animate-[image-filter_300ms_ease-out_forwards] w-full lg:w-[40%] col-center items-start z-40">
        <h1 className="md:text-[130px] text-6xl sm:text-[100px] leading-[0.8] dark:text-slate-50 text-[#3e3e3e] font-black architects-daughter-regular">
          <strong className="md:text-[130px] text-6xl sm:text-[100px] leading-[0.8] text-transparent bg-gradient-to-r from-purple-500 to-custom-blue bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-orange-400 dark:to-yellow-300 architects-daughter-regular">
            Frontend
          </strong>
          <br />
          Developer
        </h1>
        <p className="paragraph mt-10 w-full max-w-[700px]">
          <strong>{t('hero.strong')}</strong>
          <br />
          <br />
          {t('hero.description')}
        </p>

        <div className="z-50 flex items-center justify-center gap-5 mt-10 flex-wrap sm:flex-nowrap">
          <Button size={'lg'} variant={'primary'} className="w-[185.52px]">
            <a href="#contact-section">{t('hero.CTA3')}</a>
            <IoIosSend size={18} />
          </Button>
          <PophoverCvDownload label={t('hero.CTA2')} />
        </div>
      </div>
      <AvatarProfile />
    </section>
  );
};

export default Hero;
