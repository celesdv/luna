import { useState, useEffect } from 'react';
import './Gallery.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Gallery({ images = [], quote = null, quoteAuthor = null }) {
  const [carouselRef, carouselVisible] = useScrollAnimation();
  const [quoteRef, quoteVisible] = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  // Funciones del Lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-play opcional (cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manejo de teclado para el lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  return (
    <section className="gallery">
      <div className="container">
        <div 
          ref={carouselRef}
          className={`carousel-wrapper fade-up ${carouselVisible ? 'visible' : ''}`}
        >
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
                    onClick={() => openLightbox(index)}
                    style={{ cursor: 'pointer' }}
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
          <div 
            ref={quoteRef}
            className={`gallery-quote zoom-in ${quoteVisible ? 'visible' : ''}`}
          >
            <div className="quote-icon">"</div>
            <p className="quote-text">{quote}</p>
            {quoteAuthor && (
              <p className="quote-author">— {quoteAuthor}</p>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxImage();
            }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={displayImages[lightboxIndex]}
              alt={`Foto ${lightboxIndex + 1}`}
              className="lightbox-image"
            />
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {displayImages.length}
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxImage();
            }}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;

