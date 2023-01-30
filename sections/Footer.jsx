import { motion } from 'framer-motion';
import { showUpVariant } from '@utils/motion';
import { styles } from '@styles/index';
import { FooterLinks } from '@components/index';

const Footer = () => {
  return (
    <motion.div
      variants={showUpVariant(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >
      <div
        className={`${styles.sectionWidth} flex flex-col md:grid lg:grid-cols-footer grid-cols-3 gap-[3rem] md:gap-[8rem] mb-[8rem]`}
      >
        <div className="-mt-[1rem] md:col-span-3 lg:col-span-1 text-center lg:text-left">
          <h2 className="text-[4.4rem] font-[500] text-primary leading-[66px] mb-[1.9rem]">
            Jadoo.
          </h2>
          <p className="font-[500] text-[1.6rem] md:text-[1.3rem] w-[30rem] mx-auto md:w-full">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <FooterLinks title="Company" items={['About', 'Careers', 'Mobile']} />
        <FooterLinks
          title="Contact"
          items={['Help/FAQ', 'Press', 'Affiliates']}
        />
        <FooterLinks
          title="More"
          items={['Airline Fees', 'Airline', 'Low fare tips']}
        />
        <div className="col-span-3 lg:col-span-1 lg:block flex flex-col items-center justify-center mt-[3rem] md:mt-0">
          <div className="flex items-center justify-center lg:justify-between gap-[2.5rem] mb-[3rem] lg:pr-[7rem]">
            <div className="shadow-social w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer">
              <img src="/fb.svg" alt="fb" />
            </div>
            <div className="shadow-social w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer bg-gradientSocial">
              <img src="/ig.svg" alt="ig" />
            </div>
            <div className="shadow-social w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer">
              <img src="/twitter.svg" alt="twitter" />
            </div>
          </div>
          <p className="font-[500] text-[2rem] mb-[1.6rem]">Discover our app</p>
          <div className="flex items-center gap-[7px]">
            <img
              src="/google-play.svg"
              alt="google play"
              className="cursor-pointer"
            />
            <img
              src="/apple-store.svg"
              alt="apple store"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="mb-[8rem] text-center">
        <p className="text-[1.3rem]">
          Designed by ARShakir. Developed by Miljan.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
