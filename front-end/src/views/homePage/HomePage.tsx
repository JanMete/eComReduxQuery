import HomeChildSection from '../../components/homeChildSection/HomeChildSection';
import HomeHero from '../../components/homeHero/HomeHero';
import HomeMenSection from '../../components/homeMenSection/HomeMenSection';
import HomeWomenSection from '../../components/homeWomenSection/HomeWomenSection';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeMenSection />
      <HomeWomenSection />
      <HomeChildSection />
    </>
  );
}
