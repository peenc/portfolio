import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import ProjetoDetalhes from "./ProjetoDetalhes.jsx";
import '../css/App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos/:id" element={<ProjetoDetalhes />} />
            </Routes>
        </Router>
    );
}

export default App;
