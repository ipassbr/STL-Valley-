"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigationItems, headerConfig } from "@/config/navigation"
import { useScroll } from "@/hooks/use-scroll"
import { useMobileMenu } from "@/hooks/use-mobile-menu"

export function Header() {
  const isScrolled = useScroll(50)
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <span
              className={cn(
                "text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {headerConfig.brandName}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-70",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "border-2 transition-all",
                isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              )}
              asChild
            >
              <a href={headerConfig.reservationButton.href}>
                {headerConfig.reservationButton.label}
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              asChild
            >
              <a
                href={headerConfig.ticketsButton.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {headerConfig.ticketsButton.label}
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navigationItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-foreground font-medium"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            <Button
              variant="outline"
              className="w-full border-primary text-primary bg-transparent"
              asChild
            >
              <a href={headerConfig.mobileReservationButton.href}>
                {headerConfig.mobileReservationButton.label}
              </a>
            </Button>
            <Button className="w-full bg-secondary text-secondary-foreground" asChild>
              <a
                href={headerConfig.mobileTicketsButton.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {headerConfig.mobileTicketsButton.label}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
