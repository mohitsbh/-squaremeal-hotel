import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/animations'

const articles = [
  {
    title: 'Win a free meal: Enter to win a meal on us this month!',
    category: 'News',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
  },
  {
    title:
      '41 best outdoor restaurants in London 2026: Perfect spots for al fresco dining',
    category: 'Best for',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
  },
  {
    title:
      "SquareMeal and AYALA's Female Chef of the Year Awards 2026",
    category: 'Awards',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600',
  },
  {
    title:
      "London's best hidden gems: 19 restaurants recommended by our critics",
    category: 'Best for',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600',
  },
  {
    title: '31 of the best Spanish restaurants in London',
    category: 'Best for',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
  },
  {
    title:
      '30 of the best rooftop bars in London that will blow you away',
    category: 'Best for',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600',
  },
]

export function NewsSection() {
  return (
    <section className="bg-ivory px-5 md:px-20 py-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-rich-black">
              Latest food and drink news
            </h2>
          </div>
          <Link
            to="/guides"
            className="hidden md:inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-rich-black border-b border-rich-black pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors group flex-shrink-0"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {articles.map((article, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Link
                to="/guides"
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-display text-lg text-rich-black leading-snug group-hover:text-champagne-gold transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 md:hidden"
        >
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-rich-black border-b border-rich-black pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
