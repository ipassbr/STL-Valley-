import { Instagram, Youtube, Facebook, Mail } from "lucide-react"
import { EVENT_YEAR } from "@/config/site"

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
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">STL Valley</h2>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              O camping oficial do festival STL {EVENT_YEAR}. Viva a experiência completa com
              hospedagem exclusiva, shows só para hóspedes e estrutura premium.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Contato</h3>
            <a
              href="mailto:contato@stlvalley.com.br"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contato@stlvalley.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div className="text-center md:text-left">
              <p>Operação oficial do STL Valley</p>
              <p>STL Clube de Camping e Entretenimento LTDA</p>
              <p>CNPJ: 32.859.376/0001-42</p>
            </div>
            <p>© {EVENT_YEAR} STL Valley. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
