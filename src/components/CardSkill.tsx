import { motion } from 'framer-motion';

export interface CardSkillProps {
  title: string;
  skillsContent: string[];
}

const CardSkill = ({ title, skillsContent }: CardSkillProps) => {
  return (
    <motion.div
      transition={{ delay: 0.5, duration: 0.3 }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="shadow-2xl rounded-lg w-[25em] bg-white shadow-purple-500/20 border col-center py-5"
    >
      <h3 className="title text-center text-custom-black">{title}</h3>
      <ul className="flex flex-col flex-wrap h-[11.5em] gap-3">
        {skillsContent.map((element, index: number) => (
          <motion.li
            transition={{ delay: 0.5, staggerChildren: 0.8 }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className="text-xs border font-semibold border-dark-soft/30 py-1 px-4 rounded-lg w-max bg-ligth-soft text-custom-black relative before:absolute before:left-[8px] before:top-[10px] before:w-[6px] before:h-[6px] before:bg-green-500 before:rounded-full before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]"
          >
            {element}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CardSkill;
