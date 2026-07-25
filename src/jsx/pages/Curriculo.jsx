import React from "react";
import { Link } from 'react-router-dom';
import PageTransition from '../PageTransition.jsx';
import { useThemeLang } from "../../context/ThemeLangContext.jsx";
import Footer from "../Footer.jsx";

export default function Curriculo() {
    const { t, lang } = useThemeLang();

    return (
        <PageTransition>
            
            {/* Floating Left Button - Go to Projects */}
            <Link
                to="/projetos"
                className="fixed left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] md:-translate-x-[45%] -rotate-90 origin-center z-[90] font-inter font-light text-xs md:text-sm tracking-superwide uppercase text-main hover:opacity-50 transition-all duration-500 bg-bgcolor px-6 py-2 border border-main border-opacity-20 backdrop-blur-sm bg-opacity-80"
            >
                {t('nav.projects') || "PROJETOS"}
            </Link>

            <div className="w-full max-w-4xl mx-auto pt-8 pb-24 px-4 md:px-0 relative z-10">
                <div className="max-w-[800px] w-full flex flex-col gap-16">
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <h1 className="font-inter font-light text-2xl md:text-4xl tracking-superwide text-main uppercase">
                            {t('resume.title')}
                        </h1>
                        
                        <a
                            href={lang === 'pt' ? "/Pedro_Nunes_Cardoso_Resume_PT.pdf" : "/Pedro_Nunes_Cardoso_Resume_EN.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-inter text-xs tracking-superwide text-main border border-main px-6 py-3 hover:bg-main hover:text-bgcolor transition-colors uppercase"
                        >
                            {t('resume.download')}
                        </a>
                    </div>
                    
                    {/* PROFESSIONAL SUMMARY */}
                    <div className="flex flex-col gap-6 font-inter text-sm md:text-base leading-relaxed text-main font-light">
                        <p>{t('resume.bio1')}</p>
                    </div>

                    <div className="w-full h-[1px] bg-main opacity-20"></div>

                    {/* SPECIALIZATIONS */}
                    <div className="flex flex-col gap-10">
                        <h2 className="font-inter font-light text-xl tracking-superwide text-main uppercase">
                            {t('about.specializations')}
                        </h2>
                        
                        <div className="flex flex-col gap-6 font-inter text-xs tracking-widest uppercase text-brand">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Engenharia de Software:</span>
                                {["Arquitetura de Sistemas", "TDD", "CI/CD", "Criação de Middlewares", "Integração de Sistemas"].map((spec, i, arr) => (
                                    <React.Fragment key={spec}>
                                        <span className="whitespace-nowrap">{spec}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Dados e Negócios:</span>
                                {["Engenharia de Dados", "Dashboards Gerenciais", "Automação de Processos"].map((spec, i, arr) => (
                                    <React.Fragment key={spec}>
                                        <span className="whitespace-nowrap">{spec}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-main opacity-20"></div>

                    {/* SKILLS */}
                    <div className="flex flex-col gap-10">
                        <h2 className="font-inter font-light text-xl tracking-superwide text-main uppercase">
                            {t('about.skills')}
                        </h2>
                        
                        <div className="flex flex-col gap-6 font-inter text-xs tracking-widest uppercase text-brand">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Backend:</span>
                                {["Java", "Spring Boot", "Spring Security", "JPA/Hibernate", "Node.js", "TypeScript", "Express"].map((skill, i, arr) => (
                                    <React.Fragment key={skill}>
                                        <span className="whitespace-nowrap">{skill}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Frontend:</span>
                                {["React", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion"].map((skill, i, arr) => (
                                    <React.Fragment key={skill}>
                                        <span className="whitespace-nowrap">{skill}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Bancos:</span>
                                {["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Supabase", "pgvector"].map((skill, i, arr) => (
                                    <React.Fragment key={skill}>
                                        <span className="whitespace-nowrap">{skill}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Cloud/DevOps:</span>
                                {["Cloudflare Workers", "Vercel", "Railway", "GitHub CLI", "CI/CD"].map((skill, i, arr) => (
                                    <React.Fragment key={skill}>
                                        <span className="whitespace-nowrap">{skill}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">IA:</span>
                                {["Google GenAI", "RAG", "embeddings", "agentes autônomos"].map((skill, i, arr) => (
                                    <React.Fragment key={skill}>
                                        <span className="whitespace-nowrap">{skill}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 leading-loose">
                                <span className="font-semibold text-main mr-1">Arquitetura:</span>
                                {["MVC", "monólito vs microsserviços", "Clean Architecture", "TDD"].map((skill, i, arr) => (
                                    <React.Fragment key={skill}>
                                        <span className="whitespace-nowrap">{skill}</span>
                                        {i < arr.length - 1 && <span className="opacity-40 text-[10px]">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-main opacity-20"></div>

                    {/* EXPERIENCE */}
                    <div className="flex flex-col gap-10">
                        <h2 className="font-inter font-light text-xl tracking-superwide text-main uppercase">
                            {t('about.experience')}
                        </h2>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                <h3 className="font-inter font-light text-lg text-main uppercase tracking-widest">
                                    {t('exp.behealth.role')}
                                </h3>
                                <span className="font-inter text-xs text-brand uppercase tracking-widest">
                                    BeHealth
                                </span>
                            </div>
                            <p className="font-inter text-xs text-brand tracking-widest uppercase opacity-70">
                                {t('exp.behealth.date')}
                            </p>
                            
                            <div className="font-inter text-sm md:text-base text-brand leading-relaxed flex flex-col gap-4 mt-2">
                                <p>{t('exp.behealth.desc')}</p>
                                <ul className="list-disc list-outside pl-4 space-y-1">
                                    {t('exp.behealth.items') && Array.isArray(t('exp.behealth.items')) ? t('exp.behealth.items').map((item, i) => (
                                        <li key={i}>{item}</li>
                                    )) : null}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                <h3 className="font-inter font-light text-lg text-main uppercase tracking-widest">
                                    {t('exp.indefinidos.role')}
                                </h3>
                                <span className="font-inter text-xs text-brand uppercase tracking-widest">
                                    Indefinidos
                                </span>
                            </div>
                            
                            <div className="font-inter text-sm md:text-base text-brand leading-relaxed flex flex-col gap-4 mt-2">
                                <p>{t('exp.indefinidos.desc')}</p>
                                <ul className="list-disc list-outside pl-4 space-y-1">
                                    {t('exp.indefinidos.items') && Array.isArray(t('exp.indefinidos.items')) ? t('exp.indefinidos.items').map((item, i) => (
                                        <li key={i}>{item}</li>
                                    )) : null}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-main opacity-20"></div>

                    {/* ACADEMIC */}
                    <div className="flex flex-col gap-10">
                        <h2 className="font-inter font-light text-xl tracking-superwide text-main uppercase">
                            {t('about.academic')}
                        </h2>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                <h3 className="font-inter font-light text-lg text-main uppercase tracking-widest">
                                    {t('about.degree')}
                                </h3>
                                <span className="font-inter text-xs text-brand uppercase tracking-widest">
                                    {t('about.university')}
                                </span>
                            </div>
                            <a 
                                href="/TCC_Capiwallet.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-inter text-xs tracking-superwide text-main border border-main px-4 py-2 hover:bg-main hover:text-bgcolor transition-colors self-start mt-4"
                            >
                                {t('about.defense')}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </PageTransition>
    );
}
