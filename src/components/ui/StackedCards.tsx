import { glowProps } from "@/lib/glow";

const CARDS = [
  {
    label: "Atendimento",
    metric: "24h ativo",
    bottom: "bottom-0",
    position: "left-1/2 -ml-24 sm:-ml-32",
    delay: "0ms",
    z: 1,
  },
  {
    label: "Sistema",
    metric: "sob medida",
    bottom: "bottom-[124px] sm:bottom-[136px]",
    position: "left-1/2 -ml-[84px] sm:-ml-[112px]",
    delay: "120ms",
    z: 2,
  },
  {
    label: "Dashboard",
    metric: "+38% conversão",
    bottom: "bottom-[248px] sm:bottom-[272px]",
    position: "left-1/2 -ml-[72px] sm:-ml-[96px]",
    delay: "240ms",
    z: 3,
  },
] as const;

export function StackedCards() {
  return (
    <div
      className="relative h-[27rem] w-full max-w-sm sm:h-[30rem]"
      role="img"
      aria-label="Ilustração de três camadas de tecnologia empilhadas: atendimento, sistema e dashboard"
    >
      {CARDS.map((card) => (
        <div
          key={card.label}
          data-glow=""
          className={`motion-safe:animate-fade-up absolute w-48 rounded-2xl border border-border bg-surface p-5 shadow-glow sm:w-64 ${card.bottom} ${card.position}`}
          style={{
            ...glowProps({ radius: 16 }).style,
            zIndex: card.z,
            animationDelay: card.delay,
          }}
        >
          <div
            className="mb-3 h-1.5 w-10 rounded-full bg-brand-gradient"
            aria-hidden="true"
          />
          <p className="font-mono text-xs uppercase tracking-wide text-muted">{card.label}</p>
          <p className="mt-1 font-heading text-lg font-semibold text-ink">{card.metric}</p>
        </div>
      ))}
    </div>
  );
}
