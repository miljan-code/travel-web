const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-[500] text-primaryLight text-[18px] mb-[1rem] leading-[2.7rem]">
        {subtitle}
      </p>
      <h2 className="font-volkhov font-bold text-[5rem] leading-[6.4rem] text-primary">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;