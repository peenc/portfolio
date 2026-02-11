import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectsCarousel({ projects }) {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const intervalRef = useRef(null);

    const next = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    // AUTOPLAY
    useEffect(() => {
        startAutoPlay();
        return () => clearInterval(intervalRef.current);
    }, [current]);

    const startAutoPlay = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 5000);
    };

    const stopAutoPlay = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <section className="relative overflow-hidden py-28">

            {/* Background grid */}
            <div className="
                absolute inset-0 -z-10
                bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
                bg-[size:40px_40px]
                dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            " />

            {/* Glow */}
            <div className="
                absolute top-0 left-1/2 -translate-x-1/2
                w-[700px] h-[400px]
                bg-blue-500/10 dark:bg-blue-500/20
                blur-3xl -z-10
            " />

            <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative">

                {/* Título */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Projetos
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
                        Construídos com foco em performance e escalabilidade.
                    </p>
                </div>

                {/* CAROUSEL */}
                <div
                    className="relative rounded-3xl overflow-hidden"
                    onMouseEnter={stopAutoPlay}
                    onMouseLeave={startAutoPlay}
                >

                    {/* Botão esquerdo */}
                    <button
                        onClick={prev}
                        className="
            absolute left-0 top-0 bottom-0
            w-20
            flex items-center justify-center
            z-20
            opacity-0 hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-r from-white/80 to-transparent
            dark:from-slate-900/80
            rounded-l-3xl
        "
                    >
        <span className="text-3xl text-gray-700 dark:text-slate-300 hover:text-blue-500 transition">
            ←
        </span>
                    </button>

                    {/* Botão direito */}
                    <button
                        onClick={next}
                        className="
            absolute right-0 top-0 bottom-0
            w-20
            flex items-center justify-center
            z-20
            opacity-0 hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-l from-white/80 to-transparent
            dark:from-slate-900/80
            rounded-r-3xl
        "
                    >
        <span className="text-3xl text-gray-700 dark:text-slate-300 hover:text-blue-500 transition">
            →
        </span>
                    </button>

                    {/* Slides */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                                transform: `translateX(-${current * 100}%)`,
                            }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="min-w-full">
                                    <div
                                        onClick={() =>
                                            navigate(
                                                `/projetos/${project.title
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "")}`
                                            )
                                        }
                                        className="
                            cursor-pointer
                            border border-gray-200 dark:border-slate-800
                            bg-white/70 dark:bg-slate-900/60
                            backdrop-blur-xl
                            transition-all duration-500
                            hover:border-blue-500
                            hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]
                        "
                                    >
                                        <div className="grid md:grid-cols-2 gap-12 items-center p-14">

                                            <div>
                                                <img
                                                    src={project.img}
                                                    alt={project.title}
                                                    className="rounded-2xl w-full h-[380px] object-cover"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900 dark:text-white">
                                                    {project.title}
                                                </h3>

                                                <p className="text-lg text-gray-600 dark:text-slate-400 mb-10 leading-relaxed">
                                                    {project.description}
                                                </p>

                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="
                                        inline-block
                                        px-8 py-3 rounded-xl
                                        bg-blue-600 text-white
                                        hover:bg-blue-500
                                        shadow-lg shadow-blue-600/20
                                        transition
                                    "
                                                >
                                                    Ver no GitHub
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Indicadores */}
                <div className="flex justify-center gap-3 mt-10">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${
                                index === current
                                    ? "w-8 bg-blue-600"
                                    : "w-2 bg-gray-300 dark:bg-slate-700"
                            }
                            `}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
