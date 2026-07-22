import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "./Button";

type WhatsAppButtonProps = {
  label?: string;
  shortLabel?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function WhatsAppButton({
  label = "Falar no WhatsApp",
  shortLabel,
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
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
