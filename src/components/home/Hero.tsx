import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Search, Star, Shield, Award, Clock } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/animations'
import { initLuxuryShader } from '@/lib/shader'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const trustBadges = [
  { icon: Star, text: '7,500+ Independent Reviews' },
  { icon: Shield, text: 'Free Cancellation' },
  { icon: Award, text: 'Top 100 UK Restaurants 2026' },
  { icon: Clock, text: 'Book in Under 2 Minutes' },
]

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      initLuxuryShader(canvasRef.current)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-rich-black pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ display: 'block' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-rich-black/20 via-transparent to-rich-black/90" />

      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl px-5"
        >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2">
            <Sparkles className="w-3 h-3" />
            The UK&apos;s Most Trusted Restaurant Guide
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-champagne-gold text-champagne-gold" />)}
          <span className="font-body text-sm text-white/60 ml-2">4.8 average rating from 150,000+ diners</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-soft-white mb-6 leading-[1.1] tracking-tight text-balance"
        >
          Discover & Book the
          <br />
          <span className="text-champagne-gold">UK&apos;s Finest</span> Dining
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="font-body text-base sm:text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Browse 7,500+ curated restaurants, private dining rooms, and event venues.
          Book instantly and earn Rewards Points with every reservation.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="/discover" className="w-full sm:w-auto">
            <Button variant="primary" size="xl" className="text-sm tracking-[0.2em] w-full sm:min-w-[200px] shadow-lg shadow-champagne-gold/20">
              Book a Table
            </Button>
          </Link>
          <Link to="/restaurants/best" className="w-full sm:w-auto">
            <Button variant="outline" size="xl" className="border-white/30 text-soft-white hover:bg-soft-white hover:text-rich-black text-sm tracking-[0.2em] w-full sm:min-w-[200px]">
              View Top 100
            </Button>
          </Link>
          <Link to="/marketplace" className="w-full sm:w-auto">
            <Button variant="ghost" size="xl" className="text-white/60 hover:text-soft-white text-sm tracking-[0.2em] w-full sm:min-w-[200px] border border-transparent hover:border-white/10">
              Explore Venues
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {trustBadges.map(badge => (
            <div key={badge.text} className="flex items-center gap-2 justify-center">
              <badge.icon className="w-3.5 h-3.5 text-champagne-gold/60 shrink-0" />
              <span className="font-body text-xs text-white/50">{badge.text}</span>
            </div>
          ))}
        </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-20 px-5 md:px-20 pb-8 md:pb-12"
      >
        <div className="max-w-4xl mx-auto bg-soft-white shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex items-center px-5 py-4 border-b md:border-b-0 md:border-r border-charcoal/10">
              <div className="flex flex-col w-full">
                <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where in the UK?"
                  className="border-none p-0 font-body text-sm text-rich-black placeholder:text-on-surface-variant/50 bg-transparent w-full outline-none"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center px-5 py-4 border-b md:border-b-0 md:border-r border-charcoal/10">
              <div className="flex flex-col w-full">
                <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                  Occasion
                </label>
                <input
                  type="text"
                  placeholder="Anniversary, Business..."
                  className="border-none p-0 font-body text-sm text-rich-black placeholder:text-on-surface-variant/50 bg-transparent w-full outline-none"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center px-5 py-4 border-b md:border-b-0 border-charcoal/10 md:border-0">
              <div className="flex flex-col w-full">
                <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                  Cuisine
                </label>
                <input
                  type="text"
                  placeholder="French, Modern British..."
                  className="border-none p-0 font-body text-sm text-rich-black placeholder:text-on-surface-variant/50 bg-transparent w-full outline-none"
                />
              </div>
            </div>
            <Link
              to="/discover"
              className="bg-rich-black text-soft-white px-10 py-4 font-label-sm uppercase tracking-widest hover:bg-charcoal transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Search className="w-4 h-4" />
              Search
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
