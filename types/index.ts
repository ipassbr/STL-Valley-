/**
 * Tipos TypeScript compartilhados do projeto STL Valley
 */

// Tipos de configuração
export type { AmenityCategory, AmenityItem } from "@/config/amenities"
export type { AccommodationPlan } from "@/config/accommodations"
export type { Artist } from "@/config/artists"
export type { FAQ } from "@/config/faqs"
export type { NavigationItem } from "@/config/navigation"

// Tipos de hooks
export type { TimeLeft } from "@/hooks/use-countdown"

// Tipos de componentes comuns
export interface SectionProps {
  className?: string
  id?: string
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  loading?: "lazy" | "eager"
}

