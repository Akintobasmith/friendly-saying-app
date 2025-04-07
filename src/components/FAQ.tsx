
import React, { useState } from 'react';
import { faqs } from '@/data/faqData';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-nude-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center scroll-animate mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-white shadow-sm scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline font-playfair font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
