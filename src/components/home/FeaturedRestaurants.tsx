import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { restaurants } from '@/data/restaurants'
import { staggerContainer, staggerItem } from '@/animations'
import { SectionHeader } from '@/components/ui/section-header'
import { Badge } from '@/components/ui/badge'

const featured = restaurants.filter((r) => r.badges.some((b) => b.variant === 'award'))

export function FeaturedRestaurants() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-20 max-w-[1440px] mx-auto">
      <SectionHeader
        label="Selection"
        title="Michelin-Starred Excellence"
        description="The pinnacle of culinary achievement, hand-selected for the discerning palate."
        action={{ label: 'View All Restaurants', href: '/discover' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {featured.map((restaurant, i) => (
          <motion.div
            key={restaurant.id}
            variants={staggerItem}
            className="group relative h-[500px] md:h-[600px] overflow-hidden bg-rich-black cursor-pointer"
          >
            <Link to={`/restaurant/${restaurant.slug}`} className="block h-full">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80"
                style={{ backgroundImage: `url(${restaurant.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/20 to-transparent opacity-70" />

              <div className="absolute top-5 left-5 flex gap-2">
                {restaurant.michelinStars && (
                  <Badge variant="award" label={`★ ${restaurant.michelinStars} Michelin`} />
                )}
                {restaurant.badges
                  .filter((b) => b.variant === 'rare')
                  .map((b) => (
                    <Badge key={b.label} variant="rare" label={b.label} />
                  ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: restaurant.michelinStars || 1 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-champagne-gold text-champagne-gold"
                    />
                  ))}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-soft-white mb-1">
                  {restaurant.name}
                </h3>
                <p className="font-body text-sm text-surface-variant/70 mb-6">
                  {restaurant.location}
                </p>
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-block bg-soft-white text-rich-black px-8 py-4 font-label-sm uppercase tracking-widest text-xs">
                    View Experience
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
