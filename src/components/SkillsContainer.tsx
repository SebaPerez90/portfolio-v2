import { useTranslation } from 'react-i18next';
import CardSkill from './CardSkill';
import { motion } from 'framer-motion';

const SkillsContainer = () => {
  const { t } = useTranslation();

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
    <section id="skills-section" className="bg-ligth-soft flex flex-col items-center gap-16 py-40 w-full">
      <h1 className="dark:text-slate-50 text-4xl font-bold text-custom-black">Habilidades.</h1>
      <motion.div className="w-full flex justify-center px-8 flex-wrap gap-20">
        {skillsData.map((skill, index) => (
          <CardSkill
            key={index}
            delayAnimation={index * 0.2}
            title={skill.title}
            skillsContent={skill.skillsContent as Array<string>}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsContainer;
