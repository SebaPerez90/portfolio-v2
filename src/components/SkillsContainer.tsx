import { useTranslation } from 'react-i18next';
import CardSkill from './CardSkill';
import { motion } from 'framer-motion';

const SkillsContainer = () => {
  const { t } = useTranslation();

  const frontendSkills = t('skill-set.frontend.content', { returnObjects: true });
  const backendSkills = t('skill-set.backend.content', { returnObjects: true });
  const softSkills = t('skill-set.soft-skills.content', { returnObjects: true });

  const skillsData = [
    {
      title: t('skill-set.frontend.label'),
      skillsContent: t('skill-set.frontend.content', { returnObjects: true }),
    },
    {
      title: t('skill-set.backend.label'),
      skillsContent: t('skill-set.backend.content', { returnObjects: true }),
    },
    {
      title: t('skill-set.soft-skills.label'),
      skillsContent: t('skill-set.soft-skills.content', { returnObjects: true }),
    },
  ];
  return (
    <section id="skills-section" className="flex flex-col items-center gap-16 py-32">
      <h1 className="dark:text-slate-50 text-4xl font-bold text-custom-black">Habilidades.</h1>
      <motion.div
        transition={{
          bounce: 0.45,
          damping: 30,
          duration: 0.6,
          staggerChildren: 1,
          type: 'spring',
        }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex justify-center px-8 flex-wrap gap-20"
      >
        <CardSkill title={t('skill-set.frontend.label')} skillsContent={frontendSkills as Array<string>} />
        <CardSkill title={t('skill-set.backend.label')} skillsContent={backendSkills as Array<string>} />
        <CardSkill title={t('skill-set.soft-skills.label')} skillsContent={softSkills as Array<string>} />
      </motion.div>
    </section>
  );
};

export default SkillsContainer;
