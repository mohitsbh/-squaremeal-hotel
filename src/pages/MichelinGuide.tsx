import { motion } from 'framer-motion'
import { Star, Award, Medal, ChefHat, UtensilsCrossed } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'

const michelinStats = [
  { label: 'Three Stars', count: '10', desc: 'Exceptional cuisine worth a special journey' },
  { label: 'Two Stars', count: '28', desc: 'Excellent cooking, worth a detour' },
  { label: 'One Star', count: '192', desc: 'High quality cooking, worth a stop' },
  { label: 'Bib Gourmand', count: '168', desc: 'Good food at moderate prices' },
]

const threeStarRestaurants = [
  { name: 'Restaurant Gordon Ramsay', location: 'Chelsea, London', chef: 'Clare Smyth', cuisine: 'French' },
  { name: 'Core by Clare Smyth', location: 'Notting Hill, London', chef: 'Clare Smyth', cuisine: 'Modern British' },
  { name: 'The Ledbury', location: 'Notting Hill, London', chef: 'Brett Graham', cuisine: 'Modern British' },
  { name: 'Sketch (Lecture Room & Library)', location: 'Mayfair, London', chef: 'Pierre Gagnaire', cuisine: 'French' },
  { name: 'Hélène Darroze at The Connaught', location: 'Mayfair, London', chef: 'Hélène Darroze', cuisine: 'French' },
  { name: 'Alain Ducasse at The Dorchester', location: 'Mayfair, London', chef: 'Jean-Philippe Blondet', cuisine: 'French' },
  { name: 'Waterside Inn', location: 'Bray, Berkshire', chef: 'Alain Roux', cuisine: 'French' },
  { name: 'Fat Duck', location: 'Bray, Berkshire', chef: 'Heston Blumenthal', cuisine: 'Modern British' },
  { name: 'Restaurant Nathan Outlaw', location: 'Port Isaac, Cornwall', chef: 'Nathan Outlaw', cuisine: 'Seafood' },
  { name: 'Ynyshir', location: 'Machynlleth, Wales', chef: 'Gareth Ward', cuisine: 'Modern British' },
]

const newOneStars2026 = [
  { name: 'Legado', location: 'Shoreditch', chef: 'Nuno Mendes' },
  { name: 'Tom Brown at The Capital', location: 'Belgravia', chef: 'Tom Brown' },
  { name: 'Ambassadors Clubhouse', location: 'Mayfair', chef: 'Emmanuel Bernier' },
  { name: 'Restaurant Gordon Ramsay High', location: 'Liverpool Street', chef: 'Gordon Ramsay' },
  { name: 'Somsii by Jihun Kim', location: 'Mayfair', chef: 'Jihun Kim' },
  { name: 'Labombe by Trivet', location: 'Mayfair', chef: 'Issac McHale' },
  { name: 'Michael Caines at The Stafford', location: 'Mayfair', chef: 'Michael Caines' },
  { name: 'Kerfield Arms', location: 'Camberwell', chef: 'Tom Griffiths' },
  { name: 'Corenucopia', location: 'Chelsea', chef: 'Corey Smith' },
  { name: 'é by Rafael Cagali', location: 'Brighton', chef: 'Rafael Cagali' },
]

const newBibGourmands2026 = [
  { name: 'Cálong', location: 'Stoke Newington' },
  { name: 'Oren', location: 'Dalston' },
  { name: 'Cadet', location: 'Islington' },
  { name: 'Goodbye Horses', location: 'Islington' },
  { name: 'Singburi', location: 'Shoreditch' },
  { name: 'Canteen', location: 'Notting Hill' },
  { name: 'Café Spice Namasté', location: 'Royal Albert Dock' },
  { name: 'Akara', location: 'Borough Market' },
  { name: 'Lai Rai', location: 'Peckham' },
  { name: 'Kruk', location: 'Peckham' },
  { name: 'Tamila', location: 'Clapham' },
  { name: 'Ssam Ssam', location: 'Wimbledon' },
]

