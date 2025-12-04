import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useActiveCategory } from "../use-active-category"

type TestCategory = {
  id: string
  name: string
}

describe("useActiveCategory", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const initialCategory: TestCategory = { id: "1", name: "Category 1" }

  it("deve iniciar com categoria inicial", () => {
    const { result } = renderHook(() => useActiveCategory(initialCategory))

    expect(result.current.activeCategory).toEqual(initialCategory)
    expect(result.current.isTransitioning).toBe(false)
  })

  it("deve mudar categoria com transição", () => {
    const newCategory: TestCategory = { id: "2", name: "Category 2" }
    const { result } = renderHook(() => useActiveCategory(initialCategory))

    act(() => {
      result.current.changeCategory(newCategory)
    })

    expect(result.current.isTransitioning).toBe(true)
    expect(result.current.activeCategory).toEqual(initialCategory) // Ainda não mudou

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(result.current.isTransitioning).toBe(false)
    expect(result.current.activeCategory).toEqual(newCategory)
  })

  it("não deve mudar se for a mesma categoria", () => {
    const { result } = renderHook(() => useActiveCategory(initialCategory))

    act(() => {
      result.current.changeCategory(initialCategory)
    })

    expect(result.current.isTransitioning).toBe(false)
    expect(result.current.activeCategory).toEqual(initialCategory)
  })

  it("deve aceitar delay customizado", () => {
    const newCategory: TestCategory = { id: "2", name: "Category 2" }
    const { result } = renderHook(() => useActiveCategory(initialCategory, 500))

    act(() => {
      result.current.changeCategory(newCategory)
    })

    expect(result.current.isTransitioning).toBe(true)

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(result.current.isTransitioning).toBe(true) // Ainda em transição

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(result.current.isTransitioning).toBe(false)
    expect(result.current.activeCategory).toEqual(newCategory)
  })
})


