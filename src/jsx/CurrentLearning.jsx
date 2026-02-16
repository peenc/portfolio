import React from "react";
import InfoSection from "./InfoSection";

export default function CurrentLearning() {
    return (
        <InfoSection title="Atualmente Aprendendo">
            <div className="text-gray-800 dark:text-slate-300">

                <ul className="
                    space-y-4 md:space-y-5
                    text-sm sm:text-base md:text-lg
                    leading-relaxed
                ">
                    {[
                        "Testes automatizados e garantia de qualidade (JUnit)",
                        "Boas práticas de arquitetura de software e sistemas escaláveis",
                        "Padrões de integração e comunicação entre sistemas (APIs, Webhooks)",
                        "Observabilidade, monitoramento e prevenção de falhas em automações",
                        "Modelagem de dados e métricas para suporte à decisão",
                        "Segurança da informação e conformidade com LGPD em sistemas automatizados"
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="
                                flex gap-3
                                items-start
                            "
                        >
                            <span className="
                                mt-2
                                w-2 h-2
                                rounded-full
                                bg-cyan-500
                                shrink-0
                            " />

                            <span className="text-gray-700 dark:text-slate-300">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </InfoSection>
    );
}
