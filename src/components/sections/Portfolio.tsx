import { Reveal } from "@/components/ui/Reveal";
import { SitePreview } from "@/components/ui/SitePreview";
import { PORTFOLIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Portfolio() {
  return (
    <section id="portfolio" className="section overflow-hidden bg-surface">
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

        <div className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
          {PORTFOLIO.map((projeto, indice) => {
            // Lado alternado: quebra o ritmo e evita a sensação de lista.
            const inverter = indice % 2 === 1;

            return (
              <Reveal key={projeto.id}>
                {/* Cada projeto num cartão fechado: sem a moldura, os cinco
                    viravam um bloco só de texto e prévia. */}
                <article className="rounded-panel border border-line bg-surface-raised p-5 transition-colors duration-300 sm:p-8 lg:p-10">
                  <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
                    {/* ── Texto ────────────────────────────────────────── */}
                    <div className={cn(inverter && "lg:order-2")}>
                      <div className="flex items-baseline gap-4">
                        <span className="nums font-mono text-label text-brand">
                          {String(indice + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-line-strong" aria-hidden="true" />
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
                            className="rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft"
                          >
                            {entrega}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ── Prévia navegável ─────────────────────────────── */}
                    <div className={cn(inverter && "lg:order-1")}>
                      <SitePreview url={projeto.url} nome={projeto.nome} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
