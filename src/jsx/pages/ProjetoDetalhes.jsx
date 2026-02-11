import { useParams, useNavigate } from "react-router-dom";
import { projects } from "/src/data/projects";
import React from "react";
import Footer from "../Footer.jsx";

export default function ProjetoDetalhes() {
    const { id } = useParams();
    const navigate = useNavigate();

    const projeto = projects.find(
        (proj) => proj.id.toLowerCase().replace(/\s+/g, "") === id
    );

    if (!projeto) {
        return (
            <div className="min-h-screen bg-slate-100 flex flex-col">
                <div className="max-w-4xl mx-auto w-full p-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Voltar
                    </button>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Projeto não encontrado
                        </h2>
                        <p className="text-gray-600">
                            Não conseguimos localizar esse projeto. Verifique o link.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <div className="max-w-4xl mx-auto w-full p-6 flex-1">

                {/* Navbar interna */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Voltar
                    </button>

                    <h1 className="text-2xl font-bold text-slate-800">
                        {projeto.title}
                    </h1>
                </div>

                {/* Card principal */}
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">

                    <p className="text-gray-700 leading-relaxed text-lg">
                        {projeto.description}
                    </p>

                    {/* Status */}
                    {projeto.status && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                Status do Projeto
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {projeto.status.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Futuro */}
                    {projeto.futuro && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                Funcionalidades Planejadas
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {projeto.futuro.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tecnologias */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">
                            Tecnologias Utilizadas
                        </h3>

                        <ul className="space-y-1 text-gray-700">
                            <li><strong>Frontend:</strong> {projeto.frontend}</li>
                            {projeto.mapa && (
                                <li><strong>Mapa:</strong> {projeto.mapa}</li>
                            )}
                            <li><strong>Backend:</strong> {projeto.backend}</li>
                            <li><strong>Banco de Dados:</strong> {projeto.banco}</li>

                            {projeto.tecnologias && projeto.tecnologias.length > 0 && (
                                <li>
                                    <strong>Geral:</strong>{" "}
                                    {projeto.tecnologias.join(", ")}
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Imagem */}
                    {projeto.img && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Imagens do Projeto
                            </h3>
                            <img
                                src={projeto.img}
                                alt={projeto.title}
                                className="rounded-xl shadow-md w-full object-cover"
                            />
                        </div>
                    )}

                    {/* Botões */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {projeto.githubUrl && (
                            <a
                                href={projeto.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
                            >
                                GitHub
                            </a>
                        )}

                        {projeto.online && (
                            <a
                                href={projeto.online}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                            >
                                Ver Online
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
