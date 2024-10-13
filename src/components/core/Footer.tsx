import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import type { LocaleData } from '@/types';

const iconDictionary: { [key: number | string]: JSX.Element } = {
  1: <FaLocationDot size={20} color="#a855f7" />,
  2: <HiOutlineMailOpen size={20} color="#a855f7" />,
  3: <FaPhoneAlt size={20} color="#a855f7" />,
};
const Footer = () => {
  const { t } = useTranslation();

  const contactData = t('footer.content', { returnObjects: true });

  return (
    <footer id="footer-section" className="col-center w-full pt-20 xl:bg-white bg-white md:bg-ligth-soft z-10">
      <ul className="flex-col items-start  flex lg:flex-row lg:items-center justify-center gap-12 lg:gap-32 my-10 lg:pl-0 min-[500px]-pl-28 pl-16">
        {(contactData as Array<LocaleData>).map((element) => (
          <li key={element.id} className="flex items-center gap-1">
            {iconDictionary[element.id]}
            <div className="flex flex-col">
              <span className="font-bold text-purple-500">{element.title}</span>
              <span className="font-medium min-[500px]:text-sm text-xs">{element.description}</span>
            </div>
          </li>
        ))}
      </ul>
      <hr className="h-[2px] bg-gray-300 w-[70%]" />
      <SocialLinks />
      <span className="w-max font-medium text-sm my-2">© 2024 Portfolio | Sebastian Perez</span>
    </footer>
  );
};

export default Footer;
