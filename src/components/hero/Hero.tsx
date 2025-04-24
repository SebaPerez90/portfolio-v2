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
      className="w-full relative bg-white dark:bg-dark-neutral row-center h-screen overflow-x-hidden lg:gap-32 px-8"
    >
      <Beams />
      <div className="animate-[image-filter_300ms_ease-out_forwards] w-full lg:w-[40%] col-center items-start z-40 ">
        <h1 className="text-[130px] leading-[0.8] dark:text-slate-50 text-custom-black font-black architects-daughter-regular">
          <strong className="text-[130px] leading-[0.8] dark:text-dark-sky text-custom-blue dark:text-custom-orange architects-daughter-regular">
            Frontend
          </strong>
          <br />
          Developer
        </h1>
        <p className="paragraph mt-10">
          <strong>{t('hero.strong')}</strong>
          <br />
          <br />
          {t('hero.description')}
        </p>

        <div className="z-50 row-center mt-7">
          <Button size={'lg'} variant={'primary'}>
            Hablemos
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
