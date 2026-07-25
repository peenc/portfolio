import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center py-12 px-4 md:px-0">
            <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-main border-opacity-20 pt-8">
                <p className="font-inter font-light text-xs tracking-superwide text-brand uppercase">
                    © {new Date().getFullYear()} Pedro Nunes Cardoso
                </p>

                <div className="flex gap-8 text-main">
                    <a
                        href="https://github.com/peenc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-50 transition-opacity"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pedro-nunes-683824230/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-50 transition-opacity"
                    >
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
