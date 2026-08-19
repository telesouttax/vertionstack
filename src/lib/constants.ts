export const SITE_URL = "https://vertionstack.com";

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
  { label: "Na prática", href: "#na-pratica" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

// Fatos verificáveis sobre como trabalhamos. Nada de métrica inventada.
export const HERO_PROOF = [
  "Resposta no mesmo dia",
  "Prazo e escopo por escrito",
  "Sem fidelidade",
] as const;

export const STATS = [
  { value: "3–7", unit: "dias úteis", label: "Site ou landing page no ar" },
  { value: "24h", unit: "por dia", label: "Atendimento automático rodando" },
  { value: "2", unit: "fundadores", label: "Falando direto com você" },
  { value: "0", unit: "fidelidade", label: "Contrato por projeto, sem amarra" },
] as const;

export const BUSINESS_SEGMENTS = [
  { label: "Barbearias", icon: "Scissors" },
  { label: "Clínicas", icon: "Stethoscope" },
  { label: "Advocacia", icon: "Scale" },
  { label: "Lojas", icon: "Store" },
  { label: "Oficinas", icon: "Wrench" },
  { label: "Salões", icon: "Sparkles" },
  { label: "Restaurantes", icon: "UtensilsCrossed" },
  { label: "Contabilidade", icon: "Calculator" },
  { label: "Imobiliárias", icon: "Building2" },
  { label: "Academias", icon: "Dumbbell" },
  { label: "Pet shops", icon: "PawPrint" },
  { label: "Consultórios", icon: "HeartPulse" },
] as const;

export const SERVICES = [
  {
    id: "automacao",
    kicker: "01",
    title: "Automação de atendimento",
    description:
      "Seu WhatsApp responde, agenda e filtra cliente sozinho, inclusive de madrugada e no fim de semana.",
    bullets: ["Resposta automática 24h", "Agendamento sem conflito", "Lembrete antes do horário"],
    icon: "MessageSquareText",
    featured: true,
  },
  {
    id: "sistemas",
    kicker: "02",
    title: "Sistemas sob medida",
    description:
      "Feito em cima do processo que você já usa. Sem forçar seu negócio a caber num sistema pronto.",
    bullets: ["Do jeito que você trabalha", "Acesso por perfil", "Roda no celular e no PC"],
    icon: "LayoutGrid",
    featured: false,
  },
  {
    id: "dashboards",
    kicker: "03",
    title: "Dashboards",
    description:
      "Os números do negócio num painel só, atualizado sozinho, pra decidir sem depender de planilha.",
    bullets: ["Faturamento e agenda", "Atualização automática", "Abre no celular"],
    icon: "BarChart3",
    featured: false,
  },
  {
    id: "sites",
    kicker: "04",
    title: "Sites e landing pages",
    description:
      "Carrega rápido no celular, aparece no Google e dá confiança pro visitante te chamar no WhatsApp.",
    bullets: ["No ar em 3 a 7 dias", "Pronto pro Google", "Botão de WhatsApp direto"],
    icon: "Globe",
    featured: false,
  },
] as const;

export const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Conversa",
    duration: "15 minutos",
    description:
      "A gente entende o que trava seu dia hoje e diz na hora se dá pra resolver com tecnologia.",
  },
  {
    number: "02",
    title: "Proposta",
    duration: "até 48h",
    description: "Você recebe por escrito o que será feito, o prazo e o investimento. Sem letra miúda.",
  },
  {
    number: "03",
    title: "Construção",
    duration: "3 a 7 dias",
    description:
      "Desenvolvimento assistido por IA acelera a entrega, e você acompanha o andamento no WhatsApp.",
  },
  {
    number: "04",
    title: "Entrega e ajuste",
    duration: "suporte incluso",
    description: "Projeto no ar no prazo combinado. Se algo não ficou certo, a gente corrige.",
  },
] as const;

// Mockups ilustrativos de um negócio fictício, usados como exemplo de como fica
// cada entrega. Serão trocados por prints reais conforme os projetos entregues.
export const SHOWCASE_IMAGES = [
  {
    id: "dashboard",
    src: "/screenshots/dashboard.jpg",
    alt: "Exemplo de dashboard de uma barbearia, com previsão de faltas e lembretes automáticos",
    label: "Dashboard",
  },
  {
    id: "landing",
    src: "/screenshots/padaria.jpg",
    alt: "Exemplo de landing page de uma padaria, com catálogo de produtos",
    label: "Landing page",
  },
] as const;

export const TRUST_POINTS = [
  {
    title: "Você fala com quem constrói",
    description:
      "Somos dois fundadores no seu projeto. Nada de atendente terceirizado repassando recado.",
    icon: "UserCheck",
  },
  {
    title: "Ajuste incluso no suporte",
    description: "Se algo não ficou do jeito certo, a gente corrige sem cobrar de novo.",
    icon: "Wrench",
  },
  {
    title: "Sem contrato de fidelidade",
    description: "Você contrata o projeto que precisa, quando precisa. Sem amarra de 12 meses.",
    icon: "Unlock",
  },
  {
    title: "Prazo e escopo por escrito",
    description: "Antes de começar, você já sabe o que vem, quando vem e quanto custa.",
    icon: "FileCheck",
  },
] as const;

export const FAQS = [
  {
    pergunta: "Quanto custa?",
    resposta:
      "Depende do que você precisa: uma landing page é bem diferente de um sistema completo. Na primeira conversa pelo WhatsApp já te passamos uma faixa de valor, sem compromisso e sem enrolação.",
  },
  {
    pergunta: "Quanto tempo demora?",
    resposta:
      "Sites e landing pages saem em 3 a 7 dias úteis. Dashboards e automações variam conforme a complexidade, e o prazo exato vai por escrito na proposta, depois que entendermos sua necessidade.",
  },
  {
    pergunta: "Preciso entender de tecnologia?",
    resposta:
      "Não. A gente cuida da parte técnica e te entrega funcionando, com uma explicação em português de como usar no dia a dia.",
  },
  {
    pergunta: "Preciso assinar contrato longo?",
    resposta:
      "Não. Você contrata o projeto que precisa e pronto. Sem fidelidade e sem mensalidade obrigatória.",
  },
  {
    pergunta: "E se eu não gostar do resultado?",
    resposta:
      "A gente ajusta durante o suporte inicial, sem custo extra, até ficar do jeito que você precisa.",
  },
  {
    pergunta: "Funciona pro meu tipo de negócio?",
    resposta:
      "De barbearia a escritório de advocacia. Se o seu negócio tem atendimento, agenda ou alguma tarefa repetitiva, quase sempre dá pra automatizar.",
  },
  {
    pergunta: "Vocês atendem fora do Rio de Janeiro?",
    resposta:
      "Sim. Somos do Rio, mas trabalhamos com clientes de todo o Brasil. Tudo é feito remoto, pelo WhatsApp e por chamada.",
  },
] as const;

export const BEFORE_AFTER = {
  before: {
    label: "Como está hoje",
    items: [
      "Você responde cada cliente na mão, um por um",
      "Agenda no caderno ou na cabeça, com choque de horário",
      "Cliente procura no Google e não te acha",
      "Decisão no achismo, porque o número está espalhado",
      "Trabalho repetitivo comendo suas horas",
    ],
  },
  after: {
    label: "Como fica depois",
    items: [
      "Atendimento respondendo sozinho 24 horas",
      "Agendamento organizado, sem retrabalho",
      "Site que aparece e traz cliente novo",
      "Um painel com os números que importam",
      "Seu tempo de volta pro que dá dinheiro",
    ],
  },
} as const;
