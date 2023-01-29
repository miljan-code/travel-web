import { styles } from '@styles/index';

const Newsletter = () => {
  return (
    <div className="relative mb-[16.6rem]">
      <div className={`${styles.sectionWidth} px-[10rem]`}>
        <div className="relative bg-newsletter rounded-newsletter px-[13.5rem]">
          <h2 className="pt-[7.9rem] mb-[7.4rem] text-center font-semibold text-[3.3rem] leading-[54px] text-[#5E6282]">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h2>
          <form className="relative pb-[7.8rem] flex items-center justify-center gap-[2.4rem] z-10">
            <div className="relative">
              <img
                src="/mail.svg"
                alt="mail"
                className="absolute top-[50%] left-[3.1rem] translate-y-[-50%] w-[21px] h-[18px]"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="text-[1.4rem] py-[2.6rem] px-[6.6rem] placeholder:text-[#39425D] text-[#39425D] rounded-[10px] w-[42rem]"
                placeholder="Your Email"
              />
            </div>
            <button className="bg-gradient hover:bg-gradientOrange transition-all rounded-[10px] text-[1.7rem] font-opensans font-semibold px-[5rem] py-[2.2rem] text-white">
              Subscribe
            </button>
          </form>
          <img
            src="/news-decor-1.svg"
            alt="decoration"
            className="absolute bottom-0 left-[2.7rem] opacity-10"
          />
          <img
            src="/news-decor-2.svg"
            alt="decoration"
            className="absolute top-0 right-0 opacity-10"
          />
          <div className="rounded-full bg-gradientBlue w-[7rem] h-[7rem] absolute top-[-13px] right-[-20px] flex items-center justify-center">
            <img
              src="/paper-plane.svg"
              alt="paper plane"
              className="ml-2 mb-1 w-[37px] h-[34px]"
            />
          </div>
          <img
            src="/news-decor-3.svg"
            alt="Decor"
            className="absolute bottom-[-6rem] right-[-10rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
