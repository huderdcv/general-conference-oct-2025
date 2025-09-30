import { ScheduleComponent } from './';

const saturdayInfo = {
  dateEvent: 'Sábado 4 de Octubre, 2025',
  sesions: [
    {
      name: '11:00AM A 1:00PM - SESIÓN DE LA MAÑANA',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Las Americas y Las Casuarinas - Av. Las Casuarinas #255 - Huamanga',
        'Mariscal Cáceres - Urb Quijano Mendivil Mz. F Lt. 2 - Huamanga',
      ],
    },
    {
      name: '3:00PM A 5:00PM - SESIÓN DE LA TARDE',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Las Americas y Las Casuarinas - Av. Las Casuarinas #255 - Huamanga',
        'Mariscal Cáceres - Urb Quijano Mendivil Mz. F Lt. 2 - Huamanga',
      ],
    },
    {
      name: '7:00PM A 8:30PM - SESIÓN DE LA NOCHE',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Las Americas y Las Casuarinas - Av. Las Casuarinas #255 - Huamanga',
        'Mariscal Cáceres - Urb Quijano Mendivil Mz. F Lt. 2 - Huamanga',
        'Huanta - Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
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
