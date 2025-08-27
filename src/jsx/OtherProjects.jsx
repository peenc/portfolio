import React from "react";
import InfoSection from "./InfoSection";

export default function OtherProjects() {
    return (
        <InfoSection title="Outros Projetos">
            <ul>
                <li>Compilador em C++ com Flex/Bison e análise sintática/lexical.</li>
                <li>Gerenciador de senhas pessoais com criptografia e autenticação local.</li>
                <li>To-Do List colaborativa em Java usando Java RMI.</li>
            </ul>
        </InfoSection>
    );
}
