export interface Restaurant {
  id: string
  name: string
  slug: string
  location: string
  area: string
  cuisine: string
  priceRange: string
  rating: number
  reviewCount: number
  description: string
  shortDescription: string
  image: string
  images: string[]
  chefName?: string
  chefStory?: string
  features: string[]
  badges: Badge[]
  availability: 'instant' | 'request' | 'waitlist'
  michelinStars?: number
  aaRosettes?: number
  dietaryOptions?: string[]
  openingHours?: OpeningHours
}

export interface Badge {
  label: string
  variant: 'premium' | 'award' | 'trending' | 'rare' | 'featured'
}

export interface OpeningHours {
  monday?: string
  tuesday?: string
  wednesday?: string
  thursday?: string
  friday?: string
  saturday?: string
  sunday?: string
}

export interface Collection {
  id: string
  name: string
  slug: string
  image: string
  description: string
  restaurantCount: number
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  featured?: boolean
}

export interface Venue {
  id: string
  name: string
  slug: string
  location: string
  type: 'wedding' | 'corporate' | 'private-dining' | 'party' | 'launch'
  capacity: number
  image: string
  description: string
}

export interface SearchFilters {
  query?: string
  location?: string
  cuisine?: string
  occasion?: string
  priceRange?: string[]
  rating?: number
  availability?: string
  features?: string[]
  date?: string
  guests?: number
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface BookingRequest {
  restaurantId: string
  date: string
  time: string
  guests: number
  name: string
  email: string
  phone?: string
  specialRequests?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  restaurantName: string
}
