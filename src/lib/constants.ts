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

// TODO: substituir por depoimentos reais assim que os primeiros projetos forem entregues.
// São ilustrativos de propósito (sem nome de cliente real) — ver aviso na seção Testimonials.
export const TESTIMONIALS = [
  {
    quote:
      "Antes eu perdia cliente porque não dava conta de responder todo mundo no WhatsApp. Agora o atendimento roda sozinho e eu só entro pra fechar.",
    role: "Dono de barbearia",
  },
  {
    quote:
      "A agenda parou de bagunçar. Cada horário cai certinho no sistema e ninguém mais marca em cima do outro.",
    role: "Gestora de clínica",
  },
  {
    quote:
      "O site trouxe cliente que nem sabia que a gente existia. Antes disso, era só indicação.",
    role: "Advogado autônomo",
  },
  {
    quote:
      "Consigo ver o mês inteiro num painel só. Antes era planilha espalhada e achismo pra tomar decisão.",
    role: "Dona de salão de beleza",
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
