import { AnchorHTMLAttributes } from "react";
import { glowProps } from "@/lib/glow";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-glow hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
  secondary:
    "bg-surface text-ink border border-border hover:border-primary hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
  ghost:
    "text-ink hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a
      {...glowProps({ radius: 999 })}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-medium transition-all duration-200 ease-out cursor-pointer outline-none ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
