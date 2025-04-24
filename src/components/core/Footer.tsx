import type { LocaleData } from '@/types';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from 'react-icons/fa';
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

  return (
    <footer id="footer-section" className="col-center w-full dark:bg-dark-deep pt-10">
      <div className="flex justify-between items-end w-[clamp(300px,100%,700px)]">
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
      <span className="w-max font-medium text-sm my-2 text-custom-black dark:text-white">© 2024 Portfolio | Sebastian Perez</span>
    </footer>
  );
};

export default Footer;
