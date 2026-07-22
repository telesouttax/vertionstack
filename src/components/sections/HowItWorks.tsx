import { HOW_IT_WORKS } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 font-body text-lg text-muted">
            Do primeiro contato ao projeto no ar, em quatro passos.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step) => (
            <li
              key={step.number}
              {...glowProps({ radius: 16 })}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="bg-brand-gradient bg-clip-text font-heading text-3xl font-bold text-transparent">
                {step.number}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 font-body text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
