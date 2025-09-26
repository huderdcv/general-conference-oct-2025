import { useCountDown } from '../hooks';
import './countdown.css';

interface Props {
  eventDate: number;
  finishDate: number;
}
export const CountDown = ({ eventDate, finishDate }: Props) => {
  const {
    isEventFinish,
    isEventLive,
    isLoading,
    days,
    hours,
    minutes,
    seconds,
  } = useCountDown(eventDate, finishDate);
  // if (isLoading) return <p>hola</p>;
  return (
    <div className="countdown-container cd-container-conference">
      {isEventFinish ? (
        <div className="countdown-box">
          <p className="countdown-finish-msg">
            Evento finalizado, pero lo aprendido sigue contigo.
          </p>
        </div>
      ) : isEventLive ? (
        <div className="countdown-box">
          <p className="countdown-finish-msg">
            ¡La Conferencia General ha comenzado!
          </p>
        </div>
      ) : (
        <div className="countdown-box">
          <p className="cd-text">Sábado 4 y domingo 5 de octubre</p>
          <div className="cd-box-div">
            <div
              className="cd-item "
              style={{ opacity: `${isLoading ? '0' : '100%'}` }}
            >
              <span className="cd-value">
                {days < 10 && '0'}
                {days}
              </span>
              <span className="cd-property">DIAS</span>
            </div>
            <div
              className="cd-item"
              style={{ opacity: `${isLoading ? '0' : '100%'}` }}
            >
              <span className="cd-value">
                {hours < 10 && '0'}
                {hours}
              </span>
              <span className="cd-property">HORAS</span>
            </div>
            <div
              className="cd-item"
              style={{ opacity: `${isLoading ? '0' : '100%'}` }}
            >
              <span className="cd-value ">
                {minutes < 10 && '0'}
                {minutes}
              </span>
              <span className="cd-property">MINUTOS</span>
            </div>
            <div
              className="cd-item"
              style={{ opacity: `${isLoading ? '0' : '100%'}` }}
            >
              <span className="cd-value">
                {seconds < 10 && '0'}
                {seconds}
              </span>
              <span className="cd-property">SEGUNDOS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
