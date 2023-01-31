const Socials = () => {
  return (
    <div className="col-span-3 lg:col-span-1 lg:block flex flex-col items-center justify-center mt-[3rem] md:mt-0">
      <div className="flex items-center justify-center lg:justify-between gap-[2.5rem] mb-[3rem] lg:pr-[7rem]">
        <div className="shadow-social w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer">
          <img src="/fb.svg" alt="fb" />
        </div>
        <div className="shadow-social w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer bg-gradientSocial">
          <img src="/ig.svg" alt="ig" />
        </div>
        <div className="shadow-social w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer">
          <img src="/twitter.svg" alt="twitter" />
        </div>
      </div>
      <p className="font-[500] text-[2rem] mb-[1.6rem]">Discover our app</p>
      <div className="flex items-center gap-[7px]">
        <img
          src="/google-play.svg"
          alt="google play"
          className="cursor-pointer"
        />
        <img
          src="/apple-store.svg"
          alt="apple store"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Socials;
