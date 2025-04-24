import { useTranslation } from 'react-i18next';
import CardSkill from './CardSkill';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      title: t('skill-set.tools.label'),
      skillsContent: t('skill-set.tools.content', { returnObjects: true }),
    },
    {
      title: t('skill-set.mobile.label'),
      skillsContent: t('skill-set.mobile.content', { returnObjects: true }),
    },
  ];

  return (
    <section id="skills-section" className="bg-white dark:bg-dark-soft flex flex-col items-center gap-32 py-32 w-full">
      <h1 className="dark:text-slate-50 text-4xl font-bold text-custom-black">Habilidades.</h1>
      <div className="w-[90%] max-w-[1000px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="min-[450px]:h-[22em] h-[25em] custom-swiper"
        >
          {skillsData.map((skill, index) => (
            <SwiperSlide key={index} className="py-5 custom-swiper">
              <CardSkill title={skill.title} skillsContent={skill.skillsContent as Array<string>} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsContainer;
