const Card = ({ img, title, text, index }) => {
  return (
    <div className="relative">
      <div
        className={`rounded-[36px] p-[2rem] md:p-[4rem] flex flex-col items-center justify-center text-center relative bg-white z-10 xl:max-w-full ${
          index === 2 && 'xl:shadow-card'
        }`}
      >
        <img src={img} className="mb-[2.9rem]" />
        <h3 className="font-opensans font-semibold text-[1.8rem] md:text-[2rem] leading-[27px] text-[#1E1D4C] mb-[1.5rem]">
          {title}
        </h3>
        <p className="text-primaryLight font-[500] text-[1.4rem] md:text-[1.6rem] leading-[26px] max-w-[18.1rem]">
          {text}
        </p>
      </div>
      {index === 2 && (
        <div className="absolute -z-10 -bottom-[3.4rem] -left-[3.3rem] bg-secondary w-[10rem] h-[10rem] rounded-tl-[30px] rounded-br-[10px]"></div>
      )}
    </div>
  );
};

export default Card;
