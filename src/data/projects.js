export const projects = [
    {
        id: "inf-os-v1",
        title: "Sistema Operacional Indefinidos",
        img: "/images/inf-os.png",
        githubUrl: "",
        online: "https://indefinidos.com.br",
        backend: "Supabase + Edge Functions",
        frontend: "React 18 + Tailwind CSS",
        banco: "PostgreSQL",
        tecnologias: ["React 18", "Auth Supabase", "Login Sem Senha", "Tailwind CSS", "PDF Generation"],
        pt: {
            description: "Desenvolvimento do nosso próprio 'Operating System'. Arquitetura Full-stack projetada para resolver a fragmentação de ferramentas no mercado criativo, centralizando a gestão em um painel único e eliminando a dependência de softwares de terceiros.",
            status: [
                "Autenticação passwordless segura (Login Sem Senha)",
                "Kanban interativo para gestão centralizada de Leads",
                "Simulador Financeiro em tempo real para cálculo dinâmico de escopos e parcelamentos",
                "Geração de propostas comerciais em PDF customizado com um clique",
                "Otimização: redução do tempo de orçamentos de horas para segundos"
            ],
            futuro: [
                "Integração nativa com o Jarvis (Agente de IA Autônomo) para automação de processos"
            ]
        },
        en: {
            description: "Development of our own 'Operating System'. A full-stack architecture designed to solve tool fragmentation in the creative market by centralizing management in a single dashboard.",
            status: [
                "Secure passwordless authentication",
                "Interactive Kanban for centralized Lead management",
                "Real-time Financial Simulator for dynamic scope calculation",
                "Custom PDF commercial proposal generation with one click",
                "Optimization: Reduced budgeting time from hours to seconds"
            ],
            futuro: [
                "Native integration with Jarvis (Autonomous AI Agent) for process automation"
            ]
        }
    },
    {
        id: "inf-ht-01",
        title: "Plataforma de Dados em Saúde",
        img: "/images/inf-ht.png",
        githubUrl: "",
        online: "",
        backend: "Java / Spring Boot",
        frontend: "React",
        banco: "PostgreSQL",
        tecnologias: ["Engenharia de Dados", "API Própria", "MFA / Segurança", "DataViz", "Arq. de Sistemas", "React", "Spring Boot"],
        pt: {
            description: "Plataforma web de análise de dados em produção para um player de saúde. Uma central de inteligência desenvolvida do zero para unificar indicadores de marketing, vendas e sucesso (NPS) que antes estavam fragmentados.",
            status: [
                "Engenharia de dados e criação de API própria para ingestão de métricas",
                "Painéis executivos customizados para Diretorias (Executiva, Marketing, CS)",
                "Segurança de nível enterprise com Autenticação Multifator (MFA)",
                "Console de desenvolvedor integrado para monitoramento em tempo real",
                "Otimização estratégica: centralização que acelerou decisões de dias para segundos"
            ],
            futuro: []
        },
        en: {
            description: "Production data analytics web platform for a healthcare player. An intelligence center developed from scratch to unify previously fragmented marketing, sales, and success (NPS) metrics.",
            status: [
                "Data engineering and custom API creation for metric ingestion",
                "Customized executive panels for Directorates (Executive, Marketing, CS)",
                "Enterprise-level security with Multi-Factor Authentication (MFA)",
                "Integrated developer console for real-time monitoring",
                "Strategic optimization: centralization that accelerated decisions from days to seconds"
            ],
            futuro: []
        }
    },
    {
        id: "inf-ai-01",
        title: "Jarvis: Agente de IA Autônomo",
        img: "/images/inf-ai.png",
        githubUrl: "",
        online: "",
        backend: "Python / Node.js",
        frontend: "",
        banco: "pgvector",
        tecnologias: ["Integração LLM", "Engenharia Prompt", "Edge Functions", "API de E-mail", "Agentes Autônomos", "Python", "Node.js"],
        pt: {
            description: "Agente de IA inspirado no J.A.R.V.I.S., orquestrando LLMs de ponta para automação de processos. Integrado nativamente ao ecossistema, ele aguarda comandos e executa rotinas complexas de forma independente para eliminar o trabalho braçal na redação de e-mails e gestão de leads.",
            status: [
                "Execução inteligente de tarefas baseada em comandos (prompting) e leitura em tempo real no Supabase",
                "Engenharia de Prompt (Prompt Engineering) restrita para blindagem de contexto e tom de voz",
                "Redação hiper-personalizada de e-mails orientados à conversão e avanços de funil",
                "Orquestração de disparos automatizados via Edge Functions e API externa (Resend)",
                "Otimização: Operação do funil de vendas 24/7 escalando a agência sem custos humanos extras"
            ],
            futuro: [
                "Evolução para autonomia total: capacidade de agir de forma independente frente a eventos e acontecimentos externos (Event-Driven Autonomy)"
            ]
        },
        en: {
            description: "J.A.R.V.I.S.-inspired AI Agent orchestrating cutting-edge LLMs for process automation. Natively integrated into the ecosystem, it awaits commands and executes complex routines independently to eliminate manual labor in email drafting and lead management.",
            status: [
                "Intelligent task execution based on commands (prompting) and real-time reading in Supabase",
                "Strict Prompt Engineering for context shielding and brand voice adoption",
                "Hyper-personalized drafting of conversion-oriented and funnel-advancing emails",
                "Orchestration of automated sends via Edge Functions and external API (Resend)",
                "Optimization: 24/7 sales funnel operation scaling the agency without extra human costs"
            ],
            futuro: [
                "Evolution towards full autonomy: ability to act independently in response to external events and triggers (Event-Driven Autonomy)"
            ]
        }
    },
    {
        id: "inf-crm-01",
        title: "Automação de CRM & Chatbot",
        img: "/images/inf-crm.png",
        githubUrl: "",
        online: "",
        backend: "Node.js / Express",
        frontend: "",
        banco: "MongoDB",
        tecnologias: ["Integração API", "Arquitetura CRM", "WhatsApp API", "Fluxos de Chatbot", "Webhooks", "Node.js"],
        pt: {
            description: "Arquitetura de automação de processos de vendas projetada para orquestrar integrações complexas. O sistema conecta CRMs, plataformas externas e um Chatbot via WhatsApp para criar um fluxo dinâmico e autônomo.",
            status: [
                "Integrações avançadas via API e Webhooks conectando softwares de terceiros ao CRM base",
                "Chatbot inteligente no WhatsApp focado em qualificação de leads e redução da saga do cliente",
                "Diálogo autônomo com o usuário e atualização em tempo real do status no funil de vendas",
                "Otimização: Fim do trabalho repetitivo manual, reduzindo drasticamente o tempo de resposta e aumentando a conversão"
            ],
            futuro: [
                "Análise contínua de métricas para otimização de fluxos: mapeamento de dados para redução de gargalos e antecipação de padrões de dúvidas no atendimento"
            ]
        },
        en: {
            description: "Sales process automation architecture designed to orchestrate complex integrations. The system connects CRMs, external platforms, and a WhatsApp Chatbot to create a dynamic and autonomous flow.",
            status: [
                "Advanced integrations via API and Webhooks connecting third-party software to the core CRM",
                "Intelligent WhatsApp Chatbot focused on lead qualification and reducing customer friction",
                "Autonomous dialog with the user and real-time status updates in the sales funnel",
                "Optimization: End of manual repetitive work, drastically reducing response time and increasing conversion"
            ],
            futuro: [
                "Continuous metric analysis for flow optimization: data mapping to reduce bottlenecks and anticipate patterns of customer inquiries"
            ]
        }
    },
    {
        id: "nuvwave",
        title: "Nuvwave",
        img: "/images/nuvwave.png",
        githubUrl: "",
        online: "https://nuvwave.app",
        backend: "Node.js",
        frontend: "React",
        banco: "PostgreSQL",
        tecnologias: ["React 19", "Supabase", "Tailwind CSS", "Vite", "Dnd-Kit (Drag & Drop)", "Gamificação"],
        pt: {
            description: "Um hub de estudos virtual lofi projetado para maximizar a produtividade e o foco. Uma plataforma imersiva e altamente personalizável que une gestão de tempo, gamificação e ambientação sonora, atualmente em fase Beta.",
            status: [
                "Dashboard interativo com sistema avançado de Drag and Drop (Arrastar e Soltar) para organização de widgets",
                "Timer Pomodoro e Mixer de Sons Ambientes (chuva, café, lareira) para imersão total",
                "Integração de mídia com YouTube Player para trilhas sonoras Lo-Fi",
                "Sistema de gamificação com ganho de XP e registro de progresso (conectado ao Supabase)",
                "Ferramentas integradas de produtividade: Bloco de notas, Lista de Tarefas (Missões) e Lembretes de Hidratação",
                "Backgrounds dinâmicos e customizáveis para criar o ambiente perfeito de estudos"
            ],
            futuro: [
                "Integração com IA (Google GenAI) para tutoria e geração de dicas de estudo",
                "Salas de estudo cooperativas (Multiplayer focus rooms)"
            ]
        },
        en: {
            description: "A lofi virtual study hub designed to maximize productivity and focus. An immersive and highly customizable platform that combines time management, gamification, and soundscapes, currently in Beta phase.",
            status: [
                "Interactive dashboard with an advanced Drag and Drop system for widget organization",
                "Pomodoro Timer and Ambient Sound Mixer (rain, cafe, fireplace) for total immersion",
                "Media integration with YouTube Player for Lo-Fi soundtracks",
                "Gamification system with XP gain and progress tracking (connected to Supabase)",
                "Built-in productivity tools: Notepad, Task List (Missions), and Hydration Reminders",
                "Dynamic and customizable backgrounds to create the perfect study environment"
            ],
            futuro: [
                "AI Integration (Google GenAI) for tutoring and study tip generation",
                "Cooperative study rooms (Multiplayer focus rooms)"
            ]
        }
    },
    {
        id: "capiwallet",
        title: "CapiWallet",
        img: "/images/capiwallet.png",
        frontend: "HTML5, CSS3, JavaScript, Thymeleaf",
        backend: "Java 21 + Spring Boot 3.3.2",
        mapa: "",
        banco: "MySQL 8.0.28",
        githubUrl: "https://github.com/ulennon/capiwallet",
        online: "https://meu-site.com/capiwallet",
        tecnologias: [
            "Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", 
            "HTML5", "CSS3", "JavaScript", "Thymeleaf", "Git", "ZXing (QR Code)", 
            "Pix API", "iText PDF", "Apache POI", "JUnit", "Mockito"
        ],
        pt: {
            description: "Sistema web de carteira digital para restaurante universitário. Projeto de TCC desenvolvido por Pedro Nunes Cardoso e Lennon Ferreira Machado com foco em automação, controle de acesso e integração com Pix e QR Code.",
            status: [
                "Cadastro e login de usuários",
                "Recuperação de senha via e-mail",
                "Compra de tickets digitais ou presenciais",
                "Integração com API Pix do Banco do Brasil",
                "Visualização de saldo e histórico de uso",
                "Geração de QR Code para autenticação",
                "Painel administrativo com permissões",
                "Relatórios em PDF e Excel",
                "Interface responsiva para desktop e mobile",
                "Alertas por e-mail e no sistema",
                "Controle de acesso por roles"
            ],
            futuro: [
                "Integração com leitor físico de QR Code no restaurante",
                "Melhoria no sistema de notificações em tempo real",
                "Dashboard analítico com gráficos de uso",
                "Migração futura para microsserviços se necessário"
            ]
        },
        en: {
            description: "Digital wallet web system for university restaurants. Capstone project developed by Pedro Nunes Cardoso and Lennon Ferreira Machado focusing on automation, access control, and integration with Pix and QR Code.",
            status: [
                "User registration and login",
                "Password recovery via email",
                "Purchase of digital or in-person tickets",
                "Integration with Bank of Brazil's Pix API",
                "View balance and usage history",
                "QR Code generation for authentication",
                "Admin panel with permissions",
                "PDF and Excel reports",
                "Responsive interface for desktop and mobile",
                "Email and system alerts",
                "Role-based access control"
            ],
            futuro: [
                "Integration with physical QR Code reader in the restaurant",
                "Improvement of real-time notification system",
                "Analytics dashboard with usage charts",
                "Future migration to microservices if necessary"
            ]
        }
    }
];
