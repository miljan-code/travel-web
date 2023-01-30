import { motion } from 'framer-motion';
import { showUpVariant } from '@utils/motion';
import { styles } from '@styles/index';

const Newsletter = () => {
  return (
    <motion.div
      variants={showUpVariant(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative mb-[12rem] md:mb-[16.6rem]"
    >
      <div className={`${styles.sectionWidth} px-[10rem]`}>
        <div className="relative bg-newsletter rounded-newsletter lg:px-[13.5rem] md:px-[9rem] px-[4rem]">
          <h2 className="lg:pt-[7.9rem] pt-[5rem] mb-[2rem] md:mb-[4rem] lg:mb-[7.4rem] text-center font-semibold text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[3.3rem] leading-[24px] sm:leading-[34px] lg:leading-[54px] text-[#5E6282]">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>
          <form className="relative lg:pb-[7.8rem] pb-[5rem] flex flex-col md:flex-row items-center justify-center gap-[2.4rem] z-10">
            <div className="relative">
              <img
                src="/mail.svg"
                alt="mail"
                className="absolute top-[50%] left-[1rem] md:left-[3.1rem] translate-y-[-50%] w-[21px] h-[18px]"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="text-[1.4rem] py-[1.4rem] px-[4rem] md:py-[2.6rem] md:px-[6.6rem] placeholder:text-[#39425D] text-[#39425D] rounded-[10px] w-full md:w-full lg:w-[42rem]"
                placeholder="Your Email"
              />
            </div>
            <button className="bg-gradient hover:bg-gradientOrange transition-all rounded-[10px] text-[1.7rem] font-opensans font-semibold px-[2rem] py-[1rem] md:px-[5rem] md:py-[2.2rem] text-white">
              Subscribe
            </button>
          </form>
          <img
            src="/news-decor-1.svg"
            alt="decoration"
            className="hidden sm:block absolute bottom-0 left-[2.7rem] opacity-10"
          />
          <img
            src="/news-decor-2.svg"
            alt="decoration"
            className="hidden md:block absolute top-0 right-0 opacity-10"
          />
          <div className="rounded-full bg-gradientBlue w-[3.6rem] h-[3.6rem] md:w-[7rem] md:h-[7rem] absolute top-[-1rem] right-[-1rem] md:top-[-13px] md:right-[-20px] flex items-center justify-center">
            <img
              src="/paper-plane.svg"
              alt="paper plane"
              className="ml-1 md:ml-2 md:mb-1 w-[1.8rem] h-[1.6rem] md:w-[3.7rem] md:h-[3.4rem]"
            />
          </div>
          <img
            src="/news-decor-3.svg"
            alt="Decor"
            className="hidden lg:block absolute bottom-[-6rem] right-[-10rem]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
