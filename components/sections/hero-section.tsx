"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useCountdown } from "@/hooks/use-countdown"
import { EVENT_PERIOD } from "@/config/site"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const artists = ["Oriente", "Mato Seco", "Raimundos", "Planta e Raiz", "Ventania"]

function CountdownTimer() {
  const timeLeft = useCountdown()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Se o evento já passou, mostrar mensagem
  if (timeLeft.isExpired) {
    return (
      <div className="text-center" role="status" aria-live="polite">
        <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
          O evento já começou! <span aria-hidden="true">🎉</span>
        </p>
      </div>
    )
  }

  // Evitar erro de hidratação: só calcular countdownText após montagem no cliente
  const countdownText = mounted 
    ? `${timeLeft.days} dias, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos e ${timeLeft.seconds} segundos restantes até o evento`
    : "Contagem regressiva carregando..."

  return (
    <div
      className="flex gap-2 sm:gap-3 md:gap-6 justify-center flex-wrap"
      role="timer"
      aria-live="polite"
      aria-label={countdownText}
      suppressHydrationWarning
    >
      {[
        { value: timeLeft.days, label: "Dias" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Seg" },
      ].map((item, index) => (
        <div 
          key={item.label} 
          className={cn(
            "text-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px] transition-all duration-300 ease-in-out",
            !prefersReducedMotion && "hover:scale-105"
          )}
        >
          <div className={cn(
            "bg-black/50 backdrop-blur-md rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 border-2 border-white/50 shadow-2xl transition-all duration-300",
            !prefersReducedMotion && "hover:border-white/70 hover:bg-black/60"
          )}>
            <span
              className={cn(
                "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white tabular-nums drop-shadow-xl block transition-all duration-300",
                !prefersReducedMotion && "hover:scale-110"
              )}
              aria-hidden="true"
            >
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white font-semibold mt-2 block drop-shadow-lg uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
      <span className="sr-only">{countdownText}</span>
    </div>
  )
}

function ArtistMarquee() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap" aria-label="Artistas confirmados">
      <div className={cn("inline-flex", !prefersReducedMotion && "animate-marquee")}>
        {[...artists, ...artists, ...artists].map((artist, index) => (
          <span
            key={index}
            className="mx-4 sm:mx-6 md:mx-10 text-white/80 text-xs sm:text-sm md:text-base font-medium drop-shadow-md"
          >
            <span aria-hidden="true">•••</span> {artist}
          </span>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero - Seção principal"
    >
      {/* Background Image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/camping-festival-nature-mountains-sunset-tents-cro.jpg"
          alt="Vista panorâmica do camping STL Valley ao pôr do sol, mostrando barracas montadas em meio à natureza com montanhas ao fundo e céu alaranjado"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-28 md:pt-20 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <p
            className={cn(
              "text-white/95 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-5 md:mb-6 font-semibold drop-shadow-xl px-2",
              !prefersReducedMotion && "animate-fade-in"
            )}
          >
            {EVENT_PERIOD}
          </p>

          <h1 className={cn(
            "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight text-balance drop-shadow-2xl px-2",
            !prefersReducedMotion && "animate-fade-in"
          )} style={!prefersReducedMotion ? { animationDelay: "0.1s", animationFillMode: "both" } : undefined}>
            Viva o <span className="text-secondary drop-shadow-lg">STL Valley</span> 2026
          </h1>

          <p className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-light mb-4 sm:mb-5 md:mb-6 drop-shadow-xl px-2",
            !prefersReducedMotion && "animate-fade-in"
          )} style={!prefersReducedMotion ? { animationDelay: "0.2s", animationFillMode: "both" } : undefined}>
            A Experiência Oficial de Camping do Festival
          </p>

          <p className={cn(
            "text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto drop-shadow-lg px-2 leading-relaxed",
            !prefersReducedMotion && "animate-fade-in"
          )} style={!prefersReducedMotion ? { animationDelay: "0.3s", animationFillMode: "both" } : undefined}>
            Hospedagem exclusiva + acesso antecipado + shows só para hóspedes
          </p>

          {/* Countdown */}
          <div className="flex justify-center mb-10">
            <CountdownTimer />
          </div>

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-2",
            !prefersReducedMotion && "animate-fade-in"
          )} style={!prefersReducedMotion ? { animationDelay: "0.4s", animationFillMode: "both" } : undefined}>
            <Button
              size="lg"
              className={cn(
                "bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[48px] w-full sm:w-auto shadow-xl transition-all duration-300",
                !prefersReducedMotion && "hover:scale-105 hover:shadow-2xl"
              )}
              asChild
            >
              <a href="#hospedagem" aria-label="Ir para seção de hospedagem">
                Garanta sua hospedagem
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "border-2 border-white/90 text-white hover:bg-white hover:text-foreground bg-transparent backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white min-h-[48px] w-full sm:w-auto shadow-xl transition-all duration-300",
                !prefersReducedMotion && "hover:scale-105 hover:shadow-2xl hover:border-white"
              )}
              asChild
            >
              <a
                href="https://stlvalley.com.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compre seu ingresso do festival (abre em nova aba)"
              >
                Compre seu ingresso do festival
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Artist Marquee */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 px-4">
        <ArtistMarquee />
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className={cn(
          "absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:rounded-full p-2 min-w-[44px] min-h-[44px] flex items-center justify-center backdrop-blur-sm bg-black/20 rounded-full",
          !prefersReducedMotion && "animate-bounce hover:scale-110"
        )}
        aria-label="Rolar para a próxima seção"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" aria-hidden="true" />
      </a>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.33%, 0, 0);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
        }
      `}</style>
    </section>
  )
}
