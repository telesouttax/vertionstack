import {
  Building2,
  Calculator,
  Dumbbell,
  HeartPulse,
  PawPrint,
  Scale,
  Scissors,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS_SEGMENTS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Scissors,
  Stethoscope,
  Scale,
  Store,
  Wrench,
  Sparkles,
  UtensilsCrossed,
  Calculator,
  Building2,
  Dumbbell,
  PawPrint,
  HeartPulse,
};

export function BusinessMarquee() {
  return (
    <section className="border-y border-line bg-surface-raised py-12 sm:py-14">
      <p className="container-x text-center font-mono text-label uppercase text-ink-faint">
        Atendemos qualquer segmento
      </p>

      <p className="sr-only">
        Já trabalhamos com {BUSINESS_SEGMENTS.map((s) => s.label).join(", ")} e outros tipos de
        negócio.
      </p>

      <div className="relative mt-8 overflow-hidden mask-fade-x" aria-hidden="true">
        <div className="flex w-max gap-3 motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-6">
          {[...BUSINESS_SEGMENTS, ...BUSINESS_SEGMENTS].map((segment, i) => {
            const Icon = ICONS[segment.icon];
            return (
              <span
                key={`${segment.label}-${i}`}
                className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3 shadow-card transition-colors duration-300 hover:border-violet-200"
              >
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                <span className="whitespace-nowrap text-sm font-medium text-ink">
                  {segment.label}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
