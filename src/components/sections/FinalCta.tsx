import { Clock, Instagram, Mail, MessageSquareText } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LeadForm } from "@/components/ui/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/constants";

const GARANTIAS = [
  { icon: Clock, texto: "Resposta no mesmo dia, das 8h às 23h" },
  { icon: MessageSquareText, texto: "15 minutos de conversa, sem compromisso" },
];

const canal =
  "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white outline-none transition-colors duration-300 hover:border-violet-400 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-violet-400";

export function FinalCta() {
  return (
    <section id="contato" className="bg-white pb-24 pt-8 sm:pb-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-panel bg-surface-invert px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid-invert opacity-50" />
            <div
              style={{ "--aurora-cor": "rgba(149,0,255,0.34)" } as React.CSSProperties}
              className="absolute left-1/2 top-0 h-[30rem] w-[44rem] -translate-x-1/2 -translate-y-1/3 aurora"
            />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-16">
            {/* ── A promessa ───────────────────────────────────────────── */}
            <div>
              <span className="eyebrow text-white/50 before:bg-violet-400">Vamos conversar</span>

              <h2 className="h2 mt-6 text-balance text-white">
                Vamos ver se faz <span className="accent text-violet-300">sentido</span> pro seu
                negócio?
              </h2>

              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/65">
                Preenche aí do lado que a gente já começa sabendo do que você precisa. Sem
                discurso de vendedor: se a gente não for a melhor opção pro seu caso, a gente
                fala isso na hora.
              </p>

              <ul className="mt-8 space-y-3">
                {GARANTIAS.map(({ icon: Icone, texto }) => (
                  <li key={texto} className="flex items-center gap-3 text-white/70">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                      <Icone className="h-4 w-4 text-violet-300" aria-hidden="true" />
                    </span>
                    <span className="text-sm">{texto}</span>
                  </li>
                ))}
              </ul>

              {/* A coluna da esquerda é estreita no desktop: a etiqueta fica
                  em cima dos botões, não ao lado, senão quebra no meio. */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="font-mono text-label uppercase text-white/55">Prefere outro canal?</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <WhatsAppButton variant="invert" label="Chamar direto" className="min-h-[44px] px-4 py-2.5 text-sm" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className={canal}>
                    <Mail className="h-4 w-4 text-violet-300" aria-hidden="true" />
                    E-mail
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={canal}>
                    <Instagram className="h-4 w-4 text-violet-300" aria-hidden="true" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* ── O formulário ─────────────────────────────────────────── */}
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
