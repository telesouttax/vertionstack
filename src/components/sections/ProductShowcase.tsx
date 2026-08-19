import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScreenshotCarousel } from "@/components/ui/ScreenshotCarousel";
import { SHOWCASE_IMAGES } from "@/lib/constants";

export function ProductShowcase() {
  return (
    <section id="na-pratica" className="section overflow-hidden bg-white">
      <ContainerScroll
        titleComponent={
          <>
            <span className="eyebrow">Na prática</span>
            <h2 className="h2 mt-5 text-balance">
              Veja como fica na tela do <span className="accent">seu</span> negócio.
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl text-pretty">
              Dashboard, sistema ou site: cada entrega nasce do seu processo, não de um modelo
              genérico com o seu logo colado em cima.
            </p>
          </>
        }
      >
        <ScreenshotCarousel images={SHOWCASE_IMAGES} />
      </ContainerScroll>

      <p className="container-x mt-8 text-center font-mono text-[0.625rem] uppercase tracking-widest text-ink-faint">
        Exemplos ilustrativos de entrega
      </p>
    </section>
  );
}
