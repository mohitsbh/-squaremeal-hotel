import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Search, MapPin, Star, ArrowRight, Gift, Award } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'

const featuredRestaurants = [
  {
    name: 'Roti King Spitalfields',
    location: 'Spitalfields',
    cuisine: 'Malaysian',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800',
    slug: '/restaurants',
  },
  {
    name: "The King's Head Inn Cotswolds",
    location: 'Bledlington',
    cuisine: 'British',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    slug: '/restaurants',
  },
  {
    name: 'The Birdcage',
    location: 'Hackney',
    cuisine: 'Modern European',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    slug: '/restaurants',
  },
  {
    name: 'Paladar',
    location: 'Elephant and Castle',
    cuisine: 'Latin American',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    slug: '/restaurants',
  },
]

const rewards = [
  {
    name: 'The Grafton',
    location: 'Kentish Town, London NW5 3LG',
    points: 100,
    offer: 'For all diners any day, every time',
    cuisine: ['British', 'Burgers', 'Gastropub'],
    price: '£30-£49',
  },
  {
    name: 'Michael Caines at The Stafford London',
    location: "St James's, London SW1A 1NJ",
    points: 100,
    offer: 'For all diners any day, every time',
    cuisine: ['Modern European', 'Afternoon tea'],
    price: 'Over £80',
  },
  {
    name: 'Hawksmoor Manchester',
    location: 'Greater Manchester M3 3WB',
    points: 100,
    offer: 'For all diners any day, every time',
    cuisine: ['British', 'Steak'],
    price: '£50-£79',
  },
  {
    name: 'Drummond Villa',
    location: 'Camden Town, London NW1 2HN',
    points: 15,
    pointsLabel: 'for every £1 spent',
    offer: 'for lunchtime diners',
    cuisine: ['Indian'],
    price: 'Under £30',
  },
]

