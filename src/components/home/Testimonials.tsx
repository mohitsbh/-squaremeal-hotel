import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/restaurants'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { SectionHeader } from '@/components/ui/section-header'

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-20 max-w-[1440px] mx-auto">
      <SectionHeader
        label="Testimonials"
        title="Trusted by Discerning Diners"
        description="Hear from our community of hospitality enthusiasts, industry professionals, and luxury travellers."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={staggerItem}
            className="bg-soft-white p-8 border border-charcoal/5 hover:border-champagne-gold/20 transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-champagne-gold/30 mb-6" />
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-champagne-gold text-champagne-gold" />
              ))}
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed italic">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div>
              <p className="font-label-sm text-xs uppercase tracking-widest text-rich-black">
                {testimonial.name}
              </p>
              <p className="font-body text-xs text-on-surface-variant/60">
                {testimonial.role}
              </p>
              <p className="font-body text-xs text-champagne-gold mt-1">
                {testimonial.restaurantName}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
