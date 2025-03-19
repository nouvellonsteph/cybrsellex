import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What does Cybrsellex do?",
    answer: "Cybrsellex is a specialized, high-value reseller scaling cutting-edge cybersecurity solutions. Our name reflects our expertise in reselling and go-to-market execution, while \"Lex\" reinforces selectivity and excellence in vendor partnerships. With a strong focus on the EMEA region, we act as a bridge, ensuring that innovative solutions reach the right customers efficiently. Built on trust, expertise, and business acceleration, Cybrsellex is the ideal choice for your next-generation cybersecurity trusted reseller."
  },
  {
    question: "Who can benefit from Cybrsellex's services?",
    answer: "We support cybersecurity vendors, enterprises, SOC teams, and CISOs by providing cutting-edge security solutions, consulting, and managed services."
  },
  {
    question: "How does Cybrsellex help cybersecurity vendors expand in EMEA?",
    answer: "We offer strategic positioning, lead generation, marketing, and reseller partnerships to accelerate vendor growth in the EMEA market."
  },
  {
    question: "What industries do you serve?",
    answer: "We work with enterprises, financial institutions, healthcare, government sectors, and other security-driven industries."
  },
  {
    question: "Does Cybrsellex provide managed security services?",
    answer: "Yes, we offer 24/7 security monitoring, threat detection, and incident response to ensure continuous protection."
  }
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-cybrsellex-yellow">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-baba text-center mb-8">FREQUENTLY ASK QUESTION</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-300 rounded-lg overflow-hidden bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-sm">
            <p>
              Cybrsellex has built an ecosystem of integrations and business partnerships with industry leading cybersecurity technology providers, and integrates seamlessly with best-in-class software solutions to optimize businesses protection and SOC efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
