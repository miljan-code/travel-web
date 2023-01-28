import { Navbar, Decor } from '@components/index';
import {
  Hero,
  Services,
  Destinations,
  BookTrip,
  Testimonials,
  Featured,
  Newsletter,
  Footer,
} from '@sections/index';

export default function Home() {
  return (
    <div className="relative">
      <Decor />
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Featured />
      <Newsletter />
      <Footer />
    </div>
  );
}
