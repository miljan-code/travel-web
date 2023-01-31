import { styles } from '@styles/index';
import { FooterLinks, Socials } from '@components/index';

const Footer = () => {
  return (
    <div className="relative">
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
        <Socials />
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
