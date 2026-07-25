import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import Curriculo from "./pages/Curriculo.jsx";
import ProjetoDetalhes from "./pages/ProjetoDetalhes.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import CTAFlutuante from "./CTAFlutuante.jsx";
import AboutOverlay from "./AboutOverlay.jsx";
import { ThemeLangProvider } from "../context/ThemeLangContext.jsx";
import FloatingAboutButton from "./FloatingAboutButton.jsx";

function AppContent() {
    const location = useLocation();
    const action = useNavigationType();
    const isPop = useRef(false);

    useEffect(() => {
        isPop.current = action === "POP";
    }, [action, location.key]);
    
    // Prevent nested routes (like /projetos/:id) from triggering a full page remount
    const getRouteKey = (pathname) => {
        if (pathname.startsWith('/projetos')) return '/projetos';
        return pathname;
    };
    
    return (
        <div className="min-h-screen flex flex-col bg-bgcolor text-main relative font-inter selection:bg-main selection:text-bgcolor w-full">
            <div className="relative z-50">
                <Navbar />
            </div>
            
            <main className="flex-1 w-full relative z-10 flex flex-col">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={getRouteKey(location.pathname)}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projetos" element={<Projetos />}>
                            <Route path=":id" element={<ProjetoDetalhes />} />
                        </Route>
                        <Route path="/curriculo" element={<Curriculo />} />
                    </Routes>
                </AnimatePresence>
            </main>
            
            <FloatingAboutButton />
            <AboutOverlay />
            
            <div className="relative z-50 pointer-events-none">
                <div className="pointer-events-auto">
                    <CTAFlutuante />
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <ThemeLangProvider>
            <Router>
                <AppContent />
            </Router>
        </ThemeLangProvider>
    );
}

export default App;
