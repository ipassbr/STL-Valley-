"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigationItems, headerConfig } from "@/config/navigation"
import { useScroll } from "@/hooks/use-scroll"
import { useMobileMenu } from "@/hooks/use-mobile-menu"
import { useEffect, useRef } from "react"

export function Header() {
  const isScrolled = useScroll(50)
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu()
        mobileMenuButtonRef.current?.focus()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      // Trap focus within mobile menu when open
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements?.[0] as HTMLElement
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener("keydown", handleTab)
      firstElement?.focus()

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.removeEventListener("keydown", handleTab)
      }
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled 
            ? "bg-background/98 backdrop-blur-lg shadow-md translate-y-0" 
            : "bg-transparent backdrop-blur-none translate-y-0"
        )}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500 ease-in-out",
            isScrolled ? "h-16" : "h-16 lg:h-20"
          )}>
            <a
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-md"
              aria-label={`${headerConfig.brandName} - Ir para página inicial`}
            >
              <span
                className={cn(
                  "text-xl lg:text-2xl font-bold tracking-tight transition-all duration-300 ease-in-out",
                  isScrolled 
                    ? "text-primary scale-100" 
                    : "text-white scale-100 drop-shadow-lg"
                )}
              >
                {headerConfig.brandName}
              </span>
            </a>

            <nav
              className="hidden lg:flex items-center gap-8"
              role="navigation"
              aria-label="Navegação principal"
            >
              {navigationItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 ease-in-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-md px-2 py-1 relative group",
                    isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-white/95 hover:text-white drop-shadow-sm"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isScrolled ? "w-0 group-hover:w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "border-2 transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2",
                  isScrolled
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-sm"
                    : "border-white/90 text-white hover:bg-white hover:text-foreground bg-transparent backdrop-blur-sm shadow-lg"
                )}
                asChild
              >
                <a href={headerConfig.reservationButton.href}>
                  {headerConfig.reservationButton.label}
                </a>
              </Button>
              <Button
                size="sm"
                className={cn(
                  "transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2",
                  isScrolled
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-sm"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg"
                )}
                asChild
              >
                <a
                  href={headerConfig.ticketsButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${headerConfig.ticketsButton.label} (abre em nova aba)`}
                >
                  {headerConfig.ticketsButton.label}
                </a>
              </Button>
            </div>

            <button
              ref={mobileMenuButtonRef}
              className="lg:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
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
          ref={mobileMenuRef}
          id="mobile-navigation"
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 ease-in-out shadow-lg",
            isMobileMenuOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-2"
          )}
          role="navigation"
          aria-label="Navegação mobile"
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 px-2 text-foreground font-medium rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[44px] flex items-center"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                className="w-full border-primary text-primary bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]"
                asChild
              >
                <a href={headerConfig.mobileReservationButton.href}>
                  {headerConfig.mobileReservationButton.label}
                </a>
              </Button>
              <Button
                className="w-full bg-secondary text-secondary-foreground focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]"
                asChild
              >
                <a
                  href={headerConfig.mobileTicketsButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${headerConfig.mobileTicketsButton.label} (abre em nova aba)`}
                >
                  {headerConfig.mobileTicketsButton.label}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
