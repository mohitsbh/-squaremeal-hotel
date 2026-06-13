import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="font-display text-3xl text-rich-black mb-4 tracking-tighter">
          SQUAREMEAL
        </div>
        <div className="w-12 h-[2px] bg-champagne-gold mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-rich-black"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
