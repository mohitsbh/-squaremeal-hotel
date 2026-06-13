import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { fadeInUp } from '@/animations'

const events = [
  {
    title: 'Anniversary Supper Club',
    date: 'Sat, 13 Jun 2026',
    price: '£75',
    venue: 'Cinnamon Kitchen City',
    desc: 'Join us on 13th June 2026 for a very special 25th anniversary supper club, hosted by Chef Vivek Singh. Arrive from 5:30pm to enjoy a celebratory late lunch, prepared with passion and rooted in 25 years of Cinnamon\'s story.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600',
  },
  {
    title: 'Bottomless Brunch',
    date: 'Sat, 13 Jun 2026',
    price: '£37',
    venue: "Smith's Bar Grill",
    desc: 'Join us every Saturday from 11am to 4pm for a stylish brunch with a live DJ in the heart of Paddington. Enjoy dishes like burrata and steak & chips with free-flowing drinks.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
  },
  {
    title: 'Terrace Bottomless Brunch',
    date: 'Sat, 13 Jun 2026',
    price: '£35',
    venue: 'Holiday Inn Farnborough',
    desc: 'Bottomless Brunch on our brand-new Garden Terrace - every Saturday from 11am–4pm. 90 minutes of flowing drinks, a brunch menu full of favourites, with heaters and cosy blankets.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600',
  },
  {
    title: 'Lobster & Champagne Brunch',
    date: 'Sat, 13 Jun 2026',
    price: '£40',
    venue: 'Osteria by Bocconcino',
    desc: 'Saturdays and Sundays are made for lingering: a long table on the Strand, a glass that never quite empties, and a kitchen sending out some of its best work.',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600',
  },
]

export function EventsSection() {
  return (
    <section className="py-20 max-w-[1440px] mx-auto px-5 md:px-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-rich-black mb-2">Events and things to do</h2>
          <p className="font-body text-sm text-on-surface-variant">Discover exclusive dining experiences, supper clubs, and events across the UK.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(e => (
          <motion.div key={e.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row bg-soft-white border border-charcoal/5 overflow-hidden group cursor-pointer">
            <div className="md:w-48 h-48 md:h-auto flex-shrink-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${e.image})` }} />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-champagne-gold/10 text-champagne-gold font-label-sm text-[10px] uppercase tracking-widest px-2 py-1">{e.price}</span>
                  <span className="flex items-center gap-1 text-on-surface-variant/50 font-label-sm text-[10px] uppercase tracking-widest"><Calendar className="w-3 h-3" />{e.date}</span>
                </div>
                <h3 className="font-display text-lg text-rich-black mb-1">{e.title}</h3>
                <p className="flex items-center gap-1 font-body text-xs text-on-surface-variant mb-2"><MapPin className="w-3 h-3 text-champagne-gold" />{e.venue}</p>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed line-clamp-2">{e.desc}</p>
              </div>
              <div className="mt-3">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-champagne-gold">Read more</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
