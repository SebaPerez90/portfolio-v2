import AvatarProfile from '@/components/hero/AvatarProfile';
import { Button } from '../ui/button';
import Beams from './Beams';
import PophoverCvDownload from './PophoverCvDownload';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero-section"
      className="w-full relative bg-white dark:bg-dark-neutral row-center h-screen overflow-x-hidden lg:gap-32 px-6 md:px-14"
    >
      <Beams />
      <div className="w-[50%] md:w-[32em] col-center items-start z-40">
        <h1 className="text-7xl xl:text-8xl dark:text-slate-50 text-custom-black font-black">
          <strong className="dark:text-dark-sky text-7xl xl:text-8xl text-custom-blue dark:text-custom-orange">Front</strong>
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

        <div className="z-50 row-center mt-2">
          <Button size={'lg'} variant={'primary'}>
            <a href="https://codevibes.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
              {t('hero.CTA1')}
              <HiOutlineExternalLink size={20}/>
            </a>
          </Button>
          <PophoverCvDownload label={t('hero.CTA2')} />
        </div>
      </div>
      <AvatarProfile />
    </section>
  );
};

export default Hero;
