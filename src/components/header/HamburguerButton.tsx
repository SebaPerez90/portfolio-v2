interface HamburguerButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HamburguerButton = ({ isOpen, setIsOpen }: HamburguerButtonProps) => {
  const openMenu = () => {
    const line_a = document.getElementById('line_a');
    const line_b = document.getElementById('line_b');
    const line_c = document.getElementById('line_c');

    // this is to apply blur effect to the viewport
    const main_section = document.getElementById('main-section');
    const footer_section = document.getElementById('footer-section');

    if (isOpen === false) {
      line_a!.classList.add('[rotate:45deg]', 'top-2');
      line_b!.classList.add('opacity-0');

      // this is to apply blur effect to the viewport
      line_c!.classList.add('[rotate:-45deg]', 'bottom-2');
      main_section?.classList.add('blur-[2px]');
      footer_section?.classList.add('blur-[2px]');
      setIsOpen(true);
    } else {
      line_a!.classList.remove('[rotate:45deg]', 'top-2');
      line_b!.classList.remove('opacity-0');

      // this is to apply blur effect to the viewport
      line_c!.classList.remove('[rotate:-45deg]', 'bottom-2');
      main_section?.classList.remove('blur-[2px]');
      footer_section?.classList.remove('blur-[2px]');
      setIsOpen(false);
    }
  };
  return (
    <>
      <button
        type="button"
        aria-label="boton menu hamburguesa"
        className="lg:hidden flex flex-col gap-1 cursor-pointer z-[100]"
        onClick={openMenu}
      >
        <span
          id="line_a"
          className="relative w-8 h-1 bg-light-500 rounded-lg [transition:all_200ms] bg-purple-500 dark:bg-custom-orange"
        ></span>
        <span
          id="line_b"
          className="relative w-8 h-1 bg-light-500 rounded-lg [transition:all_200ms] bg-purple-500 dark:bg-custom-orange"
        ></span>
        <span
          id="line_c"
          className="relative w-8 h-1 bg-light-500 rounded-lg [transition:all_200ms] bg-purple-500 dark:bg-custom-orange"
        ></span>
      </button>
    </>
  );
};

export default HamburguerButton;
