import { Timeline } from '@/components/ui/Timeline';
import { motion } from 'framer-motion';

export function Experience() {
  const data = [
    {
      title: 'Octubre 2024',
      content: (
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-center items-start gap-2"
        >
          <h2 className="title text-blue-500">Freelance Developer</h2>
          <span className="font-semibold text-custom-black/70">10/2024 - presente</span>
          <ul className="list-disc marker:text-blue-500 marker:text-lg flex flex-col gap-2 mt-8">
            <li className="text-sm">Desarrollo de landing pages para reflejar la escencia de tu negocio en una web.</li>
            <li className="text-sm">Desarrollo de tiendas online (e-comerce) a medida.</li>
            <li className="text-sm">
              Desarrollo de interfaces de usuario utilizando React para crear experiencias atractivas y fluidas.
            </li>
            <li className="text-sm">
              Diseño e implementación de aplicaciones web escalables, optimizando el rendimiento y la accesibilidad.
            </li>
            <li className="text-sm">Desarrollo de interfaces de usuario utilizando React.js y todo su ecosistema.</li>
            <li className="text-sm">
              Integración de APIs y servicios backend para garantizar una interacción fluida entre las capas de la aplicación.
            </li>
          </ul>
        </motion.div>
      ),
    },
    {
      title: 'Agosto 2024',
      content: (
        <motion.div
          transition={{ duration: 0.3, delay: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-center items-start gap-2"
        >
          <h2 className="title text-blue-500">
            Gravitad <b className="text-custom-black/70">-</b> Frontend Developer
          </h2>
          <span className="font-semibold text-custom-black">07/2024 - presente</span>
          <ul className="list-disc marker:text-blue-500 marker:text-lg text-sm flex flex-col gap-2 mt-8">
            <li className="text-sm">Desarrollo de interfaces de usuario utilizando React.js con Vite.</li>
            <li className="text-sm">Desarrolo de aplicaciones web.</li>
            <li className="text-sm">Desarrolo de aplicaciones blockchain.</li>
            <li className="text-sm">Trabajar en conjunto con el departamente de UX/UI para hacer una fiel réplica del diseño.</li>
            <li className="text-sm">Desarrollo de interfaces de usuario utilizando React.js y todo su ecosistema.</li>
            <li className="text-sm">Integraciones de conexiones con el departamento de backend.</li>
          </ul>
        </motion.div>
      ),
    },
    {
      title: '',
      content: (
        <div className="flex relative bottom-14 items-center gap-4 text-blue-500">
          <span className="text-8xl animate-[loading_1s_linear_infinite]">.</span>
          <span className="text-8xl animate-[loading_1s_linear_infinite] [animation-delay:200ms]">.</span>
          <span className="text-8xl animate-[loading_1s_linear_infinite] [animation-delay:400ms]">.</span>
        </div>
      ),
    },
    {
      title: 'Enero 2014',
      content: (
        <motion.div
          transition={{ duration: 0.3, delay: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-center items-start gap-2"
        >
          <h2 className="title text-blue-500 w-max">
            Cabaña Las Lilas <b className="text-custom-black/70">-</b> Mozo de salón
          </h2>
          <span className="font-semibold text-custom-black">01/2024 - 01/2015</span>
          <ul className="list-disc marker:text-blue-500 marker:text-lg text-sm flex flex-col gap-2 mt-8">
            <li className="text-sm">Mise an place para el servicio.</li>
            <li className="text-sm">Atención y servicio al cliente.</li>
            <li className="text-sm">Manejo de personal del salón.</li>
          </ul>
        </motion.div>
      ),
    },
  ];
  return (
    <section id="#experience-section" className="w-full py-20">
      <div className="w-[60%] m-[0_auto]">
        <h1 className="text-center dark:text-slate-50 text-4xl font-bold text-custom-black">Experiencia.</h1>
        <Timeline data={data} />
      </div>
    </section>
  );
}
