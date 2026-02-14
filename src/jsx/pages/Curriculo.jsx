import InfoSection from "../InfoSection.jsx";
import CurrentLearning from "../CurrentLearning.jsx";
import React from "react";
import {useRevealOnScroll} from "../hooks/useRevealOnScroll.js";

export default function Curriculo() {
    const { ref, isVisible } = useRevealOnScroll();
    return (
        <div className="max-w-5xl mx-auto space-y-16">

            <div
                ref={ref}
                className={`
            transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]
            ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
        `}
            >
            {/* RESUMO PROFISSIONAL */}
            <InfoSection id="resumo" title="Resumo Profissional">
                <div className="space-y-6 text-gray-800 dark:text-slate-300 leading-relaxed">

                    <p>
                        Engenheiro de Software com atuação prática em automação de processos,
                        integrações entre sistemas e modelagem de dados para suporte à decisão.
                        Experiência no desenvolvimento de soluções escaláveis, construção de APIs
                        e arquitetura de sistemas orientados a negócio.
                    </p>

                    <p>
                        Forte foco em confiabilidade, padronização, governança de dados e
                        impacto operacional. Visão sistêmica para analisar problemas complexos
                        e transformar requisitos em soluções técnicas sustentáveis.
                    </p>

                    {/* BOTÃO DOWNLOAD */}
                    <div className="pt-4">
                        <a
                            href="/curriculo-pedro-nunes.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-medium shadow-md hover:shadow-lg transition duration-300"
                        >
                            Baixar Currículo em PDF
                        </a>
                    </div>

                </div>
            </InfoSection>

            {/* EXPERIÊNCIA PROFISSIONAL */}
            <InfoSection id="experiencia" title="Experiência Profissional">

                <div className="space-y-8 text-gray-800 dark:text-slate-300 leading-relaxed">



                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Engenheiro de Software – BeHealth
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                            Prestação de serviços • Automação, CRM e Dados
                        </p>

                        <ul className="mt-6 space-y-3 list-disc list-inside">
                            <li>Arquitetura e evolução de sistemas de automação em CRM.</li>
                            <li>Integrações entre sistemas via APIs REST, Webhooks e JSON.</li>
                            <li>Desenvolvimento de bots e fluxos automatizados orientados a regras de negócio.</li>
                            <li>Modelagem e governança de dados, garantindo qualidade e padronização.</li>
                            <li>Construção de métricas estratégicas (KPIs, ROI) para suporte à decisão.</li>
                            <li>Criação de dashboards operacionais e documentação técnica.</li>
                            <li>Aplicação de boas práticas de arquitetura e segurança da informação.</li>
                        </ul>


                </div>

            </InfoSection>

            {/* FORMAÇÃO E BASE TÉCNICA */}
            <InfoSection id="formacao" title="Formação Acadêmica e Base Técnica">

                <div className="space-y-10 text-gray-800 dark:text-slate-300 leading-relaxed">

                    {/* Formação */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Formação
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <strong className="text-gray-900 dark:text-white">
                                    Bacharelado em Ciência da Computação
                                </strong> – UFRRJ, Campus Nova Iguaçu <br />
                                <em className="text-gray-600 dark:text-slate-400">
                                    Previsão de conclusão: 2026
                                </em>
                            </li>

                            <li>
                                <strong className="text-gray-900 dark:text-white">
                                    Ensino Médio
                                </strong> – CIEP 175 – José Lins do Rego (2017)
                            </li>
                        </ul>
                    </div>

                    {/* Stack Técnica */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Stack Técnica
                        </h3>

                        <ul className="space-y-3 list-disc list-inside">
                            <li><strong>Back-end:</strong> Java, Spring Boot, Spring Security, APIs REST</li>
                            <li><strong>Integrações:</strong> APIs REST, Webhooks, JSON</li>
                            <li><strong>Dados:</strong> SQL, Modelagem de Dados, Governança, KPIs, Looker Studio</li>
                            <li><strong>Front-end:</strong> React, Tailwind, Thymeleaf</li>
                            <li><strong>Bancos:</strong> MySQL, PostgreSQL, H2, MongoDB</li>
                            <li><strong>Ferramentas:</strong> Git, Postman, JUnit, IntelliJ, VSCode</li>
                            <li><strong>Fundamentos:</strong> Engenharia de Software, Arquitetura, MVC, Microsserviços</li>
                        </ul>
                    </div>

                    {/* Cursos */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Cursos Complementares
                        </h3>

                        <ul className="space-y-2 list-disc list-inside">
                            <li>Java Orientado a Objetos – Udemy (2023)</li>
                            <li>Spring Boot Expert: JPA, REST, JWT, OAuth2 com Docker e AWS</li>
                            <li>Assistente Administrativo – SEST SENAT (2018–2019)</li>
                        </ul>
                    </div>

                </div>
            </InfoSection>

            <CurrentLearning />

            </div>
        </div>
    );
}
