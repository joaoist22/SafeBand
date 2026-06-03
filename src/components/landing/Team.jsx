import React from 'react';
import '../../styles/Team.css'; 

import fotoJoao from '../../assets/equipa/Joao_Sousa_Vertical.jpg';
import fotoBarbara from '../../assets/equipa/BM.jpeg';
import fotoJuan from '../../assets/equipa/JL.jpeg';
import fotoFalardo from '../../assets/equipa/JF.jpeg';
import fotoValentim from '../../assets/equipa/VM.jpeg';
import fotoJesus from '../../assets/equipa/Jesus.jpeg';

// A lista mantém-se cá fora, com os dados fixos (nomes, links e fotos)
const teamMembers = [
  {
    id: 1,
    name: "João Sousa",
    desc: "",
    li: "https://www.linkedin.com/in/joaof-sousa",
    photo: fotoJoao 
  },
  {
    id: 2,
    name: "Bárbara Modesto",
    desc: "",
    li: "https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-modesto-a75505297",
    photo: fotoBarbara 
  },
  {
    id: 3,
    name: "Juan López",
    desc: "",
    li: "https://www.linkedin.com/in/juan-lopes-431476269",
    photo: fotoJuan 
  },
  {
    id: 4,
    name: "João Falardo",
    desc: "",
    li: "https://www.linkedin.com/in/joão-falardo-2a4920229",
    photo: fotoFalardo 
  },
  {
    id: 5,  
    name: "Valentim Maksymchuk",
    desc: "",
    li: "https://www.linkedin.com/in/valentim-maksymchuk-506659333/", 
    photo: fotoValentim 
  },
  {
    id: 6,
    name: "João de Jesus",
    desc: "",
    li: "https://www.linkedin.com/in/joaojesus9000/",
    photo: fotoJesus 
  }
];

// 1. Receber a propriedade 'language'
const Team = ({ isDarkMode, language }) => {

  // 2. O nosso dicionário PT / EN para a Equipa
  const t = {
    pt: {
      titulo: <>A Nossa <span className="text-highlight">Equipa</span></>,
      roles: {
        1: "Engenheiro Full Stack & Team Lead",
        2: "Desenvolvedora Frontend UI & Designer",
        3: "Engenheiro Eletrotécnico",
        4: "Engenheiro de Hardware & Firmware",
        5: "Engenheiro de Comunicações & Sistemas Embebidos",
        6: "Líder de Blog e Comunicações"
      }
    },
    en: {
      titulo: <>Our <span className="text-highlight">Team</span></>,
      roles: {
        1: "Full Stack Engineer & Team Lead",
        2: "Frontend UI Developer & Designer",
        3: "Electronic Engineer",
        4: "Hardware & Firmware Engineer",
        5: "Communications & Embedded Systems Engineer",
        6: "Blog and Communications Lead"
      }
    }
  };

  const text = t[language] || t.pt;

  return (
    <section id="equipa" className={`team-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="team-container">
        
        <div className="team-header">
          <h2>{text.titulo}</h2>
          <div className="border-meghna"></div>
        </div>  

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-photo">
                <img src={member.photo} alt={member.name} />
                
                <div className="mask">
                  <div className="social-links">
                    <a href={member.li || "#"} target="_blank" rel="noopener noreferrer">IN</a>
                  </div>
                </div>
              </div>

              <div className="member-meta">
                <h4 style={{ color: isDarkMode ? '#fff' : '#1a1c23' }}>{member.name}</h4>
                
                {/* 3. Aqui vamos buscar o cargo ao dicionário usando o ID do membro! */}
                <span className="member-role">{text.roles[member.id]}</span>
                
                <p style={{ color: isDarkMode ? '#ccc' : '#555' }}>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Team;