import { motion } from 'framer-motion'
import { SEO } from '@/components/shared/SEO'
import { VenueMarketplace } from '@/components/home/VenueMarketplace'

export default function Marketplace() {
  return (
    <>
      <SEO title="Venue Marketplace" description="Discover extraordinary venues for weddings, corporate events, and private dining." />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        <VenueMarketplace />
      </motion.div>
    </>
  )
}
