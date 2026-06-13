import { motion } from 'framer-motion'
import { HelpCircle, CreditCard, Gift, Star, Phone } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer } from '@/animations'

const categories = [
  {
    title: 'Restaurant Bookings',
    icon: Star,
    questions: [
      { q: 'How do I book a restaurant through SquareMeal?', a: 'Simply search for your desired restaurant, cuisine or location, select your preferred date and time, and complete the booking. You\'ll receive an instant confirmation email. Booking through SquareMeal earns you Rewards Points.' },
      { q: 'Can I cancel or modify a booking?', a: 'Cancellation and modification policies vary by restaurant. Please check the terms at the time of booking or contact the restaurant directly. You can manage bookings through your SquareMeal account.' },
      { q: 'How do I earn and use Rewards Points?', a: 'Earn 100 points per restaurant booking and 400 points per venue booking. 100 points = £1 in voucher value. Points are credited automatically when you dine using a registered card at participating restaurants. Points expire after 12 months of account inactivity.' },
    ],
  },
  {
    title: 'Gift Vouchers',
    icon: Gift,
    questions: [
      { q: 'How do gift vouchers work?', a: 'Purchase an e-voucher, select the amount and delivery date. The recipient creates a SquareMeal account using the same email, links their payment card, and dines at any of 650+ participating restaurants. After dining, the voucher value is credited back to their card via secure Revolut link.' },
      { q: 'How long are vouchers valid and when can they be used?', a: 'Vouchers are valid from 72 hours after purchase and expire 12 months from the purchase date. They can be delivered immediately or scheduled for a future date.' },
      { q: 'Can I buy vouchers with Rewards Points?', a: 'Yes, gift vouchers can be purchased with cash or SquareMeal Rewards Points. Simply select your payment method at checkout.' },
    ],
  },
  {
    title: 'SquareMeal Rewards',
    icon: CreditCard,
    questions: [
      { q: 'How do I collect Rewards Points?', a: 'Make a booking through SquareMeal and dine at the restaurant. Ensure the payment card used is linked to your SquareMeal account. The card-linking technology (approved by Visa, Mastercard, Amex) automatically matches your transaction and credits points.' },
      { q: 'How do I redeem my Rewards Points?', a: 'Points can be exchanged for SquareMeal vouchers, which can be spent at 650+ participating restaurants or at the SquareMeal Rewards Shop for products from Le Creuset, Smeg, Nespresso, KitchenAid, and more.' },
      { q: 'What is the SquareMeal Rewards Shop?', a: 'The Rewards Shop offers a curated selection of culinary products and kitchen must-haves. Shop with SquareMeal vouchers for free UK mainland delivery. Categories include Cookware, Electrical Appliances, Glassware, and Tableware.' },
    ],
  },
]

export default function FAQs() {
  return (
    <>
      <SEO title="Frequently Asked Questions" description="Find answers to common questions about SquareMeal restaurant bookings, gift vouchers, Rewards loyalty program and more." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative bg-rich-black py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">Frequently Asked Questions</h1>
              <p className="font-body text-lg text-white/70">Everything you need to know about SquareMeal bookings, gift vouchers, and Rewards.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-16">
            {categories.map(cat => (
              <motion.div key={cat.title} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-8">
                  <cat.icon className="w-6 h-6 text-champagne-gold" />
                  <h2 className="font-display text-2xl md:text-3xl text-rich-black">{cat.title}</h2>
                </div>
                <div className="space-y-4">
                  {cat.questions.map(faq => (
                    <details key={faq.q} className="group border border-charcoal/5 bg-soft-white rounded-sm overflow-hidden">
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
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 p-10 md:p-14 bg-rich-black text-center">
            <HelpCircle className="w-10 h-10 text-champagne-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl text-soft-white mb-2">Still Have Questions?</h2>
            <p className="font-body text-base text-white/60 mb-8 max-w-xl mx-auto">Our support team is here to help. Contact us and we'll get back to you within 24 hours.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
              <a href="tel:02075820222" className="flex items-center gap-2 text-white/80 hover:text-champagne-gold transition-colors"><Phone className="w-4 h-4 text-champagne-gold" /> 020 7582 0222</a>
              <span className="hidden md:block text-white/20">|</span>
              <span className="text-white/80">Mon–Fri, 9AM–4PM</span>
              <span className="hidden md:block text-white/20">|</span>
              <a href="mailto:support@squaremeal.co.uk" className="text-champagne-gold hover:underline">support@squaremeal.co.uk</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
