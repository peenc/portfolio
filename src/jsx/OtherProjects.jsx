import React from "react";
import InfoSection from "./InfoSection";

export default function OtherProjects() {
    return (
        <InfoSection title="Outros Projetos">
            <ul className="space-y-3">
                <li className="pl-4 border-l border-cyan-500/30">
                    Compilador em C++ com Flex/Bison e análise sintática/lexical.
                </li>
                <li className="pl-4 border-l border-cyan-500/30">
                    Gerenciador de senhas pessoais com criptografia e autenticação local.
                </li>
                <li className="pl-4 border-l border-cyan-500/30">
                    To-Do List colaborativa em Java usando Java RMI.
                </li>
            </ul>

        </InfoSection>
    );
}
