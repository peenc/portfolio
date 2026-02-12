import InfoSection from "../InfoSection.jsx";
import React from "react";

export default function Sobre() {
    return (
        <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-24">

            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            {/* HERO SOBRE */}
            <section className="text-center space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    Engenharia de software orientada a
                    <span className="text-blue-600 dark:text-blue-400"> resolver problemas complexos</span>.
                </h1>

                <p className="max-w-3xl mx-auto text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                    Engenheiro de software com visão sistêmica, atuando no desenho,
                    desenvolvimento e evolução de soluções escaláveis.
                    Experiência aplicada em automação, integrações, CRM e dados,
                    sempre com foco em arquitetura, confiabilidade e impacto no negócio.
                </p>
            </section>

            {/* SOBRE EM CARDS */}
            <InfoSection id="sobre" title="Como Eu Trabalho">
                <div className="grid gap-8 md:grid-cols-3">

                    <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition duration-300">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                            Visão Sistêmica
                        </h3>
                        <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm">
                            Analiso o problema como um todo — arquitetura, fluxo de dados,
                            impacto operacional e escalabilidade — antes de propor soluções técnicas.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition duration-300">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                            Engenharia Aplicada
                        </h3>
                        <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm">
                            Experiência prática em integrações REST, automações,
                            estruturação de dados e desenvolvimento de sistemas robustos
                            voltados à eficiência operacional.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition duration-300">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                            Base Técnica
                        </h3>
                        <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm">
                            Formação em Ciência da Computação com foco em arquitetura,
                            boas práticas, segurança da informação e desenvolvimento
                            sustentável de software.
                        </p>
                    </div>

                </div>
            </InfoSection>

            {/* EXPERIÊNCIA PROFISSIONAL */}
            <InfoSection id="behealth" title="Experiência Profissional">
                <div className="space-y-10">

                    {/* Card principal */}
                    <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition duration-300">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                            {/* Lado esquerdo */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Engenheiro de Software
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                                    Prestação de serviços • Automação, CRM e Dados
                                </p>

                                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm mt-4">
                                    Atuação na <strong className="text-gray-900 dark:text-white">BeHealth</strong>,
                                    contribuindo para o desenvolvimento e evolução de sistemas
                                    de automação, integrações e estruturação de dados,
                                    apoiando decisões operacionais e estratégicas.
                                </p>
                            </div>

                            <a
                                href="https://behealth.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4"
                            >
                                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 group-hover:border-blue-500 transition">
                                    <img
                                        src="/images/behealth-logo.png"
                                        alt="BeHealth"
                                        className="w-12 h-10 invert dark:w-12 h-10 object-contain"
                                    />
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* Atividades */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {[
                            "Arquitetura e evolução de sistemas de automação em CRM.",
                            "Integrações entre sistemas via APIs REST, Webhooks e JSON.",
                            "Desenvolvimento de bots e fluxos automatizados.",
                            "Modelagem, governança e padronização de dados.",
                            "Construção de modelos analíticos e métricas (ROI, KPIs).",
                            "Criação de dashboards operacionais.",
                            "Documentação técnica e padronização de regras de negócio.",
                            "Aplicação de boas práticas de arquitetura e segurança."
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-blue-500/40 transition duration-300"
                            >
                                <p className="text-gray-800 dark:text-slate-300 text-sm leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </InfoSection>

        </div>
    );
}
