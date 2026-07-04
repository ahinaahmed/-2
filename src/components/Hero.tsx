import React from 'react';
import { ShoppingBag, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const USP_ITEMS = [
    '100% খাঁটি বাসমতী চাল ও সুগন্ধি ঘি',
    'প্রতিদিন ফ্রেশ সংগৃহীত কচি খাসির মাংস',
    'কোনো কৃত্রিম ফ্লেভার বা কেমিক্যাল মুক্ত',
    'পুরান ঢাকার আসল ঐতিহ্যবাহী দম কাচ্চি'
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-primary-black py-16 px-4 md:px-8 overflow-hidden border-b border-premium-gold/15">
      
      {/* Visual background accents */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img 
          src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1920&auto=format&fit=crop" 
          alt="Haji Kacchi Background" 
          className="w-full h-full object-cover filter brightness-50 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-black/80 to-primary-black"></div>
      </div>

      {/* Decorative Gold Rings & Traditional Motif */}
      <div className="absolute top-10 right-10 w-96 h-96 border border-premium-gold/5 rounded-full pointer-events-none animate-spin-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-dashed border-signature-red/10 rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Chef Badge / Accent */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-signature-red/30 to-premium-gold/20 border border-premium-gold/30 rounded-full px-4 py-1.5 mb-6 shadow-md"
        >
          <Sparkles className="w-4 h-4 text-premium-gold animate-pulse" />
          <span className="font-sans text-xs md:text-sm font-semibold text-premium-gold tracking-wide">
            কাশিয়ানীর সেরা ঐতিহ্যবাহী কাচ্চি লাভারদের প্রিয় ঠিকানা!
          </span>
        </motion.div>

        {/* Brand Name Headline */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-tiro text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-wide"
        >
          স্বাগতম <span className="text-premium-gold block sm:inline">হাজী কাচ্চি ডাইন</span>
        </motion.h2>

        {/* Slogan */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-tiro text-2xl md:text-4xl text-signature-red italic font-semibold mb-6 tracking-wide drop-shadow-lg"
        >
          "আসল স্বাদ, বারবার মনে পড়ে"
        </motion.p>

        {/* Short introduction paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base md:text-xl text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          পুরান ঢাকার খাঁটি রাজকীয় বাবুর্চির নিখুঁত রেসিপিতে তৈরি জাফরান-সুগন্ধি ধোয়া ওঠা কাচ্চি বিরিয়ানি এখন আপনাদের নিজের শহর কাশিয়ানীতে। আসল মশলা, খাঁটি ঘি আর কচি খাসির মাংসের যুগলবন্দীতে আপনার প্রতিটি কামড় হবে রাজকীয়!
        </motion.p>

        {/* Dynamic CTA buttons with hover reactions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            id="hero-view-menu-btn"
            onClick={() => {
              setActiveTab('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-4 bg-gradient-to-r from-signature-red to-red-700 hover:from-red-700 hover:to-signature-red text-white font-sans text-lg font-bold rounded-xl border border-premium-gold/30 hover:border-premium-gold transition-all duration-300 shadow-lg hover:shadow-red-950 cursor-pointer transform hover:-translate-y-1"
          >
            <ShoppingBag className="w-5 h-5 text-premium-gold" />
            <span>ডিজিটাল মেনু কার্ড</span>
          </button>

          <button
            id="hero-book-table-btn"
            onClick={() => {
              setActiveTab('reservation');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-4 bg-transparent hover:bg-white/5 text-premium-gold font-sans text-lg font-bold rounded-xl border-2 border-premium-gold transition-all duration-300 shadow-md cursor-pointer transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 text-premium-gold" />
            <span>টেবিল বুকিং করুন</span>
          </button>
        </motion.div>

        {/* Highlighted USP Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {USP_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-md hover:border-premium-gold/40 transition-colors duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-premium-gold shrink-0" />
              <span className="font-sans text-sm font-medium text-white/90 text-left leading-tight">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
