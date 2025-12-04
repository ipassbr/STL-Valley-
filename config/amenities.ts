import {
  ShowerHead,
  Bath,
  Sparkles,
  Accessibility,
  UtensilsCrossed,
  Droplet,
  ShoppingBag,
  Clock,
  Heart,
  Gamepad2,
  Armchair,
  Timer,
  DoorOpen,
  Bus,
  Stethoscope,
} from "lucide-react"

export interface AmenityItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  description: string
}

export interface AmenityCategory {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  accentColor: string
  textColor: string
  image: string
  items: AmenityItem[]
  stats: {
    main: string
    label: string
  }
}

export const amenityCategories: AmenityCategory[] = [
  {
    id: "conforto",
    title: "Conforto",
    subtitle: "Infraestrutura completa",
    description:
      "Banheiros limpos, chuveiros quentes e estrutura acessível para você ter a melhor experiência durante todo o festival.",
    color: "from-emerald-600 to-emerald-800",
    accentColor: "bg-emerald-500",
    textColor: "text-emerald-500",
    image: "/modern-outdoor-shower-bathroom-camping-festival.jpg",
    items: [
      { icon: ShowerHead, label: "96 chuveiros quentes", description: "Água quente 24 horas" },
      { icon: Bath, label: "96 banheiros", description: "Limpeza constante" },
      { icon: Sparkles, label: "Limpeza contínua", description: "Equipe dedicada" },
      { icon: Accessibility, label: "100% Acessível", description: "Estrutura inclusiva" },
    ],
    stats: { main: "96", label: "Chuveiros e Banheiros" },
  },
  {
    id: "alimentacao",
    title: "Alimentação",
    subtitle: "Gastronomia & Conveniência",
    description:
      "Praça de alimentação completa funcionando 24 horas, água gratuita e mini mercado para você não precisar sair do camping.",
    color: "from-amber-500 to-orange-600",
    accentColor: "bg-amber-500",
    textColor: "text-amber-500",
    image: "/food-court-festival-outdoor-night-lights-cozy.jpg",
    items: [
      { icon: UtensilsCrossed, label: "Praça de alimentação", description: "Diversas opções" },
      { icon: Droplet, label: "Água gratuita", description: "Bebedouros disponíveis" },
      { icon: ShoppingBag, label: "Mini mercado", description: "Itens essenciais" },
      { icon: Clock, label: "Funcionamento 24h", description: "Sempre disponível" },
    ],
    stats: { main: "24h", label: "Funcionamento" },
  },
  {
    id: "bem-estar",
    title: "Bem-estar",
    subtitle: "Atividades & Relaxamento",
    description:
      "Yoga ao nascer do sol, oficinas criativas, salão de jogos e áreas de descanso para recarregar as energias entre os shows.",
    color: "from-teal-500 to-cyan-600",
    accentColor: "bg-teal-500",
    textColor: "text-teal-500",
    image: "/outdoor-yoga-meditation-sunrise-nature-mountains-p.jpg",
    items: [
      { icon: Heart, label: "Yoga e meditação", description: "Sessões diárias" },
      { icon: Sparkles, label: "Oficinas exclusivas", description: "Experiências únicas" },
      { icon: Gamepad2, label: "Salão de jogos", description: "Diversão 24h" },
      { icon: Armchair, label: "Área de descanso", description: "Redes e puffs" },
    ],
    stats: { main: "5", label: "Dias de experiências" },
  },
  {
    id: "beneficios",
    title: "Benefícios",
    subtitle: "Exclusivo para hóspedes",
    description:
      "Entrada antecipada no festival, portaria exclusiva sem filas, transfer disponível e posto médico 24h para sua segurança.",
    color: "from-green-700 to-green-900",
    accentColor: "bg-green-600",
    textColor: "text-green-500",
    image: "/vip-entrance-festival-exclusive-gate-night-lights.jpg",
    items: [
      { icon: Timer, label: "Entrada antecipada", description: "+1 hora de vantagem" },
      { icon: DoorOpen, label: "Portaria exclusiva", description: "Sem filas" },
      { icon: Bus, label: "Transfer disponível", description: "Para o centro" },
      { icon: Stethoscope, label: "Posto médico", description: "Atendimento 24h" },
    ],
    stats: { main: "+1h", label: "Entrada antecipada" },
  },
]

export const amenitiesSectionConfig = {
  title: "Estrutura Completa",
  subtitle: "Comodidades",
  description: "Tudo que você precisa para uma experiência incrível",
}


