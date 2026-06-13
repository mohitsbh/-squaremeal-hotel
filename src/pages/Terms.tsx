import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp } from '@/animations'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing and using SquareMeal.co.uk, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.',
  },
  {
    title: 'Restaurant Bookings',
    content: 'SquareMeal provides a platform for discovering and booking restaurants. While we strive to ensure accuracy, restaurant details including menus, prices, and availability are provided by the restaurants themselves. We recommend confirming details directly with the restaurant for important occasions.',
  },
  {
    title: 'SquareMeal Rewards',
    content: 'Rewards points are earned at participating restaurants and have no cash value. Points are credited automatically when you dine using a registered card. 100 points = £1 in voucher value. Points expire after 12 months of account inactivity. SquareMeal reserves the right to modify or terminate the Rewards program with reasonable notice.',
  },
  {
    title: 'Gift Vouchers',
    content: 'SquareMeal gift vouchers are redeemable at participating restaurants only. Vouchers are non-refundable and cannot be exchanged for cash. Voucher credit is typically processed within 3-7 days after dining. Full terms are available on our Gift Vouchers page.',
  },
  {
    title: 'User Accounts',
    content: 'You are responsible for maintaining the confidentiality of your account credentials. You must be at least 18 years old to create an account. SquareMeal reserves the right to suspend or terminate accounts that violate these terms.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content on SquareMeal.co.uk, including reviews, photographs, logos, and editorial material, is the property of SquareMeal or its content providers. Reproduction without permission is prohibited.',
  },
  {
    title: 'Limitation of Liability',
    content: 'SquareMeal acts as an intermediary between diners and restaurants. We are not liable for any issues arising from your dining experience, including but not limited to food quality, service, or pricing disputes. Our liability is limited to the value of any transaction processed through our platform.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to update these terms at any time. Users will be notified of material changes via email or website notice. Continued use of the platform after changes constitutes acceptance of the updated terms.',
  },
]

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="SquareMeal terms and conditions for restaurant bookings, Rewards loyalty program, gift vouchers, and website usage." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">Terms & Conditions</h1>
            <p className="font-body text-lg text-on-surface-variant mb-4">Last updated: January 2026</p>
            <p className="font-body text-base text-on-surface-variant">These terms govern your use of SquareMeal.co.uk and all services provided by SquareMeal including restaurant bookings, Rewards, and gift vouchers.</p>
          </motion.div>

          <div className="space-y-6 mb-16">
            {sections.map(s => (
              <motion.div key={s.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-soft-white border border-charcoal/5 p-8">
                <h2 className="font-display text-xl text-rich-black mb-4">{s.title}</h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-ivory border border-charcoal/5 p-10">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-champagne-gold mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-display text-xl text-rich-black mb-2">Questions About These Terms?</h2>
                <p className="font-body text-sm text-on-surface-variant">Contact our legal team at <span className="text-champagne-gold">legal@squaremeal.co.uk</span> or write to us at SquareMeal, 7-9 Rathbone Street, London, W1T 1NA.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
