import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Team from './components/landing/Team'; 
import Contact from './components/landing/Contact';
import Intro from './components/intro/Intro';
import Hero from './components/landing/Hero';
import About from './components/landing/About';
import Blog from './components/blog/Blog';
import Post from './pages/Post';
import Gantt from './components/landing/Gantt';

import pulseiraBlack from './assets/pulseira/black.PNG'; 
import pulseiraWhite from './assets/pulseira/white.PNG';
import logoWhite from './assets/logo/logo_inv_bg.png';
import logoBlack from './assets/logo/logo.png';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    [pulseiraBlack, pulseiraWhite, logoWhite, logoBlack].forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={isDarkMode ? 'dark-theme-active' : ''} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {!introFinished && <Intro onComplete={() => setIntroFinished(true)} />}
        
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          {/* ROTA DA LANDING PAGE PRINCIPAL */}
          <Route path="/" element={
            <main>
              <Hero isDarkMode={isDarkMode} />
              <About isDarkMode={isDarkMode} />
              <Team isDarkMode={isDarkMode} />
              <Gantt isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />
            </main>
          } />

          {/* ROTA DO BLOG (PÁGINA SEPARADA) */}
          <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
          <Route path="/blog/:id" element={<Post isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;