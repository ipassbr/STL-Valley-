"use client"

import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { amenityCategories, amenitiesSectionConfig, type AmenityCategory } from "@/config/amenities"
import { useActiveCategory } from "@/hooks/use-active-category"

export function AmenitiesSection() {
  const { activeCategory, isTransitioning, changeCategory } = useActiveCategory<AmenityCategory>(
    amenityCategories[0],
    200
  )

  return (
    <section id="estrutura" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            {amenitiesSectionConfig.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
            {amenitiesSectionConfig.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {amenitiesSectionConfig.description}
          </p>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="flex gap-2 lg:gap-4 mb-8 lg:mb-12 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:justify-center">
          {amenityCategories.map(category => (
            <button
              key={category.id}
              onClick={() => changeCategory(category)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0",
                activeCategory.id === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              <span>{category.title}</span>
              {activeCategory.id === category.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div
          className={cn(
            "transition-all duration-300",
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br rounded-3xl blur-3xl opacity-20",
                  activeCategory.color
                )}
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src={activeCategory.image || "/placeholder.svg"}
                  alt={`${activeCategory.title} - ${activeCategory.subtitle}`}
                  fill
                  className="object-cover"
                  loading="lazy"
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
              <div className="mb-6">
                <span
                  className={cn(
                    "text-sm font-medium uppercase tracking-wider",
                    activeCategory.textColor
                  )}
                >
                  {activeCategory.subtitle}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                  {activeCategory.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mt-8">
                {activeCategory.items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                        activeCategory.accentColor
                      )}
                    >
                      {item.icon && <item.icon className="w-6 h-6 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{item.label}</h4>
                        <Check className={cn("w-4 h-4", activeCategory.textColor)} />
                      </div>
                      <p className="text-muted-foreground text-sm mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick Stats */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {amenityCategories.map(category => (
              <button
                key={category.id}
                onClick={() => changeCategory(category)}
                className={cn(
                  "group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden",
                  activeCategory.id === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-xl`
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                <div className="relative z-10">
                  <div
                    className={cn(
                      "text-3xl lg:text-4xl font-bold mb-1",
                      activeCategory.id === category.id ? "text-white" : "text-foreground"
                    )}
                  >
                    {category.stats.main}
                  </div>
                  <div
                    className={cn(
                      "text-sm",
                      activeCategory.id === category.id ? "text-white/80" : "text-muted-foreground"
                    )}
                  >
                    {category.title}
                  </div>
                </div>
                {activeCategory.id === category.id && (
                  <div className="absolute top-3 right-3">
                    <Check className="w-5 h-5 text-white/80" />
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
