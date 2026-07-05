import React, { useState } from 'react';
import { Calendar, Users, Clock, FileText, CheckCircle, Ticket, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation } from '../types';

export default function ReservationSection() {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 4,
    specialRequest: ''
  });

  const [bookingResult, setBookingResult] = useState<{
    id: string;
    data: Reservation;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('অনুগ্রহ করে সবগুলো প্রয়োজনীয় তথ্য প্রদান করুন।');
      return;
    }

    setIsSubmitting(true);

    // Simulate server side delay
    setTimeout(() => {
      const generatedId = `HKD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingResult({
        id: generatedId,
        data: { ...formData }
      });
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 4,
        specialRequest: ''
      });
    }, 1200);
  };

  return (
    <section id="reservation-section" className="py-20 px-4 md:px-8 bg-neutral-950 border-b border-premium-gold/10 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-signature-red/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-premium-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            শাহী টেবিল বুকিং ও রিজার্ভেশন
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            পরিবার বা প্রিয়জনদের নিয়ে মনোরম পরিবেশে ডাইন-ইন উপভোগ করতে আপনার টেবিলটি অগ্রিম বুকিং করে রাখুন।
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!bookingResult ? (
            /* Reservation Form */
            <motion.div
              key="reservation-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-black/60 backdrop-blur-md border border-premium-gold/30 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-sm font-sans font-medium text-premium-gold mb-2">
                      আপনার নাম <span className="text-signature-red">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="res-name-input"
                        type="text"
                        name="name"
                        required
                        placeholder="যেমন: সাইদ আহমেদ"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-primary-black border border-white/15 rounded-xl font-sans text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-sm font-sans font-medium text-premium-gold mb-2">
                      মোবাইল নাম্বার <span className="text-signature-red">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="res-phone-input"
                        type="tel"
                        name="phone"
                        required
                        placeholder="যেমন: +880 1648-960792"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-primary-black border border-white/15 rounded-xl font-sans text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Date selection */}
                  <div>
                    <label className="block text-sm font-sans font-medium text-premium-gold mb-2">
                      বুকিংয়ের তারিখ <span className="text-signature-red">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-4 w-5 h-5 text-premium-gold/70" />
                      <input
                        id="res-date-input"
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-primary-black border border-white/15 rounded-xl font-sans text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time selection */}
                  <div>
                    <label className="block text-sm font-sans font-medium text-premium-gold mb-2">
                      সময় সিলেক্ট করুন <span className="text-signature-red">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-4 w-5 h-5 text-premium-gold/70" />
                      <select
                        id="res-time-select"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-primary-black border border-white/15 rounded-xl font-sans text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors appearance-none"
                      >
                        <option value="" className="bg-primary-black">সময় নির্বাচন করুন</option>
                        <option value="07:00 AM - 10:00 AM" className="bg-primary-black">সকাল ০৭:০০ - সকাল ১০:০০</option>
                        <option value="10:00 AM - 01:00 PM" className="bg-primary-black">সকাল ১০:০০ - দুপুর ০১:০০</option>
                        <option value="01:00 PM - 04:00 PM" className="bg-primary-black">দুপুর ০১:০০ - বিকেল ০৪:০০</option>
                        <option value="06:00 PM - 09:00 PM" className="bg-primary-black">সন্ধ্যা ০৬:০০ - রাত ০৯:০০</option>
                        <option value="09:00 PM - 12:00 AM" className="bg-primary-black">রাত ০৯:০০ - রাত ১২:০০</option>
                      </select>
                    </div>
                  </div>

                  {/* Guests selection */}
                  <div>
                    <label className="block text-sm font-sans font-medium text-premium-gold mb-2">
                      অতিথির সংখ্যা <span className="text-signature-red">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Users className="absolute left-4 w-5 h-5 text-premium-gold/70" />
                      <input
                        id="res-guests-input"
                        type="number"
                        name="guests"
                        min="1"
                        max="50"
                        required
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-primary-black border border-white/15 rounded-xl font-sans text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-sans font-medium text-premium-gold mb-2">
                      বিশেষ অনুরোধ বা নোট (ঐচ্ছিক)
                    </label>
                    <div className="relative flex items-start">
                      <FileText className="absolute left-4 top-3.5 w-5 h-5 text-premium-gold/70" />
                      <textarea
                        id="res-request-input"
                        name="specialRequest"
                        rows={3}
                        placeholder="যেমন: ফ্যামিলি কেবিন প্রয়োজন, জন্মদিনের ডেকরেশন করতে চাই বা বাচ্চাদের জন্য বাড়তি বেবি চেয়ার লাগবে..."
                        value={formData.specialRequest}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-primary-black border border-white/15 rounded-xl font-sans text-white focus:border-premium-gold focus:outline-none focus:ring-1 focus:ring-premium-gold transition-colors resize-none"
                      />
                    </div>
                  </div>

                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <button
                    id="res-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-signature-red to-red-600 hover:from-red-600 hover:to-signature-red text-white font-sans text-base font-extrabold rounded-xl border border-premium-gold/20 hover:border-premium-gold shadow-lg transition-all duration-300 disabled:opacity-50 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isSubmitting ? 'প্রসেস হচ্ছে...' : 'টেবিল বুকিং সাবমিট করুন'}
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            /* Successful Receipt Card */
            <motion.div
              key="reservation-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/60 backdrop-blur-md border border-premium-gold/30 rounded-3xl p-6 md:p-10 shadow-2xl text-center max-w-md mx-auto"
            >
              <div className="w-16 h-16 bg-green-950/40 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <CheckCircle className="w-9 h-9 text-green-500 animate-bounce" />
              </div>

              <h4 className="font-tiro text-2xl font-bold text-white mb-2">টেবিল বুকিং সম্পন্ন হয়েছে!</h4>
              <p className="font-sans text-sm text-white/70 mb-6">
                হাজী কাচ্চি ডাইন (কাশিয়ানী)-এ আপনার টেবিল বুকিংটির রিকোয়েস্ট সফলভাবে জমা হয়েছে।
              </p>

              {/* Receipt Body */}
              <div className="bg-primary-black/85 border border-premium-gold/20 rounded-2xl p-5 mb-6 text-left space-y-3.5 relative overflow-hidden">
                {/* Visual side cutouts of ticket */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-neutral-950 rounded-r-full border-r border-premium-gold/20"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-neutral-950 rounded-l-full border-l border-premium-gold/20"></div>

                <div className="flex items-center space-x-2 text-premium-gold pb-2 border-b border-white/5">
                  <Ticket className="w-5 h-5 text-premium-gold" />
                  <span className="font-sans text-xs uppercase font-extrabold tracking-widest">বুকিং আইডি: {bookingResult.id}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-2.5 text-xs md:text-sm pt-1 px-2">
                  <span className="font-sans text-white/55">গ্রাহকের নাম:</span>
                  <span className="font-sans text-white font-semibold text-right">{bookingResult.data.name}</span>

                  <span className="font-sans text-white/55">মোবাইল নাম্বার:</span>
                  <span className="font-sans text-white font-semibold text-right">{bookingResult.data.phone}</span>

                  <span className="font-sans text-white/55">তারিখ:</span>
                  <span className="font-sans text-white font-semibold text-right">{bookingResult.id ? new Date(bookingResult.data.date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' }) : bookingResult.data.date}</span>

                  <span className="font-sans text-white/55">সময় স্লট:</span>
                  <span className="font-sans text-white font-semibold text-right">{bookingResult.data.time}</span>

                  <span className="font-sans text-white/55">অতিথির সংখ্যা:</span>
                  <span className="font-sans text-white font-semibold text-right">{bookingResult.data.guests} জন</span>

                  {bookingResult.data.specialRequest && (
                    <>
                      <span className="font-sans text-white/55 col-span-2 pt-1 border-t border-white/5">বিশেষ অনুরোধ:</span>
                      <span className="font-sans text-white/80 col-span-2 italic text-xs bg-white/5 p-2 rounded border border-white/5">{bookingResult.data.specialRequest}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Callout hotline instructions */}
              <div className="flex items-center space-x-2 bg-signature-red/10 border border-signature-red/20 rounded-xl p-3 mb-6">
                <Phone className="w-4 h-4 text-premium-gold shrink-0 animate-pulse" />
                <p className="font-sans text-[11px] text-white/85 text-left leading-relaxed">
                  *আমাদের ম্যানেজার খুব শীঘ্রই আপনার নাম্বারে কল করে রিজার্ভেশনটি চুড়ান্তভাবে নিশ্চিত করবেন।*
                </p>
              </div>

              {/* Reset form or call options */}
              <div className="flex flex-col gap-2">
                <button
                  id="res-another-btn"
                  onClick={() => setBookingResult(null)}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-sans text-sm font-semibold rounded-xl border border-white/10"
                >
                  নতুন বুকিং করুন
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
