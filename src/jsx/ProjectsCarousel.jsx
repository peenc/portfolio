import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";

export default function ProjectsCarousel({ projects }) {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const intervalRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;

        const threshold = 50; // sensibilidade

        if (distance > threshold) {
            next(); // swipe left
        }

        if (distance < -threshold) {
            prev(); // swipe right
        }
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

    const { ref, isVisible } = useRevealOnScroll();

    return (
        <section className="relative overflow-hidden py-16 md:py-28 ">

            <div
                ref={ref}
                className={`
                    transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]
                    ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
                `}
            >

                {/* Background Grid */}
                <div className="
                    absolute inset-0 -z-10
                    bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
                    bg-[size:40px_40px]
                    dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
                " />

                {/* Glow reduzido no mobile */}
                <div className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    w-[300px] md:w-[700px]
                    h-[200px] md:h-[400px]
                    bg-blue-500/10 dark:bg-blue-500/20
                    blur-3xl -z-10
                " />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 relative">

                    {/* Título */}
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Projetos
                        </h2>

                        <p className="mt-4 text-sm md:text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Projetos desenvolvidos com foco em arquitetura,
                            organização de código e integração entre sistemas.
                        </p>
                    </div>

                    {/* CAROUSEL */}
                    <div
                        className="relative rounded-3xl group shadow-md"
                        onMouseEnter={stopAutoPlay}
                        onMouseLeave={startAutoPlay}
                    >

                        {/* Botões laterais — menores no mobile */}
                        <button
                            onClick={prev}
                            className="
                                absolute left-0 top-0
                                hidden md:flex
                                h-full w-20
                                items-center justify-center
                                z-20

                                opacity-0 group-hover:opacity-100
                                transition-all duration-300

                                bg-gradient-to-r
                                from-white/70 to-transparent
                                dark:from-slate-900/70

                                rounded-l-3xl
                            "
                                                >
                            <span className="text-3xl text-gray-700 dark:text-slate-300">
                                ←
                            </span>
                        </button>
                        <button
                            onClick={next}
                            className="
                                absolute right-0 top-0
                                hidden md:flex
                                h-full w-20
                                items-center justify-center
                                z-20

                                opacity-0 group-hover:opacity-100
                                transition-all duration-300

                                bg-gradient-to-l
                                from-white/70 to-transparent
                                dark:from-slate-900/70

                                rounded-r-3xl
                            "
                                                >
                            <span className="text-3xl text-gray-700 dark:text-slate-300">
                                →
                            </span>
                        </button>


                        {/* Slides */}
                        <div
                            className="overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >

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
                                                bg-white dark:bg-slate-900/40
                                                backdrop-blur-xl
                                                transition-all duration-300
                                                rounded-2xl
                                            "
                                        >
                                            <div className="
                                                grid grid-cols-1 md:grid-cols-2
                                                gap-8 md:gap-12
                                                items-center
                                                p-6 md:p-14
                                            ">

                                                {/* IMAGEM */}
                                                <div>
                                                    <img
                                                        src={project.img}
                                                        alt={project.title}
                                                        className="
                                                            rounded-xl md:rounded-2xl
                                                            w-full
                                                            h-[200px] md:h-[380px]
                                                            object-cover
                                                        "
                                                    />
                                                </div>

                                                {/* TEXTO */}
                                                <div>
                                                    <h3 className="text-xl md:text-4xl font-semibold mb-4 md:mb-6 text-gray-900 dark:text-white">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-sm md:text-lg text-gray-600 dark:text-slate-400 mb-6 md:mb-10 leading-relaxed">
                                                        {project.description}
                                                    </p>

                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="
                                                            inline-block
                                                            px-6 py-2.5 md:px-8 md:py-3
                                                            rounded-lg md:rounded-xl
                                                            bg-cyan-600 text-white
                                                            hover:bg-cyan-500
                                                            text-sm md:text-base
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
                    <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-10">
                        {projects.map((_, index) => (
                            <div
                                key={index}
                                className={`
                                    h-2 rounded-full transition-all duration-300
                                    ${
                                    index === current
                                        ? "w-6 md:w-8 bg-cyan-600"
                                        : "w-2 bg-gray-300 dark:bg-slate-700"
                                }
                                `}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
