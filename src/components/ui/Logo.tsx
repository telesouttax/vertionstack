import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
  /** Sobre fundo escuro o wordmark vira branco. */
  tone?: "dark" | "light";
};

export function Logo({ className, withWordmark = true, tone = "dark" }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Vertion Stack"
        width={32}
        height={32}
        className={cn("h-8 w-8 shrink-0", className)}
      />
      {withWordmark && (
        <span
          className={cn(
            "whitespace-nowrap font-display text-[1.0625rem] font-bold tracking-[-0.02em]",
            tone === "dark" ? "text-ink" : "text-white"
          )}
        >
          Vertion Stack
        </span>
      )}
    </span>
  );
}
