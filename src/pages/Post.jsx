import React from 'react';
import { useParams } from 'react-router-dom'; // 1. Faltava esta importação!
import { postData } from '../data/posts';
import '../styles/Post.css';

const Post = ({ isDarkMode }) => {
  const { id } = useParams();
  
  // Procura o post correto pelo ID
  const post = postData.find(p => p.id === id);

  // 2. PROTEÇÃO: Se o post for undefined (ex: ID errado), o código para aqui
  // sem crashar o site.
  if (!post) {
    return (
      <div className={`post-template ${isDarkMode ? 'dark' : ''}`}>
        <div className="container">
          <h2>Artigo não encontrado.</h2>
        </div>
      </div>
    );
  }

  return (
    <article className={`post-template ${isDarkMode ? 'dark' : ''}`}>
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span>{post.date} · Por {post.author}</span>
        </div>
      </div>

      {/* 3. A FOTO: É exatamente a mesma do Blog.jsx porque vem do mesmo objeto */}
      <figure className="post-hero-image">
        <img src={post.image} alt={post.title} />
      </figure>

      <section className="post-body">
        {/* Usamos o conteúdo definido no teu ficheiro de dados */}
        <p>{post.content}</p>
      </section>
    </article>
  );
};

export default Post;