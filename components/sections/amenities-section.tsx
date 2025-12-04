"use client"

import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { amenityCategories, amenitiesSectionConfig, type AmenityCategory } from "@/config/amenities"
import { useActiveCategory } from "@/hooks/use-active-category"
import { useState, useEffect } from "react"

export function AmenitiesSection() {
  const { activeCategory, isTransitioning, changeCategory } = useActiveCategory<AmenityCategory>(
    amenityCategories[0],
    200
  )
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
    <section id="estrutura" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background overflow-hidden" aria-labelledby="estrutura-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-xs sm:text-sm">
            {amenitiesSectionConfig.subtitle}
          </span>
          <h2 id="estrutura-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 text-balance px-2">
            {amenitiesSectionConfig.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            {amenitiesSectionConfig.description}
          </p>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div
          role="tablist"
          aria-label="Categorias de estrutura e comodidades"
          className="flex gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-12 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:justify-center snap-x snap-mandatory"
        >
          {amenityCategories.map(category => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory.id === category.id}
              aria-controls={`${category.id}-panel`}
              onClick={() => changeCategory(category)}
              className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 snap-start text-sm sm:text-base",
                !prefersReducedMotion && "duration-300",
                activeCategory.id === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg ${!prefersReducedMotion && "scale-105"}`
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              <span>{category.title}</span>
              {activeCategory.id === category.id && <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div
          id={`${activeCategory.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeCategory.id}-tab`}
          className={cn(
            !prefersReducedMotion && "transition-all duration-500 ease-in-out",
            isTransitioning && !prefersReducedMotion ? "opacity-0 translate-y-6 scale-95" : "opacity-100 translate-y-0 scale-100"
          )}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br rounded-2xl sm:rounded-3xl blur-3xl opacity-30 transition-all duration-700 ease-in-out",
                  activeCategory.color
                )}
              />
              <div className={cn(
                "relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl transition-all duration-500 ease-in-out",
                !prefersReducedMotion && "hover:shadow-3xl hover:scale-[1.02]"
              )}>
                <Image
                  src={activeCategory.image || "/placeholder.svg"}
                  alt={`Imagem ilustrativa de ${activeCategory.title.toLowerCase()}: ${activeCategory.subtitle.toLowerCase()}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                {/* Overlay with Stats */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 lg:p-8"
                  )}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-5xl lg:text-6xl font-bold text-white mb-1">
                        {activeCategory.stats.main}
                      </div>
                      <div className="text-white/80 text-sm lg:text-base">
                        {activeCategory.stats.label}
                      </div>
                    </div>
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center",
                        activeCategory.accentColor
                      )}
                    >
                      {(() => {
                        const IconComp = activeCategory.items[0]?.icon
                        return IconComp ? <IconComp className="w-8 h-8 text-white" /> : null
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 sm:mb-6">
                <span
                  className={cn(
                    "text-xs sm:text-sm font-medium uppercase tracking-wider",
                    activeCategory.textColor
                  )}
                >
                  {activeCategory.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
                  {activeCategory.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8" role="list">
                {activeCategory.items.map((item, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className={cn(
                      "group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-muted/50 cursor-default transition-all duration-300 ease-in-out",
                      !prefersReducedMotion && "hover:bg-muted hover:shadow-md hover:translate-x-1"
                    )}
                    style={!prefersReducedMotion ? { animationDelay: `${index * 50}ms` } : undefined}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0",
                        !prefersReducedMotion && "transition-transform duration-300 group-hover:scale-110",
                        activeCategory.accentColor
                      )}
                      aria-hidden="true"
                    >
                      {item.icon && <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.label}</h4>
                        <Check className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0", activeCategory.textColor)} aria-hidden="true" />
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick Stats */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6" role="group" aria-label="Estatísticas rápidas por categoria">
            {amenityCategories.map(category => (
              <button
                key={category.id}
                onClick={() => changeCategory(category)}
                aria-label={`Ver ${category.title}: ${category.stats.main} ${category.stats.label}`}
                className={cn(
                  "group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl overflow-hidden min-h-[90px] sm:min-h-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  !prefersReducedMotion && "transition-all duration-500 ease-in-out",
                  activeCategory.id === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-xl scale-105`
                    : "bg-muted hover:bg-muted/80 hover:scale-105 hover:shadow-lg"
                )}
              >
                <div className="relative z-10">
                  <div
                    className={cn(
                      "text-2xl sm:text-3xl lg:text-4xl font-bold mb-1",
                      activeCategory.id === category.id ? "text-white" : "text-foreground"
                    )}
                  >
                    {category.stats.main}
                  </div>
                  <div
                    className={cn(
                      "text-xs sm:text-sm",
                      activeCategory.id === category.id ? "text-white/80" : "text-muted-foreground"
                    )}
                  >
                    {category.title}
                  </div>
                </div>
                {activeCategory.id === category.id && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3" aria-hidden="true">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
