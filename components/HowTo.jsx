import { getHowToIcon } from '@utils/helpers';

const HowTo = ({ color, title, text, index }) => {
  const { img } = getHowToIcon(color);

  const colorVariants = {
    yellow: 'bg-[#f0bb1f]',
    orange: 'bg-[#f15a2b]',
    blue: 'bg-[#006380]',
  };

  return (
    <div
      className={`flex justify-center lg:justify-start gap-[2.1rem] mb-[2.4rem] md:mb-[4.8rem] ${
        index === 1 && 'mt-[3.1rem]'
      }`}
    >
      <div
        className={`hidden md:flex ${colorVariants[color]} rounded-[13px] w-[4.8rem] h-[4.8rem] items-center justify-center`}
      >
        <img src={img} className="w-[22px] h-[22px]" />
      </div>
      <div className="-mt-[3px]">
        <h3 className="font-bold text-primaryLight">{title}</h3>
        <p className="leading-[20px] font-normal md:w-[33rem]">{text}</p>
      </div>
    </div>
  );
};

export default HowTo;
