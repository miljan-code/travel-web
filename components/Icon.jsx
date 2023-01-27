const Icon = ({ type }) => {
  return (
    <div className="w-[3.6rem] h-[3.6rem] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer">
      <img src={`/${type}.svg`} alt={type} className="w-[1.4rem] h-[1.4rem]" />
    </div>
  );
};

export default Icon;
