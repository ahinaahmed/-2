import React from 'react';
import { ChefHat, Flame, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const HIGHLIGHTS = [
    {
      icon: <ChefHat className="w-8 h-8 text-premium-gold" />,
      title: 'ঢাকার ঐতিহ্যবাহী বাবুর্চি',
      description: 'পুরান ঢাকার খাঁটি রাজকীয় ভোজের অভিজ্ঞতাসম্পন্ন দক্ষ কারিগরদের তত্ত্বাবধানে রান্না সম্পন্ন হয়।'
    },
    {
      icon: <Flame className="w-8 h-8 text-premium-gold" />,
      title: 'ঐতিহ্যবাহী দম পদ্ধতি',
      description: 'আমরা কয়লার মৃদু আঁচে ঐতিহ্যবাহী ডেক সিলিং পদ্ধতিতে সুগন্ধ ধরে রেখে দম কাচ্চি প্রস্তুত করি।'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-premium-gold" />,
      title: '১০০% বিশুদ্ধ উপাদান',
      description: 'ভেজালহীন খাঁটি গাভীর ঘি, আসল জাফরান এবং প্রতিদিনের সতেজ খাসির মাংস ব্যবহারের শতভাগ নিশ্চয়তা।'
    }
  ];

  return (
    <section id="about-section" className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary-black to-neutral-950 border-b border-premium-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="font-tiro text-3xl md:text-5xl font-extrabold text-premium-gold mb-3 tracking-wide">
            হাজী কাচ্চি ডাইন এর শাহী গল্প
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-signature-red to-premium-gold mx-auto mb-4 rounded-full"></div>
          <p className="font-sans text-sm md:text-base text-white/50 tracking-widest uppercase">
            আসল স্বাদ, ঐতিহ্য এবং সুনামের সাথে পথচলা
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="font-tiro text-2xl md:text-3.5xl font-bold text-white leading-tight">
              পুরান ঢাকার রাজকীয় কাচ্চির আসল স্বাদ এখন আপনার নিজের শহর <span className="text-signature-red">কাশিয়ানীতে!</span>
            </h4>
            
            <p className="font-sans text-base text-white/80 leading-relaxed">
              কাচ্চি বিরিয়ানি শুধু একটি খাবার নয়, এটি একটি অনুভূতি ও ঐতিহ্য। পুরান ঢাকার চকবাজার কিংবা লালবাগের সরু গলির যে সুস্বাদু কাচ্চির সুবাস ভোজনরসিকদের পাগল করে তোলে, সেই একই অনুভূতি ও মনকাড়া আসল বাসমতী কাচ্চির স্বাদ কাশিয়ানীর মানুষের মুখে তুলে দিতেই আমাদের এই আন্তরিক পথচলা।
            </p>

            <p className="font-sans text-base text-white/80 leading-relaxed">
              আমরা হাজী কাচ্চি ডাইন (কাশিয়ানী) বিশ্বাস করি, ভালো খাবারের প্রথম শর্ত হলো উপাদানের বিশুদ্ধতা। তাই আমরা কোনো কৃত্রিম সেন্ট বা ক্ষতিকারক ফুড কালার ব্যবহার করি না। কয়লার মৃদু আঁচে মাটির হাড়ির মতো দম দিয়ে মাংসের প্রতিটি তন্তুর ভেতরে মশলা প্রবেশ করানো হয়, যাতে মাংস হয় মাখনের মতো নরম আর ভাত হয় ঝরঝরে সুগন্ধি।
            </p>

            <div className="border-l-4 border-premium-gold pl-4 py-1 italic text-premium-gold/90 font-sans text-sm md:text-base bg-white/5 rounded-r-lg pr-4">
              "আমরা ব্যবসার চেয়ে সুনামের মূল্যায়ন বেশি করি। প্রতিটি থালায় আসল স্বাদ আর সেরা আতিথেয়তার নিশ্চয়তাই আমাদের ব্র্যান্ড স্লোগান — আসল স্বাদ, বারবার মনে পড়ে।"
            </div>

            {/* Quick Stat Counter Boxes */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:border-premium-gold/30 transition-colors">
                <span className="block font-sans text-xl md:text-3xl font-extrabold text-premium-gold">১০০%</span>
                <span className="block font-sans text-[10px] md:text-xs text-white/60 mt-1">বিশুদ্ধ উপাদান</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:border-premium-gold/30 transition-colors">
                <span className="block font-sans text-xl md:text-3xl font-extrabold text-premium-gold">১০,০০০+</span>
                <span className="block font-sans text-[10px] md:text-xs text-white/60 mt-1">খুশি কাস্টমার</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:border-premium-gold/30 transition-colors">
                <span className="block font-sans text-xl md:text-3xl font-extrabold text-premium-gold">১টি</span>
                <span className="block font-sans text-[10px] md:text-xs text-white/60 mt-1">সেরা রেসিপি</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            {/* Main Overlapping Images Design */}
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-premium-gold/30 shadow-2xl gold-glow h-96">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" 
                alt="Cooking Traditional Kacchi"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gold gradient seal overlays */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary-black/95 border border-premium-gold/30 rounded-xl p-4 flex items-center space-x-3.5 backdrop-blur-sm">
                <Award className="w-10 h-10 text-premium-gold shrink-0 animate-pulse" />
                <div>
                  <h5 className="font-tiro text-sm font-bold text-premium-gold">অরিজিনাল রেসিপি গ্যারান্টি</h5>
                  <p className="font-sans text-[11px] text-white/65 mt-0.5">আমরা বাসমতী চাল ও মালাই বোরহানির শতভাগ আসল স্বাদ দিয়ে থাকি।</p>
                </div>
              </div>
            </div>

            {/* Glowing red backdrop circle */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-signature-red/10 rounded-full filter blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-premium-gold/10 rounded-full filter blur-3xl pointer-events-none"></div>
          </div>

        </div>

        {/* Highlight Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
          {HIGHLIGHTS.map((hl, idx) => (
            <div 
              key={idx} 
              className="bg-black/60 backdrop-blur-sm border border-white/5 hover:border-premium-gold/30 rounded-2xl p-6 hover:bg-black/80 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.02)] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            >
              <div className="bg-signature-red/10 border border-premium-gold/35 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-inner">
                {hl.icon}
              </div>
              <h5 className="font-tiro text-lg font-bold text-white mb-2">{hl.title}</h5>
              <p className="font-sans text-sm text-white/70 leading-relaxed">{hl.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
