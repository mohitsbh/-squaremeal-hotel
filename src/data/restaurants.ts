import { Restaurant, Collection, Article, Venue, Testimonial } from '@/types'

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Wildflowers',
    slug: 'wildflowers',
    location: 'Pimlico, London',
    area: 'London',
    cuisine: 'Mediterranean',
    priceRange: '££££',
    rating: 4.9,
    reviewCount: 412,
    description:
      'SquareMeal London Restaurant of the Year 2026. The debut solo project from ex-Trinity chef Aaron Potter, Wildflowers opened in late 2024 and made an immediate impression thanks to its assured, Mediterranean-leaning cooking and effortlessly convivial atmosphere. Seasonal live fire dishes with precise flavours and genuine personal service.',
    shortDescription:
      'SquareMeal London Restaurant of the Year 2026. Seasonal live fire dishes and Mediterranean-leaning cooking.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    ],
    chefName: 'Aaron Potter',
    chefStory:
      'Formerly of Trinity, Aaron Potter launched Wildflowers as his debut solo project. The restaurant has been widely acclaimed for its confident, ingredient-led cooking and warm hospitality.',
    features: ['Michelin Starred', 'Private Dining', 'Live Fire Cooking', 'Wheelchair Accessible'],
    badges: [
      { label: 'London Top 100 #1', variant: 'award' },
      { label: 'Restaurant of the Year', variant: 'premium' },
    ],
    availability: 'instant',
    michelinStars: 1,
    openingHours: {
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
    },
  },
  {
    id: '2',
    name: 'Planque',
    slug: 'planque',
    location: 'Dalston, London',
    area: 'London',
    cuisine: 'Modern British',
    priceRange: '££££',
    rating: 4.8,
    reviewCount: 289,
    description:
      'Looks like another East End bar, but quickly reveals itself as something of rare brilliance. Striking architecture, mad genius cooking and razor-sharp wine pairings. The highest new entry in the London Top 100 for 2026, ranked at number two.',
    shortDescription:
      'Striking architecture, mad genius cooking and razor-sharp wine pairings in Dalston.',
    image:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070',
    ],
    features: ['Wine Pairing', 'Bar Dining', 'Trending'],
    badges: [
      { label: 'London Top 100 #2', variant: 'award' },
      { label: 'Highest New Entry', variant: 'trending' },
    ],
    availability: 'instant',
    openingHours: {
      wednesday: '18:00 - 23:00',
      thursday: '18:00 - 23:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
      sunday: '12:00 - 16:00',
    },
  },
  {
    id: '3',
    name: 'Legado',
    slug: 'legado',
    location: 'Shoreditch, London',
    area: 'London',
    cuisine: 'Spanish',
    priceRange: '££££',
    rating: 4.8,
    reviewCount: 198,
    description:
      'Nieves Barragan-Mohacho\'s legacy restaurant. Capturing the disparate identities of varied Spanish regions is no small feat, yet from Segovian suckling pig to quisquillas de Cadiz, there isn\'t a dud in sight.',
    shortDescription:
      'Nieves Barragan-Mohacho celebrates Spanish regional cuisine in Shoreditch.',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974',
    ],
    chefName: 'Nieves Barragan-Mohacho',
    chefStory:
      'One of London\'s most celebrated chefs, Nieves brings the authentic flavours of Spain\'s diverse regions to her stunning Shoreditch restaurant.',
    features: ['Spanish Cuisine', 'Chef\'s Table', 'Wine Pairing'],
    badges: [
      { label: 'London Top 100 #3', variant: 'award' },
      { label: 'Trending', variant: 'trending' },
    ],
    availability: 'instant',
    openingHours: {
      monday: '18:00 - 22:00',
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
    },
  },
  {
    id: '4',
    name: 'Da Terra',
    slug: 'da-terra',
    location: 'Bethnal Green, London',
    area: 'London',
    cuisine: 'Brazilian',
    priceRange: '££££',
    rating: 4.9,
    reviewCount: 356,
    description:
      'A two-Michelin-starred restaurant blending Brazilian soul with European precision. Chef Rafael Cagali delivers an extraordinary tasting menu that has earned Da Terra its place among London\'s elite dining destinations.',
    shortDescription:
      'Two Michelin stars blending Brazilian soul with European precision in Bethnal Green.',
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070',
    ],
    chefName: 'Rafael Cagali',
    chefStory:
      'One of London\'s most decorated chefs, Rafael Cagali earned two Michelin stars for Da Terra within its first year. His Brazilian heritage shines through every dish.',
    features: ['Michelin Starred', 'Tasting Menu', 'Wine Pairing', 'Chef\'s Table'],
    badges: [
      { label: 'London Top 100 #5', variant: 'award' },
      { label: '2 Michelin Stars', variant: 'premium' },
    ],
    availability: 'instant',
    michelinStars: 2,
    openingHours: {
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
      sunday: '12:00 - 15:00',
    },
  },
  {
    id: '5',
    name: 'The Ritz Restaurant',
    slug: 'the-ritz-restaurant',
    location: 'Mayfair, London',
    area: 'London',
    cuisine: 'French',
    priceRange: '££££',
    rating: 4.8,
    reviewCount: 521,
    description:
      'Fine dining at its most magnificent. The Ritz Restaurant is a stunningly opulent dining room serving classical French cuisine with modern flair under the direction of executive chef John Williams MBE.',
    shortDescription:
      'Magnificent fine dining in the opulent Ritz dining room, classical French cuisine.',
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070',
    ],
    chefName: 'John Williams MBE',
    chefStory:
      'Executive chef John Williams MBE has led the kitchens at The Ritz for over two decades, maintaining its reputation as one of the world\'s most celebrated dining rooms.',
    features: ['Fine Dining', 'Afternoon Tea', 'Private Dining', 'Wheelchair Accessible'],
    badges: [
      { label: 'London Top 100 #7', variant: 'award' },
      { label: 'Premium', variant: 'premium' },
    ],
    availability: 'instant',
    michelinStars: 1,
    openingHours: {
      monday: '12:00 - 14:00, 18:00 - 22:00',
      tuesday: '12:00 - 14:00, 18:00 - 22:00',
      wednesday: '12:00 - 14:00, 18:00 - 22:00',
      thursday: '12:00 - 14:00, 18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 22:30',
      saturday: '12:00 - 14:00, 18:00 - 22:30',
      sunday: '12:00 - 14:00, 18:00 - 22:00',
    },
  },
  {
    id: '6',
    name: 'Dove',
    slug: 'dove',
    location: 'Notting Hill, London',
    area: 'London',
    cuisine: 'Modern European',
    priceRange: '££££',
    rating: 4.7,
    reviewCount: 167,
    description:
      'Jackson Boxer\'s fabulous Notting Hill reinvention. A stunning neighbourhood restaurant that combines a relaxed atmosphere with serious cooking, earning it a spot in the London Top 10 for 2026.',
    shortDescription:
      'Jackson Boxer\'s stunning Notting Hill reinvention — relaxed atmosphere, serious cooking.',
    image:
      'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2070',
    ],
    chefName: 'Jackson Boxer',
    chefStory:
      'Jackson Boxer is one of London\'s most exciting chefs, known for his ingredient-driven cooking and relaxed, confident style.',
    features: ['Neighbourhood Restaurant', 'Seasonal Menu', 'Cocktail Bar'],
    badges: [
      { label: 'London Top 100 #8', variant: 'award' },
      { label: 'Trending', variant: 'trending' },
    ],
    availability: 'instant',
    openingHours: {
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:30, 18:00 - 23:00',
      saturday: '12:00 - 14:30, 18:00 - 23:00',
      sunday: '12:00 - 16:00',
    },
  },
  {
    id: '7',
    name: 'Aulis London',
    slug: 'aulis-london',
    location: 'Soho, London',
    area: 'London',
    cuisine: 'Modern British',
    priceRange: '££££',
    rating: 4.9,
    reviewCount: 134,
    description:
      'Simon Rogan\'s exclusive chef\'s table experience. Aulis is a private dining and development kitchen where guests experience a multi-course tasting menu crafted right before their eyes.',
    shortDescription:
      'Simon Rogan\'s exclusive chef\'s table and development kitchen in Soho.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    ],
    chefName: 'Simon Rogan',
    chefStory:
      'Simon Rogan is one of Britain\'s most acclaimed chefs, with multiple Michelin stars across his restaurants including L\'Enclume and Roganic.',
    features: ['Chef\'s Table', 'Tasting Menu Only', 'Exclusive', 'Private Dining'],
    badges: [
      { label: 'London Top 100 #9', variant: 'award' },
      { label: 'Rare Table', variant: 'rare' },
    ],
    availability: 'request',
    openingHours: {
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 22:00',
      saturday: '12:00 - 14:00, 18:00 - 22:00',
    },
  },
  {
    id: '8',
    name: 'BiBi',
    slug: 'bibi',
    location: 'Mayfair, London',
    area: 'London',
    cuisine: 'Indian',
    priceRange: '££££',
    rating: 4.7,
    reviewCount: 223,
    description:
      'Chef Chet Sharma\'s refined Indian cuisine in a sleek Mayfair setting. BiBi has been acclaimed for its inventive tasting menus that push the boundaries of traditional Indian cooking while respecting its roots.',
    shortDescription:
      'Chet Sharma\'s refined Indian cuisine pushing boundaries in Mayfair.',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1974',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1974',
    ],
    chefName: 'Chet Sharma',
    chefStory:
      'Chet Sharma brings a scientific precision to Indian cooking, having trained under some of the world\'s best chefs before opening his critically acclaimed BiBi.',
    features: ['Tasting Menu', 'Wine Pairing', 'Vegetarian Options'],
    badges: [
      { label: 'London Top 100 #6', variant: 'award' },
      { label: 'Michelin Starred', variant: 'premium' },
    ],
    availability: 'instant',
    michelinStars: 1,
    openingHours: {
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
    },
  },
  {
    id: '9',
    name: 'Mountain',
    slug: 'mountain',
    location: 'Battersea, London',
    area: 'London',
    cuisine: 'Modern British',
    priceRange: '£££',
    rating: 4.6,
    reviewCount: 178,
    description:
      'A neighbourhood restaurant that feels like a destination. Mountain delivers bold, confident cooking with a focus on seasonal British produce in a warm, welcoming setting.',
    shortDescription:
      'Bold, confident cooking with seasonal British produce in Battersea.',
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974',
    images: [
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974',
    ],
    features: ['Seasonal Menu', 'Neighbourhood Vibe', 'Sunday Roast'],
    badges: [
      { label: 'London Top 100 #10', variant: 'award' },
    ],
    availability: 'instant',
    openingHours: {
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
      sunday: '12:00 - 16:00',
    },
  },
  {
    id: '10',
    name: 'Ikoyi',
    slug: 'ikoyi',
    location: 'St James\'s, London',
    area: 'London',
    cuisine: 'West African',
    priceRange: '££££',
    rating: 4.9,
    reviewCount: 312,
    description:
      'A two-Michelin-starred journey through the spices and flavours of West Africa. Ikoyi is one of London\'s most exciting and original restaurants, offering a tasting menu that challenges and delights in equal measure.',
    shortDescription:
      'Two Michelin stars exploring West African spices and flavours in St James\'s.',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974',
    ],
    chefName: 'Jeremy Chan',
    chefStory:
      'Jeremy Chan\'s Ikoyi has been one of the most talked-about restaurants in London since opening, earning two Michelin stars for its bold, original cooking.',
    features: ['Michelin Starred', 'Tasting Menu', 'Wine Pairing', 'Exclusive'],
    badges: [
      { label: 'London Top 100 #14', variant: 'award' },
      { label: '2 Michelin Stars', variant: 'premium' },
    ],
    availability: 'instant',
    michelinStars: 2,
    openingHours: {
      monday: '18:00 - 22:00',
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
    },
  },
  {
    id: '11',
    name: 'Wilsons',
    slug: 'wilsons',
    location: 'Bristol',
    area: 'UK',
    cuisine: 'Modern British',
    priceRange: '£££',
    rating: 4.8,
    reviewCount: 245,
    description:
      'SquareMeal UK Top 100 #1 for 2026. A Bristol gem that puts sustainability and seasonality at its heart. Every ingredient tells a story of the West Country\'s exceptional larder.',
    shortDescription:
      'SquareMeal UK Top 100 #1. Bristol\'s finest — sustainability and seasonality at its heart.',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974',
    images: [
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974',
    ],
    features: ['Seasonal Menu', 'Sustainable', 'West Country Produce', 'Wheelchair Accessible'],
    badges: [
      { label: 'UK Top 100 #1', variant: 'award' },
      { label: 'Trending', variant: 'trending' },
    ],
    availability: 'instant',
    openingHours: {
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
      sunday: '12:00 - 15:00',
    },
  },
  {
    id: '12',
    name: 'KOL',
    slug: 'kol',
    location: 'Marylebone, London',
    area: 'London',
    cuisine: 'Mexican',
    priceRange: '££££',
    rating: 4.7,
    reviewCount: 267,
    description:
      'Santiago Lastra\'s celebration of Mexican ingredients and traditions, interpreted through a British lens. KOL holds a Michelin star and is widely regarded as London\'s finest Mexican restaurant.',
    shortDescription:
      'Santiago Lastra celebrates Mexican ingredients through a British lens in Marylebone.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    ],
    chefName: 'Santiago Lastra',
    chefStory:
      'Santiago Lastra trained at Noma before bringing his unique vision for Mexican cuisine to London, earning a Michelin star and universal acclaim.',
    features: ['Michelin Starred', 'Tasting Menu', 'Cocktail Bar'],
    badges: [
      { label: 'London Top 100 #11', variant: 'award' },
      { label: 'Michelin Star', variant: 'premium' },
    ],
    availability: 'instant',
    michelinStars: 1,
    openingHours: {
      monday: '18:00 - 22:00',
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '12:00 - 14:00, 18:00 - 23:00',
      saturday: '12:00 - 14:00, 18:00 - 23:00',
      sunday: '12:00 - 16:00',
    },
  },
]

