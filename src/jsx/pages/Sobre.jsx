import InfoSection from "../InfoSection.jsx";
import React from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function Sobre() {
    const { ref, isVisible } = useRevealOnScroll();

    return (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 space-y-16 md:space-y-24">

            <div
                ref={ref}
                className={`
                    transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]
                    ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"}
                `}
            >

                {/* Background Blur Effects — menores no mobile */}
                <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 md:w-72 md:h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

                {/* HERO SOBRE */}
                <section className="text-center space-y-4 md:space-y-6">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug md:leading-tight">
                        Transformo desafios técnicos em
                        <span className="text-cyan-600 dark:text-cyan-400">
                            {" "}soluções simples e escaláveis
                        </span>.
                    </h1>

                    <p className="max-w-2xl md:max-w-3xl mx-auto text-gray-700 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        Engenheiro de software com visão sistêmica, atuando no desenho,
                        desenvolvimento e evolução de soluções escaláveis.
                        Experiência aplicada em automação, integrações, CRM e dados,
                        sempre com foco em arquitetura, confiabilidade e impacto no negócio.
                    </p>
                </section>


                {/* SOBRE EM CARDS */}
                <InfoSection id="sobre" title="Como Eu Trabalho">
                    <div className="grid gap-6 md:gap-8 md:grid-cols-3">

                        {[
                            {
                                title: "Visão Sistêmica",
                                text: "Analiso o problema como um todo — arquitetura, fluxo de dados, impacto operacional e escalabilidade — antes de propor soluções técnicas."
                            },
                            {
                                title: "Engenharia Aplicada",
                                text: "Experiência prática em integrações REST, automações, estruturação de dados e desenvolvimento de sistemas robustos voltados à eficiência operacional."
                            },
                            {
                                title: "Base Técnica",
                                text: "Formação em Ciência da Computação com foco em arquitetura, boas práticas, segurança da informação e desenvolvimento sustentável de software."
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="
                                    p-5 md:p-6
                                    rounded-2xl
                                    bg-white/70 dark:bg-slate-900/60
                                    backdrop-blur
                                    border border-gray-200 dark:border-slate-700
                                    shadow-sm
                                    hover:shadow-md
                                    transition duration-300
                                "
                            >
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 text-base md:text-lg">
                                    {card.title}
                                </h3>
                                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm">
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </InfoSection>


                {/* EXPERIÊNCIA PROFISSIONAL */}
                <InfoSection id="behealth" title="Experiência Profissional">
                    <div className="space-y-8 md:space-y-10">

                        {/* Card principal */}
                        <div className="
                            p-5 md:p-6
                            rounded-2xl
                            bg-white/70 dark:bg-slate-900/60
                            backdrop-blur
                            border border-gray-200 dark:border-slate-700
                            shadow-sm
                            hover:shadow-md
                            transition duration-300
                        ">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                        Engenheiro de Software
                                    </h3>

                                    <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1">
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
                                    className="group flex items-center gap-4 self-start md:self-auto"
                                >
                                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 group-hover:border-blue-500 transition">
                                        <img
                                            src="/images/behealth-logo.png"
                                            alt="BeHealth"
                                            className="w-12 h-10 object-contain"
                                        />
                                    </div>
                                </a>

                            </div>
                        </div>


                        {/* Atividades */}
                        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
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
                                    className="
                                        p-4 md:p-5
                                        rounded-xl
                                        bg-white/60 dark:bg-slate-900/60
                                        border border-gray-200 dark:border-slate-700
                                        hover:shadow-sm
                                        hover:border-blue-500/40
                                        transition duration-300
                                    "
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
        </div>
    );
}
