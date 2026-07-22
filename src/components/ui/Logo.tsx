type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function Logo({ className = "h-8 w-8", withWordmark = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className={`drop-shadow-[0_0_6px_rgba(124,58,237,0.55)] ${className}`}
        role="img"
        aria-label="Vertion Stack"
      >
        <defs>
          <linearGradient id="vs-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#A78BFA" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M6 42 L24 32 L42 42" stroke="url(#vs-grad)" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 28 L24 18 L38 28" stroke="url(#vs-grad)" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 14 L24 4 L34 14" stroke="url(#vs-grad)" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {withWordmark && (
        <span className="whitespace-nowrap font-heading text-base font-semibold text-ink sm:text-lg">
          Vertion Stack
        </span>
      )}
    </div>
  );
}
