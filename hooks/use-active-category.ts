import { useState, useCallback } from "react"

/**
 * Hook customizado para gerenciar categoria ativa com transição
 * @param initialCategory - Categoria inicial
 * @param transitionDelay - Delay da transição em ms (padrão: 200)
 * @returns Objeto com categoria ativa, estado de transição e função para mudar categoria
 */
export function useActiveCategory<T extends { id: string }>(
  initialCategory: T,
  transitionDelay: number = 200
) {
  const [activeCategory, setActiveCategory] = useState<T>(initialCategory)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeCategory = useCallback(
    (category: T) => {
      if (category.id === activeCategory.id) return

      setIsTransitioning(true)
      setTimeout(() => {
        setActiveCategory(category)
        setIsTransitioning(false)
      }, transitionDelay)
    },
    [activeCategory.id, transitionDelay]
  )

  return {
    activeCategory,
    isTransitioning,
    changeCategory,
  }
}


