import { BarChart3, Check, Globe, LayoutGrid, MessageSquareText, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { glowProps } from "@/lib/glow";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  MessageSquareText,
  LayoutGrid,
  BarChart3,
  Globe,
};

// Bento assimétrico: o primeiro card ocupa o dobro de largura no desktop.
const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"];

export function ServicesGrid() {
  return (
    <section id="servicos" className="section relative overflow-hidden bg-surface-raised">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow="O que entregamos"
          title={
            <>
              Quatro frentes, um <span className="accent">único</span> parceiro de tecnologia.
            </>
          }
          description="Você não precisa contratar quatro fornecedores diferentes e depois torcer pra tudo conversar entre si."
        />

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            const featured = service.featured;

            return (
              <Reveal
                key={service.id}
                delay={i * 0.07}
                className={cn("group", SPANS[i])}
              >
                <article
                  {...glowProps({ radius: 24 })}
                  className={cn(
                    "flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lift sm:p-8",
                    featured && "lg:flex-row lg:items-center lg:gap-10"
                  )}
                >
                  <div className={cn(featured && "lg:flex-1")}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sheen text-white shadow-brand transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-label uppercase text-carbon-400"
                      >
                        {service.kicker}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {service.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-brand-deep"
                        >
                          <Check className="h-3 w-3 text-brand" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mini ilustração só no card em destaque */}
                  {featured && (
                    <div
                      aria-hidden="true"
                      className="mt-8 w-full shrink-0 rounded-2xl border border-line bg-surface-raised p-4 lg:mt-0 lg:w-56"
                    >
                      <div className="space-y-2">
                        <span className="block h-2 w-14 rounded-full bg-carbon-200" />
                        <span className="block w-fit max-w-full rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[0.6875rem] leading-snug text-ink ring-1 ring-line">
                          Vocês abrem sábado?
                        </span>
                        <span className="ml-auto block w-fit max-w-full rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-[0.6875rem] leading-snug text-white">
                          Abrimos! 9h às 15h. Quer marcar?
                        </span>
                        <span className="block pt-1 text-right font-mono text-[0.5625rem] uppercase tracking-wider text-brand">
                          automático · 23:41
                        </span>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-[0.9375rem] text-ink-soft">
            Não sabe por qual começar? A gente te diz na conversa — de graça.
          </p>
          <WhatsAppButton label="Descobrir o que faz sentido pra mim" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
