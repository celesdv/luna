import { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calcular inmediatamente
    calculateTimeLeft();

    // Actualizar cada segundo
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-number">{formatNumber(timeLeft.days)}</div>
        <div className="countdown-label">Días</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{formatNumber(timeLeft.hours)}</div>
        <div className="countdown-label">Horas</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{formatNumber(timeLeft.minutes)}</div>
        <div className="countdown-label">Minutos</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{formatNumber(timeLeft.seconds)}</div>
        <div className="countdown-label">Segundos</div>
      </div>
    </div>
  );
}

export default Countdown;

