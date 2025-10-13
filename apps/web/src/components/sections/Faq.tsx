import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@workspace/ui/components/accordion";

function FaqSection() {
  const faqs = [
    {
      question: "How do I book a trip?",
      answer:
        "You can book a trip directly on our website or contact our support team for personalized planning.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I customize my travel package?",
      answer:
        "Absolutely! We specialize in custom trip planning to fit your needs.",
    },
    {
      question: "Is there 24/7 support?",
      answer:
        "Yes, our support team is available around the clock to assist you.",
    },
  ];

  return (
    <section id="faq" className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FaqSection;
