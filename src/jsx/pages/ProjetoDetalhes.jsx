import { useParams, useNavigate } from "react-router-dom";
import { projects } from "/src/data/projects";
import React from "react";
import Footer from "../Footer.jsx";

export default function ProjetoDetalhes() {
    const {id} = useParams();
    const navigate = useNavigate();

    const projeto = projects.find(
        (proj) => proj.id.toLowerCase().replace(/\s+/g, "") === id
    );

    if (!projeto) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors">
                <div className="max-w-5xl mx-auto w-full px-6 py-24 flex-1">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-8 text-blue-600 dark:text-blue-400 hover:opacity-70 transition"
                    >
                        ← Voltar
                    </button>

                    <div
                        className="rounded-2xl p-10 bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-gray-200 dark:border-slate-800 shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            Projeto não encontrado
                        </h2>
                        <p className="text-gray-600 dark:text-slate-400">
                            Não conseguimos localizar esse projeto. Verifique o link.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors">

            <div className="max-w-6xl mx-auto w-full px-6 md:px-10 lg:px-20 py-20 flex-1">

                {/* Botão Voltar */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-10 text-sm font-medium
                           text-gray-600 dark:text-slate-400
                           hover:text-blue-600 dark:hover:text-blue-400
                           transition"
                >
                    ← Voltar para projetos
                </button>

                {/* Título centralizado */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {projeto.title}
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {projeto.description}
                    </p>
                </div>

                {/* Card principal */}
                <div className="rounded-3xl p-12 space-y-14
                            bg-white/70 dark:bg-slate-900/60
                            backdrop-blur
                            border border-gray-200 dark:border-slate-800
                            shadow-xl">

                    {/* Status */}
                    {projeto.status && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Status
                            </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-slate-300">
                                {projeto.status.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Próximos Passos */}
                    {projeto.futuro && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Próximos Passos
                            </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-slate-300">
                                {projeto.futuro.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tecnologias */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Stack Técnica
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-slate-300">
                            <div><strong>Frontend:</strong> {projeto.frontend}</div>
                            {projeto.mapa && (
                                <div><strong>Mapa:</strong> {projeto.mapa}</div>
                            )}
                            <div><strong>Backend:</strong> {projeto.backend}</div>
                            <div><strong>Banco:</strong> {projeto.banco}</div>

                            {projeto.tecnologias && (
                                <div className="md:col-span-2">
                                    <strong>Geral:</strong> {projeto.tecnologias.join(", ")}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Imagem */}
                    {projeto.img && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Visual do Projeto
                            </h3>
                            <img
                                src={projeto.img}
                                alt={projeto.title}
                                className="rounded-2xl shadow-lg w-full object-cover border border-gray-200 dark:border-slate-800"
                            />
                        </div>
                    )}

                    {/* Botões */}
                    <div className="flex flex-wrap gap-6 pt-6 justify-center">
                        {projeto.githubUrl && (
                            <a
                                href={projeto.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-xl
                                       bg-slate-900 dark:bg-slate-800
                                       text-white
                                       hover:scale-105 transition-all duration-300"
                            >
                                GitHub
                            </a>
                        )}

                        {projeto.online && (
                            <a
                                href={projeto.online}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-xl
                                       bg-blue-600 hover:bg-blue-500
                                       text-white
                                       shadow-md shadow-blue-600/30
                                       transition-all duration-300"
                            >
                                Ver Online
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}