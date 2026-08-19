import { ArrowRight, Check, X } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfter() {
  return (
    <section id="o-problema" className="section relative overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="O problema"
          title={
            <>
              A diferença aparece já na <span className="accent">primeira</span> semana.
            </>
          }
          description="Não é sobre ter tecnologia bonita. É sobre parar de perder cliente, tempo e dinheiro em coisa que dá pra resolver sozinho."
        />

        <div className="relative mt-14 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
          {/* Antes */}
          <Reveal className="rounded-3xl border border-line bg-surface-raised p-7 sm:p-9">
            <p className="font-mono text-label uppercase text-ink-faint">
              {BEFORE_AFTER.before.label}
            </p>
            <ul className="mt-6 space-y-4">
              {BEFORE_AFTER.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-carbon-200">
                    <X className="h-3 w-3 text-ink-faint" aria-hidden="true" />
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Seta de transição */}
          <Reveal
            delay={0.1}
            className="flex items-center justify-center lg:px-2"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-brand"
            >
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
            </span>
          </Reveal>

          {/* Depois — painel preto, onde o violeta aparece com mais força */}
          <Reveal
            delay={0.15}
            className="relative overflow-hidden rounded-3xl bg-ink p-7 shadow-lift sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-vivid/30 blur-[80px]"
            />
            <div className="relative">
              <p className="font-mono text-label uppercase text-violet-300">
                {BEFORE_AFTER.after.label}
              </p>
              <ul className="mt-6 space-y-4">
                {BEFORE_AFTER.after.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="h-3 w-3 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
