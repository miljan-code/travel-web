import { styles } from '@styles/index';

const Footer = () => {
  return (
    <div className="relative">
      <div
        className={`${styles.sectionWidth} grid grid-cols-footer gap-[8rem] mb-[8rem]`}
      >
        <div className="-mt-[1rem]">
          <h2 className="text-[4.4rem] font-[500] text-primary leading-[66px] mb-[1.9rem]">
            Jadoo.
          </h2>
          <p className="font-[500] text-[1.3rem] ">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="">
          <h3 className="font-bold text-[2.1rem] text-[#080809] mb-[3.4rem]">
            Company
          </h3>
          <ul className="flex flex-col gap-[1.2rem]">
            <li className="font-[500] text-[1.8rem]">About</li>
            <li className="font-[500] text-[1.8rem]">Careers</li>
            <li className="font-[500] text-[1.8rem]">Mobile</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-[2.1rem] text-[#080809] mb-[3.4rem]">
            Contact
          </h3>
          <ul className="flex flex-col gap-[1.2rem]">
            <li className="font-[500] text-[1.8rem]">Help/FAQ</li>
            <li className="font-[500] text-[1.8rem]">Press</li>
            <li className="font-[500] text-[1.8rem]">Affiliates</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-[2.1rem] text-[#080809] mb-[3.4rem]">
            More
          </h3>
          <ul className="flex flex-col gap-[1.2rem]">
            <li className="font-[500] text-[1.8rem]">Airline fees</li>
            <li className="font-[500] text-[1.8rem]">Airline</li>
            <li className="font-[500] text-[1.8rem]">Low fare tips</li>
          </ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-[2.5rem] mb-[3rem] pr-[7rem]">
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
    </div>
  );
};

export default Footer;
