import React, { useState } from 'react';
import { Tag, Calendar, Copy, Check, Sparkles } from 'lucide-react';
import { OFFERS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface OffersSectionProps {
  setActiveTab: (tab: string) => void;
}

export default function OffersSection({ setActiveTab }: OffersSectionProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="offers-section" className="py-20 px-4 md:px-8 bg-primary-black text-white border-b border-premium-gold/10 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-signature-red/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            হাজী কাচ্চি ডাইন স্পেশাল অফার
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            চলতি সপ্তাহের আকর্ষণীয় ডিসকাউন্ট এবং স্পেশাল ফ্যামিলি কম্বো অফারগুলো উপভোগ করুন।
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id}
              id={`offer-card-${offer.id}`}
              className="relative bg-black/60 backdrop-blur-md border-2 border-dashed border-premium-gold/30 hover:border-premium-gold/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_0_25px_rgba(212,175,55,0.12)] transition-all duration-500 overflow-hidden group"
            >
              {/* Promo Corner Tag */}
              <div className="absolute top-0 right-0 bg-signature-red text-white font-sans text-xs md:text-sm font-extrabold px-5 py-2.5 rounded-bl-2xl border-l border-b border-premium-gold/30 shadow-md">
                {offer.discountBadge}
              </div>

              {/* Promo Info */}
              <div>
                <div className="inline-flex items-center space-x-1.5 bg-premium-gold/10 text-premium-gold border border-premium-gold/25 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <Tag className="w-3.5 h-3.5" />
                  <span>সীমিত সময়ের অফার</span>
                </div>

                <h4 className="font-tiro text-2xl font-bold text-white mb-2 pr-20">
                  {offer.title}
                </h4>
                <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              {/* Bottom Block - Promo Code & CTA */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Coupon Code copy box */}
                <div className="flex items-center bg-primary-black border border-white/10 rounded-xl p-1.5 w-full sm:w-auto">
                  <span className="font-sans text-xs text-white/40 px-3 uppercase font-semibold">কুপন কোড:</span>
                  <div className="flex items-center bg-white/5 px-3.5 py-1.5 rounded-lg border border-white/5">
                    <span className="font-mono text-sm font-extrabold text-premium-gold tracking-widest">{offer.code}</span>
                  </div>
                  <button
                    id={`copy-offer-btn-${offer.id}`}
                    onClick={() => handleCopyCode(offer.code)}
                    className="p-2 ml-1 text-white/60 hover:text-premium-gold transition-colors"
                    aria-label="Copy Promo Code"
                  >
                    {copiedCode === offer.code ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Activate Action Button */}
                <button
                  id={`activate-offer-btn-${offer.id}`}
                  onClick={() => {
                    setActiveTab('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-signature-red to-red-600 hover:from-red-600 hover:to-signature-red text-white font-sans text-sm font-bold rounded-xl border border-premium-gold/20 shadow"
                >
                  <Sparkles className="w-4 h-4 text-premium-gold" />
                  <span>অর্ডার করতে মেনুতে যান</span>
                </button>

              </div>
              
              {/* Expiry line */}
              <div className="mt-4 flex items-center space-x-1.5 text-xs text-white/45">
                <Calendar className="w-3.5 h-3.5" />
                <span>মেয়াদ: {offer.validUntil} পর্যন্ত</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
