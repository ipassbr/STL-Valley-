import { describe, it, expect } from "vitest"
import { artists, artistsSectionConfig } from "../artists"

describe("config/artists", () => {
  describe("artists", () => {
    it("deve ter pelo menos um artista", () => {
      expect(artists.length).toBeGreaterThan(0)
    })

    it("cada artista deve ter todas as propriedades obrigatórias", () => {
      artists.forEach(artist => {
        expect(artist.name).toBeTruthy()
        expect(artist.genre).toBeTruthy()
        expect(artist.image).toBeTruthy()
      })
    })

    it("não deve ter artistas duplicados", () => {
      const names = artists.map(artist => artist.name)
      const uniqueNames = new Set(names)
      expect(uniqueNames.size).toBe(names.length)
    })
  })

  describe("artistsSectionConfig", () => {
    it("deve ter todas as propriedades de configuração", () => {
      expect(artistsSectionConfig.title).toBeTruthy()
      expect(artistsSectionConfig.subtitle).toBeTruthy()
      expect(artistsSectionConfig.description).toBeTruthy()
      expect(artistsSectionConfig.exclusiveBadge).toBeTruthy()
    })
  })
})


