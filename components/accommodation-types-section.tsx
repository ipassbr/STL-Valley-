import Image from "next/image"
import { Tent, Users, Calendar, Music, Star, Home, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <section id="hospedagem-tipos" className="overflow-hidden">
      {accommodations.map((accommodation, index) => {
        const isReversed = index % 2 !== 0

        return (
          <div key={accommodation.id} className={`relative ${accommodation.bgColor}`}>
            {/* Wave Top */}
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 80V30C200 60 400 0 720 30C1040 60 1240 10 1440 40V80H0Z"
                fill={index === 0 ? "hsl(var(--background))" : accommodations[index - 1].waveColor}
              />
            </svg>

            <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
              <div
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-white/70 font-medium uppercase tracking-widest text-sm">
                    {accommodation.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                    {accommodation.title}
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                    {accommodation.description}
                  </p>

                  {/* Features Icons */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                    {accommodation.features.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <span className="text-white/90 text-sm font-medium">{feature.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 rounded-full"
                    >
                      Saiba Mais
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 font-semibold px-8 rounded-full bg-transparent"
                    >
                      Reservar Agora
                    </Button>
                  </div>

                  <div className="mt-6 text-white">
                    <span className="text-3xl font-bold">{accommodation.price}</span>
                    <span className="text-white/70 ml-2">{accommodation.priceNote}</span>
                  </div>
                </div>

                {/* Image Side - Organic Shape */}
                <div className="flex-1 relative">
                  <div className="relative">
                    {/* Organic blob shape container */}
                    <div
                      className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden"
                      style={{
                        borderRadius: "60% 40% 55% 45% / 55% 50% 50% 45%",
                      }}
                    >
                      <Image
                        src={accommodation.image || "/placeholder.svg"}
                        alt={`${accommodation.title} - ${accommodation.subtitle}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Tent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold text-foreground whitespace-nowrap">
                        STL Valley
                      </span>
                    </div>

                    {/* Navigation arrows */}
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
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
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0V50C200 20 400 80 720 50C1040 20 1240 70 1440 40V0H0Z"
                fill={accommodation.waveColor}
              />
            </svg>
          </div>
        )
      })}
    </section>
  )
}
