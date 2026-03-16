    import React from 'react';
    import { Link } from 'react-router-dom';
    import { postData } from '../../data/posts'; // 1. IMPORTA OS DADOS AQUI
    import '../../styles/Blog.css';

    const Blog = ({ isDarkMode }) => {
    return (
        <div className={`blog-page ${isDarkMode ? 'dark' : ''}`}>
        <div className="blog-header">
            <div className="container">
            <h1 className="newsroom-h1">SafeBand Newsroom</h1>
            <h2 className="newsroom-h2">Explora o Futuro da <br/><span>Tecnologia de Segurança</span></h2>
            </div>
        </div>

        <div className="blog-container">
            <div className="blog-grid">
            
            {/* 2. O MAP FAZ O TRABALHO TODO POR TI */}
            {postData.map((post) => (
                <article key={post.id} className="blog-card">
                <div className="blog-card-img">
                    {/* Usa a imagem definida no ficheiro de dados */}
                    <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                    <span className="post-category">{post.tag}</span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="post-footer">
                    <span>{post.date}</span>
                    {/* O Link leva para /blog/1 ou /blog/2 conforme o ID */}
                    <Link to={`/blog/${post.id}`} className="read-more">Ler Artigo →</Link>
                    </div>
                </div>
                </article>
            ))}

            </div>
        </div>
        </div>
    );
    };

    export default Blog;