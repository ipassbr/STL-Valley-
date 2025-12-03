import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ArtistsSection } from "@/components/sections/artists-section"
import { AccommodationTypesSection } from "@/components/sections/accommodation-types-section"
import { AmenitiesSection } from "@/components/sections/amenities-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { LocationSection } from "@/components/sections/location-section"
import { FaqSection } from "@/components/sections/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ArtistsSection />
      <AccommodationTypesSection />
      <AmenitiesSection />
      <PricingSection />
      <LocationSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
