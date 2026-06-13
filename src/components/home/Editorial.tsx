import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { articles } from '@/data/restaurants'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/animations'

export function Editorial() {
  const featured = articles.find((a) => a.featured)
  const sideArticles = articles.filter((a) => !a.featured)

  return (
    <section className="py-24 md:py-32 px-5 md:px-20 max-w-[1440px] mx-auto">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
      >
        <div className="md:col-span-7">
          <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4 block">
            The Feature
          </span>
          {featured && (
            <>
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] overflow-hidden mb-8 group"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
              </motion.div>
              <h3 className="font-display text-3xl md:text-4xl text-rich-black mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="font-body text-lg text-on-surface-variant mb-6 max-w-2xl leading-relaxed">
                {featured.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-rich-black border-b border-rich-black pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors group"
              >
                Read the Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </>
          )}
        </div>

        <div className="md:col-span-5 flex flex-col gap-10">
          {sideArticles.map((article, i) => (
            <motion.div
              key={article.id}
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-6 items-start cursor-pointer"
            >
              <div className="w-1/3 aspect-[4/5] overflow-hidden flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
              </div>
              <div className="w-2/3">
                <span className="text-on-surface-variant/60 font-label-sm text-xs uppercase tracking-widest mb-2 block">
                  {article.category}
                </span>
                <h4 className="font-display text-lg md:text-xl text-rich-black mb-2 group-hover:text-champagne-gold transition-colors">
                  {article.title}
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
