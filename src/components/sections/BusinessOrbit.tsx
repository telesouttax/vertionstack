import {
  BarChart3,
  CalendarCheck2,
  Clock3,
  Globe,
  LayoutGrid,
  MessageSquareText,
  Scissors,
  Stethoscope,
  Store,
  Wrench,
} from "lucide-react";
import { OrbitStage, type OrbitItem, type OrbitStat, type OrbitTag } from "@/components/ui/OrbitStage";
import { BUSINESS_SEGMENTS } from "@/lib/constants";

/**
 * Substitui o antigo carrossel de segmentos. Em vez de uma fila rolando,
 * o que o cliente ganha orbita o negócio dele: atendimento, agenda, painel
 * e site. Os ícones de segmento mostram que serve pra qualquer ramo.
 */

const items: OrbitItem[] = [
  // Arco de fora, da esquerda para a direita.
  { kind: "status", ring: "outer", angle: 132, label: "Site no ar" },
  { kind: "card", ring: "outer", angle: 112.6, icon: <MessageSquareText />, badge: "24h" },
  { kind: "pill", ring: "outer", angle: 90, icon: <CalendarCheck2 />, label: "Agenda sem choque" },
  { kind: "pill", ring: "outer", angle: 67.6, icon: <BarChart3 />, label: "Painel atualizado" },
  { kind: "icon", ring: "outer", angle: 50.9, icon: <Store /> },
  { kind: "pill", ring: "outer", angle: 35.2, icon: <Clock3 />, label: "Sem espera" },

  // Arco de dentro.
  { kind: "icon", ring: "inner", angle: 137.2, icon: <Scissors /> },
  { kind: "pill", ring: "inner", angle: 116.6, icon: <MessageSquareText />, label: "Resposta em 2s" },
  { kind: "icon", ring: "inner", angle: 90, icon: <Stethoscope /> },
  { kind: "card", ring: "inner", angle: 63.3, icon: <Globe /> },
  { kind: "check", ring: "inner", angle: 41.8 },
];

/* Só fatos verificáveis: o tamanho da oferta e os prazos que já prometemos. */
const stats: OrbitStat[] = [
  { value: "4", label: "frentes de tecnologia" },
  { value: "24h", label: "atendimento no ar, todo dia" },
  { value: "3–7", label: "dias úteis para o site" },
];

const tags: OrbitTag[] = [
  { icon: <MessageSquareText strokeWidth={2} />, label: "Automação", href: "#servicos" },
  { icon: <LayoutGrid strokeWidth={2} />, label: "Sistemas", href: "#servicos" },
  { icon: <BarChart3 strokeWidth={2} />, label: "Dashboards", href: "#servicos" },
  { icon: <Globe strokeWidth={2} />, label: "Sites", href: "#servicos" },
  { icon: <Wrench strokeWidth={2} />, label: "Suporte", href: "#duvidas" },
];

export function BusinessOrbit() {
  return (
    <section className="border-y border-line bg-surface-raised pb-20 pt-12 sm:pb-24">
      {/* Lista real dos segmentos, para leitor de tela e para o Google. */}
      <p className="sr-only">
        Atendemos {BUSINESS_SEGMENTS.map((s) => s.label).join(", ")} e qualquer outro negócio com
        atendimento, agenda ou tarefa repetitiva.
      </p>

      <p className="container-x mb-2 text-center font-mono text-label uppercase text-ink-faint">
        Atendemos qualquer segmento
      </p>

      <OrbitStage
        items={items}
        stats={stats}
        tags={tags}
        headline={
          <>
            O que passa a funcionar <span className="accent">sozinho</span> no seu negócio.
          </>
        }
      />
    </section>
  );
}
