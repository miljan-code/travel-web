import { styles } from '@styles/index';
import { featured } from '@constants/index';
import { FeaturedItem } from '@components/index';

const Featured = () => {
  return (
    <div className="relative mb-[12.4rem]">
      <div
        className={`${styles.sectionWidth} flex items-center justify-between`}
      >
        {featured.map((item, index) => (
          <FeaturedItem key={item} img={item} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
