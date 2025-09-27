import { useState } from 'react';
import { SaturdaySchedule, SundaySchedule } from './';

type Day = 'saturday' | 'sunday';

export const ScheduleBox = () => {
  const [selectedDay, setSelectedDay] = useState<Day>('saturday');

  return (
    <div className="container-details">
      <div className="schedule-buttons">
        <button
          onClick={() => setSelectedDay('saturday')}
          className={`button-schedule ${
            selectedDay === 'saturday' ? 'active-schedule' : ''
          }`}
        >
          Sábado 4
        </button>
        <button
          onClick={() => setSelectedDay('sunday')}
          className={`button-schedule ${
            selectedDay === 'sunday' ? 'active-schedule' : ''
          }`}
        >
          Domingo 5
        </button>
      </div>
      {selectedDay === 'saturday' ? <SaturdaySchedule /> : <SundaySchedule />}
    </div>
  );
};
