import './Gifts.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Gifts({ bankName = null, accountHolder = null, cbu = null, alias = null, invitationType = 'gift' }) {
  const [contentRef, contentVisible] = useScrollAnimation();

  // Check if at least one bank detail is provided
  const hasBankInfo = bankName || accountHolder || cbu || alias;

  // Mensaje para colaboración con tarjeta
  const cardMessage = {
    title: 'Tarjeta',
    subtitle: (
      <>
        Valor de la tarjeta: $25.000
        <br />
        Gracias por tu colaboración.
      </>
    )
  };

  return (
    <section className="gifts">
      <div className="container">
        <div
          ref={contentRef}
          className={`gifts-content slide-up ${contentVisible ? 'visible' : ''}`}
        >
          <h2 className="gifts-title">{cardMessage.title}</h2>
          <p className="gifts-subtitle">{cardMessage.subtitle}</p>

          {hasBankInfo ? (
            <div className="bank-info">
              <div className="bank-card">
                <h3 className="bank-title">Datos Bancarios</h3>

                {bankName && (
                  <div className="bank-item">
                    <span className="bank-label">Banco</span>
                    <span className="bank-value">{bankName}</span>
                  </div>
                )}

                {accountHolder && (
                  <div className="bank-item">
                    <span className="bank-label">Titular</span>
                    <span className="bank-value">{accountHolder}</span>
                  </div>
                )}

                {cbu && (
                  <div className="bank-item">
                    <span className="bank-label">CBU</span>
                    <span className="bank-value copy-value" onClick={() => {
                      navigator.clipboard.writeText(cbu);
                      alert('CBU copiado al portapapeles');
                    }}>
                      {cbu}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </span>
                  </div>
                )}

                {alias && (
                  <div className="bank-item">
                    <span className="bank-label">Alias</span>
                    <span className="bank-value copy-value" onClick={() => {
                      navigator.clipboard.writeText(alias);
                      alert('Alias copiado al portapapeles');
                    }}>
                      {alias}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="gifts-placeholder">
              <p>Información bancaria próximamente</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gifts;

