import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GlowCursorProvider } from "@/components/ui/GlowCursorProvider";
import { SITE_URL, CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_CONTACTS } from "@/lib/constants";
import "./globals.css";

/* Display com personalidade (grotesk de contraste alto) para títulos. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* Corpo geométrico e legível — segura texto longo em português sem cansar. */
const body = Manrope({
  subsets: ["latin"],
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
  variable: "--font-mono",
  display: "swap",
});

const title = "Vertion Stack — tecnologia sob medida para o seu negócio";
const description =
  "Automação de atendimento no WhatsApp, sistemas sob medida, dashboards e sites para pequenos e médios negócios. Site ou landing page no ar em 3 a 7 dias úteis, com prazo e escopo por escrito.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s · Vertion Stack",
  },
  description,
  keywords: [
    "automação de atendimento",
    "automação WhatsApp",
    "sistema sob medida",
    "dashboard para pequenas empresas",
    "criação de sites",
    "landing page",
    "Rio de Janeiro",
  ],
  authors: [{ name: "Vertion Stack" }],
  creator: "Vertion Stack",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
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
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

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
  telephone: "+55 21 96019-4636",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: [INSTAGRAM_URL, ...WHATSAPP_CONTACTS.map((c) => c.url)],
  knowsAbout: [
    "Automação de atendimento",
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
    >
      <body className="bg-white font-body text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only rounded-xl focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
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
