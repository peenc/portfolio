import InfoSection from "../InfoSection.jsx";
import Navbar from "../Navbar.jsx";
import Header from "../Header.jsx";
import React from "react";
import Footer from "../Footer.jsx";

export default function Sobre(){
    return (

            <div className="max-w-5xl mx-auto space-y-16">

    <InfoSection id="sobre" title="Sobre Mim">
                <p>
                    Sou profissional de tecnologia com atuação em
                    <strong> engenharia de software aplicada à automação de processos, CRM e dados</strong>,
                    desenvolvendo soluções técnicas para otimizar fluxos operacionais
                    e apoiar decisões orientadas por dados.
                </p>

                <p>
                    Trabalho com
                    <strong> integrações via APIs REST, automações em CRM, scripts e estruturação de dados</strong>,
                    participando do desenvolvimento de bots de atendimento,
                    sistemas de comunicação automatizada e soluções de apoio à operação.
                </p>

                <p>
                    Minha formação em <strong>Ciência da Computação</strong> fornece base sólida em
                    engenharia de software, arquitetura de sistemas e boas práticas,
                    garantindo soluções escaláveis, seguras e bem documentadas.
                </p>
            </InfoSection>


            <InfoSection id="automacao" title="Engenharia de Software aplicada a Automação, CRM e Dados">
                <ul>
                    <li>
                        Arquitetura, desenvolvimento e evolução de sistemas de automação em plataformas de CRM,
                        garantindo confiabilidade, escalabilidade e manutenibilidade dos fluxos.
                    </li>
                    <li>
                        Integração entre sistemas internos e externos por meio de APIs REST, Webhooks e troca de dados em JSON.
                    </li>
                    <li>
                        Desenvolvimento de bots de atendimento e fluxos automatizados, com foco em experiência do usuário,
                        eficiência operacional e conformidade com LGPD.
                    </li>
                    <li>
                        Modelagem, padronização e governança de dados, incluindo limpeza e enriquecimento de bases operacionais.
                    </li>
                    <li>
                        Construção de modelos operacionais e analíticos em planilhas (ex: cálculo de ROI e métricas de performance).
                    </li>
                    <li>
                        Desenvolvimento e manutenção de dashboards e indicadores operacionais no Looker Studio,
                        apoiando decisões estratégicas do negócio.
                    </li>
                    <li>
                        Documentação técnica de sistemas, automações e regras de negócio, facilitando manutenção e evolução futura.
                    </li>
                    <li>
                        Aplicação de princípios de engenharia de software, segurança da informação e boas práticas de arquitetura.
                    </li>
                </ul>
            </InfoSection>
            </div>
    );
}

