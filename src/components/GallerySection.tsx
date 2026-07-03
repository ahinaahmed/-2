import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'dish' | 'dessert_drink' | 'vibe';
  image: string;
}

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'dish' | 'dessert_drink' | 'vibe'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const GALLERY_ITEMS: GalleryItem[] = [
    {
      id: 'g1',
      title: 'শাহী বাসমতী কাচ্চি বিরিয়ানি',
      category: 'dish',
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g2',
      title: 'ঐতিহ্যবাহী চিনিগুঁড়া কাচ্চি',
      category: 'dish',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g3',
      title: 'শাহী চিকেন তেহারি',
      category: 'dish',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g4',
      title: 'স্পেশাল মালাই বোরহানি',
      category: 'dessert_drink',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g5',
      title: 'জাফরানি শাহী ফিরনি',
      category: 'dessert_drink',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g6',
      title: 'মনোরম রেস্টুরেন্ট পরিবেশ',
      category: 'vibe',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g7',
      title: 'খাসির শাহী রেজালা',
      category: 'dish',
      image: 'https://images.unsplash.com/photo-1545247181-516773cae72d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g8',
      title: 'স্পেশাল জাফরানি জর্দা',
      category: 'dessert_drink',
      image: 'https://images.unsplash.com/photo-1621979087428-cc6b38885a57?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g9',
      title: 'পারিবারিক ডাইনিং জোন',
      category: 'vibe',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'সব ছবি' },
    { id: 'dish', label: 'কাচ্চি ও শাহী খাবার' },
    { id: 'dessert_drink', label: 'বোরহানি ও ডেজার্ট' },
    { id: 'vibe', label: 'ডাইনিং ও পরিবেশ' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery-section" className="py-20 px-4 md:px-8 bg-primary-black border-b border-premium-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            হাজী কাচ্চি ডাইন ফটো গ্যালারি
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            হাঁড়ির ধোঁয়া ওঠা সুস্বাদু খাবার আর আমাদের মনোরম ডাইনিং পরিবেশের এক ঝলক দেখে নিন।
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              id={`gallery-filter-${tab.id}`}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4.5 py-2 rounded-xl font-sans text-sm font-semibold transition-all duration-300 ${
                selectedCategory === tab.id
                  ? 'bg-signature-red text-white border border-premium-gold/30 gold-glow'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                id={`gallery-card-${item.id}`}
                onClick={() => setActiveImage(item)}
                className="relative group cursor-pointer aspect-4/3 rounded-2xl overflow-hidden border border-white/10 hover:border-premium-gold/50 shadow-md transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay with detail icon */}
                <div className="absolute inset-0 bg-primary-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-signature-red flex items-center justify-center text-white border border-premium-gold shadow-lg">
                    <ZoomIn className="w-5 h-5 text-premium-gold" />
                  </div>
                  <span className="font-tiro text-base font-bold text-premium-gold tracking-wide px-4 text-center">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Pop-up Modal */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
                className="absolute inset-0 bg-primary-black cursor-pointer"
              />

              {/* Box Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative max-w-4xl w-full bg-neutral-950 border-2 border-premium-gold/30 rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                {/* Close Button */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-primary-black/80 hover:bg-signature-red text-white border border-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Lightbox Image */}
                <div className="aspect-16/9 md:aspect-21/9 w-full bg-primary-black">
                  <img 
                    src={activeImage.image} 
                    alt={activeImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Footer caption */}
                <div className="p-5 bg-gradient-to-t from-primary-black to-neutral-900 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <h4 className="font-tiro text-lg md:text-xl font-bold text-premium-gold">
                    {activeImage.title}
                  </h4>
                  <span className="font-sans text-xs bg-signature-red text-white px-3 py-1 rounded-full border border-premium-gold/10 uppercase">
                    {activeImage.category === 'dish' ? 'শাহী খাবার' : activeImage.category === 'dessert_drink' ? 'ডেজার্ট ও ড্রিংক' : 'রেস্টুরেন্ট ভিউ'}
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
