// src/data/posts.js

// 1. As tuas importações (iguais ao Team.jsx, mas com ../ em vez de ../../)
import fotoJoao from '../assets/equipa/Joao_Sousa_Vertical.jpg';
import fotoBarbara from '../assets/equipa/BM.jpeg';
import fotoJuan from '../assets/equipa/JL.jpeg';
import fotoFalardo from '../assets/equipa/JF.jpeg';
import fotoValentim from '../assets/equipa/VM.jpeg';
import fotoJesus from '../assets/equipa/Jesus.jpeg';
import logo from '../assets/logo/logo_dif.png';
import imgreuniao from '../assets/fotos_diversas/reuniao.jpeg';

export const postData = [
  {
    id: "2",
    tag: "SEGURANÇA",
    title: "A Realidade da Segurança em Eventos",
    author: "João Sousa",
    
    // 2. Usar a variável da foto (Sem aspas!)
    authorImage: fotoJoao, 
    
    // 3. O Link que vai abrir quando clicarem no teu nome/foto
    authorLinkedIn: "https://www.linkedin.com/in/joaof-sousa",
    
    date: "1 Março, 2026",
    image: logo,
    excerpt: "Grandes eventos enfrentam lacunas de segurança críticas que a tecnologia atual não resolve.",
    content: `A sobrecarga da rede móvel é um cenário-padrão em grandes aglomerações. 
    Isto impede que os participantes peçam ajuda e que as equipas de socorro se coordenem.
    A SafeBand resolve isto através de uma plataforma integrada.` 
  },
   {
    id: "3",
    tag: "reunião",
    title: "Reunião de Planeamento de comunicação",
    author: "João Sousa",
    
    // 2. Usar a variável da foto (Sem aspas!)
    authorImage: fotoJoao, 
    
    // 3. O Link que vai abrir quando clicarem no teu nome/foto
    authorLinkedIn: "https://www.linkedin.com/in/joaof-sousa",
    
    date: "15 Março, 2026",
    image: imgreuniao,
    excerpt:"A comunicação é um dos pilares fundamentais para o sucesso de qualquer projeto. Esta reunião de planeamento foi crucial para alinhar a equipa e definir as estratégias e ações tecnológicas necessárias para superar os desafios de conectividade em eventos de grande escala.",
    content:`A sobrecarga das redes móveis é um cenário recorrente em grandes aglomerações. Nesta reunião, focámo-nos no planeamento da comunicação do projeto, discutindo as melhores formas de manter a equipa informada e tecnicamente alinhada.Tivemos a oportunidade de aprofundar a visão da equipa e debater como implementar estas soluções num evento como a Santa Sebenta (AEIST), analisando a viabilidade da escala para contextos ainda maiores. Entre as ideias discutidas, destacaram-se o uso de pulseiras como recetores passivos de BLE, permitindo a propagação de mensagens em rede, e a utilização de tecnologia LoRa para comunicações de emergência com baixa latência. Embora seja apenas o início de um longo caminho, este foi um passo decisivo para garantir a coesão da equipa e a viabilidade técnica do projeto.` 
}

];