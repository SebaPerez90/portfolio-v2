import avatar_profile from '@/assets/avatar-profile.webp';
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
        headerRef.current.classList.add('bg-white/40', 'dark:bg-dark-soft/40', '[box-shadow:0_0_30px_0_#00000033]');
      } else {
        headerRef.current?.classList.remove('bg-white/40', 'dark:bg-dark-soft/40', '[box-shadow:0_0_30px_0_#00000033]');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="w-full py-3 backdrop-blur-md z-50 fixed px-10 flex items-center justify-between">
      <div className="bg-transparent flex items-center justify-between w-[clamp(600px,100%,1300px)] mx-auto">
        <div className="flex items-center gap-2">
          <figure className="rounded-full overflow-hidden size-[3em]">
            <img
              src={avatar_profile}
              loading="lazy"
              alt="avatar-profile-image"
              className="size-full object-cover animate-[image-filter_600ms_ease-out_forwards]"
            />
          </figure>
          <span className="text-dark dark:text-white text-lg architects-daughter-regular">Seba Perez</span>
        </div>
        <NavegationLinks disappear={'hidden lg:block'} flexDirection={'row-center'} />
        <div className="lg:flex hidden row-center gap-3">
          <LanguageSelect />
          <ThemeButton />
        </div>
      </div>
      {/* mobile menu is available when viewport width is less than 640 px */}
      <MobileMenu />
    </header>
  );
};

export default Header;
