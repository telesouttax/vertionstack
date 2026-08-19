import { ArrowDown, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { HERO_PROOF } from "@/lib/constants";

const heroEntrance = {
  container: {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  },
  item: {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      {/* Atmosfera: malha milimetrada + auroras violeta, tudo bem discreto */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-violet-300/35 blur-[130px]" />
        <div className="absolute -left-40 top-40 h-[28rem] w-[28rem] rounded-full bg-violet-200/40 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container-x grid items-center gap-16 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-12 lg:pb-32">
        <AnimatedGroup variants={heroEntrance} className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 font-mono text-label uppercase text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-vivid" aria-hidden="true" />
            Automação · Sistemas · Dashboards · Sites
          </span>

          <h1 className="mt-7 text-balance font-display font-bold leading-[0.95] tracking-[-0.045em] text-ink [font-size:clamp(2.75rem,1.6rem+4.6vw,4.75rem)]">
            A camada de tecnologia que{" "}
            <span className="accent [font-size:1.05em]">faltava</span> no seu negócio.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-pretty font-body text-lg leading-relaxed text-ink-soft lg:mx-0">
            Automação de atendimento, sistemas, dashboards e sites sob medida. Construídos em
            cima do jeito que o seu negócio já funciona, não o contrário.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <WhatsAppButton size="lg" label="Falar no WhatsApp" />
            <Button href="#como-funciona" variant="secondary" size="lg">
              Ver como funciona
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            {HERO_PROOF.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100">
                  <Check className="h-3 w-3 text-brand" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </AnimatedGroup>

        <div className="flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
