import { Icon } from '.';

const TripCard = () => {
  return (
    <div className="relative px-[2.5rem] py-[2rem] mt-[3rem] md:mt-0 flex flex-col rounded-[26px] shadow-card bg-white">
      <div className="absolute top-[-6.6rem] right-0 md:right-[-4.3rem] bg-[#59B1E6] opacity-[0.4] w-full h-full md:w-[35.4rem] md:h-[36.7rem] rounded-full blur-[75px] z-[-10]" />
      <img
        src="/greece.jpg"
        alt="greece"
        className="w-[32rem] h-[16rem] rounded-[24px] mb-[2.6rem]"
      />
      <h3 className="text-[1.8rem] font-[500] tracking-[0.015em] mb-[1.3rem]">
        Trip to Greece
      </h3>
      <p className="tracking-[-0.005em] mb-[2.1rem]">
        14-29 June | by Robbin Joseph
      </p>
      <div className="flex items-center gap-[1.8rem] mb-[3rem]">
        {['leaf', 'map', 'cursor-2'].map(icon => (
          <Icon key={icon} type={icon} />
        ))}
      </div>
      <div className="flex items-center gap-[1.5rem] mb-[1.8rem]">
        <img src="/building.svg" alt="building" className="w-[16px] h-[16px]" />
        <p>24 people going</p>
        <img
          src="/heart.svg"
          alt="heart"
          className="w-[2rem] h-[1.8rem] ml-auto cursor-pointer"
        />
      </div>
      <div className="hidden md:flex absolute bottom-[6rem] right-[-11.4rem] px-[2rem] py-[1.8rem] rounded-[18px] shadow-card items-start gap-[1rem] z-20 bg-white pr-[3.4rem]">
        <img src="/rome-2.svg" alt="Rome" className="w-[5rem] h-[5rem]" />
        <div className="flex flex-col -mt-[3px]">
          <p className="text-[1.4rem] tracking-[-3.5%] mb-[6px] font-[500]">
            Ongoing
          </p>
          <h4 className="font-[500] text-[1.8rem] tracking-[-1.5%] mb-[1.4rem] text-[#080809]">
            Trip to Rome
          </h4>
          <p className="text-[#080809] text-[1.4rem] tracking-[-5.5%] mb-[1rem] font-[500]">
            <span className="text-primaryLight">40%</span> completed
          </p>
          <div className="h-[5px] w-[156px] mb-[4px]">
            <div className="bg-[#8A79DF] h-full w-[73px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
