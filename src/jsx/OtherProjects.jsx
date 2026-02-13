import React from "react";
import InfoSection from "./InfoSection";

export default function OtherProjects() {
    return (
        <InfoSection title="Outros Projetos">
            <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="
                    group
                    p-8 rounded-2xl
                    border border-gray-200 dark:border-slate-800

                    bg-white dark:bg-slate-900/60
                    shadow-md shadow-gray-200/60
                    dark:shadow-none

                    transition-all duration-300
                    hover:shadow-xl hover:-translate-y-1
                    hover:border-cyan-500
                "
                >
                    <div className="h-1 w-10 rounded-full bg-cyan-500 mb-4" />

                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Compilador
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        Desenvolvido em C++ utilizando Flex e Bison,
                        com análise léxica e sintática completa.
                    </p>
                </div>

                <div className="
                    group
                    p-8 rounded-2xl
                    border border-gray-200 dark:border-slate-800
                    bg-white/70 dark:bg-slate-900/60
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-cyan-500
                    hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                ">
                    <div className="h-1 w-10 rounded-full bg-cyan-500 mb-4" />

                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Gerenciador de Senhas
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        Sistema com criptografia e autenticação local
                        para armazenamento seguro de credenciais.
                    </p>
                </div>

                <div className="
                    group
                    p-8 rounded-2xl
                    border border-gray-200 dark:border-slate-800
                    bg-white/70 dark:bg-slate-900/60
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-cyan-500
                    hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                ">
                    <div className="h-1 w-10 rounded-full bg-cyan-500 mb-4" />

                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        To-Do List Colaborativa
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        Aplicação distribuída em Java utilizando Java RMI
                        para sincronização entre múltiplos usuários.
                    </p>
                </div>

            </div>
        </InfoSection>
    );
}
