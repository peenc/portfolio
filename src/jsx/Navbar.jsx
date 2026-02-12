import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        } else {
            // Força dark como padrão
            setDarkMode(true);
        }
    }, []);


    // Aplica tema
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
                               hover:text-blue-500 transition"
                >
                    Pedro.dev
                </Link>

                {/* Links */}
                <div className="hidden md:flex gap-8 text-sm
                                text-gray-700 dark:text-slate-300
                                items-center">

                    <Link to="/projetos" className="hover:text-blue-500 transition">
                        Projetos
                    </Link>

                    <Link to="/sobre" className="hover:text-blue-500 transition">
                        Sobre
                    </Link>

                    <Link to="/curriculo" className="hover:text-blue-500 transition">
                        Currículo
                    </Link>

                    {/* GitHub */}
                    <a
                        href="https://github.com/peenc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        <FaGithub size={18} />
                    </a>

                    {/* Toggle Dark/Light */}
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
            </div>
        </nav>
    );
}
