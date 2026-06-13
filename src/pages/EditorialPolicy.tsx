import { motion } from 'framer-motion'
import { BookOpen, Shield, Star, Users, Award, PenTool, Heart, MapPin } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'

const policies = [
  {
    icon: PenTool,
    title: 'Independent Reviews',
    desc: 'For almost 30 years, SquareMeal has been the UK\'s leading independent restaurant commentator. Our team of independent critics, aided by comments from thousands of restaurant customers, produces honest and unbiased reviews of over 7,500 London and UK restaurants and bars. We do not accept payment for reviews — every review is written without commercial influence.',
  },
  {
    icon: Star,
    title: 'Top 100 Lists Methodology',
    desc: 'Our annual Top 100 Restaurants lists combine in-house professional critic assessments with feedback from thousands of readers, creating rankings shaped by both expert opinion and real-world dining experiences. SquareMeal is the only UK publication that creates two separate lists for London and the UK.',
  },
  {
    icon: Shield,
    title: 'Editorial Independence',
    desc: 'The editorial team operates independently from all commercial partnerships. No restaurant can pay for a positive review, inclusion in our lists, or award recognition. Sponsored content and advertising are clearly labelled to maintain complete transparency with our readers.',
  },
  {
    icon: Users,
    title: 'Community & Reader Reviews',
    desc: 'SquareMeal\'s community of high-spend restaurant goers is unequalled in the UK. Our active pre-registered member database contributes thousands of diner reviews that help shape our editorial recommendations. Every registered user can submit reviews of restaurants they have visited.',
  },
  {
    icon: Award,
    title: 'Awards & Recognition',
    desc: 'SquareMeal presents three annual awards: UK Top 100 Restaurants, London Top 100 Restaurants, and the AYALA SquareMeal Female Chef of the Year. Our awards combine professional assessments with feedback from thousands of readers, celebrating culinary excellence across all price points.',
  },
  {
    icon: BookOpen,
    title: 'Accuracy & Corrections',
    desc: 'We strive for accuracy in all our content across print, mobile and online platforms. If you believe we have made an error, please contact editorial@squaremeal.co.uk. We are committed to correcting any inaccuracies promptly and transparently. Review removal requests should be submitted via the contact form on our website.',
  },
  {
    icon: Heart,
    title: 'Charitable Commitment',
    desc: 'SquareMeal supports the homeless charity StreetSmart, an initiative supported by Stephen Fry, Angela Hartnett, Marcus Wareing, Jason Atherton, and Fergus Henderson. Through our platform we help raise funds and awareness for this vital cause.',
  },
  {
    icon: MapPin,
    title: 'About SquareMeal',
    desc: 'Founded in 1989 by Mark de Wesselow and Simon White, SquareMeal operated for decades as the UK\'s leading print restaurant guide before closing all print titles in 2020 to become a fully digital platform. We are the major provider of à la carte restaurant bookings — users make reservations by telephone, email and online booking, with the annual value of reservations exceeding £150m. SquareMeal is operated by Monomax Limited (Company No. 2554719), registered in England and Wales. Registered office: Quadrant House, Fifth Floor, 250 Kennington Lane, London SE11 5RD.',
  },
]

export default function EditorialPolicy() {
  return (
    <>
      <SEO title="Editorial Policy" description="SquareMeal's editorial policy: independent restaurant reviews, Top 100 lists methodology, awards, and commitment to honest, unbiased food criticism since 1989." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">Editorial Policy</h1>
            <p className="font-body text-lg text-on-surface-variant">SquareMeal has been the UK's leading independent restaurant commentator for almost 30 years. Our editorial standards — independence, honesty, and integrity — are the foundation of everything we do.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map(p => (
              <motion.div key={p.title} variants={staggerItem} className="bg-soft-white border border-charcoal/5 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-champagne-gold/10 flex items-center justify-center"><p.icon className="w-6 h-6 text-champagne-gold" /></div>
                  <h2 className="font-display text-xl text-rich-black">{p.title}</h2>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 p-10 bg-ivory border border-charcoal/5">
            <h2 className="font-display text-2xl text-rich-black mb-4">Contact Our Editorial Team</h2>
            <p className="font-body text-sm text-on-surface-variant mb-4">If you have questions about our editorial policy or wish to submit a correction, please contact us:</p>
            <p className="font-body text-sm text-champagne-gold">editorial@squaremeal.co.uk</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
