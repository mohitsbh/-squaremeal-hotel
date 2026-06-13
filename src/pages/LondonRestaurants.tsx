import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations'
import { Link } from 'react-router-dom'
import { MapPin, Star, Utensils, ArrowRight, Search } from 'lucide-react'

const londonAreas = [
  { name: 'The City and East London', slug: 'the-city-and-east-london' },
  { name: 'West End', slug: 'west-end' },
  { name: "Bloomsbury and King's Cross", slug: 'bloomsbury-and-kings-cross' },
  { name: 'South West central London', slug: 'south-west-central-london' },
  { name: "Fulham + Earl's Court", slug: 'fulham-earls-court' },
  { name: 'West central London', slug: 'west-central-london' },
]

const cuisines = [
  'Indian', 'Italian', 'Chinese', 'Japanese', 'Gastropub',
  'Tapas', 'British', 'French', 'Haute Cuisine', 'Modern European',
]

const bestLists = [
  { name: 'Best restaurants for brunch', slug: 'best-restaurants-for-brunch' },
  { name: "London's Top 100 Restaurants", slug: 'londons-top-100-restaurants' },
  { name: 'Hottest New Restaurants', slug: 'hottest-new-restaurants' },
  { name: 'Cool and trendy restaurants', slug: 'cool-and-trendy-restaurants' },
]

export default function LondonRestaurants() {
  return (
    <>
      <SEO
        title="Restaurants in London | SquareMeal"
        description="Discover the best restaurants in London. SquareMeal has been covering the London restaurant scene for over 30 years. Browse by area, cuisine or browse our expert curated lists."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4">
                <Utensils className="w-4 h-4" /> London Dining
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Restaurants in London</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">
                SquareMeal has been covering the London restaurant scene for over 30 years. From hidden gems to Michelin-starred destinations, our expert team brings you the definitive guide to dining in the capital.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <MapPin className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">London areas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {londonAreas.map((area) => (
                <Link key={area.slug} to="/discover">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer"
                  >
                    <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{area.name}</h3>
                    <div className="flex items-center gap-1 text-champagne-gold">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest">Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <Star className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">London restaurants by cuisine</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cuisines.map((cuisine) => (
                <Link key={cuisine} to="/discover">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-soft-white border border-charcoal/5 p-6 text-center hover:border-champagne-gold/30 transition-all group cursor-pointer"
                  >
                    <h3 className="font-display text-base text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{cuisine}</h3>
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-champagne-gold">Explore</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <Search className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">SquareMeal Best Lists</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestLists.map((list) => (
                <Link key={list.slug} to="/discover">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer flex items-center justify-between"
                  >
                    <h3 className="font-display text-lg text-rich-black group-hover:text-champagne-gold transition-colors">{list.name}</h3>
                    <ArrowRight className="w-5 h-5 text-champagne-gold group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
