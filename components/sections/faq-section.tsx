import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs, faqSectionConfig } from "@/config/faqs"
import { cn } from "@/lib/utils"

export function FaqSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-primary font-medium uppercase tracking-widest text-xs sm:text-sm">
            {faqSectionConfig.subtitle}
          </span>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 px-2">
            {faqSectionConfig.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            {faqSectionConfig.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4" aria-label="Perguntas frequentes">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn(
                  "bg-card border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 overflow-hidden transition-all duration-300",
                  "data-[state=open]:shadow-lg data-[state=open]:border-primary/50"
                )}
              >
                <AccordionTrigger className={cn(
                  "text-left text-foreground font-semibold py-4 sm:py-5 hover:no-underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[56px] sm:min-h-[60px] text-sm sm:text-base transition-colors",
                  "hover:text-primary"
                )}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={cn(
                  "text-muted-foreground pb-4 sm:pb-5 leading-relaxed text-sm sm:text-base transition-all duration-300",
                  "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                )}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center px-2">
          <p className="text-muted-foreground mb-4 sm:mb-5 text-sm sm:text-base md:text-lg">{faqSectionConfig.contactText}</p>
          <a
            href={`mailto:${faqSectionConfig.contactEmail}`}
            className={cn(
              "inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-md px-4 py-2 text-sm sm:text-base transition-all duration-300",
              "hover:scale-105 hover:underline"
            )}
            aria-label={`Enviar email para ${faqSectionConfig.contactEmail}`}
          >
            {faqSectionConfig.contactEmail}
          </a>
        </div>
      </div>
    </section>
  )
}
