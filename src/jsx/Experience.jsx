import React from "react";
import InfoSection from "./InfoSection";

export default function Experience() {
    return (
        <InfoSection title="Experiência Profissional">
            <ul>
                <li>
                    <strong>Engenharia de Software aplicada a Sistemas de CRM e Automação</strong><br />
                    <em>BeHealth — Hub de Saúde | Engenheiro de Software (Arquitetura, Integrações e Dados) · 2025 – atual</em>
                    <ul style={{ marginTop: '10px' }}>
                        <li>
                            Desenvolvimento e evolução de automações críticas em CRM (ActiveCampaign),
                            garantindo confiabilidade de fluxos operacionais e comunicação com pacientes
                            e profissionais.
                        </li>
                        <li>
                            Reestruturação de modelos de dados, incluindo migração de informações entre
                            domínios (contato → negócio) para evitar ambiguidades e inconsistências.
                        </li>
                        <li>
                            Implementação de lógica para suporte a inscrições simultâneas, prevenindo
                            conflitos e erros em fluxos automatizados.
                        </li>
                        <li>
                            Criação de arquitetura modular de automações, promovendo
                            reutilização, manutenibilidade e escalabilidade.
                        </li>
                        <li>
                            Integração de sistemas via APIs REST e Webhooks (ActiveCampaign, Hilos, Meta),
                            incluindo validações por e-mail e CPF.
                        </li>
                        <li>
                            Desenvolvimento de bots de WhatsApp para autoatendimento, com definição de
                            fluxos, formulários simplificados e conformidade com LGPD.
                        </li>
                        <li>
                            Estruturação e enriquecimento de bases de dados operacionais, possibilitando
                            métricas de retenção, presença e ciclo de vida de pacientes.
                        </li>
                        <li>
                            Criação de métricas operacionais e modelos analíticos para apoio à tomada
                            de decisão.
                        </li>
                        <li>
                            Documentação técnica de scripts, automações e regras de negócio utilizando
                            Notion.
                        </li>
                        <li>
                            Atuação em conjunto com stakeholders técnicos e de negócio, equilibrando
                            múltiplos projetos simultaneamente.
                        </li>
                    </ul>
                </li>

                <li style={{ marginTop: '15px' }}>
                    <strong>Jovem Aprendiz – Assistente Administrativo</strong><br />
                    Transportes Flores
                </li>

                <li>
                    <strong>Auxiliar Cartorário</strong><br />
                    Cartório RCPNIT 1º Distrito de São João de Meriti
                </li>
            </ul>
        </InfoSection>
    );
}
