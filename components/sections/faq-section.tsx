import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs, faqSectionConfig } from "@/config/faqs"

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            {faqSectionConfig.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            {faqSectionConfig.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {faqSectionConfig.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{faqSectionConfig.contactText}</p>
          <a
            href={`mailto:${faqSectionConfig.contactEmail}`}
            className="text-primary font-medium hover:underline"
          >
            {faqSectionConfig.contactEmail}
          </a>
        </div>
      </div>
    </section>
  )
}
