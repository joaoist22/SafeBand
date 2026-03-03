import React, { useRef, useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Não te esqueças: npm install @emailjs/browser
import '../../styles/Contact.css';

const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('A enviar...');

    // Configuração do EmailJS
    emailjs.sendForm(
      'service_ewbge0a', 
      'template_p1c7qvn', 
      form.current, 
      'CzOEQyhLBtcem8K9u'
    )
    .then(() => {
        setStatus('Mensagem enviada! ✅');
        e.target.reset(); // Limpa o formulário após o sucesso
    }, (error) => {
        console.error(error.text);
        setStatus('Erro ao enviar. ❌');
    });
  };

  return (
    <section id="contactos" className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="contact-container">  
        <div className="contact-header">
          <h2>Fala <span className="text-highlight">Connosco</span></h2>
          <div className="border-meghna"></div>
          <p>Tens interesse no projeto Safeband? Envia-nos as tuas dúvidas.</p>
        </div>

        <div className="contact-grid">
          
          {/* LADO ESQUERDO: O Formulário */}
          <div className="contact-form-box">
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="input-group">
                <input type="text" name="user_name" placeholder="O teu Nome" required />
                <input type="email" name="user_email" placeholder="O teu Email" required />
              </div>
              
              <select name="subject" className="form-select" required defaultValue="">
                <option value="" disabled>Qual o motivo do contacto?</option>
                <option value="duvida">Dúvida Técnica</option>
                <option value="parceria">Parceria / Investimento</option>
                <option value="outro">Outro assunto</option>
              </select>

              <textarea name="message" placeholder="A tua Mensagem..." rows="5" required></textarea>
              
              <button type="submit" className="submit-btn">
                <Send size={18} />
                <span>{status || 'Enviar Mensagem'}</span>
              </button>
            </form>
          </div>

          {/* LADO DIREITO: Informações e Mapa */}
          <div className="contact-info-box">
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>Localização</h4>
                <p>Instituto Superior Técnico<br />Av. Rovisco Pais 1, 1049-001 Lisboa</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>contacto.safeband@gmail.com</p>
              </div>
            </div>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.748152504629!2d-9.141753423479663!3d38.73674685623053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339798579549%3A0x6e9a4e33917d5983!2sInstituto%20Superior%20T%C3%A9cnico!5e0!3m2!1spt-PT!2spt!4v1709400000000!5m2!1spt-PT!2spt"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;