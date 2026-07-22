import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
            Antes de chamar no WhatsApp
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {FAQS.map((faq) => (
            <details
              key={faq.pergunta}
              {...glowProps({ radius: 16 })}
              className="group rounded-2xl border border-border bg-surface p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-ink">
                {faq.pergunta}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 font-body text-sm text-muted">{faq.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
