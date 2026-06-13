import { SEO } from '@/components/shared/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Link } from 'react-router-dom'
import { Sparkles, MapPin, ArrowRight, Calendar, Gift, Phone } from 'lucide-react'

const featuredVenues = [
  {
    id: 'the-view-rcs',
    name: 'The View at The Royal College of Surgeons',
    location: '38-43 Lincoln\'s Inn Fields, London WC2A 3PE',
    phone: '020 7869 6020',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    description: 'Perched high above Lincoln\'s Inn Fields, The View offers a spectacular panorama of the London skyline for your Christmas celebration. The panoramic meeting rooms accommodate 20 to 200 guests with floor-to-ceiling windows providing a glittering backdrop of festive London.',
    capacity: '20–200 guests',
    highlights: ['Panoramic city views', 'Festive menu options', 'In-house AV', 'Dedicated event planner'],
  },
  {
    id: '116-pall-mall',
    name: '116 Pall Mall',
    location: 'St James\'s, London SW1Y 5ED',
    phone: '020 7451 3347',
    image: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800',
    description: 'A Grade-I listed Georgian mansion with a stunning 15ft Regency chandelier originally commissioned for George IV. Five floors of event space accommodating up to 1,000 guests, making it one of London\'s most magnificent Christmas party venues.',
    capacity: '80–1,000 guests',
    highlights: ['Regency chandelier', 'Grade-I listed', 'Five event floors', 'Exclusive weekend hire'],
  },
  {
    id: 'the-sloane-club',
    name: 'The Sloane Club',
    location: 'Chelsea, London SW1W 8BP',
    phone: '020 7730 9131',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    description: 'An exquisite private members club transformed by Russell Sage Studio. The LILA restaurant features a stunning retractable glass roof while intimate rooms offer charm for smaller festive gatherings. A truly elegant setting for a Christmas party to remember.',
    capacity: '25–160 guests',
    highlights: ['Retractable glass roof', 'Russell Sage interiors', 'Private members club', 'Bespoke Christmas menus'],
  },
  {
    id: 'park-plaza-riverbank',
    name: 'Park Plaza Riverbank',
    location: 'Vauxhall, London SE1 7TJ',
    phone: '0333 400 6102',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
    description: 'Perched on the 12th floor with spectacular panoramic Thames views, the River View Lounge provides a breathtaking backdrop for your Christmas party. Silver, gold, and platinum packages are available to suit every budget and style.',
    capacity: '80–150 guests',
    highlights: ['Thames skyline views', '12th-floor lounge', 'Three tiered packages', 'Complimentary stay'],
  },
]

