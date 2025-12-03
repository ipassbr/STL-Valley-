export interface NavigationItem {
  label: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atrações", href: "#atracoes" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Hospedagem", href: "#hospedagem" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
]

export const headerConfig = {
  brandName: "STL Valley",
  reservationButton: {
    label: "Reservar",
    href: "#hospedagem",
  },
  ticketsButton: {
    label: "Ingressos",
    href: "https://stlvalley.com.br",
  },
  mobileReservationButton: {
    label: "Garanta sua hospedagem",
    href: "#hospedagem",
  },
  mobileTicketsButton: {
    label: "Compre seu ingresso",
    href: "https://stlvalley.com.br",
  },
}

