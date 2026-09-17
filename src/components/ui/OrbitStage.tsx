"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Palco em arco: itens orbitam duas curvas, com números que sobem contando
 * e etiquetas embaixo.
 *
 * Adaptado de "Builders Community Hero" (CommunityOrbit) para a Vertion:
 * - sem avatares de pessoas e sem emoji como ícone (só SVG do lucide)
 * - verde trocado pelo roxo da marca
 * - animação em CSS, sem biblioteca, e desligada quando o sistema pede
 *   menos movimento
 */

export type OrbitRing = "outer" | "inner";

type OrbitBase = { ring: OrbitRing; angle: number };

export type OrbitItem = OrbitBase &
  (
    | { kind: "pill"; icon: ReactNode; label: string }
    | { kind: "card"; icon: ReactNode; badge?: string }
    | { kind: "status"; label: string }
    | { kind: "icon"; icon: ReactNode }
    | { kind: "check" }
  );

export type OrbitStat = { value: string; label: string };
export type OrbitTag = { icon: ReactNode; label: string; href: string };

type OrbitStageProps = {
  items: OrbitItem[];
  stats: OrbitStat[];
  headline: ReactNode;
  tags?: OrbitTag[];
  minScale?: number;
  className?: string;
};

const STAGE_W = 1200;
const STAGE_H = 490;
const CENTER = { x: 600, y: 620 };
const RADIUS: Record<OrbitRing, number> = { outer: 492, inner: 404 };

function positionOnRing(ring: OrbitRing, angle: number): CSSProperties {
  const rad = (angle * Math.PI) / 180;
  const r = RADIUS[ring];
  return { left: CENTER.x + r * Math.cos(rad), top: CENTER.y - r * Math.sin(rad) };
}

/** Traço que sai da esquerda, passa pelo topo e termina à direita. */
function arcPath(r: number) {
  const dy = CENTER.y - STAGE_H;
  const dx = Math.sqrt(r * r - dy * dy);
  return `M ${CENTER.x - dx} ${STAGE_H} A ${r} ${r} 0 0 1 ${CENTER.x + dx} ${STAGE_H}`;
}

/** Comprimento do arco, pra animar o traço sendo desenhado no CSS. */
function arcLength(r: number) {
  const dy = CENTER.y - STAGE_H;
  const dx = Math.sqrt(r * r - dy * dy);
  return r * 2 * Math.asin(Math.min(1, dx / r));
}

/* ── peças que orbitam ──────────────────────────────────────────────── */

const chipBase =
  "flex items-center whitespace-nowrap rounded-full border border-line bg-white shadow-card";

function OrbitPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className={cn(chipBase, "min-h-[30px] gap-2 px-3 py-1.5 text-[12.5px] font-medium text-ink-soft")}>
      <span className="flex shrink-0 items-center text-brand [&>svg]:h-[13px] [&>svg]:w-[13px]">
        {icon}
      </span>
      <span className="leading-none">{label}</span>
    </div>
  );
}

function OrbitCard({ icon, badge }: { icon: ReactNode; badge?: string }) {
  return (
    <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-line bg-white text-brand shadow-card [&>svg]:h-[22px] [&>svg]:w-[22px]">
      {icon}
      {badge && (
        <span className="absolute -bottom-1.5 -right-2 flex h-[18px] items-center rounded-md border border-line bg-white px-1.5 font-mono text-[9px] font-medium leading-none text-brand-deep shadow-card">
          {badge}
        </span>
      )}
    </div>
  );
}

function OrbitStatus({ label }: { label: string }) {
  return (
    <div className="flex h-[30px] items-center gap-1.5 whitespace-nowrap rounded-full border border-violet-200 bg-violet-50 px-2.5 text-[13px] font-medium text-brand-deep shadow-card">
      <Check size={14} strokeWidth={2.6} className="text-brand" aria-hidden="true" />
      {label}
    </div>
  );
}

function OrbitIcon({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-line bg-white text-brand shadow-card [&>svg]:h-[22px] [&>svg]:w-[22px]">
      {icon}
    </div>
  );
}

function OrbitCheck() {
  return (
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand shadow-brand">
      <Check size={20} strokeWidth={2.6} className="text-white" aria-hidden="true" />
    </div>
  );
}

function renderItem(item: OrbitItem) {
  switch (item.kind) {
    case "pill":
      return <OrbitPill icon={item.icon} label={item.label} />;
    case "card":
      return <OrbitCard icon={item.icon} badge={item.badge} />;
    case "status":
      return <OrbitStatus label={item.label} />;
    case "icon":
      return <OrbitIcon icon={item.icon} />;
    case "check":
      return <OrbitCheck />;
  }
}

/* ── números que sobem contando ─────────────────────────────────────── */

function splitValue(value: string) {
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return null;
  const raw = match[2].replace(/,/g, "");
  const decimals = (raw.split(".")[1] ?? "").length;
  return { prefix: match[1], target: Number.parseFloat(raw), decimals, suffix: match[3] };
}

