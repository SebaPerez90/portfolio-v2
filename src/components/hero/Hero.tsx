import { Button } from '../ui/button';
import AvatarProfile from '@/components/hero/AvatarProfile';
import Beams from './Beams';

const Hero = () => {
  return (
    <section id="hero-section" className="relative bg-white dark:bg-dark-main row-center test2 h-screen overflow-hidden">
      <Beams />
      <div className="w-[50%] md:w-[32em] col-center items-start z-40">
        <span className="paragraph">Hola! mi nombre es Seba</span>
        <h1 className="text-7xl xl:text-8xl dark:text-slate-50 text-custom-black font-black">
          <strong className="dark:text-dark-sky text-7xl xl:text-8xl text-blue-500">Front</strong>
          end
          <br />
          Developer
        </h1>
        <p className="paragraph">
          Vivo en Buenos Aires y cuento con más de 2 años de experiencia en el área de desarrollo de software. Gracias a mi
          versatilidad, también tengo una sólida experiencia en el área Backend.
        </p>

        <div className="z-50 flex items-center gap-4 mt-8">
          <Button>Contáctame</Button>
          <Button>Descargar cv</Button>
        </div>
      </div>
      <AvatarProfile />
    </section>
  );
};

export default Hero;
