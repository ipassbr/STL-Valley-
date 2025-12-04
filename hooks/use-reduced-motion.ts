import { useState, useEffect } from "react"

/**
 * Hook customizado para detectar preferência de movimento reduzido do usuário
 * Otimizado para performance com cache do resultado da media query
 * 
 * @returns boolean indicando se o usuário prefere movimento reduzido
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Verificar se está disponível no navegador
    if (typeof window === "undefined" || !window.matchMedia) {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    // Definir valor inicial
    setPrefersReducedMotion(mediaQuery.matches)

    // Handler otimizado com useCallback implícito via closure
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(e.matches)
    }

    // Adicionar listener
    // Usar addEventListener se disponível (mais moderno), senão usar addListener (compatibilidade)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      // Fallback para navegadores mais antigos
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  return prefersReducedMotion
}

