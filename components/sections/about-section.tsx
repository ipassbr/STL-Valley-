import React from "react"
import Image from "next/image"
import { Tent, Music, Shield, MapPin } from "lucide-react"

const features = [
  {
    icon: Tent,
    title: "5 dias de experiência",
    description: "Viva o festival completo com estrutura premium",
  },
  {
    icon: Music,
    title: "Shows exclusivos",
    description: "Atrações só para hóspedes do camping",
  },
  {
    icon: Shield,
    title: "Estrutura completa",
    description: "Conforto e segurança 24 horas",
  },
  {
    icon: MapPin,
    title: "Localização oficial",
    description: "Dentro do evento, sem deslocamento",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background" aria-labelledby="sobre-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 order-2 lg:order-1" role="group" aria-label="Galeria de imagens do STL Valley">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <Image
                  src="/camping-tents-nature-mountains-green.jpg"
                  alt="Barracas do camping STL Valley montadas em meio à natureza exuberante, com montanhas verdes ao fundo e céu claro"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <Image
                  src="/people-dancing-festival-sunset.jpg"
                  alt="Grupo de pessoas dançando e se divertindo no festival durante o pôr do sol, com cores vibrantes no céu"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <Image
                  src="/friends-camping-bonfire-night.jpg"
                  alt="Grupo de amigos reunidos ao redor de uma fogueira no camping durante a noite, criando uma atmosfera acolhedora e descontraída"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <Image
                  src="/mountain-view-sunset-brazil.jpg"
                  alt="Vista panorâmica das montanhas brasileiras durante o pôr do sol, com tons alaranjados e roxos no céu"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <span className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">
                Sobre o STL Valley
              </span>
              <h2 id="sobre-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 sm:mt-5 mb-5 sm:mb-6 md:mb-8 text-balance leading-tight">
                O camping oficial do festival
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                O STL Valley é o camping oficial do festival em São Tomé das Letras. Uma experiência
                que une conforto, natureza, estrutura completa e shows exclusivos — tudo para você
                viver o festival ao máximo.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8" role="list">
              {features.map(feature => {
                const Icon = feature.icon
                return (
                  <div 
                    key={feature.title} 
                    className="flex gap-4 sm:gap-5 group transition-all duration-300 hover:translate-x-1" 
                    role="listitem"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md"
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-base sm:text-lg">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
