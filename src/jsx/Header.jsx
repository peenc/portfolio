import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useTypewriter(text, speed = 40, delay = 0, instant = false) {
    const [displayedText, setDisplayedText] = useState(instant ? text : "");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (instant) {
            setDisplayedText(text);
            setIsTyping(false);
            return;
        }

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
    }, [text, speed, delay, instant]);

    return { displayedText, isTyping };
}

export default function Header() {

    const speedTitle = 40;
    const speedParagraph = 30;

    const [hasAnimated, setHasAnimated] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const alreadyPlayed = sessionStorage.getItem("homeAnimated");

        if (alreadyPlayed) {
            setHasAnimated(true);
            setShowButtons(true);
            setShowCard(true);
            setStartTyping(true);

            setTimeout(() => setFadeIn(true), 50);

        } else {
            sessionStorage.setItem("homeAnimated", "true");

            const cardTimer = setTimeout(() => setShowCard(true), 200);
            const typingTimer = setTimeout(() => setStartTyping(true), 200);

            return () => {
                clearTimeout(cardTimer);
                clearTimeout(typingTimer);
            };
        }
    }, []);

    const initialDelay = hasAnimated ? 0 : (startTyping ? 0 : 999999);

    const badgeText = "💻 Software Engineer em evolução constante";
    const t1 = "Construindo sistemas";
    const t2 = "simples, escaláveis";
    const t3 = "e eficientes";
    const t4 = "Trabalho com Java, Spring Boot e integrações via APIs. Transformo processos complexos em sistemas organizados, automatizados e escaláveis.";
    const t5 = "Backend • Arquitetura • Automação • Dados";

    const badge = useTypewriter(badgeText, speedTitle, initialDelay, hasAnimated);
    const l1 = useTypewriter(t1, speedTitle,
        initialDelay + badgeText.length * speedTitle, hasAnimated);

    const l2 = useTypewriter(t2, speedTitle,
        initialDelay + badgeText.length * speedTitle + t1.length * speedTitle, hasAnimated);

    const l3 = useTypewriter(t3, speedTitle,
        initialDelay + badgeText.length * speedTitle + t1.length * speedTitle + t2.length * speedTitle, hasAnimated);

    const l4 = useTypewriter(t4, speedParagraph,
        initialDelay + badgeText.length * speedTitle + t1.length * speedTitle + t2.length * speedTitle + t3.length * speedTitle, hasAnimated);

    const l5 = useTypewriter(t5, speedParagraph,
        initialDelay + badgeText.length * speedTitle + t1.length * speedTitle + t2.length * speedTitle + t3.length * speedTitle + t4.length * speedParagraph, hasAnimated);

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

    const codeTyping = useTypewriter(codeString, 20, initialDelay, hasAnimated);

    useEffect(() => {
        if (hasAnimated) return;

        if (!l5.isTyping && l5.displayedText.length > 0) {
            const timer = setTimeout(() => setShowButtons(true), 300);
            return () => clearTimeout(timer);
        }
    }, [l5.isTyping, l5.displayedText, hasAnimated]);

    return (
        <section className="relative overflow-hidden bg-white dark:bg-slate-950 min-h-screen">

            <div className={`transition-all duration-700
                ${hasAnimated
                ? (fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
                : ""}`}>

                <div className="max-w-[1400px] mx-auto
                                px-4 sm:px-6 md:px-12 lg:px-20
                                pt-20 md:pt-16
                                pb-16
                                grid md:grid-cols-2
                                gap-12 md:gap-20
                                items-center">

                    {/* TEXTO */}
                    <div>

                        <div className="inline-block mb-6 px-4 py-1.5
                                        text-xs sm:text-sm font-medium rounded-full
                                        bg-blue-100 text-cyan-700
                                        dark:bg-blue-500/10 dark:text-cyan-400
                                        border border-blue-200 dark:border-blue-500/30">
                            {badge.displayedText}
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                                       font-bold tracking-tight leading-tight
                                       text-gray-900 dark:text-white">
                            {l1.displayedText}
                            <br />
                            <span className="bg-gradient-to-r from-cyan-600 to-cyan-500
                                             dark:from-cyan-400 dark:to-cyan-400
                                             bg-clip-text text-transparent">
                                {l2.displayedText}
                            </span>
                            <br />
                            {l3.displayedText}
                        </h1>

                        <p className="mt-6 text-base sm:text-lg md:text-xl
                                      leading-relaxed text-gray-600 dark:text-slate-400 max-w-xl">
                            {l4.displayedText}
                        </p>

                        <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-gray-500 dark:text-slate-500">
                            {l5.displayedText}
                        </p>

                        <div className={`mt-8 flex gap-4 flex-wrap
                            transition-all duration-700
                            ${showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>

                            <Link
                                to="/projetos"
                                className="px-6 py-3 rounded-xl
                                           bg-cyan-600 hover:bg-cyan-500
                                           text-white font-medium
                                           transition-all duration-300
                                           shadow-lg shadow-cyan-600/30">
                                Ver Projetos
                            </Link>

                            <Link
                                to="/curriculo"
                                className="px-6 py-3 rounded-xl
                                           border border-gray-300 dark:border-slate-700
                                           text-gray-800 dark:text-slate-200
                                           hover:border-cyan-500
                                           transition-all duration-300">
                                Currículo
                            </Link>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className={`md:flex justify-center
                                     transition-all duration-[1200ms]
                                     ${showCard
                        ? "opacity-100 translate-y-0 scale-100 blur-0"
                        : "opacity-0 translate-y-8 scale-95 blur-sm pointer-events-none"}`}>

                        <div className="rounded-2xl border border-gray-200 dark:border-slate-800
                                        bg-white dark:bg-slate-900/40
                                        p-6 sm:p-8 shadow-2xl
                                        w-full max-w-[620px]
                                        h-auto md:h-full
                                        flex flex-col">

                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-3 text-xs text-gray-500 dark:text-slate-400 font-mono">
                                    DevCycle.java
                                </span>
                            </div>

                            <pre className="text-xs sm:text-sm leading-relaxed font-mono
                                            text-gray-800 dark:text-slate-300
                                            flex-1 whitespace-pre-wrap break-words overflow-auto">
                                {codeTyping.displayedText}
                            </pre>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
