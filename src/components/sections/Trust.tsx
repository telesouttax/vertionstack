import { FileCheck, UserCheck, Unlock, Wrench, type LucideIcon } from "lucide-react";
import { TRUST_POINTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { glowProps } from "@/lib/glow";

const ICONS: Record<string, LucideIcon> = {
  UserCheck,
  Wrench,
  Unlock,
  FileCheck,
};

export function Trust() {
  return (
    <section id="confianca" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Por que confiar"
          title={
            <>
              Somos uma empresa nova. E não <span className="accent">escondemos</span> isso.
            </>
          }
          description="Não temos dez anos de mercado pra mostrar. Temos processo claro, prazo por escrito e a cara da gente em cada entrega."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {TRUST_POINTS.map((point, i) => {
            const Icon = ICONS[point.icon];
            return (
              <Reveal key={point.title} delay={i * 0.07} className="group h-full">
                <article
                  {...glowProps({ radius: 24 })}
                  className="flex h-full items-start gap-5 rounded-3xl border border-line bg-surface-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lift sm:p-8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-white text-brand transition-colors duration-300 group-hover:border-violet-200 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {point.description}
                    </p>
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
