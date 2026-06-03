import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/AppShowcase.css';

const AppShowcase = ({ isDarkMode, language }) => {
  
  // O dicionário agora guarda o HTML para podermos trocar a ordem!
  const t = {
    pt: {
      titulo: <><span className="text-highlight">Simulação</span>  em Tempo Real</>,
      descricao: "Interage com o telemóvel à direita para acionar um pedido de SOS. Observa a resposta imediata na Central Médica de Triagem."
    },
    en: {
      titulo: <>Real Time <span className="text-highlight">Simulation</span></>,
      descricao: "Interact with the phone on the right to trigger an SOS request. Watch the immediate response on the Medical Triage Dashboard."
    }
  };

  const text = t[language] || t.pt;

  return (
    <section id="simulacao" className={`about-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="about-container">
        
        <div className="about-header">
            <motion.h1 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ color: isDarkMode ? '#fff' : '#1a1c23' }}
            >
              {/* O título inteiro com as quebras de linha já vem do dicionário */}
              {text.titulo}
            </motion.h1>
            
            <p className="main-description">
              {text.descricao}
            </p>
        </div>

        <div className="showcase-interactive-area">
          
          {/* === ECRÃ DA CENTRAL MÉDICA (DASHBOARD) === */}
          <motion.div 
            className="dashboard-mockup"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="browser-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <div className="browser-url">safeband-medical.local</div>
            </div>
            <iframe 
              src="/dash-demo.html" 
              className="dashboard-iframe"
              title="Central Médica"
            />
          </motion.div>

          {/* === TELEMÓVEL 3D (APP DO UTILIZADOR) === */}
          <div className="perspective-container">
            <motion.div
              className="phone-3d-chassis"
              initial={{ rotateY: 180, rotateX: 15, scale: 0.9, opacity: 0 }}
              whileInView={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            >
              <div className="phone-face phone-back">
                <div className="camera-island">
                  <div className="lens"></div><div className="lens"></div>
                </div>
                <div className="phone-logo">SafeBand</div>
              </div>

              <div className="phone-face phone-front">
                <div className="phone-notch"></div>
                <iframe 
                  src="/app-demo.html" 
                  className="app-iframe"
                  title="App SafeBand"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;