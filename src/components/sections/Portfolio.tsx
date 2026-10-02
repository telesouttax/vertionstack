import { Reveal } from "@/components/ui/Reveal";
import { SitePreview } from "@/components/ui/SitePreview";
import { PORTFOLIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Bloco escuro nos dois temas. É a única seção do site que mostra trabalho
 * entregue, e escurecer o fundo separa ela do resto da página — além de fazer
 * as prévias, que são sites claros, saltarem como janelas acesas.
 */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section relative overflow-hidden bg-surface-invert transition-colors duration-300"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-invert opacity-50" />
        <div
          style={{ "--aurora-cor": "rgba(149,0,255,0.26)" } as React.CSSProperties}
          className="aurora absolute -top-24 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2"
        />
      </div>

      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-white/50 before:bg-violet-400">Portfólio</span>
          <h2 className="h2 mt-5 text-balance text-white">
            Sites que já estão <span className="accent text-violet-300">no ar</span>.
          </h2>
          <p className="lede mt-5 max-w-xl text-pretty text-white/65">
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
                <article className="rounded-panel border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-8 lg:p-10">
                  <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
                    {/* ── Texto ────────────────────────────────────────── */}
                    <div className={cn(inverter && "lg:order-2")}>
                      <div className="flex items-baseline gap-4">
                        <span className="nums font-mono text-label text-violet-300">
                          {String(indice + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
                      </div>

                      <h3 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[2rem]">
                        {projeto.nome}
                      </h3>
                      <p className="mt-1.5 font-mono text-label uppercase text-white/50">
                        {projeto.segmento}
                      </p>

                      <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/65">
                        {projeto.descricao}
                      </p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {projeto.entregas.map((entrega) => (
                          <li
                            key={entrega}
                            className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/75"
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
