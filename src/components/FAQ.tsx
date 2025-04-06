
import React, { useState } from 'react';
import { faqs } from '@/data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-nude-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center scroll-animate">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-4 border border-border rounded-lg overflow-hidden transition-all duration-300 scroll-animate ${
                activeIndex === index ? 'bg-white shadow-md' : 'bg-white'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-playfair font-medium text-lg">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                    ? 'max-h-96 pb-6 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
