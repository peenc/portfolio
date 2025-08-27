import { useParams, useNavigate } from "react-router-dom";
import { projects } from "/src/data/projects";
import "../css/ProjetoDetalhes.css";
import React from "react";
import Footer from "./Footer.jsx";



export default function ProjetoDetalhes() {
    const { id } = useParams();
    const projeto = projects.find((proj) => proj.id.toLowerCase().replace(/\s+/g, '') === id);
    const navigate = useNavigate();

    if (!projeto) {
        return (
            <section className="info-section projeto-detalhes">
                <div className="navbar">
                    <button className="btn-voltar" onClick={() => navigate(-1)}>← Voltar</button>
                </div>
                <h2>Projeto não encontrado</h2>
                <p>Não conseguimos localizar esse projeto. Verifique o link.</p>
            </section>
        );
    }

    return (

        <div className="projeto-detalhes ">
            <div className="navbar">
                <button className="btn-voltar" onClick={() => navigate(-1)}>← Voltar</button>
                <h1 className="navbar-title">{projeto.title}</h1>
            </div>

            <section id="projeto" className="info-section">

            <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}>{projeto.description}</p>
            <div className= "info-projeto">
            {projeto.status && (
                <>
                    <h3>Status do Projeto</h3>
                    <ul>
                        {projeto.status.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </>
            )}

            {projeto.futuro && (
                <>
                    <h3>Funcionalidades Planejadas</h3>
                    <ul>
                        {projeto.futuro.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </>
            )}

            <h3>Tecnologias Utilizadas</h3>
            <ul>
                <li><strong>Frontend:</strong> {projeto.frontend}</li>
                {projeto.mapa && (
                    <li><strong>Mapa:</strong> {projeto.mapa}</li>
                )}
                <li><strong>Backend:</strong> {projeto.backend}</li>
                <li><strong>Banco de Dados:</strong> {projeto.banco}</li>
                {projeto.tecnologias && projeto.tecnologias.length > 0 && (
                    <li>
                        <strong>Geral:</strong> {projeto.tecnologias.join(", ")}
                    </li>
                )}
            </ul>
            <h3 id= "imagem"> Imagens do projeto </h3>
                {projeto.img && (
                    <img
                        src={projeto.img}
                        alt={projeto.title}

                    />
                )}
            </div>
            <div className="buttons" style={{ marginTop: "30px" }}>
                <a href={projeto.githubUrl} className="btn btn-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={projeto.online} className="btn btn-online" target="_blank" rel="noopener noreferrer">Ver Online</a>
            </div>

            </section>

            <Footer />
        </div>
    );
}
