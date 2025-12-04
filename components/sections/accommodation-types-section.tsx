import Image from "next/image"
import { Tent, Users, Calendar, Music, Star, Home, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const accommodations = [
  {
    id: "barraca-moor",
    title: "Barraca MOOR",
    subtitle: "Conforto na Natureza",
    description:
      "Barraca premium já montada para até 2 pessoas. Estrutura resistente e confortável para você aproveitar o festival sem preocupações.",
    image: "/premium-camping-tent-in-nature-festival-green-fore.jpg",
    features: [
      { icon: Users, label: "Até 2 pessoas" },
      { icon: Tent, label: "Já montada" },
      { icon: Calendar, label: "5 dias" },
      { icon: Music, label: "Shows exclusivos" },
    ],
    bgColor: "bg-[#2d5a3d]",
    waveColor: "#1e3f2b",
    price: "R$ 740",
    priceNote: "por pessoa",
  },
  {
    id: "cabana-premium",
    title: "Cabana Premium",
    subtitle: "Experiência Exclusiva",
    description:
      "Cabanas exclusivas com conforto superior. Unidades limitadas para quem busca uma experiência diferenciada no STL Valley.",
    image: "/luxury-wooden-cabin-glamping-festival-nature-cozy.jpg",
    features: [
      { icon: Home, label: "Cabana privativa" },
      { icon: Crown, label: "Unidades limitadas" },
      { icon: Sparkles, label: "Conforto premium" },
      { icon: Star, label: "Experiência VIP" },
    ],
    bgColor: "bg-[#8B7355]",
    waveColor: "#6b5a45",
    price: "Consulte",
    priceNote: "vagas limitadas",
  },
]

export function AccommodationTypesSection() {
  return (
    <section id="hospedagem-tipos" className="overflow-hidden" aria-labelledby="hospedagem-tipos-heading">
      {accommodations.map((accommodation, index) => {
        const isReversed = index % 2 !== 0

        return (
          <article key={accommodation.id} className={`relative ${accommodation.bgColor}`}>
            {/* Wave Top */}
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 120V50C300 80 600 20 900 50C1200 80 1440 30 1440 30V120H0Z"
                fill={index === 0 ? "hsl(var(--background))" : accommodations[index - 1].waveColor}
                className="transition-all duration-1000"
              />
            </svg>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10">
              <div
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 sm:gap-12 lg:gap-16`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left w-full">
                  <span className="text-white/90 font-medium uppercase tracking-widest text-xs sm:text-sm">
                    {accommodation.subtitle}
                  </span>
                  <h2
                    id={index === 0 ? "hospedagem-tipos-heading" : undefined}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-3 sm:mb-4 drop-shadow-lg px-2 sm:px-0"
                  >
                    {accommodation.title}
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-md px-2 sm:px-0">
                    {accommodation.description}
                  </p>

                  {/* Features Icons */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8" role="list">
                    {accommodation.features.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <div key={idx} className="flex flex-col items-center gap-1.5 sm:gap-2" role="listitem">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 shadow-lg"
                            aria-hidden="true"
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                          </div>
                          <span className="text-white font-semibold text-xs sm:text-sm drop-shadow-md text-center">{feature.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
                    <Button
                      size="lg"
                      className="bg-white text-foreground hover:bg-white/90 font-semibold px-6 sm:px-8 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[48px] w-full sm:w-auto text-sm sm:text-base"
                      asChild
                    >
                      <a href={`#${accommodation.id}`}>Saiba Mais</a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 rounded-full bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white min-h-[48px] w-full sm:w-auto text-sm sm:text-base"
                      asChild
                    >
                      <a href="#hospedagem">Reservar Agora</a>
                    </Button>
                  </div>

                  <div className="mt-4 sm:mt-6 text-white px-2 sm:px-0">
                    <span className="text-2xl sm:text-3xl font-bold drop-shadow-lg">{accommodation.price}</span>
                    <span className="text-white/90 ml-2 text-sm sm:text-base drop-shadow-md">{accommodation.priceNote}</span>
                  </div>
                </div>

                {/* Image Side - Organic Shape */}
                <div className="flex-1 relative w-full order-2 lg:order-1">
                  <div className="relative">
                    {/* Organic blob shape container */}
                    <div
                      className="relative w-full aspect-[4/5] max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.02]"
                      style={{
                        borderRadius: "60% 40% 55% 45% / 55% 50% 50% 45%",
                        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                      }}
                    >
                      <Image
                        src={accommodation.image || "/placeholder.svg"}
                        alt={`Imagem da ${accommodation.title.toLowerCase()}, mostrando ${accommodation.subtitle.toLowerCase()}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                        quality={85}
                      />
                    </div>

                    {/* Floating badge */}
                    <div
                      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 shadow-2xl flex items-center gap-2 sm:gap-3 border border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                      aria-label="Badge STL Valley"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/15 flex items-center justify-center transition-transform duration-300 hover:scale-110" aria-hidden="true">
                        <Tent className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-primary" />
                      </div>
                      <span className="font-bold text-foreground whitespace-nowrap text-sm sm:text-base">STL Valley</span>
                    </div>

                    {/* Navigation arrows */}
                    <button
                      className={cn(
                        "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg",
                        index === 0 
                          ? "bg-white/10 opacity-50 cursor-not-allowed" 
                          : "bg-white/20 hover:bg-white/30 hover:scale-110 hover:shadow-xl"
                      )}
                      aria-label={`Ver ${index > 0 ? accommodations[index - 1].title : "acomodação anterior"}`}
                      disabled={index === 0}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      className={cn(
                        "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg",
                        index === accommodations.length - 1
                          ? "bg-white/10 opacity-50 cursor-not-allowed"
                          : "bg-white/20 hover:bg-white/30 hover:scale-110 hover:shadow-xl"
                      )}
                      aria-label={`Ver ${index < accommodations.length - 1 ? accommodations[index + 1].title : "próxima acomodação"}`}
                      disabled={index === accommodations.length - 1}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Wave Bottom */}
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 0V70C300 40 600 100 900 70C1200 40 1440 90 1440 90V0H0Z"
                fill={accommodation.waveColor}
                className="transition-all duration-1000"
              />
            </svg>
          </article>
        )
      })}
    </section>
  )
}
