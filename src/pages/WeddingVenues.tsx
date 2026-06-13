import { motion } from 'framer-motion'
import { Heart, MapPin, Users, Sparkles, Phone, Mail, Star } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { staggerContainer, staggerItem, fadeInUp } from '@/animations'
import { Button } from '@/components/ui/button'

const weddingFeatures = [
  { icon: Heart, title: 'Bespoke Menus', desc: 'Tailored dining experiences crafted by award-winning chefs for your special day.' },
  { icon: MapPin, title: 'Stunning Locations', desc: 'From historic country estates to modern city rooftops with panoramic views.' },
  { icon: Users, title: 'Expert Planning', desc: 'Dedicated wedding coordinators to ensure every detail is perfect.' },
  { icon: Sparkles, title: 'SquareMeal Rewards', desc: 'Earn 500 Rewards Points with every confirmed wedding booking.' },
]

const venues = [
  {
    name: '116 Pall Mall',
    location: 'St James\'s, London SW1Y 5ED',
    phone: '020 7451 3347',
    tagline: 'Grade-I listed Georgian splendour in the heart of St James\'s',
    description: 'A magnificent Grade-I listed Georgian mansion featuring the stunning 15ft Regency chandelier originally commissioned for George IV. With five floors of event space, this iconic venue accommodates up to 1,000 guests across three breathtaking ceremony and reception rooms.',
    details: [
      'The Nash Suite: 250 seated / 350 ceremony / 500 reception',
      'The Carlton: 180 seated / 220 ceremony / 300 reception',
      'The Waterloo: 80 seated / 120 ceremony / 160 reception',
    ],
    highlight: 'Exclusive weekend hire available',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070',
    rating: 5,
  },
  {
    name: 'The Sloane Club',
    location: 'Chelsea, London SW1W 8BP',
    phone: '020 7730 9131',
    tagline: 'Russell Sage Studio elegance in the heart of Chelsea',
    description: 'An exquisite private members club transformed by celebrated designer Russell Sage Studio. The LILA restaurant features a stunning retractable glass roof while the intimate Demob Bar and Lady in Black room offer charm for smaller celebrations.',
    details: [
      'LILA Restaurant: 85 seated / 160 standing',
      'Demob Bar: 25 seated / 40 standing',
      'Lady in Black Room: 8 seated',
    ],
    highlight: 'Retractable glass roof restaurant',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069',
    rating: 5,
  },
  {
    name: 'Clos Maggiore',
    location: 'Covent Garden, London WC2E 8JD',
    phone: '020 4580 1177',
    tagline: 'London\'s most romantic restaurant',
    description: 'Consistently voted London\'s most romantic restaurant, Clos Maggiore offers enchanting private dining for up to 22 guests. The French-Tuscan inspired interiors, open fireplace, and cobbled alfresco terrace create an unforgettable setting for intimate wedding celebrations.',
    details: [
      'Private Dining Room: 22 seated',
      'Cobbled alfresco terrace',
      'Open fireplace & French-Tuscan interiors',
    ],
    highlight: 'Modern European cuisine by award-winning chefs',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974',
    rating: 5,
  },
  {
    name: 'Park Plaza Riverbank',
    location: 'Vauxhall, London SE1 7TJ',
    phone: '0333 400 6102',
    tagline: '12th-floor river views above the Thames',
    description: 'Perched on the 12th floor, the River View Lounge offers spectacular panoramic Thames views for your wedding day. Choose from silver, gold, or platinum wedding packages, each designed to deliver an exceptional experience complemented by a complimentary honeymoon stay.',
    details: [
      'River View Lounge: 80 seated / 150 standing',
      'Silver, Gold & Platinum wedding packages',
      'Complimentary honeymoon stay included',
    ],
    highlight: 'Breathtaking Thames skyline views',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069',
    rating: 4,
  },
  {
    name: 'Isabel Mayfair',
    location: 'Mayfair, London W1S 4HY',
    phone: '020 3096 9292',
    tagline: 'Cinematic glamour in the heart of Mayfair',
    description: 'A stunning Mayfair venue where cinematic atmosphere meets modern luxury. The main dining room accommodates up to 110 guests seated beneath dramatic lighting, while the Dragon Room offers an intimate setting for smaller celebrations with its opulent décor.',
    details: [
      'Main Dining: 110 seated / 200 standing',
      'Dragon Room: 40 seated / 80 standing',
      'Full Venue Hire: 110 seated / 200 standing',
    ],
    highlight: 'Cinematic atmosphere & dramatic interiors',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974',
    rating: 5,
  },
  {
    name: 'Westminster Boating Base',
    location: 'Westminster, London SW1V 3JY',
    phone: '020 7821 7389',
    tagline: 'Panoramic Thames views from riverside terraces',
    description: 'A unique waterside venue operated by GLL as a social enterprise, offering breathtaking panoramic Thames views from its riverside terraces. The Pavilion Room and Edgson Room provide flexible spaces for ceremonies and receptions with an unmistakable London backdrop.',
    details: [
      'The Pavilion Room: 100 seated / 150 standing',
      'Edgson Room: 40 seated / 60 standing',
      'Riverside terraces with Thames panorama',
    ],
    highlight: 'Social enterprise supporting the community',
    image: 'https://images.unsplash.com/photo-1569346340114-5caa905fc3a9?q=80&w=1974',
    rating: 4,
  },
  {
    name: 'Morden Hall',
    location: 'Morden, London SM4 5JD',
    phone: '020 8102 0553',
    tagline: '18th-century country house on 125 acres of parkland',
    description: 'A Grade II-listed 18th-century country house set within 125 acres of breathtaking National Trust parkland. The Cherry Suite provides the perfect bridal preparation space, while the Willow Suite and Mulberry Suite offer elegant ceremony and reception rooms for your perfect country wedding.',
    details: [
      'Willow Suite: 120 ceremony',
      'Mulberry Suite: 150 seated / 200 evening',
      'Cherry Suite: dedicated bridal preparation',
    ],
    highlight: 'Exclusive hire in National Trust parkland',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1974',
    rating: 5,
  },
  {
    name: 'The Golden Hinde',
    location: 'London Bridge, London SE1 9DE',
    phone: '020 7403 0123',
    tagline: 'Sir Francis Drake\'s galleon — a wedding like no other',
    description: 'Exchange vows aboard a full-scale reconstruction of Sir Francis Drake\'s legendary 16th-century galleon. The Hold hosts your ceremony and dancing while The Great Cabin provides an intimate dining space. Fully bespoke weddings with the unique option to bring your own food and drink.',
    details: [
      'The Hold: ceremony & dancing space',
      'The Great Cabin: intimate dining',
      'Up to 120 guests (summer) / 80 (winter)',
    ],
    highlight: 'BYO food & drink option available',
    image: 'https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=2070',
    rating: 5,
  },
]

