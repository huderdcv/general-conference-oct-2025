import { Footer } from '../../ui';
import { CtaSection } from '../components/cta-section';
import { HeroSection, ScheduleSection } from '../views';
import './general.css';

export const GeneralPage = () => {
  return (
    <main>
      <HeroSection />
      <ScheduleSection />
      <CtaSection />
      <Footer />
    </main>
  );
};
