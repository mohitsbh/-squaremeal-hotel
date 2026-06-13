import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, CheckCircle } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { venues } from '@/data/restaurants'
import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/animations'

export default function VenueDetail() {
  const { slug } = useParams()
  const [enquired, setEnquired] = useState(false)
  const venue = venues.find((v) => v.slug === slug)

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-rich-black mb-4">Venue Not Found</h1>
          <Link to="/marketplace" className="text-champagne-gold underline">
            Back to Marketplace
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO title={venue.name} description={venue.description} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
      <div className="relative h-[60vh] overflow-hidden bg-rich-black">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${venue.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/70 via-rich-black/20 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 text-soft-white/70 hover:text-soft-white mb-4 font-body text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Link>
            <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-3">{venue.name}</h1>
            <div className="flex items-center gap-4 text-soft-white/70 font-body text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{venue.location}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />Up to {venue.capacity} guests</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-display text-3xl text-rich-black mb-6">About This Venue</h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                {venue.description}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-ivory p-6 border border-charcoal/5">
                  <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">Venue Type</span>
                  <p className="font-display text-xl text-rich-black mt-1 capitalize">{venue.type.replace('-', ' ')}</p>
                </div>
                <div className="bg-ivory p-6 border border-charcoal/5">
                  <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">Capacity</span>
                  <p className="font-display text-xl text-rich-black mt-1">{venue.capacity} guests</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-soft-white border border-charcoal/5 p-8">
              {enquired ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                  <h3 className="font-display text-lg text-rich-black mb-2">Enquiry Sent</h3>
                  <p className="font-body text-sm text-on-surface-variant">The venue will respond to your enquiry shortly.</p>
                </div>
              ) : (
              <>
              <h3 className="font-display text-xl text-rich-black mb-6">Enquire About This Venue</h3>
              <form className="space-y-4 mb-8" onSubmit={(e) => { e.preventDefault(); setEnquired(true) }}>
                <input type="text" required placeholder="Your Name" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold" />
                <input type="email" required placeholder="Email Address" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold" />
                <input type="tel" required placeholder="Phone Number" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold" />
                <textarea required placeholder="Event Details" rows={4} className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none focus:border-champagne-gold resize-none" />
                <Button type="submit" variant="primary" size="xl" className="w-full">Send Enquiry</Button>
              </form>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}
