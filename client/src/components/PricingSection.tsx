import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Can I take care of the boat removal and disposal myself?",
    answer: "Handling boat removal on your own is challenging and rare. Professionals have the right experience and equipment to ensure the process is safe and efficient.",
  },
  {
    id: "faq-2",
    question: "Are your boat disposal services eco-friendly?",
    answer: "Absolutely. We focus on environmentally responsible disposal, including recycling materials and safely managing any hazardous components.",
  },
  {
    id: "faq-3",
    question: "What paperwork do I need to remove a boat?",
    answer: "You’ll need the boat’s title and registration. For boats over 38 feet and sailboats, Coast Guard registration is also required.",
  },
  {
    id: "faq-4",
    question: "What if the boat contains hazardous materials?",
    answer: "All hazardous materials are managed according to environmental regulations to ensure safe and proper disposal.",
  },
  {
    id: "faq-5",
    question: "Do I need to be present during the boat removal?",
    answer: "Your presence isn’t required, but it can be helpful. We can coordinate everything beforehand to make the process seamless.",
  },
  {
    id: "faq-6",
    question: "Can Florida Boat Removal remove boats from hard-to-reach locations?",
    answer: "Absolutely. We have the experience and specialized equipment to safely remove boats from even the most challenging and inaccessible spots.",
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
