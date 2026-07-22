export const WHATSAPP_CONTACTS = [
  { name: "Lucas", url: "https://wa.me/5521960194636" },
  { name: "Enzo", url: "https://wa.me/5521979759128" },
] as const;

// Usado no botão principal de call-to-action do site.
export const WHATSAPP_URL = WHATSAPP_CONTACTS[0].url;

export const INSTAGRAM_URL = "https://instagram.com/vertionstack";

export const CONTACT_EMAIL = "vertionstack@gmail.com";

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
];

export const BUSINESS_SEGMENTS = [
  { label: "Barbearias", icon: "Scissors" },
  { label: "Clínicas", icon: "Stethoscope" },
  { label: "Escritórios de advocacia", icon: "Scale" },
  { label: "Lojas", icon: "Store" },
  { label: "Oficinas", icon: "Wrench" },
  { label: "Salões", icon: "Sparkles" },
  { label: "Restaurantes", icon: "UtensilsCrossed" },
  { label: "Contadores", icon: "Calculator" },
  { label: "Corretoras", icon: "Building2" },
  { label: "Academias", icon: "Dumbbell" },
] as const;

export const SERVICES = [
  {
    title: "Automação de atendimento",
    description:
      "Respostas automáticas, agendamento e triagem 24h no WhatsApp, sem deixar cliente esperando.",
    icon: "MessageSquareText",
  },
  {
    title: "Sistemas sob medida",
    description:
      "Pensado pro seu processo real, não o contrário. Sem forçar seu negócio a caber num sistema pronto que não foi feito pra ele.",
    icon: "LayoutGrid",
  },
  {
    title: "Dashboards",
    description:
      "Números do negócio num painel só, fácil de olhar e decidir sem depender de planilha solta.",
    icon: "BarChart3",
  },
  {
    title: "Sites e landing pages",
    description:
      "Carrega rápido no celular e dá confiança suficiente pro visitante te chamar no WhatsApp.",
    icon: "Globe",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos seu negócio, seu processo atual e onde a tecnologia ajuda mais.",
  },
  {
    number: "02",
    title: "Proposta",
    description: "Você recebe um plano claro: o que será feito, prazo e investimento.",
  },
  {
    number: "03",
    title: "Construção",
    description: "Desenvolvimento assistido por IA acelera a entrega sem perder qualidade.",
  },
  {
    number: "04",
    title: "Entrega e suporte",
    description: "Seu projeto no ar em 3 a 7 dias úteis, com suporte pra ajustes.",
  },
] as const;

// TODO: substituir estes SVGs placeholder pelos prints reais (PNG/JPG) em public/screenshots/
// mantendo os mesmos nomes de arquivo ou atualizando o campo "src" abaixo.
export const SHOWCASE_IMAGES = [
  {
    src: "/screenshots/dashboard.svg",
    alt: "Mockup ilustrativo de um dashboard com métricas do negócio",
    label: "Dashboard",
  },
  {
    src: "/screenshots/sistema.svg",
    alt: "Mockup ilustrativo de um sistema de gestão sob medida",
    label: "Sistema sob medida",
  },
  {
    src: "/screenshots/site.svg",
    alt: "Mockup ilustrativo de um site institucional",
    label: "Site",
  },
] as const;

export const TRUST_POINTS = [
  {
    title: "Contato direto com quem constrói",
    description: "Você fala com a gente, os fundadores. Sem SAC terceirizado no meio do caminho.",
    icon: "UserCheck",
  },
  {
    title: "Ajuste incluso no suporte inicial",
    description: "Se algo não ficar do jeito certo, corrigimos sem custo extra durante o suporte.",
    icon: "Wrench",
  },
  {
    title: "Sem contrato de fidelidade",
    description: "Você contrata o projeto que precisa, quando precisa. Sem amarra de longo prazo.",
    icon: "Unlock",
  },
  {
    title: "Prazo e escopo por escrito",
    description: "Antes de começar, você recebe uma proposta clara com prazo e o que será entregue.",
    icon: "FileCheck",
  },
] as const;

export const FAQS = [
  {
    pergunta: "Quanto custa?",
    resposta:
      "Varia de acordo com o que você precisa (automação, sistema, dashboard ou site). Na conversa inicial pelo WhatsApp já te passamos uma ideia de valor, sem compromisso.",
  },
  {
    pergunta: "Quanto tempo demora?",
    resposta: "A entrega costuma sair em 3 a 7 dias úteis, dependendo da complexidade do projeto.",
  },
  {
    pergunta: "Preciso assinar contrato longo?",
    resposta: "Não. Você contrata o projeto que precisa, sem fidelidade forçada.",
  },
  {
    pergunta: "E se eu não gostar do resultado?",
    resposta: "Ajustamos o que for preciso durante o suporte inicial, até ficar do jeito que você precisa.",
  },
  {
    pergunta: "Funciona pro meu tipo de negócio?",
    resposta:
      "Atendemos qualquer segmento, de barbearia a escritório de advocacia. Se seu negócio tem atendimento, agenda ou processo repetitivo, provavelmente dá pra automatizar.",
  },
] as const;

export const BEFORE_AFTER = {
  before: {
    label: "Hoje",
    items: [
      "Atendimento manual, um por um",
      "Agenda bagunçada, choque de horário",
      "Sem site, cliente não te encontra",
      "Decisão no achismo, sem números",
    ],
  },
  after: {
    label: "Com a Vertion Stack",
    items: [
      "Atendimento automático 24h",
      "Agendamento organizado, sem retrabalho",
      "Site que traz cliente novo",
      "Painel com os números do negócio",
    ],
  },
};