export default function WeddingVenues() {
  return (
    <>
      <SEO title="Wedding Venues" description="Find the perfect wedding venue in London and the UK. From historic manors to a Elizabethan galleon, discover extraordinary settings for your special day with SquareMeal." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4"><Heart className="w-4 h-4" /> SquareMeal Weddings</span>
            <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Extraordinary Wedding Venues</h1>
            <p className="font-body text-lg text-white/60 max-w-2xl">From grand country estates to a 16th-century galleon, discover London and the UK's most distinctive settings for your perfect day.</p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {weddingFeatures.map(f => (
              <motion.div key={f.title} variants={staggerItem} className="text-center p-6 bg-soft-white border border-charcoal/5">
                <f.icon className="w-8 h-8 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-display text-lg text-rich-black mb-2">{f.title}</h3>
                <p className="font-body text-sm text-on-surface-variant">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">Featured Wedding Venues</h2>
            <p className="font-body text-base text-on-surface-variant mb-10 max-w-3xl">Handpicked by our experts, each venue offers something truly unique for your wedding celebration.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venues.map((venue, i) => (
                <motion.div key={venue.name} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-soft-white border border-charcoal/5 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${venue.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/70 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-1">
                      {Array.from({ length: venue.rating }).map((_, ri) => (
                        <Star key={ri} className="w-4 h-4 fill-champagne-gold text-champagne-gold" />
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl text-soft-white mb-1">{venue.name}</h3>
                      <p className="font-body text-sm text-white/70 flex items-center gap-1"><MapPin className="w-3 h-3" /> {venue.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-label-sm text-xs uppercase tracking-widest text-champagne-gold mb-2">{venue.tagline}</p>
                    <p className="font-body text-sm text-on-surface-variant mb-4">{venue.description}</p>
                    <div className="border-t border-charcoal/5 pt-4 mb-4">
                      <ul className="space-y-1">
                        {venue.details.map((d, di) => (
                          <li key={di} className="font-body text-xs text-on-surface-variant flex items-start gap-2"><span className="text-champagne-gold mt-0.5">&#8226;</span>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 font-label-sm text-xs text-rich-black"><Phone className="w-3 h-3 text-champagne-gold" /> {venue.phone}</span>
                      <span className="font-label-sm text-xs uppercase tracking-widest text-champagne-gold border-b border-champagne-gold pb-0.5">{venue.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-rich-black border border-champagne-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069')] bg-cover bg-center opacity-5" />
            <div className="relative z-10">
              <Heart className="w-10 h-10 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl text-soft-white mb-4">Speak to Our Wedding Concierge</h2>
              <p className="font-body text-base text-white/60 max-w-2xl mx-auto mb-2">With over 30 years of experience, our dedicated concierge team will match you with the perfect venues — from intimate dining rooms to grand estates — tailored to your style, guest list, and budget. Every confirmed booking earns 500 SquareMeal Rewards points.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4">
                <a href="tel:02078405222" className="inline-flex items-center gap-2 text-soft-white font-body text-base hover:text-champagne-gold transition-colors"><Phone className="w-4 h-4 text-champagne-gold" /> 020 7840 5222</a>
                <span className="hidden sm:block text-white/30">|</span>
                <a href="mailto:concierge@squaremeal.co.uk" className="inline-flex items-center gap-2 text-soft-white font-body text-base hover:text-champagne-gold transition-colors"><Mail className="w-4 h-4 text-champagne-gold" /> concierge@squaremeal.co.uk</a>
              </div>
              <Button variant="primary" size="lg" className="mt-4">Start Your Search</Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
