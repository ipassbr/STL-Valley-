import { useState, useEffect } from "react"

/**
 * Hook customizado para detectar scroll da página
 * @param threshold - Valor em pixels para considerar como "scrolled" (padrão: 50)
 * @returns boolean indicando se a página foi rolada além do threshold
 */
export function useScroll(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    // Verifica o estado inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isScrolled
}

