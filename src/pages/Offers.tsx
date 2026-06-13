import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Tag, Gift, ArrowRight, Clock, Percent, Star } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'

const offers = [
  { icon: Clock, title: 'Mid-Week Dining Deals', desc: 'Earn bonus points for dining off-peak with exclusive mid-week offers at hundreds of restaurants across the UK.' },
  { icon: Percent, title: 'Set Menu Offers', desc: 'Fixed-price menus at top restaurants — from pre-theatre dining to Sunday roasts, all at exceptional value.' },
  { icon: Star, title: 'New Restaurant Bonus', desc: 'Extra points for trying somewhere new. Discover recently added restaurants and earn bonus rewards on your first visit.' },
  { icon: Gift, title: 'Weekend Brunch Offers', desc: 'Bottomless brunch deals across the UK. Enjoy unlimited drinks and stylish brunch menus at London\'s best spots and beyond.' },
  { icon: Tag, title: 'Group Dining Discounts', desc: 'Special rates for parties of 6 or more. Celebrate with friends and family while saving on your group dining experience.' },
  { icon: Clock, title: 'Early Bird Specials', desc: 'Discounted early evening dining at leading restaurants. Book before 7pm and enjoy significant savings on à la carte menus.' },
]

const steps = [
  { icon: Gift, title: 'Sign up', desc: 'Create your free SquareMeal account and join the Rewards program in seconds.' },
  { icon: Star, title: 'Dine out', desc: 'Book and dine at any participating restaurant to unlock exclusive offers and deals.' },
  { icon: Tag, title: 'Earn rewards', desc: 'Collect points with every meal and redeem them for vouchers, gifts, and more.' },
]

export default function Offers() {
  return (
    <>
      <SEO title="Restaurant Offers &amp; Deals" description="Discover the best restaurant offers and deals across the UK. From set menus to mid-week dining, earn rewards every time you dine with SquareMeal." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <section className="relative py-24 md:py-32 overflow-hidden bg-rich-black">
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 50%, #C9A86A 0%, transparent 60%), radial-gradient(circle at 70% 50%, #C9A86A 0%, transparent 40%)' }} />
          <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 text-center">
            <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-6"><Tag className="w-3 h-3" /> Offers &amp; Deals</div>
            <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Restaurant offers and deals</h1>
            <p className="font-body text-lg text-soft-white/60 max-w-2xl mx-auto mb-10">From special dinners to set menu offers and mid-week dining deals, discover incredible value at the UK's best restaurants.</p>
            <Link to="/rewards" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-champagne-gold/90 transition-colors">Explore deals <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

        <section className="py-20 bg-ivory">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl text-rich-black mb-4">SquareMeal Rewards</h2>
              <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">By signing up to SquareMeal Rewards you can collect points every time you dine. Every booking, every meal, every review brings you closer to your next reward.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map(o => (
                <motion.div key={o.title} variants={staggerItem} className="bg-soft-white border border-charcoal/5 p-8 hover:border-champagne-gold/30 transition-colors group">
                  <div className="w-12 h-12 bg-champagne-gold/10 flex items-center justify-center mb-5 group-hover:bg-champagne-gold/20 transition-colors"><o.icon className="w-6 h-6 text-champagne-gold" /></div>
                  <h3 className="font-display text-lg text-rich-black mb-2">{o.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{o.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 max-w-[1440px] mx-auto px-5 md:px-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl text-rich-black mb-4">How it works</h2>
            <p className="font-body text-base text-on-surface-variant max-w-xl mx-auto">Getting started with SquareMeal Rewards is simple. Sign up, dine out, and start earning.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={staggerItem} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-rich-black flex items-center justify-center mx-auto mb-5"><s.icon className="w-7 h-7 text-champagne-gold" /></div>
                  <div className="absolute -top-2 -right-2 md:-right-4 w-8 h-8 bg-champagne-gold flex items-center justify-center text-xs font-display text-rich-black font-bold">{i + 1}</div>
                </div>
                <h3 className="font-display text-lg text-rich-black mb-2">{s.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 bg-rich-black text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-5 md:px-20">
            <h2 className="font-display text-3xl md:text-4xl text-soft-white mb-4">Ready to start saving?</h2>
            <p className="font-body text-base text-soft-white/60 mb-8 max-w-xl mx-auto">Join SquareMeal Rewards for free and unlock exclusive restaurant offers, deals, and dining rewards across the UK.</p>
            <Link to="/rewards" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-champagne-gold/90 transition-colors">Join SquareMeal Rewards <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </section>
      </motion.div>
    </>
  )
}
