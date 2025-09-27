import { Footer } from '../../ui';
import { HeroSection, ScheduleSection } from '../views';
import './general.css';

export const GeneralPage = () => {
  return (
    <main>
      <HeroSection />
      <ScheduleSection />
      <Footer />
    </main>
  );
};
