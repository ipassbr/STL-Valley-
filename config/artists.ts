export interface Artist {
  name: string
  genre: string
  image: string
}

export const artists: Artist[] = [
  {
    name: "Oriente",
    genre: "Rap Nacional",
    image: "/rapper-brazilian-artist-stage.jpg",
  },
  {
    name: "Mato Seco",
    genre: "Reggae",
    image: "/reggae-band-brazilian-stage.jpg",
  },
  {
    name: "Raimundos",
    genre: "Rock Nacional",
    image: "/rock-band-live-concert-stage.jpg",
  },
  {
    name: "Planta e Raiz",
    genre: "Reggae",
    image: "/reggae-artist-live-performance.jpg",
  },
  {
    name: "Ventania",
    genre: "Reggae",
    image: "/reggae-band-live-stage-lights.jpg",
  },
]

export const artistsSectionConfig = {
  title: "Atrações Exclusivas",
  subtitle: "Line-up Exclusivo",
  description: "Shows exclusivos — somente hóspedes do STL Valley têm acesso",
  exclusiveBadge: "Acesso exclusivo para hóspedes",
}

