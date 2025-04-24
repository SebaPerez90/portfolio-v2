import type { LocaleNavLinks } from '@/types/index';
import { useTranslation } from 'react-i18next';

interface NavegationLinksProps {
  disappear: string;
  flexDirection: string;
}

const NavegationLinks = ({ disappear, flexDirection }: NavegationLinksProps) => {
  const { t } = useTranslation();

  const navLinks = t('header.content', { returnObjects: true });

  return (
    // We use this prop when we want to hide the desktop menu
    <nav className={`${disappear}`}>
      <ul
        // we use this prop when we want to hide change the flex direction of the links
        className={`${flexDirection} gap-10`}
      >
        {(navLinks as Array<LocaleNavLinks>).map((link) => (
          <li
            key={link.id}
            aria-label={link.ariaLabel}
            className="font-medium text-custom-black dark:text-white hover:text-purple-400 hover:dark:text-custom-orange hover:duration-200 duration-200 relative before:-bottom-1 before:absolute before:left-0 before:w-0 before:h-1 before:bg-purple-400 before:dark:bg-custom-orange hover:before:w-full hover:before:duration-200 before:duration-200 before:rounded-full"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavegationLinks;
