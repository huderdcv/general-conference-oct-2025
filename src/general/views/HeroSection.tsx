import { Navbar } from '../../ui';
import { CountDown } from '../components';
import './herosection.css';

const eventDate = new Date('2025-10-04T11:00:00-05:00').getTime();
const finishDate = new Date('2025-10-05T17:00:00-05:00').getTime();

export const HeroSection = () => {
  return (
    <section className="inicio grid grid--2-cols">
      <Navbar />
      <div className="hero-box">
        <h1 className="heading-primary">
          <span>Conferencia</span> <span>General</span> <span>de Octubre</span>{' '}
          <span>2025</span>
        </h1>
        <p className="hero-description">
          Recibe revelación personal a medida que los líderes generales de la
          Iglesia proporcionan consejo y dirección del Señor
        </p>
        <div className="button-container">
          <a href="#horarios" className="btn btn-secondary">
            Más Información &darr;{' '}
          </a>
          <a href="#cta-evento" className="btn btn-primary">
            Evento de Estaca
          </a>
        </div>
      </div>
      <CountDown eventDate={eventDate} finishDate={finishDate} />
    </section>
  );
};
