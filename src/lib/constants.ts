export const SITE_URL = "https://vertionstack.com";

// Só os dígitos, com DDI. O formulário monta o link com a mensagem já escrita.
export const WHATSAPP_NUMBER = "5521984684009";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_CONTACTS = [{ name: "Vertion Stack", url: WHATSAPP_URL }] as const;

export const INSTAGRAM_URL = "https://instagram.com/vertionstack";

export const CONTACT_EMAIL = "vertionstack@gmail.com";

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

// Fatos verificáveis sobre como trabalhamos. Nada de métrica inventada.
export const HERO_PROOF = [
  "Resposta no mesmo dia",
  "Prazo e escopo por escrito",
  "Sem fidelidade",
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
    id: "automacoes",
    kicker: "01",
    title: "Automação de processos",
    description:
      "Aquela tarefa que alguém refaz na mão toda semana passa a rodar sozinha, ligando os sistemas que você já usa.",
    bullets: ["Seus sistemas conversando", "Tarefa repetitiva no automático", "Relatório que chega pronto"],
    icon: "Workflow",
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
    title: "Sites, landing pages e blog",
    description:
      "Carrega rápido no celular, aparece no Google e dá confiança pro visitante te chamar no WhatsApp.",
    bullets: ["No ar em 3 a 7 dias", "Blog pra aparecer na busca", "Botão de WhatsApp direto"],
    icon: "Globe",
    featured: false,
  },
] as const;

// Opções do formulário de contato. Ficam em etiquetas curtas porque viram
// texto dentro da mensagem do WhatsApp, não título de seção.
export const LEAD_NEEDS = [
  "Automação de processos",
  "Sistema sob medida",
  "Dashboard",
  "Site, landing page ou blog",
  "Ainda não sei",
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

/**
 * Portfólio: sites que a Vertion entregou de verdade, cada um no ar e
 * navegável dentro do próprio site. Nada de mockup ilustrativo aqui — o
 * visitante clica e usa a página real.
 *
 * `url` é o endereço que o preview carrega. Se um dia um deles sair do ar ou
 * passar a recusar iframe, o container continua funcionando: o preview some e
 * sobra o link pra abrir em aba nova.
 */
export const PORTFOLIO = [
  {
    id: "rb-sheeny",
    nome: "RB Sheeny",
    segmento: "Construtora · Rio de Janeiro",
    url: "https://rb-sheeby.vercel.app",
    repo: "https://github.com/vertionstack-art/RB-Sheeby",
    descricao:
      "Constrói stands de venda e apartamentos decorados para lançamentos, desde 1988. O site organiza os projetos entregues por tipo e por incorporadora, com filtro, e cada projeto abre uma conversa no WhatsApp já dizendo qual é.",
    entregas: ["Site institucional", "Portfólio com filtro", "Contato por projeto"],
  },
  {
    id: "aguia",
    nome: "Águia Empreendimentos",
    segmento: "Imobiliária · Gurupi, TO",
    url: "https://aguiaimoveisgpi.vercel.app",
    repo: "https://github.com/vertionstack-art/aguiaimoveisgpi",
    descricao:
      "Imobiliária com CRECI próprio no Tocantins. Cada imóvel tem ficha com metragem, quartos, vagas e valor, e o botão de interesse já leva pro WhatsApp identificando o imóvel.",
    entregas: ["Catálogo de imóveis", "Ficha por unidade", "Interesse direto"],
  },
  {
    id: "tower-glass",
    nome: "Tower Glass",
    segmento: "Pizzaria · Cassino, RS",
    url: "https://tower-glass-7xjf.vercel.app",
    repo: "https://github.com/vertionstack-art/tower-glass",
    descricao:
      "Pizzaria de rodízio e delivery no balneário do Cassino. A pessoa escolhe o sabor no cardápio e a mensagem chega pronta no WhatsApp da casa, sem ela precisar digitar nada.",
    entregas: ["Cardápio digital", "Pedido pelo WhatsApp", "Rodízio e delivery"],
  },
  {
    id: "joaquina",
    nome: "Joaquina",
    segmento: "Bar e restaurante · Botafogo, RJ",
    // A raiz do projeto ainda nao tem index.html, entao o endereco que
    // funciona e o arquivo direto.
    url: "https://joaquina-beta.vercel.app/Joaquina.dc.html",
    repo: "https://github.com/vertionstack-art/joaquina",
    descricao:
      "Bar e restaurante em Botafogo. Cardápio, horário, área de entrega e endereço numa página só, com o pedido saindo direto pro WhatsApp.",
    entregas: ["Cardápio digital", "Pedido pelo WhatsApp", "Entrega e endereço"],
  },
  {
    id: "marcos",
    nome: "Restaurante Marcos",
    segmento: "Restaurante · Rio Grande, RS",
    url: "https://restaurante-maros.vercel.app",
    repo: "https://github.com/vertionstack-art/restaurante-maros",
    descricao:
      "Restaurante no centro de Rio Grande. Cardápio separado por categoria, galeria do ambiente e o endereço no mapa, com o contato da casa à mão em qualquer ponto da página.",
    entregas: ["Cardápio por categoria", "Galeria do ambiente", "Como chegar"],
  },
] as const;

export const TRUST_POINTS = [
  {
    title: "Você fala com quem constrói",
    description:
      "Quem atende é quem coloca a mão no código. Nada de atendente terceirizado repassando recado.",
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
      "Sites, landing pages e blogs saem em 3 a 7 dias úteis. Automações, dashboards e sistemas variam conforme a complexidade, e o prazo exato vai por escrito na proposta, depois que entendermos sua necessidade.",
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
      "De barbearia a escritório de advocacia. Se o seu negócio tem tarefa repetitiva, agenda ou controle pra organizar, quase sempre dá pra melhorar com tecnologia.",
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
      "A mesma tarefa refeita na mão toda semana",
      "Agenda no caderno ou na cabeça, com choque de horário",
      "Cliente procura no Google e não te acha",
      "Decisão no achismo, porque o número está espalhado",
      "Um sistema que não conversa com o outro",
    ],
  },
  after: {
    label: "Como fica depois",
    items: [
      "Processo rodando sozinho, sem retrabalho",
      "Agendamento organizado, sem choque de horário",
      "Site que aparece e traz cliente novo",
      "Um painel com os números que importam",
      "Seu tempo de volta pro que dá dinheiro",
    ],
  },
} as const;
