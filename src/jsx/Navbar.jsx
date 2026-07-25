import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useThemeLang } from "../context/ThemeLangContext.jsx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, toggleTheme, lang, toggleLang, t } = useThemeLang();

    const spacedText = (text) => {
        if (!text) return "";
        return text.split('').join(' ');
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-transparent py-8 px-6 md:px-12 flex justify-between items-start pointer-events-none">
                
                {/* Logo */}
                <Link
                    to="/"
                    className="font-inter font-light text-sm tracking-superwide text-main hover:opacity-70 hover:scale-105 transition-all duration-500 pointer-events-auto"
                >
                    P E D R O
                </Link>

                <div className="flex items-center gap-8 pointer-events-auto">
                    {/* Desktop Menu (Controls Only) */}
                    <div className="hidden md:flex items-center gap-8 text-xs font-inter font-light tracking-superwide text-main uppercase">
                        
                        <div className="flex items-center gap-6">
                            <button onClick={toggleLang} className="group flex items-center gap-2 hover:-translate-y-[2px] transition-all duration-300">
                                <Globe size={14} className="group-hover:rotate-[45deg] transition-transform duration-500 ease-out" /> 
                                <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
                            </button>
                            <button onClick={toggleTheme} className="group flex items-center gap-2 hover:-translate-y-[2px] transition-all duration-300">
                                {darkMode ? (
                                    <Sun size={14} className="group-hover:rotate-90 group-hover:scale-110 transition-transform duration-500 ease-out" />
                                ) : (
                                    <Moon size={14} className="group-hover:-rotate-[15deg] group-hover:scale-110 transition-transform duration-500 ease-out" />
                                )}
                            </button>
                        </div>

                        <a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:-translate-y-[2px] transition-all duration-300">
                            <FaGithub size={16} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 ease-out" /> 
                            <span>GITHUB</span>
                        </a>
                    </div>

                    {/* Menu Hamburger */}
                    <button
                        className="group text-main hover:scale-110 transition-transform duration-300 ease-out"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu size={28} strokeWidth={1} className="group-hover:stroke-[1.5px] transition-all duration-300" />
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Overlay */}
            <div className={`fixed inset-0 bg-bgcolor z-50 transition-opacity duration-500 flex flex-col justify-center items-center ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <button 
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-8 right-8 text-main hover:opacity-50 transition-opacity"
                >
                    <X size={36} strokeWidth={1} />
                </button>

                <div className="flex flex-col gap-10 font-inter font-light text-sm tracking-superwide text-main uppercase text-center">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">{spacedText(t('nav.home'))}</Link>
                    <Link to="/#projetos" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">{spacedText(t('nav.projects'))}</Link>
                    <Link to="/curriculo" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">{spacedText(t('nav.resume'))}</Link>
                    
                    <div className="flex gap-8 justify-center mt-6">
                        <button onClick={toggleLang} className="hover:opacity-50 transition-opacity flex items-center gap-2">
                            <Globe size={16} /> {lang === 'pt' ? 'EN' : 'PT'}
                        </button>
                        <button onClick={toggleTheme} className="hover:opacity-50 transition-opacity flex items-center gap-2">
                            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
