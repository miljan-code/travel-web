import { styles } from '@styles/index';
import { SectionTitle, Destination } from '@components/index';
import { destinations } from '@constants/index';

const Destinations = () => {
  return (
    <div className="relative mb-[18.6rem]">
      <div className={`${styles.sectionWidth}`}>
        <SectionTitle
          subtitle="Top Selling"
          title="Top Destinations"
          align="items-center"
        />
        <div className="mt-[6rem] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[6rem] lg:gap-[1rem]">
          {destinations.map((destination, index) => (
            <Destination
              key={destination.destination}
              img={destination.img}
              destination={destination.destination}
              price={destination.price}
              days={destination.days}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
