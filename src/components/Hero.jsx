import { useState, useEffect } from 'react';
import Countdown from './Countdown';
import './Hero.css';

function Hero({ name = "Luna", eventDate, backgroundImage }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Por defecto, usar un placeholder si no hay imagen
  const defaultImage = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1920&q=80';
  const imageUrl = backgroundImage || defaultImage;

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Si falla, mostrar de todas formas
  }, [imageUrl]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-subtitle-top">XV Años</h2>
        {eventDate && (
          <>
            <Countdown targetDate={eventDate} />
          </>
        )}
      </div>
    </section>
  );
}

export default Hero;

