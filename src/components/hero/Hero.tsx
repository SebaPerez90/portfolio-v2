import AvatarProfile from '@/components/hero/AvatarProfile';
import { Button } from '../ui/button';
import Beams from './Beams';
import PophoverCvDownload from './PophoverCvDownload';

const Hero = () => {
  return (
    <section id="hero-section" className="relative bg-white dark:bg-dark-main row-center  h-screen overflow-hidden">
      <Beams />
      <div className="w-[50%] md:w-[32em] col-center items-start z-40">
        {/* <span className="paragraph text-base">Hola! mi nombre es Seba</span> */}
        <h1 className="text-7xl xl:text-8xl dark:text-slate-50 text-custom-black font-black">
          <strong className="dark:text-dark-sky text-7xl xl:text-8xl text-custom-blue">Front</strong>
          end
          <br />
          Developer
        </h1>
        <p className="paragraph text-base">
          <strong>3 años de experiencia en el area de desarrollo de software.</strong>
          <br />
          <br />
          Mi enfoque va más allá de escribir código; se trata de convertir ideas en aplicaciones rápidas y efectivas, donde cada
          detalle está pensado para crear experiencias digitales únicas, para que los usuarios disfruten de la experiencia desde
          el primer click.
        </p>

        <div className="z-50 flex items-center gap-4 mt-8">
          <Button>Conocé más sobre mi</Button>
          <PophoverCvDownload />
        </div>
      </div>
      <AvatarProfile />
    </section>
  );
};

export default Hero;
