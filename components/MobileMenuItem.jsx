const MobileMenuItem = ({ text, link }) => {
  return (
    <a
      className="hover:bg-white hover:text-secondary px-10 hover:skew-x-6 transition-all"
      href={link}
    >
      {text}
    </a>
  );
};

export default MobileMenuItem;
