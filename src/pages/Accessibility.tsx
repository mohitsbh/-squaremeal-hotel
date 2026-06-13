import { motion } from 'framer-motion'
import { Eye, Monitor, Keyboard, Ear, BookOpen } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'

const standards = [
  { icon: Monitor, title: 'Screen Reader Compatible', desc: 'Our website is designed to be compatible with leading screen reader technologies. All images have descriptive alt text and content is structured with proper heading hierarchy.' },
  { icon: Keyboard, title: 'Keyboard Navigation', desc: 'All functionality on our website is available via keyboard navigation. Use Tab, Enter, and arrow keys to navigate through all interactive elements.' },
  { icon: Eye, title: 'Visual Design', desc: 'We maintain high contrast ratios for text and interactive elements. Our design system ensures readability across all devices and viewing conditions.' },
  { icon: Ear, title: 'Multimedia Accessibility', desc: 'Video and audio content on our platform includes captions and transcripts where applicable.' },
]

export default function Accessibility() {
  return (
    <>
      <SEO title="Accessibility" description="SquareMeal is committed to making our website accessible to all users. Learn about our accessibility features and standards." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">Accessibility</h1>
            <p className="font-body text-lg text-on-surface-variant">SquareMeal is committed to ensuring digital accessibility for all users, including those with disabilities. We continuously work to improve the user experience for everyone.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {standards.map(s => (
              <motion.div key={s.title} variants={staggerItem} className="bg-soft-white border border-charcoal/5 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-champagne-gold/10 flex items-center justify-center"><s.icon className="w-6 h-6 text-champagne-gold" /></div>
                  <h2 className="font-display text-xl text-rich-black">{s.title}</h2>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-ivory border border-charcoal/5 p-10">
            <h2 className="font-display text-2xl text-rich-black mb-4">Ongoing Improvements</h2>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">We are actively working to improve the accessibility of our website. Our goal is to meet WCAG 2.1 Level AA standards. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.</p>
            <p className="font-body text-sm text-on-surface-variant">Email: <span className="text-champagne-gold">accessibility@squaremeal.co.uk</span></p>
            <p className="font-body text-sm text-on-surface-variant">Phone: <span className="text-champagne-gold">020 7582 0222</span></p>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
