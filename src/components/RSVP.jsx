import { useState } from 'react';
import './RSVP.css';

function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attending: null, // null, true (sí), false (no)
    guests: '1',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);

    // Simulación de envío exitoso
    setSubmitted(true);

    // Resetear después de 4 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        attending: null,
        guests: '1',
        phone: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="rsvp" id="rsvp">
      <div className="container">
        <h2 className="section-title">Confirma tu Asistencia</h2>
        <p className="rsvp-subtitle">¿Vas a venir a celebrar con nosotros?</p>

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
          <form className="rsvp-form" onSubmit={handleSubmit}>
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
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+54 9 11 1234-5678"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje (opcional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Déjanos un mensaje especial..."
              />
            </div>

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
