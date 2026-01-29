import './Playlist.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MusicIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

function Playlist({ spotifyPlaylistUrl }) {
  const [contentRef, contentVisible] = useScrollAnimation();
  
  return (
    <section className="playlist">
      <div className="container">
        <div 
          ref={contentRef}
          className={`playlist-content flip-up ${contentVisible ? 'visible' : ''}`}
        >
          <div className="playlist-icon">
            <MusicIcon />
          </div>
          <h2 className="playlist-title">¿Tenés una canción que no puede faltar?</h2>
          <p className="playlist-subtitle">Agregá tu canción favorita a nuestra playlist</p>

          {spotifyPlaylistUrl ? (
            <a
              href={spotifyPlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-link"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.3.18-.54.48-.66 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.56.3z" />
              </svg>
              <span>Agregar canción a la playlist</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ) : (
            <div className="playlist-placeholder">
              <p>Link de playlist próximamente</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Playlist;

