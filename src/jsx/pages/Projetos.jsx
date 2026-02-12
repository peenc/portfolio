import Navbar from "../Navbar.jsx";
import Header from "../Header.jsx";
import InfoSection from "../InfoSection.jsx";
import ProjectsCarousel from "../ProjectsCarousel.jsx";
import Experience from "../Experience.jsx";
import CurrentLearning from "../CurrentLearning.jsx";
import OtherProjects from "../OtherProjects.jsx";
import Contact from "../Contact.jsx";
import Footer from "../Footer.jsx";
import React from "react";
import {projects} from "../../data/projects.js";

export default function Projetos() {
    return (
        <div className="max-w-6xl mx-auto">
            <ProjectsCarousel projects={projects} />
            <InfoSection id="tcc" title="Projeto Acadêmico">

                <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition duration-300">

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Trabalho de Conclusão de Curso - Capiwallet
                    </h3>

                    <p className="text-gray-700 dark:text-slate-300 mt-4 text-sm leading-relaxed">
                        Desenvolvimento de um sistema de carteira digital completo aplicando conceitos de arquitetura
                        monolítica comparada a de microsserviços, engenharia de software, modelagem de dados e boas práticas de desenvolvimento.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <a
                            href="/TCC_Capiwallet.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
                        >
                            Ver Documento
                        </a>
                    </div>

                </div>

            </InfoSection>

            <OtherProjects/>

        </div>
    );
}