import React, { useRef, useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; 
import '../../styles/Contact.css';

// 1. Receber o 'language' aqui!
const Contact = ({ isDarkMode, language }) => {
  const form = useRef();
  
  // Vamos guardar apenas a fase em que o envio está ('enviando', 'sucesso', 'erro', ou '')
  const [statusState, setStatusState] = useState(''); 

  // 2. O nosso dicionário PT / EN
  const t = {
    pt: {
      titulo: <>Fala <span className="text-highlight">Connosco</span></>,
      subtitulo: "Tens interesse no projeto Safeband? Envia-nos as tuas dúvidas.",
      nome: "O teu Nome",
      email: "O teu Email",
      motivoSelect: "Qual o motivo do contacto?",
      motivo1: "Dúvida Técnica",
      motivo2: "Parceria / Investimento",
      motivo3: "Outro assunto",
      mensagem: "A tua Mensagem...",
      btnEnviar: "Enviar Mensagem",
      statusEnviando: "A enviar...",
      statusSucesso: "Mensagem enviada! ✅",
      statusErro: "Erro ao enviar. ❌",
      localizacao: "Localização",
      morada: <>Instituto Superior Técnico<br />Av. Rovisco Pais 1, 1049-001 Lisboa</>
    },
    en: {
      titulo: <>Get in <span className="text-highlight">Touch</span></>,
      subtitulo: "Are you interested in the Safeband project? Send us your questions.",
      nome: "Your Name",
      email: "Your Email",
      motivoSelect: "What is the subject of your contact?",
      motivo1: "Technical Question",
      motivo2: "Partnership / Investment",
      motivo3: "Other subject",
      mensagem: "Your Message...",
      btnEnviar: "Send Message",
      statusEnviando: "Sending...",
      statusSucesso: "Message sent! ✅",
      statusErro: "Error sending. ❌",
      localizacao: "Location",
      morada: <>Instituto Superior Técnico<br />Av. Rovisco Pais 1, 1049-001 Lisbon</>
    }
  };

  const text = t[language] || t.pt;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusState('enviando'); // Define a fase de envio

    // Configuração do EmailJS
    emailjs.sendForm(
      'service_ewbge0a', 
      'template_p1c7qvn', 
      form.current, 
      'CzOEQyhLBtcem8K9u'
    )
    .then(() => {
        setStatusState('sucesso');
        e.target.reset(); // Limpa o formulário após o sucesso
        
        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => setStatusState(''), 5000);
    }, (error) => {
        console.error(error.text);
        setStatusState('erro');
        setTimeout(() => setStatusState(''), 5000);
    });
  };

  // Função para saber o que escrever no botão
  const getButtonText = () => {
    if (statusState === 'enviando') return text.statusEnviando;
    if (statusState === 'sucesso') return text.statusSucesso;
    if (statusState === 'erro') return text.statusErro;
    return text.btnEnviar;
  };

  return (
    <section id="contactos" className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="contact-container">  
        
        <div className="contact-header">
          <h2>{text.titulo}</h2>
          <div className="border-meghna"></div>
          <p>{text.subtitulo}</p>
        </div>

        <div className="contact-grid">
          
          {/* LADO ESQUERDO: O Formulário */}
          <div className="contact-form-box">
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="input-group">
                <input type="text" name="user_name" placeholder={text.nome} required />
                <input type="email" name="user_email" placeholder={text.email} required />
              </div>
              
              <select name="subject" className="form-select" required defaultValue="">
                <option value="" disabled>{text.motivoSelect}</option>
                <option value="duvida">{text.motivo1}</option>
                <option value="parceria">{text.motivo2}</option>
                <option value="outro">{text.motivo3}</option>
              </select>

              <textarea name="message" placeholder={text.mensagem} rows="5" required></textarea>
              
              <button type="submit" className="submit-btn" disabled={statusState === 'enviando'}>
                <Send size={18} />
                <span>{getButtonText()}</span>
              </button>
            </form>
          </div>

          {/* LADO DIREITO: Informações e Mapa */}
          <div className="contact-info-box">
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>{text.localizacao}</h4>
                <p>{text.morada}</p>
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