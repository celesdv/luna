import './EventInfo.css';

// Componentes de iconos SVG elegantes
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

function EventInfo({
  date,
  time,
  address,
  googleMapsUrl,
  dressCode,
  dressCodeDescription
}) {
  // Si no hay URL de Google Maps, crear una con la dirección
  const mapsUrl = googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="event-info">
      <div className="container">
        <div className="info-grid">
          {/* Card Principal: Fecha, Hora y Lugar */}
          <div className="info-card main-card">
            <div className="card-header">
              <h3>Información</h3>
            </div>
            <div className="card-content">
              <div className="info-item">
                <span className="info-label">
                  <CalendarIcon />
                  <span>Fecha</span>
                </span>
                <span className="info-value">{date}</span>
                <span className="info-label">
                  <ClockIcon />
                  <span>Hora</span>
                </span>
                <span className="info-value">{time}</span>
              </div>
            </div>
          </div>

          {/* Card: Ubicación con Google Maps */}
          <div className="info-card location-card">
            <div className="card-header">
              <h3>Ubicación</h3>
            </div>
            <div className="card-content">
              <p className="location-address">{address}</p>
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
          </div>

          {/* Card: Dress Code */}
          <div className="info-card dresscode-card">
            <div className="card-header">
              <h3>Dress Code</h3>
            </div>
            <div className="card-content">
              <p className="dresscode-title">{dressCode}</p>
              <p className="dresscode-description">{dressCodeDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
