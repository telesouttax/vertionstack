import { BarChart3, Globe, LayoutGrid, MessageSquareText, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

const ICONS: Record<string, LucideIcon> = {
  MessageSquareText,
  LayoutGrid,
  BarChart3,
  Globe,
};

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            O que a Vertion Stack entrega
          </h2>
          <p className="mt-4 font-body text-lg text-muted">
            Quatro frentes, um único parceiro de tecnologia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.title}
                {...glowProps({ radius: 16 })}
                className="rounded-2xl border border-border bg-bg p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
