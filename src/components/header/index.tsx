import { LanguageSelect } from '@/components/header/LanguageSelect';
import MobileMenu from '@/components/header/MobileMenu';
import NavegationLinks from '@/components/header/NavegationLinks';
import ThemeButton from '@/components/header/ThemeButton';
import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && window.scrollY !== 0) {
        headerRef.current.classList.add('bg-white', 'dark:bg-dark-soft', '[box-shadow:0_0_30px_0_#00000033]');
      } else {
        headerRef.current?.classList.remove('bg-white', 'dark:bg-dark-soft', '[box-shadow:0_0_30px_0_#00000033]');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="duration-1000 flex items-center fixed w-full justify-between px-7 py-5 backdrop-blur-md z-50"
    >
      <span className="text-custom-blue dark:text-custom-orange font-extrabold text-2xl">SebaPerez</span>
      <NavegationLinks disappear={'hidden md:block'} flexDirection={'row-center'} />
      <div className="max-[768px]:hidden row-center gap-3">
        <LanguageSelect />
        <ThemeButton />
      </div>
      {/* mobile menu is available when viewport width is less than 640 px */}
      <MobileMenu />
    </header>
  );
};

export default Header;
