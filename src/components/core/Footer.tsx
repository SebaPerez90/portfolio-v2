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
    <footer id="footer-section" className="col-center w-full pt-6">
      <ul className="flex flex-col items-start gap-10 pl-16 sm:flex sm:items-center sm:flex-row sm:gap-20 sm:pl-0 my-10">
        {(contactData as Array<LocaleData>).map((element) => (
          <li key={element.id} className="flex items-center gap-1">
            {iconDictionary[element.id]}
            <div className="flex flex-col">
              <span className="font-bold">{element.title}</span>
              <span className="font-medium text-sm">{element.description}</span>
            </div>
          </li>
        ))}
      </ul>
      <SocialLinks />
      <hr className="h-[2px] bg-gray-300 w-[70%]" />
      <span className="w-max font-medium text-sm my-2">© 2024 Portfolio | Sebastian Perez</span>
    </footer>
  );
};

export default Footer;
