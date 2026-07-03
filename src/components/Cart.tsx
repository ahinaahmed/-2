import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Send, MessageSquareText } from 'lucide-react';
import { CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [cookingNotes, setCookingNotes] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  const deliveryCharge = cartItems.length > 0 ? 30 : 0;
  
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.portion === 'half' && item.menuItem.priceHalf 
      ? item.menuItem.priceHalf 
      : item.menuItem.priceFull;
    return acc + price * item.quantity;
  }, 0);

  const total = subtotal + deliveryCharge;

  // Compile and send WhatsApp order
  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    if (!deliveryAddress.trim()) {
      alert('অনুগ্রহ করে আপনার ডেলিভারি ঠিকানা প্রদান করুন।');
      return;
    }

    setIsOrdering(true);

    // Format Bengali WhatsApp Message template
    let orderDetails = `*হাজী কাচ্চি ডাইন (কাশিয়ানী) — নতুন অর্ডার*\n`;
    orderDetails += `--------------------------------------------\n`;
    orderDetails += `👤 *গ্রাহকের নাম:* ${customerName.trim() ? customerName.trim() : 'নাম উল্লেখ করেননি'}\n`;
    orderDetails += `📍 *ডেলিভারি ঠিকানা:* ${deliveryAddress.trim()}\n`;
    if (cookingNotes.trim()) {
      orderDetails += `💬 *বিশেষ নির্দেশনা:* ${cookingNotes.trim()}\n`;
    }
    orderDetails += `--------------------------------------------\n`;
    orderDetails += `📦 *অর্ডার তালিকা:*\n`;

    cartItems.forEach((item, index) => {
      const portionText = item.menuItem.category === 'drinks'
        ? (item.portion === 'half' ? 'গ্লাস' : 'লিটার')
        : (item.portion === 'half' ? 'হাফ প্লেট' : 'ফুল প্লেট');
      const price = item.portion === 'half' && item.menuItem.priceHalf 
        ? item.menuItem.priceHalf 
        : item.menuItem.priceFull;
      orderDetails += `${index + 1}. ${item.menuItem.name} (${portionText}) - ${item.quantity}টি x ${price}৳ = ${price * item.quantity}৳\n`;
    });

    orderDetails += `--------------------------------------------\n`;
    orderDetails += `💵 *সাবটোটাল:* ${subtotal}৳\n`;
    orderDetails += `🛵 *ডেলিভারি চার্জ:* ${deliveryCharge}৳\n`;
    orderDetails += `👉 *সর্বমোট বিল:* *${total}৳*\n\n`;
    orderDetails += `ধন্যবাদ! দয়া করে দ্রুত কনফার্ম করে ডেলিভারির ব্যবস্থা করুন।`;

    const encodedText = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/8801648960792?text=${encodedText}`;

    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank');
    
    // Clear state and cart after order
    setTimeout(() => {
      onClearCart();
      setCustomerName('');
      setDeliveryAddress('');
      setCookingNotes('');
      setIsOrdering(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-black z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-black/95 backdrop-blur-md border-l border-premium-gold/30 z-50 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 md:p-5 border-b border-white/10 flex items-center justify-between bg-primary-black/80">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-premium-gold" />
                <h4 className="font-tiro text-lg md:text-xl font-bold text-premium-gold">আপনার ফুড কার্ট</h4>
                <span className="font-sans text-xs bg-signature-red text-white px-2 py-0.5 rounded-full font-bold">
                  {cartItems.length}
                </span>
              </div>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="p-1.5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 no-scrollbar">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-dashed border-premium-gold/30 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-white/30" />
                  </div>
                  <h5 className="font-tiro text-lg font-bold text-white mb-1">কার্ট একদম খালি রয়েছে!</h5>
                  <p className="font-sans text-sm text-white/50 max-w-xs mx-auto mb-5">
                    আমাদের শাহী মেনু থেকে আপনার পছন্দের সুস্বাদু কাচ্চি বা ডিশ বেছে নিয়ে কার্টে যোগ করুন।
                  </p>
                  <button
                    id="cart-back-to-menu"
                    onClick={onClose}
                    className="px-5 py-2 bg-gradient-to-r from-signature-red to-red-600 text-white font-sans text-sm font-bold rounded-lg border border-premium-gold/20"
                  >
                    মেনু কার্ড দেখুন
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => {
                    const price = item.portion === 'half' && item.menuItem.priceHalf 
                      ? item.menuItem.priceHalf 
                      : item.menuItem.priceFull;

                    return (
                      <div 
                        key={item.id}
                        id={`cart-item-${item.id}`}
                        className="flex bg-black/50 border border-white/10 hover:border-premium-gold/30 rounded-xl p-3 items-center justify-between shadow-sm transition-all duration-300"
                      >
                        {/* Details */}
                        <div className="flex-1 pr-3">
                          <h6 className="font-tiro text-sm font-semibold text-white leading-tight">
                            {item.menuItem.name}
                          </h6>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="font-sans text-xs bg-signature-red/10 text-premium-gold px-1.5 py-0.5 rounded border border-premium-gold/10">
                              {item.menuItem.category === 'drinks'
                                ? (item.portion === 'half' ? 'গ্লাস' : 'লিটার')
                                : (item.portion === 'half' ? 'হাফ প্লেট' : 'ফুল প্লেট')}
                            </span>
                            <span className="font-sans text-xs text-white/40">
                              ৳{price} x {item.quantity}
                            </span>
                          </div>
                        </div>

                        {/* Controls (Plus/Minus/Trash) */}
                        <div className="flex items-center space-x-2.5">
                          <div className="flex items-center bg-primary-black border border-white/10 rounded-lg overflow-hidden">
                            <button
                              id={`cart-minus-${item.id}`}
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1.5 hover:bg-white/5 text-premium-gold transition-colors"
                              aria-label="Decrease Quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-sans text-sm text-white px-2 font-bold select-none">
                              {item.quantity}
                            </span>
                            <button
                              id={`cart-plus-${item.id}`}
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1.5 hover:bg-white/5 text-premium-gold transition-colors"
                              aria-label="Increase Quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            id={`cart-remove-${item.id}`}
                            onClick={() => onRemoveItem(item.id)}
                            className="p-2 bg-red-950/20 hover:bg-red-950/50 text-signature-red hover:text-white rounded-lg border border-signature-red/20 transition-all duration-300"
                            aria-label="Remove Item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Sticky Checkout Panel */}
            {cartItems.length > 0 && (
              <div className="p-4 md:p-5 border-t border-white/10 bg-primary-black/90 space-y-4">
                {/* Calculations summary */}
                <div className="space-y-2 text-sm text-white/80 border-b border-white/5 pb-3">
                  <div className="flex justify-between">
                    <span className="font-sans text-white/60">সাবটোটাল</span>
                    <span className="font-sans text-white">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-white/60">হোম ডেলিভারি চার্জ</span>
                    <span className="font-sans text-premium-gold">৳{deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-1.5 border-t border-white/5">
                    <span className="font-tiro text-premium-gold">সর্বমোট বিল</span>
                    <span className="font-sans text-premium-gold text-lg">৳{total}</span>
                  </div>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleWhatsAppOrder} className="space-y-3">
                  <div>
                    <label className="block text-xs font-sans text-premium-gold mb-1">আপনার নাম (ঐচ্ছিক):</label>
                    <input
                      id="cart-name-input"
                      type="text"
                      placeholder="যেমন: সাইদ আহমেদ"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-primary-black border border-white/10 rounded-lg font-sans text-sm text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-premium-gold mb-1">ডেলিভারি ঠিকানা <span className="text-signature-red">*</span></label>
                    <textarea
                      id="cart-address-input"
                      rows={2}
                      required
                      placeholder="যেমন: কাশিয়ানী বাজার, হাই স্কুল রোড, গোল গলি"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 bg-primary-black border border-white/10 rounded-lg font-sans text-sm text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-premium-gold mb-1">বিশেষ কুকিং নোট বা অনুরোধ (ঐচ্ছিক):</label>
                    <input
                      id="cart-notes-input"
                      type="text"
                      placeholder="যেমন: আলু একটু বেশি দিয়েন বা ঝাল কম"
                      value={cookingNotes}
                      onChange={(e) => setCookingNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-primary-black border border-white/10 rounded-lg font-sans text-sm text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                    />
                  </div>

                  {/* WhatsApp Order Action Button */}
                  <button
                    id="cart-whatsapp-submit"
                    type="submit"
                    disabled={isOrdering}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-[#1E7A3E] to-[#2ecc71] hover:from-[#1b6d37] hover:to-[#27ae60] text-white font-sans text-base font-extrabold rounded-xl shadow-lg border border-premium-gold/20 hover:border-premium-gold transition-all duration-300 disabled:opacity-50"
                  >
                    <MessageSquareText className="w-5 h-5 text-white" />
                    <span>{isOrdering ? 'অর্ডার প্রসেস হচ্ছে...' : 'ডেলিভারি অর্ডার করুন হোয়াটসঅ্যাপে'}</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
