import { MenuItem, Testimonial, FAQ, Offer } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'kacchi-mutton-basmati',
    name: 'বাসমতি চাউলের খাসির কাচ্চি বিরিয়ানি',
    nameEn: 'Basmati Mutton Kacchi Biryani',
    description: 'প্রিমিয়াম দীর্ঘ দানাদার বাসমতি চাল, খাঁটি ঘি, জাফরান ও নরম কচি খাসির মাংসের সাথে সুস্বাদু আলু দমের এক চমৎকার ঐতিহ্যবাহী মেলবন্ধন।',
    priceHalf: 160,
    priceFull: 320,
    category: 'biryani',
    isBestSeller: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXj1PAnUdnvr2HO9b_KUr2L5YGqrrAm1kg-RhY3a_AFTkU8B5inJOGQdPO&s=10'
  },
  {
    id: 'kacchi-mutton-chinigura',
    name: 'চিনিগুড়া চাউলের খাসির কাচ্চি বিরিয়ানি',
    nameEn: 'Chinigura Mutton Kacchi Biryani',
    description: 'ঐতিহ্যবাহী দেশি চিনিগুঁড়া সুগন্ধি চাল ও কচি খাসির মাংসের শাহী কাচ্চি বিরিয়ানি।',
    priceHalf: 130,
    priceFull: 260,
    category: 'biryani',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayMQqRpNOxgKfBfvN_Fx_dtn23frTI39UpnqjF6Bs-yI8icoVn79Kafc&s=10'
  },
  {
    id: 'chicken-dam-biryani',
    name: 'বাসমতি চাউলের মুরগীর দম বিরিয়ানি',
    nameEn: 'Basmati Chicken Dam Biryani',
    description: 'ঝরঝরে প্রিমিয়াম বাসমতি চাল ও স্পেশাল মসলায় সেদ্ধ রসালো মুরগির মাংসের ঐতিহ্যবাহী দম বিরিয়ানি।',
    priceHalf: 160,
    priceFull: 320,
    category: 'biryani',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HHXh1QXUFIJnolHtyZAU2pnXigRydvNeyuJ3ajJOmw&s=10'
  },
  {
    id: 'beef-kacchi',
    name: 'গরুর কাচ্চি বিরিয়ানি',
    nameEn: 'Beef Kacchi Biryani',
    description: 'বাসমতি ও চিনিগুঁড়া চালের মিশেলে মসলাদার কচি গরুর মাংস দিয়ে প্রস্তুত করা বিশেষ দম কাচ্চি বিরিয়ানি।',
    priceHalf: 120,
    priceFull: 240,
    category: 'biryani',
    image: 'https://i.ytimg.com/vi/k6rKCy55PNc/maxresdefault.jpg'
  },
  {
    id: 'morog-polao',
    name: 'শাহী মোরগ পোলাও',
    nameEn: 'Shahi Morog Polao',
    description: 'সুগন্ধি চিনিগুঁড়া চাল ও দেশী মুরগির খাঁটি ঘি ও মসলার সংমিশ্রণে তৈরি শাহী মোরগ পোলাও, সাথে ডিম।',
    priceHalf: 120,
    priceFull: 240,
    category: 'curry_tehari',
    image: 'https://i.ytimg.com/vi/wSYOx8vpJyM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnVUOmsITZJnbmTnQVzD5gb140fA'
  },
  {
    id: 'beef-tehari',
    name: 'গরুর তেহারি',
    nameEn: 'Beef Tehari',
    description: 'সরিষার তেলের খাঁটি সুবাসে চিনিগুঁড়া চাল ও রসালো গরুর মাংসের ছোট ছোট টুকরোর ঐতিহ্যবাহী তেহারি।',
    priceHalf: 100,
    priceFull: 200,
    category: 'curry_tehari',
    isBestSeller: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOorcy0DGVWDP0TaHKJGVQ5ikoO8B1pOxKsegv6rLByQ&s=10'
  },
  {
    id: 'mutton-rezala-polao',
    name: 'খাসির রেজালা পোলাও',
    nameEn: 'Mutton Rezala Polao',
    description: 'ধোয়া ওঠা সুগন্ধি বাসমতি পোলাও চালের সাথে ঘন গ্রেভিতে রান্না করা ঐতিহ্যবাহী শাহী খাসির মাংসের রেজালা।',
    priceFull: 160,
    category: 'curry_tehari',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSh_KVC9ZmRSIVFiPPK9gjAvK4m0w1Ye4dZofc-9BTq37gMVnG918f3AZ&s=10'
  },
  {
    id: 'beef-rezala-polao',
    name: 'গরুর রেজালা পোলাও',
    nameEn: 'Beef Rezala Polao',
    description: 'ধোঁয়া ওঠা চিনিগুঁড়া পোলাও চালের সাথে বিশেষ মশলায় ভুনা গরুর মাংসের সুস্বাদু রেজালা জুড়ি মেলা ভার।',
    priceFull: 130,
    category: 'curry_tehari',
    image: 'https://www.banglakutir.com/app-contents/upload/1/products/1641538034_1_1_1030036396.png'
  },
  {
    id: 'special-whole-chicken',
    name: 'স্পেশাল আস্ত মুরগির প্যাকেজ',
    nameEn: 'Special Whole Chicken Package',
    description: 'পুরো আস্ত একটি মসলাদার ফ্রাইড রোস্ট মুরগি, ঐতিহ্যবাহী শাহী পোলাও, ডিম ও সালাদের এক রাজকীয় ফ্যামিলি প্যাকেজ।',
    priceFull: 600,
    category: 'curry_tehari',
    isChefsSpecial: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXgDeRwPHfmFnNnHi8MIVJVt6M2q3chXw8erZ0gCEnA&s=10'
  },
  {
    id: 'roast-extra',
    name: 'মুরগির রোস্ট (প্রতি পিচ)',
    nameEn: 'Chicken Roast (Per Piece)',
    description: 'বিয়ে বাড়ির ঐতিহ্যবাহী স্বাদের স্পেশাল মশলা ও ঘি-তে ভাজা মুরগির শাহী রোস্ট।',
    priceFull: 90,
    category: 'kebabs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvzLVlc4FwY4nuEDYhSQzD8orkWmRm_9rsL1gZqYPdg&s=10'
  },
  {
    id: 'borhani-glass-liter',
    name: 'স্পেশাল মালাই বোরহানি',
    nameEn: 'Special Malai Borhani',
    description: 'টকদই, পুদিনা পাতা, ধনেপাতা, সরিষা বাটা ও শাহী মশলার ঐতিহ্যবাহী হজমকারী পানীয়। গ্লাস বা লিটার হিসেবে অর্ডার করতে পারেন।',
    priceHalf: 30,
    priceFull: 120,
    category: 'drinks',
    isBestSeller: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6VpXbjosuAlI4T_fIHtiBKnU6jRE0Tfub0ai5IRflw&s=10'
  },
  {
    id: 'badami-shorbot',
    name: 'বাদামি শরবত',
    nameEn: 'Almond Pistachio Shorbot',
    description: 'কাঠবাদাম, পেস্তাবাদাম, জাফরান ও ঘন দুধের পুষ্টিকর ও সুস্বাদু ঐতিহ্যবাহী বাদামি শরবত। গ্লাস বা লিটার হিসেবে অর্ডার করতে পারেন।',
    priceHalf: 40,
    priceFull: 160,
    category: 'drinks',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZQnP0ijxYYrfSkut09KPuv7ogbigeJrvgJ_R7yrawckuIPLy4uFNNbSn&s=10'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'সাইদ আহমেদ',
    rating: 5,
    comment: 'কাশিয়ানীর বুকে এতো সুস্বাদু কাচ্চি আসলেই অতুলনীয়! বাসমতী চালের সুগন্ধ আর খাসির মাংসের নরম মাখনের মতো টেক্সচার আমাদের পুরো পরিবারকে মুগ্ধ করেছে। কাশিয়ানীর জন্য এটা একটা দারুণ উপহার!',
    date: '১০ জুন, ২০২৬',
    avatar: '👨'
  },
  {
    id: 't2',
    name: 'তাসমিয়া রহমান',
    rating: 5,
    comment: 'এদের স্পেশাল মালাই বোরহানি আর শাহী ফিরনিটা জাস্ট অসাধারণ। কাচ্চি খেয়ে অনেক জায়গায় হজমের প্রবলেম হয়, কিন্তু এখানকার খাবার একদম ফ্রেশ ও লাইট। ফ্যামিলি সহ নিরিবিলি পরিবেশে ডাইন-ইন করার জন্য চমৎকার জায়গা।',
    date: '২২ জুন, ২০২৬',
    avatar: '👩'
  },
  {
    id: 't3',
    name: 'আরিফ হাসান',
    rating: 4.8,
    comment: 'ঢাকার পুরান ঢাকার আসল ঐতিহ্যবাহী কাচ্চির স্বাদ কাশিয়ানী বাজারে এত সাশ্রয়ী মূল্যে পাবো ভাবিনি। বিশেষ করে বাসমতী কাচ্চির সাথে শাহী রোস্ট আর জালি কাবাবের কম্বিনেশনটা জাস্ট ওয়াও! স্টাফদের ব্যবহারও খুব ভালো ছিল।',
    date: '০১ জুলাই, ২০২৬',
    avatar: '👨'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'আপনাদের কাচ্চি বিরিয়ানির প্রধান বৈশিষ্ট্য কি?',
    answer: 'আমরা রান্নায় ১০০% বিশুদ্ধ ঘি, প্রিমিয়াম কোয়ালিটির বাসমতী চাল এবং প্রতিদিন সকালে সংগৃহীত সম্পূর্ণ ফ্রেশ কচি খাসির মাংস ব্যবহার করি। কোনো কৃত্রিম রং বা ক্ষতিকারক সুগন্ধি ব্যবহার না করে সম্পূর্ণ খাঁটি মশলা দিয়ে ঐতিহ্যবাহী পুরান ঢাকার দম পদ্ধতিতে রান্না করা হয়।'
  },
  {
    question: 'আপনাদের হোম ডেলিভারি সার্ভিস কি আছে?',
    answer: 'হ্যাঁ! কাশিয়ানী বাজার এরিয়ার মধ্যে আমরা অত্যন্ত দ্রুত হোম ডেলিভারি দিয়ে থাকি। আমাদের হটলাইন +880 1648-960792 নাম্বারে সরাসরি কল করে বা হোয়াটসঅ্যাপে মেসেজ পাঠিয়ে আপনি অর্ডার করতে পারেন। ডেলিভারি চার্জ মাত্র ৩০ টাকা।'
  },
  {
    question: 'বড় অনুষ্ঠান বা ক্যাটারিংয়ের জন্য অর্ডার নেওয়া হয় কি?',
    answer: 'অবশ্যই! বিয়ে, আকিকা, জন্মদিন, কর্পোরেট ইভেন্ট বা যেকোনো ঘরোয়া মিলাদ মাহফিলের জন্য আমরা হাফ ডেক, ফুল ডেক কাচ্চি এবং বিশেষ কম্বো মেনুর অর্ডার নিয়ে থাকি। বাল্ক অর্ডারের ক্ষেত্রে আকর্ষণীয় মূল্যছাড় এবং হোম ডেলিভারি সুবিধা দেওয়া হয়। বিস্তারিত জানতে আমাদের কল করুন।'
  },
  {
    question: 'আপনাদের খোলার সময় ও বসার ব্যবস্থা কেমন?',
    answer: 'আমরা প্রতিদিন সকাল ১০টা থেকে রাত ১১টা পর্যন্ত খোলা রাখি। আমাদের রেস্টুরেন্টে ফ্যামিলি, ফ্রেন্ডস এবং গ্রুপ অফ পার্সনদের বসার জন্য মনোরম ও শীতাতপ নিয়ন্ত্রিত ডাইন-ইন ব্যবস্থা রয়েছে।'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'o1',
    title: 'ফ্যামিলি ধামাকা কম্বো অফার',
    description: '৪ প্লেট চিনিগুঁড়া খাসির কাচ্চি + ৪ পিস মুরগির রোস্ট + ৪ গ্লাস স্পেশাল বোরহানি।',
    code: 'FAMILY44',
    validUntil: '৩১ জুলাই, ২০২৬',
    discountBadge: '১৫% ছাড়'
  },
  {
    id: 'o2',
    title: 'মিডউইক কাচ্চি ফেস্ট (মঙ্গল ও বুধবার)',
    description: 'যেকোনো ২ প্লেট বাসমতী খাসির কাচ্চি কিনলেই ১ গ্লাস স্পেশাল বোরহানি সম্পূর্ণ ফ্রি!',
    code: 'MIDWEEKFREE',
    validUntil: '২৫ জুলাই, ২০২৬',
    discountBadge: 'ফ্রি বোরহানি'
  }
];
