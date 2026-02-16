import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CTAFlutuante() {
    const [visible, setVisible] = useState(false);
    const [minimized, setMinimized] = useState(false);

    // 🔹 Recupera estado salvo
    useEffect(() => {
        const savedState = localStorage.getItem("ctaMinimized");

        if (savedState === "true") {
            setMinimized(true);
        }
    }, []);

    // 🔹 Salva sempre que mudar
    useEffect(() => {
        localStorage.setItem("ctaMinimized", minimized);
    }, [minimized]);

    // 🔹 Controle de visibilidade por scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent =
                (window.scrollY /
                    (document.documentElement.scrollHeight - window.innerHeight)) *
                100;

            if (scrollPercent > 35) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/#contato");
    };


    if (!visible) return null;

    return (
        <div className="fixed bottom-10 right-6 md:right-10 z-[9999]">

            {/* MODO MINIMIZADO */}
            {minimized && (
                <button
                    onClick={() => setMinimized(false)}
                    className="group w-14 h-14 rounded-full
                               bg-cyan-600 hover:bg-cyan-500
                               text-white text-xl
                               shadow-xl
                               flex items-center justify-center
                               transition-all duration-300
                               relative hover:scale-110"
                >
                    💬
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                </button>
            )}

            {/* MODO ABERTO */}
            {!minimized && (
                <div
                    className="
                        w-[280px] sm:w-[300px] p-6
                        rounded-2xl
                        border
                        backdrop-blur-xl
                        shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                        bg-white/80 border-slate-200
                        dark:bg-slate-900/80 dark:border-slate-800
                        transition-all duration-300
                        relative
                    "
                >
                    <span className="text-xs text-emerald-500 font-medium">
                        ● Disponível para novos projetos
                    </span>

                    <p className="text-slate-800 dark:text-slate-200 text-sm mt-3 mb-3 leading-relaxed">
                        Precisa de um backend sólido, escalável e bem estruturado?
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                        Posso te ajudar a transformar sua ideia em uma solução real,
                        com arquitetura limpa e foco em performance.
                    </p>

                    <button
                        onClick={goToContact}
                        className="w-full py-2.5
                                   bg-cyan-600 hover:bg-cyan-500
                                   text-white text-sm font-medium
                                   rounded-xl
                                   transition-all duration-200
                                   hover:scale-[1.02]"
                    >
                        Falar sobre meu projeto
                    </button>

                    <p className="text-[11px] text-slate-400 mt-3 text-center">
                        Resposta rápida • Sem compromisso
                    </p>

                    <button
                        onClick={() => setMinimized(true)}
                        className="absolute top-3 right-4
                                   text-xs
                                   text-slate-400 hover:text-slate-600
                                   dark:text-slate-500 dark:hover:text-slate-300"
                    >
                        —
                    </button>
                </div>
            )}
        </div>
    );
}
