import React from "react";
import InfoSection from "./InfoSection";

export default function CurrentLearning() {
    return (
        <InfoSection title="🌱 Atualmente Aprendendo">
            <ul>
                <li>Testes unitários com JUnit</li>
                <li>Desenvolvimento front-end com React, TailwindCSS e consumo de APIs</li>
                <li>Integração de QR Code com Spring Boot</li>
                <li>Estruturação de sistemas escaláveis e seguros</li>
                <li>Game scripting com Ren’Py e GDScript</li>
                <li>Arquitetura de software (monolito vs microsserviços)</li>
            </ul>
        </InfoSection>
    );
}
