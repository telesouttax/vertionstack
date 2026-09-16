"use client";
import { useId, useState, type ReactNode } from "react";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Botões circulares de contato: ao passar o mouse, o ícone sobe e sai, uma
 * seta entra por baixo, o anel acende e os vizinhos ganham um arco de luz.
 *
 * Baseado em "Social Icon Buttons" do MicroKit UI (henriquegpb, microkit.co),
 * recolorido para a paleta da Vertion — o original nasceu para fundo escuro
 * e com as cores de cada rede social.
 */

type Tone = "light" | "dark";

type Social = {
  label: string;
  href: string;
  external: boolean;
  icon: ReactNode;
};

const SOCIALS: Social[] = [
  {
    label: "Falar no WhatsApp",
    href: WHATSAPP_URL,
    external: true,
    icon: <WhatsAppIcon className="h-[18px] w-[18px]" />,
  },
  {
    label: `Enviar e-mail para ${CONTACT_EMAIL}`,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
    icon: <Mail className="h-[18px] w-[18px]" aria-hidden="true" />,
  },
  {
    label: "Instagram da Vertion Stack",
    href: INSTAGRAM_URL,
    external: true,
    icon: <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />,
  },
];

/** Roxo da marca: acende o anel, o brilho e a seta. */
const BRAND = "#7A16E0";

const toneStyles: Record<Tone, { button: string; icon: string; ring: string }> = {
  light: {
    button: "bg-white shadow-card",
    icon: "text-ink",
    ring: "stroke-[#D5CFE5]",
  },
  dark: {
    button: "bg-white/[0.06]",
    icon: "text-white/85",
    ring: "stroke-[rgba(255,255,255,0.18)]",
  },
};

/**
 * Anel do botão. Desenhado em SVG (e não com border) porque o arco de luz que
 * aparece nos vizinhos precisa de gradiente ao longo da curva.
 */
function SocialButtonBorder({
  side,
  ringClass,
}: {
  side: "" | "left" | "right";
  ringClass: string;
}) {
  // useId evita que dois botões na mesma página compartilhem o mesmo gradiente.
  const gradientId = useId().replaceAll(":", "");
  const fillGradientId = `${gradientId}-fill`;

  const path =
    side === "left"
      ? "M10.6 2.14A17.5 17.5 0 0 0 10.6 33.86"
      : "M25.4 2.14A17.5 17.5 0 0 1 25.4 33.86";
  const fillCenter = side === "left" ? "0" : "36";
  const neighborClass = side
    ? "opacity-100 motion-safe:animate-social-neighbor"
    : "opacity-0";

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 36 36"
      aria-hidden="true"
      style={{ color: BRAND }}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="2.14"
          x2="0"
          y2="33.86"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset=".28" stopColor="currentColor" stopOpacity=".2" />
          <stop offset=".5" stopColor="currentColor" stopOpacity=".86" />
          <stop offset=".72" stopColor="currentColor" stopOpacity=".2" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id={fillGradientId}
          cx={fillCenter}
          cy="18"
          r="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity=".16" />
          <stop offset=".42" stopColor="currentColor" stopOpacity=".07" />
          <stop offset=".82" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Brilho que vaza para o botão vizinho */}
      <circle className={neighborClass} cx="18" cy="18" r="17" fill={`url(#${fillGradientId})`} />

      {/* Anel: cinza em repouso, roxo no hover */}
      <circle
        className={cn(
          "fill-none stroke-[1px] transition-[stroke] duration-200 group-hover:stroke-current group-focus-visible:stroke-current motion-reduce:transition-none",
          ringClass
        )}
        cx="18"
        cy="18"
        r="17.5"
      />

      {/* Arco de luz na borda voltada para o botão ativo */}
      <path
        className={cn("fill-none stroke-[1px] [stroke-linecap:round]", neighborClass)}
        d={path}
        stroke={`url(#${gradientId})`}
      />
    </svg>
  );
}

export function SocialIconButtons({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const styles = toneStyles[tone];

  return (
    <ul
      className={cn("flex items-center gap-2.5", className)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      {SOCIALS.map((social, index) => {
        // O vizinho imediato do botão ativo acende no lado virado para ele.
        const adjacentSide =
          activeIndex < 0 || Math.abs(index - activeIndex) !== 1
            ? ""
            : index < activeIndex
              ? "right"
              : "left";

        return (
          <li key={social.href}>
            <a
              href={social.href}
              title={social.label}
              aria-label={social.label}
              {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{ color: BRAND }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(-1)}
              className={cn(
                "group relative grid h-[42px] w-[42px] cursor-pointer place-items-center overflow-hidden rounded-full no-underline transition-shadow duration-300",
                "hover:shadow-[0_0_18px_color-mix(in_srgb,currentColor_38%,transparent)]",
                "focus-visible:shadow-[0_0_18px_color-mix(in_srgb,currentColor_38%,transparent)]",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
                styles.button
              )}
            >
              <SocialButtonBorder side={adjacentSide} ringClass={styles.ring} />

              {/* Ícone: sai para cima no hover */}
              <span
                className={cn(
                  "grid place-items-center transition-transform duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-[260%] group-focus-visible:-translate-y-[260%] motion-reduce:transition-none",
                  styles.icon
                )}
              >
                {social.icon}
              </span>

              {/* Seta: entra por baixo, no roxo da marca */}
              <span className="absolute grid translate-y-[260%] place-items-center transition-transform duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none">
                <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
