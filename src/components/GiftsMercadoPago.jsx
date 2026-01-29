import { useState } from 'react';
import './GiftsMercadoPago.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GiftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12v8H4v-8"></path>
    <path d="M22 7H2v5h20V7z"></path>
    <path d="M12 22V7"></path>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>
);

function GiftsMercadoPago({ alias = null }) {
  const [contentRef, contentVisible] = useScrollAnimation();
  const [copied, setCopied] = useState(false);

  const handleCopyAlias = () => {
    if (alias) {
      navigator.clipboard.writeText(alias);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="gifts-mercadopago">
      <div className="container">
        <div
          ref={contentRef}
          className={`gifts-mp-content slide-up ${contentVisible ? 'visible' : ''}`}
        >
          <div className="gifts-mp-icon">
            <GiftIcon />
          </div>
          <h2 className="gifts-mp-title">Regalo</h2>
          <p className="gifts-mp-subtitle">
            Mi mayor regalo es tu presencia, pero si querés hacerme un obsequio te comparto mi alias
          </p>

          {alias ? (
            <button
              onClick={handleCopyAlias}
              className="alias-copy-btn"
            >
              <div className="alias-info">
                <span className="alias-value">{alias}</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {copied ? (
                  <polyline points="20 6 9 17 4 12"></polyline>
                ) : (
                  <>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </>
                )}
              </svg>
            </button>
          ) : (
            <div className="gifts-mp-placeholder">
              <p>Información de regalos próximamente</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GiftsMercadoPago;
