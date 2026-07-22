import { FileCheck, UserCheck, Unlock, Wrench, type LucideIcon } from "lucide-react";
import { TRUST_POINTS } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

const ICONS: Record<string, LucideIcon> = {
  UserCheck,
  Wrench,
  Unlock,
  FileCheck,
};

export function Trust() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            Por que confiar
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
            Somos uma empresa nova, e não escondemos isso
          </h2>
          <p className="mt-4 font-body text-lg text-muted">
            Por isso trabalhamos com processo claro e responsabilidade real em cada etapa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TRUST_POINTS.map((point) => {
            const Icon = ICONS[point.icon];
            return (
              <div
                key={point.title}
                {...glowProps({ radius: 16 })}
                className="rounded-2xl border border-border bg-bg p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 font-body text-sm text-muted">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
