import { TripCard, SectionTitle } from '@components/index';
import { styles } from '@styles/index';
import { HowTo } from '@components/index';
import { howToBook } from '@constants/index';

const BookTrip = () => {
  return (
    <div className="relative mb-[15rem] md:mb-[20rem]">
      <div
        className={`${styles.sectionWidth} flex flex-col lg:flex-row md:gap-[5rem]`}
      >
        <div className="flex-1">
          <div className="mb-[6rem] lg:mb-0 text-center lg:text-left">
            <SectionTitle
              subtitle="Easy and Fast"
              title="Book Your Next Trip In 3 Easy Steps"
            />
          </div>
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
          <TripCard />
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