export default function MichelinGuide() {
  return (
    <>
      <SEO title="Michelin Guide Restaurants 2026" description="The definitive SquareMeal guide to Michelin-starred restaurants in Great Britain & Ireland. Complete 2026 Michelin Guide awards including three-star restaurants, new one stars, and Bib Gourmands." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[60vh] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4">
                <Star className="w-4 h-4" /> Michelin Guide 2026
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Michelin-Starred Dining</h1>
              <p className="font-body text-lg text-white/60 max-w-2xl">The definitive guide to Michelin-starred restaurants in Great Britain & Ireland. Curated by SquareMeal in partnership with The MICHELIN Guide.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {michelinStats.map(stat => (
              <motion.div key={stat.label} variants={staggerItem} className="bg-soft-white border border-charcoal/5 p-8 text-center">
                <span className="font-display text-4xl text-champagne-gold block mb-2">{stat.count}</span>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-rich-black block mb-1">{stat.label}</span>
                <span className="font-body text-xs text-on-surface-variant/60">{stat.desc}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">Three Michelin Stars</h2>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-10">
              The Michelin Guide for Great Britain & Ireland 2026 was unveiled on 9 February 2026 at the Convention Centre Dublin. All 10 Three-Michelin-Star restaurants retained their distinction. SquareMeal presents the full line-up of the finest dining establishments in the UK.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {threeStarRestaurants.map((r, i) => (
                <motion.div key={r.name} variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative overflow-hidden bg-rich-black">
                  <img loading="lazy" src={`https://images.unsplash.com/photo-${1517248135467 + (i % 5)}?w=600&h=400&fit=crop`} alt={r.name} className="w-full h-48 object-cover opacity-60 group-hover:opacity-40 transition-opacity" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop' }} />
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(3)].map((_, j) => <Star key={j} className="w-4 h-4 text-champagne-gold fill-champagne-gold" />)}
                    </div>
                    <h3 className="font-display text-xl text-soft-white mb-1">{r.name}</h3>
                    <p className="font-body text-sm text-champagne-gold/80 mb-1">{r.location}</p>
                    <p className="font-body text-xs text-white/50">Chef: {r.chef} &middot; {r.cuisine}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">New One Stars 2026</h2>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-10">
              The 2026 Michelin Guide ceremony saw 20 new restaurants awarded their first star. SquareMeal rounds up the 10 most notable new one-star additions across Great Britain & Ireland.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {newOneStars2026.map((r, i) => (
                <motion.div key={r.name} variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-soft-white border border-champagne-gold/20 p-5 text-center">
                  <Star className="w-6 h-6 text-champagne-gold fill-champagne-gold mx-auto mb-3" />
                  <h3 className="font-display text-sm text-rich-black mb-1">{r.name}</h3>
                  <p className="font-body text-xs text-on-surface-variant/70">{r.location}</p>
                  <p className="font-body text-[10px] text-on-surface-variant/50 mt-1">Chef: {r.chef}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="w-6 h-6 text-champagne-gold" />
              <h2 className="font-display text-3xl text-rich-black">New Bib Gourmands 2026</h2>
            </div>
            <p className="font-body text-base text-on-surface-variant max-w-3xl mb-10">
              The Bib Gourmand award recognises restaurants offering good quality, good value cooking. The 2026 guide introduced 12 new Bib Gourmands across the UK, highlighting the growing strength of affordable fine dining.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {newBibGourmands2026.map((r, i) => (
                <motion.div key={r.name} variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-ivory border border-champagne-gold/10 p-4 text-center">
                  <ChefHat className="w-5 h-5 text-champagne-gold mx-auto mb-2" />
                  <h3 className="font-display text-sm text-rich-black mb-1">{r.name}</h3>
                  <p className="font-body text-xs text-on-surface-variant/70">{r.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&h=400&fit=crop" alt="" className="w-full h-64 object-cover absolute inset-0 opacity-20" />
            <div className="relative bg-rich-black/90 p-12 md:p-16 text-center border border-champagne-gold/20">
              <UtensilsCrossed className="w-10 h-10 text-champagne-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl text-soft-white mb-4">About the Michelin Guide</h3>
              <p className="font-body text-sm text-white/70 max-w-3xl mx-auto leading-relaxed mb-6">
                The MICHELIN Guide is the world's most prestigious restaurant rating system. Restaurants are awarded one, two, or three stars based on five criteria: quality of products, mastery of flavour and cooking techniques, the personality of the chef in the cuisine, value for money, and consistency between visits. A Bib Gourmand is awarded for good quality, good value cooking. SquareMeal is the UK's leading independent partner, featuring every Michelin-starred restaurant alongside our own expert reviews and diner ratings.
              </p>
              <p className="font-body text-xs text-champagne-gold/60">
                For more information visit the official Michelin Guide website or contact SquareMeal at michelin@squaremeal.co.uk
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
