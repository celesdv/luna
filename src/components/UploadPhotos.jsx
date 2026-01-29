import './UploadPhotos.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function UploadPhotos({ uploadPhotosUrl }) {
  const [uploadRef, uploadVisible] = useScrollAnimation();

  if (!uploadPhotosUrl) return null;

  return (
    <section className="upload-photos">
      <div className="container">
        <div 
          ref={uploadRef}
          className={`upload-photos-section slide-up ${uploadVisible ? 'visible' : ''}`}
        >
          <h2 className="upload-photos-title">Compartí tus Fotos</h2>
          <p className="upload-photos-text">¿Tomaste fotos en el evento?</p>
          <p className="upload-photos-description">
            Ayudanos a crear recuerdos inolvidables subiendo tus mejores fotos del evento
          </p>
          <a
            href={uploadPhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="upload-photos-btn"
          >
            <span className="upload-icon">📸</span>
            Subir Fotos
          </a>
        </div>
      </div>
    </section>
  );
}

export default UploadPhotos;