function CountUp({ value, delay }: { value: string; delay: number }) {
  const parts = splitValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [atual, setAtual] = useState(0);
  const [comecou, setComecou] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!parts || !elemento || comecou) return;

    const menosMovimento =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (menosMovimento || typeof IntersectionObserver === "undefined") return;

    // Só conta quando o número aparece na tela: quem rola até aqui vê o efeito.
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        setComecou(true);

        const duracao = 1600;
        const inicio = performance.now() + delay * 1000;
        let quadro = 0;

        const passo = (agora: number) => {
          const decorrido = agora - inicio;
          if (decorrido < 0) {
            quadro = requestAnimationFrame(passo);
            return;
          }
          const p = Math.min(1, decorrido / duracao);
          const suave = 1 - Math.pow(1 - p, 3);
          setAtual(parts.target * suave);
          if (p < 1) quadro = requestAnimationFrame(passo);
        };

        quadro = requestAnimationFrame(passo);
        elemento.dataset.quadro = String(quadro);
      },
      { rootMargin: "-15%" }
    );

    observador.observe(elemento);
    return () => {
      observador.disconnect();
      const quadro = Number(elemento.dataset.quadro);
      if (quadro) cancelAnimationFrame(quadro);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay, comecou]);

  if (!parts) return <span ref={ref}>{value}</span>;

  // Antes de começar mostramos o valor final: assim o número certo já vai no
  // HTML, em vez de um zero parado para quem lê sem JavaScript.
  return (
    <span ref={ref}>
      {parts.prefix}
      {(comecou ? atual : parts.target).toFixed(parts.decimals)}
      {parts.suffix}
    </span>
  );
}

/* ── palco ──────────────────────────────────────────────────────────── */

export function OrbitStage({
  items,
  stats,
  headline,
  tags = [],
  minScale = 0.56,
  className,
}: OrbitStageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // O palco é desenhado em 1200px e encolhe proporcionalmente para caber.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const medir = () =>
      setScale(Math.min(1, Math.max(minScale, frame.clientWidth / STAGE_W)));
    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(frame);
    return () => observador.disconnect();
  }, [minScale]);

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={frameRef}
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden"
        style={{ height: STAGE_H * scale }}
      >
        <div
          className="absolute left-1/2 top-0"
          style={{
            width: STAGE_W,
            height: STAGE_H,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {/* Os dois arcos */}
          <svg
            className="pointer-events-none absolute inset-0"
            width={STAGE_W}
            height={STAGE_H}
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            fill="none"
            aria-hidden="true"
            style={{
              maskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
            }}
          >
            <path
              d={arcPath(RADIUS.outer)}
              className="tracar stroke-line"
              strokeWidth={2}
              style={{ "--comprimento": arcLength(RADIUS.outer) } as CSSProperties}
            />
            <path
              d={arcPath(RADIUS.inner)}
              className="tracar stroke-line-strong"
              strokeWidth={3}
              style={
                {
                  "--comprimento": arcLength(RADIUS.inner),
                  "--atraso": "0.1s",
                } as CSSProperties
              }
            />
          </svg>

          {/* Itens em órbita — ilustração, então escondidos do leitor de tela */}
          <div aria-hidden="true">
            {items.map((item, i) => (
              <div
                key={`${item.ring}-${item.angle}`}
                className="entrar absolute -translate-x-1/2 -translate-y-1/2"
                style={
                  {
                    ...positionOnRing(item.ring, item.angle),
                    "--atraso": `${0.5 + i * 0.07}s`,
                  } as CSSProperties
                }
              >
                <div
                  className="flutuar transition-transform duration-200 hover:scale-105"
                  style={
                    {
                      "--duracao": `${4 + (i % 4) * 0.6}s`,
                      "--atraso": `${(i * 0.4) % 2}s`,
                    } as CSSProperties
                  }
                >
                  {renderItem(item)}
                </div>
              </div>
            ))}
          </div>

          {/* Números */}
          <dl className="absolute left-1/2 top-[393px] grid -translate-x-1/2 auto-cols-fr grid-flow-col gap-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="entrar flex flex-col items-center"
                style={{ "--atraso": `${0.9 + i * 0.12}s` } as CSSProperties}
              >
                <dd className="nums font-display text-[48px] font-bold leading-none tracking-[-0.03em] text-ink">
                  <CountUp value={stat.value} delay={0.9 + i * 0.12} />
                </dd>
                <dt className="mt-4 text-center text-[13px] leading-tight text-ink-soft">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <h2
        className="entrar h2 mx-auto mt-4 max-w-[640px] text-balance text-center"
        style={{ "--atraso": "1.3s" } as CSSProperties}
      >
        {headline}
      </h2>

      {tags.length > 0 && (
        <div className="mx-auto mt-9 flex max-w-[780px] flex-wrap justify-center gap-3">
          {tags.map((tag, i) => (
            <a
              key={tag.label}
              href={tag.href}
              style={{ "--atraso": `${1.6 + i * 0.08}s` } as CSSProperties}
              className="entrar group flex h-11 cursor-pointer items-center gap-2.5 rounded-full border border-line bg-white pl-1.5 pr-4 text-sm font-medium text-ink shadow-card outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white [&>svg]:h-[15px] [&>svg]:w-[15px]">
                {tag.icon}
              </span>
              {tag.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
