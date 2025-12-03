import { describe, it, expect } from "vitest"
import {
  EVENT_START_DATE,
  EVENT_END_DATE,
  CHECK_IN_DATE,
  CHECK_OUT_DATE,
  EVENT_YEAR,
  EVENT_PERIOD,
  formatDateBR,
  formatDateTimeBR,
} from "../site"

describe("config/site", () => {
  describe("Datas do evento", () => {
    it("deve ter EVENT_START_DATE definida", () => {
      expect(EVENT_START_DATE).toBeInstanceOf(Date)
      expect(EVENT_START_DATE.getFullYear()).toBe(2026)
    })

    it("deve ter EVENT_END_DATE definida", () => {
      expect(EVENT_END_DATE).toBeInstanceOf(Date)
      expect(EVENT_END_DATE.getFullYear()).toBe(2026)
    })

    it("deve ter CHECK_IN_DATE definida", () => {
      expect(CHECK_IN_DATE).toBeInstanceOf(Date)
    })

    it("deve ter CHECK_OUT_DATE definida", () => {
      expect(CHECK_OUT_DATE).toBeInstanceOf(Date)
    })

    it("deve ter EVENT_YEAR como 2026", () => {
      expect(EVENT_YEAR).toBe(2026)
    })

    it("deve ter EVENT_PERIOD definido", () => {
      expect(EVENT_PERIOD).toBeTruthy()
      expect(typeof EVENT_PERIOD).toBe("string")
    })
  })

  describe("Funções de formatação", () => {
    it("formatDateBR deve formatar data corretamente", () => {
      const date = new Date("2026-06-03T00:00:00-03:00")
      const formatted = formatDateBR(date)

      // Formato esperado: DD/MM/YYYY (ex: "03/06/2026")
      expect(formatted).toMatch(/^\d{2}\/\d{2}\/\d{4}$/)
      expect(formatted).toContain("03")
      expect(formatted).toContain("2026")
    })

    it("formatDateTimeBR deve formatar data e hora corretamente", () => {
      const date = new Date("2026-06-03T12:00:00-03:00")
      const formatted = formatDateTimeBR(date)

      // Formato esperado: DD/MM/YYYY, HH:mm (ex: "03/06/2026, 12:00")
      expect(formatted).toMatch(/\d{2}\/\d{2}\/\d{4}/)
      expect(formatted).toContain("03")
      expect(formatted).toContain("2026")
      expect(formatted).toContain("12")
    })
  })
})

