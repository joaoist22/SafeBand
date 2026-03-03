import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import '../../styles/Contact.css';

const Contact = ({ isDarkMode }) => { 
  return (
    // Se isDarkMode for true, adiciona a classe 'dark'
    <section id="contactos" className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="contact-container">  
        <div className="contact-header">
          <h2>Fala <span className="text-highlight">Connosco</span></h2>
          <div className="border-meghna"></div>
          <p>Tens interesse no projeto Sentinel? Junta-te aos nossos testes piloto ou envia-nos as tuas dúvidas.</p>
        </div>

        <div className="contact-grid">
          
          {/* LADO ESQUERDO: O Formulário */}
          <div className="contact-form-box">
            <form className="form">
              <div className="input-group">
                <input type="text" placeholder="O teu Nome" required />
                <input type="email" placeholder="O teu Email" required />
              </div>
              
              <select className="form-select" required>
                <option value="" disabled selected>Qual o motivo do contacto?</option>
                <option value="teste">Participar no Teste Piloto</option>
                <option value="duvida">Dúvida Técnica</option>
                <option value="parceria">Parceria / Investimento</option>
                <option value="outro">Outro assunto</option>
              </select>

              <textarea placeholder="A tua Mensagem..." rows="5" required></textarea>
              
              <button type="submit" className="submit-btn">
                <Send size={18} />
                <span>Enviar Mensagem</span>
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
                <p>contacto@safeband.pt</p>
              </div>
            </div>

            {/* Espaço para um Mapa Embebido (Google Maps) */}
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.55648550772!2d-9.140889623439446!3d38.73602987175811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a39e782a99%3A0xc3f58e65ea07e1dc!2sInstituto%20Superior%20T%C3%A9cnico!5e0!3m2!1spt-PT!2spt!4v1709300000000!5m2!1spt-PT!2spt" 
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