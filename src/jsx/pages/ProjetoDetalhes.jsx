import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects.js";
import React, { useEffect } from "react";
import { useThemeLang } from "../../context/ThemeLangContext.jsx";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjetoDetalhes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, lang } = useThemeLang();

    const projeto = projects.find(
        (proj) => proj.id.toLowerCase().replace(/\s+/g, "") === id
    );

    // Prevent body scroll when overlay is open and avoid layout shift
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, []);

    if (!projeto) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed inset-0 z-[100] bg-bgcolor flex flex-col items-center justify-center"
            >
                <p className="font-inter font-light text-xl text-main tracking-widest uppercase">
                    Projeto não encontrado
                </p>
                <button
                    onClick={() => navigate('/projetos')}
                    className="mt-8 font-inter text-xs tracking-superwide text-brand uppercase hover:text-main transition-colors"
                >
                    {t('project_details.back')}
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 35 }}
            className="fixed inset-0 z-[100] bg-bgcolor overflow-y-auto"
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 25 }}
                className="w-full relative flex flex-col items-center py-32 px-4 md:px-0 min-h-screen"
            >
                <div className="max-w-[800px] w-full flex flex-col gap-16">
                    
                    <button
                        onClick={() => navigate('/projetos')}
                        className="self-start font-inter text-xs tracking-superwide text-brand uppercase hover:text-main transition-colors"
                    >
                        ← {t('project_details.back')}
                    </button>

                <div className="flex flex-col gap-6">
                    <h1 className="font-inter font-light text-3xl md:text-5xl tracking-superwide text-main uppercase">
                        {projeto.title}
                    </h1>
                    <p className="font-inter text-sm md:text-base text-brand leading-relaxed max-w-2xl">
                        {projeto[lang]?.description || projeto.description}
                    </p>
                </div>


                <div className="w-full h-[1px] bg-main opacity-20"></div>

                <div className="flex flex-col gap-12 font-inter">
                    
                    {/* Status */}
                    {projeto[lang]?.status && (
                        <div className="flex flex-col gap-4">
                            <h3 className="font-light text-xl tracking-superwide text-main uppercase">
                                Status
                            </h3>
                            <ul className="flex flex-col gap-2 text-xs tracking-widest text-brand uppercase">
                                {projeto[lang].status.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Próximos Passos */}
                    {projeto[lang]?.futuro && (
                        <div className="flex flex-col gap-4">
                            <h3 className="font-light text-xl tracking-superwide text-main uppercase">
                                {lang === 'pt' ? 'Próximos Passos' : 'Next Steps'}
                            </h3>
                            <ul className="flex flex-col gap-2 text-xs tracking-widest text-brand uppercase">
                                {projeto[lang].futuro.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <div className="flex flex-col gap-4">
                        <h3 className="font-light text-xl tracking-superwide text-main uppercase">
                            {t('project_details.technologies')}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-xs tracking-widest text-brand uppercase">
                            {projeto.tecnologias ? (
                                projeto.tecnologias.map((tech, idx) => (
                                    <React.Fragment key={idx}>
                                        <span>{tech}</span>
                                        {idx < projeto.tecnologias.length - 1 && <span>•</span>}
                                    </React.Fragment>
                                ))
                            ) : (
                                <>
                                    <span>{projeto.frontend}</span>
                                    <span>•</span>
                                    <span>{projeto.backend}</span>
                                    <span>•</span>
                                    <span>{projeto.banco}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {projeto.githubUrl && (
                            <a
                                href={projeto.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs tracking-superwide text-main hover:opacity-50 transition-opacity uppercase border-b border-main pb-1"
                            >
                                {t('project_details.view_code')}
                            </a>
                        )}

                        {projeto.online && (
                            <a
                                href={projeto.online}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs tracking-superwide text-main hover:opacity-50 transition-opacity uppercase border-b border-main pb-1"
                            >
                                {t('project_details.view_live')}
                            </a>
                        )}
                    </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}