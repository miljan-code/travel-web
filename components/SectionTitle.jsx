import { motion } from 'framer-motion';
import { showUpVariant } from '@utils/motion';

const SectionTitle = ({ subtitle, title, align }) => {
  return (
    <motion.div
      variants={showUpVariant(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex flex-col ${align} justify-center`}
    >
      <p className="font-semibold text-primaryLight text-[1.4rem] md:text-[1.8rem] md:mb-[1rem] leading-[2.7rem]">
        {subtitle}
      </p>
      <h2 className="font-volkhov font-bold text-[2.4rem] sm:text-[2.8rem] md:text-[4.4rem] lg:text-[5rem] leading-[4rem] md:leading-[6.4rem] text-[#14183E]">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
