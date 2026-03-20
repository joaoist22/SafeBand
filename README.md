📖 Manual do Projeto SafeBand

Bem-vindo ao repositório do site SafeBand! Este documento explica como o projeto está organizado e como qualquer membro da equipa pode adicionar novos artigos ao blog, testar e publicar.
📁 1. Como funcionam as Pastas do Projeto

Todo o código importante vive dentro da pasta principal chamada src/ (source). É aqui que vais passar 99% do teu tempo.

    src/assets/: A gaveta das imagens. Tem subpastas como equipa/ (para as fotos dos membros) e fotos_diversas/ (para as capas dos artigos).

    src/data/: Onde guardamos a informação em texto. É aqui que vive o ficheiro posts.js que controla todos os artigos do blog.

    src/pages/: Os "ecrãs" inteiros do site. Por exemplo, o Blog.jsx (página com todos os cartões) e o Post.jsx (página de leitura de um artigo específico).

    src/components/: Pequenos blocos de legos que usamos em várias páginas (como a Navbar ou o Footer).

    src/styles/: Os ficheiros .css que dão cor, tamanho e magia visual ao site (ex: Post.css).

✍️ 2. Como Fazer um Novo Post no Blog

Não precisas de mexer em código visual para criar um post. Basta adicionares texto ao nosso ficheiro de dados!

Passo A: Guardar a imagem

    Pega na imagem que queres usar para o artigo e guarda-a na pasta src/assets/fotos_diversas/.

    Dá-lhe um nome simples, sem espaços (ex: nova-pulseira.jpg).

Passo B: Adicionar o texto

    Abre o ficheiro src/data/posts.js.

    No topo do ficheiro, "chama" a tua imagem nova:
    JavaScript

    import fotoNovaPulseira from '../assets/fotos_diversas/nova-pulseira.jpg';

    Vai ao fundo da lista postData = [ ... ], coloca uma vírgula a seguir ao último artigo, e adiciona o teu novo bloco:
    JavaScript

    {
      id: "5", // ATENÇÃO: Tem de ser um número que ainda não exista!
      tag: "HARDWARE",
      title: "O título épico do teu artigo",
      author: "O Teu Nome",
      authorImage: fotoJoao, // Usa a variável da tua foto que já está no topo
      authorLinkedIn: "https://www.linkedin.com/in/oteulinkedin",
      date: "16 Março, 2026",
      image: fotoNovaPulseira, // A variável da imagem que importaste no Passo B2
      excerpt: "Um pequeno resumo de 1 ou 2 linhas para aparecer no cartão...",
      content: `
        Aqui escreves o texto todo do teu artigo.
        Podes dar os "Enters" que quiseres.

        Tudo o que escreveres aqui vai aparecer formatado no site!
      ` 
    }

🔍 3. Como ver como ficou ANTES de publicar (Preview Local)

Nunca deves enviar nada para a internet sem ver como fica no teu próprio computador primeiro.

    Abre o teu VS Code.

    Abre o terminal integrado (Menu superior: Terminal -> New Terminal).

    Escreve o comando de arranque do Vite e carrega no Enter:
    Bash

    npm run dev

    O terminal vai dar-te um link (normalmente http://localhost:5173). Clica nele (ou copia para o teu browser).

    O site vai abrir no teu PC! Vai à aba do Blog e confirma se o teu artigo está perfeito, se a foto carregou bem e se não há erros no texto.

🚀 4. Como Guardar e Publicar (Git Push tim-tim por tim-tim)

Se o site está perfeito no teu computador, é hora de enviar para a nuvem (GitHub) para o resto do mundo ver.

No terminal do VS Code (se o npm run dev ainda estiver a correr, podes abrir uma nova aba de terminal clicando no ícone +), escreve estes 3 comandos, um de cada vez, carregando no Enter a seguir a cada um:

1. Preparar o pacote (Add):
Este comando diz ao Git para apanhar TODOS os ficheiros que alteraste ou adicionaste (incluindo imagens novas).
Bash

git add .

(Atenção: não te esqueças daquele ponto final . a seguir ao add!)

2. Dar um nome ao pacote (Commit):
Aqui deixas uma mensagem clara para a equipa saber o que fizeste.
Bash

git commit -m "feat: Adicionado novo artigo sobre a pulseira e ajustado CSS"

3. Enviar para a nuvem (Push):
Este é o comando que envia fisicamente o código do teu PC para o repositório online.
Bash

git push

(Se por acaso o terminal der um erro a pedir para definires a "upstream branch", basta copiares o comando que ele próprio te sugere lá, que costuma ser git push -u origin main).

E já está! O teu código está salvo e, se tiveres o site ligado a um serviço como o Vercel ou Netlify, ele atualiza automaticamente na internet ao fim de 1 ou 2 minutos.