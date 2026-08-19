import { ShowcaseGallery, type ShowcaseSlide } from "@/components/ui/ShowcaseGallery";
import { InstitutionalSiteMockup } from "@/components/ui/mockups/InstitutionalSite";
import { SHOWCASE_IMAGES } from "@/lib/constants";

const slides: ShowcaseSlide[] = [
  {
    id: "site",
    label: "Site institucional",
    description:
      "Exemplo de site institucional de um escritório de advocacia, com chamada principal, números do escritório e áreas de atuação.",
    content: <InstitutionalSiteMockup />,
  },
  ...SHOWCASE_IMAGES.map((image) => ({
    id: image.id,
    label: image.label,
    description: image.alt,
    content: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt=""
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    ),
  })),
];

export function ProductShowcase() {
  return (
    <section id="na-pratica" className="section overflow-hidden bg-white">
      <ShowcaseGallery
        caption="Exemplos ilustrativos de entrega"
        slides={slides}
        title={
          <>
            <span className="eyebrow">Na prática</span>
            <h2 className="h2 mt-5 text-balance">
              Veja como fica na tela do <span className="accent">seu</span> negócio.
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl text-pretty">
              Site, dashboard ou landing page: cada entrega segue a identidade do cliente, não
              um modelo genérico com o logo colado em cima.
            </p>
          </>
        }
      />
    </section>
  );
}
