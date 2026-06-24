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
      partSeguranca: "Segurança num Toque:",
      partSegurancaTxt: "Um toque no SOS envia os teus dados vitais e leituras de sinal. O nosso sistema calcula a tua posição exata no mapa, permitindo que a equipa médica chegue até ti rapidamente.",
      partIndep: "Liberdade Total:",
      partIndepTxt: "A SafeBand é 100% autónoma. Proteção contínua e alertas críticos através de rede rádio de longo alcance, sem depender da bateria ou da rede do teu smartphone.",
      partBle: "Farol de Resgate:",
      partBleTxt: "A tecnologia Bluetooth da pulseira cria um farol visual na multidão. Ao detetar um SOS, as pulseiras em redor piscam automaticamente, guiando os médicos até ao local.",
      
      orgTitulo: "Para a Organização e Equipas Médicas",
      orgCaca: "Localização Precisa:",
      orgCacaTxt: "Acaba com as buscas ineficientes. O nosso backend traduz sinais LoRa em coordenadas exatas num mapa interativo, permitindo que a equipa médica chegue rapidamente à vítima.",
      orgTriagem: "Triagem Inteligente:",
      orgTriagemTxt: "Acesso imediato aos dados vitais da vítima. As equipas conhecem o histórico clínico (alergias e medicação) antes mesmo de chegarem ao local da ocorrência.",
      orgGestao: "Gestão Centralizada:",
      orgGestaoTxt: "Incidentes registados em tempo real na Cloud. Otimiza a alocação de recursos e analisa métricas detalhadas de segurança para melhorar a gestão de futuros eventos.",
      
      porqueTitulo: "Porquê a SafeBand?",
      redeTitulo: "Imunidade a Falhas",
      redeTxt: "O 4G/Wi-Fi colapsa em multidões. A SafeBand contorna este problema utilizando uma rede de rádio LoRa independente e de longo alcance, garantindo o envio do teu SOS a grandes distâncias e sem interrupções.",
      socorroTitulo: "Socorro Otimizado",
      socorroTxt: "O nosso backend recebe os dados de SOS e calcula a área provável da vítima. O painel central direciona a equipa médica certa para o ponto exato no mapa, evitando a sobrecarga dos postos de socorro.",
      gpsTitulo: "Localização sem GPS",
      gpsTxt: "Onde o sinal de satélite falha, a nossa infraestrutura resolve. A pulseira recolhe os sinais de beacons BLE locais e o sistema calcula a tua posição tridimensional na dashboard, mesmo em recintos fechados.",

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
      partSeguranca: "Safety in One Tap:",
      partSegurancaTxt: "A single SOS press sends your vital data and signal readings. Our system instantly maps your location, ensuring medical teams reach you with pinpoint accuracy.",
      partIndep: "Total Freedom:",
      partIndepTxt: "SafeBand is 100% autonomous. Continuous protection and critical alerts over an independent long-range radio network, independent of your smartphone.",
      partBle: "Visual Rescue Beacon:",
      partBleTxt: "Our Bluetooth technology turns nearby devices into a visual beacon. When an SOS is triggered, surrounding wristbands flash automatically, guiding paramedics to you.",
      
      orgTitulo: "For the Organization & Medical Teams",
      orgCaca: "Precise Localization:",
      orgCacaTxt: "End inefficient searches. Our backend translates LoRa signals into exact coordinates on an interactive map, ensuring medical teams reach the victim rapidly.",
      orgTriagem: "Smart Triage:",
      orgTriagemTxt: "Instant access to vital victim data. Teams view clinical history (allergies and medications) before even arriving at the incident site.",
      orgGestao: "Centralized Management:",
      orgGestaoTxt: "Real-time incident logging in the Cloud. Optimize resource allocation and analyze detailed safety metrics to improve future event management.",
      
      porqueTitulo: "Why SafeBand?",
      redeTitulo: "Network Immunity",
      redeTxt: "Cellular networks frequently collapse in massive crowds. SafeBand bypasses this by using an independent, long-range LoRa radio network, ensuring your SOS alert is always delivered without interruptions.",
      socorroTitulo: "Optimized Rescue",
      socorroTxt: "Our backend processes the SOS data and calculates the victim's probable area. The central dashboard directs the right medical team to the exact spot on the map, preventing aid station overload.",
      gpsTitulo: "GPS-Free Tracking",
      gpsTxt: "Where satellite signals fail, our local infrastructure takes over. The wristband gathers signals from fixed BLE beacons, allowing the system to map your precise position, even inside indoor venues.",

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