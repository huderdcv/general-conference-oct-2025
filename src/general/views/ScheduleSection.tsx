import { ScheduleBox } from '../components/schedule-section';

import './schedulesection.css';

export const ScheduleSection = () => {
  return (
    <section id="horarios" className="schedule-section">
      <div className="container">
        <div className="sub-heading">Horarios</div>
        <h2 className="heading-secondary">Cronograma de sesiones</h2>
        <ScheduleBox />
      </div>
    </section>
  );
};
