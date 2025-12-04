import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { renderHook, waitFor } from "@testing-library/react"
import { useScroll } from "../use-scroll"

describe("useScroll", () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("deve retornar false quando scrollY é menor que threshold", () => {
    window.scrollY = 30
    const { result } = renderHook(() => useScroll(50))

    expect(result.current).toBe(false)
  })

  it("deve retornar true quando scrollY é maior que threshold", () => {
    window.scrollY = 100
    const { result } = renderHook(() => useScroll(50))

    expect(result.current).toBe(true)
  })

  it("deve usar threshold padrão de 50", () => {
    window.scrollY = 60
    const { result } = renderHook(() => useScroll())

    expect(result.current).toBe(true)
  })

  it("deve atualizar quando scrollY muda", async () => {
    window.scrollY = 30
    const { result } = renderHook(() => useScroll(50))

    expect(result.current).toBe(false)

    // Simula scroll
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 100,
    })

    // Dispara evento de scroll
    window.dispatchEvent(new Event("scroll"))

    // Aguarda o requestAnimationFrame executar
    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })
})


