import { describe, it, expect } from "vitest"
import { accommodationPlans, pricingNotice } from "../accommodations"

describe("config/accommodations", () => {
  describe("accommodationPlans", () => {
    it("deve ter pelo menos um plano", () => {
      expect(accommodationPlans.length).toBeGreaterThan(0)
    })

    it("cada plano deve ter todas as propriedades obrigatórias", () => {
      accommodationPlans.forEach(plan => {
        expect(plan.id).toBeTruthy()
        expect(plan.name).toBeTruthy()
        expect(plan.description).toBeTruthy()
        expect(plan.price).toBeGreaterThan(0)
        expect(plan.installments).toBeGreaterThan(0)
        expect(plan.perDayPerPerson).toBeTruthy()
        expect(plan.badge).toBeTruthy()
        expect(plan.badgeIcon).toBeDefined()
        expect(Array.isArray(plan.features)).toBe(true)
        expect(plan.features.length).toBeGreaterThan(0)
      })
    })

    it("deve ter o plano Barraca MOOR", () => {
      const barracaPlan = accommodationPlans.find(plan => plan.id === "barraca")
      expect(barracaPlan).toBeDefined()
      expect(barracaPlan?.name).toBe("Barraca MOOR")
    })

    it("deve ter o plano Cabana Premium", () => {
      const cabanaPlan = accommodationPlans.find(plan => plan.id === "cabana")
      expect(cabanaPlan).toBeDefined()
      expect(cabanaPlan?.name).toBe("Cabana Premium")
      expect(cabanaPlan?.isPremium).toBe(true)
    })
  })

  describe("pricingNotice", () => {
    it("deve estar definido", () => {
      expect(pricingNotice).toBeTruthy()
      expect(typeof pricingNotice).toBe("string")
    })
  })
})

