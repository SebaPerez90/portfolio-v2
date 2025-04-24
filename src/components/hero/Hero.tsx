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
      className="w-full relative bg-white dark:bg-dark-neutral row-center h-screen overflow-x-hidden lg:gap-32 px-6 md:px-14"
    >
      <Beams />
      <div className="animate-[image-filter_300ms_ease-out_forwards] w-[50%] md:w-[32em] col-center items-start z-40">
        <h1 className="text-7xl dark:text-slate-50 text-custom-black font-black">
          <strong className="dark:text-dark-sky text-7xl text-custom-blue dark:text-custom-orange">Front</strong>
          end
          <br />
          Developer
        </h1>
        <p className="paragraph xl:mt-4">
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
