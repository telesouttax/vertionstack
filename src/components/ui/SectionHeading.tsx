import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Cabeçalho padrão de seção: etiqueta mono, título display e linha de apoio. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "max-w-2xl items-start text-left",
        className
      )}
    >
      <span className={cn("eyebrow", tone === "light" && "text-white/55")}>{eyebrow}</span>
      <h2 className={cn("h2 mt-5 text-balance", tone === "light" && "text-white")}>{title}</h2>
      {description && (
        <p className={cn("lede mt-5 text-pretty", tone === "light" && "text-white/60")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
