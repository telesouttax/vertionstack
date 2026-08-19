import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_CONTACTS } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="contato" className="bg-white pb-24 pt-8 sm:pb-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-panel bg-surface-invert px-7 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid-invert opacity-50" />
            <div className="absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-vivid/30 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-white/50 before:bg-violet-400">Vamos conversar</span>

            <h2 className="h2 mt-6 text-balance text-white">
              Vamos ver se faz <span className="accent text-violet-300">sentido</span> pro seu
              negócio?
            </h2>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/65">
              São 15 minutos no WhatsApp, sem compromisso e sem discurso de vendedor. Se a gente
              não for a melhor opção pro seu caso, a gente fala isso na hora.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <WhatsAppButton
                variant="invert"
                size="lg"
                label="Quero conversar sobre meu negócio"
              />
              <p className="text-sm text-white/60">Resposta no mesmo dia, em horário comercial.</p>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-center sm:gap-8">
              <p className="font-mono text-label uppercase text-white/55">
                Ou fale direto com um de nós
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {WHATSAPP_CONTACTS.map((contact) => (
                  <a
                    key={contact.url}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white outline-none transition-colors duration-300 hover:border-violet-400 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-violet-300" />
                    {contact.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
