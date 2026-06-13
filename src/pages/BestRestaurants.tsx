import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Star, Award, Sparkles, Sun, Flame, Music, Heart, ArrowRight, MapPin } from 'lucide-react'

const hotLists = [
  { name: "London's Hot 100", slug: 'londons-hot-100', icon: Flame },
  { name: 'SquareMeal Gold Awards', slug: 'squaremeal-gold-awards', icon: Award },
  { name: 'Best Outside and Alfresco Restaurants', slug: 'best-alfresco-restaurants', icon: Sun },
  { name: 'Hottest New Openings', slug: 'hottest-new-openings', icon: Sparkles },
  { name: "UK's Top 100 Restaurants", slug: 'uks-top-100-restaurants', icon: Award },
  { name: 'Cool and Trendy Restaurants', slug: 'cool-and-trendy-restaurants', icon: Music },
  { name: 'Romantic Restaurants', slug: 'romantic-restaurants', icon: Heart },
  { name: 'Cheap Eats', slug: 'cheap-eats', icon: Star },
  { name: 'Private Dining', slug: 'private-dining', icon: Award },
  { name: 'Coming Soon', slug: 'coming-soon-restaurants', icon: Sparkles },
]

const bestFor = [
  { name: 'Group Dining', slug: 'group-dining', icon: Star },
  { name: 'Afternoon Tea', slug: 'afternoon-tea', icon: Award },
  { name: 'Pre and Post-Theatre', slug: 'pre-and-post-theatre', icon: Music },
  { name: 'Business Restaurants', slug: 'business-restaurants', icon: Award },
  { name: 'Romantic Restaurants', slug: 'romantic-restaurants', icon: Heart },
]

const centralLondon = [
  { name: 'Soho', slug: 'soho' },
  { name: 'Knightsbridge', slug: 'knightsbridge' },
  { name: 'The City', slug: 'the-city' },
  { name: 'Fitzrovia', slug: 'fitzrovia' },
  { name: 'Notting Hill', slug: 'notting-hill' },
]

const neighbourhoods = [
  { name: 'Battersea', slug: 'battersea' },
  { name: 'Brixton', slug: 'brixton' },
  { name: 'Chiswick', slug: 'chiswick' },
  { name: 'Camden', slug: 'camden' },
  { name: 'Islington', slug: 'islington' },
  { name: 'South London', slug: 'south-london' },
  { name: 'North London', slug: 'north-london' },
  { name: 'West London', slug: 'west-london' },
]

const ukDestinations = [
  { name: 'Birmingham', slug: 'birmingham' },
  { name: 'Manchester', slug: 'manchester' },
  { name: 'Liverpool', slug: 'liverpool' },
  { name: 'Leeds', slug: 'leeds' },
  { name: 'Brighton', slug: 'brighton' },
  { name: 'Bristol', slug: 'bristol' },
  { name: 'Edinburgh', slug: 'edinburgh' },
  { name: 'Glasgow', slug: 'glasgow' },
  { name: 'Oxford', slug: 'oxford' },
  { name: 'Cambridge', slug: 'cambridge' },
]

const criteria = [
  {
    title: 'Food',
    description: 'The quality, creativity and consistency of the cooking. We look for skilled execution, well-sourced ingredients and dishes that deliver on flavour.',
    icon: Star,
  },
  {
    title: 'Service',
    description: 'Attentive, knowledgeable and warm hospitality. Great service elevates a meal from good to unforgettable.',
    icon: Heart,
  },
  {
    title: 'Atmosphere',
    description: 'The ambience, design and energy of a restaurant. Whether buzzing or intimate, the setting should match the dining experience.',
    icon: Music,
  },
  {
    title: 'Photography',
    description: 'A restaurant\'s visual identity matters. Great photography gives a true sense of the space, the food and the overall experience.',
    icon: Award,
  },
]

export default function BestRestaurants() {
  return (
    <>
      <SEO
        title="Best Restaurants | SquareMeal"
        description="SquareMeal's ultimate guide to the best restaurants. Discover expert-curated lists, top-rated dining in London and across the UK."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4">
                <Award className="w-4 h-4" /> Best Restaurants
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">
                SquareMeal's ultimate guide to the best restaurants
              </h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">
                SquareMeal reviews thousands of restaurants to bring you the definitive guide to the best dining experiences.
                From hidden gems to Michelin-starred destinations, our expert team curates the finest restaurants across the UK.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <Flame className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">Hot Lists</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {hotLists.map((list) => {
                const Icon = list.icon
                return (
                  <motion.div key={list.slug} variants={staggerItem}>
                    <Link to={`/discover`}>
                      <div className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer">
                        <Icon className="w-8 h-8 text-champagne-gold mb-4" />
                        <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{list.name}</h3>
                        <div className="flex items-center gap-1 text-champagne-gold">
                          <span className="font-label-sm text-[10px] uppercase tracking-widest">Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">Best Restaurants for...</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {bestFor.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.slug} variants={staggerItem}>
                    <Link to={`/discover`}>
                      <div className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer">
                        <Icon className="w-8 h-8 text-champagne-gold mb-4" />
                        <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{item.name}</h3>
                        <div className="flex items-center gap-1 text-champagne-gold">
                          <span className="font-label-sm text-[10px] uppercase tracking-widest">Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <Star className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">Best Restaurants in Central London</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {centralLondon.map((area) => (
                <motion.div key={area.slug} variants={staggerItem}>
                  <Link to={`/discover`}>
                    <div className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer">
                      <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{area.name}</h3>
                      <div className="flex items-center gap-1 text-champagne-gold">
                        <span className="font-label-sm text-[10px] uppercase tracking-widest">Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <MapPin className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">Best Restaurants in London's Neighbourhoods</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {neighbourhoods.map((area) => (
                <motion.div key={area.slug} variants={staggerItem}>
                  <Link to={`/discover`}>
                    <div className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer">
                      <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{area.name}</h3>
                      <div className="flex items-center gap-1 text-champagne-gold">
                        <span className="font-label-sm text-[10px] uppercase tracking-widest">Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <Award className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">The best restaurants in the UK</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {ukDestinations.map((dest) => (
                <motion.div key={dest.slug} variants={staggerItem}>
                  <Link to={`/discover`}>
                    <div className="bg-soft-white border border-charcoal/5 p-6 hover:border-champagne-gold/30 transition-all group cursor-pointer">
                      <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">{dest.name}</h3>
                      <div className="flex items-center gap-1 text-champagne-gold">
                        <span className="font-label-sm text-[10px] uppercase tracking-widest">Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-rich-black p-10 md:p-16">
              <div className="flex items-center gap-3 mb-10">
                <Award className="w-6 h-6 text-champagne-gold" />
                <h2 className="font-display text-3xl text-soft-white">What we look for in a best restaurant</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {criteria.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="border-l-2 border-champagne-gold/30 pl-6">
                      <Icon className="w-6 h-6 text-champagne-gold mb-3" />
                      <h3 className="font-display text-xl text-soft-white mb-2">{item.title}</h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
