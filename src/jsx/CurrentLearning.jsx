import React from "react";
import InfoSection from "./InfoSection";

export default function CurrentLearning() {
    return (
        <InfoSection title="Atualmente Aprendendo">
            <ul>
                <li>Testes automatizados e garantia de qualidade (JUnit)</li>
                <li>Boas práticas de arquitetura de software e sistemas escaláveis</li>
                <li>Padrões de integração e comunicação entre sistemas (APIs, Webhooks)</li>
                <li>Observabilidade, monitoramento e prevenção de falhas em automações</li>
                <li>Modelagem de dados e métricas para suporte à decisão</li>
                <li>Segurança da informação e conformidade com LGPD em sistemas automatizados</li>
            </ul>
        </InfoSection>
    );
}
