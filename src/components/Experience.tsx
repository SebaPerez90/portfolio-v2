import { Timeline } from '@/components/ui/Timeline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Experience() {
  const { t } = useTranslation();

  const freelanceResponsabilities = t('experience.freelance.content', { returnObjects: true });
  const gravitadResponsabilities = t('experience.gravitad.content', { returnObjects: true });
  const waiterResponsabilities = t('experience.cabaña.content', { returnObjects: true });

  const data = [
    {
      title: t("experience.freelance.timeLine"),
      content: (
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="col-center items-start gap-2"
        >
          <h2 className="title text-blue-500 text-3xl lg:text-2xl">{t('experience.freelance.title')}</h2>
          <span className="text-lg lg:text-base font-semibold text-custom-black/70">{t('experience.freelance.dates')}</span>
          <ul className="ml-5 list-disc marker:text-blue-500 marker:text-lg flex flex-col gap-2 mt-8">
            {(freelanceResponsabilities as Array<string>).map((element, index) => (
              <li className="text-lg lg:text-sm" key={index}>
                {element}
              </li>
            ))}
          </ul>
        </motion.div>
      ),
    },
    {
      title: t("experience.gravitad.timeLine"),
      content: (
        <motion.div
          transition={{ duration: 0.3, delay: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="col-center items-start gap-2"
        >
          <h2 className="title text-blue-500 text-3xl lg:text-2xl">{t('experience.gravitad.title')}</h2>
          <span className="text-lg lg:text-base font-semibold text-custom-black">{t('experience.gravitad.dates')}</span>
          <ul className="ml-5 list-disc marker:text-blue-500 marker:text-lg flex flex-col gap-2 mt-8">
            {(gravitadResponsabilities as Array<string>).map((element, index) => (
              <li className="text-lg lg:text-sm" key={index}>
                {element}
              </li>
            ))}
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
      title: t("experience.cabaña.timeLine"),
      content: (
        <motion.div
          transition={{ duration: 0.3, delay: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="col-center items-start gap-2"
        >
          <h2 className="title text-blue-500 text-3xl lg:text-2xl lg:w-max">{t('experience.cabaña.title')}</h2>
          <span className="text-lg lg:text-base font-semibold text-custom-black">{t('experience.cabaña.dates')}</span>
          <ul className="ml-5 list-disc marker:text-blue-500 marker:text-lg flex flex-col gap-2 mt-8">
            {(waiterResponsabilities as Array<string>).map((element, index) => (
              <li className="text-lg lg:text-sm" key={index}>
                {element}
              </li>
            ))}
          </ul>
        </motion.div>
      ),
    },
  ];
  return (
    <section id="experience-section" className="mt-36 xl:w-[60%] lg:w-[80%] w-[90%] m-[0_auto]">
      <h1 className="text-center dark:text-slate-50 text-4xl font-bold text-custom-black">{t('experience.title')}</h1>
      <Timeline data={data} />
    </section>
  );
}
