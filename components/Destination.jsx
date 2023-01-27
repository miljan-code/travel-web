const Destination = ({ img, destination, price, days, index }) => {
  return (
    <div className="relative">
      <div className="w-[34.5rem] drop-shadow-destination rounded-[24px] overflow-hidden relative z-10">
        <img
          src={img}
          alt={destination}
          className="w-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-0 bg-white w-full h-[13rem] pt-[2.8rem] pl-[2rem] pr-[2.5rem] text-primaryLight font-[500]">
          <div className="flex justify-between items-center mb-[2rem]">
            <p>{destination}</p>
            <span>{price}</span>
          </div>
          <div className="flex gap-[1.5rem] items-center">
            <img src="/cursor.png" alt="cursor" className="w-[16px] h-[16px]" />
            <span>{days} Days Trip</span>
          </div>
        </div>
      </div>
      {index === 3 && (
        <div className="absolute -right-[6rem] bottom-[6rem]">
          <img src="/decore-destination.svg" className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default Destination;
