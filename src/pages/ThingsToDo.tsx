import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight, Music, Utensils, Wine, Tent } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'

const categories = [
  {
    icon: Utensils,
    title: 'Food Festivals',
    description: 'Dorset Seafood Festival 2026, Foodies Festival 2026',
  },
  {
    icon: Tent,
    title: 'Supper Clubs',
    description: 'Anniversary Supper Club, Chef\'s table experiences',
  },
  {
    icon: Wine,
    title: 'Bottomless Brunches',
    description: 'Weekend brunch deals across the UK',
  },
  {
    icon: Calendar,
    title: 'Pop-up Dining',
    description: 'Limited-time restaurant experiences',
  },
  {
    icon: Music,
    title: 'Wine Tastings',
    description: 'Guided wine and spirit tastings',
  },
  {
    icon: Tent,
    title: 'Live Music Dining',
    description: 'Restaurants with live entertainment',
  },
]

const featuredEvents = [
  {
    date: '19–21 Jun 2026',
    venue: 'Weymouth Harbour',
    price: 'From £25',
    title: 'Dorset Seafood Festival 2026',
    description:
      'Celebrate the finest seafood the south coast has to offer at the award-winning Dorset Seafood Festival. Sample freshly caught lobster, crab, and oysters while enjoying live cooking demos.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  },
  {
    date: 'Monthly',
    venue: 'Various locations',
    price: 'From £95',
    title: 'Anniversary Supper Club',
    description:
      'An intimate multi-course tasting menu paired with rare wines, held in exclusive private dining rooms across the UK. Each month celebrates a new culinary theme.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    date: 'Sat–Sun',
    venue: 'Nationwide',
    price: 'From £35',
    title: 'Bottomless Brunch',
    description:
      'The ultimate weekend indulgence. Enjoy unlimited Prosecco, mimosas, or Bloody Marys alongside a curated brunch menu at the UK\'s best restaurants.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
]

export default function ThingsToDo() {
  return (
    <>
      <SEO title="Things To Do" description="Discover things to do in your local area, from the best sporting events to pop-ups and food festivals." />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 pb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-16 pt-8"
          >
            <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4 block">
              Events & Experiences
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">
              Things To Do
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl">
              Discover things to do in your local area, from the best sporting events to pop-ups and food festivals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
          >
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={staggerItem}
                  className="group bg-soft-white border border-charcoal/10 p-6 hover:bg-rich-black hover:border-champagne-gold transition-all duration-500 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-rich-black/5 flex items-center justify-center mb-5 group-hover:bg-champagne-gold/20 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-rich-black group-hover:text-champagne-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-soft-white transition-colors duration-500">
                    {category.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant group-hover:text-soft-white/70 transition-colors duration-500">
                    {category.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-2 block">
              Featured
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-rich-black">
              Upcoming Events
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {featuredEvents.map((event) => (
              <motion.div
                key={event.title}
                variants={staggerItem}
                className="group bg-soft-white border border-charcoal/10 overflow-hidden hover:border-champagne-gold transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-champagne-gold text-rich-black font-label-sm text-[10px] uppercase tracking-widest px-3 py-1 mb-2">
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1.5 font-body text-xs text-on-surface-variant">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.venue}
                    </span>
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-champagne-gold">
                      {event.price}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-rich-black mb-2 group-hover:text-champagne-gold transition-colors duration-500">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-label-sm text-[10px] uppercase tracking-widest text-rich-black group-hover:text-champagne-gold transition-colors duration-500"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-rich-black text-soft-white font-label-sm text-[10px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-champagne-gold hover:text-rich-black transition-all duration-500"
            >
              Explore all events <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
