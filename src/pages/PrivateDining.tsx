import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Users, Phone, Award, ArrowRight, Star, CheckCircle } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Button } from '@/components/ui/button'

const cities = [
  { name: 'London', count: '450+', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070' },
  { name: 'Manchester', count: '120+', image: 'https://images.unsplash.com/photo-1544282052-1f1b8126a270?q=80&w=2070' },
  { name: 'Birmingham', count: '85+', image: 'https://images.unsplash.com/photo-1564514005287-9e5a2bc12b0c?q=80&w=2070' },
  { name: 'Edinburgh', count: '90+', image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?q=80&w=2070' },
]

const venues = [
  {
    id: 'fortnum-and-mason',
    name: 'Fortnum & Mason',
    location: '181 Piccadilly, St. James\'s, London W1A 1ER',
    phone: '020 7734 8040',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    description: 'With 11 private dining spaces across this iconic Piccadilly landmark, Fortnum & Mason offers the grandest settings in London. The Diamond Jubilee Tea Salon hosts 170 seated or 350 standing, the Food & Drink Studio seats 18-24 (45 standing), while The Drawing Room, Boardroom, Crypt, and Wine Bar provide versatile options from 12 to 100 guests.',
    spaces: 11,
    highlights: ['Diamond Jubilee Tea Salon', 'Food & Drink Studio', 'The Drawing Room', 'The Boardroom', 'The Crypt', 'The Wine Bar'],
    capacities: ['170 seated / 350 standing', '18-24 seated / 45 standing', '60 seated', '24 seated', '12 seated', '100 standing'],
    price: '£££'
  },
  {
    id: 'the-maine-mayfair',
    name: 'The Maine Mayfair',
    location: '6 Medici Courtyard, Mayfair, London W1S 1JY',
    phone: '020 3432 2192',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    description: 'New England grandeur meets Mayfair elegance at The Maine. The Brasserie seats 90 for dinner, The Drawing Room offers intimate dining for 30, and The Terrace accommodates up to 100 guests. A destination for lobster, oysters, and classic American cuisine in a setting of refined coastal luxury.',
    spaces: 3,
    highlights: ['The Brasserie', 'The Drawing Room', 'The Terrace'],
    capacities: ['90 seated', '30 seated', '100 guests'],
    price: '£££'
  },
  {
    id: 'park-chinois',
    name: 'Park Chinois',
    location: '17 Berkeley Street, Mayfair, London W1J 8EA',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800',
    description: 'A theatrical Mayfair supper club inspired by 1930s Shanghai. Club Chinois hosts 130 seated or 250 standing, Salon de Chine offers 110 seated or 200 standing, and private mezzanine booths — Salon Noir, Royal Circle, and Salon Rouge — seat 9-12 guests for an opulent dining experience.',
    spaces: 6,
    highlights: ['Club Chinois', 'Salon de Chine', 'Salon Noir', 'Royal Circle', 'Salon Rouge'],
    capacities: ['130 seated / 250 standing', '110 seated / 200 standing', '9 guests', '9 guests', '12 guests'],
    price: '££££'
  },
  {
    id: 'browns-hotel',
    name: 'Brown\'s Hotel',
    location: '33 Albemarle Street, Mayfair, London W1S 4BP',
    image: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800',
    description: 'A historic Mayfair hotel where Rudyard Kipling wrote The Jungle Book and Alexander Graham Bell made London\'s first telephone call. St George\'s Room seats 12-14, the Roosevelt Room hosts 40 seated, and the Lord Byron Room accommodates 10. Each space carries the legacy of London\'s most storied address.',
    spaces: 4,
    highlights: ['St George\'s Room', 'Roosevelt Room', 'The Niagara Room', 'Lord Byron Room'],
    capacities: ['12-14 seated', '40 seated', 'Private dining', '10 seated'],
    price: '££££'
  },
  {
    id: 'the-wolseley',
    name: 'The Wolseley',
    location: '160 Piccadilly, St James\'s, London W1J 9EB',
    phone: '020 3917 3747',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800',
    description: 'Set in a magnificent former car showroom on Piccadilly, The Wolseley\'s art-deco interiors create an unforgettable backdrop for private dining. The Private Dining Room hosts 15 guests with its own staircase, offering seclusion amid the grandeur of one of London\'s most beloved restaurants.',
    spaces: 1,
    highlights: ['Private Dining Room', 'Art-deco interiors', 'Private staircase', '15 guests'],
    capacities: ['15 guests'],
    price: '£££'
  },
  {
    id: 'benares',
    name: 'Benares',
    location: '12a Berkeley Square House, Berkeley Square, Mayfair, London W1J 6BS',
    phone: '020 7629 8886',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    description: 'Michelin-starred modern Indian cuisine in the heart of Mayfair. The Chef\'s Table seats 8, the Wine Room hosts 10, the Berkeley Room takes 16, and the Dover Room accommodates 36 seated. The Lounge offers 30 seated or 60 standing for a contemporary fine-dining experience.',
    spaces: 5,
    highlights: ['Chef\'s Table', 'Wine Room', 'Berkeley Room', 'Dover Room', 'The Lounge'],
    capacities: ['8 seated', '10 seated', '16 seated', '36 seated', '30 seated / 60 standing'],
    price: '£££'
  },
  {
    id: 'les-110-de-taillevent',
    name: 'Les 110 de Taillevent',
    location: '16 Cavendish Square, Marylebone, London W1G 9DD',
    phone: '020 3141 6016',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800',
    description: 'Sister to the legendary Taillevent in Paris, this Marylebone gem brings Parisian elegance to London. The Lamennais Room seats 30 (40 standing) beneath a stunning chandelier with views over Cavendish Square. A wine list of 110 references by the glass, paired with classical French cuisine.',
    spaces: 1,
    highlights: ['Lamennais Room', 'Chandelier', 'Cavendish Square views', '110 wines by the glass'],
    capacities: ['30 seated / 40 standing'],
    price: '£££'
  },
  {
    id: '74-duke',
    name: '74 Duke',
    location: '74 Duke Street, Mayfair, London W1K 6JZ',
    phone: '020 3772 7722',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    description: 'A Parisian-inspired brasserie in the beating heart of Mayfair. Semi-private dining for 14 seated, or take exclusive hire of the entire venue for 111 seated or 150 standing. A celebration of French culinary craft in a setting of understated sophistication.',
    spaces: 2,
    highlights: ['Semi-private dining', 'Exclusive hire'],
    capacities: ['14 seated', '111 seated / 150 standing'],
    price: '£££'
  }
]

export default function PrivateDining() {
  const [enquired, setEnquired] = useState(false)
  return (
    <>
      <SEO title="Private Dining Rooms" description="Discover the best private dining rooms in London and the UK. Book exclusive spaces for corporate events, celebrations, and special occasions with SquareMeal's free concierge service." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975')] bg-cover bg-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="font-display text-champagne-gold tracking-widest text-sm uppercase mb-2 block">SquareMeal Curated</span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Private Dining</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">Discover the finest private dining rooms across the UK. From intimate celebrations to grand corporate events, find your perfect space with SquareMeal's expert concierge service.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">Find Private Dining Rooms Near You</h2>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-8">
              Private dining is about creating an experience your guests will remember. Across the UK, there's a wealth of venues to suit every occasion, from intimate celebrations to large corporate events. Use SquareMeal's free concierge service to find the perfect venue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/concierge"><Button variant="primary" size="md">Free Concierge Service</Button></Link>
              <Link to="/marketplace"><Button variant="outline" size="md">Browse All Venues</Button></Link>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {cities.map(city => (
              <motion.div key={city.name} variants={staggerItem} className="group relative h-64 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-display text-xl text-soft-white">{city.name}</h3>
                  <p className="font-body text-sm text-white/60">{city.count} venues</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-3xl text-rich-black">Featured Private Dining Venues</h2>
              <span className="font-body text-sm text-on-surface-variant hidden md:block">{venues.length} hand-picked venues</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue, i) => (
                <motion.div key={venue.id} variants={staggerItem} className="group bg-soft-white border border-charcoal/5 overflow-hidden">
                  <div className="h-56 overflow-hidden relative">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${venue.image})` }} />
                    <div className="absolute top-3 left-3 bg-rich-black/80 text-champagne-gold font-display text-xs px-3 py-1">{venue.price}</div>
                    <div className="absolute top-3 right-3 bg-rich-black/80 text-soft-white font-display text-xs px-3 py-1 flex items-center gap-1"><Award className="w-3 h-3" />{venue.spaces} spaces</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-rich-black mb-2">{venue.name}</h3>
                    <p className="font-body text-sm text-on-surface-variant flex items-center gap-1 mb-2"><MapPin className="w-3.5 h-3.5 shrink-0" />{venue.location}</p>
                    {venue.phone && (
                      <p className="font-body text-sm text-on-surface-variant flex items-center gap-1 mb-3"><Phone className="w-3.5 h-3.5 shrink-0" />{venue.phone}</p>
                    )}
                    <p className="font-body text-sm text-on-surface-variant mb-4 leading-relaxed">{venue.description}</p>
                    <div className="border-t border-charcoal/10 pt-4">
                      <p className="font-body text-xs text-rich-black font-semibold mb-2 uppercase tracking-wider">Private Dining Options</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {venue.highlights.slice(0, 3).map((h, j) => (
                          <span key={j} className="font-body text-xs bg-champagne-gold/10 text-rich-black px-2 py-0.5">{h}</span>
                        ))}
                        {venue.highlights.length > 3 && (
                          <span className="font-body text-xs bg-charcoal/5 text-on-surface-variant px-2 py-0.5">+{venue.highlights.length - 3}</span>
                        )}
                      </div>
                      <p className="font-body text-xs text-on-surface-variant flex items-center gap-1"><Users className="w-3 h-3" />Capacities: {venue.capacities.join(', ')}</p>
                    </div>
                    <Link to={`/venue/${venue.id}`} className="mt-4 inline-flex items-center gap-1 font-display text-sm text-rich-black hover:text-champagne-gold transition-colors">
                      Explore venue <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {venues.slice(0, 4).map((venue, i) => (
              <motion.div key={venue.id} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-rich-black p-6 group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-champagne-gold" />
                  <span className="font-display text-champagne-gold text-xs uppercase tracking-wider">Highlight</span>
                </div>
                <h3 className="font-display text-lg text-soft-white mb-2">{venue.name}</h3>
                <p className="font-body text-sm text-white/50 mb-3 line-clamp-2">{venue.description.substring(0, 120)}...</p>
                <div className="border-t border-white/10 pt-3">
                  <p className="font-body text-xs text-white/40 flex items-center gap-1"><MapPin className="w-3 h-3" />{venue.location}</p>
                  <p className="font-body text-xs text-white/40 flex items-center gap-1 mt-1"><Users className="w-3 h-3" />Up to {venue.capacities[0]}</p>
                </div>
                <Link to={`/venue/${venue.id}`} className="mt-3 inline-flex items-center gap-1 font-display text-xs text-champagne-gold hover:text-soft-white transition-colors">
                  View details <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-rich-black p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl text-soft-white mb-4">Free Concierge Service</h2>
                <p className="font-body text-base text-white/60 mb-6 leading-relaxed">Our expert concierge team is on hand to provide personalised venue recommendations that suit your needs, saving you time and money. Simply tell us about your event and we'll create a venue shortlist within 24 hours.</p>
                <div className="flex flex-col gap-3 text-sm text-white/40 font-body">
                  <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-champagne-gold" /> 020 7840 5222</span>
                  <span className="flex items-center gap-2"><span className="w-4 h-4 text-champagne-gold">✉</span> concierge@squaremeal.co.uk</span>
                </div>
              </div>
              <div className="bg-ivory p-8">
                {enquired ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                    <h3 className="font-display text-lg text-rich-black mb-2">Enquiry Sent</h3>
                    <p className="font-body text-sm text-on-surface-variant">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                <>
                <h3 className="font-display text-xl text-rich-black mb-4">Start Your Enquiry</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setEnquired(true) }}>
                  <input type="text" required placeholder="Event type" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold" />
                  <input type="number" required placeholder="Number of guests" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold" />
                  <input type="text" required placeholder="Location" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold" />
                  <Button type="submit" variant="primary" size="lg" className="w-full">Send Enquiry</Button>
                </form>
                </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
