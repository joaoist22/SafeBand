// src/data/posts.js
import snoopyImg from '../assets/fotos_diversas/snoopy.jpg';
export const postData = [
  {
    id: "2",
    tag: "SEGURANÇA",
    title: "A Realidade da Segurança em Eventos",
    author: "João Sousa",
    date: "1 Março, 2026",
    readTime: "7 min",
    image: snoopyImg, // A mesma foto para os dois!
    excerpt: "Grandes eventos enfrentam lacunas de segurança críticas que a tecnologia atual não resolve.", // Para o Blog.jsx
    content: `
      A sobrecarga da rede móvel é um cenário-padrão em grandes aglomerações. 
      Isto impede que os participantes peçam ajuda e que as equipas de socorro se coordenem.
      A SafeBand resolve isto através de uma plataforma integrada.
    ` // Para o Post.jsx
  }
];