import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Projetos from "./pages/Projetos.jsx";
import Curriculo from "./pages/Curriculo.jsx";
import ProjetoDetalhes from "./pages/ProjetoDetalhes.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col
                            bg-slate-50 dark:bg-slate-950
                            text-gray-900 dark:text-gray-200
                            transition-colors duration-300">

                <Navbar />

                <main className="flex-1 pt-24 px-6 md:px-10 lg:px-16">

                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/projetos" element={<Projetos />} />
                        <Route path="/curriculo" element={<Curriculo />} />
                        <Route path="/projetos/:id" element={<ProjetoDetalhes />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
