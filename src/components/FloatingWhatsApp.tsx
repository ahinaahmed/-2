import React from 'react';
import { MessageSquareCode, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const message = 'হ্যালো হাজী কাচ্চি ডাইন (কাশিয়ানী)! আমি আপনাদের আজকের স্পেশাল কাচ্চি বিরিয়ানি ও হোম ডেলিভারি সম্পর্কে জানতে চাই।';
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/8801648960792?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center space-x-2 bg-gradient-to-r from-[#1E7A3E] to-[#2ecc71] text-white p-3.5 rounded-full shadow-2xl border-2 border-premium-gold/30 hover:border-premium-gold hover:shadow-[#1E7A3E]/50 transition-all duration-300 group"
        aria-label="Contact WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold tracking-wide font-sans">
          যোগাযোগ করুন
        </span>
        {/* Pulsing indicator ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#2ecc71] animate-ping opacity-35 pointer-events-none"></div>
      </motion.a>
    </div>
  );
}
