import { Instagram, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  NAV_LINKS,
  SERVICES,
  WHATSAPP_CONTACTS,
} from "@/lib/constants";

const linkClass =
  "inline-flex cursor-pointer items-center gap-2 rounded text-sm text-ink-soft outline-none transition-colors duration-200 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-raised">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              A camada de tecnologia que faltava no seu negócio. Automação, sistemas, dashboards
              e sites sob medida.
            </p>
            <p className="mt-5 font-mono text-label uppercase text-ink-faint">
              Rio de Janeiro · atendemos todo o Brasil
            </p>
          </div>

          <nav aria-labelledby="rodape-navegar">
            <h2 id="rodape-navegar" className="font-mono text-label uppercase text-ink-faint">
              Navegar
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-label uppercase text-ink-faint">Serviços</h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#servicos" className={linkClass}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-label uppercase text-ink-faint">Contato</h2>
            <ul className="mt-5 space-y-3">
              {WHATSAPP_CONTACTS.map((contact) => (
                <li key={contact.url}>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <WhatsAppIcon className="h-4 w-4 text-brand" />
                    WhatsApp {contact.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Instagram className="h-4 w-4 text-brand" aria-hidden="true" />
                  @vertionstack
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-ink-faint">
            &copy; {year} Vertion Stack. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-widest text-ink-faint">
            Feito no Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
}
