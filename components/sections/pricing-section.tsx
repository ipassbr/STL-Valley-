import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { EVENT_YEAR } from "@/config/site"
import { accommodationPlans, pricingNotice } from "@/config/accommodations"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <section id="hospedagem" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background" aria-labelledby="hospedagem-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-xs sm:text-sm">
            Hospedagem
          </span>
          <h2 id="hospedagem-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 px-2">
            Reserve sua vaga
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Garanta sua hospedagem no camping oficial do STL {EVENT_YEAR}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto" role="list">
          {accommodationPlans.map(plan => (
            <article
              key={plan.id}
              role="listitem"
              className={cn(
                "relative rounded-3xl border-2 shadow-xl overflow-hidden transition-all duration-500 ease-in-out",
                plan.isPremium
                  ? "bg-gradient-to-br from-amber-950 via-amber-900 to-amber-950 border-amber-600/50 hover:shadow-2xl hover:scale-[1.02] hover:border-amber-500"
                  : "bg-card border-primary/50 hover:shadow-2xl hover:scale-[1.02] hover:border-primary"
              )}
            >
              {/* Badge */}
              <div
                className={cn(
                  "absolute top-0 right-0 px-5 py-2 rounded-bl-2xl text-sm font-semibold flex items-center gap-2 shadow-lg transition-all duration-300",
                  plan.isPremium
                    ? "bg-amber-500 text-amber-950 hover:bg-amber-400"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                aria-label={`Badge: ${plan.badge}`}
              >
                <plan.badgeIcon className="w-4 h-4" aria-hidden="true" />
                {plan.badge}
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${plan.isPremium ? "text-amber-100" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={
                    plan.isPremium ? "text-amber-300/80 mb-4 sm:mb-6 text-sm sm:text-base" : "text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base"
                  }
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-medium opacity-80 mb-1 block w-full">
                      {plan.isPremium ? "A partir de" : "Valor total"}
                    </span>
                    <span
                      className={cn(
                        "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
                        plan.isPremium ? "text-amber-400 drop-shadow-lg" : "text-primary"
                      )}
                    >
                      R$ {plan.price.toLocaleString("pt-BR")}
                    </span>
                    <span
                      className={cn(
                        "text-2xl sm:text-3xl opacity-70",
                        plan.isPremium ? "text-amber-300/70" : "text-muted-foreground"
                      )}
                    >
                      ,00
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-3 text-sm sm:text-base font-medium",
                      plan.isPremium ? "text-amber-200" : "text-muted-foreground"
                    )}
                  >
                    em até{" "}
                    <span
                      className={cn(
                        "font-bold",
                        plan.isPremium ? "text-amber-100" : "text-foreground"
                      )}
                    >
                      {plan.installments}x sem juros
                    </span>
                  </p>
                  <div
                    className={cn(
                      "mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 border backdrop-blur-sm",
                      plan.isPremium 
                        ? "bg-amber-500/20 border-amber-500/30" 
                        : "bg-primary/10 border-primary/20"
                    )}
                  >
                    <span
                      className={cn(
                        "text-xs sm:text-sm font-semibold",
                        plan.isPremium ? "text-amber-300" : "text-primary"
                      )}
                    >
                      = R$ {plan.perDayPerPerson} / diária / pessoa
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8" role="list">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3" role="listitem">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPremium ? "text-amber-400" : "text-primary"}`}
                        aria-hidden="true"
                      />
                      <span className={plan.isPremium ? "text-amber-100" : "text-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  size="lg"
                  className={cn(
                    "w-full text-base sm:text-lg py-5 sm:py-6 min-h-[52px] sm:min-h-[56px] focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl",
                    plan.isPremium
                      ? "bg-amber-500 hover:bg-amber-400 text-amber-950 hover:scale-105"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105"
                  )}
                  asChild
                >
                  <a
                    href="https://stlvalley.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Reservar agora - ${plan.name} (abre em nova aba)`}
                  >
                    Reservar agora
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm bg-muted rounded-xl px-6 py-4 inline-block">
            {pricingNotice.split("obrigatório")[0]}
            <span className="font-semibold">obrigatório</span>
            {pricingNotice.split("obrigatório")[1] || ""}
          </p>
        </div>
      </div>
    </section>
  )
}
