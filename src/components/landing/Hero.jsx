import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Hero.css';

import pulseiraBlack from '../../assets/pulseira/black.PNG'; 
import pulseiraWhite from '../../assets/pulseira/white.PNG';
import PhoneMockup from './PhoneMockup';

const Hero = ({ isDarkMode }) => {
  return (
    <section id="inicio" className={`hero-section ${isDarkMode ? 'hero-dark' : ''}`}>
      <div className="hero-container">
        
        {/* === LADO ESQUERDO: A PULSEIRA E O TELEFONE === */}
        <div className="hero-visuals">
          
          {/* ECG SUPERIOR ESQUERDO */}
          <div className="ecg-wrapper top-l">
            <svg className="visual-ecg-v" viewBox="0 0 40 200">
              <path 
                className="ecg-path" 
                style={{ stroke: isDarkMode ? '#57cbcc' : '#ff004c' }}
                d="M 20 0 V 60 L 5 75 L 35 95 L 5 115 L 35 135 L 20 150 V 200" 
              />
            </svg>
          </div>

          {/* O TELEMÓVEL ESTÁTICO (Direito e atrás da pulseira) */}
          <motion.div 
            className="hero-phone-wrapper"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PhoneMockup />
          </motion.div>

          {/* A PULSEIRA (Fica à frente do telemóvel) */}
          <motion.img 
            key={isDarkMode ? 'white-band' : 'black-band'}
            src={isDarkMode ? pulseiraWhite : pulseiraBlack} 
            alt="SafeBand Sentinel" 
            className="hero-product-img overlapping-band"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [-15, 15, -15] }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
            }}
          />

          {/* ECG INFERIOR DIREITO */}
          <div className="ecg-wrapper bottom-r">
            <svg className="visual-ecg-v" viewBox="0 0 40 300">
              <path 
                className="ecg-path" 
                style={{ stroke: isDarkMode ? '#ff004c' : '#57cbcc' }}
                d="M 20 0 V 100 L 5 120 L 35 150 L 5 180 L 35 210 L 20 230 V 300" 
              />
            </svg>
          </div>
        </div>

        {/* === LADO DIREITO: TEXTO IMPACTANTE === */}
        <div className="hero-text-box">
          <motion.h1 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ color: isDarkMode ? '#fff' : '#1a1c23' }}
          >
            A Segurança <br/>
            <span className="text-highlight">no Teu Pulso.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ color: isDarkMode ? '#ccc' : '#555' }}
          >
            Tecnologia que salva. Segurança que conecta. Uma solução integrada de resposta a emergências para grandes eventos, onde cada segundo conta.
          </motion.p>
          
          <div className="hero-buttons">
            <a href="#simulacao" className="btn-primary">Descobrir Tecnologia</a>
            <a href="#contactos" className="btn-secondary">Pedir Demonstração</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;