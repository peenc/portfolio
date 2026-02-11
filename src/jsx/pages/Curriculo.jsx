import Navbar from "../Navbar.jsx";
import Header from "../Header.jsx";
import InfoSection from "../InfoSection.jsx";
import ProjectsCarousel from "../ProjectsCarousel.jsx";
import Experience from "../Experience.jsx";
import CurrentLearning from "../CurrentLearning.jsx";
import OtherProjects from "../OtherProjects.jsx";
import Contact from "../Contact.jsx";
import Footer from "../Footer.jsx";
import React from "react";

export default function Curriculo() {
    return (
        <div className="max-w-5xl mx-auto space-y-12">
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
                        <strong>Engenharia de Software & Automação: </strong>
                        Arquitetura de sistemas, automações em CRM, prevenção de falhas e loops,
                        documentação técnica e padronização.
                    </li>
                    <li>
                        <strong>CRM & Automação: </strong>
                        ActiveCampaign, Hilos, AppScript, Typeform, automações baseadas em regras de negócio.
                    </li>
                    <li>
                        <strong>Dados & Analytics: </strong>
                        Modelagem e governança de dados, qualidade e enriquecimento de dados,
                        métricas operacionais e KPIs, Google Sheets, Looker Studio, SQL.
                    </li>
                    <li>
                        <strong>Integrações: </strong>
                        APIs REST, Webhooks, JSON, integrações entre sistemas e plataformas externas.
                    </li>
                    <li>
                        <strong>Back-end: </strong>
                        Java, Spring Boot, Spring Security, desenvolvimento de APIs REST,
                        autenticação e controle de acesso.
                    </li>
                    <li>
                        <strong>Front-end: </strong>
                        React, Thymeleaf, HTML, CSS, Bootstrap, Tailwind CSS.
                    </li>
                    <li>
                        <strong>Banco de Dados: </strong>
                        MySQL, PostgreSQL, H2, MongoDB.
                    </li>
                    <li>
                        <strong>Linguagens & Scripts: </strong>
                        Java, Python, JavaScript, AppScript, SQL.
                    </li>
                    <li>
                        <strong>Ferramentas: </strong>
                        Git, GitHub, Postman, JUnit, IntelliJ, Eclipse, VSCode, Jira, Trello, Notion.
                    </li>
                    <li>
                        <strong>Fundamentos: </strong>
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

            <CurrentLearning/>
        </div>
    );
}
