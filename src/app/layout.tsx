import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { GlowCursorProvider } from "@/components/ui/GlowCursorProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Vertion Stack: a camada de tecnologia que faltava no seu negócio";
const description =
  "Automação de atendimento, sistemas sob medida, dashboards e sites para pequenos e médios negócios de qualquer segmento. Entrega em 3 a 7 dias úteis.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    // TODO: adicionar imagem 1200x630 real em /public/og-image.png e referenciar aqui
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="font-body">
        <GlowCursorProvider />
        {children}
      </body>
    </html>
  );
}
