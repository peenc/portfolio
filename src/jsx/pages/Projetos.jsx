import React from "react";
import { Link, Outlet } from "react-router-dom";
import { projects } from "../../data/projects.js";
import { useThemeLang } from "../../context/ThemeLangContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import PageTransition from "../PageTransition.jsx";
import Footer from "../Footer.jsx";

function ProjectCard({ proj, idx, t }) {
    const { ref, isVisible } = useRevealOnScroll(0.2);
    const isRight = idx % 2 !== 0;

    return (
        <div 
            ref={ref} 
            className={`w-full flex ${isRight ? 'justify-end' : 'justify-start'} transition-all duration-[1.5s] ease-[cubic-bezier(.16,1,.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
        >
            <Link 
                to={`/projetos/${proj.id}`} 
                className="group relative block w-full md:w-[60%] lg:w-[50%] cursor-pointer"
            >
                
                {/* Typographic Card instead of Image */}
                <div className="w-full aspect-[4/3] md:aspect-video overflow-hidden bg-[#f9f9f9] dark:bg-[#111111] flex items-center justify-center p-8 transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02] border border-gray-200 dark:border-white/10">
                    <h3 className="font-inter font-light text-2xl md:text-4xl tracking-superwide uppercase text-main text-center leading-relaxed">
                        {proj.title}
                    </h3>
                </div>
                
                {/* Numbers floating */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${isRight ? '-left-12' : '-right-12'} hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                    <span className="font-inter text-sm tracking-widest text-brand">
                        {String(idx + 1).padStart(2, '0')}
                    </span>
                </div>
                
                {/* Subtitle below image */}
                <div className={`mt-6 flex flex-col ${isRight ? 'items-end text-right' : 'items-start text-left'}`}>
                    <h2 className="font-inter font-light text-xl tracking-widest uppercase text-main">
                        {proj.title}
                    </h2>
                    <span className="font-inter text-xs tracking-widest text-brand uppercase mt-2 opacity-60">
                        {t('home.view_project')}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default function Projetos() {
    const { t } = useThemeLang();

    return (
        <PageTransition>
            <div className="w-full min-h-screen relative flex flex-col items-center pt-32 pb-40 px-4 md:px-0">
                
                <h1 className="font-inter font-light text-2xl md:text-4xl tracking-superwide text-main uppercase mb-24 text-center">
                    {t('nav.projects') || "PROJETOS"}
                </h1>

                {/* GALLERY SECTION (STAGGERED) */}
                <section className="w-full flex flex-col gap-32 px-8 md:px-24">
                    {projects.map((proj, idx) => (
                        <ProjectCard key={proj.id} proj={proj} idx={idx} t={t} />
                    ))}
                </section>
            </div>
            
            <Footer />
            <Outlet />
        </PageTransition>
    );
}