import { Icon, SectionTitle } from '@components/index';
import { styles } from '@styles/index';
import { HowTo } from '@components/index';
import { howToBook } from '@constants/index';

const BookTrip = () => {
  return (
    <div className="relative mb-[20rem]">
      <div className={`${styles.sectionWidth} flex gap-[5rem]`}>
        <div className="flex-1">
          <SectionTitle
            subtitle="Easy and Fast"
            title="Book Your Next Trip In 3 Easy Steps"
          />
          {howToBook.map((how, index) => (
            <HowTo
              key={how.title}
              color={how.color}
              title={how.title}
              text={how.text}
              index={index + 1}
            />
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative px-[2.5rem] py-[2rem] flex flex-col rounded-[26px] shadow-card">
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
              <img
                src="/building.svg"
                alt="building"
                className="w-[16px] h-[16px]"
              />
              <p>24 people going</p>
              <img
                src="/heart.svg"
                alt="heart"
                className="w-[2rem] h-[1.8rem] ml-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
