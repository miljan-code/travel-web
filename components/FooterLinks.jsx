const FooterLinks = ({ title, items }) => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-[1.6rem] md:text-[2.1rem] text-[#080809] mb-[1rem] md:mb-[3.4rem]">
        {title}
      </h3>
      <ul className="flex flex-col gap-1 md:gap-[1.2rem]">
        {items.map(item => (
          <li key={item} className="font-[500] text-[1.6rem] md:text-[1.8rem]">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
