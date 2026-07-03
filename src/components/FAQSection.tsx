import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 px-4 md:px-8 bg-neutral-950 border-b border-premium-gold/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            হাজী কাচ্চি ডাইন সম্পর্কে কাস্টমারদের মনে সাধারণত যে প্রশ্নগুলো জাগে, তার উত্তর এখানে পেয়ে যাবেন।
          </p>
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-premium-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.02)]"
              >
                {/* Trigger Button */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-5 md:px-7 py-5 flex items-center justify-between text-white focus:outline-none"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className="w-5.5 h-5.5 text-premium-gold shrink-0 mt-0.5" />
                    <span className="font-tiro text-base md:text-lg font-bold leading-tight hover:text-premium-gold transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-premium-gold shrink-0 bg-white/5 p-1.5 rounded-lg border border-white/5">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-7 pb-6 pt-1 border-t border-white/5 text-sm md:text-base font-sans text-white/75 leading-relaxed bg-primary-black/25">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
