import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postData } from '../data/posts';
import '../styles/Post.css';

const Post = ({ isDarkMode }) => {
  const { id } = useParams();
  
  // 1. Procura o post correto pelo ID
  const post = postData.find(p => String(p.id) === String(id));

  // 2. Apanha os outros posts para a barra lateral (tira o atual, mostra até 3)
  const suggestedPosts = postData.filter(p => String(p.id) !== String(id)).slice(0, 3);

  // 3. Garante que a página abre no topo quando clicas num artigo novo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // PROTEÇÃO: Se o post não existir
  if (!post) {
    return (
      <div className={`post-page ${isDarkMode ? 'dark' : ''}`}>
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h2>Artigo não encontrado.</h2>
          <Link to="/blog">Voltar ao Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`post-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="post-container">
        
        {/* COLUNA ESQUERDA: O TEU ARTIGO */}
        <article className="post-main">
          <h1 className="post-title-main">{post.title}</h1>
          
          {/* Cabeçalho do Autor - Estilo Medium */}
          <div className="post-author-header">
            <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer">
              <img src={post.authorImage} alt={post.author} className="post-author-avatar" />
            </a>
            <div className="post-author-info">
              <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="post-author-name">
                {post.author}
              </a>
              <span className="post-meta-date">{post.date}</span>
            </div>
          </div>

          <figure className="post-hero-container">
            <img src={post.image} alt={post.title} className="post-hero-image" />
          </figure>

          <section className="post-body">
            <p>{post.content}</p>
          </section>
        </article>

        {/* COLUNA DIREITA: BARRA LATERAL COM MAIS ARTIGOS */}
        <aside className="post-sidebar">
          <div className="sidebar-sticky">
            {/* Título da secção */}
            <h3 className="sidebar-title">Mais Artigos</h3>
            
            <div className="sidebar-list">
              {suggestedPosts.length > 0 ? (
                suggestedPosts.map((sugPost) => (
                  <Link to={`/blog/${sugPost.id}`} key={sugPost.id} className="sidebar-card">
                    {/* Foto e Nome (Linha 1) */}
                    <div className="sidebar-author">
                      <img src={sugPost.authorImage} alt={sugPost.author} className="sidebar-avatar-small" />
                      <span className="sidebar-author-name">{sugPost.author}</span>
                    </div>
                    {/* Título (Linha 2) */}
                    <h4 className="sidebar-card-title">{sugPost.title}</h4>
                    {/* Data (Linha 3 - NOVA!) */}
                    <span className="sidebar-card-date">{sugPost.date}</span>
                  </Link>
                ))
              ) : (
                <p className="no-suggestions">Mais artigos em breve...</p>
              )}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Post;