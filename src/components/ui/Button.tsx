import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "invert";
type ButtonSize = "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base =
  "group relative inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl font-body font-semibold outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const variants: Record<ButtonVariant, string> = {
  // Ação principal: violeta sólido com um leve degradê e sombra colorida.
  primary:
    "bg-brand text-white shadow-brand hover:bg-violet-700 hover:shadow-brand-lg hover:-translate-y-0.5 active:translate-y-0",
  // Ação secundária no branco: contorno fino que ganha violeta no hover.
  secondary:
    "border border-line-strong bg-white text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0",
  // Sobre fundo preto.
  invert:
    "bg-white text-ink hover:bg-violet-100 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink hover:text-brand",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {/* Brilho diagonal que atravessa o botão no hover. */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  );
}
