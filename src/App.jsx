import { useMemo } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import EventInfo from './components/EventInfo';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import GiftsMercadoPago from './components/GiftsMercadoPago';
import Playlist from './components/Playlist';
import UploadPhotos from './components/UploadPhotos';
import Footer from './components/Footer';
import './App.css';
import './animations.css';

// Import images
import luna1 from './assets/images/luna1.jpeg';
import luna2 from './assets/images/luna2.jpeg';
import luna3 from './assets/images/luna3.jpeg';
import luna4 from './assets/images/luna4.jpeg';
import luna5 from './assets/images/luna5.jpeg';
import luna6 from './assets/images/luna6.jpeg';
import luna7 from './assets/images/luna7.jpeg';
import luna8 from './assets/images/luna8.jpeg';
import fondo from './assets/images/background2.jpg';

function App() {
  // Detectar tipo de invitación desde URL
  // ?type=gift - Solo regalo (sin mención de colaboración)
  // Por defecto o ?type=contribution - Tarjeta/colaboración + Regalo
  const invitationType = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    return type === 'gift' ? 'gift' : 'contribution';
  }, []);

  // Puedes personalizar estos datos
  const eventData = {
    name: "Luna",
    // Fecha del evento en formato ISO (YYYY-MM-DD) o Date string
    eventDate: "2026-03-27T21:00:00",
    // Fecha límite para confirmar asistencia
    rsvpDeadline: "20 de Marzo",
    date: "Viernes, 27 de Marzo",
    time: "21:00 hs",
    location: "María Victória, Salón de Eventos", // Nombre del salón
    address: "Callejón Fernández 730, San Martín, Mendoza", // Dirección del salón
    // URL de Google Maps (opcional, si no se proporciona se genera automáticamente)
    googleMapsUrl: "https://www.google.com/maps?sca_esv=5d794197a6beaa47&sxsrf=ANbL-n7Gok6065ZfwjKCJKkGXVhZHZEsOg:1769648358336&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KcmbtTurQ36WMcJSd61b4f5K&daddr=M5570FVI,+Cj%C3%B3n.+Fernandez+602-772,+M5570FVI+San+Mart%C3%ADn,+Mendoza", // Ejemplo: "https://goo.gl/maps/..."
    // Dress Code
    dressCode: "Elegante casual",
    dressCodeDescription: "Vestite cómodo pero elegante, para que te sientas cómodo y puedas bailar.",
    // URL de la playlist de Spotify para agregar canciones
    spotifyPlaylistUrl: "https://open.spotify.com/playlist/5cC9DxYM35vAB5RCnbwDz6?si=1b28da72d9af4d28", // Ejemplo: "https://open.spotify.com/playlist/..."
    // Datos bancarios para regalos
    bankName: null, // Ejemplo: "Banco Nación"
    accountHolder: "Yasmin Lucia Campana", // Ejemplo: "Luna Pérez"
    cbu: "0000003100072679475203", // Ejemplo: "1234567890123456789012"
    alias: "Tarjetaluna15", // Ejemplo: "LUNA.XV.2026"
    alias2: "luna.campana", // Ejemplo: "LUNA.XV.2026"
    contactPhone: "+54 9 263 457 2907",
    // Ruta a la imagen de fondo (puede ser local o URL)
    // Por ahora usa un placeholder, cuando tengas la foto reemplázala
    backgroundImage: luna4, // Ejemplo: "/images/luna-foto.jpg" o URL
    // Galería de fotos - agrega las rutas de las imágenes aquí
    // Ejemplo: ["/images/luna1.jpg", "/images/luna2.jpg", ...]
    galleryImages: [luna1, luna2, luna3, luna5, luna6, luna7, luna8], // Cuando tengas las fotos, agrégalas aquí
    // Frase especial (opcional)
    quote: null, // Ejemplo: "Como no recordar que hace 15 años nació la flor más hermosa..."
    quoteAuthor: null, // Ejemplo: "Papá de Luna"
    // URL de Google Drive para subir fotos del evento
    uploadPhotosUrl: "https://drive.google.com/drive/folders/1lnWRWN7HRGdbmc_W4Qj9062CGXKgchBH?usp=sharing", // Reemplaza con tu URL de Drive
    // Colores del tema (opcional - si no se especifica, usa los colores por defecto)
    theme: {
      primary: "#002366",        // Azul eléctrico vibrante
      secondary: "#0096d6",      // Azul cyan brillante
      accent: "#e80002",         // Rojo vibrante/rosa intenso
      textPrimary: "#110303",    // Azul oscuro para texto principal
      textSecondary: "#13363e",  // Rojo para texto de acento
      textLight: "#e1e1d5",      // Azul grisáceo suave
      background: "#FFFFFF",     // Blanco puro
      backgroundAlt: "#efefef"   // Azul muy claro (Alice Blue)
    }
  };

  // Aplicar colores del tema personalizados
  const customTheme = eventData.theme ? {
    '--color-primary': eventData.theme.primary,
    '--color-secondary': eventData.theme.secondary,
    '--color-accent': eventData.theme.accent,
    '--color-text-primary': eventData.theme.textPrimary,
    '--color-text-secondary': eventData.theme.textSecondary,
    '--color-text-light': eventData.theme.textLight,
    '--color-background': eventData.theme.background,
    '--color-background-alt': eventData.theme.backgroundAlt
  } : {};

  return (
    <div
      className="App"
      style={{
        ...customTheme,
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Hero
        name={eventData.name}
        eventDate={eventData.eventDate}
        backgroundImage={eventData.backgroundImage}
      />
      <Gallery
        images={eventData.galleryImages}
        quote={eventData.quote}
        quoteAuthor={eventData.quoteAuthor}
      />
      <EventInfo
        date={eventData.date}
        time={eventData.time}
        location={eventData.location}
        address={eventData.address}
        googleMapsUrl={eventData.googleMapsUrl}
        dressCode={eventData.dressCode}
        dressCodeDescription={eventData.dressCodeDescription}
      />
      {invitationType === 'contribution' && (
        <Gifts
          bankName={eventData.bankName}
          accountHolder={eventData.accountHolder}
          cbu={eventData.cbu}
          alias={eventData.alias}
        />
      )}
      <RSVP 
        contactPhone={eventData.contactPhone}
        rsvpDeadline={eventData.rsvpDeadline}
      />
      <GiftsMercadoPago alias={eventData.alias2} />
      <Playlist spotifyPlaylistUrl={eventData.spotifyPlaylistUrl} />
      <UploadPhotos uploadPhotosUrl={eventData.uploadPhotosUrl} />
      <Footer
        contactPhone={eventData.contactPhone}
      />
    </div>
  );
}

export default App;
