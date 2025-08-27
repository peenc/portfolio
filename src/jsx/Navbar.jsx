import React from "react";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <h1>Pedro Nunes Cardoso</h1>
            <ul>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#formacao">Formação</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
        </nav>

    );
}
