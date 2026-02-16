import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Moon, Sun, Menu, X, Home } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        } else {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <>
            <nav className="fixed top-0 w-full z-50
                            bg-white/70 dark:bg-slate-950/70
                            backdrop-blur-xl
                            border-b border-slate-200 dark:border-slate-800
                            transition-colors duration-300">

                <div className="max-w-[1400px] mx-auto px-6 py-4
                                flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tight
                                   text-gray-900 dark:text-white
                                   hover:text-cyan-500 transition"
                    >
                        Pedro.dev
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-sm
                                    text-gray-700 dark:text-slate-300
                                    items-center">

                        <Link to="/" className="hover:text-cyan-500 transition">
                            Início
                        </Link>

                        <Link to="/projetos" className="hover:text-cyan-500 transition">
                            Projetos
                        </Link>

                        <Link to="/sobre" className="hover:text-cyan-500 transition">
                            Sobre
                        </Link>

                        <Link to="/curriculo" className="hover:text-cyan-500 transition">
                            Currículo
                        </Link>

                        <a
                            href="https://github.com/peenc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500 transition"
                        >
                            <FaGithub size={18} />
                        </a>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="ml-4 p-2 rounded-lg
                                       bg-slate-200 dark:bg-slate-800
                                       hover:scale-110 transition"
                        >
                            {darkMode ? (
                                <Sun size={18} className="text-yellow-400" />
                            ) : (
                                <Moon size={18} className="text-slate-700" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-900 dark:text-white"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
                ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-72
                bg-white dark:bg-slate-950
                border-r border-slate-200 dark:border-slate-800
                z-50
                transform transition-transform duration-300 ease-in-out
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                        Menu
                    </span>
                    <button onClick={() => setMenuOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-6 p-6 text-gray-800 dark:text-slate-300">

                    <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                        <Home size={18} />
                        Início
                    </Link>

                    <Link to="/projetos" onClick={() => setMenuOpen(false)}>
                        Projetos
                    </Link>

                    <Link to="/sobre" onClick={() => setMenuOpen(false)}>
                        Sobre
                    </Link>

                    <Link to="/curriculo" onClick={() => setMenuOpen(false)}>
                        Currículo
                    </Link>

                    <a
                        href="https://github.com/peenc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex items-center gap-2 mt-4
                                   p-2 rounded-lg
                                   bg-slate-200 dark:bg-slate-800"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        Alternar tema
                    </button>

                </div>
            </div>
        </>
    );
}
