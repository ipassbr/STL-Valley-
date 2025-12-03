"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useCountdown } from "@/hooks/use-countdown"
import { EVENT_PERIOD } from "@/config/site"

const artists = ["Oriente", "Mato Seco", "Raimundos", "Planta e Raiz", "Ventania"]

function CountdownTimer() {
  const timeLeft = useCountdown()

  // Se o evento já passou, mostrar mensagem
  if (timeLeft.isExpired) {
    return (
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-white">O evento já começou! 🎉</p>
      </div>
    )
  }

  return (
    <div className="flex gap-3 md:gap-6">
      {[
        { value: timeLeft.days, label: "Dias" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Seg" },
      ].map(item => (
        <div key={item.label} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-5 md:py-3 border border-white/20">
            <span className="text-2xl md:text-4xl font-bold text-white tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-1 block">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function ArtistMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {[...artists, ...artists, ...artists].map((artist, index) => (
          <span
            key={index}
            className="mx-6 md:mx-10 text-white/60 text-sm md:text-base font-medium"
          >
            ••• {artist}
          </span>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/camping-festival-nature-mountains-sunset-tents-cro.jpg"
          alt="Camping STL Valley ao pôr do sol com barracas e montanhas ao fundo"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in">
            {EVENT_PERIOD}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Viva o <span className="text-secondary">STL Valley</span> 2026
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 font-light">
            A Experiência Oficial de Camping do Festival
          </p>

          <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Hospedagem exclusiva + acesso antecipado + shows só para hóspedes
          </p>

          {/* Countdown */}
          <div className="flex justify-center mb-10">
            <CountdownTimer />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
              asChild
            >
              <a href="#hospedagem">Garanta sua hospedagem</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground bg-transparent text-base px-8 py-6"
              asChild
            >
              <a href="https://stlvalley.com.br" target="_blank" rel="noopener noreferrer">
                Compre seu ingresso do festival
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Artist Marquee */}
      <div className="absolute bottom-20 left-0 right-0">
        <ArtistMarquee />
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
