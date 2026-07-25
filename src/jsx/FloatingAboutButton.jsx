import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeLang } from "../context/ThemeLangContext.jsx";

export default function FloatingAboutButton() {
    const { toggleAbout, t } = useThemeLang();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // If not on home page, always show it
        if (location.pathname !== "/") {
            setIsVisible(true);
            return;
        }

        // On home page, check scroll position
        const handleScroll = () => {
            // Show button after scrolling past 90% of the viewport height (Hero section)
            if (window.scrollY > window.innerHeight * 0.9) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <button
            onClick={toggleAbout}
            className={`fixed right-0 top-1/2 -translate-y-1/2 translate-x-[40%] md:translate-x-[45%] -rotate-90 origin-center z-[90] font-inter font-light text-xs md:text-sm tracking-superwide uppercase text-main hover:opacity-50 transition-all duration-500 bg-bgcolor px-6 py-2 border border-main border-opacity-20 backdrop-blur-sm bg-opacity-80 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            style={{
                transformOrigin: "center center"
            }}
        >
            {t('nav.about')} & {t('nav.contact')}
        </button>
    );
}
