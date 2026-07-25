import React, { createContext, useState, useEffect, useContext } from 'react';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const ThemeLangContext = createContext();

export function ThemeLangProvider({ children }) {
    // Theme logic
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    // Language logic
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('lang') || 'pt';
    });

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

    const t = (key) => {
        const keys = key.split('.');
        let value = lang === 'pt' ? pt : en;
        for (const k of keys) {
            if (value[k] === undefined) return key;
            value = value[k];
        }
        return value;
    };

    // About Overlay logic
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

    return (
        <ThemeLangContext.Provider value={{ darkMode, toggleTheme, lang, toggleLang, t, isAboutOpen, toggleAbout }}>
            {children}
        </ThemeLangContext.Provider>
    );
}

export function useThemeLang() {
    return useContext(ThemeLangContext);
}
