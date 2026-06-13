import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sun, MapPin, Star, Clock, Phone, GlassWater, Cigarette, Music } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { restaurants } from '@/data/restaurants'
import { RestaurantCard } from '@/components/restaurant/RestaurantCard'
import { Button } from '@/components/ui/button'

const rooftopHighlights = [
  {
    name: 'Radio Rooftop',
    location: 'ME London Hotel, Covent Garden',
    desc: '10th-floor icon with sweeping views of the London Eye, Big Ben and the City skyline. Minimalist monochrome decor, white leather sofas, and a famous Champagne list starting at £100 with Cristal 1999 jeroboams at £5,000.',
    phone: '020 7395 3400',
    hours: '7am–1am weekdays / 7am–2am weekends',
  },
  {
    name: "CÉ LA VI London",
    location: '1 Paddington Square, Paddington',
    desc: "West London's highest rooftop across the 17th & 18th floors of Renzo Piano's landmark. Executive Chef Monchai Ling (ex-Hakkasan) leads a modern Asian menu of miso seabass, lobster noodles and dim sum. Sake Sommelier and DJs on the 18th-floor Lounge Bar.",
    phone: '020 4630 7888',
    hours: '12pm–2am daily',
  },
  {
    name: 'Fenchurch Restaurant',
    location: 'Sky Garden, Fenchurch Street',
    desc: "London's highest public garden venue on the 37th floor. Contemporary British cuisine surrounded by panoramic city views through floor-to-ceiling glass. A true sky-high dining destination open daily.",
    phone: '033 3772 0020',
    hours: 'Open daily (varies)',
  },
  {
    name: 'STK Rooftop Steakhouse & Bar',
    location: 'The Gantry Hotel, Stratford',
    desc: '18th-floor steakhouse with two outdoor terraces overlooking east London. Premium steaks, raw bar, lobster and caviar served alongside classic cocktails and resident DJs.',
    phone: '020 3475 8126',
    hours: 'Mon–Fri 3pm–11pm, Sat 12pm–12am, Sun 3pm–11pm',
  },
]

const rooftopRestaurants = [
  {
    name: 'Radio Rooftop',
    venue: 'ME London Hotel',
    address: '336-337 The Strand, Covent Garden, London WC2R 1HA',
    phone: '020 7395 3400',
    floor: '10th floor',
    views: 'London Eye, Big Ben, City skyline',
    decor: 'Minimalist monochrome, white leather sofas',
    signature: 'Cocktails from £12, Champagne from £100, Cristal 1999 jeroboam £5,000',
    extras: 'Cigar menu (Montecristo No.4)',
    hours: 'Mon–Fri 7am–1am, Sat–Sun 7am–2am',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
  },
  {
    name: "CÉ LA VI London",
    venue: '1 Paddington Square',
    address: '1 Paddington Square, 17th & 18th Floor, Paddington, London W2 1DL',
    phone: '020 4630 7888',
    floor: '17th & 18th floors',
    views: 'West London skyline',
    decor: 'Renzo Piano architecture, modern Asian interior',
    signature: 'Miso seabass, lobster noodles, dim sum, extensive sake list',
    extras: 'Sake Sommelier, DJs in 18th-floor Lounge Bar',
    hours: 'Daily 12pm–2am',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
  },
  {
    name: '1864 Rooftop Bar and Kitchen',
    venue: 'John Lewis, 6th Floor',
    address: '300 Oxford Street, London WC1 1DX',
    phone: '',
    floor: '6th floor',
    views: 'Panoramic central London',
    decor: 'AstroTurf, rattan seating, greenhouse booths, winter igloos',
    signature: 'Baked apple cinnamon martini, Padron peppers, chorizo croquettes',
    extras: 'Live music, seasonal igloos',
    hours: 'Wed–Sun (check venue)',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800',
  },
  {
    name: 'Casa Seabird',
    venue: 'The Hoxton Southwark',
    address: '32-40 Blackfriars Road, Southwark, London SE1 8PB',
    phone: '020 7903 3000',
    floor: '14th floor',
    views: 'South London skyline, Thames',
    decor: 'Outdoor terrace with awnings and heaters',
    signature: "London's longest oyster list, crudo, Iberico pork, whole market fish",
    extras: 'Portuguese/Spanish cuisine, seafood focus',
    hours: 'Daily 12pm–midnight',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800',
  },
  {
    name: 'STK Rooftop Steakhouse & Bar',
    venue: 'The Gantry Hotel',
    address: '40 Celebration Avenue, Stratford, London E20 1DB',
    phone: '020 3475 8126',
    floor: '18th floor',
    views: 'East London skyline, Olympic Park',
    decor: 'Two outdoor terraces, sleek steakhouse interior',
    signature: 'Premium steaks, raw bar, lobster, caviar, classic cocktails',
    extras: 'Resident DJs',
    hours: 'Mon–Fri 3pm–11pm, Sat 12pm–12am, Sun 3pm–11pm',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
  },
  {
    name: 'Madison',
    venue: 'One New Change',
    address: 'One New Change, City of London, London EC4M 9AF',
    phone: '020 8305 3088',
    floor: 'Rooftop',
    views: "St Paul's Cathedral (Jean Nouvel architecture)",
    decor: 'Murano glass, two terraces',
    signature: 'Pornstar Martini, Deluxe Pornstar Martini with 24k edible gold, South American menu',
    extras: 'Tapas and cocktail bar',
    hours: 'Daily 12pm–1am',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=800',
  },
  {
    name: 'Fenchurch Restaurant',
    venue: 'Sky Garden',
    address: '1 Sky Garden Walk, Fenchurch, London EC3M 8AF',
    phone: '033 3772 0020',
    floor: '37th floor',
    views: 'Panoramic 360° London skyline',
    decor: "London's highest public garden, floor-to-ceiling glass",
    signature: 'Contemporary British tasting menu',
    extras: 'Sky Garden bar and terrace access',
    hours: 'Open daily (varies by season)',
    image: 'https://images.unsplash.com/photo-1538331261795-7e1830dfb8f8?q=80&w=800',
  },
  {
    name: 'The Rooftop at Trafalgar St. James',
    venue: 'Trafalgar St. James Hotel',
    address: '2 Spring Gardens, Trafalgar Square, London SW1A 2TS',
    phone: '020 7870 2904',
    floor: 'Rooftop',
    views: 'Trafalgar Square, Nelson\'s Column, London skyline',
    decor: 'South-facing alfresco bar, 14-seat glass boardroom',
    signature: 'Skyline cocktail (pink grapefruit), Teatime cocktail (bourbon & Champagne)',
    extras: 'Asian-style bar bites, boardroom hire',
    hours: '12pm–11pm (until 2am selected nights)',
    image: 'https://images.unsplash.com/photo-1560624051-eb19e5f8f8e5?q=80&w=800',
  },
]

