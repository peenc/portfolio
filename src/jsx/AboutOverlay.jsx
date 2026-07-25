import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useThemeLang } from "../context/ThemeLangContext.jsx";

export default function AboutOverlay() {
    const { isAboutOpen, toggleAbout, t, lang } = useThemeLang();

    // Prevent body scroll when overlay is open and avoid layout shift
    useEffect(() => {
        if (isAboutOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isAboutOpen]);

    return (
        <div 
            className={`fixed inset-0 z-[100] transition-transform duration-[1200ms] ease-[cubic-bezier(.86,0,.07,1)] ${
                isAboutOpen ? "translate-x-0" : "translate-x-[100%]"
            }`}
        >
            <div className="w-full h-full flex flex-col md:flex-row bg-white">
                
                {/* LEFT SIDE - DARK */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-full bg-[#111111] text-white relative flex flex-col justify-end p-8 md:p-16">
                    
                    {/* Optional: Add a portrait image here later */}
                    {/* <div className="absolute inset-0 opacity-50 bg-[url('/your-photo.jpg')] bg-cover bg-center"></div> */}
                    
                    <div className="relative z-10 flex flex-col gap-10 text-xs font-inter tracking-widest text-[#a0a0a0]">
                        
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white text-sm uppercase font-bold tracking-superwide mb-2">Pedro Nunes Cardoso</h2>
                            <p className="opacity-80">Software Engineer</p>
                            <p className="opacity-80">Systems Architect</p>
                            <p className="opacity-80">Full Stack Developer</p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <p className="text-white uppercase font-bold tracking-widest mb-1">{t('about.contact_title')}</p>
                            <p>{t('about.location')}</p>
                            <a href="tel:+5521973670464" className="hover:text-white transition-colors">(21) 97367-0464</a>
                            <a href="mailto:pedro_cardoso@ufrrj.br" className="hover:text-white transition-colors">pedro_cardoso@ufrrj.br</a>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-white uppercase font-bold tracking-widest mb-1">Links</p>
                            <a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/pedro-nunes-683824230/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-white uppercase font-bold tracking-widest mb-1">{t('about.academic')}</p>
                            <p>{t('about.degree')}</p>
                            <p className="opacity-70">{t('about.university')}</p>
                            <a 
                                href="/TCC_Capiwallet.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#a0a0a0] hover:text-white transition-colors underline underline-offset-4 decoration-white/20 mt-1"
                            >
                                {t('about.defense')}
                            </a>
                        </div>
                        
                        <a 
                            href={lang === 'pt' ? "/Pedro_Nunes_Cardoso_Resume_PT.pdf" : "/Pedro_Nunes_Cardoso_Resume_EN.pdf"}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-8 self-start px-6 py-3 border border-[#a0a0a0] text-[#a0a0a0] hover:text-white hover:border-white transition-all uppercase tracking-superwide text-[10px]"
                        >
                            {t('resume.download')}
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE - LIGHT */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-full bg-[#f9f9f9] text-[#1a1a1a] p-8 md:p-16 flex flex-col justify-center relative">
                    
                    <button 
                        onClick={toggleAbout}
                        className="absolute top-8 right-8 text-[#1a1a1a] hover:opacity-50 transition-opacity z-50 md:fixed"
                    >
                        <X size={36} strokeWidth={1} />
                    </button>

                    <div className="max-w-[600px] flex flex-col gap-10">
                        
                        <h2 className="font-inter font-light text-3xl md:text-5xl leading-tight tracking-tight">
                            {t('about.intro1')}
                        </h2>
                        
                        <p className="font-inter text-lg md:text-xl leading-relaxed text-[#444] font-light">
                            {t('about.intro2')}
                        </p>

                        <div className="w-16 h-[1px] bg-main opacity-20 my-2"></div>

                        <p className="font-inter text-sm md:text-base leading-relaxed text-[#666] tracking-wide">
                            {t('about.philosophy')}
                        </p>

                    </div>

                    {/* Minimal Footer for Overlay */}
                    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex flex-col items-end gap-2 text-right">
                        <p className="text-[10px] uppercase font-inter tracking-widest text-[#999]">
                            {t('about.footer_dev')}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
