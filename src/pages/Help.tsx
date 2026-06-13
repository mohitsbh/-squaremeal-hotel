import { motion } from 'framer-motion'
import { BookOpen, UserPlus, Star, Edit3, Heart, Mail, HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer } from '@/animations'

const sections = [
  {
    icon: BookOpen,
    title: "What's My SquareMeal?",
    content: "Your personal restaurant guide. Store your reviews, build private lists of your favourite places to eat, and keep track of every dining experience — all in one place, tailored to you.",
  },
  {
    icon: UserPlus,
    title: 'Why should I register?',
    content: 'Registration is free and gives you access to tools that enhance your dining experience. Create favourites lists, rate and review restaurants, and book within 3 clicks. Unlock the full potential of SquareMeal by creating an account.',
  },
  {
    icon: Star,
    title: 'Rating and reviewing restaurants',
    content: 'Rate restaurants on a scale of 1 to 5 and share your thoughts with a written review of up to 10,000 characters. Only your most recent rating and review for any given restaurant counts towards its overall score.',
  },
  {
    icon: Heart,
    title: 'Private Selections: My Lists',
    content: 'Create up to 30 private lists to organise your favourite restaurants. Each list can hold as many restaurants as you like. Add and remove restaurants at any time. Your lists are private and cannot be viewed by anyone else.',
  },
  {
    icon: Edit3,
    title: 'Rules of Conduct',
    content: 'SquareMeal reserves the right to edit or remove any posts, reviews, or user-generated content that violates our guidelines. We are committed to maintaining a respectful and helpful community for all users.',
  },
  {
    icon: Mail,
    title: 'Contact us',
    content: 'If you know of a restaurant you would like to see listed on SquareMeal, email us at editorial@squaremeal.co.uk. For all other enquiries, please visit our Contact page.',
  },
]

export default function Help() {
  return (
    <>
      <SEO title="Help & How to Use SquareMeal" description="Learn how to use SquareMeal. Register, rate and review restaurants, create private lists of favourites, and get the most out of the UK's leading independent restaurant guide." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="relative bg-rich-black py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-20">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-6xl text-soft-white mb-4">How to use SquareMeal</h1>
              <p className="font-body text-lg text-white/70">Everything you need to know to get started with the UK's leading restaurant guide.</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {sections.map(s => (
              <motion.div key={s.title} variants={fadeInUp} className="bg-soft-white border border-charcoal/5 p-8">
                <div className="flex items-start gap-4">
                  <s.icon className="w-6 h-6 text-champagne-gold mt-1 shrink-0" />
                  <div>
                    <h2 className="font-display text-xl text-rich-black mb-3">{s.title}</h2>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 p-10 md:p-14 bg-rich-black text-center">
            <HelpCircle className="w-10 h-10 text-champagne-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl text-soft-white mb-2">Still need help?</h2>
            <p className="font-body text-base text-white/60 mb-8 max-w-xl mx-auto">Our support team is here to assist you with any questions.</p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.15em] text-champagne-gold hover:text-soft-white transition-colors">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
