import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Zap, Clock } from 'lucide-react'
import { Restaurant } from '@/types'
import { cn } from '@/lib/utils'

interface RestaurantCardProps {
  restaurant: Restaurant
  index?: number
}

export function RestaurantCard({ restaurant, index = 0 }: RestaurantCardProps) {
  const availabilityConfig = {
    instant: { icon: Zap, label: 'Instant Booking', color: 'text-secondary' },
    request: {
      icon: Clock,
      label: 'Request Basis',
      color: 'text-on-surface-variant',
    },
    waitlist: {
      icon: Clock,
      label: 'Join Waitlist',
      color: 'text-champagne-gold',
    },
  }

  const avail = availabilityConfig[restaurant.availability]
  const AvailIcon = avail.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/restaurant/${restaurant.slug}`}
        className="group block bg-soft-white overflow-hidden border border-charcoal/5 hover:border-champagne-gold/20 transition-all duration-500"
      >
        <div className="relative h-72 md:h-80 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${restaurant.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent" />

          <div className="absolute top-4 left-4 flex gap-2">
            {restaurant.badges.slice(0, 2).map((badge) => (
              <span
                key={badge.label}
                className={cn(
                  'px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest',
                  badge.variant === 'award' || badge.variant === 'featured'
                    ? 'bg-soft-white text-rich-black'
                    : badge.variant === 'rare'
                      ? 'bg-rich-black text-soft-white border border-charcoal'
                      : 'bg-champagne-gold/10 text-champagne-gold border border-champagne-gold/20'
                )}
              >
                {badge.label}
              </span>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="text-soft-white">
              <h3 className="font-display text-xl md:text-2xl">{restaurant.name}</h3>
              <p className="font-body text-xs uppercase tracking-wider text-soft-white/70 mt-1">
                {restaurant.location}
              </p>
            </div>
            <span className="text-champagne-gold font-bold text-sm">{restaurant.priceRange}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1">
              <AvailIcon className={cn('w-3.5 h-3.5', avail.color)} />
              <span className={cn('font-label-sm text-[10px] uppercase', avail.color)}>
                {avail.label}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-champagne-gold text-champagne-gold" />
              <span className="font-body text-xs text-on-surface-variant">
                {restaurant.rating}
              </span>
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">
            {restaurant.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="font-body text-[11px] text-on-surface-variant/60 uppercase tracking-wider">
              {restaurant.cuisine}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
