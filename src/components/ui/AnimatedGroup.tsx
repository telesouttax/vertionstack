import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  /** Intervalo entre a entrada de um filho e a do próximo, em segundos. */
  intervalo?: number;
};

/**
 * Entrada em cascata do conteúdo do topo da página.
 *
 * É CSS puro (classe .entrar com animation-delay), então roda sem esperar
 * o JavaScript carregar — e continua sendo um componente de servidor.
 */
export function AnimatedGroup({ children, className, intervalo = 0.09 }: AnimatedGroupProps) {
  return (
    <div className={cn(className)}>
      {Children.map(children, (filho, i) => (
        <div className="entrar" style={{ "--atraso": `${i * intervalo}s` } as React.CSSProperties}>
          {filho}
        </div>
      ))}
    </div>
  );
}
