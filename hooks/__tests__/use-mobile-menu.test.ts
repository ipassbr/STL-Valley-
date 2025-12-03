import { describe, it, expect } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useMobileMenu } from "../use-mobile-menu"

describe("useMobileMenu", () => {
  it("deve iniciar com menu fechado", () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.isOpen).toBe(false)
  })

  it("deve abrir o menu", () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.open()
    })

    expect(result.current.isOpen).toBe(true)
  })

  it("deve fechar o menu", () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.open()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.close()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it("deve alternar o estado do menu", () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)
  })
})

