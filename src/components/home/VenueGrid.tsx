import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/animations'

const weddingVenues = [
  { name: 'Royal Berkshire, Exclusive Collection', location: 'Ascot', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600' },
  { name: 'Pierremont Hall', location: 'Broadstairs', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600' },
  { name: 'Badgemore Park', location: 'Henley On Thames', image: 'https://images.unsplash.com/photo-1534329538069-32ec119ed96c?w=600' },
  { name: 'Hertford Castle', location: 'Hertford', image: 'https://images.unsplash.com/photo-1598228723793-5270f7d18e67?w=600' },
]

const privateDiningVenues = [
  { name: "Drake & Morgan at King's Cross", location: 'King\'s Cross', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600' },
  { name: "L'Estaminet d'Aix", location: 'Crouch End', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
  { name: 'Mildreds Soho', location: 'Soho', image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600' },
  { name: "Raymond's", location: 'Nottingham', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' },
]

const eventVenues = [
  { name: "The Underglobe at Shakespeare's Globe", location: 'Bankside', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { name: 'Curzon Chelsea', location: 'Chelsea', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600' },
  { name: 'Westminster Boating Base', location: 'Westminster', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
  { name: 'Virginia Park Lodge', location: 'Co.Cavan', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600' },
]

const sections = [
  { title: 'Unique wedding venues', link: '/wedding-venues', venues: weddingVenues },
  { title: 'Celebrate in a private dining room', link: '/private-dining', venues: privateDiningVenues },
  { title: 'Venues perfect for your next event', link: '/marketplace', venues: eventVenues, description: 'Start browsing our inspiring venue collections and choose a location that will make your event one to remember.' },
]

export function VenueGrid() {
  return (
    <section className="py-20 bg-soft-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 space-y-20">
        {sections.map(s => (
          <motion.div key={s.title} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl text-rich-black">{s.title}</h2>
              <Link to={s.link} className="font-body text-sm text-champagne-gold hover:underline flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
            </div>
            {s.description && <p className="font-body text-sm text-on-surface-variant mb-8 max-w-2xl">{s.description}</p>}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {s.venues.map(v => (
                <motion.div key={v.name} variants={staggerItem} className="group relative h-[280px] overflow-hidden bg-rich-black cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80" style={{ backgroundImage: `url(${v.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg text-soft-white">{v.name}</h3>
                    <p className="font-body text-sm text-soft-white/60">{v.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
