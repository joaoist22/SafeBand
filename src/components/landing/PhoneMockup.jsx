import React from 'react';
import '../../styles/PhoneMockup.css';

// Importa aqui o print screen real da tua app!
import printDaApp from '../../assets/logo/app.png'; 

const PhoneMockup = () => {
  return (
    <div className="css-phone-chassis">
      {/* O Notch (Câmara do iPhone) */}
      <div className="css-phone-notch"></div>
      
      {/* O Ecrã */}
      <div className="css-phone-screen">
        <img src={printDaApp} alt="App SafeBand" className="css-app-image" />
      </div>
    </div>
  );
};

export default PhoneMockup;2