import { ArrowRight, Phone } from "lucide-react";
import { ScaledFrame } from "@/components/ui/ScaledFrame";

/**
 * Exemplo ilustrativo de site institucional para um escritório de advocacia
 * fictício. A paleta é grafite, creme e latão de propósito: mostra que a
 * entrega segue a identidade do cliente, não a da Vertion Stack.
 *
 * Desenhado num "papel" de 1440x810 e reduzido pelo ScaledFrame.
 */

const NAV = ["Escritório", "Áreas de atuação", "Equipe", "Publicações"];

const AREAS = [
  {
    number: "01",
    title: "Direito empresarial",
    description: "Contratos, societário e prevenção de litígio para empresas em crescimento.",
  },
  {
    number: "02",
    title: "Trabalhista",
    description: "Defesa da empresa em reclamações e adequação de rotinas de RH.",
  },
  {
    number: "03",
    title: "Cível e contratos",
    description: "Cobranças, responsabilidade civil e revisão contratual sob medida.",
  },
];

export function InstitutionalSiteMockup() {
  return (
    <ScaledFrame width={1440} height={810}>
      <div className="flex h-full w-full flex-col bg-[#F6F3ED] font-body text-[#14181C]">
        {/* ── Barra superior ───────────────────────────────────────── */}
        <header className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#14181C]/10 px-[72px]">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#14181C] font-serif text-[15px] leading-none text-[#F6F3ED]">
              MD
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#14181C]">
              Marques &amp; Duarte
            </span>
          </div>

          <nav className="flex items-center gap-9">
            {NAV.map((item) => (
              <span key={item} className="text-[13.5px] font-medium text-[#5A6169]">
                {item}
              </span>
            ))}
          </nav>

          <span className="flex items-center gap-2 rounded-[6px] bg-[#B08D57] px-5 py-2.5 text-[13px] font-semibold text-[#14181C]">
            Agendar consulta
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </header>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <div className="flex flex-1 items-center gap-16 px-[72px]">
          <div className="w-[600px] shrink-0">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B08D57]">
              OAB/RJ · Desde 2006
            </span>

            <h1 className="mt-6 font-serif text-[58px] leading-[1.04] tracking-[-0.015em] text-[#14181C]">
              Defesa técnica para as decisões que não podem esperar.
            </h1>

            <p className="mt-6 max-w-[460px] text-[15.5px] leading-relaxed text-[#5A6169]">
              Assessoria jurídica preventiva e contenciosa para empresas e famílias, com
              acompanhamento direto do sócio responsável pelo caso.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span className="flex items-center gap-2.5 rounded-[6px] bg-[#14181C] px-6 py-3.5 text-[14px] font-semibold text-[#F6F3ED]">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Falar com um advogado
              </span>
              <span className="border-b border-[#14181C]/25 pb-1 text-[14px] font-medium text-[#14181C]">
                Ver áreas de atuação
              </span>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-[#14181C]/10 pt-6">
              {[
                ["18 anos", "de atuação"],
                ["1.200+", "casos conduzidos"],
                ["4 comarcas", "atendidas"],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="font-serif text-[24px] leading-none text-[#14181C]">{value}</p>
                  <p className="mt-1.5 text-[12.5px] text-[#5A6169]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Painel escuro no lugar da foto do escritório */}
          <div className="relative h-[400px] flex-1 overflow-hidden rounded-[10px] bg-[#14181C]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #F6F3ED 1px, transparent 1px), linear-gradient(to bottom, #F6F3ED 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute -right-4 top-1/2 -translate-y-1/2 font-serif text-[240px] leading-none text-[#F6F3ED]/[0.05]"
            >
              &amp;
            </span>

            <div className="absolute inset-x-9 top-9">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#B08D57]">
                Sede · Centro, Rio de Janeiro
              </span>
              <span className="mt-4 block h-px w-14 bg-[#B08D57]" />

              <p className="mt-7 max-w-[400px] font-serif text-[23px] leading-[1.45] text-[#F6F3ED]">
                “Cada caso é conduzido pelo sócio que assina a peça. Sem repasse, sem
                estagiário respondendo por nós.”
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F6F3ED]/50">
                Helena Marques · sócia fundadora
              </p>
            </div>

            <div className="absolute bottom-9 left-9 right-9 flex items-center justify-between rounded-[8px] bg-[#F6F3ED] px-6 py-5">
              <div>
                <p className="text-[13px] font-semibold text-[#14181C]">
                  Primeira análise sem custo
                </p>
                <p className="mt-1 text-[12.5px] text-[#5A6169]">
                  Retorno em até 1 dia útil, por telefone ou e-mail.
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B08D57]">
                <ArrowRight className="h-4 w-4 text-[#14181C]" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        {/* ── Áreas de atuação ─────────────────────────────────────── */}
        <div className="shrink-0 border-t border-[#14181C]/10 bg-white px-[72px] py-11">
          <div className="grid grid-cols-3 gap-14">
            {AREAS.map((area) => (
              <div key={area.number} className="flex gap-5">
                <span className="font-mono text-[11px] leading-[1.6] tracking-[0.18em] text-[#B08D57]">
                  {area.number}
                </span>
                <div>
                  <h2 className="font-serif text-[21px] leading-none text-[#14181C]">
                    {area.title}
                  </h2>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#5A6169]">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledFrame>
  );
}