export const collections: Collection[] = [
  {
    id: 'c1',
    name: 'London Top 100',
    slug: 'london-top-100',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
    description: 'London\'s definitive top 100 restaurants for 2026, blending critic opinion with public votes.',
    restaurantCount: 100,
  },
  {
    id: 'c2',
    name: 'UK Top 100',
    slug: 'uk-top-100',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    description: 'The UK\'s 100 best restaurants celebrating outstanding dining across England, Scotland, Wales and beyond.',
    restaurantCount: 100,
  },
  {
    id: 'c3',
    name: 'Hottest New Openings',
    slug: 'hottest-new-openings',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2070',
    description: 'London\'s most anticipated restaurant openings and the places everyone is talking about.',
    restaurantCount: 25,
  },
  {
    id: 'c4',
    name: 'Best Sunday Roasts',
    slug: 'best-sunday-roasts',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
    description: 'The quintessential British tradition, perfected at London and the UK\'s finest restaurants.',
    restaurantCount: 36,
  },
  {
    id: 'c5',
    name: 'Al Fresco Dining',
    slug: 'al-fresco-dining',
    image: 'https://images.unsplash.com/photo-1416434165395-c85c5bb80e7f?q=80&w=2070',
    description: 'The best outdoor and waterside dining spots for soaking up the sun.',
    restaurantCount: 40,
  },
  {
    id: 'c6',
    name: 'Cheap Michelin Stars',
    slug: 'cheap-michelin-stars',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070',
    description: 'Wallet-friendly fine dining — Michelin-starred set menus that won\'t break the bank.',
    restaurantCount: 18,
  },
]

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'SquareMeal Awards 2026: The UK and London\'s Must-Visit Restaurants Revealed',
    slug: 'squaremeal-awards-2026',
    excerpt:
      'Drawing on 30 years of expertise and thousands of diner votes, SquareMeal\'s 2026 Top 100 Restaurant lists spotlight 200 of the best restaurants in London and the UK.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974',
    category: 'Awards',
    author: 'SquareMeal Team',
    publishedAt: '2026-01-26',
    featured: true,
  },
  {
    id: 'a2',
    title: 'Best New Restaurants London 2026: Hottest Openings and Restaurants Coming Soon',
    slug: 'best-new-restaurants-london-2026',
    excerpt:
      'London\'s best new restaurants reviewed and rated, plus new openings to look out for in 2026 including Coreus by Clare Smyth, Ornella, and Vesper.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070',
    category: 'New Openings',
    author: 'SquareMeal Critics',
    publishedAt: '2026-05-07',
  },
  {
    id: 'a3',
    title: 'Best Afternoon Tea London: 31 Luxurious Ways to Enjoy Cake and a Cuppa',
    slug: 'best-afternoon-tea-london',
    excerpt:
      'From The Ritz to Sketch, discover London\'s most luxurious afternoon tea experiences for every occasion.',
    image: 'https://images.unsplash.com/photo-1537047902294-8bf7863cd2b7?q=80&w=2070',
    category: 'Best Lists',
    author: 'Eleanor Winters',
    publishedAt: '2026-05-15',
  },
  {
    id: 'a4',
    title: 'London Restaurants That Have Closed in 2026',
    slug: 'london-restaurants-closed-2026',
    excerpt:
      'A round-up of the London restaurants that have closed their doors in 2026, and what\'s taking their place.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    category: 'News',
    author: 'James Fisher',
    publishedAt: '2026-05-20',
  },
]

