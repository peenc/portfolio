import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // Apenas salva a posição do scroll atual na sessão associada à key da rota atual.
        // O trabalho de rolar para o topo ou restaurar a posição agora é feito pelo PageTransition.jsx
        const handleScroll = () => {
            sessionStorage.setItem(`scroll-${location.key}`, window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.key]);

    return null;
}
