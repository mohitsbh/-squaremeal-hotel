import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Search, MapPin, Navigation, ArrowRight } from 'lucide-react'

const topSearchAreas = [
  { name: 'London', slug: 'london', count: '12,500+' },
  { name: 'Manchester', slug: 'manchester', count: '2,100+' },
  { name: 'Edinburgh', slug: 'edinburgh', count: '1,800+' },
  { name: 'Bristol', slug: 'bristol', count: '1,400+' },
  { name: 'Soho', slug: 'soho', count: '950+' },
  { name: 'Knightsbridge', slug: 'knightsbridge', count: '720+' },
  { name: 'The City', slug: 'the-city', count: '680+' },
  { name: 'Fitzrovia', slug: 'fitzrovia', count: '540+' },
]

const londonAreas = [
  'The City and East London',
  'West End',
  'Bloomsbury and King\u2019s Cross',
  'South West central London',
  'Fulham + Earl\u2019s Court',
  'West central London',
]

const cuisineTypes = [
  'Indian', 'Italian', 'Chinese', 'Japanese', 'Gastropub',
  'Tapas', 'British', 'French', 'Haute Cuisine', 'Modern European',
]

const bestLists = [
  { title: 'The Best Sunday Roasts in London', slug: 'best-sunday-roasts-london' },
  { title: 'The Best Bottomless Brunch', slug: 'best-bottomless-brunch' },
  { title: 'The Best Afternoon Tea', slug: 'best-afternoon-tea' },
  { title: 'The Best Rooftop Restaurants', slug: 'best-rooftop-restaurants' },
  { title: 'The Best Private Dining Rooms', slug: 'best-private-dining-rooms' },
  { title: 'The Best Steakhouses in London', slug: 'best-steakhouses-london' },
]

export default function RestaurantsNearMe() {
  return (
    <>
      <SEO title="Restaurants Near Me" description="Find the best restaurants near you. Use SquareMeal to discover places to eat in your local area, search by cuisine, location, or browse our curated best lists." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative min-h-[70vh] overflow-hidden bg-rich-black flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-rich-black/70 to-rich-black" />
          <div className="relative w-full max-w-[1440px] mx-auto px-5 md:px-20 py-20 md:py-32">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4">
                <MapPin className="w-4 h-4" /> Find Your Table
              </span>
              <h1 className="font-display text-4xl md:text-7xl text-soft-white mb-6 leading-tight">
                Restaurants Near Me
              </h1>
              <p className="font-body text-lg text-white/60 max-w-2xl mb-10">
                Simply click the &lsquo;find restaurants near me&rsquo; button and we will automatically show you the nearest restaurants and places to eat in your immediate neighbourhood, wherever you are in the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Enter your location or postcode..."
                    className="w-full bg-white/10 border border-white/20 text-soft-white font-body placeholder:text-white/30 pl-12 pr-4 py-4 focus:outline-none focus:border-champagne-gold transition-colors"
                  />
                </div>
                <button className="bg-champagne-gold text-rich-black font-label-sm text-sm uppercase tracking-widest px-8 py-4 flex items-center gap-3 hover:bg-champagne-gold/90 transition-colors">
                  <Search className="w-4 h-4" />
                  Find restaurants
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-3">Top Search Areas</h2>
            <p className="font-body text-base text-on-surface-variant mb-10">Discover the most popular dining destinations across the UK.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topSearchAreas.map((area) => (
                <Link key={area.slug} to={`/restaurants-${area.slug}`}>
                  <motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative bg-rich-black p-6 overflow-hidden cursor-pointer border border-white/10 hover:border-champagne-gold/40 transition-all">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative">
                      <h3 className="font-display text-lg text-soft-white mb-1 group-hover:text-champagne-gold transition-colors">{area.name}</h3>
                      <p className="font-body text-xs text-white/40">{area.count} restaurants</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-3">London Areas</h2>
            <p className="font-body text-base text-on-surface-variant mb-10">Explore restaurants across London&rsquo;s finest neighbourhoods.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {londonAreas.map((area) => (
                <Link key={area} to={`/restaurants-london/${area.toLowerCase().replace(/[\s+]+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                  <motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center justify-between bg-soft-white border border-charcoal/5 p-5 hover:border-champagne-gold/30 hover:bg-rich-black group transition-all">
                    <span className="font-body text-sm text-rich-black group-hover:text-soft-white transition-colors">{area}</span>
                    <ArrowRight className="w-4 h-4 text-champagne-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-3">London Restaurants by Cuisine</h2>
            <p className="font-body text-base text-on-surface-variant mb-10">Find exactly what you&rsquo;re craving in the capital.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {cuisineTypes.map((cuisine) => (
                <Link key={cuisine} to={`/restaurants-london/${cuisine.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                  <motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-ivory border border-champagne-gold/10 p-5 text-center hover:bg-rich-black hover:border-champagne-gold/40 group transition-all">
                    <h3 className="font-label-sm text-xs uppercase tracking-widest text-rich-black group-hover:text-champagne-gold transition-colors">{cuisine}</h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-3">SquareMeal Best Lists</h2>
                <p className="font-body text-base text-on-surface-variant">Curated collections of London&rsquo;s finest dining experiences.</p>
              </div>
              <Link to="/best-lists" className="hidden md:flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] hover:text-champagne-gold/70 transition-colors">
                View all lists <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {bestLists.map((list) => (
                <Link key={list.slug} to={`/${list.slug}`}>
                  <motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative overflow-hidden bg-rich-black p-8 border border-white/10 hover:border-champagne-gold/40 transition-all min-h-[200px] flex items-end">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative">
                      <h3 className="font-display text-lg text-soft-white group-hover:text-champagne-gold transition-colors">{list.title}</h3>
                      <span className="inline-flex items-center gap-2 text-xs text-white/40 font-body mt-2 group-hover:text-champagne-gold/60 transition-colors">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            <Link to="/best-lists" className="md:hidden flex items-center justify-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] mt-6 hover:text-champagne-gold/70 transition-colors">
              View all lists <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative overflow-hidden border border-champagne-gold/20 bg-rich-black p-10 md:p-16 text-center">
            <Navigation className="w-10 h-10 text-champagne-gold mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl text-soft-white mb-4">Find Restaurants Wherever You Are</h3>
            <p className="font-body text-sm text-white/60 max-w-3xl mx-auto leading-relaxed">
              Simply click the &lsquo;find restaurants near me&rsquo; button and we will automatically show you the nearest restaurants and places to eat in your immediate neighbourhood, wherever you are in the UK.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
