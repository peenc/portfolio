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
                        Sou profissional de tecnologia com atuação em
                        <strong> engenharia de software aplicada à automação de processos, CRM e dados</strong>,
                        desenvolvendo soluções técnicas para otimizar fluxos operacionais
                        e apoiar decisões orientadas por dados.
                    </p>

                    <p>
                        Trabalho com
                        <strong> integrações via APIs REST, automações em CRM, scripts e estruturação de dados</strong>,
                        participando do desenvolvimento de bots de atendimento,
                        sistemas de comunicação automatizada e soluções de apoio à operação.
                    </p>

                    <p>
                        Minha formação em <strong>Ciência da Computação</strong> fornece base sólida em
                        engenharia de software, arquitetura de sistemas e boas práticas,
                        garantindo soluções escaláveis, seguras e bem documentadas.
                    </p>
                </InfoSection>


                <InfoSection id="automacao" title="Engenharia de Software aplicada a Automação, CRM e Dados">
                    <ul>
                        <li>
                            Arquitetura, desenvolvimento e evolução de sistemas de automação em plataformas de CRM,
                            garantindo confiabilidade, escalabilidade e manutenibilidade dos fluxos.
                        </li>
                        <li>
                            Integração entre sistemas internos e externos por meio de APIs REST, Webhooks e troca de dados em JSON.
                        </li>
                        <li>
                            Desenvolvimento de bots de atendimento e fluxos automatizados, com foco em experiência do usuário,
                            eficiência operacional e conformidade com LGPD.
                        </li>
                        <li>
                            Modelagem, padronização e governança de dados, incluindo limpeza e enriquecimento de bases operacionais.
                        </li>
                        <li>
                            Construção de modelos operacionais e analíticos em planilhas (ex: cálculo de ROI e métricas de performance).
                        </li>
                        <li>
                            Desenvolvimento e manutenção de dashboards e indicadores operacionais no Looker Studio,
                            apoiando decisões estratégicas do negócio.
                        </li>
                        <li>
                            Documentação técnica de sistemas, automações e regras de negócio, facilitando manutenção e evolução futura.
                        </li>
                        <li>
                            Aplicação de princípios de engenharia de software, segurança da informação e boas práticas de arquitetura.
                        </li>
                    </ul>
                </InfoSection>


                <InfoSection id="formacao" title="Formação Acadêmica e Base Técnica">
                    <ul>
                        <li>
                            <strong>Bacharelado em Ciência da Computação</strong> – UFRRJ, Campus Nova Iguaçu <br />
                            <em>Previsão de conclusão: 2026</em>
                        </li>
                        <li>
                            <strong>Ensino Médio</strong> – CIEP 175 – José Lins do Rego (2017)
                        </li>
                    </ul>

                    <h3 style={{ marginTop: '20px' }}>Conhecimentos Técnicos</h3>
                    <ul>
                        <li>
                            <strong>Engenharia de Software & Automação:</strong>
                             Arquitetura de sistemas, automações em CRM, prevenção de falhas e loops,
                            documentação técnica e padronização.
                        </li>
                        <li>
                            <strong>CRM & Automação: </strong>
                             ActiveCampaign, Hilos, AppScript, Typeform, automações baseadas em regras de negócio.
                        </li>
                        <li>
                            <strong>Dados & Analytics:</strong>
                             Modelagem e governança de dados, qualidade e enriquecimento de dados,
                            métricas operacionais e KPIs, Google Sheets, Looker Studio, SQL.
                        </li>
                        <li>
                            <strong>Integrações:</strong>
                             APIs REST, Webhooks, JSON, integrações entre sistemas e plataformas externas.
                        </li>
                        <li>
                            <strong>Back-end:</strong>
                             Java, Spring Boot, Spring Security, desenvolvimento de APIs REST,
                            autenticação e controle de acesso.
                        </li>
                        <li>
                            <strong>Front-end:</strong>
                             React, Thymeleaf, HTML, CSS, Bootstrap, Tailwind CSS.
                        </li>
                        <li>
                            <strong>Banco de Dados:</strong>
                             MySQL, PostgreSQL, H2, MongoDB.
                        </li>
                        <li>
                            <strong>Linguagens & Scripts:</strong>
                             Java, Python, JavaScript, AppScript, SQL.
                        </li>
                        <li>
                            <strong>Ferramentas:</strong>
                             Git, GitHub, Postman, JUnit, IntelliJ, Eclipse, VSCode, Jira, Trello, Notion.
                        </li>
                        <li>
                            <strong>Fundamentos:</strong>
                             Engenharia de Software, Arquitetura de Sistemas, MVC, Microsserviços,
                            Lógica de Programação.
                        </li>
                    </ul>


                    <h3 style={{ marginTop: '20px' }}>Cursos Complementares</h3>
                    <ul>
                        <li>Java Orientado a Objetos – Udemy (2023)</li>
                        <li>Assistente Administrativo – SEST SENAT (2018–2019)</li>
                        <li>Spring Boot Expert: JPA, REST, JWT, OAuth2 com Docker e AWS</li>
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
