import { useScrollReveal } from '../hooks/useScrollReveal';
import Hero from '../components/nikkah/Hero';
import Countdown from '../components/nikkah/Countdown';
import Verse from '../components/nikkah/Verse';
import Story from '../components/nikkah/Story';
import Schedule from '../components/nikkah/Schedule';
import Details from '../components/nikkah/Details';
import Faq from '../components/nikkah/Faq';
import SiteFooter from '../components/nikkah/SiteFooter';

const Home = () => {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Countdown />
      <Verse />
      <Story />
      <Schedule />
      <Details />
      <Faq />
      <SiteFooter />
    </>
  );
};

export default Home;
