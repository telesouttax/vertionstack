import { Check, X } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

export function BeforeAfter() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            O antes e o depois é claro.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div {...glowProps({ radius: 16 })} className="rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-xs uppercase tracking-wide text-muted">
              {BEFORE_AFTER.before.label}
            </p>
            <ul className="mt-5 space-y-4">
              {BEFORE_AFTER.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-ink">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            {...glowProps({ radius: 16 })}
            className="rounded-2xl border border-primary/30 bg-surface p-8 shadow-glow"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              {BEFORE_AFTER.after.label}
            </p>
            <ul className="mt-5 space-y-4">
              {BEFORE_AFTER.after.items.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-ink">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
