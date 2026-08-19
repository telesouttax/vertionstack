import { Sparkles } from "lucide-react";
import { STATS } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function SpeedHighlight() {
  return (
    <section className="relative overflow-hidden bg-surface-invert py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-invert opacity-60" />
        <div className="absolute -right-20 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-vivid/25 blur-[140px]" />
        <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-violet-700/30 blur-[130px]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-label uppercase text-white/70 backdrop-blur">
              <Sparkles className="h-3 w-3 text-violet-300" aria-hidden="true" />
              Desenvolvimento assistido por IA
            </span>

            <h2 className="h2 mt-6 text-balance text-white">
              Por que a gente entrega <span className="accent text-violet-300">rápido</span>.
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-white/60">
              Usamos IA em cada etapa, do diagnóstico ao código. Isso corta o tempo morto entre a
              ideia e o projeto no ar. O que não muda é quem revisa: nós dois, linha por linha.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="lg:text-right">
            <p className="nums bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text font-display font-bold leading-[0.85] tracking-[-0.05em] text-transparent [font-size:clamp(3.5rem,2rem+7vw,7rem)]">
              3–7 dias
            </p>
            <p className="mt-4 font-mono text-label uppercase text-violet-300">
              úteis para sites e landing pages
            </p>
            <p className="mt-3 text-sm text-white/60 lg:ml-auto lg:max-w-sm">
              Dashboards, sistemas e automações têm prazo próprio, sempre combinado por escrito
              antes de começar.
            </p>
          </Reveal>
        </div>

        {/* Números honestos sobre como trabalhamos */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:mt-20 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.07}
              className="bg-surface-invert p-6 sm:p-8"
            >
              <dd className="flex items-baseline gap-1.5">
                <span className="nums font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-wider text-violet-300">
                  {stat.unit}
                </span>
              </dd>
              <dt className="mt-3 text-sm leading-snug text-white/60">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
