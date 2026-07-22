import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_CONTACTS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo className="h-7 w-7" />

        <div className="flex items-center gap-6">
          {WHATSAPP_CONTACTS.map((contact) => (
            <a
              key={contact.url}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${contact.name}`}
              title={`WhatsApp ${contact.name}`}
              className="cursor-pointer text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="cursor-pointer text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="E-mail"
            className="cursor-pointer text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <p className="font-body text-xs text-muted">
          Rio de Janeiro, RJ &middot; &copy; {year} Vertion Stack. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
