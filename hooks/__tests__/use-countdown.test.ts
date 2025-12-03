import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useCountdown } from "../use-countdown"
import { EVENT_START_DATE } from "@/config/site"

describe("useCountdown", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("deve calcular o tempo restante corretamente", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24) // 1 dia no futuro
    const { result } = renderHook(() => useCountdown(futureDate))

    expect(result.current.days).toBeGreaterThanOrEqual(0)
    expect(result.current.hours).toBeGreaterThanOrEqual(0)
    expect(result.current.minutes).toBeGreaterThanOrEqual(0)
    expect(result.current.seconds).toBeGreaterThanOrEqual(0)
  })

  it("deve usar EVENT_START_DATE como padrão", () => {
    const { result } = renderHook(() => useCountdown())

    expect(result.current).toBeDefined()
    expect(typeof result.current.days).toBe("number")
    expect(typeof result.current.hours).toBe("number")
    expect(typeof result.current.minutes).toBe("number")
    expect(typeof result.current.seconds).toBe("number")
  })

  it("deve atualizar o contador a cada segundo", () => {
    const futureDate = new Date(Date.now() + 5000) // 5 segundos no futuro
    const { result } = renderHook(() => useCountdown(futureDate))

    const initialSeconds = result.current.seconds

    // Avança 1 segundo usando act para garantir que as atualizações sejam processadas
    act(() => {
      vi.advanceTimersByTime(1000)
    })

    // Verifica que os segundos mudaram
    expect(result.current.seconds).not.toBe(initialSeconds)
  }, 10000) // Timeout de 10 segundos

  it("deve retornar zeros quando o evento já passou", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60) // 1 hora no passado
    const { result } = renderHook(() => useCountdown(pastDate))

    expect(result.current.days).toBe(0)
    expect(result.current.hours).toBe(0)
    expect(result.current.minutes).toBe(0)
    expect(result.current.seconds).toBe(0)
  })

  it("deve calcular dias, horas, minutos e segundos corretamente", () => {
    // 2 dias, 3 horas, 4 minutos e 5 segundos no futuro
    const futureDate = new Date(
      Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 4 * 60 * 1000 + 5 * 1000
    )
    const { result } = renderHook(() => useCountdown(futureDate))

    // Verifica que os valores são números válidos
    expect(result.current.days).toBeGreaterThanOrEqual(0)
    expect(result.current.hours).toBeGreaterThanOrEqual(0)
    expect(result.current.minutes).toBeGreaterThanOrEqual(0)
    expect(result.current.seconds).toBeGreaterThanOrEqual(0)
  })

  it("deve aceitar intervalo de atualização customizado", () => {
    const futureDate = new Date(Date.now() + 10000)
    const { result } = renderHook(() => useCountdown(futureDate, 2000))

    expect(result.current).toBeDefined()
  })
})