const cities = [
  { name: 'London', count: '320+', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070' },
  { name: 'Manchester', count: '120+', image: 'https://images.unsplash.com/photo-1544282052-1f1b8126a270?q=80&w=2070' },
  { name: 'Birmingham', count: '85+', image: 'https://images.unsplash.com/photo-1564514005287-9e5a2bc12b0c?q=80&w=2070' },
  { name: 'Edinburgh', count: '90+', image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?q=80&w=2070' },
  { name: 'Bristol', count: '65+', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?q=80&w=2070' },
  { name: 'Leeds', count: '70+', image: 'https://images.unsplash.com/photo-1581403341630-a5e3b0b1c6a7?q=80&w=2070' },
]

const tips = [
  {
    icon: Calendar,
    title: 'Book early',
    description: 'Christmas party bookings open as early as July and the most sought-after venues are snapped up by September. Start your search early to secure your first-choice date and venue.',
  },
  {
    icon: Gift,
    title: 'Set a budget',
    description: 'Determine your per-head spend early, including food, drink, entertainment, and any hire fees. Most London venues offer tiered packages from £65–£150+ per person.',
  },
  {
    icon: Sparkles,
    title: 'Know your guest count',
    description: 'Venues need accurate numbers for catering and seating. Provide a realistic estimate at enquiry stage and confirm final numbers at least two weeks before the event.',
  },
  {
    icon: Gift,
    title: 'Consider dietary requirements',
    description: 'Ensure your chosen venue can cater for vegetarians, vegans, gluten-free, and other dietary needs. Most premium venues are well-equipped to handle all requirements.',
  },
]

const faqs = [
  {
    q: 'How do I find a Christmas party venue?',
    a: 'Start by considering your location, guest count, and budget. Use SquareMeal\'s curated Christmas party venue collection to browse hand-picked options across the UK. You can filter by city, capacity, and style. For personalised recommendations, our free concierge service will create a tailored shortlist within 24 hours.',
  },
  {
    q: 'When should I book?',
    a: 'The best Christmas party venues begin taking bookings from July and prime dates — especially Fridays and Saturdays in December — are often fully booked by October. We recommend starting your search in late summer and securing your booking by early autumn to guarantee your preferred date.',
  },
  {
    q: 'What should I consider when choosing a venue?',
    a: 'Key considerations include location and transport links, capacity and layout, catering style and menu options, AV equipment for presentations or entertainment, and your total budget including any hire fees, minimum spend, and VAT. Many venues offer tiered Christmas packages so compare what\'s included before committing.',
  },
]

export default function ChristmasParties() {
  return (
    <>
      <SEO title="Christmas Party Venues" description="Discover the best Christmas party venues across the UK. From grand London ballrooms to intimate private dining rooms, find your perfect festive venue with SquareMeal." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800')] bg-cover bg-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 font-display text-champagne-gold tracking-widest text-sm uppercase mb-2">
                <Sparkles className="w-4 h-4" /> SquareMeal Christmas
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Christmas party venues</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">Discover the UK's finest Christmas party venues. From glittering London ballrooms to chic Manchester lofts, find the perfect setting for your festive celebration with SquareMeal's free concierge service.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">Browse by location</h2>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-8">Find Christmas party venues in your city, from intimate gatherings to grand corporate celebrations.</p>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cities.map(city => (
                <motion.div key={city.name} variants={staggerItem} className="group relative h-48 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                    <h3 className="font-display text-lg text-soft-white">{city.name}</h3>
                    <p className="font-body text-xs text-champagne-gold">{city.count} venues</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-3xl text-rich-black">Featured venues</h2>
              <span className="font-body text-sm text-on-surface-variant hidden md:block">{featuredVenues.length} hand-picked venues</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVenues.map((venue, i) => (
                <motion.div key={venue.id} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-soft-white border border-charcoal/5 overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${venue.image})` }} />
                    <div className="absolute top-3 left-3 bg-red-800 text-soft-white font-display text-xs px-3 py-1">Christmas</div>
                    <div className="absolute top-3 right-3 bg-rich-black/80 text-champagne-gold font-display text-xs px-3 py-1">{venue.capacity}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-rich-black mb-2">{venue.name}</h3>
                    <p className="font-body text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin className="w-3.5 h-3.5 shrink-0" />{venue.location}</p>
                    <p className="font-body text-sm text-on-surface-variant mb-4 leading-relaxed">{venue.description}</p>
                    <div className="border-t border-charcoal/10 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {venue.highlights.map((h, j) => (
                          <span key={j} className="font-body text-xs bg-red-800/10 text-red-800 px-2 py-0.5">{h}</span>
                        ))}
                      </div>
                    </div>
                    <Link to={`/venue/${venue.id}`} className="mt-4 inline-flex items-center gap-1 font-display text-sm text-rich-black hover:text-champagne-gold transition-colors">
                      Explore venue <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-red-800 font-display text-xs uppercase tracking-[0.3em] mb-4"><Sparkles className="w-4 h-4" /> Planning your Christmas party</span>
              <h2 className="font-display text-3xl text-rich-black mb-3">Christmas party planning tips</h2>
              <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">Make your festive celebration unforgettable with these expert tips from our venue specialists.</p>
            </div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map(tip => (
                <motion.div key={tip.title} variants={staggerItem} className="p-6 bg-soft-white border border-charcoal/5 text-center group hover:border-red-800/20 transition-colors">
                  <div className="w-14 h-14 bg-red-800/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-red-800/20 transition-colors">
                    <tip.icon className="w-6 h-6 text-red-800" />
                  </div>
                  <h3 className="font-display text-lg text-rich-black mb-3">{tip.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-display text-xs uppercase tracking-[0.3em] mb-4"><Calendar className="w-4 h-4" /> Christmas party FAQs</span>
              <h2 className="font-display text-3xl text-rich-black mb-3">Frequently asked questions</h2>
              <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">Everything you need to know about booking the perfect Christmas party venue.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="group border border-charcoal/5 bg-soft-white overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-display text-lg text-rich-black hover:text-red-800 transition-colors list-none">
                    {faq.q}
                    <span className="text-red-800 text-xs transition-transform group-open:rotate-180">▼</span>
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
              <Sparkles className="w-10 h-10 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl text-soft-white mb-4">Free concierge to find the perfect venue</h2>
              <p className="font-body text-base text-white/60 max-w-2xl mx-auto mb-8">With over 30 years of experience, our dedicated concierge team will match you with the perfect Christmas party venues — from grand ballrooms to intimate dining rooms — tailored to your style, guest list, and budget. Every confirmed booking earns SquareMeal Rewards points.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
                <a href="mailto:concierge@squaremeal.co.uk" className="inline-flex items-center gap-2 text-soft-white font-body text-base hover:text-champagne-gold transition-colors"><span className="text-champagne-gold">✉</span> concierge@squaremeal.co.uk</a>
                <span className="hidden sm:block text-white/20">|</span>
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
