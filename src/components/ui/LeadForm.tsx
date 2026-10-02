"use client";

import { FormEvent, useState } from "react";
import { Check, Copy, PenLine } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { LEAD_NEEDS, WHATSAPP_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Dados = {
  nome: string;
  negocio: string;
  necessidades: string[];
  contexto: string;
};

/**
 * Monta a mensagem que o lead vai enviar. Os asteriscos são o negrito do
 * WhatsApp — deixam o recado escaneável na tela do celular.
 */
function montarMensagem({ nome, negocio, necessidades, contexto }: Dados) {
  const linhas = [
    "Olá! Vim pelo site da Vertion Stack.",
    "",
    `*Nome:* ${nome.trim()}`,
    `*Negócio:* ${negocio.trim()}`,
  ];

  if (necessidades.length > 0) {
    linhas.push(`*Preciso de:* ${necessidades.join(", ")}`);
  }

  if (contexto.trim()) {
    linhas.push("", "*O que trava hoje:*", contexto.trim());
  }

  return linhas.join("\n");
}

const campo =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint/70 focus:border-brand focus:ring-2 focus:ring-brand/20";

// leading-[1.6]: text-label tem line-height 1, e no celular esses rótulos
// quebram em duas linhas — sem isso uma encosta na outra.
const rotulo = "mb-2 block font-mono text-label uppercase leading-[1.6] text-ink-faint";

const acaoPrincipal =
  "group relative flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-6 py-3.5 font-body text-base font-semibold text-white shadow-brand outline-none transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet-700 dark:hover:bg-violet-300 hover:shadow-brand-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-y-0";

export function LeadForm() {
  const [necessidades, setNecessidades] = useState<string[]>([]);
  const [enviado, setEnviado] = useState<{ texto: string; link: string } | null>(null);
  const [copiado, setCopiado] = useState(false);

  function alternar(item: string) {
    setNecessidades((atual) =>
      atual.includes(item)
        ? atual.filter((n) => n !== item)
        : // Mantém a ordem da lista, não a ordem dos cliques: a mensagem
          // que chega no WhatsApp fica sempre igual.
          LEAD_NEEDS.filter((n) => n === item || atual.includes(n)),
    );
  }

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const dados = new FormData(evento.currentTarget);
    const texto = montarMensagem({
      nome: String(dados.get("nome") ?? ""),
      negocio: String(dados.get("negocio") ?? ""),
      necessidades,
      contexto: String(dados.get("contexto") ?? ""),
    });
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    setEnviado({ texto, link });
    setCopiado(false);

    // Aba nova mantém o site aberto atrás. Alguns navegadores de celular
    // bloqueiam pop-up mesmo vindo de clique — aí navega na mesma aba.
    const aba = window.open(link, "_blank", "noopener,noreferrer");
    if (!aba) window.location.href = link;
  }

  async function copiar() {
    if (!enviado) return;
    try {
      await navigator.clipboard.writeText(enviado.texto);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2400);
    } catch {
      // Sem permissão de área de transferência: o texto segue visível na tela
      // pra pessoa selecionar na mão.
    }
  }

  if (enviado) {
    return (
      <div className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <Check className="h-6 w-6 text-brand" aria-hidden="true" />
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.01em] text-ink">
          Falta só apertar enviar
        </h3>
        <p className="mt-2.5 text-pretty leading-relaxed text-ink-soft">
          Abrimos o WhatsApp com sua mensagem já escrita. Confere e toca no botão de enviar — é
          lá que a conversa começa.
        </p>

        {/* Na prévia os asteriscos saem — eles só existem pra virar negrito
            dentro do WhatsApp. O texto copiado continua com eles. */}
        <pre className="mt-5 max-h-44 overflow-auto whitespace-pre-wrap rounded-2xl bg-surface-raised p-4 font-body text-sm leading-relaxed text-ink-soft">
          {enviado.texto.replace(/\*/g, "")}
        </pre>

        <div className="mt-5 flex flex-col gap-3">
          <a
            href={enviado.link}
            target="_blank"
            rel="noopener noreferrer"
            className={acaoPrincipal}
          >
            <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
            Não abriu? Abrir o WhatsApp
          </a>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={copiar}
              className="inline-flex min-h-[44px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-4 py-2.5 text-sm font-semibold text-ink outline-none transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand"
            >
              {copiado ? (
                <Check className="h-4 w-4 text-brand" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copiado ? "Copiado" : "Copiar mensagem"}
            </button>

            <button
              type="button"
              onClick={() => setEnviado(null)}
              className="inline-flex min-h-[44px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-4 py-2.5 text-sm font-semibold text-ink outline-none transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand"
            >
              <PenLine className="h-4 w-4" aria-hidden="true" />
              Corrigir alguma coisa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="lead-nome" className={rotulo}>
            Seu nome
          </label>
          <input
            id="lead-nome"
            name="nome"
            type="text"
            required
            maxLength={60}
            autoComplete="name"
            placeholder="Como a gente te chama?"
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="lead-negocio" className={rotulo}>
            Seu negócio
          </label>
          <input
            id="lead-negocio"
            name="negocio"
            type="text"
            required
            maxLength={80}
            placeholder="Ex.: barbearia no Méier"
            className={campo}
          />
        </div>

        <fieldset>
          <legend className={rotulo}>
            O que você precisa <span className="normal-case tracking-normal">(pode marcar mais de um)</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {LEAD_NEEDS.map((item) => {
              const marcado = necessidades.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={marcado}
                  onClick={() => alternar(item)}
                  className={cn(
                    "inline-flex min-h-[42px] cursor-pointer items-center rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                    marcado
                      ? "border-brand bg-brand text-white dark:text-carbon-900"
                      : "border-line-strong bg-surface text-ink-soft hover:border-brand hover:text-brand",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="lead-contexto" className={rotulo}>
            O que trava seu dia hoje{" "}
            <span className="normal-case tracking-normal">(opcional)</span>
          </label>
          <textarea
            id="lead-contexto"
            name="contexto"
            rows={3}
            maxLength={600}
            placeholder="Conta rapidinho o que mais te toma tempo hoje."
            className={cn(campo, "resize-y")}
          />
        </div>
      </div>

      <button type="submit" className={cn(acaoPrincipal, "mt-7")}>
        {/* Brilho diagonal: o mesmo do botão principal do site. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
        />
        <span className="relative inline-flex items-center gap-2">
          <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
          Enviar no WhatsApp
        </span>
      </button>

      <p className="mt-4 text-center text-sm leading-relaxed text-ink-faint">
        Abre o WhatsApp com a mensagem pronta. O site não guarda nada do que você escreveu.
      </p>
    </form>
  );
}
