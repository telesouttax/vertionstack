import {
  Building2,
  Calculator,
  Dumbbell,
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
import { glowProps } from "@/lib/glow";

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
};

const TILTS = [-3, 2, -4, 3];

export function BusinessMarquee() {
  return (
    <section className="border-y border-border bg-surface py-10">
      <p className="sr-only">
        Atendemos: {BUSINESS_SEGMENTS.map((s) => s.label).join(", ")} e outros tipos de
        negócio.
      </p>

      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

        <div className="flex w-max gap-6 motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-4 motion-reduce:px-6">
          {[...BUSINESS_SEGMENTS, ...BUSINESS_SEGMENTS].map((segment, i) => {
            const Icon = ICONS[segment.icon];
            return (
              <div
                key={`${segment.label}-${i}`}
                data-glow=""
                style={{ ...glowProps({ radius: 16 }).style, rotate: `${TILTS[i % TILTS.length]}deg` }}
                className="flex w-32 shrink-0 flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm motion-reduce:[rotate:0deg]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-center font-mono text-xs uppercase tracking-wide text-ink">
                  {segment.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
