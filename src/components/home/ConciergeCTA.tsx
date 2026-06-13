import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/animations'

export function ConciergeCTA() {
  return (
    <section className="py-20 bg-rich-black">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-5 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-6">
            <Phone className="w-3 h-3" />
            Concierge & venue finding service
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-soft-white mb-4">Don't have time to search for a venue?</h2>
          <p className="font-body text-base text-soft-white/60 mb-8 max-w-2xl mx-auto">Let us take the strain and do the legwork for you for FREE. Our concierge team will find the perfect venue for your event.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-champagne-gold/90 transition-colors">
              Get free help <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:02078405222" className="inline-flex items-center gap-2 border border-soft-white/30 text-soft-white font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-soft-white hover:text-rich-black transition-colors">
              <Phone className="w-4 h-4" /> 020 7840 5222
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
