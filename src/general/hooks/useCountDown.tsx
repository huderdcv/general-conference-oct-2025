import { useEffect, useState } from 'react';

interface Props {
  isEventFinish: null | boolean;
  isEventLive: null | boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLoading: boolean;
}

export const useCountDown = (eventDate: number, finishDate: number) => {
  const [timerLeft, setTimerLeft] = useState<Props>({
    isEventFinish: null,
    isEventLive: null,
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 0,
    isLoading: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const calculateTimeLeft = () => {
    const nowDate = new Date().getTime();
    const difEventDate = eventDate - nowDate;
    const difEventFinish = finishDate - nowDate;

    if (difEventDate > 0) {
      return {
        isEventFinish: false,
        isEventLive: false,
        days: Math.floor(difEventDate / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difEventDate / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difEventDate / (1000 * 60)) % 60),
        seconds: Math.floor((difEventDate / 1000) % 60),
        isLoading: false,
      };
    } else if (difEventDate <= 0 && difEventFinish > 0) {
      return {
        isEventFinish: false,
        isEventLive: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLoading: false,
      };
    } else {
      return {
        isEventFinish: true,
        isEventLive: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLoading: false,
      };
    }
  };

  return {
    ...timerLeft,
  };
};
