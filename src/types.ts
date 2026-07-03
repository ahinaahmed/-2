export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  priceHalf?: number; // Optional (some items like desserts, drinks only have single size)
  priceFull: number;
  category: 'biryani' | 'curry_tehari' | 'kebabs' | 'drinks' | 'desserts';
  isBestSeller?: boolean;
  isChefsSpecial?: boolean;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CartItem {
  id: string; // Combined key: `${menuItem.id}-${portion}`
  menuItem: MenuItem;
  portion: 'half' | 'full';
  quantity: number;
}

export interface Reservation {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequest?: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  validUntil: string;
  discountBadge: string;
}
