import { motion } from 'framer-motion';
import { slideIn } from '@utils/motion';
import { styles } from '@styles/index';
import { SectionTitle } from '@components/index';

const Testimonials = () => {
  return (
    <div className="relative mb-[10rem] md:mb-[21.5rem]">
      <div
        className={`${styles.sectionWidth} flex flex-col xl:flex-row items-center lg:items-start md:gap-[8.7rem]`}
      >
        <div className="flex-1 self-center text-center xl:self-start xl:text-left">
          <div className="xl:mb-[8.2rem] xl:w-[41rem]">
            <SectionTitle
              subtitle="TESTIMONIALS"
              title="What People Say About Us"
            />
          </div>
          <motion.div
            variants={slideIn('left', 'tween', 0, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden xl:flex items-center justify-between w-[8.7rem] h-[1.2rem]"
          >
            <div className="h-[1.2rem] w-[1.2rem] bg-[#39425D] rounded-full cursor-pointer" />
            <div className="h-[1.2rem] w-[1.2rem] bg-[#E5E5E5] rounded-full cursor-pointer" />
            <div className="h-[1.2rem] w-[1.2rem] bg-[#E5E5E5] rounded-full cursor-pointer" />
          </motion.div>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex-1 mt-[3rem] md:pr-[11.4rem] self-center xl:self-start"
        >
          <div className="hidden md:block absolute top-[50%] translate-y-[-35%] right-[-4rem]">
            <img
              src="/chevron-up.svg"
              className="h-[7px] w-[14px] mb-[5.7rem] cursor-pointer object-cover"
            />
            <img
              src="/chevron-down.svg"
              className="h-[7px] w-[14px] cursor-pointer object-cover"
            />
          </div>
          <div className="relative md:pl-[3.4rem] md:pt-[2.8rem] md:pb-[3.4rem] md:pr-[6.8rem] p-[2rem] rounded-[10px] shadow-card bg-white w-full md:max-w-[50.4rem] xxl:w-[50.4rem]">
            <img
              src="/people-1.svg"
              alt="Smiling man"
              className="absolute bottom-[2rem] right-[2rem] md:top-[-3.4rem] md:left-[-3.7rem] w-[6.8rem] h-[6.8rem] rounded-full"
            />
            <p className="font-[500] leading-[32px] mb-[3.4rem]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="font-semibold text-[1.8rem] leading-[27px] mb-[5px]">
              Mike Taylor
            </p>
            <p className="text-[1.4rem] font-[500]">Lahore, Pakistan</p>
          </div>
          <div className="hidden md:block absolute top-[9rem] left-[5rem] md:pl-[3.4rem] md:pt-[2.8rem] md:pb-[3.4rem] p-[2rem] md:pr-[6.8rem] rounded-[10px] -z-10 bg-white border-[#F7F7F7] border-[2px] w-full md:max-w-[50.4rem] xxl:w-[50.4rem]">
            <p className="font-[500] leading-[32px] mb-[3.4rem]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="font-semibold text-[1.8rem] leading-[27px] mb-[5px]">
              Chris Tomas
            </p>
            <p className="text-[1.4rem] font-[500]">CEO of Red Button</p>
          </div>
          <div className="flex items-center justify-center mt-[3rem]">
            <div className="md:hidden flex items-center justify-between w-[8.7rem] h-[1.2rem]">
              <div className="h-[1.2rem] w-[1.2rem] bg-[#39425D] rounded-full cursor-pointer" />
              <div className="h-[1.2rem] w-[1.2rem] bg-[#E5E5E5] rounded-full cursor-pointer" />
              <div className="h-[1.2rem] w-[1.2rem] bg-[#E5E5E5] rounded-full cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
