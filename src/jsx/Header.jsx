import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useTypewriter(text, speed = 40, delay = 0) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let index = 0;
        let timeout;

        const start = () => {
            setIsTyping(true);

            const type = () => {
                setDisplayedText(text.slice(0, index + 1));
                index++;

                if (index < text.length) {
                    timeout = setTimeout(type, speed);
                } else {
                    setIsTyping(false);
                }
            };

            type();
        };

        const delayTimeout = setTimeout(start, delay);

        return () => {
            clearTimeout(delayTimeout);
            clearTimeout(timeout);
        };
    }, [text, speed, delay]);

    return { displayedText, isTyping };
}

export default function Header() {

    const speedTitle = 40;
    const speedParagraph = 30;
    const [showButtons, setShowButtons] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    // 🎬 Ordem da animação
    useEffect(() => {
        const cardTimer = setTimeout(() => {
            setShowCard(true);
        }, 200);

        const typingTimer = setTimeout(() => {
            setStartTyping(true);
        }, 200);

        return () => {
            clearTimeout(cardTimer);
            clearTimeout(typingTimer);
        };
    }, []);

    // Só começa quando startTyping for true
    const initialDelay = startTyping ? 0 : 999999;

    const badgeText = "💻 Software Engineer em evolução constante";
    const t1 = "Construindo sistemas";
    const t2 = "simples, escaláveis";
    const t3 = "e eficientes";
    const t4 = "Trabalho com Java, Spring Boot e integrações via APIs. Transformo processos complexos em sistemas organizados, automatizados e escaláveis.";
    const t5 = "Backend • Arquitetura • Automação • Dados";

    const badge = useTypewriter(badgeText, speedTitle, initialDelay);

    const l1 = useTypewriter(t1, speedTitle,
        initialDelay + badgeText.length * speedTitle
    );

    const l2 = useTypewriter(t2, speedTitle,
        initialDelay +
        badgeText.length * speedTitle +
        t1.length * speedTitle
    );

    const l3 = useTypewriter(t3, speedTitle,
        initialDelay +
        badgeText.length * speedTitle +
        t1.length * speedTitle +
        t2.length * speedTitle
    );

    const l4 = useTypewriter(t4, speedParagraph,
        initialDelay +
        badgeText.length * speedTitle +
        t1.length * speedTitle +
        t2.length * speedTitle +
        t3.length * speedTitle
    );

    const l5 = useTypewriter(t5, speedParagraph,
        initialDelay +
        badgeText.length * speedTitle +
        t1.length * speedTitle +
        t2.length * speedTitle +
        t3.length * speedTitle +
        t4.length * speedParagraph

    );

    useEffect(() => {
        if (!l5.isTyping && l5.displayedText.length > 0) {
            const timer = setTimeout(() => {
                setShowButtons(true);
            }, 300); // pequeno respiro depois da digitação

            return () => clearTimeout(timer);
        }
    }, [l5.isTyping, l5.displayedText]);

    const codeString = `public class DevCycle {

    public static void main(String[] args) {

        while(productIsAlive) {

            planning();
            refineBacklog();
            daily();

            think();
            code();
            test();

            continuousIntegration();
            deploy();

            review();
            retrospective();
        }
    }

    private static void code() {
        System.out.println("Building scalable systems");
    }
}`;
    const codeTyping = useTypewriter(
        codeString,
        20, initialDelay
    );

    return (
        <section className="relative overflow-hidden bg-white dark:bg-slate-950 min-h-screen">


        {/* Background Grid */}
            <div className="
                absolute inset-0 -z-20
                bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
                bg-[size:40px_40px]
                dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
            " />

            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <div
                className="
                    max-w-[1400px] mx-auto
                    px-6 md:px-12 lg:px-20
                    pt-16 pb-20 md:pt-12 md:pb-12
                    grid md:grid-cols-2 gap-20 items-stretch min-h-[770px]

                "
            >

                {/* TEXTO */}
                <div className="transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]">

                    {/* Badge */}
                    <div className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full
                        bg-blue-100 text-cyan-700
                        dark:bg-blue-500/10 dark:text-cyan-400
                        border border-blue-200 dark:border-blue-500/30">
                        {badge.displayedText}
                        {badge.isTyping && <span className="ml-1 animate-pulse">|</span>}
                    </div>

                    {/* Título */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
                        {l1.displayedText}
                        {l1.isTyping && <span className="ml-1 animate-pulse">|</span>}
                        <br />

                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            {l2.displayedText}
                        </span>
                        {l2.isTyping && <span className="ml-1 animate-pulse text-gray-900 dark:text-white">|</span>}
                        <br />

                        {l3.displayedText}
                        {l3.isTyping && <span className="ml-1 animate-pulse">|</span>}
                    </h1>

                    {/* Parágrafo */}
                    <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-slate-400 max-w-xl">
                        {l4.displayedText}
                        {l4.isTyping && <span className="ml-1 animate-pulse">|</span>}
                    </p>

                    {/* Tags */}
                    <p className="mt-4 text-sm uppercase tracking-widest text-gray-500 dark:text-slate-500">
                        {l5.displayedText}
                        {l5.isTyping && <span className="ml-1 animate-pulse">|</span>}
                    </p>

                    {/* Botões */}
                    <div
                        className={`
                        mt-10 flex gap-5 flex-wrap
                        transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                        ${showButtons
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-6 pointer-events-none"
                                        }
                        `}
                    >


                    <Link
                            to="/projetos"
                            className="px-7 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 shadow-lg shadow-cyan-600/30 hover:-translate-y-0.5"
                        >
                            Ver Projetos
                        </Link>

                        <Link
                            to="/curriculo"
                            className="px-7 py-3.5 rounded-xl border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-slate-200 hover:border-cyan-500 transition-all duration-300"
                        >
                            Currículo
                        </Link>
                    </div>
                </div>

                {/* CARD */}
                <div
                    className={`
        md:flex justify-center h-full
        transition-all duration-[1200ms]
        ease-[cubic-bezier(.16,1,.3,1)]
        
        ${showCard
                        ? "opacity-100 translate-y-0 scale-100 blur-0"
                        : "opacity-0 translate-y-12 scale-95 blur-sm pointer-events-none"
                    }
    `}
                >
                    <div
                        className="
            rounded-2xl border border-gray-200 dark:border-slate-800
            bg-white dark:bg-slate-900/40
            p-8 shadow-2xl
            w-full max-w-[620px]
            h-full
            transform-gpu
            flex flex-col
        "
                    >

                        {/* Header estilo editor */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <span className="ml-3 text-xs text-gray-500 dark:text-slate-400 font-mono">
                            DevCycle.java
                        </span>

                        </div>

                        {/* Código */}
                        <pre className="text-sm leading-relaxed font-mono text-gray-800 dark:text-slate-300 flex-1 whitespace-pre-wrap break-words overflow-auto">

                            {codeTyping.displayedText}
                            {codeTyping.isTyping && <span className="animate-pulse">|</span>}

                        </pre>

                    </div>
                </div>


            </div>
        </section>
    );
}
