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
import fotodivisaotarefas from '../assets/fotos_diversas/divisaotarefas.jpeg';
import imgJuanQuadro from '../assets/fotos_diversas/imgJuanQuadro.jpeg';

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
  },
  {
      id: "4",
      tag: "tarefas",
      title: "Organização da Equipa e Divisão de Tarefas",
      author: "João Jesus",
      
      // 2. Usar a variável da foto (Sem aspas!)
      authorImage: fotoJesus, 
      
      // 3. O Link que vai abrir quando clicarem no teu nome/foto
      authorLinkedIn: "https://www.linkedin.com/in/joaojesus9000",
      
      date: "20 Março, 2026",
      image: fotodivisaotarefas,
      excerpt:"A equipa SafeBand formalizou a divisão de responsabilidades do projeto, distribuindo tarefas específicas que abrangem desde o desenvolvimento de hardware e protocolos de comunicação até à criação da WebApp e gestão da comunicação.",
      content:`Para garantir a máxima eficiência no desenvolvimento do protótipo SafeBand no âmbito do programa ElectroCap, a nossa equipa formalizou a divisão de tarefas estruturais do projeto. A distribuição de responsabilidades foi planeada para cobrir todas as frentes de engenharia e comunicação, permitindo um trabalho paralelo e focado. A coordenação da comunicação e o registo do progresso através de publicações semanais no blogue ficaram a cargo do João Jesus. A infraestrutura digital do projeto foi dividida entre o João Sousa, responsável pelo desenvolvimento do website e pela programação do backend da WebApp, e a Bárbara Modesto, que assumiu a criação da identidade visual e a programação do frontend da mesma aplicação. No domínio do hardware, o Juan Lopez foca-se no desenvolvimento e integração dos componentes da pulseira inteligente, enquanto o João Falardo lidera a montagem e o desenvolvimento do hardware das torres de receção. Por fim, a definição e a implementação dos protocolos de comunicação cruciais para a transmissão de dados estão sob a alçada do Valentim Maksymchuk. Com as áreas de intervenção claramente definidas, desde a camada física até à interface de utilizador, a equipa encontra-se a trabalhar de forma totalmente sincronizada para os próximos marcos do projeto.` 
  },
  {
      id: "5",
      tag: "materiais",
      title: "Arquitetura e Hardware do Protótipo",
      author: "João Jesus",
      
      // 2. Usar a variável da foto (Sem aspas!)
      authorImage: fotoJesus, 
      
      // 3. O Link que vai abrir quando clicarem no teu nome/foto
      authorLinkedIn: "https://www.linkedin.com/in/joaojesus9000",
      
      date: "24 Março, 2026",
      image: imgJuanQuadro,
      excerpt:"A equipa SafeBand fechou a arquitetura e a Lista de Materiais (BOM) do protótipo. Definimos o fluxo de rede (Beacon -> Pulseira -> Torre -> Servidor) focado no processamento local, onde a pulseira calcula a sua própria posição. Avançamos agora para a montagem dos circuitos com módulos ESP32, comunicação LoRa/BLE e alertas hápticos e visuais.",
      content:`Nesta semana decisiva, a equipa SafeBand fechou a Lista de Materiais e definiu a arquitetura final do protótipo, que contará com uma torre, três beacons e seis pulseiras para a fase de demonstração. Estabelecemos que o fluxo de dados será linear, partindo dos beacons para a pulseira, desta para a torre e, por fim, para o servidor, sem qualquer comunicação direta entre beacons. Para otimizar a nossa rede, decidimos que o processamento será feito localmente. Cada pulseira calculará a sua zona através da triangulação da força do sinal dos beacons mais próximos. Além disso, para provar a escalabilidade da nossa solução, implementámos um sistema onde cada pulseira emitirá um pulso BLE durante situações de alerta, iluminando imediatamente os dispositivos vizinhos com a mesma cor. No que diz respeito ao hardware, a nossa torre utilizará um módulo LilyGo com comunicação LoRa e alimentação direta via USB-C, enquanto os beacons serão módulos BLE pré-fabricados, uma escolha estratégica para garantir estabilidade nesta fase inicial. O núcleo de todo o sistema será a pulseira, desenvolvida em torno de um microcontrolador Seeed ESP32 com LoRa e NFC integrados. Este dispositivo wearable será alimentado por uma bateria de 500mAh e estará equipado com LEDs de feedback e um motor de vibração, cujo acionamento será gerido por um transístor NMOS de forma segura. Iniciaremos os testes e a montagem do circuito numa breadboard antes de avançarmos para o desenho do PCB final, focando as nossas atenções no próximo grande desafio de engenharia: a sincronização da pulsação dos LEDs com a música do festival.` 
  }
];