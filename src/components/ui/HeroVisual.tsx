import { ArrowUpRight, Check, Workflow } from "lucide-react";

/** Alturas das barras do gráfico, em %. Só ilustração — não é dado real. */
const BARS = [38, 52, 44, 68, 58, 82, 96];
const DAYS = ["S", "T", "Q", "Q", "S", "S", "D"];

const KPIS = [
  { label: "Pedidos no mês", value: "24", trend: "+6" },
  { label: "Tarefas no automático", value: "137", trend: "+41" },
  { label: "Tempo economizado", value: "9h", trend: "semana" },
];

/** Os passos do fluxo ilustrado no rodapé do painel. */
const FLUXO = ["Chega o pedido pelo site", "Lança no sistema", "Avisa a equipe"];

/**
 * Mockup de interface desenhado em HTML/CSS (sem imagem pesada): o painel do
 * negócio, com um fluxo automatizado como bloco de baixo.
 *
 * Esse bloco já foi uma conversa de WhatsApp solta por cima do painel. Cobria
 * o conteúdo atrás e lia como coisa jogada ali — e ainda prometia atendimento
 * automático, que a Vertion não faz. Agora é uma seção do painel, e só a
 * borda inferior passa do quadro: profundidade sem esconder nada.
 */
export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[34rem]">
      {/* Halo violeta atrás do painel */}
      <div
        aria-hidden="true"
        style={{ "--aurora-cor": "rgba(149,0,255,0.26)" } as React.CSSProperties}
        className="pointer-events-none absolute -inset-20 -z-10 aurora"
      />

      {/* Janela do navegador. Sem overflow-hidden: é o que deixa a conversa
          atravessar a borda de baixo. Por isso a barra de cima arredonda
          sozinha, em vez de ser recortada pelo pai. */}
      <div className="rounded-3xl border border-line bg-surface shadow-lift">
        <div className="flex items-center gap-3 rounded-t-3xl border-b border-line bg-surface-raised px-4 py-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-300" />
          </span>
          <span className="flex-1 truncate rounded-md bg-surface px-3 py-1 text-center font-mono text-[0.625rem] text-ink-faint ring-1 ring-line">
            painel.seunegocio.com.br
          </span>
        </div>

        <div className="px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-label uppercase text-ink-faint">Esta semana</p>
              <p className="mt-1.5 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                Visão geral
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft/55 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-widest text-brand ring-1 ring-brand/30">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-vivid motion-safe:animate-pulse" />
              ao vivo
            </span>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-2.5">
            {KPIS.map((kpi, i) => (
              <div
                key={kpi.label}
                style={{ animationDelay: `${300 + i * 90}ms` }}
                className="rounded-2xl border border-line bg-surface-raised p-3 motion-safe:animate-fade-up"
              >
                <dt className="truncate text-[0.6875rem] leading-tight text-ink-faint">
                  {kpi.label}
                </dt>
                <dd className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="nums font-display text-xl font-bold tracking-[-0.02em] text-ink">
                    {kpi.value}
                  </span>
                  <span className="nums text-[0.625rem] font-semibold text-brand">{kpi.trend}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 rounded-2xl border border-line p-4">
            <div className="flex items-end justify-between gap-2" aria-hidden="true">
              {BARS.map((height, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-20 w-full items-end">
                    <div
                      style={{ height: `${height}%`, animationDelay: `${450 + i * 70}ms` }}
                      className="w-full origin-bottom rounded-md bg-brand-sheen opacity-90 motion-safe:animate-grow-y"
                    />
                  </div>
                  <span className="font-mono text-[0.5625rem] text-ink-faint">{DAYS[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fluxo: seção do painel, não cartão solto. O -mb negativo faz ela
            passar da borda de baixo, que é de onde vem a profundidade. */}
        <div className="relative z-10 -mb-10 mt-4 px-5 pb-0 sm:-mb-12 sm:px-6">
          <div className="rounded-2xl border border-line bg-surface p-4 shadow-lift">
            <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-surface">
                  <Workflow className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-ink">Pedido novo pelo site</p>
                  <p className="font-mono text-[0.5625rem] uppercase tracking-wider text-ink-faint">
                    3 passos · sem ninguém no meio
                  </p>
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-1 font-mono text-[0.5625rem] uppercase tracking-wider text-brand">
                <Check className="h-2.5 w-2.5" aria-hidden="true" />
                no ar
              </span>
            </div>

            <ol className="mt-3 space-y-2">
              {FLUXO.map((passo, i) => (
                <li
                  key={passo}
                  style={{ animationDelay: `${700 + i * 120}ms` }}
                  className="flex items-center gap-2.5 rounded-xl bg-surface-sunken px-3 py-2 text-xs leading-snug text-ink motion-safe:animate-fade-up"
                >
                  <span className="nums flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[0.625rem] font-bold text-white dark:text-carbon-900">
                    {i + 1}
                  </span>
                  {passo}
                  <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Selo canto superior direito: sobra do painel, mas não cobre texto. */}
      <div className="absolute -right-2 -top-5 hidden items-center gap-2 rounded-2xl border border-line bg-surface px-3.5 py-2.5 shadow-card sm:flex">
        <ArrowUpRight className="h-4 w-4 text-brand" aria-hidden="true" />
        <span className="text-xs font-semibold text-ink">Sem trabalho repetido</span>
      </div>

      {/* mt generoso: a conversa desce além do painel e a legenda não pode
          encostar nela. */}
      <p className="mt-16 text-center font-mono text-[0.625rem] uppercase tracking-widest text-ink-faint sm:mt-[4.5rem]">
        Exemplo ilustrativo de painel
      </p>
    </div>
  );
}
