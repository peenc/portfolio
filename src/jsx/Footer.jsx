import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="home-footer">
            <p>© 2025 Pedro Nunes Cardoso. Todos os direitos reservados.</p>
            <div className="social-icons">
                <a href="https://github.com/peenc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/pedro-nunes-683824230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </footer>
    );
}
