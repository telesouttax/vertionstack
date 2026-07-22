import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Vamos ver se faz sentido pro seu negócio?
        </h2>
        <p className="mt-4 font-body text-lg text-muted">
          Sem compromisso. É uma conversa de 15 minutos pra entender se a gente pode
          ajudar.
        </p>
        <p className="mt-2 font-body text-sm text-muted">
          O investimento costuma se pagar com 1 ou 2 clientes novos por mês.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Quero saber se faz sentido pra mim" />
        </div>
      </div>
    </section>
  );
}
