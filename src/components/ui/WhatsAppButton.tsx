import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  label?: string;
  /** Texto curto usado em telas pequenas (ex.: na navbar). */
  shortLabel?: string;
  variant?: "primary" | "secondary" | "invert";
  size?: "md" | "lg";
  className?: string;
};

export function WhatsAppButton({
  label = "Falar no WhatsApp",
  shortLabel,
  variant = "primary",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
    >
      <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
      {shortLabel ? (
        <>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{shortLabel}</span>
        </>
      ) : (
        label
      )}
    </Button>
  );
}
