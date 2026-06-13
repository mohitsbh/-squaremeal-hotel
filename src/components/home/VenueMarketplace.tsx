import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { venues } from '@/data/restaurants'
import { staggerContainer, staggerItem } from '@/animations'
import { SectionHeader } from '@/components/ui/section-header'

export function VenueMarketplace() {
  return (
    <section className="bg-rich-black py-24 md:py-40 px-5 md:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          label="The Marketplace"
          title="Unforgettable Venues"
          description="From grand weddings in historic manors to discrete corporate dining in the heart of the city."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              variants={staggerItem}
              className="group border-b border-charcoal/30 pb-10 transition-all hover:border-champagne-gold cursor-pointer"
            >
              <Link to={`/venue/${venue.slug}`} className="block">
                <div className="h-[300px] md:h-[400px] overflow-hidden mb-8">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${venue.image})` }}
                  />
                </div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-champagne-gold mb-2 block">
                  {venue.type === 'wedding'
                    ? 'Weddings'
                    : venue.type === 'corporate'
                      ? 'Corporate Events'
                      : 'Private Dining'}
                </span>
                <h3 className="font-display text-2xl text-soft-white mb-2">{venue.name}</h3>
                <p className="font-body text-sm text-surface-variant/60 mb-1">{venue.location}</p>
                <p className="font-body text-sm text-surface-variant/60 mb-6 leading-relaxed">
                  {venue.description}
                </p>
                <span className="font-label-sm text-xs uppercase tracking-widest text-champagne-gold border-b border-transparent hover:border-champagne-gold transition-all pb-1">
                  {venue.type === 'corporate' ? 'Book Consultation' : 'Explore Collection'}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
