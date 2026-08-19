import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-violet-100/60 blur-[130px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Do primeiro oi ao projeto <span className="accent">no ar</span>.
            </>
          }
          description="Quatro passos, sem reunião infinita e sem termo técnico que você não pediu pra ouvir."
        />

        <ol className="relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {/* Trilho que liga os quatro passos no desktop */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[1.375rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand via-violet-200 to-transparent sm:block lg:left-0 lg:top-[1.375rem] lg:h-px lg:w-full lg:bg-gradient-to-r"
          />

          {HOW_IT_WORKS.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 0.09}
              className="relative pl-16 sm:pl-20 lg:pl-0"
            >
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white font-mono text-sm font-medium text-brand shadow-card lg:relative lg:mb-7">
                {step.number}
              </span>

              <div className="lg:pr-6">
                <span className="inline-block rounded-full bg-violet-50 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-brand-deep">
                  {step.duration}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
