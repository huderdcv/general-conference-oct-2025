interface Sesion {
  name: string;
  descriptions: string[];
}
interface Props {
  dateEvent: string;
  sesions: Sesion[];
}
export const ScheduleComponent = ({ dateEvent, sesions }: Props) => {
  return (
    <>
      <p className="schedule-date">{dateEvent}</p>
      {sesions.map((sesion) => (
        <div key={sesion.name} className="container-sesion">
          {/* line and circles */}
          <div className="schedule-linetime">
            <div className="schedule-line"></div>
            <div className="schedule-point"></div>
          </div>
          {/* sesion information */}
          <div className="sesion-information">
            <p className="sesion-name">{sesion.name}</p>
            {sesion.descriptions.map((description) => (
              <p key={description} className="sesion-description">
                {description}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
