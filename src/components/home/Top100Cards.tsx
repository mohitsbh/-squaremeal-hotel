import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { fadeInUp } from '@/animations'

const cards = [
  {
    title: "London's Top 100 Restaurants 2026",
    text: "Discover the capital's finest dining destinations, from hidden gems to Michelin-starred institutions.",
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
    link: '/discover',
  },
  {
    title: "The UK's Top 100 Restaurants 2026",
    text: 'From Cornwall to the Cotswolds, Scotland to Wales — the best restaurants across the nation.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    link: '/discover',
  },
]

export function Top100Cards() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden bg-rich-black cursor-pointer"
          >
            <Link to={card.link} className="block h-full">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />

              <div className="absolute top-6 left-6 flex gap-1">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-champagne-gold text-champagne-gold"
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <h3 className="font-display text-3xl md:text-4xl text-soft-white mb-4 max-w-md">
                  {card.title}
                </h3>
                <p className="font-body text-base text-soft-white/70 mb-8 max-w-md">
                  {card.text}
                </p>
                <span className="inline-flex items-center gap-2 text-champagne-gold font-display text-sm uppercase tracking-widest border-b border-champagne-gold pb-1 transition-all duration-300 group-hover:gap-4">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