export default function RooftopDining() {
  return (
    <>
      <SEO title="Rooftop Restaurants London" description="Discover the best rooftop restaurants in London. From sky-high views to al fresco terraces, find the perfect rooftop dining experience with SquareMeal." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4"><Sun className="w-4 h-4" /> Rooftop Dining</span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Dining Above the City</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">Discover London and the UK's best rooftop restaurants and sky-high dining experiences with breathtaking views — curated by SquareMeal.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">Best Rooftop Restaurants in London</h2>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-8">
              There's something magical about dining above the city skyline. Whether you're looking for a romantic sunset dinner, a lively al fresco brunch, or a sophisticated corporate event space, London's rooftop restaurants offer unforgettable experiences. SquareMeal's curated selection features the very best sky-high dining destinations — from the Champagne-soaked 10th floor of Radio Rooftop to the lush 37th-floor Sky Garden.
            </p>
            <div className="flex gap-4">
              <Link to="/discover"><Button variant="primary" size="md">Find Rooftop Dining</Button></Link>
              <Link to="/private-dining"><Button variant="outline" size="md">Private Dining</Button></Link>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {rooftopHighlights.map((spot, i) => (
              <motion.div key={spot.name} variants={staggerItem} className="relative bg-rich-black group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-champagne-gold/5 rounded-bl-full" />
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-champagne-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-xl text-soft-white mb-1">{spot.name}</h3>
                      <p className="font-label-sm text-[10px] uppercase tracking-widest text-champagne-gold/60 mb-3">{spot.location}</p>
                      <p className="font-body text-sm text-white/60 mb-4">{spot.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-white/40">
                        {spot.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {spot.phone}</span>}
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {spot.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-3xl text-rich-black">All SquareMeal Rooftop Venues</h2>
              <Link to="/discover" className="font-label-sm text-xs uppercase tracking-widest text-rich-black border-b border-rich-black pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooftopRestaurants.map((venue, i) => (
                <motion.div key={venue.name} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-soft-white border border-charcoal/5 hover:border-champagne-gold/30 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img loading="lazy" src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 bg-rich-black/80 text-champagne-gold font-label-sm text-[10px] uppercase tracking-widest px-3 py-1">{venue.floor}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-display text-xl text-rich-black">{venue.name}</h3>
                    </div>
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-champagne-gold mb-1">{venue.venue}</p>
                    <p className="font-body text-xs text-on-surface-variant/60 mb-3 flex items-start gap-1">
                      <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span>{venue.address}</span>
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-body text-on-surface-variant mb-4">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-champagne-gold" /> {venue.views}</span>
                      <span className="flex items-center gap-1"><GlassWater className="w-3 h-3 text-champagne-gold" /> {venue.signature}</span>
                      <span className="flex items-center gap-1 col-span-2"><Clock className="w-3 h-3 text-champagne-gold" /> {venue.hours}</span>
                      {venue.extras && (
                        <span className="flex items-center gap-1 col-span-2"><Music className="w-3 h-3 text-champagne-gold" /> {venue.extras}</span>
                      )}
                      {venue.phone && (
                        <span className="flex items-center gap-1 col-span-2"><Phone className="w-3 h-3 text-champagne-gold" /> {venue.phone}</span>
                      )}
                    </div>
                    <div className="pt-3 border-t border-charcoal/5">
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">{venue.decor}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-3xl text-rich-black">More Exceptional Dining</h2>
              <Link to="/discover" className="font-label-sm text-xs uppercase tracking-widest text-rich-black border-b border-rich-black pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {restaurants.slice(0, 3).map((r, i) => (
                <RestaurantCard key={r.id} restaurant={r} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
