'use client';

import { useState } from 'react';
import { styles } from '@styles/index';

const Hero = () => {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div className="-mt-5 md:-mt-0 relative mb-[10.5rem]">
      <div className={`${styles.sectionWidth} lg:flex`}>
        <div className="flex-[0.9] flex flex-col justify-center">
          <p className="uppercase font-bold text-secondary text-[1.6rem] md:text-[1.8rem] xl:text-[2rem] leading-[30px] mb-[2.4rem]">
            Best Destinations around the World
          </p>
          <h1 className="font-volkhov font-bold text-[5rem] md:text-[6.4rem] lg:text-[7.2rem] xl:text-[8rem] leading-[6.6rem] md:leading-[8rem] lg:leading-[7.4rem] xl:leading-[8.9rem] tracking-[-0.04em] text-primary mb-[3rem]">
            Travel,{' '}
            <span className="relative">
              <span className="relative z-10">enjoy</span>
              <img
                src="/underline.png"
                alt="underline"
                className="absolute bottom-[2rem] left-[50%] translate-x-[-35%] w-full scale-[1.5]"
              />
            </span>{' '}
            and live a new and full life
          </h1>
          <p className="font-semibold lg:leading-[26px] xl:leading-[30px] text-primaryLight mb-[5rem] lg:mb-[3.4rem] text-[1.4rem] xl:text-[1.6rem]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <button className="text-opensans text-[1.4rem] md:text-[1.8rem] font-[500] leading-[23px] px-[2rem] py-[1.4rem] md:px-[2.7rem] md:py-[1.9rem] rounded-[10px] bg-[#F1A501] hover:bg-[#d99501] shadow-btn text-white mr-[4.4rem] transition-all">
              Find out more
            </button>
            <div
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              className="flex items-center"
            >
              <div
                className={`${
                  btnHover ? 'bg-[#c95f49]' : 'bg-secondary'
                } p-[1.6rem] rounded-full cursor-pointer mr-[2.1rem] shadow-btnRed transition-colors`}
              >
                <img src="/play.png" alt="Play" className="pl-1" />
              </div>
              <p
                className={`${
                  btnHover ? 'text-primary' : ''
                } cursor-pointer text-[1.4rem] md:text-[1.7rem] font-[500] leading-[26px] transition-colors`}
              >
                Play Demo
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-[1.1]">
          <img
            src="/traveller-1-v2.png"
            alt="Traveller"
            className="w-full h-full object-contain mr-[2.1rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
