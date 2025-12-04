"use client"

import Image from "next/image"
import { artists, artistsSectionConfig } from "@/config/artists"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function ArtistsSection() {
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
    <section id="atracoes" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-accent text-accent-foreground" aria-labelledby="atracoes-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary-foreground/90 font-medium uppercase tracking-widest text-xs sm:text-sm">
            {artistsSectionConfig.subtitle}
          </span>
          <h2 id="atracoes-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 text-primary-foreground px-2">
            {artistsSectionConfig.title}
          </h2>
          <p className="text-primary-foreground/90 text-base sm:text-lg max-w-2xl mx-auto px-2">
            {artistsSectionConfig.description}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6" role="list" aria-label="Lista de artistas confirmados">
          {artists.map(artist => (
            <div
              key={artist.name}
              className={cn(
                "group relative aspect-[2/3] rounded-xl sm:rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:outline-none",
                "cursor-pointer transition-all duration-500 ease-out min-h-[200px] sm:min-h-[240px]",
                !prefersReducedMotion && "hover:scale-[1.03] hover:shadow-2xl hover:z-10"
              )}
              role="listitem"
              tabIndex={0}
              aria-label={`${artist.name}, artista de ${artist.genre}`}
            >
              <Image
                src={artist.image || "/placeholder.svg"}
                alt={`Foto de ${artist.name}, artista de ${artist.genre}`}
                fill
                className={cn(
                  "object-cover transition-transform duration-700 ease-out",
                  !prefersReducedMotion && "group-hover:scale-110"
                )}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                quality={80}
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500",
                !prefersReducedMotion && "group-hover:from-black/90 group-hover:via-black/40"
              )} />
              <div className={cn(
                "absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 transition-transform duration-500",
                !prefersReducedMotion && "group-hover:translate-y-[-4px]"
              )}>
                <p className="text-white/95 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-1.5 font-semibold drop-shadow-xl">
                  {artist.genre}
                </p>
                <h3 className="text-white text-sm sm:text-base lg:text-xl font-bold drop-shadow-xl leading-tight">{artist.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Badge */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div
            className={cn(
              "inline-flex items-center gap-3 bg-secondary/30 backdrop-blur-md rounded-full px-8 py-4 border-2 border-secondary/50 shadow-xl transition-all duration-300",
              !prefersReducedMotion && "hover:scale-105 hover:bg-secondary/40 hover:border-secondary/70 hover:shadow-2xl"
            )}
            role="status"
            aria-label="Badge exclusivo"
          >
            <span className={cn(
              "w-2.5 h-2.5 bg-secondary rounded-full transition-all duration-300",
              !prefersReducedMotion && "animate-pulse"
            )} aria-hidden="true" />
            <span className="text-primary-foreground font-semibold text-sm sm:text-base">
              {artistsSectionConfig.exclusiveBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
