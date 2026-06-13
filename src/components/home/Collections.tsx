import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { collections } from '@/data/restaurants'
import { staggerContainer, staggerItem } from '@/animations'

export function Collections() {
  return (
    <section className="bg-surface-container py-24 md:py-32 px-5 md:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-rich-black">
            Trending Collections
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {collections.slice(0, 6).map((collection) => (
            <motion.div key={collection.id} variants={staggerItem}>
              <Link
                to={`/discover?collection=${collection.slug}`}
                className="group text-center block"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-5 border-2 border-transparent group-hover:border-champagne-gold transition-all duration-500 p-2">
                  <div
                    className="w-full h-full rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${collection.image})` }}
                  />
                </div>
                <h3 className="font-display text-base md:text-lg text-rich-black group-hover:text-champagne-gold transition-colors">
                  {collection.name}
                </h3>
                <p className="font-body text-xs text-on-surface-variant/60 mt-1">
                  {collection.restaurantCount} venues
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
