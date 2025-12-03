import { Star, Sparkles } from "lucide-react"

export interface AccommodationPlan {
  id: string
  name: string
  description: string
  price: number
  installments: number
  perDayPerPerson: string
  badge: string
  badgeIcon: React.ComponentType<{ className?: string }>
  featured: boolean
  isPremium?: boolean
  features: string[]
}

export const accommodationPlans: AccommodationPlan[] = [
  {
    id: "barraca",
    name: "Barraca MOOR",
    description: "Experiência completa no STL Valley",
    price: 740,
    installments: 6,
    perDayPerPerson: "92,50",
    badge: "Mais Vendido",
    badgeIcon: Star,
    featured: true,
    features: [
      "Barraca para 2 pessoas",
      "Barraca MOOR já montada",
      "5 dias de hospedagem",
      "Shows exclusivos para hóspedes",
      "Estrutura completa (chuveiros, banheiros, alimentação)",
      "Entrada antecipada no festival (+1h)",
      "Portaria exclusiva sem filas",
      "Segurança 24 horas",
    ],
  },
  {
    id: "cabana",
    name: "Cabana Premium",
    description: "Luxo e exclusividade em meio à natureza",
    price: 3500,
    installments: 6,
    perDayPerPerson: "350,00",
    badge: "Unidades Limitadas",
    badgeIcon: Sparkles,
    featured: false,
    isPremium: true,
    features: [
      "Cabana privativa para até 2 pessoas",
      "Cama de casal com roupa de cama",
      "Banheiro privativo",
      "Varanda com vista para natureza",
      "5 dias de hospedagem",
      "Shows exclusivos para hóspedes",
      "Entrada antecipada no festival (+1h)",
      "Portaria exclusiva sem filas",
      "Café da manhã incluso",
      "Segurança 24 horas",
    ],
  },
]

export const pricingNotice =
  "O ingresso do festival é obrigatório e vendido separadamente."

