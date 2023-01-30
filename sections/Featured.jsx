import { motion } from 'framer-motion';
import { staggerContainer } from '@utils/motion';
import { styles } from '@styles/index';
import { featured } from '@constants/index';
import { FeaturedItem } from '@components/index';

const Featured = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative mb-[12.4rem]"
    >
      <div
        className={`${styles.sectionWidth} flex flex-row items-center justify-between gap-[2rem] lg:gap-0`}
      >
        {featured.map((item, index) => (
          <FeaturedItem key={item} img={item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  );
};

export default Featured;
