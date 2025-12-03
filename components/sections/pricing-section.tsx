import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { EVENT_YEAR } from "@/config/site"
import { accommodationPlans, pricingNotice } from "@/config/accommodations"

export function PricingSection() {
  return (
    <section id="hospedagem" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Hospedagem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Reserve sua vaga
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Garanta sua hospedagem no camping oficial do STL {EVENT_YEAR}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {accommodationPlans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border-2 shadow-xl overflow-hidden ${
                plan.isPremium
                  ? "bg-gradient-to-br from-amber-950 to-amber-900 border-amber-600"
                  : "bg-card border-primary"
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-0 right-0 px-4 py-1 rounded-bl-2xl text-sm font-medium flex items-center gap-1 ${
                  plan.isPremium
                    ? "bg-amber-500 text-amber-950"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <plan.badgeIcon className="w-4 h-4" />
                {plan.badge}
              </div>

              <div className="p-8 lg:p-10">
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.isPremium ? "text-amber-100" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={
                    plan.isPremium ? "text-amber-300/80 mb-6" : "text-muted-foreground mb-6"
                  }
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-4xl lg:text-5xl font-bold ${plan.isPremium ? "text-amber-400" : "text-primary"}`}
                    >
                      R$ {plan.price.toLocaleString("pt-BR")}
                    </span>
                    <span
                      className={plan.isPremium ? "text-amber-300/60" : "text-muted-foreground"}
                    >
                      ,00
                    </span>
                  </div>
                  <p
                    className={
                      plan.isPremium ? "text-amber-300/80 mt-2" : "text-muted-foreground mt-2"
                    }
                  >
                    em até{" "}
                    <span
                      className={
                        plan.isPremium
                          ? "font-semibold text-amber-100"
                          : "font-semibold text-foreground"
                      }
                    >
                      {plan.installments}x sem juros
                    </span>
                  </p>
                  <div
                    className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 ${
                      plan.isPremium ? "bg-amber-500/20" : "bg-primary/10"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${plan.isPremium ? "text-amber-400" : "text-primary"}`}
                    >
                      = R$ {plan.perDayPerPerson} / diária / pessoa
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPremium ? "text-amber-400" : "text-primary"}`}
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
                  className={`w-full text-lg py-6 ${
                    plan.isPremium
                      ? "bg-amber-500 hover:bg-amber-400 text-amber-950"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  asChild
                >
                  <a href="https://stlvalley.com.br" target="_blank" rel="noopener noreferrer">
                    Reservar agora
                  </a>
                </Button>
              </div>
            </div>
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
