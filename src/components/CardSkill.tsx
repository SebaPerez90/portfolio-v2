import { motion } from 'framer-motion';

export interface CardSkillProps {
  title: string;
  skillsContent: string[];
  delayAnimation: number;
}

const CardSkill = ({ title, skillsContent, delayAnimation }: CardSkillProps) => {
  return (
    <motion.div
      transition={{ delay: delayAnimation, duration: 0.3 }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="shadow-xl rounded-lg w-[25em] min-h-[17em] bg-white flex flex-col justify-center gap-8 items-center px-3 pb-8 dark:bg-dark-deep dark:border-dark-soft
         shadow-purple-500/10 dark:shadow-transparent"
    >
      <h3 className="title text-center text-custom-black mt-8">{title}</h3>
      <ul className="flex items-center gap-3 w-[92%] flex-wrap justify-center">
        {skillsContent.map((element, index: number) => (
          <motion.li
            transition={{ delay: 0.9, staggerChildren: 5 }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className="text-base lg:text-xs border font-semibold border-dark-soft/30 py-2 pl-2 pr-3 rounded-lg w-max bg-ligth-soft dark:bg-dark-soft dark:text-white  text-custom-black flex items-center gap-1"
          >
            <span className="w-[6px] h-[6px] rounded-[50%] bg-green-500 animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]" />
            {element}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CardSkill;
