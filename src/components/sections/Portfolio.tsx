import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SitePreview } from "@/components/ui/SitePreview";
import { PORTFOLIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Portfolio() {
  return (
    <section id="portfolio" className="section overflow-hidden bg-white">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Portfólio</span>
          <h2 className="h2 mt-5 text-balance">
            Sites que já estão <span className="accent">no ar</span>.
          </h2>
          <p className="lede mt-5 max-w-xl text-pretty">
            Nada de imagem de exemplo: cada prévia aqui embaixo é o site de verdade. Clique em
            qualquer uma pra abrir em tela cheia e navegar como um visitante navegaria.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:space-y-24">
          {PORTFOLIO.map((projeto, indice) => {
            // Lado alternado: quebra o ritmo e evita a sensação de lista.
            const inverter = indice % 2 === 1;

            return (
              <Reveal
                key={projeto.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* ── Texto ──────────────────────────────────────────── */}
                <div className={cn(inverter && "lg:order-2")}>
                  <div className="flex items-baseline gap-4">
                    <span className="nums font-mono text-label text-brand">
                      {String(indice + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2rem]">
                    {projeto.nome}
                  </h3>
                  <p className="mt-1.5 font-mono text-label uppercase text-ink-faint">
                    {projeto.segmento}
                  </p>

                  <p className="mt-5 max-w-lg text-pretty leading-relaxed text-ink-soft">
                    {projeto.descricao}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {projeto.entregas.map((entrega) => (
                      <li
                        key={entrega}
                        className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm font-medium text-ink-soft"
                      >
                        {entrega}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={projeto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-sm font-semibold text-brand outline-none transition-colors duration-200 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      Abrir o site
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href={projeto.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-sm font-medium text-ink-faint outline-none transition-colors duration-200 hover:text-ink focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Código
                    </a>
                  </div>
                </div>

                {/* ── Prévia navegável ───────────────────────────────── */}
                <div className={cn(inverter && "lg:order-1")}>
                  <SitePreview url={projeto.url} nome={projeto.nome} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
