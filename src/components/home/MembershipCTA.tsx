import { motion } from 'framer-motion'
import { ArrowRight, Crown, Calendar, Star, Bell } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Button } from '@/components/ui/button'

const perks = [
  {
    icon: Star,
    title: 'Exclusive Access',
    description: 'Priority reservations at the most sought-after tables',
  },
  {
    icon: Calendar,
    title: 'VIP Booking',
    description: 'Book up to 90 days in advance, before the public',
  },
  {
    icon: Bell,
    title: 'Early Notifications',
    description: 'First to know about limited-release dining experiences',
  },
]

export function MembershipCTA() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-20 bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-rich-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#C9A86A_0%,_transparent_50%)]"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:p-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-6">
                <Crown className="w-4 h-4" />
                Premium Membership
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-soft-white mb-6 leading-tight">
                Elevate Every
                <br />
                Experience
              </h2>
              <p className="font-body text-lg text-surface-variant/60 mb-10 max-w-md leading-relaxed">
                Join the UK&apos;s most exclusive dining membership. Unlock VIP reservations,
                curated experiences, and unparalleled access to the finest restaurants.
              </p>
              <Button variant="secondary" size="xl">
                Become a Member
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {perks.map((perk) => (
                <motion.div
                  key={perk.title}
                  variants={staggerItem}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-champagne-gold/10 flex items-center justify-center flex-shrink-0">
                    <perk.icon className="w-5 h-5 text-champagne-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-soft-white mb-1">
                      {perk.title}
                    </h3>
                    <p className="font-body text-sm text-surface-variant/60">
                      {perk.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
