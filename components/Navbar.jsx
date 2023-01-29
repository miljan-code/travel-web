'use client';

import { useState } from 'react';
import { styles } from '@styles/index';
import { BiChevronDown } from 'react-icons/bi';
import { MobileMenu } from '.';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative pt-[4.8rem] mb-[5.8rem]">
      <div
        className={`${styles.sectionWidth} flex justify-between items-center`}
      >
        <a href="#">
          <img src="/jadoo.png" alt="Jadoo" className="w-[115px]" />
        </a>
        <div className="hidden lg:flex items-center gap-[3rem] xxl:gap-0">
          <a href="#" className={`${styles.navItem} xxl:mr-[5.5rem]`}>
            Destinations
          </a>
          <a href="#" className={`${styles.navItem} xxl:mr-[6.4rem]`}>
            Hotels
          </a>
          <a href="#" className={`${styles.navItem} xxl:mr-[6.2rem]`}>
            Flights
          </a>
          <a href="#" className={`${styles.navItem} xxl:mr-[8.6rem]`}>
            Bookings
          </a>
          <a href="#" className={`${styles.navItem} xxl:mr-[5.2rem]`}>
            Login
          </a>
          <a
            href="#"
            className={`${styles.navItem} xxl:mr-[4.2rem] px-[22px] py-[9px] border-[1px] border-primary rounded-[5px] hover:bg-primaryDark hover:text-white transition-all`}
          >
            Sign up
          </a>
          <a href="#" className={`${styles.navItem} flex items-center`}>
            <span className="mr-[4px]">EN</span>
            <BiChevronDown className="text-[14px]" />
          </a>
        </div>
        <div
          onClick={() => setShowMenu(menu => !menu)}
          className="lg:hidden p-4 bg-secondary rounded-[10px]"
        >
          <img
            src="/menu.svg"
            alt="Menu Hamburger"
            className="w-[2rem] h-[2rem]"
          />
        </div>
        {showMenu && <MobileMenu />}
      </div>
    </div>
  );
};

export default Navbar;
