import { useState } from 'react';
import './RSVP.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function RSVP({ contactPhone = "+54 9 11 1234-5678", rsvpDeadline = null }) {
  const [formRef, formVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    attending: null, // null, true (sí), false (no)
    guests: '1',
    specialMenu: '',
    otherMenu: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Format phone number for WhatsApp
  const formatPhoneForWhatsApp = (phone) => {
    return phone.replace(/[\s\+\-\(\)]/g, '');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAttendingChange = (value) => {
    setFormData({
      ...formData,
      attending: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.attending === null) {
      alert('Por favor, indica si asistirás o no');
      return;
    }

    // Build WhatsApp message
    let message = `*Confirmación de Asistencia - XV Años de Luna*\n\n`;
    message += `*Nombre:* ${formData.name}\n`;
    message += `*Asistencia:* ${formData.attending ? 'Sí asistiré ✓' : 'No podré asistir ✗'}\n`;
    
    if (formData.attending) {
      message += `*Número de invitados:* ${formData.guests}\n`;
      
      if (formData.specialMenu && formData.specialMenu !== '') {
        const menuLabels = {
          'vegetariano': 'Vegetariano',
          'vegano': 'Vegano',
          'celiaco': 'Celíaco (sin gluten)',
          'intolerante-lactosa': 'Intolerante a la lactosa',
          'otro': 'Otro'
        };
        message += `*Menú especial:* ${menuLabels[formData.specialMenu] || formData.specialMenu}\n`;
        
        if (formData.otherMenu) {
          message += `*Detalles:* ${formData.otherMenu}\n`;
        }
      }
    }

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${formatPhoneForWhatsApp(contactPhone)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Show success message
    setSubmitted(true);

    // Reset after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        attending: null,
        guests: '1',
        specialMenu: '',
        otherMenu: ''
      });
    }, 4000);
  };

  return (
    <section className="rsvp" id="rsvp">
      <div className="container">
        <h2 className="section-title fade-down visible">Confirma tu Asistencia</h2>
        <p className="rsvp-subtitle">¿Vas a venir a celebrar con nosotros?</p>
        
        {rsvpDeadline && (
          <div className="rsvp-deadline-notice">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Confirma tu asistencia antes del <strong>{rsvpDeadline}</strong></span>
          </div>
        )}

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>¡Gracias por confirmar!</h3>
            <p>Tu confirmación ha sido enviada exitosamente.</p>
            <p className="success-subtext">¡Te esperamos!</p>
          </div>
        ) : (
          <form 
            ref={formRef}
            className={`rsvp-form zoom-in ${formVisible ? 'visible' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label>¿Asistirás al evento? *</label>
              <div className="attending-buttons">
                <button
                  type="button"
                  className={`attending-btn ${formData.attending === true ? 'active yes' : ''}`}
                  onClick={() => handleAttendingChange(true)}
                >
                  <span>Sí</span>
                </button>
                <button
                  type="button"
                  className={`attending-btn ${formData.attending === false ? 'active no' : ''}`}
                  onClick={() => handleAttendingChange(false)}
                >
                  <span>No</span>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Número de Invitados *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 o más personas</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="specialMenu">Menú Especial (opcional)</label>
              <select
                id="specialMenu"
                name="specialMenu"
                value={formData.specialMenu}
                onChange={handleChange}
              >
                <option value="">Sin restricciones</option>
                <option value="vegetariano">Vegetariano</option>
                <option value="vegano">Vegano</option>
                <option value="celiaco">Celíaco (sin gluten)</option>
                <option value="intolerante-lactosa">Intolerante a la lactosa</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {formData.specialMenu && formData.specialMenu !== '' && (
              <div className="form-group">
                <label htmlFor="otherMenu">
                  {formData.specialMenu === 'otro' 
                    ? 'Especifica la restricción alimentaria *' 
                    : 'Detalles adicionales (opcional)'}
                </label>
                <textarea
                  id="otherMenu"
                  name="otherMenu"
                  value={formData.otherMenu}
                  onChange={handleChange}
                  rows="3"
                  placeholder={
                    formData.specialMenu === 'otro'
                      ? 'Ej: Alérgico a frutos secos, pescado, mariscos...'
                      : 'Ej: 2 de 4 invitados son celíacos, especifica alergias adicionales...'
                  }
                  required={formData.specialMenu === 'otro'}
                />
              </div>
            )}

            <button type="submit" className="submit-btn">
              <span>Confirmar</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVP;
