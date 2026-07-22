import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScreenshotCarousel } from "@/components/ui/ScreenshotCarousel";
import { SHOWCASE_IMAGES } from "@/lib/constants";

export function ProductShowcase() {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            Na prática
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
            Veja como fica{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              na tela do seu negócio
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted">
            Dashboard, sistema ou site: cada entrega é pensada pro seu processo,
            não um modelo genérico.
          </p>
        </>
      }
    >
      <ScreenshotCarousel images={SHOWCASE_IMAGES} />
    </ContainerScroll>
  );
}
