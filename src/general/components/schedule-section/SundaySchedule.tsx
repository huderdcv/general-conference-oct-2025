import { ScheduleComponent } from './ScheduleComponent';

const sundayInfo = {
  dateEvent: 'Domingo 5 de Octubre, 2025',
  sesions: [
    {
      name: '10:30AM A 11:00AM - MÚSICA Y PALABRAS DE INSPIRACIÓN',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Alameda y Garcilazo - Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Belén - Jiron 7 de Abril 450 - Huamanga',
        'Las Américas y Las Casuarinas - Av. Las Casuarinas #255 - Huamanga',
        'Mariscal Cáceres - Urb Quijano Mendivil Mz. F Lt. 2 - Huamanga',
        'Huanta - Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
    {
      name: '11:00AM A 1:00PM - SESIÓN DE LA MAÑANA',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Alameda y Garcilazo - Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Belén - Jiron 7 de Abril 450 - Huamanga',
        'Las Américas y Las Casuarinas - Av. Las Casuarinas #255 - Huamanga',
        'Mariscal Cáceres - Urb Quijano Mendivil Mz. F Lt. 2 - Huamanga',
        'Huanta - Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
    {
      name: '3:00PM A 5:00PM - SESIÓN DE LA TARDE',
      descriptions: [
        'Participan miembros en general y toda persona interesada.',
        'Alameda y Garcilazo - Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Belén - Jiron 7 de Abril 450 - Huamanga',
        'Las Américas y Las Casuarinas - Av. Las Casuarinas #255 - Huamanga',
        'Mariscal Cáceres - Urb Quijano Mendivil Mz. F Lt. 2 - Huamanga',
        'Huanta - Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
  ],
};

export const SundaySchedule = () => {
  return (
    <>
      <ScheduleComponent {...sundayInfo} />
    </>
  );
};
