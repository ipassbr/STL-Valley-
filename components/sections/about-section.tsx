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
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/camping-tents-nature-mountains-green.jpg"
                  alt="Camping STL Valley com barracas em meio à natureza e montanhas verdes"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/people-dancing-festival-sunset.jpg"
                  alt="Pessoas dançando no festival ao pôr do sol"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/friends-camping-bonfire-night.jpg"
                  alt="Amigos ao redor de uma fogueira no camping à noite"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/mountain-view-sunset-brazil.jpg"
                  alt="Vista das montanhas ao pôr do sol no Brasil"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Sobre o STL Valley
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              O camping oficial do festival
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              O STL Valley é o camping oficial do festival em São Tomé das Letras. Uma experiência
              que une conforto, natureza, estrutura completa e shows exclusivos — tudo para você
              viver o festival ao máximo.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map(feature => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
