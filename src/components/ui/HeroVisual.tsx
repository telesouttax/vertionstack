import { ArrowUpRight, CalendarCheck2, Check, Clock3 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Alturas das barras do gráfico, em %. Só ilustração — não é dado real. */
const BARS = [38, 52, 44, 68, 58, 82, 96];
const DAYS = ["S", "T", "Q", "Q", "S", "S", "D"];

const KPIS = [
  { label: "Agendamentos", value: "24", trend: "+6" },
  { label: "Respostas automáticas", value: "137", trend: "+41" },
  { label: "Tempo economizado", value: "9h", trend: "semana" },
];

/**
 * Mockup de interface desenhado em HTML/CSS (sem imagem pesada): um painel
 * do negócio com a conversa automática do WhatsApp flutuando na frente.
 */
export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[34rem]">
      {/* Halo violeta atrás do painel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand-vivid/20 blur-[90px]"
      />

      {/* Janela do navegador */}
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
        <div className="flex items-center gap-3 border-b border-line bg-surface-raised px-4 py-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-300" />
          </span>
          <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center font-mono text-[0.625rem] text-ink-faint ring-1 ring-line">
            painel.seunegocio.com.br
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-label uppercase text-ink-faint">Esta semana</p>
              <p className="mt-1.5 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                Visão geral
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-widest text-brand ring-1 ring-violet-200">
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
                  <div className="flex h-24 w-full items-end">
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

          <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-3">
            <span className="flex items-center gap-2.5 text-sm font-medium text-white">
              <CalendarCheck2 className="h-4 w-4 text-violet-300" aria-hidden="true" />
              Próximo horário confirmado
            </span>
            <span className="nums font-mono text-xs text-white/60">14:30</span>
          </div>
        </div>
      </div>

      {/* Conversa do WhatsApp flutuando na frente do painel */}
      <div className="absolute -bottom-8 -left-4 w-[17rem] rounded-3xl border border-line bg-white p-4 shadow-lift motion-safe:animate-float sm:-left-12">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-ink">Cliente novo</p>
            <p className="flex items-center gap-1 font-mono text-[0.5625rem] uppercase tracking-wider text-ink-faint">
              <Clock3 className="h-2.5 w-2.5" aria-hidden="true" />
              23:41
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-surface-sunken px-3 py-2 text-xs leading-snug text-ink">
            Oi, dá pra marcar pra sexta?
          </p>
          <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-xs leading-snug text-white">
            Claro! Tenho 14h e 16h30. Qual fica melhor?
          </p>
          <p className="flex items-center justify-end gap-1 font-mono text-[0.5625rem] uppercase tracking-wider text-brand">
            <Check className="h-2.5 w-2.5" aria-hidden="true" />
            respondido em 2s
          </p>
        </div>
      </div>

      {/* Selo canto superior direito */}
      <div className="absolute -right-2 -top-5 hidden items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-card sm:flex">
        <ArrowUpRight className="h-4 w-4 text-brand" aria-hidden="true" />
        <span className="text-xs font-semibold text-ink">Sem plantão manual</span>
      </div>

      <p className="mt-12 text-center font-mono text-[0.625rem] uppercase tracking-widest text-ink-faint sm:mt-10">
        Exemplo ilustrativo de painel
      </p>
    </div>
  );
}
