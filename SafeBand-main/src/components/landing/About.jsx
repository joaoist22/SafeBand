import React from 'react';
import { ShieldCheck, Database, Zap, Activity, Users, Map } from 'lucide-react';
import '../../styles/About.css';

const About = ({ isDarkMode }) => {
  return (
    <section id="sobre" className={`about-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="about-container">
        
        {/* 1. CABEÇALHO E VISÃO */}
        <div className="about-header">
          <h2>A Nossa <span className="text-highlight">Visão</span></h2>
          <p className="main-description">
            A SafeBand não é apenas um acessório; é um ecossistema integrado onde a tecnologia serve de forma invisível para criar um ambiente comprovadamente mais seguro em grandes aglomerações.
          </p>
        </div>

        {/* 2. O IMPACTO DUAL */}
        <div className="impact-grid">
          
          {/* LADO A: O PARTICIPANTE */}
          <div className="impact-card participant">
            <div className="impact-icon"><Users size={32} /></div>
            <h3>Para o Participante</h3>
            <ul>
              <li><strong>Segurança Proativa:</strong> Ser encontrado pela equipa médica mesmo antes de conseguir pedir ajuda, graças à monitorização de sinais vitais.</li>
              <li><strong>Tranquilidade Total:</strong> A liberdade de desfrutar do evento sabendo que a sua integridade está a ser monitorizada em tempo real.</li>
              <li><strong>Deteção Automática:</strong> Sensores inteligentes capazes de identificar quedas ou situações de risco imediato sem intervenção do utilizador.</li>
            </ul>
          </div>

          {/* LADO B: A ORGANIZAÇÃO & EQUIPAS */}
          <div className="impact-card organization">
            <div className="impact-icon"><Database size={32} /></div>
            <h3>Para a Organização</h3>
            <ul>
              <li><strong>Gestão Baseada em Dados:</strong> Acesso a KPIs objetivos como tempos médios de resposta e taxas de ocupação por zona.</li>
              <li><strong>Fim da "Caça Cega":</strong> As equipas médicas recebem a localização exata e a natureza da emergência, eliminando buscas ineficientes na multidão.</li>
              <li><strong>Mapas de Calor:</strong> Visualização em tempo real da densidade de pessoas para evitar incidentes antes que aconteçam.</li>
            </ul>
          </div>
        </div>

        {/* 3. OS DESAFIOS QUE RESOLVEMOS */}
        <div className="challenges-title">
          <h3>Porquê a SafeBand?</h3>
        </div>
        <div className="problem-grid-mini">
          <div className="mini-card">
            <Zap size={24} className="cyan-text" />
            <h4>Colapso de Redes</h4>
            <p>Resolvemos a falha de comunicação em cenários onde a rede móvel padrão é insuficiente.</p>
          </div>
          <div className="mini-card">
            <Activity size={24} className="cyan-text" />
            <h4>Volume de Ocorrências</h4>
            <p>Otimizamos a triagem para evitar a sobrecarga dos postos médicos em eventos de massa.</p>
          </div>
          <div className="mini-card">
            <Map size={24} className="cyan-text" />
            <h4>Acesso Vital</h4>
            <p>Garantimos que o socorro chega ao local exato, superando os desafios logísticos da multidão.</p>
          </div>
        </div>

      </div>

      <div className="timeline-section">
  <h3>Roteiro de Desenvolvimento</h3>
  <div className="timeline-container">
    
    {/* Marco: FEVEREIRO (PASSADO) */}
    <div className="timeline-item past">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Fevereiro 2026</h4>
        <p>Início do 2º Semestre e validação do conceito SafeBand.</p>
      </div>
    </div>

    {/* Marco: MARÇO (ATUAL - O Teu Destaque) */}
    <div className="timeline-item current">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Março 2026</h4>
        <p>Desenvolvimento do site, blogue e definição de requisitos técnicos.</p>
      </div>
    </div>

    {/* Marco: FUTURO */}
    <div className="timeline-item future">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Próximos Passos</h4>
        <p>Construção do protótipo funcional e apresentação final no <strong>ElectroDay</strong>.</p>
      </div>
    </div>

  </div>
</div>
    </section>
  );
};

export default About;