import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/restaurants'
import { fadeInUp } from '@/animations'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const items = testimonials.length

  const slide = (dir: number) => {
    setDirection(dir)
    setCurrent(prev => (prev + dir + items) % items)
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section className="py-24 md:py-32 bg-ivory/50">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-rich-black mb-4">Trusted by Discerning Diners</h2>
          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">Hear from our community of hospitality enthusiasts, industry professionals, and luxury travellers.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-soft-white border border-charcoal/5 p-10 md:p-14 text-center"
              >
                <Quote className="w-10 h-10 text-champagne-gold/20 mx-auto mb-6" />
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-champagne-gold text-champagne-gold" />
                  ))}
                </div>
                <p className="font-body text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed italic max-w-2xl mx-auto">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-champagne-gold/10 rounded-full flex items-center justify-center">
                    <span className="font-display text-lg text-champagne-gold">{testimonials[current].name.charAt(0)}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-label-sm text-sm uppercase tracking-widest text-rich-black">{testimonials[current].name}</p>
                    <p className="font-body text-xs text-on-surface-variant/60">{testimonials[current].role}</p>
                    <p className="font-body text-xs text-champagne-gold mt-0.5">{testimonials[current].restaurantName}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={() => slide(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-soft-white border border-charcoal/10 flex items-center justify-center hover:border-champagne-gold transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="w-4 h-4 text-rich-black" />
          </button>
          <button onClick={() => slide(1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-soft-white border border-charcoal/10 flex items-center justify-center hover:border-champagne-gold transition-colors" aria-label="Next testimonial">
            <ChevronRight className="w-4 h-4 text-rich-black" />
          </button>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }} className={cn('w-2 h-2 rounded-full transition-all duration-300', i === current ? 'bg-champagne-gold w-6' : 'bg-charcoal/20 hover:bg-charcoal/40')} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
