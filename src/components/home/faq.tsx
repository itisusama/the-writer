import { ui } from "@/barrel/ui";
import { FAQS } from "@/lib/marketing";

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-muted-foreground">
          Everything you need to know about the product and plans.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <ui.Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <ui.AccordionItem key={i} value={`item-${i}`}>
              <ui.AccordionTrigger className="text-left">
                {item.q}
              </ui.AccordionTrigger>
              <ui.AccordionContent className="text-muted-foreground">
                {item.a}
              </ui.AccordionContent>
            </ui.AccordionItem>
          ))}
        </ui.Accordion>
      </div>
    </section>
  );
}