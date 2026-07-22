import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

export function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            Depoimentos
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
            O que seus clientes vão poder dizer
          </h2>
          <p className="mt-4 font-body text-sm text-muted">
            * Depoimentos ilustrativos, baseados no que costuma mudar no dia a dia. Vamos
            trocar por relatos reais assim que os primeiros projetos forem entregues.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.role}
              {...glowProps({ radius: 16 })}
              className="rounded-2xl border border-border bg-bg p-6"
            >
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-4 font-body text-base text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
