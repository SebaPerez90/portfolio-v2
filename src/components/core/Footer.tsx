import type { LocaleData } from '@/types';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import SocialLinks from './SocialLinks';

const iconDictionary: { [key: number | string]: JSX.Element } = {
  1: <FaLocationDot size={20} />,
  2: <HiOutlineMailOpen size={20} />,
  3: <FaPhoneAlt size={20} />,
};

const Footer = () => {
  const { t } = useTranslation();

  const contactData = t('footer.content', { returnObjects: true });

  const homeRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current && window.scrollY > 800) {
        homeRef.current?.classList.replace('opacity-0', 'opacity-1');
        homeRef.current?.classList.remove('pointer-events-none');
      } else {
        homeRef.current?.classList.replace('opacity-1', 'opacity-0');
        homeRef.current?.classList.add('pointer-events-none');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer-section" className="col-center w-full dark:bg-dark-neutral relative pt-10">
      <a ref={homeRef} href="#hero-section" className="opacity-0 transition-all duration-500 pointer-events-none z-50">
        <button
          type="button"
          className="fixed right-5 bottom-10  bg-custom-blue dark:bg-custom-orange text-white rounded-full p-4 cursor-pointer animate-bounce"
        >
          <FaArrowUp size={20} />
        </button>
      </a>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-[clamp(300px,100%,600px)] flex-wrap gap-20 md:gap-0">
        <ul className="flex flex-col gap-10">
          {(contactData as Array<LocaleData>).map((element) => (
            <li key={element.id} className="flex items-center gap-1 text-purple-500 dark:text-custom-orange">
              {iconDictionary[element.id]}
              <div className="flex flex-col">
                <span className="font-bold">{element.title}</span>
                <span className="font-medium text-sm text-black dark:text-white">{element.description}</span>
              </div>
            </li>
          ))}
        </ul>
        <SocialLinks subtitle={t('footer.subtitle')} />
      </div>
      <hr className="h-[2px] mt-8 bg-gray-300 w-[70%]" />
      <span className="w-max font-medium text-sm my-2 text-custom-black dark:text-white">© 2025 Portfolio | Sebastian Perez</span>
    </footer>
  );
};

export default Footer;
