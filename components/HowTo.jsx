import { getHowToProperties } from '@utils/helpers';

const HowTo = ({ color, title, text, index }) => {
  const { img } = getHowToProperties(color);

  return (
    <div
      className={`flex justify-center lg:justify-start gap-[2.1rem] mb-[2.4rem] md:mb-[4.8rem] ${
        index === 1 && 'mt-[3.1rem]'
      }`}
    >
      <div
        className={`hidden md:block ${
          color === 'yellow' ? 'bg-[#f0bb1f]' : ''
        } ${color === 'orange' ? 'bg-[#f15a2b]' : ''} ${
          color === 'blue' ? 'bg-[#006380]' : ''
        } rounded-[13px] w-[4.8rem] h-[4.8rem] flex items-center justify-center`}
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
