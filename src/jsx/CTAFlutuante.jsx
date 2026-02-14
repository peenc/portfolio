import { useEffect, useState } from "react";

export default function CTAFlutuante() {
    const [visible, setVisible] = useState(false);
    const [minimized, setMinimized] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const goToContact = () => {
        const section = document.getElementById("contato");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-10 right-10 z-[9999]">

            {/* MODO MINIMIZADO */}
            {minimized && (
                <button
                    onClick={() => setMinimized(false)}
                    className="w-14 h-14 rounded-full
                               bg-cyan-600 hover:bg-cyan-500
                               text-white text-xl
                               shadow-lg
                               flex items-center justify-center
                               transition-all duration-300"
                >
                    💬
                </button>
            )}

            {/* MODO ABERTO */}
            {!minimized && (
                <div
                    className="
                        w-[260px] p-6
                        rounded-2xl
                        border
                        backdrop-blur-md
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                        bg-gray-50 border-slate-200
                        dark:bg-slate-900/60 dark:border-slate-800
                        transition-all duration-300
                    "
                >
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">
                        👋 Vamos transformar sua ideia em um projeto real?
                    </p>

                    <button
                        onClick={goToContact}
                        className="w-full py-2.5
                                   bg-cyan-600 hover:bg-cyan-500
                                   text-white text-sm
                                   rounded-xl
                                   transition"
                    >
                        Entrar em contato
                    </button>

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
