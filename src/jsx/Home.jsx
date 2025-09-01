import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ProjectsCarousel from "./ProjectsCarousel";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import CurrentLearning from "./CurrentLearning";
import OtherProjects from "./OtherProjects";
import Contact from "./Contact";
import Experience from "./Experience";

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
    return (
        <div className="home-container">
            <Navbar />

            <div className="main-content">
                <Header />

                <InfoSection id="sobre" title="Sobre Mim">
                    <p>
                        Sou estudante de Ciência da Computação na UFRRJ, com forte interesse em desenvolvimento back-end, arquitetura de sistemas e boas práticas de engenharia de software.
                        Tenho conhecimento avançado em Java e Spring Boot, além de experiências com projetos acadêmicos relevantes que envolvem APIs, autenticação, QR Code e controle de permissões.
                    </p>
                    <p>
                        Também possuo familiaridade com ferramentas como Git, Postman e bancos de dados relacionais como MySQL e PostgreSQL. Sou proativo, comunicativo e tenho facilidade para trabalho em equipe.
                    </p>
                </InfoSection>

                <InfoSection id="formacao" title="Formação Acadêmica">
                    <ul>
                        <li><strong>Bacharelado em Ciência da Computação</strong> – UFRRJ, Campus Nova Iguaçu <br />
                            <em>Previsão de conclusão: 2026</em>
                        </li>
                        <li><strong>Ensino Médio</strong> – CIEP 175 – José Lins do Rego (2017)</li>
                    </ul>

                    <h3 style={{ marginTop: '20px' }}>Conhecimentos Técnicos</h3>
                    <ul>
                        <li>
                            <strong>Linguagens:</strong> Java (avançado), Python, C, C++, JavaScript, C#.
                        </li>
                        <li>
                            <strong>Back-end:</strong> Spring, Spring Security, Spring JPA, Spring Web, REST APIs
                        </li>
                        <li>
                            <strong>Front-end:</strong> React, Thymeleaf, HTML, CSS, Bootstrap, Tailwind CSS.
                        </li>
                        <li>
                            <strong>Banco de Dados:</strong> MySQL, PostgreSQL, H2, MongoDB.
                        </li>
                        <li>
                            <strong>Integrações e APIs:</strong> Pix API, QR Code, MapLibre, API banco do Brasil, API Riot Games.
                        </li>
                        <li>
                            <strong>Ferramentas e IDEs:</strong> Junit, Git, GitHub, Postman, IntelliJ, Eclipse, VSCode, Jira, Trello.
                        </li>
                        <li>
                            <strong>Outros:</strong> Lógica de programação, MVC, Microsserviços, Godot, Ren’Py.
                        </li>
                    </ul>


                    <h3 style={{ marginTop: '20px' }}>Cursos Complementares</h3>
                    <ul>
                        <li>Java Orientado a Objetos – Udemy (2023)</li>
                        <li>Assistente Administrativo – SEST SENAT (2018–2019)</li>
                    </ul>
                </InfoSection>

                <ProjectsCarousel projects={projects} />
                <Experience />
                <CurrentLearning />
                <OtherProjects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
