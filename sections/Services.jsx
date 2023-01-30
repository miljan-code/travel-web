import { SectionTitle, Card } from '@components/index';
import { motion } from 'framer-motion';
import { staggerContainer } from '@utils/motion';
import { styles } from '@styles/index';
import { services } from '@constants/index';

const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative mb-[10rem] md:mb-[18.6rem]"
    >
      <div className="hidden lg:block absolute top-0 right-0 xl:right-[10%]">
        <img src="/pluses-decor.svg" className="h-full w-full" />
      </div>
      <div className={`${styles.sectionWidth} text-center md:text-left`}>
        <SectionTitle
          subtitle="CATEGORY"
          title="We Offer Best Services"
          align="items-center"
        />
        <div className="mt-[2rem] md:mt-[6.8rem] flex flex-col md:grid grid-cols-2 xl:flex xl:flex-row items-center justify-between gap-[1rem] md:gap-[1.5rem]">
          {services.map((service, index) => (
            <Card
              key={service.title}
              img={service.img}
              title={service.title}
              text={service.text}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
