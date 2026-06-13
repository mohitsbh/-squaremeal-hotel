import { useState } from 'react'
import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Phone, Mail, CheckCircle, Star, Calendar, Users, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const howItWorks = [
  {
    icon: Calendar,
    title: 'Tell Us About Your Event',
    description: 'Fill in our quick form with your event details, dates, guest numbers, and any specific requirements you may have.',
  },
  {
    icon: MapPin,
    title: 'We Find the Perfect Venues',
    description: 'Our expert concierge team searches our curated database to find venues that match your exact needs and preferences.',
  },
  {
    icon: CheckCircle,
    title: 'Receive Your Shortlist',
    description: "Within 24 hours we'll send you a personalised shortlist of venues. We'll also handle initial enquiries and arrange site visits.",
  },
]

const whyUse = [
  { text: 'Completely free of charge – no hidden fees whatsoever', icon: Star },
  { text: 'We never take commission from your booking', icon: CheckCircle },
  { text: '24-hour response time on all enquiries', icon: CheckCircle },
  { text: 'Earn 500 Rewards Points per booking when you book through us', icon: Star },
]

const clients = [
  'Google', 'Amazon', 'Deloitte', 'HSBC', 'BBC', 'Harrods', 'Goldman Sachs', 'LVMH',
]

export default function Concierge() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      <SEO
        title="Free Concierge Venue-Finding Service"
        description="Don't have time to search for a venue? Let SquareMeal's free concierge service do the legwork for you. Get personalised venue recommendations within 24 hours."
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[65vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/60 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="font-display text-champagne-gold tracking-widest text-sm uppercase mb-2 block">SquareMeal Concierge</span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Free Venue-Finding Concierge Service</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">
                Don't have time to search for a venue? Let us take the strain and do the legwork for you for FREE.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">How It Works</h2>
              <p className="font-body text-base text-on-surface-variant max-w-xl mx-auto">
                Getting started is simple. Three easy steps to finding your perfect venue.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={staggerItem}
                  className="bg-soft-white border border-charcoal/5 p-8 text-center relative"
                >
                  <div className="w-16 h-16 bg-rich-black flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-7 h-7 text-champagne-gold" />
                  </div>
                  <span className="font-display text-champagne-gold text-sm tracking-widest uppercase mb-2 block">Step {i + 1}</span>
                  <h3 className="font-display text-xl text-rich-black mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-6">Why Use Our Concierge Service?</h2>
              <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
                Our dedicated team of venue-finding experts has over 20 years of experience connecting event organisers with the perfect spaces. We do all the hard work so you don't have to.
              </p>
              <div className="space-y-5">
                {whyUse.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                    <span className="font-body text-base text-rich-black">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-rich-black p-8 md:p-10">
              <h3 className="font-display text-xl text-soft-white mb-6">What Our Clients Say</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-champagne-gold pl-4">
                  <p className="font-body text-sm text-white/70 italic leading-relaxed mb-2">
                    "SquareMeal's concierge team found us the most incredible venue for our annual gala. They handled everything from venue tours to contract negotiations. Exceptional service."
                  </p>
                  <p className="font-display text-xs text-champagne-gold uppercase tracking-wider">Sarah Mitchell, Deloitte</p>
                </div>
                <div className="border-l-2 border-champagne-gold pl-4">
                  <p className="font-body text-sm text-white/70 italic leading-relaxed mb-2">
                    "We needed a last-minute venue for 150 guests and SquareMeal delivered five perfect options within 24 hours. Saved us weeks of work."
                  </p>
                  <p className="font-display text-xs text-champagne-gold uppercase tracking-wider">James Cooper, Google</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="font-display text-3xl md:text-4xl text-rich-black text-center mb-14">Tell Us About Your Event</h2>
            <div className="max-w-3xl mx-auto bg-soft-white border border-charcoal/5 p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-champagne-gold mx-auto mb-6" />
                  <h3 className="font-display text-2xl text-rich-black mb-3">Enquiry Submitted</h3>
                  <p className="font-body text-base text-on-surface-variant mb-6 max-w-md mx-auto">Thank you for your enquiry. Our concierge team will review your requirements and get back to you within 24 hours with a personalised venue shortlist.</p>
                  <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>Submit Another Enquiry</Button>
                </div>
              ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Event Type</label>
                    <select required className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold">
                      <option value="">Select event type</option>
                      <option>Meeting / Conference</option>
                      <option>Christmas Party</option>
                      <option>Wedding</option>
                      <option>Private Dining</option>
                      <option>Private Party</option>
                      <option>Team Building</option>
                      <option>Birthday Party</option>
                      <option>Product Launch</option>
                      <option>Awards Ceremony</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Event Date</label>
                    <input type="date" required className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Number of Guests</label>
                    <input type="number" required placeholder="e.g. 50" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                  </div>
                  <div>
                    <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Budget</label>
                    <input type="text" placeholder="e.g. £5,000 – £10,000" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                  </div>
                  <div>
                    <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Location</label>
                    <input type="text" required placeholder="City or postcode" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                  </div>
                </div>
                <div>
                  <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Additional Requirements</label>
                  <textarea rows={4} placeholder="Tell us more about what you're looking for..." className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold resize-y" />
                </div>
                <div className="border-t border-charcoal/10 pt-6">
                  <p className="font-display text-sm text-rich-black mb-4 uppercase tracking-wider">Your Contact Details</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">First Name</label>
                      <input type="text" required placeholder="First name" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                    </div>
                    <div>
                      <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Last Name</label>
                      <input type="text" required placeholder="Last name" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Company</label>
                      <input type="text" placeholder="Company name" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                    </div>
                    <div>
                      <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Email</label>
                      <input type="email" required placeholder="email@example.com" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="font-display text-xs text-rich-black uppercase tracking-widest mb-2 block">Phone</label>
                    <input type="tel" required placeholder="Phone number" className="w-full border border-charcoal/10 bg-soft-white px-4 py-3 font-body text-sm text-on-surface-variant focus:outline-none focus:border-champagne-gold" />
                  </div>
                </div>
                <Button type="submit" variant="primary" size="xl" className="w-full">Submit Enquiry</Button>
              </form>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="font-display text-3xl md:text-4xl text-rich-black text-center mb-3">Our Clients Include...</h2>
            <p className="font-body text-base text-on-surface-variant text-center max-w-xl mx-auto mb-10">
              Trusted by the world's leading companies for their most important events.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client) => (
                <div key={client} className="bg-soft-white border border-charcoal/5 flex items-center justify-center h-20">
                  <span className="font-display text-lg text-rich-black/40 uppercase tracking-widest">{client}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-rich-black p-10 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-soft-white mb-4">Ready to Find Your Perfect Venue?</h2>
            <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-8">
              Speak to our concierge team today and let us find the ideal venue for your next event.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="tel:02078405222"
                className="inline-flex items-center gap-2 font-display text-sm text-champagne-gold hover:text-soft-white transition-colors"
              >
                <Phone className="w-4 h-4" /> 020 7840 5222
              </a>
              <a
                href="mailto:concierge@squaremeal.co.uk"
                className="inline-flex items-center gap-2 font-display text-sm text-champagne-gold hover:text-soft-white transition-colors"
              >
                <Mail className="w-4 h-4" /> concierge@squaremeal.co.uk
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
