import { styles } from '@styles/index';
import { BiChevronDown } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="relative pt-[4.8rem] mb-[1.8rem]">
      <div
        className={`${styles.sectionWidth} flex justify-between items-center`}
      >
        <a href="#">
          <img src="/jadoo.png" alt="Jadoo" className="w-[115px]" />
        </a>
        <div className="flex items-center">
          <a href="#" className={`${styles.navItem} mr-[5.5rem]`}>
            Destinations
          </a>
          <a href="#" className={`${styles.navItem} mr-[6.4rem]`}>
            Hotels
          </a>
          <a href="#" className={`${styles.navItem} mr-[6.2rem]`}>
            Flights
          </a>
          <a href="#" className={`${styles.navItem} mr-[8.6rem]`}>
            Bookings
          </a>
          <a href="#" className={`${styles.navItem} mr-[5.2rem]`}>
            Login
          </a>
          <a
            href="#"
            className={`${styles.navItem} mr-[4.2rem] px-[22px] py-[9px] border-[1px] border-primary rounded-[5px]`}
          >
            Sign up
          </a>
          <a href="#" className={`${styles.navItem} flex items-center`}>
            <span className="mr-[4px]">EN</span>
            <BiChevronDown className="text-[14px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;