import { Instagram, Youtube, Facebook, Mail } from "lucide-react"
import { EVENT_YEAR } from "@/config/site"
import { cn } from "@/lib/utils"

const footerLinks = [
  { label: "Hospedagem", href: "#hospedagem" },
  { label: "Ingressos", href: "https://stlvalley.com.br" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "mailto:contato@stlvalley.com.br" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/stlvalley", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">STL Valley</h2>
            <p className="text-primary-foreground/90 max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              O camping oficial do festival STL {EVENT_YEAR}. Viva a experiência completa com
              hospedagem exclusiva, shows só para hóspedes e estrutura premium.
            </p>
            <div className="flex gap-3 sm:gap-4" role="list" aria-label="Redes sociais">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent min-w-[44px] min-h-[44px]",
                    "hover:bg-primary-foreground/20 hover:scale-110 hover:shadow-lg"
                  )}
                  aria-label={`Seguir no ${social.label} (abre em nova aba)`}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Links rápidos">
            <h3 className="font-semibold text-primary-foreground mb-4 sm:mb-5 text-base sm:text-lg">Links Rápidos</h3>
            <ul className="space-y-2.5 sm:space-y-3" role="list">
              {footerLinks.map(link => (
                <li key={link.label} role="listitem">
                  <a
                    href={link.href}
                    className={cn(
                      "text-primary-foreground/90 hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent focus-visible:rounded-md px-1 py-1 text-sm sm:text-base block min-h-[32px] flex items-center",
                      "hover:translate-x-1"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4 sm:mb-5 text-base sm:text-lg">Contato</h3>
            <a
              href="mailto:contato@stlvalley.com.br"
              className={cn(
                "flex items-center gap-2.5 text-primary-foreground/90 hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent focus-visible:rounded-md px-1 py-1 text-sm sm:text-base break-all group",
                "hover:translate-x-1"
              )}
              aria-label="Enviar email para contato@stlvalley.com.br"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span>contato@stlvalley.com.br</span>
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 text-xs sm:text-sm text-primary-foreground/70 text-center md:text-left">
            <div className="space-y-1">
              <p className="font-medium">Operação oficial do STL Valley</p>
              <p>STL Clube de Camping e Entretenimento LTDA</p>
              <p className="font-mono">CNPJ: 32.859.376/0001-42</p>
            </div>
            <p className="md:text-right font-medium">© {EVENT_YEAR} STL Valley. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
