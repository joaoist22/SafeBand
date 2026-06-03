import React from 'react';
import { ShieldCheck, Database, Zap, Activity, Users, Map } from 'lucide-react';
import '../../styles/About.css';

// 1. Não te esqueças de receber o 'language' aqui em cima!
const About = ({ isDarkMode, language }) => {

  // 2. O nosso dicionário PT / EN para a secção Sobre
  const t = {
    pt: {
      visaoTitulo: "A Nossa ",
      visaoDestaque: "Visão",
      visaoTexto: "A SafeBand não é apenas um acessório; é um ecossistema integrado onde a tecnologia serve de forma invisível para criar um ambiente mais seguro em grandes aglomerações.",
      
      participanteTitulo: "Para o Participante",
      partSeguranca: "Segurança Imediata:",
      partSegurancaTxt: "Num cenário de emergência, um único toque transmite instantaneamente a sua localização exata e ficha clínica para a equipa de socorro.",
      partIndep: "Independência do Telemóvel:",
      partIndepTxt: "A liberdade para desfrutar do evento com tranquilidade. A pulseira funciona de forma autónoma, sem depender de bateria ou sinal do smartphone.",
      partBle: "Alerta de Proximidade (BLE):",
      partBleTxt: "Através da tecnologia Bluetooth, um SOS acende automaticamente os LEDs das pulseiras em redor, criando um \"farol visual\" na multidão para guiar rapidamente os médicos.",
      
      orgTitulo: "Para a Organização e Equipas Médicas",
      orgCaca: "Fim da \"Caça Cega\":",
      orgCacaTxt: "O nosso algoritmo traduz os sinais de rádio em coordenadas exatas num mapa interativo, eliminando buscas ineficientes em áreas lotadas.",
      orgTriagem: "Triagem Inteligente:",
      orgTriagemTxt: "Acesso imediato aos dados vitais da vítima (tipo sanguíneo, alergias e medicação) antes mesmo de a equipa médica chegar ao local da ocorrência.",
      orgGestao: "Gestão Centralizada:",
      orgGestaoTxt: "Todos os incidentes são registados numa base de dados Cloud em tempo real, permitindo a otimização de recursos e análise de métricas pós-evento.",
      
      porqueTitulo: "Porquê a SafeBand?",
      redeTitulo: "Imunidade ao Colapso de Redes",
      redeTxt: "Em eventos de massa, o 4G/Wi-Fi falha frequentemente. A SafeBand utiliza uma rede de rádio independente LoRa (Long Range), garantindo que o sinal de SOS é sempre entregue, a grandes distâncias e sem interrupções.",
      socorroTitulo: "Otimização do Socorro",
      socorroTxt: "Ao recebermos a gravidade e a localização precisa do incidente na Central de Triagem, evitamos a sobrecarga desnecessária dos postos médicos e alocamos a equipa certa para o local exato.",
      gpsTitulo: "Localização sem GPS",
      gpsTxt: "Em recintos fechados ou tendas onde o satélite não chega, a nossa infraestrutura cria um mapa local, usando as antenas do evento para calcular a posição do utilizador.",

      roteiroTitulo: "Roteiro de Desenvolvimento",
      marco1Data: "Abril 2026",
      marco1Txt: "Inicio de desenvolvimento da pulseira e software.",
      marco2Data: "Maio e Junho 2026",
      marco2Txt: "Desenvolvimento de software e integração com a pulseira.",
      marco3Data: "5 de Julho 2026",
      marco3Txt: "Início do ElectroDay."
    },
    en: {
      visaoTitulo: "Our ",
      visaoDestaque: "Vision",
      visaoTexto: "SafeBand is not just an accessory; it is an integrated ecosystem where technology works invisibly to create a safer environment in large crowds.",
      
      participanteTitulo: "For the Attendee",
      partSeguranca: "Immediate Safety:",
      partSegurancaTxt: "In an emergency, a single touch instantly transmits your exact location and medical record to the rescue team.",
      partIndep: "Smartphone Independence:",
      partIndepTxt: "The freedom to enjoy the event with peace of mind. The wristband operates autonomously, without relying on smartphone battery or signal.",
      partBle: "Proximity Alert (BLE):",
      partBleTxt: "Through Bluetooth technology, an SOS automatically lights up the LEDs of surrounding wristbands, creating a \"visual beacon\" in the crowd to quickly guide medics.",
      
      orgTitulo: "For the Organization & Medical Teams",
      orgCaca: "End of \"Blind Hunts\":",
      orgCacaTxt: "Our algorithm translates radio signals into exact coordinates on an interactive map, eliminating inefficient searches in crowded areas.",
      orgTriagem: "Smart Triage:",
      orgTriagemTxt: "Immediate access to the victim's vital data (blood type, allergies, and medication) even before the medical team arrives at the scene.",
      orgGestao: "Centralized Management:",
      orgGestaoTxt: "All incidents are logged in a real-time Cloud database, allowing for resource optimization and post-event metrics analysis.",
      
      porqueTitulo: "Why SafeBand?",
      redeTitulo: "Network Collapse Immunity",
      redeTxt: "At mass events, 4G/Wi-Fi frequently fails. SafeBand uses an independent LoRa (Long Range) radio network, ensuring the SOS signal is always delivered over long distances and without interruptions.",
      socorroTitulo: "Rescue Optimization",
      socorroTxt: "By receiving the exact severity and location of the incident at the Triage Center, we prevent unnecessary overload of medical posts and deploy the right team to the exact spot.",
      gpsTitulo: "GPS-free Localization",
      gpsTxt: "In indoor venues or tents where satellite signals don't reach, our infrastructure creates a local map, using the event's antennas to calculate the user's position.",

      roteiroTitulo: "Development Roadmap",
      marco1Data: "April 2026",
      marco1Txt: "Start of wristband and software development.",
      marco2Data: "May and June 2026",
      marco2Txt: "Software development and integration with the wristband.",
      marco3Data: "July 5, 2026",
      marco3Txt: "Start of ElectroDay."
    }
  };

  // Atalho para não estares sempre a escrever t[language]
  const text = t[language] || t.pt;

  return (
    <section id="sobre" className={`about-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="about-container">
        
        {/* 1. CABEÇALHO E VISÃO */}
        <div className="about-header">
          <h2>{text.visaoTitulo} <span className="text-highlight">{text.visaoDestaque}</span></h2>
          <p className="main-description">
            {text.visaoTexto}
          </p>
        </div>

        {/* 2. O IMPACTO DUAL */}
        <div className="impact-grid">
          
          {/* LADO A: O PARTICIPANTE */}
          <div className="impact-card participant">
            <div className="impact-icon"><Users size={32} /></div>
            <h3>{text.participanteTitulo}</h3>
            <ul>
              <li><strong>{text.partSeguranca}</strong> {text.partSegurancaTxt}</li>
              <li><strong>{text.partIndep}</strong> {text.partIndepTxt}</li>
              <li><strong>{text.partBle}</strong> {text.partBleTxt}</li>
            </ul>
          </div>

          {/* LADO B: A ORGANIZAÇÃO & EQUIPAS */}
          <div className="impact-card organization">
            <div className="impact-icon"><Database size={32} /></div>
            <h3>{text.orgTitulo}</h3>
            <ul>
              <li><strong>{text.orgCaca}</strong> {text.orgCacaTxt}</li>
              <li><strong>{text.orgTriagem}</strong> {text.orgTriagemTxt}</li>
              <li><strong>{text.orgGestao}</strong> {text.orgGestaoTxt}</li>
            </ul>
          </div>
        </div>

        {/* 3. OS DESAFIOS QUE RESOLVEMOS */}
        <div className="challenges-title">
          <h3>{text.porqueTitulo}</h3>
        </div>
        <div className="problem-grid-mini">
          <div className="mini-card">
            <Zap size={24} className="cyan-text" />
            <h4>{text.redeTitulo}</h4>
            <p dangerouslySetInnerHTML={{ __html: text.redeTxt.replace('LoRa (Long Range)', '<strong>LoRa (Long Range)</strong>') }}></p>
          </div>
          <div className="mini-card">
            <Activity size={24} className="cyan-text" />
            <h4>{text.socorroTitulo}</h4>
            <p>{text.socorroTxt}</p>
          </div>
          <div className="mini-card">
            <Map size={24} className="cyan-text" />
            <h4>{text.gpsTitulo}</h4>
            <p>{text.gpsTxt}</p>
          </div>
        </div>

      </div>

      {/* 4. ROTEIRO DE DESENVOLVIMENTO (TIMELINE) */}
      <div className="timeline-section">
        <h3>{text.roteiroTitulo}</h3>
        <div className="timeline-container">
          
          {/* Marco: ABRIL (PASSADO) */}
          <div className="timeline-item past">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{text.marco1Data}</h4>
              <p>{text.marco1Txt}</p>
            </div>
          </div>

          {/* Marco: MAIO/JUNHO (ATUAL) */}
          <div className="timeline-item current">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{text.marco2Data}</h4>
              <p>{text.marco2Txt}</p>
            </div>
          </div>

          {/* Marco: JULHO (FUTURO) */}
          <div className="timeline-item future">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{text.marco3Data}</h4>
              <p dangerouslySetInnerHTML={{ __html: text.marco3Txt.replace('ElectroDay', '<strong>ElectroDay</strong>') }}></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;