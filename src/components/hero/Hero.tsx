import AvatarProfile from '@/components/hero/AvatarProfile';
import { Button } from '../ui/button';
import Beams from './Beams';
import PophoverCvDownload from './PophoverCvDownload';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('div, h1, p', { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }, { delay: stagger(0.2), duration: 0.4 });
    }
  }, [animate, isInView, scope]);

  return (
    <section
      id="hero-section"
      className="w-full relative bg-white dark:bg-dark-neutral row-center h-screen overflow-x-hidden lg:gap-32 px-6 md:px-14"
    >
      <Beams />
      <motion.div ref={scope} className="w-[50%] md:w-[32em] col-center items-start z-40">
        <motion.h1
          initial={{ opacity: 0, scale: 0, x: 400, filter: 'blur(5px)' }}
          className="text-7xl xl:text-8xl dark:text-slate-50 text-custom-black font-black"
        >
          <strong className="dark:text-dark-sky text-7xl xl:text-8xl text-custom-blue dark:text-custom-orange">Front</strong>
          end
          <br />
          Developer
        </motion.h1>
        <motion.p initial={{ opacity: 0, scale: 0, x: 400, filter: 'blur(5px)' }} className="paragraph xl:mt-4">
          <strong>{t('hero.strong')}</strong>
          <br />
          <br />
          {t('hero.description')}
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0, x: 400, filter: 'blur(5px)' }} className="z-50 row-center mt-2">
          <Button size={'lg'} variant={'primary'}>
            <a href="https://codevibes.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {t('hero.CTA1')}
              <HiOutlineExternalLink size={20} />
            </a>
          </Button>
          <PophoverCvDownload label={t('hero.CTA2')} />
        </motion.div>
      </motion.div>
      <AvatarProfile />
    </section>
  );
};

export default Hero;
