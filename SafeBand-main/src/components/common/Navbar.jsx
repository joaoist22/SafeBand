import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react'; // Adicionados ícones de Menu
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logoImgLight from '../../assets/logo/logo.png';
import logoImgDark from '../../assets/logo/logo_inv_bg.png';
import '../../styles/Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [pulseColor, setPulseColor] = useState('#57cbcc');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o hambúrguer

  const darkColors = ['#57cbcc', '#ff007c', '#00ff88', '#b100ff', '#f39c12'];
  const lightColors = ['#005f5f', '#c9005a', '#008a45', '#6b0099', '#d35400'];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPalette = isDarkMode ? darkColors : lightColors;
      const randomColor = currentPalette[Math.floor(Math.random() * currentPalette.length)];
      setPulseColor(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, [isDarkMode]);

  // Função para fechar o menu ao clicar num link (útil no mobile)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar-container ${isDarkMode ? 'dark-mode' : ''}`}>
      
      {/* ESQUERDA: Logo e ECG (Sempre visíveis) */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img 
            src={isDarkMode ? logoImgDark : logoImgLight} 
            alt="Sentinel Logo" 
            style={{ height: isDarkMode ? '45px' : '60px', width: 'auto', transition: '0.3s' }} 
          />
        </Link>
        <svg className="pulse-svg" viewBox="0 0 100 40">
          <path className="pulse-path" style={{ stroke: pulseColor }} d="M 0 20 L 20 20 L 30 5 L 45 35 L 55 10 L 65 25 L 75 20 L 100 20" />
        </svg>
      </div>

      {/* BOTÃO HAMBÚRGUER (Só aparece no telemóvel via CSS) */}
      <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* O "EMBRULHO": No PC é uma linha, no Mobile é a gaveta lateral */}
      <div className={`navbar-content ${isMenuOpen ? 'open' : ''}`}>
        
        <nav className="navbar-links">
          <NavHashLink smooth to="/#inicio" onClick={closeMenu}>Início</NavHashLink>
          <NavHashLink smooth to="/#sobre" onClick={closeMenu}>Sobre</NavHashLink>
          <NavHashLink smooth to="/#equipa" onClick={closeMenu}>Equipa</NavHashLink>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <NavHashLink smooth to="/#contactos" onClick={closeMenu}>Contactos</NavHashLink>
        </nav>

        <div className="navbar-controls">
          <button className="control-btn language-btn">
            <Globe size={20} />
            <span>PT</span>
          </button>

          <div className="theme-toggle" onClick={() => { toggleTheme(); closeMenu(); }} style={{ cursor: 'pointer' }}>
            {isDarkMode ? <Moon size={20} color="#57cbcc" /> : <Sun size={20} color="#f39c12" />}
            <div className={`switch ${isDarkMode ? 'dark-active' : ''}`}>
              <div className="switch-knob"></div>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;