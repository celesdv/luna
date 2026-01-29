import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para animaciones al hacer scroll
 * @param {Object} options - Opciones de Intersection Observer
 * @returns {Array} - [ref, isVisible] para asignar al elemento y estado de visibilidad
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez visible, dejar de observar (animación una sola vez)
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1, // El elemento debe estar al menos 10% visible
        rootMargin: '50px', // Empezar la animación 50px antes de entrar en viewport
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

