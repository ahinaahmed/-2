import React, { useState } from 'react';
import { Search, ShoppingCart, Sparkles, Filter } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, portion: 'half' | 'full') => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [portions, setPortions] = useState<Record<string, 'half' | 'full'>>({});

  const categories = [
    { id: 'all', label: 'সব খাবার' },
    { id: 'biryani', label: 'কাচ্চি বিরিয়ানি' },
    { id: 'curry_tehari', label: 'পোলাও, তেহারি ও রেজালা' },
    { id: 'kebabs', label: 'অতিরিক্ত আইটেম' },
    { id: 'drinks', label: 'বোরহানি ও পানীয়' },
  ];

  // Handle portion selection changes for a specific item
  const handlePortionChange = (itemId: string, portion: 'half' | 'full') => {
    setPortions((prev) => ({
      ...prev,
      [itemId]: portion,
    }));
  };

  // Filter items by category and search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const cleanSearch = searchQuery.toLowerCase();
    const matchesSearch = 
      item.name.toLowerCase().includes(cleanSearch) || 
      item.nameEn.toLowerCase().includes(cleanSearch) ||
      item.description.toLowerCase().includes(cleanSearch);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu-section" className="py-16 px-4 md:px-8 bg-primary-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            হাজী কাচ্চি ডাইন ডিজিটাল মেনু কার্ড
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            আমাদের প্রতিটি খাবার খাঁটি ও স্বাস্থ্যসম্মত উপাদানে তৈরি। আপনার পছন্দের আইটেমটি বেছে নিন এবং সরাসরি কার্টে যোগ করে অর্ডার করুন।
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="bg-black/60 backdrop-blur-md border border-premium-gold/30 rounded-2xl p-4 md:p-6 mb-10 shadow-[0_0_20px_rgba(212,175,55,0.06)]">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-premium-gold" />
              <input
                id="menu-search-input"
                type="text"
                placeholder="খাবারের নাম খুঁজুন (যেমন: কাচ্চি, রোস্ট, ফিরনি...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-black/80 border border-white/10 rounded-xl font-sans text-sm text-white placeholder-white/50 focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-all duration-300"
              />
            </div>

            {/* Category selection */}
            <div className="flex items-center space-x-2 text-premium-gold w-full lg:w-auto shrink-0 overflow-x-auto no-scrollbar py-1">
              <Filter className="w-4 h-4 shrink-0 hidden md:block" />
              <span className="font-sans text-sm font-semibold hidden md:block">ক্যাটাগরি:</span>
              <div className="flex space-x-1.5 overflow-x-auto no-scrollbar py-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    id={`cat-btn-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg font-sans text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-signature-red text-white border border-premium-gold/30'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-2xl">
            <p className="font-sans text-lg text-white/60 mb-2">দুঃখিত, কোনো খাবার পাওয়া যায়নি!</p>
            <p className="font-sans text-sm text-premium-gold/80">ভিন্ন কীওয়ার্ড দিয়ে পুনরায় সার্চ করে দেখুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => {
                const selectedPortion = portions[item.id] || 'full';
                const hasHalfOption = !!item.priceHalf;
                const currentPrice = selectedPortion === 'half' && item.priceHalf ? item.priceHalf : item.priceFull;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={item.id}
                    id={`menu-card-${item.id}`}
                    className="flex flex-col bg-black/60 backdrop-blur-md border border-white/10 hover:border-premium-gold/40 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.02)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-500 group relative"
                  >
                    {/* Item Image with Badges */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-85"></div>
                      
                      {/* Badge triggers */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {item.isBestSeller && (
                          <span className="inline-flex items-center space-x-1 px-3 py-1 bg-signature-red text-white text-xs font-bold rounded-full shadow border border-premium-gold/30">
                            <Sparkles className="w-3 h-3 text-premium-gold animate-pulse" />
                            <span>সেরা বিক্রেতা</span>
                          </span>
                        )}
                        {item.isChefsSpecial && (
                          <span className="inline-flex items-center space-x-1 px-3 py-1 bg-premium-gold text-primary-black text-xs font-extrabold rounded-full shadow border border-white/20">
                            <span>বাবুর্চির স্পেশাল</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Name and English Transliteration */}
                        <h4 className="font-tiro text-xl font-bold text-white mb-1 group-hover:text-premium-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="font-sans text-xs text-white/50 mb-3 italic tracking-wide">
                          {item.nameEn}
                        </p>
                        
                        {/* Description */}
                        <p className="font-sans text-sm text-white/75 leading-relaxed mb-4 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Controls and Actions */}
                      <div>
                        {/* Portion Toggle (Half / Full) if applicable */}
                        {hasHalfOption ? (
                          <div className="flex items-center justify-between bg-primary-black/60 border border-white/5 rounded-xl p-1 mb-4">
                            <span className="font-sans text-xs text-white/60 pl-3">সাইজ সিলেক্ট করুন:</span>
                            <div className="flex space-x-1">
                              <button
                                id={`portion-half-${item.id}`}
                                onClick={() => handlePortionChange(item.id, 'half')}
                                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all duration-300 ${
                                  selectedPortion === 'half'
                                    ? 'bg-premium-gold text-primary-black font-bold'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                {item.category === 'drinks' ? `গ্লাস (৳${item.priceHalf})` : `হাফ প্লেট (৳${item.priceHalf})`}
                              </button>
                              <button
                                id={`portion-full-${item.id}`}
                                onClick={() => handlePortionChange(item.id, 'full')}
                                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all duration-300 ${
                                  selectedPortion === 'full'
                                    ? 'bg-premium-gold text-primary-black font-bold'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                {item.category === 'drinks' ? `লিটার (৳${item.priceFull})` : `ফুল প্লেট (৳${item.priceFull})`}
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* Spacer or simple badge indicating single portion */
                          <div className="flex items-center justify-between text-xs text-white/55 px-1 mb-4 h-[34px]">
                            <span>স্ট্যান্ডার্ড শাহী পরিবেশন</span>
                            <span className="font-sans bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-[10px]">১টি সাইজ</span>
                          </div>
                        )}

                        {/* Price and Add Button row */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          <div className="flex flex-col">
                            <span className="text-white/40 text-[10px] leading-none">মূল্য</span>
                            <span className="font-sans text-2xl font-bold text-premium-gold mt-1">
                              ৳{currentPrice}
                            </span>
                          </div>

                          <button
                            id={`add-to-cart-${item.id}`}
                            onClick={() => onAddToCart(item, selectedPortion)}
                            className="flex items-center space-x-2.5 px-4.5 py-2.5 bg-gradient-to-r from-signature-red to-red-600 hover:from-red-600 hover:to-signature-red text-white font-sans text-sm font-bold rounded-xl border border-premium-gold/20 hover:border-premium-gold transition-all duration-300 group shadow-md"
                          >
                            <ShoppingCart className="w-4 h-4 text-premium-gold group-hover:scale-110 transition-transform" />
                            <span>কার্টে রাখুন</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
