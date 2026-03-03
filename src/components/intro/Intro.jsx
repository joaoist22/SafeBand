import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Intro.css';

// O TEU LOGO!
import logoImg from '../../assets/logo/logo_tiny.png'; 

const Intro = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [randomOuter, setRandomOuter] = useState([]);

  const innerLeds = [
    { x: 0, y: -45 }, { x: 45, y: 0 }, { x: 0, y: 45 }, { x: -45, y: 0 }
  ];
  const outerLeds = [
    { x: 0, y: -90 }, { x: 65, y: -65 }, { x: 90, y: 0 }, { x: 65, y: 65 },
    { x: 0, y: 90 }, { x: -65, y: 65 }, { x: -90, y: 0 }, { x: -65, y: -65 }
  ];

  useEffect(() => {
    const indices = [];
    while (indices.length < 4) {
      let r = Math.floor(Math.random() * 8);
      if (!indices.includes(r)) indices.push(r);
    }
    setRandomOuter(indices);

    const startDelay = setTimeout(() => {
    const t1 = setTimeout(() => setStep(1), 800); 
    const t2 = setTimeout(() => setStep(2), 1800); 
    const t3 = setTimeout(() => setStep(3), 2800); 
    const t4 = setTimeout(() => setStep(4), 4000); 
    const t5 = setTimeout(() => setStep(5), 4800); // Ecrã Vermelho
    const t6 = setTimeout(() => setStep(6), 5000); // Logo Smooth
    const t7 = setTimeout(() => setStep(7), 7000); // Cortina sobe
    const t8 = setTimeout(() => onComplete(), 8200); // Destruir intro

    return () => {
      [t1, t2, t3, t4, t5, t6, t7, t8].forEach(clearTimeout);
    };
  }, 200);

  return () => clearTimeout(startDelay);
}, [onComplete]);

  return (
    <AnimatePresence>
      {step < 8 && (
        <motion.div 
          className="intro-overlay"
          initial={{ y: 0 }}
          animate={{ y: step === 7 ? "-100vh" : 0 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          
          {/* PASSO 5: O ECRÃ FICA VERMELHO SÓLIDO */}
          {step >= 5 && (
            <motion.div 
              className="red-flash-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3 }} // Mais rápido a pintar tudo de vermelho
            />
          )}

          {/* PASSO 1 A 4: OS LEDS */}
          {step < 5 && (
            <div className="radar-system">
              <motion.div 
                className="led center-led"
                animate={{ backgroundColor: step >= 1 ? "#ff004c" : "#00ff88" }}
              >
                {step === 1 && <div className="danger-ripple"></div>}
                {step === 3 && <div className="danger-ripple"></div>}
              </motion.div>

              {innerLeds.map((pos, i) => (
                <motion.div 
                  key={`inner-${i}`} className="led inner-led"
                  initial={{ x: pos.x, y: pos.y }}
                  animate={{ backgroundColor: step >= 2 ? "#ff004c" : "#00ff88" }}
                />
              ))}

              {outerLeds.map((pos, i) => {
                const isAffected = randomOuter.includes(i);
                return (
                  <motion.div 
                    key={`outer-${i}`} className="led outer-led"
                    initial={{ x: pos.x, y: pos.y }}
                    animate={{ 
                      backgroundColor: (step >= 3 && isAffected) ? "#ff004c" : "#00ff88",
                      opacity: (step >= 3 && !isAffected) ? 0.3 : 1 
                    }}
                  />
                )
              })}

              {step >= 4 && (
                <>
                  <motion.div className="led blue-led" initial={{ x: -300, y: 0, opacity: 0 }} animate={{ x: -25, y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "backOut" }} />
                  <motion.div className="led blue-led" initial={{ x: 300, y: 0, opacity: 0 }} animate={{ x: 25, y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "backOut" }} />
                </>
              )}
            </div>
          )}

          {/* PASSO 6: O LOGO COM ANIMAÇÃO "SMOOTH" */}
          {/* PASSO 6: O LOGO APARECE SUPER SUAVE (SMOOTH) */}
          {step >= 6 && (
            <motion.div 
              className="intro-logo-container"
              // Começa quase no tamanho normal e totalmente invisível
              initial={{ opacity: 0, scale: 0.95 }} 
              // Aumenta ligeiramente enquanto fica visível
              animate={{ opacity: 1, scale: 1 }} 
              // A MAGIA: 2 SEGUNDOS de transição com easeInOut (arranca devagar, trava devagar)
              transition={{ duration: 2, ease: "easeInOut" }} 
            >
              <img src={logoImg} alt="Sentinel Logo Tiny" className="intro-logo-simple" />
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;