import { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery({ images = [], quote = null, quoteAuthor = null }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si no hay imágenes, usar placeholders
  const defaultImages = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play opcional (cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="gallery">
      <div className="container">
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={prevSlide}
              aria-label="Foto anterior"
            >
              ‹
            </button>

            <div className="carousel-slides">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  <img
                    src={image}
                    alt={`Foto ${index + 1} de Luna`}
                    className="carousel-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-btn carousel-btn-next"
              onClick={nextSlide}
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </div>

          {/* Indicadores */}
          <div className="carousel-indicators">
            {displayImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Frase/Quote */}
        {quote && (
          <div className="gallery-quote">
            <div className="quote-icon">"</div>
            <p className="quote-text">{quote}</p>
            {quoteAuthor && (
              <p className="quote-author">— {quoteAuthor}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;

