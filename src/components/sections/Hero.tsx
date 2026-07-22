import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StackedCards } from "@/components/ui/StackedCards";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { DigitalPetalsShader } from "@/components/ui/DigitalPetalsShader";

const heroEntranceVariants = {
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.2,
      },
    },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
      <DigitalPetalsShader className="opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/40"
      />

      <div className="relative z-10 mx-auto grid max-w-container items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <AnimatedGroup variants={heroEntranceVariants} className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-muted">
            Automação · Sistemas · Sites
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            A camada de tecnologia que faltava no seu negócio.
          </h1>

          <p className="mx-auto mt-5 max-w-xl font-body text-lg text-muted lg:mx-0">
            Automação de atendimento, sistemas, dashboards e sites sob medida pra
            qualquer tipo de negócio, do jeito que o seu já funciona.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <WhatsAppButton />
            <Button href="#como-funciona" variant="secondary">
              Ver como funciona
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </AnimatedGroup>

        <div className="flex justify-center lg:justify-end">
          <StackedCards />
        </div>
      </div>
    </section>
  );
}
