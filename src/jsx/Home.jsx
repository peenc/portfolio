import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin} from 'react-icons/fa';

import "../css/Home.css";

const projects = [
    {
        title: "CapiWallet",
        description: "Sistema web de carteira digital",
        githubUrl: "https://github.com/ulennon/capiwallet",
        online: "https://seu-site.com/capiwallet",
        img: "/images/capiwallet.png",
    },
    {
        title: "Shurima",
        description: "Consulta de estatísticas e histórico.",
        githubUrl: "https://github.com/uLennon/shurima",
        online: "https://seu-site.com/shurima",
        img: "/images/shurima.png",
    },
    {
        title: "Onde Tem Banheiro",
        description: "Mapa colaborativo.",
        githubUrl: "https://github.com/peenc/ondetembanheiro",
        online: "https://seu-site.com/ondetembanheiro",
        img: "/images/ondetembanheiro.png",
    },
];

export default function Home() {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const scrollAmount = 300;
        if (!carouselRef.current) return;

        carouselRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const interval = setInterval(() => {
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            if (carousel.scrollLeft >= maxScrollLeft - 5) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <nav className="nav-container">
                <h1>Pedro Nunes Cardoso</h1>
                <ul>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#formacao">Formação</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </nav>

            <header className="home-header">
                <h2>Desenvolvedor Back-End | Java, Spring Boot, APIs RESTful</h2>
                <p>Ciência da Computação – UFRRJ</p>
            </header>

            <section id="sobre" className="info-section">
                <h2>Sobre Mim</h2>
                <p>
                    Sou estudante de Ciência da Computação na UFRRJ, com forte interesse em desenvolvimento back-end, arquitetura de sistemas e boas práticas de engenharia de software.
                    Tenho conhecimento avançado em Java e Spring Boot, além de experiências com projetos acadêmicos relevantes que envolvem APIs, autenticação, QR Code e controle de permissões.
                </p>
                <p>
                    Também possuo familiaridade com ferramentas como Git, Postman e bancos de dados relacionais como MySQL e PostgreSQL. Sou proativo, comunicativo e tenho facilidade para trabalho em equipe.
                </p>
            </section>

            <section id="formacao" className="info-section">
                <h2>Formação Acadêmica</h2>
                <ul>
                    <li><strong>Bacharelado em Ciência da Computação</strong> – UFRRJ, Campus Nova Iguaçu <br />
                        <em>Previsão de conclusão: 2026</em>
                    </li>
                    <li><strong>Ensino Médio</strong> – CIEP 175 – José Lins do Rego (2017)</li>
                </ul>

                <h3 style={{ marginTop: '20px' }}>Conhecimentos Técnicos</h3>
                <ul>
                    <li>
                        <strong>Linguagens:</strong> Java (avançado), Python, C, C++, JavaScript, C#, Dart (básico)
                    </li>
                    <li>
                        <strong>Frameworks e Backend:</strong> Spring Boot, Spring Security, MVC, Thymeleaf, REST APIs
                    </li>
                    <li>
                        <strong>Banco de Dados:</strong> MySQL, PostgreSQL (básico), JPA/Hibernate
                    </li>
                    <li>
                        <strong>Integrações e APIs:</strong> Pix API, QR Code, Postman
                    </li>
                    <li>
                        <strong>Ferramentas e IDEs:</strong> Git, GitHub, Postman, IntelliJ, Eclipse, VSCode, Jira, Trello
                    </li>
                    <li>
                        <strong>Outros:</strong> HTML, CSS, lógica de programação, testes manuais, Godot, Ren’Py
                    </li>
                </ul>


                <h3 style={{ marginTop: '20px' }}>Cursos Complementares</h3>
                <ul>
                    <li>Java Orientado a Objetos – Udemy (2023)</li>
                    <li>Assistente Administrativo – SEST SENAT (2018–2019)</li>
                </ul>
            </section>

            <section className="info-section">
                <h2>Projetos e Atividades em andamento</h2>
                <ul>
                    <li>
                        <strong>Mapa colaborativo “Onde Tem Banheiro”</strong><br />
                        Aplicação web onde usuários contribuem marcando banheiros públicos em um mapa. Desenvolvido com JavaScript e Leaflet, com foco em acessibilidade e colaboração em tempo real.
                    </li>
                    <li>
                        <strong>Visual Novel com Ren'Py</strong><br />
                        Script de lógica e interações usando Python, com rotas personalizadas, escolhas e condições.
                    </li>
                </ul>
            </section>

            <section id="projetos" className="projects-section">
                <h2>Projetos em Destaque</h2>

                <div className="carousel-wrapper">
                    <button className="carousel-btn left" onClick={() => scrollCarousel('left')}>◀</button>

                    <div className="carousel" ref={carouselRef}>
                        {projects.map((proj, index) => (
                            <div key={index} className="carousel-item">
                                <a href={`/projetos/${proj.title.toLowerCase().replace(/\s+/g, '')}`}>
                                    <img src={proj.img} alt={`Projeto: ${proj.title}`} />
                                </a>
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                <div className="buttons">
                                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
                                    {proj.online !== "#" && (
                                        <a href={proj.online} target="_blank" rel="noopener noreferrer" className="btn btn-online">Ver Online</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn right" onClick={() => scrollCarousel('right')}>▶</button>
                </div>
            </section>

            <section className="info-section">
                <h2>Experiência Profissional</h2>
                <ul>
                    <li><strong>Jovem Aprendiz – Assistente Administrativo</strong><br />Transportes Flores</li>
                    <li><strong>Auxiliar Cartorário</strong><br />Cartório RCPNIT 1º Distrito de São João de Meriti</li>
                </ul>
            </section>

            <section className="info-section">
                <h2>🌱 Atualmente Aprendendo</h2>
                <ul>
                    <li>Testes unitários com JUnit</li>
                    <li>Desenvolvimento front-end com React, TailwindCSS e consumo de APIs</li>
                    <li>Integração de QR Code com Spring Boot</li>
                    <li>Estruturação de sistemas escaláveis e seguros</li>
                    <li>Game scripting com Ren’Py e GDScript</li>
                    <li>Arquitetura de software (monolito vs microsserviços)</li>
                </ul>
            </section>

            <section className="info-section">
                <h2>Outros Projetos</h2>
                <ul>
                    <li>Compilador em C++ com Flex/Bison e análise sintática/lexical.</li>
                    <li>Gerenciador de senhas pessoais com criptografia e autenticação local.</li>
                    <li>To-Do List colaborativa em Java usando Java RMI.</li>
                </ul>
            </section>

            <section id="contato" className="contact-section">
                <h2>Contato</h2>
                <p>Email: <a href="mailto:pedro_cardoso@ufrrj.br">pedro_cardoso@ufrrj.br</a></p>
                <p>Rio de Janeiro – RJ</p>
            </section>


            <footer className="home-footer">
                <p>© 2025 Pedro Nunes Cardoso. Todos os direitos reservados.</p>
                <div className="social-icons">
                    <a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-nunes-683824230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </footer>
        </div>
    );
}