export const venues: Venue[] = [
  {
    id: 'v1',
    name: 'The Connaught Grill Room',
    slug: 'the-connaught-grill-room',
    location: 'Mayfair, London',
    type: 'private-dining',
    capacity: 40,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070',
    description: 'An intimate and luxurious private dining room in one of London\'s most prestigious hotels, featuring wood-panelled walls and exceptional service.',
  },
  {
    id: 'v2',
    name: 'Searcy\'s at The Gherkin',
    slug: 'searcys-at-the-gherkin',
    location: 'City of London',
    type: 'corporate',
    capacity: 200,
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070',
    description: 'Iconic event spaces on the upper floors of London\'s most famous skyscraper, offering panoramic views and world-class catering for corporate events.',
  },
  {
    id: 'v3',
    name: 'Bob Bob Ricard Private Dining',
    slug: 'bob-bob-ricard-private-dining',
    location: 'Soho, London',
    type: 'private-dining',
    capacity: 50,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975',
    description: 'The iconic \'Press for Champagne\' restaurant offers glamorous private dining rooms with art deco interiors and indulgent Russian-French cuisine.',
  },
  {
    id: 'v4',
    name: 'River Room at Galvin at Windows',
    slug: 'river-room-galvin-windows',
    location: 'Mayfair, London',
    type: 'private-dining',
    capacity: 60,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070',
    description: 'Perched on the 28th floor of the London Hilton on Park Lane, offering breathtaking views across the London skyline and the River Thames.',
  },
  {
    id: 'v5',
    name: 'Sushi Samba Covent Garden',
    slug: 'sushi-samba-covent-garden',
    location: 'Covent Garden, London',
    type: 'party',
    capacity: 250,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974',
    description: 'A vibrant fusion of Japanese, Brazilian and Peruvian flavours with a stunning rooftop terrace overlooking Covent Garden.',
  },
  {
    id: 'v6',
    name: 'Cliveden House',
    slug: 'cliveden-house',
    location: 'Berkshire',
    type: 'wedding',
    capacity: 150,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070',
    description: 'A magnificent 17th-century Italianate mansion set in 376 acres of National Trust gardens, offering the ultimate fairytale wedding setting.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Victoria Ashford',
    role: 'Food & Travel Editor',
    avatar: '',
    content:
      'SquareMeal transformed how I discover dining. Having relied on their Top 100 lists for years, the curation is impeccable — every recommendation has been exceptional.',
    rating: 5,
    restaurantName: 'Wildflowers',
  },
  {
    id: 't2',
    name: 'James Whitfield',
    role: 'Corporate Events Director',
    avatar: '',
    content:
      'Booking private dining through SquareMeal\'s concierge service saved us weeks of research. The attention to detail and range of venues is remarkable.',
    rating: 5,
    restaurantName: 'Searcy\'s at The Gherkin',
  },
  {
    id: 't3',
    name: 'Sophie Laurent',
    role: 'Private Chef & Consultant',
    avatar: '',
    content:
      'As an industry professional, I trust SquareMeal\'s editorial standards. Their reviews are the most honest and informed in the industry.',
    rating: 5,
    restaurantName: 'Da Terra',
  },
  {
    id: 't4',
    name: 'David Chen',
    role: 'Luxury Travel Blogger',
    avatar: '',
    content:
      'The Top 100 lists are my go-to whenever I\'m visiting a new city. SquareMeal has never steered me wrong — brilliant curation.',
    rating: 5,
    restaurantName: 'Ikoyi',
  },
]
