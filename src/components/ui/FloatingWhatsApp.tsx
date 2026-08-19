"use client";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Botão flutuante de WhatsApp. Só aparece depois que o visitante rola a
 * primeira dobra — assim não compete com o CTA do topo.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`group fixed bottom-5 right-5 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-brand text-white shadow-brand-lg transition-all duration-300 hover:scale-105 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-brand motion-safe:animate-pulse-ring"
      />
      <WhatsAppIcon className="relative h-6 w-6" />
    </a>
  );
}
