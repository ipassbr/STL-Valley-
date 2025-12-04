import { useState, useEffect, useRef, useCallback } from "react"

/**
 * Hook customizado para detectar scroll da página com throttle para melhor performance
 * @param threshold - Valor em pixels para considerar como "scrolled" (padrão: 50)
 * @returns boolean indicando se a página foi rolada além do threshold
 */
export function useScroll(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold)
        ticking.current = false
      })
      ticking.current = true
    }
  }, [threshold])

  useEffect(() => {
    // Verifica o estado inicial
    setIsScrolled(window.scrollY > threshold)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      ticking.current = false
    }
  }, [threshold, handleScroll])

  return isScrolled
}


