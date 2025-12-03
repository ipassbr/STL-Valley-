import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Car } from "lucide-react"
import { formatDateTimeBR, CHECK_IN_DATE, CHECK_OUT_DATE } from "@/config/site"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Como chegar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O STL Valley está localizado na Fazenda Barro Branco, em São Tomé das Letras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.123456789!2d-44.987654!3d-21.723456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQzJzI0LjQiUyA0NMKwNTknMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização STL Valley"
            />
          </div>

          {/* Info */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Fazenda Barro Branco S/N
                    <br />
                    Zona Rural, São Tomé das Letras — MG
                    <br />
                    CEP: 37408-000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Como chegar</h3>
                  <p className="text-muted-foreground">
                    Acesso pela MG-868. Estacionamento disponível no local. Transfer para o centro
                    da cidade disponível (pago).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horários</h3>
                  <p className="text-muted-foreground">
                    Check-in: {formatDateTimeBR(CHECK_IN_DATE)}
                    <br />
                    Check-out: {formatDateTimeBR(CHECK_OUT_DATE)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                asChild
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Fazenda+Barro+Branco+São+Tomé+das+Letras+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
