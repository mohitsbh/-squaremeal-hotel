import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/animations'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/ui/section-header'

const venues = [
  {
    name: 'Westminster Boating Base',
    location: 'Westminster',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600',
  },
  {
    name: 'Strand Palace Hotel',
    location: 'Covent Garden',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
  },
  {
    name: 'Bokan at Novotel Canary Wharf',
    location: 'Canary Wharf',
    image: 'https://images.unsplash.com/photo-1596178065887-1192f5b6b6b4?w=600',
  },
  {
    name: 'The Cadogan, A Belmond Hotel',
    location: 'Chelsea',
    image: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=600',
  },
]

export function Spotlight() {
  return (
    <section className="py-20 px-5 md:px-20 max-w-[1440px] mx-auto">
      <SectionHeader
        label="Featured"
        title="In the Spotlight"
        description="Exceptional venues handpicked for unforgettable experiences."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {venues.map((venue) => (
          <motion.div
            key={venue.name}
            variants={staggerItem}
            className="group relative h-[320px] overflow-hidden bg-rich-black cursor-pointer"
          >
            <Link to="/discover" className="block h-full">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${venue.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg md:text-xl text-soft-white mb-1">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-champagne-gold" />
                  <span className="font-body text-sm text-soft-white/60">
                    {venue.location}
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
