import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Building, Send, ChevronDown, HelpCircle, MessageSquare, Briefcase } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Button } from '@/components/ui/button'

const enquiryReasons = [
  'Account or privacy',
  'Concierge',
  'Editorial or PR',
  'Points or Rewards',
  'Problem with website or APP',
  'Restaurant bookings',
  'Vouchers',
]

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    items: [
      { label: 'General Enquiries', value: '020 7582 0222' },
      { label: 'Concierge Service', value: '020 7840 5222' },
    ],
    note: 'Monday–Friday, 9am–5pm',
  },
  {
    icon: Mail,
    title: 'Email',
    items: [
      { label: 'Customer Support', value: 'support@squaremeal.co.uk' },
      { label: 'Editorial', value: 'editorial@squaremeal.co.uk' },
      { label: 'Concierge', value: 'concierge@squaremeal.co.uk' },
      { label: 'Privacy', value: 'privacy@squaremeal.co.uk' },
      { label: 'Sales Jobs', value: 'salesjobs@squaremeal.co.uk' },
    ],
    note: 'We aim to respond within 2 working days',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    items: [
      { label: 'SquareMeal', value: '7-9 Rathbone Street' },
      { label: 'London', value: 'W1T 1NA' },
    ],
    note: 'Near Goodge Street & Oxford Circus tube stations',
  },
  {
    icon: Building,
    title: 'Registered Office',
    items: [
      { label: 'Quadrant House, Fifth Floor', value: '250 Kennington Lane' },
      { label: 'London', value: 'SE11 5RD' },
    ],
    note: 'Monomax Limited, Company No. 2554719',
  },
]

export default function ContactUs() {
  const [reason, setReason] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <SEO
        title="Contact SquareMeal | Get in Touch"
        description="Contact SquareMeal for restaurant booking enquiries, concierge service, editorial, advertising and support. Call 020 7582 0222 or email support@squaremeal.co.uk."
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {/* Hero Banner */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600" alt="SquareMeal Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-rich-black/90 via-rich-black/70 to-transparent" />
          <div className="absolute inset-0 max-w-[1440px] mx-auto px-5 md:px-20 flex flex-col justify-center">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-xl">
              <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Get in Touch</h1>
              <p className="font-body text-lg text-white/80 mb-8">
                Whether you need help with a booking, have a press enquiry, or want to work with us — we're here to help.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-champagne-gold" /> 020 7582 0222</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-champagne-gold" /> support@squaremeal.co.uk</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-champagne-gold" /> Mon–Fri, 9am–5pm</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">

          {/* Contact Cards */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactCards.map(card => (
              <motion.div key={card.title} variants={staggerItem} className="bg-soft-white border border-charcoal/5 p-8 hover:border-champagne-gold/20 transition-colors">
                <card.icon className="w-6 h-6 text-champagne-gold mb-6" />
                <h3 className="font-display text-lg text-rich-black mb-4">{card.title}</h3>
                <div className="space-y-2 mb-4">
                  {card.items.map(item => (
                    <p key={item.label} className="font-body text-sm text-on-surface-variant">
                      <span className="text-rich-black/60">{item.label}:</span>{' '}
                      <span className="text-rich-black">{item.value}</span>
                    </p>
                  ))}
                </div>
                <p className="font-body text-xs text-champagne-gold">{card.note}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Enquiry Form */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
              <h2 className="font-display text-3xl text-rich-black mb-2">Send Us a Message</h2>
              <p className="font-body text-sm text-on-surface-variant mb-8">Fill in the form and we'll get back to you within 2 working days.</p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-soft-white focus:outline-none focus:border-champagne-gold transition-colors" />
                  <input type="text" placeholder="Last Name" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-soft-white focus:outline-none focus:border-champagne-gold transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-soft-white focus:outline-none focus:border-champagne-gold transition-colors" />

                {/* Reason Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full flex items-center justify-between border border-charcoal/10 px-4 py-3 font-body text-sm bg-soft-white focus:outline-none focus:border-champagne-gold transition-colors text-left"
                  >
                    <span className={reason ? 'text-rich-black' : 'text-on-surface-variant/60'}>
                      {reason || 'Reason for contact'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-champagne-gold transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-charcoal/10 shadow-lg"
                    >
                      {enquiryReasons.map(r => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => { setReason(r); setShowDropdown(false) }}
                          className={`w-full text-left px-4 py-3 font-body text-sm hover:bg-ivory transition-colors ${reason === r ? 'text-champagne-gold bg-ivory' : 'text-on-surface-variant'}`}
                        >
                          {r}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                <input type="text" placeholder="Order or reference number (optional)" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-soft-white focus:outline-none focus:border-champagne-gold transition-colors" />
                <textarea rows={5} placeholder="Your message" className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-soft-white focus:outline-none focus:border-champagne-gold transition-colors resize-none" />
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Map + Office Info */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-8">
              <div className="bg-ivory border border-charcoal/5 p-6">
                <div className="aspect-[4/3] bg-charcoal/5 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-champagne-gold/40" />
                </div>
                <h3 className="font-display text-lg text-rich-black mb-1">Visit Our Office</h3>
                <p className="font-body text-sm text-on-surface-variant mb-1">7-9 Rathbone Street, Fitzrovia, London W1T 1NA</p>
                <p className="font-body text-xs text-champagne-gold">Nearest tubes: Goodge Street & Oxford Circus</p>
              </div>

              <div className="bg-rich-black p-8 text-center">
                <Clock className="w-8 h-8 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-display text-xl text-white mb-2">Office Hours</h3>
                <p className="font-body text-sm text-white/60">Monday to Friday</p>
                <p className="font-body text-lg text-champagne-gold mb-2">9:00 AM – 5:00 PM</p>
                <p className="font-body text-xs text-white/40">Closed weekends and bank holidays</p>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Info */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-charcoal/5 pt-10">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-champagne-gold mt-0.5 shrink-0" />
              <div>
                <h4 className="font-display text-sm text-rich-black mb-1">Need help with a booking?</h4>
                <p className="font-body text-xs text-on-surface-variant">Contact the restaurant directly or email our support team.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-champagne-gold mt-0.5 shrink-0" />
              <div>
                <h4 className="font-display text-sm text-rich-black mb-1">Press & Editorial</h4>
                <p className="font-body text-xs text-on-surface-variant">For press releases and editorial enquiries: editorial@squaremeal.co.uk</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-champagne-gold mt-0.5 shrink-0" />
              <div>
                <h4 className="font-display text-sm text-rich-black mb-1">Careers</h4>
                <p className="font-body text-xs text-on-surface-variant">Explore opportunities at salesjobs@squaremeal.co.uk</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
