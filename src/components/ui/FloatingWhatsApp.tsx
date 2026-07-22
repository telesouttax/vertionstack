import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { glowProps } from "@/lib/glow";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      {...glowProps({ radius: 999 })}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
