import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  toggleCart: () => void;
}

export default function Header({ activeTab, setActiveTab, cartCount, toggleCart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'হোম' },
    { id: 'menu', label: 'মেনু কার্ড' },
    { id: 'offers', label: 'স্পেশাল অফার' },
    { id: 'about', label: 'আমাদের সম্পর্কে' },
    { id: 'gallery', label: 'গ্যালারি' },
    { id: 'reservation', label: 'টেবিল বুকিং' },
    { id: 'contact', label: 'যোগাযোগ' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-primary-black/95 backdrop-blur-md border-b border-premium-gold/20 py-3 px-4 md:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-logo"
        >
          {/* Circular Traditional SVG Chef & Biryani Logo */}
          <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-signature-red to-primary-black border-2 border-premium-gold rounded-full shadow-inner overflow-hidden">
            <svg 
              viewBox="0 0 100 100" 
              className="w-9 h-9 fill-current text-premium-gold transform group-hover:scale-110 transition-transform duration-300"
            >
              {/* Steaming Handi Outline */}
              <path d="M25,50 C25,35 75,35 75,50 L70,80 C70,85 30,85 30,80 Z" fill="none" stroke="#D4AF37" strokeWidth="4" />
              {/* Handi Lid */}
              <path d="M22,46 L78,46 C78,42 22,42 22,46 Z" fill="#C1272D" stroke="#D4AF37" strokeWidth="3" />
              <circle cx="50" cy="38" r="4" fill="#D4AF37" />
              {/* Steam waves */}
              <path d="M42,28 Q45,22 42,16" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50,30 Q53,24 50,18" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M58,28 Q61,22 58,16" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
              {/* Accent stars */}
              <polygon points="18,30 20,33 23,31 21,28" fill="#D4AF37" />
              <polygon points="82,30 80,33 77,31 79,28" fill="#D4AF37" />
            </svg>
            {/* Spinning decorative golden dots border */}
            <div className="absolute inset-0 border border-dashed border-premium-gold/40 rounded-full animate-spin-slow"></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="font-tiro text-xl md:text-2xl font-bold text-premium-gold tracking-wide leading-none group-hover:text-signature-red transition-colors duration-300">
              হাজী কাচ্চি ডাইন
            </h1>
            <span className="text-[10px] md:text-xs text-cream/70 font-sans tracking-widest leading-none mt-1">
              কাশিয়ানী | আসল স্বাদ, বারবার মনে পড়ে
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-300 relative ${
                activeTab === item.id 
                  ? 'text-premium-gold bg-signature-red/10' 
                  : 'text-white/80 hover:text-premium-gold hover:bg-white/5'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-premium-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="flex items-center space-x-2 md:space-x-4">
          
          {/* Cart Icon */}
          <button 
            id="header-cart-btn"
            onClick={toggleCart}
            className="p-2.5 relative bg-signature-red/10 hover:bg-signature-red/20 border border-signature-red/30 rounded-full text-premium-gold hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-premium-gold/50"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 bg-premium-gold text-primary-black font-sans text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border border-primary-black"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Call Hotline Button (Desktop) */}
          <a 
            id="header-call-btn"
            href="https://wa.me/8801648960792"
            target="_blank"
            rel="noopener noreferrer" 
            className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-signature-red to-red-700 hover:from-red-700 hover:to-signature-red text-white font-sans text-sm font-semibold rounded-lg shadow-md border border-premium-gold/30 hover:border-premium-gold transition-all duration-300 group"
          >
            <Phone className="w-4 h-4 group-hover:animate-bounce" />
            <span>কল করুন</span>
          </a>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white hover:text-premium-gold transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-3 border-t border-white/10 pt-2 pb-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'text-premium-gold bg-signature-red/20 border-l-4 border-premium-gold' 
                      : 'text-white/80 hover:text-premium-gold hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 px-4 border-t border-white/5 mt-2">
                <a 
                  id="mobile-drawer-call-btn"
                  href="https://wa.me/8801648960792"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-signature-red to-red-700 text-white font-sans font-bold rounded-lg"
                >
                  <Phone className="w-5 h-5 animate-bounce" />
                  <span>সরাসরি হোয়াটসঅ্যাপ করুন (+8801648-960792)</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
