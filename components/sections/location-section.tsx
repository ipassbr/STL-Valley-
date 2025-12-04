import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Car } from "lucide-react"
import { formatDateTimeBR, CHECK_IN_DATE, CHECK_OUT_DATE } from "@/config/site"
import { cn } from "@/lib/utils"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted" aria-labelledby="localizacao-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-primary font-medium uppercase tracking-widest text-xs sm:text-sm">
            Localização
          </span>
          <h2 id="localizacao-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 px-2">
            Como chegar
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            O STL Valley está localizado na Fazenda Barro Branco, em São Tomé das Letras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Map */}
          <div className="aspect-video lg:aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.123456789!2d-44.987654!3d-21.723456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQzJzI0LjQiUyA0NMKwNTknMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa interativo mostrando a localização do STL Valley na Fazenda Barro Branco, São Tomé das Letras - MG"
              aria-label="Mapa interativo da localização do STL Valley"
              className="transition-opacity duration-300 hover:opacity-90"
            />
          </div>

          {/* Info */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6 sm:space-y-7" role="list">
              <div className="flex gap-4 sm:gap-5 group" role="listitem">
                <div
                  className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    "group-hover:bg-primary/20 group-hover:scale-110"
                  )}
                  aria-hidden="true"
                >
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg">Endereço</h3>
                  <address className="text-muted-foreground not-italic text-sm sm:text-base leading-relaxed">
                    Fazenda Barro Branco S/N
                    <br />
                    Zona Rural, São Tomé das Letras — MG
                    <br />
                    <span className="font-semibold text-foreground">CEP: 37408-000</span>
                  </address>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5 group" role="listitem">
                <div
                  className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    "group-hover:bg-primary/20 group-hover:scale-110"
                  )}
                  aria-hidden="true"
                >
                  <Car className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg">Como chegar</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Acesso pela MG-868. Estacionamento disponível no local. Transfer para o centro
                    da cidade disponível (pago).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5 group" role="listitem">
                <div
                  className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    "group-hover:bg-primary/20 group-hover:scale-110"
                  )}
                  aria-hidden="true"
                >
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg">Horários</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold text-foreground">Check-in:</span> {formatDateTimeBR(CHECK_IN_DATE)}
                    <br />
                    <span className="font-semibold text-foreground">Check-out:</span> {formatDateTimeBR(CHECK_OUT_DATE)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 min-h-[48px] focus-visible:ring-2 focus-visible:ring-offset-2 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Fazenda+Barro+Branco+São+Tomé+das+Letras+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir localização no Google Maps (abre em nova aba)"
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
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
