import { Plus } from "lucide-react";
import { FAQS, CONTACT_EMAIL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  return (
    <section id="duvidas" className="section bg-surface-raised">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Dúvidas frequentes"
              title={
                <>
                  Antes de chamar no <span className="accent">WhatsApp</span>.
                </>
              }
              description="As perguntas que mais chegam pra gente, respondidas sem rodeio."
            />

            <Reveal delay={0.1} className="mt-8">
              <p className="text-sm text-ink-soft">
                Ficou alguma dúvida de fora? Manda pra{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="cursor-pointer font-medium text-brand underline decoration-violet-200 underline-offset-4 transition-colors hover:decoration-brand"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                que a gente responde.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.pergunta} delay={i * 0.05}>
                <details className="group rounded-3xl border border-line bg-white transition-colors duration-300 hover:border-violet-200 open:border-violet-200 open:shadow-card [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-display text-base font-semibold tracking-[-0.01em] text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-7">
                    {faq.pergunta}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-brand transition-all duration-300 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-ink-soft sm:px-7">
                    {faq.resposta}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
