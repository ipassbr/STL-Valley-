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
                  <span className="text-white/95 font-semibold uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 block">
                    {accommodation.subtitle}
                  </span>
                  <h2
                    id={index === 0 ? "hospedagem-tipos-heading" : undefined}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-xl px-2 sm:px-0 leading-tight"
                  >
                    {accommodation.title}
                  </h2>
                  <p className="text-white/95 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 drop-shadow-md px-2 sm:px-0 leading-relaxed">
                    {accommodation.description}
                  </p>

                  {/* Features Icons */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8 sm:mb-10" role="list">
                    {accommodation.features.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <div key={idx} className="flex flex-col items-center gap-2 sm:gap-2.5" role="listitem">
                          <div
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border-2 border-white/60 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white/50 hover:border-white/80"
                            aria-hidden="true"
                          >
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
                          </div>
                          <span className="text-white font-semibold text-sm sm:text-base drop-shadow-lg text-center max-w-[100px]">{feature.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center lg:justify-start px-2 sm:px-0 mb-6 sm:mb-8">
                    <Button
                      size="lg"
                      className="bg-white text-foreground hover:bg-white/95 active:bg-white/90 font-bold px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[52px] w-full sm:w-auto text-base sm:text-lg"
                      asChild
                    >
                      <a href={`#${accommodation.id}`}>Saiba Mais</a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/15 active:bg-white/10 font-bold px-8 sm:px-10 py-6 sm:py-7 rounded-full bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[52px] w-full sm:w-auto text-base sm:text-lg"
                      asChild
                    >
                      <a href="#hospedagem">Reservar Agora</a>
                    </Button>
                  </div>

                  <div className="mt-6 sm:mt-8 text-white px-2 sm:px-0">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl">{accommodation.price}</span>
                    <span className="text-white/95 ml-3 text-base sm:text-lg font-medium drop-shadow-lg">{accommodation.priceNote}</span>
                  </div>
                </div>

                {/* Image Side - Organic Shape */}
                <div className="flex-1 relative w-full order-2 lg:order-1">
                  <div className="relative">
                    {/* Organic blob shape container */}
                    <div className="relative w-full aspect-[4/5] max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden rounded-[60%_40%_55%_45%_/_55%_50%_50%_45%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-700 ease-in-out hover:scale-[1.02] hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                      <Image
                        src={accommodation.image || "/placeholder.svg"}
                        alt={`Imagem da ${accommodation.title.toLowerCase()}, mostrando ${accommodation.subtitle.toLowerCase()}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                        quality={85}
                      />
                    </div>

                    {/* Floating badge */}
                    <div
                      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 shadow-2xl flex items-center gap-3 sm:gap-3.5 border-2 border-white/60 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white"
                      aria-label="Badge STL Valley"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110" aria-hidden="true">
                        <Tent className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-primary" />
                      </div>
                      <span className="font-bold text-foreground whitespace-nowrap text-base sm:text-lg">STL Valley</span>
                    </div>

                    {/* Navigation arrows */}
                    <button
                      className={cn(
                        "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md flex items-center justify-center text-white border-2 border-white/30 transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shadow-lg",
                        index === 0 
                          ? "bg-white/10 opacity-50 cursor-not-allowed" 
                          : "bg-white/25 hover:bg-white/40 hover:border-white/50 hover:scale-110 hover:shadow-xl active:scale-95"
                      )}
                      aria-label={`Ver ${index > 0 ? accommodations[index - 1].title : "acomodação anterior"}`}
                      disabled={index === 0}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      className={cn(
                        "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md flex items-center justify-center text-white border-2 border-white/30 transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shadow-lg",
                        index === accommodations.length - 1
                          ? "bg-white/10 opacity-50 cursor-not-allowed"
                          : "bg-white/25 hover:bg-white/40 hover:border-white/50 hover:scale-110 hover:shadow-xl active:scale-95"
                      )}
                      aria-label={`Ver ${index < accommodations.length - 1 ? accommodations[index + 1].title : "próxima acomodação"}`}
                      disabled={index === accommodations.length - 1}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
