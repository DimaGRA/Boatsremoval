import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "What if I want to handle the removal and disposal on my own?",
    answer: "Managing boat removal by yourself is uncommon and difficult. Professionals have the expertise and equipment needed for safe and efficient disposal.",
  },
  {
    id: "faq-2",
    question: "Are your boat disposal services environmentally conscious?",
    answer: "Yes, we prioritize environmentally friendly disposal methods, including recycling and proper handling of hazardous materials.",
  },
  {
    id: "faq-3",
    question: "What paperwork is needed for removing a boat?",
    answer: "The essential documents include the boat's title and registration. For boats over 38 feet and sailboats, coast guard registration is also required.",
  },
  {
    id: "faq-4",
    question: "What happens if the boat has hazardous materials onboard?",
    answer: "Hazardous materials are handled in compliance with environmental laws to guarantee safe and appropriate disposal.",
  },
  {
    id: "faq-5",
    question: "Is my presence required during the boat removal process?",
    answer: "While it's not necessary for you to be present, it can be helpful. We can arrange everything in advance to ensure a smooth process.",
  },
  {
    id: "faq-6",
    question: "Can BoatsRemoval handle boats in inaccessible places?",
    answer: "Yes, we have the expertise and equipment to effectively remove boats from even the most inaccessible and difficult-to-reach locations.",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Find answers to common questions about our boat removal services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="bg-background rounded-md border px-6" data-testid={`accordion-${faq.id}`}>
              <AccordionTrigger className="text-left hover:no-underline" data-testid={`trigger-${faq.id}`}>
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`content-${faq.id}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
