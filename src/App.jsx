import Hero from './components/Hero';
import Gallery from './components/Gallery';
import EventInfo from './components/EventInfo';
import RSVP from './components/RSVP';
import Playlist from './components/Playlist';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Puedes personalizar estos datos
  const eventData = {
    name: "Luna",
    // Fecha del evento en formato ISO (YYYY-MM-DD) o Date string
    eventDate: "2026-03-27T21:00:00",
    date: "Viernes, 27 de Marzo",
    time: "21:00 hs",
    location: "Salón de Eventos",
    address: "Calle Principal 123, Barriales",
    // URL de Google Maps (opcional, si no se proporciona se genera automáticamente)
    googleMapsUrl: null, // Ejemplo: "https://goo.gl/maps/..."
    // Dress Code
    dressCode: "Elegante casual",
    dressCodeDescription: "Vestite cómodo pero elegante, para que te sientas cómodo y puedas bailar.",
    // URL de la playlist de Spotify para agregar canciones
    spotifyPlaylistUrl: null, // Ejemplo: "https://open.spotify.com/playlist/..."
    // Datos bancarios para regalos
    bankName: null, // Ejemplo: "Banco Nación"
    accountHolder: null, // Ejemplo: "Luna Pérez"
    cbu: null, // Ejemplo: "1234567890123456789012"
    alias: null, // Ejemplo: "LUNA.XV.2026"
    contactPhone: "+54 9 263 475 0617",
    // Ruta a la imagen de fondo (puede ser local o URL)
    // Por ahora usa un placeholder, cuando tengas la foto reemplázala
    backgroundImage: null, // Ejemplo: "/images/luna-foto.jpg" o URL
    // Galería de fotos - agrega las rutas de las imágenes aquí
    // Ejemplo: ["/images/luna1.jpg", "/images/luna2.jpg", ...]
    galleryImages: [], // Cuando tengas las fotos, agrégalas aquí
    // Frase especial (opcional)
    quote: null, // Ejemplo: "Como no recordar que hace 15 años nació la flor más hermosa..."
    quoteAuthor: null // Ejemplo: "Papá de Luna"
  };

  return (
    <div className="App">
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
      <RSVP />
      <Playlist spotifyPlaylistUrl={eventData.spotifyPlaylistUrl} />
      <Gifts
        bankName={eventData.bankName}
        accountHolder={eventData.accountHolder}
        cbu={eventData.cbu}
        alias={eventData.alias}
      />
      <Footer
        contactPhone={eventData.contactPhone}
      />
    </div>
  );
}

export default App;
