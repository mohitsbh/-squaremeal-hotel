import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gift, CreditCard, Utensils, Star, ArrowRight, Smartphone, CheckCircle } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'

const steps = [
  { icon: CreditCard, title: 'Link your card', desc: 'Simply register any of your debit or credit cards to your SquareMeal account. We use PCI-compliant card-linking technology with our partner Fidel.' },
  { icon: Utensils, title: 'Dine out', desc: 'Automatically receive points every time you dine at a participating restaurant. No codes, no vouchers to present — just pay as normal.' },
  { icon: Gift, title: 'Earn points', desc: '100 points = £1. Earn 100 points per restaurant booking, 400 per venue, 25 for leaving a review, and bonus points through exclusive offers.' },
  { icon: Star, title: 'Redeem rewards', desc: 'Exchange points for restaurant vouchers or shop at the SquareMeal Rewards Shop for products from Le Creuset, Smeg, Nespresso, KitchenAid and more.' },
]

const earnWays = [
  'Join SquareMeal Rewards = 100 points',
  'Link a debit or credit card = 100 points',
  'Book a restaurant = 100 points',
  'Dine at a restaurant = 100 to 3,000+ points',
  'Leave a review = 25 points',
  'Confirm your booking = 500 points',
]

export default function Rewards() {
  return (
    <>
      <SEO title="SquareMeal Rewards" description="SquareMeal Rewards is the restaurant loyalty scheme that rewards diners for eating at their favourite restaurants. Earn points every time you dine out." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <section className="relative py-24 md:py-32 overflow-hidden bg-rich-black">
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 50%, #C9A86A 0%, transparent 60%), radial-gradient(circle at 70% 50%, #C9A86A 0%, transparent 40%)' }} />
          <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 text-center">
            <div className="inline-flex items-center gap-2 bg-champagne-gold/10 border border-champagne-gold/20 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.2em] px-4 py-2 mb-6"><Gift className="w-3 h-3" /> Rewards Program</div>
            <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">SquareMeal Rewards</h1>
            <p className="font-body text-lg text-soft-white/60 max-w-2xl mx-auto mb-10">A generous restaurant loyalty scheme that rewards you every time you dine out. Your points can be exchanged for restaurant vouchers and luxury gifts.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sign-in" className="inline-flex items-center gap-2 bg-champagne-gold text-rich-black font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-champagne-gold/90 transition-colors">Join now, it's free <ArrowRight className="w-4 h-4" /></Link>
              <a href="#" className="inline-flex items-center gap-2 border border-soft-white/30 text-soft-white font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-soft-white hover:text-rich-black transition-colors"><Smartphone className="w-4 h-4" /> Download the app</a>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-[1440px] mx-auto px-5 md:px-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map(s => (
              <motion.div key={s.title} variants={staggerItem} className="text-center">
                <div className="w-16 h-16 bg-champagne-gold/10 flex items-center justify-center mx-auto mb-5"><s.icon className="w-7 h-7 text-champagne-gold" /></div>
                <h3 className="font-display text-lg text-rich-black mb-2">{s.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 bg-ivory">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl text-rich-black mb-6">How to collect points</h2>
                <p className="font-body text-base text-on-surface-variant mb-8">SquareMeal will never take payment from your card. We only see the transaction amounts you make at one of our participating restaurants and we keep your data secure, in a PCI-compliant environment with our partner Fidel.</p>
                <div className="text-5xl font-display text-champagne-gold mb-8">100 points = £1</div>
              </div>
              <div className="space-y-4">
                {earnWays.map(w => (
                  <div key={w} className="flex items-center gap-3 bg-soft-white p-4 border border-charcoal/5">
                    <CheckCircle className="w-5 h-5 text-champagne-gold flex-shrink-0" />
                    <span className="font-body text-sm text-rich-black">{w}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 max-w-[1440px] mx-auto px-5 md:px-20 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl text-rich-black mb-4">Ready to start enjoying rewards?</h2>
            <p className="font-body text-base text-on-surface-variant mb-8 max-w-xl mx-auto">Join SquareMeal Rewards today and earn points every time you dine out. It's completely free to sign up.</p>
            <Link to="/sign-in" className="inline-flex items-center gap-2 bg-rich-black text-soft-white font-label-sm text-xs uppercase tracking-widest px-8 py-4 hover:bg-charcoal transition-colors">Join now <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </section>
      </motion.div>
    </>
  )
}
