import { SectionTitle, Card } from '@components/index';
import { styles } from '@styles/index';
import { services } from '@constants/index';

const Services = () => {
  return (
    <div className="relative mb-[12rem]">
      <div className="absolute top-0 right-[10%]">
        <img src="/pluses-decor.svg" className="h-full w-full" />
      </div>
      <div className={`${styles.sectionWidth}`}>
        <SectionTitle
          subtitle="CATEGORY"
          title="We Offer Best Services"
          align="items-center"
        />
        <div className="mt-[6.8rem] flex items-center justify-between gap-[1.5rem]">
          {services.map((service, index) => (
            <Card
              key={service.title}
              img={service.img}
              title={service.title}
              text={service.text}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
