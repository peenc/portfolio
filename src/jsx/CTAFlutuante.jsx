import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useThemeLang } from "../context/ThemeLangContext.jsx";

export default function CTAFlutuante() {
    const [visible, setVisible] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const { t } = useThemeLang();
    const location = useLocation();

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

    const goToContact = () => {
        const phone = "5521973670464";
        const message = "Olá Pedro! Vim pelo seu portfólio e gostaria de conversar sobre uma oportunidade.";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (location.pathname === "/") return null;
    if (!visible) return null;

    return (
        <div className="fixed bottom-10 right-6 md:right-10 z-[90]">

            {/* MODO MINIMIZADO */}
            {minimized && (
                <button
                    onClick={() => setMinimized(false)}
                    className="group w-14 h-14 rounded-full bg-main text-bgcolor flex items-center justify-center transition-transform hover:scale-110 relative"
                >
                    <MessageCircle size={24} strokeWidth={1.5} />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-bgcolor"></span>
                </button>
            )}

            {/* MODO ABERTO */}
            {!minimized && (
                <div
                    className="
                        w-[280px] sm:w-[320px] p-8
                        bg-bgcolor bg-opacity-90 backdrop-blur-md border border-main border-opacity-20
                        shadow-2xl
                        transition-all duration-300
                        relative flex flex-col gap-6
                    "
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="font-inter text-[10px] tracking-widest text-main uppercase">
                            {t('cta.available')}
                        </span>
                    </div>

                    <p className="font-inter font-light text-lg text-main leading-relaxed">
                        {t('cta.title')}
                    </p>

                    <p className="font-inter text-xs text-brand leading-relaxed">
                        {t('cta.desc')}
                    </p>

                    <button
                        onClick={goToContact}
                        className="w-full py-4 px-2 bg-main text-bgcolor font-inter text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
                    >
                        {t('cta.button')}
                    </button>

                    <p className="font-inter text-[10px] text-brand tracking-widest uppercase text-center opacity-70">
                        {t('cta.footer')}
                    </p>

                    <button
                        onClick={() => setMinimized(true)}
                        className="absolute top-6 right-6 text-main hover:opacity-50 transition-opacity"
                    >
                        <X size={20} strokeWidth={1} />
                    </button>
                </div>
            )}
        </div>
    );
}
