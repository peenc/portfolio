import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800
                           mt-20 py-10">

            <div className="max-w-6xl mx-auto px-6
                            flex flex-col md:flex-row
                            justify-between items-center
                            gap-6 text-slate-500 text-sm">

                <p>
                    © {new Date().getFullYear()} Pedro Nunes Cardoso
                </p>

                <div className="flex gap-6 text-slate-400">
                    <a
                        href="https://github.com/peenc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/pedro-nunes-683824230/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>

            </div>
        </footer>
    );
}
