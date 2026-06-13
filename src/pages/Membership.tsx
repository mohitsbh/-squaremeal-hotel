import { motion } from 'framer-motion'
import { SEO } from '@/components/shared/SEO'
import { MembershipCTA } from '@/components/home/MembershipCTA'
import { Testimonials } from '@/components/home/Testimonials'
import { fadeInUp } from '@/animations'

export default function Membership() {
  return (
    <>
      <SEO title="Premium Membership" description="Join the UK's most exclusive dining membership. Unlock VIP reservations and curated experiences." />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mb-16"
        >
          <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4 block">
            Membership
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">
            The Art of Exclusive Dining
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            Join an intimate community of discerning diners who value access, 
            curation, and unforgettable experiences. Our members enjoy priority 
            reservations at the world&apos;s most coveted tables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              tier: 'Concierge',
              price: '£199',
              period: '/year',
              features: [
                'Priority booking at 200+ restaurants',
                'Exclusive member-only events',
                'Personal concierge service',
                'Digital membership card',
              ],
            },
            {
              tier: 'Epicurean',
              price: '£499',
              period: '/year',
              features: [
                'Everything in Concierge',
                'Guaranteed tables at sold-out venues',
                'Chef&apos;s table access',
                'Annual tasting menu experience',
                'VIP event invitations',
              ],
              popular: true,
            },
            {
              tier: 'Gourmand',
              price: '£999',
              period: '/year',
              features: [
                'Everything in Epicurean',
                'Dedicated account manager',
                'Bespoke dining experiences',
                'Private chef consultations',
                'International dining access',
                'Hotel partnership benefits',
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={plan.tier}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-soft-white border p-8 md:p-10 ${
                (plan as any).popular
                  ? 'border-champagne-gold shadow-lg shadow-champagne-gold/5'
                  : 'border-charcoal/5'
              }`}
            >
              {(plan as any).popular && (
                <span className="absolute -top-3 left-8 bg-champagne-gold text-rich-black px-4 py-1 font-label-sm text-[10px] uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl text-rich-black mb-2">{plan.tier}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-4xl text-champagne-gold">{plan.price}</span>
                <span className="font-body text-sm text-on-surface-variant">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm text-on-surface-variant">
                    <span className="text-champagne-gold mt-0.5">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 font-label-sm text-xs uppercase tracking-widest transition-colors ${
                  (plan as any).popular
                    ? 'bg-champagne-gold text-rich-black hover:bg-subtle-gold'
                    : 'border border-rich-black text-rich-black hover:bg-rich-black hover:text-soft-white'
                }`}
              >
                Choose {plan.tier}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Testimonials />
      <MembershipCTA />
    </motion.div>
    </>
  )
}
