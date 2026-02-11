import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="
            relative overflow-hidden
            bg-white dark:bg-slate-950
        ">

            {/* Background grid pattern */}
            <div className="
                absolute inset-0 -z-10
                bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
                bg-[size:40px_40px]
                dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
            " />

            <div className="
    max-w-[1300px] mx-auto
    px-8 md:px-12 lg:px-20
    py-16 md:py-24
    grid md:grid-cols-2
    gap-16
    items-center
">


            {/* TEXTO */}
                <div>

                    <div className="
                        inline-block mb-5
                        px-4 py-1.5
                        text-sm font-medium
                        rounded-full
                        bg-blue-100 text-blue-700
                        dark:bg-blue-500/10 dark:text-blue-400
                        border border-blue-200 dark:border-blue-500/30
                    ">
                        💻 Software Engineer em evolução constante
                    </div>

                    <h1 className="
                        text-4xl md:text-5xl lg:text-6xl
                        font-bold
                        tracking-tight
                        leading-tight
                        text-gray-900 dark:text-white
                    ">
                        Construindo sistemas
                        <br />
                        <span className="
                            bg-gradient-to-r
                            from-blue-600 to-cyan-500
                            dark:from-blue-400 dark:to-cyan-400
                            bg-clip-text text-transparent
                        ">
                            simples, escaláveis
                        </span>
                        <br />
                        e eficientes
                    </h1>

                    <p className="
                        mt-6
                        text-lg
                        text-gray-600 dark:text-slate-400
                        max-w-lg
                        leading-relaxed
                    ">
                        Trabalho com Java, Spring Boot e integrações via APIs.
                        Gosto de transformar processos confusos em soluções organizadas
                        e automatizadas.
                    </p>

                    <div className="mt-8 flex gap-4 flex-wrap">

                        <Link
                            to="/projetos"
                            className="
                                px-6 py-3 rounded-xl
                                bg-blue-600 hover:bg-blue-500
                                text-white font-medium
                                transition-all duration-300
                                shadow-md shadow-blue-600/30
                                hover:-translate-y-0.5
                            "
                        >
                            Ver Projetos
                        </Link>

                        <Link
                            to="/curriculo"
                            className="
                                px-6 py-3 rounded-xl
                                border border-gray-300
                                dark:border-slate-700
                                text-gray-800 dark:text-slate-200
                                hover:border-blue-500
                                transition-all duration-300
                            "
                        >
                            Currículo
                        </Link>

                    </div>

                </div>

                {/* Visual mais simples */}
                <div className="hidden md:flex justify-center">

                    <div className="
                        rounded-2xl
                        border border-gray-200 dark:border-slate-800
                        bg-white dark:bg-slate-900
                        p-6
                        shadow-xl
                        w-[320px]
                    ">

                        <div className="space-y-3">
                            <div className="h-3 w-3/4 bg-blue-400/40 rounded" />
                            <div className="h-3 w-2/3 bg-cyan-400/40 rounded" />
                            <div className="h-3 w-1/2 bg-indigo-400/40 rounded" />
                        </div>

                        <div className="mt-6 h-28 rounded-lg bg-gray-100 dark:bg-slate-800" />
                    </div>

                </div>

            </div>
        </section>
    );
}
