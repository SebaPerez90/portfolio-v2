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
      className="shadow-2xl rounded-lg w-[25em] bg-white shadow-purple-500/20 border col-center py-6 px-3 justify-center"
    >
      <h3 className="title text-center text-custom-black">{title}</h3>
      <ul className="flex items-center gap-3 w-full flex-wrap justify-center">
        {skillsContent.map((element, index: number) => (
          <motion.li
            transition={{ delay: 0.5, staggerChildren: 0.8 }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className="text-base lg:text-xs border font-semibold border-dark-soft/30 py-2 pl-2 pr-3 rounded-lg w-max bg-ligth-soft text-custom-black flex items-center gap-[2px]"
          >
            <span className="w-[6px] h-[6px] rounded-[50%] bg-green-500 [disc-shining_800ms_ease-out_alternate-reverse_infinite]" />
            {element}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CardSkill;
