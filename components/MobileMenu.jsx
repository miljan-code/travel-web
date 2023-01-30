const MobileMenu = ({ setShowMenu }) => {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full bg-secondary z-50">
      <div
        onClick={() => setShowMenu(menu => !menu)}
        className="absolute top-[3rem] right-[3rem] md:top-[4.8rem] md:right-[7rem] cursor-pointer"
      >
        <img src="/close.svg" alt="Close Menu" className="w-[4rem] h-[4rem]" />
      </div>
      <div className="flex flex-col items-center justify-center h-[100vh] text-white text-[3rem] uppercase gap-[1rem]">
        <a
          className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
          href="#"
        >
          Destinations
        </a>
        <a
          className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
          href="#"
        >
          Hotels
        </a>
        <a
          className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
          href="#"
        >
          Flights
        </a>
        <a
          className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
          href="#"
        >
          Bookings
        </a>
        <a
          className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
          href="#"
        >
          Login
        </a>
        <a
          className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
          href="#"
        >
          Signup
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
