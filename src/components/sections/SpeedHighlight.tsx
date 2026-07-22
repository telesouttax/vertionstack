import { Sparkles } from "lucide-react";

export function SpeedHighlight() {
  return (
    <section className="relative overflow-hidden border-y border-primary/20 bg-surface py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/25 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-container items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-white/70">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Desenvolvimento assistido por IA
          </span>

          <h2 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl">
            Por que entregamos tão rápido
          </h2>

          <p className="mt-4 font-body text-lg text-white/70">
            A gente usa IA em cada etapa, do diagnóstico ao código, pra cortar o tempo que
            normalmente se perde entre a ideia e o projeto no ar, sem abrir mão de qualidade.
          </p>
        </div>

        <div className="text-center lg:text-right">
          <p className="bg-brand-gradient bg-clip-text font-heading text-6xl font-bold text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.35)] sm:text-7xl">
            3-7 dias úteis
          </p>
          <p className="mt-3 font-mono text-sm uppercase tracking-wide text-white/50">
            do diagnóstico à entrega
          </p>
        </div>
      </div>
    </section>
  );
}
