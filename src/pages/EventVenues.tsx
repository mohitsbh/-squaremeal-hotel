import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Building2, MapPin, ArrowRight, Phone, Users, Calendar } from 'lucide-react'

const cities = [
  { name: 'London', count: '320+', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070' },
  { name: 'Manchester', count: '120+', image: 'https://images.unsplash.com/photo-1544282052-1f1b8126a270?q=80&w=2070' },
  { name: 'Birmingham', count: '85+', image: 'https://images.unsplash.com/photo-1564514005287-9e5a2bc12b0c?q=80&w=2070' },
  { name: 'Edinburgh', count: '90+', image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?q=80&w=2070' },
  { name: 'Bristol', count: '65+', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?q=80&w=2070' },
]

const venueTypes = [
  { icon: Building2, title: 'Conference centres', desc: 'Purpose-built spaces with AV equipment for conferences, seminars and product launches.' },
  { icon: Users, title: 'Private dining rooms', desc: 'Intimate rooms for corporate dinners, client entertainment and team celebrations.' },
  { icon: MapPin, title: 'Wedding venues', desc: 'Beautiful settings for ceremonies, receptions and civil partnerships.' },
  { icon: Calendar, title: 'Christmas parties', desc: 'Festive venues for seasonal celebrations, office parties and client events.' },
  { icon: Building2, title: 'Meeting rooms', desc: 'Professional meeting spaces for board meetings, interviews and workshops.' },
  { icon: MapPin, title: 'Unique spaces', desc: 'Extraordinary venues including galleries, boats, castles and industrial lofts.' },
]

const featuredVenues = [
  {
    name: 'The Underglobe at Shakespeare\'s Globe',
    location: 'Bankside, London SE1 9DT',
    phone: '020 7902 1400',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070',
    capacity: '60–350 guests',
    description: 'An atmospheric events space beneath Shakespeare\'s Globe, featuring exposed brick vaults, original 16th-century stonework, and direct access to the Globe exhibition. A truly unique setting for corporate events, private dinners and receptions on Bankside.',
  },
  {
    name: 'Curzon Chelsea',
    location: 'Chelsea, London SW3 6LY',
    phone: '020 7463 1330',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8fe2965c?q=80&w=2070',
    capacity: '20–200 guests',
    description: 'A stunning cinema venue in the heart of Chelsea with luxurious screening rooms and bar spaces. Perfect for private screenings, product launches and corporate events with state-of-the-art projection and sound systems.',
  },
  {
    name: 'Westminster Boating Base',
    location: 'Westminster, London SW1V 3JY',
    phone: '020 7821 7389',
    image: 'https://images.unsplash.com/photo-1569346340114-5caa905fc3a9?q=80&w=2070',
    capacity: '40–150 guests',
    description: 'A unique waterside venue operated by GLL as a social enterprise, offering breathtaking panoramic Thames views from its riverside terraces. The Pavilion Room and Edgson Room provide flexible spaces for receptions and corporate events.',
  },
  {
    name: 'Virginia Park Lodge',
    location: 'Co.Cavan, Ireland',
    phone: '049 433 6155',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070',
    capacity: '20–120 guests',
    description: 'An exclusive-use 18th-century hunting lodge set within 550 acres of pristine Irish parkland. Features elegant drawing rooms, a library bar, and stunning gardens — ideal for corporate retreats, private celebrations and bespoke events.',
  },
]

const faqs = [
  {
    q: 'I\'m planning a corporate event, where do I start?',
    a: 'Begin by defining your event type, guest count, budget and preferred location. SquareMeal\'s curated venue collection makes it easy to browse hand-picked options across the UK. For personalised recommendations, our free concierge service will create a tailored shortlist of venues that match your exact requirements within 24 hours.',
  },
  {
    q: 'What does venue hire include?',
    a: 'Venue hire typically includes access to the space for a set period, basic furniture, and in some cases AV equipment and staffing. However, inclusions vary significantly between venues — some offer all-inclusive packages with catering and event coordination, while others are dry-hire spaces where you bring your own suppliers. Always confirm exactly what\'s included before booking.',
  },
  {
    q: 'How much is venue hire?',
    a: 'Venue hire costs vary widely depending on location, capacity, day of the week and season. In London, prices typically range from £500–£5,000 for a half-day hire of a meeting room, while larger event spaces can cost £5,000–£20,000+. Regional venues are often more affordable. Many venues also offer tiered packages to suit different budgets.',
  },
  {
    q: 'Can I hire a venue for free?',
    a: 'Some venues offer free hire in exchange for a minimum bar spend or food and beverage commitment, particularly pubs, bars and restaurants with private spaces. Others may waive the hire fee for weekday bookings or during off-peak seasons. Our concierge team can help identify venues with favourable terms for your specific event.',
  },
]

export default function EventVenues() {
  return (
    <>
      <SEO title="Event Venues" description="Explore the best event venues for hire in London and the UK. From conference centres to unique spaces, find your perfect venue with SquareMeal." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 font-display text-champagne-gold tracking-widest text-sm uppercase mb-2">
                <Building2 className="w-4 h-4" /> SquareMeal Venues
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Event venues for hire</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">Explore the best venues for hire in London and the UK for your next event, conference or celebration.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-rich-black border border-champagne-gold/20 p-10 md:p-16 text-center relative overflow-hidden mb-20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069')] bg-cover bg-center opacity-5" />
            <div className="relative z-10">
              <Building2 className="w-10 h-10 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl text-soft-white mb-4">SquareMeal Concierge</h2>
              <p className="font-body text-base text-white/60 max-w-2xl mx-auto mb-2">Our free venue-finding service connects you with the perfect event spaces across the UK. With over 30 years of industry expertise, our dedicated concierge team will curate a bespoke shortlist of venues tailored to your event type, guest count, budget and style — saving you hours of research.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4">
                <a href="tel:02078405222" className="inline-flex items-center gap-2 text-soft-white font-body text-base hover:text-champagne-gold transition-colors"><Phone className="w-4 h-4 text-champagne-gold" /> 020 7840 5222</a>
              </div>
              <Link to="/concierge" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-display text-sm px-8 py-3 hover:bg-champagne-gold/90 transition-colors uppercase tracking-wider mt-4">
                Start your search <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-3xl text-rich-black mb-4">Discover top event spaces across the UK</h2>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-8">Browse event venues in your city, from conference centres and meeting rooms to unique spaces and private dining rooms.</p>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {cities.map(city => (
                <motion.div key={city.name} variants={staggerItem} className="group relative h-48 overflow-hidden cursor-pointer">
                  <Link to="/marketplace" className="block h-full">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                      <h3 className="font-display text-lg text-soft-white">{city.name}</h3>
                      <p className="font-body text-xs text-champagne-gold">{city.count} venues</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <section className="py-20 bg-ivory -mx-5 md:-mx-20 px-5 md:px-20 mb-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl text-rich-black mb-4">Find a venue that suits the style of your event</h2>
              <p className="font-body text-base text-on-surface-variant max-w-3xl mx-auto">Whether you're planning a conference, corporate dinner, wedding or intimate meeting, discover venues designed for every occasion.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {venueTypes.map(type => (
                <motion.div key={type.title} variants={staggerItem} className="group bg-soft-white border border-charcoal/5 p-8 text-center hover:border-champagne-gold/30 transition-colors cursor-pointer">
                  <type.icon className="w-10 h-10 text-champagne-gold mx-auto mb-5" />
                  <h3 className="font-display text-lg text-rich-black mb-3 group-hover:text-champagne-gold transition-colors">{type.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{type.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-3xl text-rich-black">Featured venues</h2>
              <span className="font-body text-sm text-on-surface-variant hidden md:block">{featuredVenues.length} hand-picked venues</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVenues.map((venue, i) => (
                <motion.div key={venue.name} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-soft-white border border-charcoal/5 overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${venue.image})` }} />
                    <div className="absolute top-3 right-3 bg-rich-black/80 text-champagne-gold font-display text-xs px-3 py-1">{venue.capacity}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-rich-black mb-2">{venue.name}</h3>
                    <p className="font-body text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin className="w-3.5 h-3.5 shrink-0" />{venue.location}</p>
                    <p className="font-body text-sm text-on-surface-variant mb-4 leading-relaxed">{venue.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                      <span className="inline-flex items-center gap-1 font-label-sm text-xs text-rich-black"><Phone className="w-3 h-3 text-champagne-gold" /> {venue.phone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-display text-xs uppercase tracking-[0.3em] mb-4"><Building2 className="w-4 h-4" /> Venue hire FAQs</span>
              <h2 className="font-display text-3xl text-rich-black mb-3">Frequently asked questions</h2>
              <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">Everything you need to know about hiring an event venue.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="group border border-charcoal/5 bg-ivory overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-display text-lg text-rich-black hover:text-champagne-gold transition-colors list-none">
                    {faq.q}
                    <span className="text-champagne-gold text-xs transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-rich-black border border-champagne-gold/20 p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069')] bg-cover bg-center opacity-5" />
            <div className="relative z-10">
              <Building2 className="w-10 h-10 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl text-soft-white mb-4">Let us find the perfect venue for you</h2>
              <p className="font-body text-base text-white/60 max-w-2xl mx-auto mb-8">Our free concierge service matches you with the ideal event spaces — from conference centres to unique venues — tailored to your requirements. Every confirmed booking earns SquareMeal Rewards points.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
                <a href="tel:02078405222" className="inline-flex items-center gap-2 text-soft-white font-body text-base hover:text-champagne-gold transition-colors"><Phone className="w-4 h-4 text-champagne-gold" /> 020 7840 5222</a>
              </div>
              <Link to="/concierge" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-display text-sm px-8 py-3 hover:bg-champagne-gold/90 transition-colors uppercase tracking-wider">
                Start your search <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
