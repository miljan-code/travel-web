const SectionTitle = ({ subtitle, title, align }) => {
  return (
    <div className={`flex flex-col ${align} justify-center`}>
      <p className="font-semibold text-primaryLight text-[18px] mb-[1rem] leading-[2.7rem]">
        {subtitle}
      </p>
      <h2 className="font-volkhov font-bold text-[5rem] leading-[6.4rem] text-[#14183E]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
