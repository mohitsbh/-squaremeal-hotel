import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Utensils, Users, Music, Lightbulb, Camera, Gift, ArrowRight, Shirt } from 'lucide-react'

const supplierCategories = [
  {
    icon: Utensils,
    title: 'Event Caterers',
    description: 'Full-service catering for events of all sizes',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Activities and workshops for corporate groups',
  },
  {
    icon: Lightbulb,
    title: 'AV & Lighting',
    description: 'Audio visual, lighting and event technology',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Bands, DJs, performers and speakers',
  },
  {
    icon: Shirt,
    title: 'Event Staffing',
    description: 'Waiting staff, bartenders, security and hosts',
  },
  {
    icon: Camera,
    title: 'Photography & Video',
    description: 'Professional event photography and videography',
  },
  {
    icon: Gift,
    title: 'Corporate Gifts',
    description: 'Branded merchandise and gift solutions',
  },
  {
    icon: ArrowRight,
    title: 'Furniture & Decor',
    description: 'Event furniture, linens and styling',
  },
]

export default function EventSuppliers() {
  return (
    <>
      <SEO
        title="Event Suppliers, Hospitality & Team Building"
        description="Browse the UK's best event suppliers. Find caterers, team building, AV, entertainment, staffing, photography, gifts, furniture and decor for your event."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="relative h-[55vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/60 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="font-display text-champagne-gold tracking-widest text-sm uppercase mb-2 block">
                Supplier Directory
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">
                Event suppliers, hospitality and team building
              </h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">
                Discover the UK's finest event suppliers. From catering and entertainment to AV and
                team-building activities, we connect you with trusted professionals who make your
                event extraordinary.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4 block">
              Supplier Categories
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-4">
              Popular Suppliers Categories
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl">
              Whether you're planning a corporate conference, a private celebration or a team away
              day, our curated directory of event suppliers covers every aspect of your event —
              all vetted and trusted by the SquareMeal team.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
          >
            {supplierCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={staggerItem}
                  className="group bg-soft-white border border-charcoal/5 p-6 hover:bg-rich-black hover:border-champagne-gold transition-all duration-500 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-rich-black/5 flex items-center justify-center mb-5 group-hover:bg-champagne-gold/20 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-rich-black group-hover:text-champagne-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg text-rich-black mb-2 group-hover:text-soft-white transition-colors duration-500">
                    {category.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant group-hover:text-soft-white/70 transition-colors duration-500">
                    {category.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-rich-black p-10 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-soft-white mb-4">
              Have you considered our free concierge service?
            </h2>
            <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-8">
              Don't have time to source the perfect suppliers? Let our dedicated concierge team do
              the legwork for you. We'll handpick trusted suppliers that match your brief — and it's
              completely free.
            </p>
            <Link
              to="/concierge"
              className="inline-flex items-center gap-3 bg-champagne-gold text-rich-black font-label-sm text-[10px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-soft-white transition-all duration-500"
            >
              Speak to our team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
