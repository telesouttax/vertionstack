type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function Logo({ className = "h-8 w-8", withWordmark = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Vertion Stack"
        className={`drop-shadow-[0_0_6px_rgba(124,58,237,0.55)] ${className}`}
      />
      {withWordmark && (
        <span className="whitespace-nowrap font-heading text-base font-semibold text-ink sm:text-lg">
          Vertion Stack
        </span>
      )}
    </div>
  );
}
