import Image from "next/image"
import { artists, artistsSectionConfig } from "@/config/artists"

export function ArtistsSection() {
  return (
    <section id="atracoes" className="py-20 lg:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">
            {artistsSectionConfig.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-primary-foreground">
            {artistsSectionConfig.title}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {artistsSectionConfig.description}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {artists.map(artist => (
            <div
              key={artist.name}
              className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={artist.image || "/placeholder.svg"}
                alt={`${artist.name} - ${artist.genre}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
                  {artist.genre}
                </p>
                <h3 className="text-white text-lg lg:text-xl font-bold">{artist.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 border border-secondary/30">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-primary-foreground font-medium">
              {artistsSectionConfig.exclusiveBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
