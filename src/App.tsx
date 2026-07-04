import React, { useState } from 'react';
import { Sparkles, ArrowRight, Quote, Heart, Star, ShieldCheck } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Cart from './components/Cart';
import AboutSection from './components/AboutSection';
import ReservationSection from './components/ReservationSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { MenuItem, CartItem } from './types';
import { MENU_ITEMS, TESTIMONIALS } from './data';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger temporary notification when an item is added to cart
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart Handlers
  const handleAddToCart = (item: MenuItem, portion: 'half' | 'full') => {
    const cartItemId = `${item.id}-${portion}`;
    
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === cartItemId);
      const portionLabel = item.category === 'drinks' 
        ? (portion === 'half' ? 'গ্লাস' : 'লিটার')
        : (portion === 'half' ? 'হাফ' : 'ফুল');
        
      if (existingItem) {
        showToast(`"${item.name} (${portionLabel})" এর পরিমাণ কার্টে বাড়ানো হয়েছে!`);
        return prevCart.map((cartItem) =>
          cartItem.id === cartItemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        showToast(`"${item.name} (${portionLabel})" কার্টে যোগ করা হয়েছে!`);
        return [...prevCart, { id: cartItemId, menuItem: item, portion, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    const itemToRemove = cart.find(item => item.id === id);
    if (itemToRemove) {
      showToast(`"${itemToRemove.menuItem.name}" কার্ট থেকে বাদ দেওয়া হয়েছে।`);
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('আপনার কার্টটি খালি করা হয়েছে।');
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Filter Best Sellers for quick home grid highlights
  const featuredSpecials = MENU_ITEMS.filter(item => item.isBestSeller).slice(0, 3);

  return (
    <div className="min-h-screen bg-primary-black text-white font-sans antialiased overflow-x-hidden relative">
      
      {/* Traditional Motif Background Pattern */}
      <div className="fixed inset-0 traditional-motif pointer-events-none z-0"></div>
      
      {/* 1. Global Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={totalCartCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      {/* Toast Notification Box */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-[#121212] border border-premium-gold text-white font-sans text-xs md:text-sm font-semibold rounded-xl py-3 px-5 shadow-2xl gold-glow flex items-center space-x-2.5 max-w-sm"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-signature-red animate-pulse"></div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Global Slide-out Shopping Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 3. Main Page Body Content Switcher */}
      <main className="relative">
        {activeTab === 'home' && (
          <div>
            {/* Hero Banner Section */}
            <Hero setActiveTab={setActiveTab} />

            {/* Chef's Best Seller Quick Showcase Row */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary-black to-neutral-950">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-flex items-center space-x-1.5 bg-signature-red/10 border border-premium-gold/20 px-4 py-1.5 rounded-full text-xs font-bold text-premium-gold mb-3">
                    <Sparkles className="w-4 h-4 animate-pulse text-premium-gold" />
                    <span>আজকের বিশেষ আকর্ষণ</span>
                  </span>
                  <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-white tracking-wide">
                    আমাদের সর্বাধিক বিক্রিত <span className="text-premium-gold">শাহী খাবার</span>
                  </h3>
                  <div className="w-20 h-0.5 bg-premium-gold mx-auto mt-4"></div>
                </div>

                {/* Best Seller Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {featuredSpecials.map((item) => (
                    <div 
                      key={item.id}
                      id={`featured-card-${item.id}`}
                      className="bg-black/60 backdrop-blur-md border border-white/10 hover:border-premium-gold/40 rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.03)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col justify-between group relative"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-85"></div>
                        <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-signature-red to-red-700 text-white text-xs font-extrabold rounded-full border border-premium-gold/30">
                          বেস্ট সেলার
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
                        <div>
                          <h4 className="font-tiro text-lg font-bold text-white mb-1.5">{item.name}</h4>
                          <p className="font-sans text-xs text-white/50 mb-3 italic">{item.nameEn}</p>
                          <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed line-clamp-2">{item.description}</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
                          <span className="font-sans text-lg font-extrabold text-premium-gold">৳{item.priceFull}</span>
                          <button
                            id={`featured-add-btn-${item.id}`}
                            onClick={() => handleAddToCart(item, 'full')}
                            className="text-xs font-sans font-bold text-premium-gold hover:text-white px-3.5 py-2 bg-white/5 hover:bg-gradient-to-r hover:from-signature-red hover:to-red-700 rounded-xl border border-premium-gold/20 hover:border-premium-gold/60 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.05)] hover:shadow-[0_0_15px_rgba(193,39,45,0.3)]"
                          >
                            কার্টে যোগ করুন +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    id="home-view-all-menu"
                    onClick={() => setActiveTab('menu')}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-signature-red to-red-600 hover:from-red-600 hover:to-signature-red text-white font-sans font-bold text-sm rounded-xl border border-premium-gold/20 hover:border-premium-gold transition-all duration-300"
                  >
                    <span>সম্পূর্ণ মেনু কার্ড দেখুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Brief Traditional Promo Video / Graphic block */}
            <AboutSection />

            {/* Testimonials Review Slider */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-neutral-950 to-primary-black border-b border-premium-gold/10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
                    আমাদের সম্মানিত কাস্টমারদের মন্তব্য
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
                  <p className="font-sans text-base text-white/80 max-w-xl mx-auto leading-relaxed">
                    হাজী কাচ্চি ডাইন কাশিয়ানী-র আসল স্বাদ নিয়ে কাস্টমারদের হৃদয়ের কিছু সত্যিকারের অনুভূতি।
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((t) => (
                    <div 
                      key={t.id} 
                      className="bg-white/5 border border-white/10 hover:border-premium-gold/30 rounded-2.5xl p-6 relative shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <Quote className="absolute top-5 right-5 w-8 h-8 text-premium-gold/10 pointer-events-none" />
                      <div>
                        {/* Rating Stars */}
                        <div className="flex space-x-1 mb-4 text-premium-gold">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 fill-current ${
                                i < Math.floor(t.rating) ? 'text-premium-gold' : 'text-white/20'
                              }`} 
                            />
                          ))}
                        </div>
                        <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed italic mb-6">
                          "{t.comment}"
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-3.5 pt-4 border-t border-white/5">
                        <div className="w-10 h-10 rounded-full bg-signature-red/10 border border-premium-gold/20 flex items-center justify-center text-lg shadow-inner">
                          {t.avatar}
                        </div>
                        <div>
                          <h5 className="font-sans text-sm font-bold text-white">{t.name}</h5>
                          <span className="font-sans text-[10px] text-white/40 block mt-0.5">{t.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick FAQ summary row */}
            <FAQSection />
          </div>
        )}

        {/* Outer view page bindings */}
        {activeTab === 'menu' && <MenuSection onAddToCart={handleAddToCart} />}
        {activeTab === 'offers' && <OffersSection setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'reservation' && <ReservationSection />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* 4. Sticky Floating WhatsApp Conversion Helper */}
      <FloatingWhatsApp />

      {/* 5. Complete Brand Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
