import { styles } from '@styles/index';
import { SectionTitle, Destination } from '@components/index';
import { destinations } from '@constants/index';

const Destinations = () => {
  return (
    <div className="relative mb-[18.6rem]">
      <div className={`${styles.sectionWidth}`}>
        <SectionTitle subtitle="Top Selling" title="Top Destinations" />
        <div className="mt-[6rem] flex items-center justify-between">
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