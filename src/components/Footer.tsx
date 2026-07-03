import React from 'react';
import { Facebook, MessageCircle, MapPin, Phone, Mail, Clock, ArrowUp, Award } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090909] text-white border-t border-premium-gold/15 pt-16 pb-8 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-signature-red to-primary-black border border-premium-gold rounded-full">
              <span className="font-tiro text-base font-bold text-premium-gold">হাজী</span>
            </div>
            <span className="font-tiro text-xl font-bold text-premium-gold tracking-wide">হাজী কাচ্চি ডাইন</span>
          </div>
          
          <p className="font-tiro text-sm italic text-white/60 leading-relaxed">
            "আসল স্বাদ, বারবার মনে পড়ে"
          </p>

          <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed">
            পুরাতন ঢাকার ঐতিহ্যবাহী সুস্বাদু কাচ্চি বিরিয়ানি এখন আপনাদের নিজের শহর কাশিয়ানীতে। খাঁটি ঘি ও মশলার অপূর্ব রাজকীয় স্বাদ।
          </p>

          {/* Social Icons row */}
          <div className="flex space-x-3 pt-2">
            <a 
              id="footer-social-fb"
              href="https://www.facebook.com/share/1Cy9XjdQfC/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              id="footer-social-wa"
              href="https://wa.me/8801648960792" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-green-600 border border-white/10 hover:border-green-500 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-tiro text-base font-bold text-premium-gold mb-5 uppercase tracking-wider">কুইক লিংকস</h4>
          <ul className="space-y-2.5 font-sans text-sm text-white/65">
            <li>
              <button 
                id="footer-link-home"
                onClick={() => handleNavClick('home')} 
                className="hover:text-premium-gold transition-colors text-left"
              >
                হোম (Home)
              </button>
            </li>
            <li>
              <button 
                id="footer-link-menu"
                onClick={() => handleNavClick('menu')} 
                className="hover:text-premium-gold transition-colors text-left"
              >
                ডিজিটাল মেনু কার্ড (Menu)
              </button>
            </li>
            <li>
              <button 
                id="footer-link-offers"
                onClick={() => handleNavClick('offers')} 
                className="hover:text-premium-gold transition-colors text-left"
              >
                চলতি অফারসমূহ (Offers)
              </button>
            </li>
            <li>
              <button 
                id="footer-link-about"
                onClick={() => handleNavClick('about')} 
                className="hover:text-premium-gold transition-colors text-left"
              >
                আমাদের সম্পর্কে (About Us)
              </button>
            </li>
            <li>
              <button 
                id="footer-link-reservation"
                onClick={() => handleNavClick('reservation')} 
                className="hover:text-premium-gold transition-colors text-left"
              >
                টেবিল বুকিং (Reservation)
              </button>
            </li>
            <li>
              <button 
                id="footer-link-contact"
                onClick={() => handleNavClick('contact')} 
                className="hover:text-premium-gold transition-colors text-left"
              >
                যোগাযোগ ও ঠিকানা (Contact)
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4 font-sans text-sm text-white/65">
          <h4 className="font-tiro text-base font-bold text-premium-gold mb-1 uppercase tracking-wider">যোগাযোগের তথ্য</h4>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-premium-gold mt-1 shrink-0" />
            <span className="leading-relaxed">হাজী কাচ্চি ডাইন, কাশিয়ানী বাজার, কাশিয়ানী, গোপালগঞ্জ।</span>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-premium-gold shrink-0" />
            <a 
              href="https://wa.me/8801648960792" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-premium-gold transition-colors font-semibold"
            >
              +880 1648-960792 (হোয়াটসঅ্যাপ)
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-premium-gold shrink-0" />
            <a href="mailto:info@hajikacchidine.com" className="hover:text-premium-gold transition-colors">
              info@hajikacchidine.com
            </a>
          </div>
        </div>

        {/* Operating Hours Column */}
        <div>
          <h4 className="font-tiro text-base font-bold text-premium-gold mb-5 uppercase tracking-wider">খোলার সময়সূচী</h4>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5 space-y-3.5 font-sans text-xs md:text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-premium-gold" />
                <span className="text-white/80">শনিবার – শুক্রবার</span>
              </div>
              <span className="text-premium-gold font-bold">১০:০০ AM - ১১:০০ PM</span>
            </div>
            
            <div className="flex items-center space-x-2 text-[10px] md:text-xs text-white/45">
              <Award className="w-4 h-4 text-premium-gold shrink-0" />
              <span>*সরকারি ছুটির দিন সহ প্রতিদিন খোলা থাকে।*</span>
            </div>
          </div>
        </div>

      </div>

      {/* Underline copyright line & Scroll top action */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-white/45 text-center">
        <span>© ২০২৬ হাজী কাচ্চি ডাইন. সর্বস্বত্ব সংরক্ষিত।</span>
        
        <div className="flex items-center space-x-4">
          <span className="text-[10px] md:text-xs text-premium-gold/60 uppercase tracking-widest">কাশিয়ানী, গোপালগঞ্জ</span>
          <button
            id="footer-scroll-top"
            onClick={handleScrollTop}
            className="p-2 bg-white/5 hover:bg-signature-red border border-white/10 hover:border-premium-gold text-white rounded-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
