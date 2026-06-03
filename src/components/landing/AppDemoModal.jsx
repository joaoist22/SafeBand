import React, { useState } from 'react';
import '../../styles/AppDemoModal.css';

export default function AppDemoModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  if (!isOpen) return null;

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert('Erro: Por favor, preenche todos os campos.');
      return;
    }

    setIsLoading(true);
    // Simular o tempo de resposta do servidor
    setTimeout(() => {
      setIsLoading(false);
      setIsRegistered(true);
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Impede que o clique dentro do modal feche a janela */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Botão para fechar o Modal */}
        <button className="close-btn" onClick={onClose}>&times;</button>

        {/* O Mockup do Telemóvel */}
        <div className="phone-mockup">
          <div className="phone-screen">
            
            {isRegistered ? (
              // Ecrã de Sucesso
              <div className="app-container success-view">
                <div className="success-circle">
                  <span className="success-icon">✓</span>
                </div>
                <h2 className="app-title">Tudo Pronto!</h2>
                <p className="app-subtitle">O teu perfil clínico está guardado na nuvem.</p>
              </div>
            ) : (
              // Ecrã de Registo (A Casca)
              <div className="app-container">
                <h2 className="app-title">Bem-vindo à<br/><span className="app-brand">SafeBand</span></h2>
                <p className="app-subtitle">A tua segurança a um toque de distância.</p>

                <div className="app-form">
                  <input
                    type="text"
                    className="app-input"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="app-input"
                    placeholder="E-mail do IST"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="app-input"
                    placeholder="Palavra-passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    className="app-button"
                    onClick={handleRegister}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      'CRIAR CONTA'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}