import './EventInfo.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Componentes de iconos SVG elegantes
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const DressCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="1"></circle>
    <path d="M12 5v2"></path>
    <path d="M4 17l8-10 8 10"></path>
    <line x1="4" y1="17" x2="20" y2="17"></line>
  </svg>
);

function EventInfo({
  date,
  time,
  location,
  address,
  googleMapsUrl,
  dressCode,
  dressCodeDescription
}) {
  const [cardRef, cardVisible] = useScrollAnimation();

  // Si no hay URL de Google Maps, crear una con la dirección
  const mapsUrl = googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="event-info">
      <div className="container">
        <div
          ref={cardRef}
          className={`info-card-single fade-up ${cardVisible ? 'visible' : ''}`}
        >
          <div className="card-header">
            <h3>Información del Evento</h3>
          </div>

          <div className="card-content">
            {/* Fecha y Hora */}
            <div className="info-section">
              <div className="info-item">
                <span className="info-label">
                  <CalendarIcon />
                  <span>Fecha</span>
                </span>
                <span className="info-value">{date}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <ClockIcon />
                  <span>Hora</span>
                </span>
                <span className="info-value">{time}</span>
              </div>
            </div>

            {/* Separador */}
            <div className="section-divider"></div>

            {/* Ubicación */}
            <div className="info-section location-section">
              <div className="info-item">
                <span className="info-label">
                  <LocationIcon />
                  <span>Ubicación</span>
                </span>
                <span className="info-value">{location}</span>
                <span>{address}</span>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="maps-link"
              >
                <span>Ver en Google Maps</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Separador */}
            <div className="section-divider"></div>

            {/* Dress Code */}
            <div className="info-section dresscode-section">
            <div className="info-item">
                <span className="info-label">
                  <DressCodeIcon />
                  <span>Dress Code</span>
                </span>
                <span className="info-value">{dressCode}</span>
                <span>{dressCodeDescription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
