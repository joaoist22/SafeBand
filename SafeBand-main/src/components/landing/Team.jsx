import React from 'react';
import '../../styles/Team.css'; // Vamos criar o CSS a seguir

// 1. IMPORTA A IMAGEM AQUI NO TOPO! 
// (Dá-lhe um nome como fotoJoao)
import fotoJoao from '../../assets/equipa/Joao_Sousa_Vertical.jpg';
import fotoBarbara from '../../assets/equipa/BM.jpeg';
import fotoJuan from '../../assets/equipa/JL.jpeg';
import fotoFalardo from '../../assets/equipa/JF.jpeg';
import fotoValentim from '../../assets/equipa/VM.jpeg';
import fotoJesus from '../../assets/equipa/Jesus.jpeg';

const teamMembers = [
  {
    id: 1,
        name: "João Sousa",
        role: "Engenheiro de Hardware",
        desc: "",
        li: "https://www.linkedin.com/in/joaof-sousa",
        
        // 2. USA A VARIÁVEL AQUI (Sem aspas!)
        photo: fotoJoao 
  },
  {
    id: 2,
        name: "Bárbara Modesto",
        role: "Engenheira de Software",
        desc: "",
        li: "https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-modesto-a75505297",
        // 2. USA A VARIÁVEL AQUI (Sem aspas!)
        photo: fotoBarbara 
  },
  {
    id: 3,
    name: "Juan López",
    role: "Designer UI/UX",
    desc: "",
    li: "https://www.linkedin.com/in/juan-lopes-431476269",
    photo: fotoJuan 
  },
  {
    id: 4,
        name: "João Falardo",
        role: "Engenheiro de Hardware",
        desc: "",
        li: "https://www.linkedin.com/in/joão-falardo-2a4920229",
        
        // 2. USA A VARIÁVEL AQUI (Sem aspas!)
        photo: fotoFalardo 
  },
  {
    id: 5,  
        name: "Valentim Maksymchuk",
        role: "Engenheiro de Software",
        desc: "",
        li: "https://www.linkedin.com/in/valentim-maksymchuk-506659333/", 

        // 2. USA A VARIÁVEL AQUI (Sem aspas!)  
        photo: fotoValentim 
  },
  {
    id: 6,
        name: "João de Jesus",
        role: "Engenheiro de Software",
        desc: "",
        li: "https://www.linkedin.com/in/joaojesus9000/",
        
        // 2. USA A VARIÁVEL AQUI (Sem aspas!)
        photo: fotoJesus 
  }
];

const Team = ({ isDarkMode }) => {
  return (
    <section id="equipa" className={`team-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="team-container">
        <div className="team-header">
          <h2>A Nossa <span className="text-highlight">Equipa</span></h2>
          <div className="border-meghna"></div>
        </div>  

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-photo">
                <img src={member.photo} alt={member.name} />
                
                <div className="mask">
                  <div className="social-links">
                    {/* DICA PRO: Adicionei target="_blank" para abrir num novo separador! */}
                    <a href={member.li || "#"} target="_blank" rel="noopener noreferrer">IN</a>
                  </div>
                </div>
              </div>

              <div className="member-meta">
                <h4 style={{ color: isDarkMode ? '#fff' : '#1a1c23' }}>{member.name}</h4>
                <span className="member-role">{member.role}</span>
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