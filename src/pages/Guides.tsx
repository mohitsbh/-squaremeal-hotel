import { motion } from 'framer-motion'
import { SEO } from '@/components/shared/SEO'
import { Editorial } from '@/components/home/Editorial'

export default function Guides() {
  return (
    <>
      <SEO title="Guides & Stories" description="In-depth features, sommelier notes, and stories from the world of fine dining." />
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-champagne-gold font-label-sm text-xs uppercase tracking-[0.3em] mb-4 block">
            Editorial
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-4">
            Guides & Stories
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-xl">
            In-depth features, sommelier notes, architectural insights, and
            sustainability stories from the world of fine dining.
          </p>
        </motion.div>
      </div>
      <Editorial />
    </motion.div>
    </>
  )
}
