import { motion } from 'framer-motion'
import { Gift, CreditCard, Star, ShoppingBag, ArrowRight, Palette, DollarSign, User, CheckCircle, ChevronDown, Phone } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Button } from '@/components/ui/button'

const steps = [
  { icon: Palette, title: 'Choose Design', desc: 'Select from multiple beautiful gift voucher designs.' },
  { icon: DollarSign, title: 'Choose Amount', desc: '£50, £100, £150, £200, £500 max, or enter a custom amount.' },
  { icon: User, title: 'Personalise Voucher', desc: 'Add recipient name, email, personal message, and send date.' },
  { icon: CheckCircle, title: 'Your Details & Payment', desc: 'Pay with cash or SquareMeal Rewards Points. Delivered by email.' },
]

const products = [
  { name: 'Sophie Allport Stoneware Bees Nibble Bowl', price: '£19.99', brand: 'Sophie Allport', category: 'Tableware', image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400' },
  { name: 'Sophie Allport Bees Linen Double Oven Glove', price: '£40.99', brand: 'Sophie Allport', category: 'Cookware', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400' },
  { name: 'LSA Bar Whisky Set 1.6L/250ml', price: '£159.99', brand: 'LSA', category: 'Glassware', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400' },
  { name: 'Le Creuset Stoneware 350ml Mug', price: '£23.99', brand: 'Le Creuset', category: 'Tableware', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400' },
]

const brands = ['Le Creuset', 'Smeg', 'Nespresso', 'KitchenAid', 'Sophie Allport', 'LSA']

const faqs = [
  { q: 'How do gift vouchers work?', a: 'Purchase an e-voucher and the recipient creates a SquareMeal account, links their payment card, then dines at any participating restaurant. After paying with their linked card, the voucher value is credited back to their card via a secure Revolut link.' },
  { q: 'Where can I use my voucher?', a: 'At over 650 participating restaurants and bars across the UK, from Michelin-starred restaurants to cosy independent eateries.' },
  { q: 'How long are vouchers valid?', a: 'Vouchers are valid for 12 months from the purchase date and can be used from 72 hours after purchase.' },
  { q: 'Can I use my voucher with Rewards Points?', a: 'Yes, vouchers can be purchased with cash or SquareMeal Rewards Points.' },
  { q: 'When will the voucher be delivered?', a: 'The e-voucher is delivered by email immediately on purchase or on your selected send date.' },
  { q: 'How long does voucher credit take?', a: 'Credit is typically applied within 3-7 days, but can take up to 14 days. SquareMeal credits the amount via a secure Revolut link.' },
]

export default function GiftVouchers() {
  return (
    <>
      <SEO title="Restaurant Gift Vouchers" description="Give the gift of incredible dining with SquareMeal Restaurant Gift Vouchers. Redeemable at over 650 top UK restaurants and bars. The perfect gift for food lovers." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-rich-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2070')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/60 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-5 md:px-20 max-w-[1440px] mx-auto">
            <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="inline-block font-body text-xs uppercase tracking-[0.2em] text-champagne-gold mb-4">SquareMeal Gift Vouchers</motion.span>
            <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="font-display text-4xl md:text-6xl lg:text-7xl text-soft-white mb-4 max-w-3xl">The Ultimate Restaurant Gift</motion.h1>
            <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="font-body text-lg md:text-xl text-white/60 max-w-2xl mb-8">Redeemable at over 650 top UK restaurants and bars — from Michelin-starred to cosy independent eateries.</motion.p>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">Buy a Gift Voucher <ArrowRight className="ml-2 w-4 h-4" /></Button>
              <Button variant="outline" size="lg" className="border-white/20 text-soft-white hover:bg-white/10">Corporate Gifting</Button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-champagne-gold">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl text-rich-black mt-3 mb-4">Four Simple Steps</h2>
            <p className="font-body text-base text-on-surface-variant max-w-xl mx-auto">Choose a design, set your amount, personalise with a message, and pay. The e-voucher is delivered by email on your selected date.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {steps.map((step, i) => (
              <motion.div key={step.title} variants={staggerItem} className="text-center group">
                <div className="relative w-20 h-20 bg-rich-black flex items-center justify-center mx-auto mb-5 group-hover:bg-champagne-gold transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-soft-white group-hover:text-rich-black transition-colors duration-300" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-champagne-gold text-rich-black font-display text-sm flex items-center justify-center">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg text-rich-black mb-2">{step.title}</h3>
                <p className="font-body text-sm text-on-surface-variant">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-rich-black p-10 md:p-16 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-champagne-gold">Smart Technology</span>
                <h2 className="font-display text-3xl text-soft-white mt-3 mb-4">Card-Linking Technology</h2>
                <p className="font-body text-base text-white/60 mb-6">Approved by Visa, Mastercard, and Amex. The recipient links their payment card to their SquareMeal account. After dining at a participating restaurant, the voucher value is credited back to their card via Revolut. No QR codes, no discount codes — just seamless dining.</p>
                <ul className="space-y-3 mb-8">
                  {['Approved by Visa, Mastercard & Amex', 'Automatic credit via secure Revolut link', 'No codes or vouchers to present at restaurants', 'Valid 12 months from purchase, usable after 72 hours'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-white/60 font-body text-sm">
                      <CheckCircle className="w-4 h-4 text-champagne-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="lg">Learn More</Button>
              </div>
              <div className="flex-1">
                <img loading="lazy" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600" alt="Card payment" className="w-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="text-center mb-12">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-champagne-gold">Rewards Shop</span>
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mt-3 mb-4">Shop with SquareMeal</h2>
              <p className="font-body text-base text-on-surface-variant max-w-xl mx-auto">Use your SquareMeal vouchers at the Rewards Shop. Browse premium brands including Le Creuset, Smeg, Nespresso, KitchenAid, Sophie Allport and LSA.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {brands.map(brand => (
                <span key={brand} className="font-body text-sm uppercase tracking-wider px-5 py-2 border border-charcoal/10 text-on-surface-variant">{brand}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {products.map(product => (
                <motion.div key={product.name} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group cursor-pointer">
                  <div className="bg-ivory mb-4 overflow-hidden aspect-square">
                    <img loading="lazy" src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="font-body text-xs uppercase tracking-wider text-champagne-gold mb-1">{product.brand}</p>
                  <h3 className="font-display text-base text-rich-black mb-1">{product.name}</h3>
                  <p className="font-body text-sm text-on-surface-variant">{product.price}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-6 text-sm font-body text-on-surface-variant">
              <span>Free UK mainland shipping</span>
              <span className="text-charcoal/20">|</span>
              <span>30-day return policy</span>
              <span className="text-charcoal/20">|</span>
              <span>Categories: Cookware, Electrical Appliances, Glassware, Tableware</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <div className="text-center mb-12">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-champagne-gold">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl text-rich-black mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map(faq => (
                <details key={faq.q} className="group border border-charcoal/5 bg-ivory">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-display text-base text-rich-black hover:text-champagne-gold transition-colors">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-champagne-gold transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-rich-black p-10 md:p-16 text-center">
            <h2 className="font-display text-3xl text-soft-white mb-4">Corporate Gifting</h2>
            <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-6">Looking to reward employees or impress clients? We offer bespoke corporate gifting solutions for businesses of all sizes.</p>
            <div className="flex items-center justify-center gap-3 text-soft-white mb-6">
              <Phone className="w-5 h-5 text-champagne-gold" />
              <span className="font-display text-lg">020 7840 5222</span>
            </div>
            <Button variant="primary" size="lg">Enquire Now <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
