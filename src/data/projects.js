export const projects = [
    {
        id: "capiwallet",
        title: "CapiWallet",
        description: "Sistema web de carteira digital para restaurante universitário. Projeto de TCC desenvolvido por Pedro Nunes Cardoso e Lennon Ferreira Machado com foco em automação, controle de acesso e integração com Pix e QR Code.",
        githubUrl: "https://github.com/ulennon/capiwallet",
        online: "https://meu-site.com/capiwallet",
        img: "/images/capiwallet.png",
        frontend: "HTML5, CSS3, JavaScript, Thymeleaf",
        backend: "Java 21 + Spring Boot 3.3.2",
        mapa: "",
        banco: "MySQL 8.0.28",
        status: [
            "✅ Cadastro e login de usuários",
            "✅ Recuperação de senha via e-mail",
            "✅ Compra de tickets digitais ou presenciais",
            "✅ Integração com API Pix do Banco do Brasil",
            "✅ Visualização de saldo e histórico de uso",
            "✅ Geração de QR Code para autenticação",
            "✅ Painel administrativo com permissões",
            "✅ Relatórios em PDF e Excel",
            "✅ Interface responsiva para desktop e mobile",
            "✅ Alertas por e-mail e no sistema",
            "✅ Controle de acesso por roles (usuário, administrador, técnico)"
        ],
        futuro: [
            "Integração com leitor físico de QR Code no restaurante",
            "Melhoria no sistema de notificações em tempo real",
            "Dashboard analítico com gráficos de uso",
            "Migração futura para microsserviços se necessário"
        ],
        tecnologias: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "MySQL",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Thymeleaf",
            "Git",
            "ZXing (QR Code)",
            "Pix API",
            "iText PDF",
            "Apache POI",
            "JUnit",
            "Mockito"
        ]

},
    {
        id: "shurima",
        title: "Shurima",
        description: "Plataforma web que integra a Riot Games API para consulta de estatísticas detalhadas de jogadores de League of Legends. Permite visualizar perfil, elo, histórico de partidas e rotação semanal de campeões de forma simples e intuitiva.",
        tecnologias: [
            "Java 17",
            "Spring Boot 3.2.1",
            "Spring Caching",
            "Lombok",
            "Thymeleaf",
            "HTML5",
            "CSS3",
            "JavaScript",
            "MySQL"
        ],
        img: "/images/shurima.png",
        githubUrl: "https://github.com/uLennon/shurima",
        online: "https://meu-site.com/shurima",
        status: [
            "✅ Busca de jogadores por nome de invocador",
            "✅ Exibição de perfil (nome, nível, ícone e elo)",
            "✅ Histórico de partidas (campeão, KDA, duração e resultado)",
            "✅ Exibição da rotação gratuita de campeões da semana",
        ],
        backend: "Java + Spring Boot (REST APIs, cache e integração com Riot API)",
        frontend: "Thymeleaf + HTML5, CSS3 e JavaScript",
        banco: "MySQL para armazenamento e persistência de dados",
    },

    {
        id: "ondetembanheiro",
        title: "Onde Tem Banheiro",
        description: "O Onde Tem Banheiro é uma plataforma comunitária para ajudar pessoas a localizarem banheiros públicos e acessíveis nas redondezas. A proposta é simples: qualquer pessoa pode contribuir cadastrando novos banheiros, ajudando quem precisa encontrar um com urgência, segurança e praticidade.",
        githubUrl: "https://github.com/peenc/ondetembanheiro",
        online: "https://meu-site.com/ondetembanheiro",
        img: "/images/ondetembanheiro.png",
        tecnologias: ["HTML", "TailwindCSS", "JavaScript", "MapLibre", "Spring Boot", "MySQL"],
        status: [
            "✅ Mapa interativo com marcadores de banheiros próximos",
            "✅ Exibição da distância entre o usuário e os banheiros",
            "✅ Pop-up com informações como nome, avaliação e botão de detalhes",
            "✅ Interface responsiva com TailwindCSS",
            "✅ Modal de cadastro de banheiros",
            "✅ Sistema de avaliações e comentários"
        ],
        futuro: [
            "Gamificação para incentivar o cadastro de novos banheiros",
            "Sistema de login e reputação para usuários",
            "Filtros por acessibilidade, higiene e localização",
            "Versão mobile PWA",
            "Notificações inteligentes"
        ],
        backend: "Java + Spring Boot (em desenvolvimento)",
        frontend: "HTML5, TailwindCSS, JavaScript",
        mapa: "MapLibre",
        banco: "MySQL (planejado)"
    },
];
