import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GlowCursorProvider } from "@/components/ui/GlowCursorProvider";
import { SITE_URL, CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_CONTACTS } from "@/lib/constants";
import "./globals.css";

/* Display com personalidade (grotesk de contraste alto) para títulos. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  // Pesos fixos em vez do arquivo variavel inteiro: o navegador baixa so o
  // que o site usa, e sao os unicos pesos aplicados em titulo.
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

/* Corpo geométrico e legível — segura texto longo em português sem cansar. */
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/* Serifa itálica: só nas palavras de destaque dos títulos. É a assinatura visual. */
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

/* Mono para etiquetas, números e códigos de seção. */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Vertion Stack — tecnologia sob medida para o seu negócio";
const description =
  "Organização do atendimento no WhatsApp, sistemas sob medida, dashboards e sites para pequenos e médios negócios. Site ou landing page no ar em 3 a 7 dias úteis, com prazo e escopo por escrito.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s · Vertion Stack",
  },
  description,
  keywords: [
    "organização de atendimento",
    "whatsapp business para empresas",
    "sistema sob medida",
    "dashboard para pequenas empresas",
    "criação de sites",
    "landing page",
    "Rio de Janeiro",
  ],
  authors: [{ name: "Vertion Stack" }],
  creator: "Vertion Stack",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Vertion Stack",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vertion Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0B14" },
  ],
  colorScheme: "light dark",
};

/**
 * Roda antes da primeira pintura, direto no <head>. Se ficasse num componente
 * React, a página apareceria branca e só depois escureceria — aquele flash que
 * denuncia tema mal feito.
 *
 * O padrão é claro mesmo em quem usa o sistema no escuro: a marca é de fundo
 * branco, e quem preferir escuro troca no botão. A escolha fica salva.
 */
const scriptDoTema = `
try {
  var t = localStorage.getItem("vertion-tema");
  document.documentElement.setAttribute("data-tema", t === "escuro" ? "escuro" : "claro");
} catch (e) {
  document.documentElement.setAttribute("data-tema", "claro");
}
`.trim();

/* Dados estruturados: ajuda o Google a entender que é uma empresa local de tecnologia. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vertion Stack",
  description,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+55 21 98468-4009",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: [INSTAGRAM_URL, ...WHATSAPP_CONTACTS.map((c) => c.url)],
  knowsAbout: [
    "Organização do atendimento",
    "Sistemas sob medida",
    "Dashboards",
    "Sites e landing pages",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptDoTema }} />
      </head>
      <body className="bg-surface font-body text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only rounded-xl focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-surface"
        >
          Pular para o conteúdo
        </a>
        <GlowCursorProvider />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
