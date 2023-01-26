import { Navbar, Decor } from '@components/index';
import { Hero } from '@sections/index';

export default function Home() {
  return (
    <div className="relative">
      <Decor />
      <Navbar />
      <Hero />
    </div>
  );
}
