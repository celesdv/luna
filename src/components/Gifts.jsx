import './Gifts.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GiftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="4" rx="1"></rect>
    <path d="M12 8v13M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M7 8h10"></path>
    <path d="M7 8L5 4h14l-2 4"></path>
  </svg>
);

function Gifts({ bankName = null, accountHolder = null, cbu = null, alias = null, invitationType = 'gift' }) {
  const [contentRef, contentVisible] = useScrollAnimation();

  // Check if at least one bank detail is provided
  const hasBankInfo = bankName || accountHolder || cbu || alias;

  // Mensajes según el tipo de invitación
  const messages = {
    gift: {
      title: 'Regalos',
      subtitle: 'Tu presencia es el mejor regalo, pero si querés hacerle un obsequio a Luna, podés hacer una transferencia'
    },
    contribution: {
      title: 'Tarjeta y Regalos',
      subtitle: (
        <>
          Tu presencia es lo más importante para nosotros.
          <br />
          Si querés colaborar con tu tarjeta (sugerido $20.000) o queres hacerle un regalo a Luna, podés hacerlo mediante transferencia
        </>
      )
    }
  };

  const currentMessages = messages[invitationType] || messages.contribution;

  return (
    <section className="gifts">
      <div className="container">
        <div
          ref={contentRef}
          className={`gifts-content slide-up ${contentVisible ? 'visible' : ''}`}
        >
          <div className="gifts-icon">
            <GiftIcon />
          </div>
          <h2 className="gifts-title">{currentMessages.title}</h2>
          <p className="gifts-subtitle">{currentMessages.subtitle}</p>

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