const collections = [
  { title: "London's Top 100 2026", count: 100, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', slug: '/restaurants/best' },
  { title: "The UK's Top 100 2026", count: 100, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800', slug: '/restaurants/best' },
  { title: 'Cool and trendy restaurants', count: 50, image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800', slug: '/restaurants/london' },
  { title: 'Best Outside and Alfresco', count: 60, image: 'https://images.unsplash.com/photo-1559521783-1d157958344c?w=800', slug: '/restaurants/london' },
  { title: 'Hottest new openings', count: 30, image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800', slug: '/restaurants/london' },
  { title: 'Best pre & post theatre restaurants', count: 40, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800', slug: '/restaurants/london' },
]

const newsItems = [
  { title: 'The best Sunday roasts in London for 2026', excerpt: 'Our expert editors have rounded up the finest Sunday lunches across the capital.', date: '12 Jun 2026', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800', slug: '/guides' },
  { title: 'Michelin stars 2026: full list of new additions', excerpt: 'The Michelin Guide 2026 has been announced with several new star recipients across the UK.', date: '10 Jun 2026', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800', slug: '/guides' },
  { title: 'Top 10 outdoor dining spots for summer', excerpt: 'Make the most of the sunshine at these incredible al fresco restaurants and rooftops.', date: '8 Jun 2026', image: 'https://images.unsplash.com/photo-1559521783-1d157958344c?w=800', slug: '/guides' },
]

const occasions = [
  { title: 'Romantic dinners', icon: '💑', slug: '/restaurants/best' },
  { title: 'Business lunches', icon: '💼', slug: '/restaurants/london' },
  { title: 'Family-friendly', icon: '👨‍👩‍👧‍👦', slug: '/restaurants/london' },
  { title: 'Birthday celebrations', icon: '🎂', slug: '/private-dining' },
  { title: 'Private dining', icon: '🍽️', slug: '/private-dining' },
  { title: 'Vegan & vegetarian', icon: '🥬', slug: '/restaurants/best' },
]

export default function Restaurants() {
  return (
    <>
      <SEO title="Restaurants, Pubs & Bars" description="Search the UK's largest number of bookable restaurants, pubs and bars. Discover curated collections, restaurant rewards, and the latest foodie news." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <section className="relative py-28 md:py-40 overflow-hidden bg-rich-black">
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 20% 40%, #C9A86A 0%, transparent 50%), radial-gradient(circle at 80% 60%, #C9A86A 0%, transparent 40%)' }} />
          <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-soft-white mb-6">Find the best local restaurants</h1>
            <p className="font-body text-lg md:text-xl text-soft-white/60 max-w-2xl mx-auto mb-10">Search the UK's largest number of bookable restaurants, pubs and bars</p>
            <div className="max-w-xl mx-auto relative">
              <input type="text" placeholder="Search by restaurant, cuisine, or location..." className="w-full bg-soft-white/10 border border-soft-white/20 text-soft-white font-body px-5 py-4 pr-12 placeholder:text-soft-white/40 focus:outline-none focus:border-champagne-gold transition-colors" />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-soft-white/40" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-soft-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-4"><Star className="w-3 h-3" /> In the spotlight</div>
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">Featured restaurants</h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">Our editors pick the finest dining experiences worth travelling for.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((r) => (
                <motion.div key={r.name} variants={staggerItem} className="group cursor-pointer">
                  <Link to={r.slug} className="block">
                    <div className="relative overflow-hidden aspect-[4/3] mb-4">
                      <img loading="lazy" src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 gradient-overlay" />
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-rich-black/70 text-champagne-gold px-2 py-1 text-xs font-body"><Star className="w-3 h-3 fill-champagne-gold" />{r.rating}</div>
                    </div>
                    <h3 className="font-display text-lg text-rich-black mb-1">{r.name}</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-sm font-body"><MapPin className="w-3.5 h-3.5" />{r.location}</div>
                    <span className="text-champagne-gold text-xs font-body uppercase tracking-wider mt-1 block">{r.cuisine}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-ivory">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-4"><Gift className="w-3 h-3" /> Restaurant Rewards</div>
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">Earn points every time you dine</h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">A generous restaurant loyalty program that rewards you every time you dine out.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rewards.map((restaurant) => (
                <motion.div key={restaurant.name} variants={staggerItem} className="border border-charcoal/10 bg-soft-white p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl text-rich-black">{restaurant.name}</h3>
                      <p className="font-body text-sm text-on-surface-variant mt-1">{restaurant.location}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-br from-yellow-600/20 to-yellow-700/10 px-3 py-1.5">
                      <span className="text-champagne-gold text-lg font-bold font-display">{restaurant.points}</span>
                      <div className="flex flex-col text-xs leading-tight">
                        <span className="text-champagne-gold/80 font-semibold">Points</span>
                        {restaurant.pointsLabel && <span className="text-champagne-gold/60">{restaurant.pointsLabel}</span>}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant font-body">{restaurant.offer}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {restaurant.cuisine.map((tag) => (
                      <span key={tag} className="text-on-surface-variant border border-charcoal/10 rounded-full px-3 py-1 text-xs font-body">{tag}</span>
                    ))}
                    <span className="text-champagne-gold ml-auto text-sm font-medium font-body">{restaurant.price}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
              <Link to="/rewards" className="inline-flex items-center gap-2 bg-rich-black text-soft-white font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-charcoal transition-colors">View all rewards <ArrowRight className="w-4 h-4" /></Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-soft-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-4"><Award className="w-3 h-3" /> Collections</div>
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">Our top recommended restaurants</h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">Curated lists to help you discover the perfect dining experience.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((c) => (
                <motion.div key={c.title} variants={staggerItem} className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
                  <Link to={c.slug} className="block h-full">
                    <img loading="lazy" src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 gradient-overlay-full" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl text-soft-white mb-1">{c.title}</h3>
                      <span className="text-champagne-gold text-sm font-body">{c.count} restaurants</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-ivory">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">Latest news for foodies</h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">Stay up to date with the latest restaurant openings, reviews, and guides.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <motion.div key={item.title} variants={staggerItem} className="group cursor-pointer bg-soft-white border border-charcoal/10">
                  <Link to={item.slug} className="block">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <span className="text-champagne-gold text-xs font-body uppercase tracking-wider">{item.date}</span>
                      <h3 className="font-display text-lg text-rich-black mt-2 mb-2">{item.title}</h3>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
              <Link to="/guides" className="inline-flex items-center gap-2 border border-rich-black text-rich-black font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-rich-black hover:text-soft-white transition-colors">View all news <ArrowRight className="w-4 h-4" /></Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-soft-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">Best restaurants for every occasion</h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">Whatever the occasion, find the perfect restaurant to match.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {occasions.map((o) => (
                <motion.div key={o.title} variants={staggerItem}>
                  <Link to={o.slug} className="flex flex-col items-center gap-3 p-6 border border-charcoal/10 bg-ivory hover:bg-champagne-gold/10 hover:border-champagne-gold/30 transition-colors text-center group">
                    <span className="text-3xl">{o.icon}</span>
                    <span className="font-body text-sm text-rich-black group-hover:text-champagne-gold transition-colors">{o.title}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-rich-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 50% 50%, #C9A86A 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 text-center">
            <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-6"><Award className="w-3 h-3" /> Latest competition</div>
            <h2 className="font-display text-3xl md:text-4xl text-soft-white mb-4">Win a luxury dining experience</h2>
            <p className="font-body text-lg text-soft-white/60 max-w-2xl mx-auto mb-10">Enter our latest competition for your chance to win a three-course meal with wine pairings at one of London's finest restaurants.</p>
              <Link to="/offers" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-champagne-gold/90 transition-colors">View offers <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>
      </motion.div>
    </>
  )
}
