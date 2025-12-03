import { useState, useCallback } from "react"

/**
 * Hook customizado para gerenciar estado do menu mobile
 * @returns Objeto com estado e funções para controlar o menu mobile
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}

