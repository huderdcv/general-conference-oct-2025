import { ScheduleComponent } from './';

const saturdayInfo = {
  dateEvent: 'Sábado 4 de Octubre, 2025',
  sesions: [
    {
      name: '11:00AM A 1:00PM - SESIÓN DE LA MAÑANA',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
    {
      name: '3:00PM A 5:00PM - SESIÓN DE LA TARDE',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
    {
      name: '7:00PM A 8:30PM - SESIÓN DE LA NOCHE',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
      ],
    },
  ],
};

export const SaturdaySchedule = () => {
  return (
    <>
      <ScheduleComponent {...saturdayInfo} />
    </>
  );
};
