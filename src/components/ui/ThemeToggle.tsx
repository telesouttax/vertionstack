"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const CHAVE_TEMA = "vertion-tema";

type Tema = "claro" | "escuro";

/**
 * Chave de tema claro/escuro.
 *
 * Quem aplica o tema na primeira pintura é o script inline do layout, não
 * este componente — se fosse aqui, a página piscaria branca antes de escurecer.
 * Aqui só lemos o que já está no <html> e trocamos a partir disso.
 */
type ThemeToggleProps = {
  className?: string;
  /** No menu do celular ele vira uma linha com texto, não um ícone solto. */
  comRotulo?: boolean;
};

export function ThemeToggle({ className, comRotulo = false }: ThemeToggleProps) {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    const atual = document.documentElement.getAttribute("data-tema");
    setTema(atual === "escuro" ? "escuro" : "claro");
  }, []);

  function alternar() {
    const proximo: Tema = tema === "escuro" ? "claro" : "escuro";
    setTema(proximo);
    document.documentElement.setAttribute("data-tema", proximo);
    try {
      localStorage.setItem(CHAVE_TEMA, proximo);
    } catch {
      // Navegação anônima com armazenamento bloqueado: o tema vale só
      // enquanto a aba estiver aberta, e tudo bem.
    }
  }

  const escuro = tema === "escuro";

  const icones = (
    <>
      {/* Os dois ícones ficam montados e só trocam de opacidade: assim a
          transição é suave e o botão não "pula" de tamanho. */}
      <Sun
        aria-hidden="true"
        className={cn(
          "absolute h-[1.125rem] w-[1.125rem] transition-all duration-300",
          escuro ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0",
        )}
      />
      <Moon
        aria-hidden="true"
        className={cn(
          "absolute h-[1.125rem] w-[1.125rem] transition-all duration-300",
          escuro ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
    </>
  );

  if (comRotulo) {
    return (
      <button
        type="button"
        onClick={alternar}
        aria-pressed={escuro}
        className={cn(
          "flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 font-body text-base font-medium text-ink outline-none transition-colors duration-200 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand",
          className,
        )}
      >
        {escuro ? "Tema claro" : "Tema escuro"}
        <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-soft">
          {icones}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={alternar}
      // Antes do efeito rodar não sabemos o tema; o rótulo fica neutro para
      // não anunciar a coisa errada a quem usa leitor de tela.
      aria-label={tema === null ? "Alternar tema" : escuro ? "Usar tema claro" : "Usar tema escuro"}
      title={escuro ? "Tema claro" : "Tema escuro"}
      className={cn(
        "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-line text-ink-soft outline-none transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      {icones}
    </button>
  );
}
