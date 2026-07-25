import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useThemeLang } from "../../context/ThemeLangContext.jsx";
import InteractiveGrid from "../InteractiveGrid.jsx";
import InteractiveGraph from "../InteractiveGraph.jsx";
import { motion } from "framer-motion";
import PageTransition from "../PageTransition.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    const { toggleAbout, t } = useThemeLang();
    const [splitPos, setSplitPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isDesktop = windowWidth >= 768;

    const handleMouseMove = (e) => {
        if (!isDragging || !isDesktop) return;
        const newPos = (e.clientX / window.innerWidth) * 100;
        if (newPos > 5 && newPos < 96) {
            setSplitPos(newPos);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <PageTransition>
            <div className="w-full h-screen overflow-hidden relative flex flex-col items-center">
                
                {/* HERO SECTION */}
                <section 
                    className={`w-full h-screen relative flex flex-col md:block ${isDragging ? 'select-none cursor-col-resize' : ''}`}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {/* BASE LAYER: LEFT SIDE (Grid + Text) */}
                    {/* On Desktop, this spans the full screen. On Mobile, it's just the top half. */}
                    <div className="w-full h-[50vh] md:h-screen md:absolute md:inset-0 bg-bgcolor flex flex-col justify-end p-8 md:p-12 relative overflow-hidden border-r border-gray-200 dark:border-white/10">
                        <InteractiveGrid />

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none z-0 overflow-hidden"
                        >
                            <h1 className="font-inter font-bold text-[18vw] md:text-[9vw] leading-[0.85] tracking-tighter text-main whitespace-nowrap uppercase">
                                {t('home.role')}
                            </h1>
                            <h2 className="font-inter font-bold text-[14vw] md:text-[7vw] leading-[0.85] tracking-tighter text-main whitespace-nowrap uppercase">
                                {t('home.subrole')}
                            </h2>
                        </motion.div>

                        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 flex gap-6 text-main opacity-40 z-20">
                            <a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                                <FaGithub size={16} />
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-nunes-683824230/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                                <FaLinkedin size={16} />
                            </a>
                        </div>

                        {/* EASTER EGG (Hidden on the right edge, revealed by dragging) */}
                        <div className="absolute right-8 md:right-[15vw] top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-40 dark:opacity-50 pointer-events-none select-none z-0">
                            <div className="flex flex-col items-end font-inter uppercase tracking-[0.2em] text-[8px] text-brand">
                                <span>Curiosity</span>
                                <span>Rewarded</span>
                                <span className="mt-2 font-mono text-[8px] opacity-50">{"404: SECRETS_NOT_FOUND"}</span>
                            </div>
                            <div className="h-16 w-[1px] bg-brand opacity-50"></div>
                            <h3 className="font-inter font-light text-3xl md:text-[2vw] text-brand [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase leading-none">
                                NOTHING TO SEE HERE
                            </h3>
                        </div>
                    </div>

                    {/* FOREGROUND LAYER: RIGHT SIDE (Navigation) */}
                    <div 
                        className="w-full h-[50vh] md:h-screen md:absolute md:inset-0 bg-bgcolor flex flex-col md:flex-row md:justify-end z-10"
                        style={{
                            clipPath: isDesktop ? `polygon(${splitPos}% 0, 100% 0, 100% 100%, ${splitPos}% 100%)` : 'none'
                        }}
                    >
                        {/* Navigation Container */}
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start pl-8 md:pl-24 relative bg-bgcolor">
                            <nav className="flex flex-col gap-6 md:gap-10 group/nav">
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                                    <Link 
                                        to="/projetos" 
                                        className="font-inter font-light text-3xl md:text-5xl lg:text-[4vw] leading-none tracking-widest uppercase text-main transition-all duration-500 ease-out group-hover/nav:opacity-20 hover:!opacity-100 hover:translate-x-6 hover:tracking-[0.4em] flex items-center"
                                    >
                                        {t('nav.projects') || "PROJETOS"}
                                    </Link>
                                </motion.div>
                                
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                                    <button 
                                        onClick={toggleAbout}
                                        className="font-inter font-light text-3xl md:text-5xl lg:text-[4vw] leading-none tracking-widest uppercase text-main text-left transition-all duration-500 ease-out group-hover/nav:opacity-20 hover:!opacity-100 hover:translate-x-6 hover:tracking-[0.4em] flex items-center"
                                    >
                                        {t('nav.about') || "SOBRE MIM"}
                                    </button>
                                </motion.div>
                                
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                                    <Link 
                                        to="/curriculo" 
                                        className="font-inter font-light text-3xl md:text-5xl lg:text-[4vw] leading-none tracking-widest uppercase text-main transition-all duration-500 ease-out group-hover/nav:opacity-20 hover:!opacity-100 hover:translate-x-6 hover:tracking-[0.4em] flex items-center"
                                    >
                                        {t('nav.resume') || "CURRÍCULO"}
                                    </Link>
                                </motion.div>
                                
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
                                    <a 
                                        href="mailto:pedro_cardoso@ufrrj.br" 
                                        className="font-inter font-light text-3xl md:text-5xl lg:text-[4vw] leading-none tracking-widest uppercase text-main whitespace-nowrap transition-all duration-500 ease-out group-hover/nav:opacity-20 hover:!opacity-100 hover:translate-x-6 hover:tracking-[0.4em] flex items-center"
                                    >
                                        {t('home.contact') || "CONTATO"}
                                    </a>
                                </motion.div>
                            </nav>

                            <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 opacity-40 z-20">
                                <span className="font-inter font-light text-[10px] tracking-superwide text-main uppercase">
                                    © {new Date().getFullYear()} Pedro Nunes Cardoso
                                </span>
                            </div>
                        </div>
                        
                        {/* LEFT SECRET (Hidden on the left edge, revealed by dragging to the left) */}
                        <div className="absolute left-0 top-0 bottom-0 w-[50vw] pointer-events-none z-0 hidden md:flex">
                            {/* Background interactive graph */}
                            <InteractiveGraph />
                            
                            {/* Text overlay */}
                            <div className="absolute left-8 md:left-[10vw] top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-80">
                                <h3 className="font-inter font-light text-3xl md:text-[2vw] text-brand [writing-mode:vertical-rl] tracking-widest uppercase leading-none">
                                    DIGITAL CRAFTSMAN
                                </h3>
                                <div className="h-16 w-[1px] bg-brand opacity-50"></div>
                                <div className="flex flex-col items-start font-inter uppercase tracking-[0.2em] text-[8px] text-brand">
                                    <span>Based in</span>
                                    <span>Rio de Janeiro</span>
                                    <span className="mt-2 font-mono text-[8px] opacity-50">BR // {new Date().getFullYear()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DRAGGABLE HANDLE (Desktop Only) */}
                    {isDesktop && (
                        <div 
                            className="absolute top-0 bottom-0 w-8 -ml-4 z-20 cursor-col-resize flex items-center justify-center group"
                            style={{ left: `${splitPos}%` }}
                            onMouseDown={() => setIsDragging(true)}
                        >
                            {/* Visible Line */}
                            <div className={`w-[1px] h-full bg-main transition-all ${isDragging ? 'opacity-50 w-[2px]' : 'opacity-20 group-hover:opacity-50'}`} />
                            
                            {/* Grabber button (Always visible to show it's draggable) */}
                            <div className={`absolute w-8 h-12 border border-main/20 rounded-full bg-bgcolor flex items-center justify-center shadow-lg transition-transform ${isDragging ? 'scale-110 border-main/50' : 'group-hover:scale-110 group-hover:border-main/50'} animate-bounce-x`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-main/70">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-main/70 -ml-1">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                            
                            {/* Subtle hint text that fades out when hovered/dragged */}
                            <span className={`absolute top-1/2 -translate-y-24 font-inter font-light text-[8px] tracking-[0.3em] uppercase text-main/40 whitespace-nowrap -rotate-90 transition-opacity duration-500 ${isDragging || splitPos !== 50 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                                Drag to explore
                            </span>
                        </div>
                    )}
                </section>
            </div>
        </PageTransition>
    );
}
