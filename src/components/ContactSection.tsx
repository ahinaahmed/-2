import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Facebook, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert('অনুগ্রহ করে নাম এবং বার্তা প্রদান করুন।');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact-section" className="py-20 px-4 md:px-8 bg-primary-black text-white border-b border-premium-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            যোগাযোগ ও ঠিকানা
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            হাজী কাচ্চি ডাইন কাশিয়ানী নিয়ে কোনো প্রশ্ন থাকলে বা হোম ডেলিভারির অর্ডার দিতে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="font-tiro text-2xl font-bold text-premium-gold">হাজী কাচ্চি ডাইন (কাশিয়ানী শাখা)</h4>
            
            <div className="space-y-6">
              
              {/* Address Row */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-signature-red/10 border border-premium-gold/20 flex items-center justify-center text-premium-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-white/50 mb-1">দোকানের অবস্থান</h5>
                  <p className="font-sans text-base text-white font-medium leading-relaxed">
                    হাজী কাচ্চি ডাইন, কাশিয়ানী বাজার (হাই স্কুল সংলগ্ন), কাশিয়ানী, গোপালগঞ্জ।
                  </p>
                </div>
              </div>

              {/* Phone / Hotkey Row */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-signature-red/10 border border-premium-gold/20 flex items-center justify-center text-premium-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-white/50 mb-1">হটলাইন / ডেলিভারি নাম্বার</h5>
                  <a 
                    id="contact-phone-link"
                    href="https://wa.me/8801648960792" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-lg text-premium-gold font-bold hover:text-signature-red transition-colors duration-300 block"
                  >
                    +880 1648-960792 (হোয়াটসঅ্যাপ চ্যাট)
                  </a>
                  <span className="font-sans text-xs text-white/40 block mt-0.5">(সরাসরি হোয়াটসঅ্যাপ চ্যাট করতে এখানে ট্যাপ করুন)</span>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-signature-red/10 border border-premium-gold/20 flex items-center justify-center text-premium-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-white/50 mb-1">ইমেইল ঠিকানা</h5>
                  <a 
                    id="contact-email-link"
                    href="mailto:info@hajikacchidine.com" 
                    className="font-sans text-base text-white font-medium hover:text-premium-gold transition-colors duration-300"
                  >
                    info@hajikacchidine.com
                  </a>
                </div>
              </div>

              {/* Hours Row */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-signature-red/10 border border-premium-gold/20 flex items-center justify-center text-premium-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-white/50 mb-1">খোলার সময়সূচী</h5>
                  <p className="font-sans text-base text-white font-medium">
                    সকাল ১০:০০ টা – রাত ১১:০০ টা (প্রতিদিন)
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons Quick links */}
            <div className="pt-6 border-t border-white/5">
              <h5 className="font-sans text-sm font-semibold text-white/50 mb-4">আমাদের সোশ্যাল মিডিয়া পেজসমূহ</h5>
              <div className="flex space-x-3.5">
                <a 
                  id="contact-social-fb"
                  href="https://www.facebook.com/share/1Cy9XjdQfC/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-900/10 hover:bg-blue-600 border border-blue-500/20 hover:border-blue-500 text-blue-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  id="contact-social-wa"
                  href="https://wa.me/8801648960792" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-green-950/10 hover:bg-green-600 border border-green-500/20 hover:border-green-500 text-green-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form & Maps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive Vector Mock Maps Container */}
            <div className="bg-black/60 backdrop-blur-md border border-premium-gold/30 rounded-2xl p-4 shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <span className="font-sans text-xs font-semibold text-premium-gold uppercase tracking-wider">গুগল ম্যাপ লোকেশন (কাশিয়ানী)</span>
                <a 
                  id="contact-maps-external"
                  href="https://maps.google.com/?q=Kashiani+Bazar,Gopalganj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-signature-red hover:text-premium-gold font-bold transition-colors"
                >
                  ম্যাপে দেখুন ↗
                </a>
              </div>

              {/* Styled Vector Mock Map Representation */}
              <div className="relative h-48 bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                {/* Visual grid lines mimicking map roads */}
                <div className="absolute inset-0 opacity-15">
                  <div className="w-full h-0.5 bg-premium-gold/30 absolute top-1/4"></div>
                  <div className="w-full h-0.5 bg-premium-gold/30 absolute top-2/3"></div>
                  <div className="h-full w-0.5 bg-premium-gold/30 absolute left-1/3"></div>
                  <div className="h-full w-0.5 bg-premium-gold/30 absolute left-3/4"></div>
                  <div className="w-full h-1 bg-signature-red/20 absolute top-1/2 rotate-12"></div>
                </div>

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-signature-red border-2 border-premium-gold flex items-center justify-center text-white shadow-lg mb-2 animate-bounce">
                    <MapPin className="w-6 h-6 text-premium-gold" />
                  </div>
                  <h6 className="font-tiro text-sm font-bold text-white mb-0.5">হাজী কাচ্চি ডাইন (কাশিয়ানী)</h6>
                  <p className="font-sans text-[11px] text-white/60">কাশিয়ানী হাই স্কুল এর পাশে, কাশিয়ানী বাজার</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/60 backdrop-blur-md border border-premium-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h5 className="font-tiro text-xl font-bold text-white mb-4">আমাদের কাছে বার্তা পাঠান</h5>
              
              <AnimatePresence mode="wait">
                {!sent ? (
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans text-premium-gold mb-1">আপনার নাম <span className="text-signature-red">*</span></label>
                        <input
                          id="msg-name-input"
                          type="text"
                          required
                          placeholder="যেমন: আরিয়ান রহমান"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3 py-2 bg-primary-black border border-white/10 rounded-xl font-sans text-sm text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans text-premium-gold mb-1">ইমেইল ঠিকানা (ঐচ্ছিক)</label>
                        <input
                          id="msg-email-input"
                          type="email"
                          placeholder="যেমন: mail@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 bg-primary-black border border-white/10 rounded-xl font-sans text-sm text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-sans text-premium-gold mb-1">আপনার বার্তা/জিজ্ঞাসা <span className="text-signature-red">*</span></label>
                      <textarea
                        id="msg-text-input"
                        required
                        rows={4}
                        placeholder="আপনার যেকোনো মতামত বা প্রশ্ন এখানে লিখুন..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 bg-primary-black border border-white/10 rounded-xl font-sans text-sm text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      id="msg-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-signature-red to-red-600 hover:from-red-600 hover:to-signature-red text-white font-sans text-sm font-bold rounded-xl transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-premium-gold" />
                      <span>{loading ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}</span>
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 bg-green-950/20 border border-green-500/30 rounded-xl"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3 animate-bounce" />
                    <h6 className="font-tiro text-lg font-bold text-white mb-1">বার্তা সফলভাবে পাঠানো হয়েছে!</h6>
                    <p className="font-sans text-xs text-white/60 mb-4">আমাদের প্রতিনিধি খুব শীঘ্রই আপনার ইমেইল বা নাম্বারে যোগাযোগ করবেন।</p>
                    <button
                      id="msg-another-btn"
                      onClick={() => setSent(false)}
                      className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white font-sans text-xs rounded-lg border border-white/10"
                    >
                      নতুন বার্তা লিখুন
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
