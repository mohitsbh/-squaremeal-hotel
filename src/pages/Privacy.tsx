import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp } from '@/animations'

const sections = [
  {
    title: 'Information We Collect',
    content: 'When you create an account, book a restaurant, or use our services, we collect information including your name, email address, phone number, payment card information (via our PCI-compliant partner Fidel), dining preferences, and booking history. We also collect anonymised usage data to improve our platform.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use your information to process restaurant bookings, facilitate SquareMeal Rewards points collection and redemption, send booking confirmations and reminders, provide personalised restaurant recommendations, and improve our services. We never sell your personal data to third parties.',
  },
  {
    title: 'Card-Linking Technology',
    content: 'SquareMeal Rewards uses card-linking technology approved by Visa, Mastercard and Amex. Our partner Fidel provides a PCI-compliant environment for processing transactions. We only see transaction amounts at participating restaurants and never take payment from your card.',
  },
  {
    title: 'Data Protection',
    content: 'We implement appropriate technical and organisational measures to protect your personal data. Your information is stored securely and we follow industry best practices for data encryption and access control.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal data at any time. You can manage your preferences through your account settings or by contacting us. You may also opt out of marketing communications at any time.',
  },
  {
    title: 'Cookies',
    content: 'We use cookies and similar technologies to enhance your browsing experience, analyse site traffic, and personalise content. You can control cookie preferences through your browser settings.',
  },
]

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="SquareMeal's privacy policy. Learn how we collect, use, and protect your personal data when you use our restaurant booking and rewards services." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">Privacy Policy</h1>
            <p className="font-body text-lg text-on-surface-variant mb-4">Last updated: January 2026</p>
            <p className="font-body text-base text-on-surface-variant">SquareMeal takes your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
          </motion.div>

          <div className="space-y-8 mb-16">
            {sections.map(s => (
              <motion.div key={s.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-soft-white border border-charcoal/5 p-8">
                <h2 className="font-display text-xl text-rich-black mb-4">{s.title}</h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-ivory border border-charcoal/5 p-10">
            <h2 className="font-display text-2xl text-rich-black mb-4">Contact Our Data Protection Team</h2>
            <p className="font-body text-sm text-on-surface-variant mb-4">If you have questions about this policy or wish to exercise your data rights, please contact us:</p>
            <p className="font-body text-sm text-champagne-gold">privacy@squaremeal.co.uk</p>
            <p className="font-body text-sm text-on-surface-variant mt-2">SquareMeal, 7-9 Rathbone Street, London, W1T 1NA</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
