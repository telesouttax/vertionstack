"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Moldura de dispositivo que "deita" e vai se endireitando conforme a página
 * rola — dá a sensação de estar abrindo a tela do projeto na sua frente.
 *
 * O cálculo acontece num único listener de rolagem, sincronizado com o quadro
 * do navegador, e escreve direto em variáveis CSS. Foi o que substituiu a
 * framer-motion aqui sem perder o efeito.
 */
export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: ReactNode;
  children: ReactNode;
}) {
  const areaRef = useRef<HTMLDivElement>(null);
  const molduraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const area = areaRef.current;
    const moldura = molduraRef.current;
    if (!area || !moldura) return;

    const menosMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Em tela pequena o efeito 3D custa caro e rende pouco — fica reto.
    const telaPequena = matchMedia("(max-width: 767px)").matches;

    if (menosMovimento || telaPequena) {
      moldura.style.setProperty("--giro", "0deg");
      moldura.style.setProperty("--zoom", "1");
      moldura.style.setProperty("--sobe", "0px");
      return;
    }

    let pedido = 0;

    const calcular = () => {
      pedido = 0;
      const caixa = area.getBoundingClientRect();
      const altura = window.innerHeight;

      // 0 quando o bloco aparece por baixo, 1 quando termina de se endireitar.
      const bruto = (altura - caixa.top) / (altura + caixa.height * 0.55);
      const p = Math.min(1, Math.max(0, bruto / 0.55));

      moldura.style.setProperty("--giro", `${22 - 22 * p}deg`);
      moldura.style.setProperty("--zoom", `${0.92 + 0.08 * p}`);
      moldura.style.setProperty("--sobe", `${60 - 60 * p}px`);
    };

    const aoRolar = () => {
      if (pedido) return;
      pedido = requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });
    return () => {
      if (pedido) cancelAnimationFrame(pedido);
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  return (
    <div ref={areaRef} className="container-x">
      <div className="mx-auto max-w-3xl text-center">{titleComponent}</div>

      <div className="mt-12 sm:mt-16" style={{ perspective: "1200px" }}>
        <div
          ref={molduraRef}
          className="relative mx-auto w-full max-w-5xl rounded-panel border border-line bg-white p-2 shadow-lift sm:p-3"
          style={
            {
              "--giro": "22deg",
              "--zoom": "0.92",
              "--sobe": "60px",
              transform:
                "rotateX(var(--giro)) scale(var(--zoom)) translateY(var(--sobe))",
            } as CSSProperties
          }
        >
          {/* Halo violeta por trás da moldura */}
          <div
            aria-hidden="true"
            style={{ "--aurora-cor": "rgba(149,0,255,0.22)" } as CSSProperties}
            className="pointer-events-none absolute -inset-16 -z-10 aurora"
          />

          {/* Barra da janela */}
          <div className="flex items-center gap-1.5 px-3 py-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-200" />
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-line bg-surface-raised">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
