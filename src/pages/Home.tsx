import { motion } from 'framer-motion'
import { SEO } from '@/components/shared/SEO'
import { Hero } from '@/components/home/Hero'
import { Spotlight } from '@/components/home/Spotlight'
import { Top100Cards } from '@/components/home/Top100Cards'
import { NewsSection } from '@/components/home/NewsSection'
import { Collections } from '@/components/home/Collections'
import RewardsSection from '@/components/home/RewardsSection'
import { VenueGrid } from '@/components/home/VenueGrid'
import { EventsSection } from '@/components/home/EventsSection'
import { ConciergeCTA } from '@/components/home/ConciergeCTA'

export default function Home() {
  return (
    <>
      <SEO title="Restaurants, Bars & Pubs in London and the UK" description="SquareMeal was founded in 1990 and is the UK's best-known restaurant, bar and venue website. Offering independent and unbiased restaurant reviews that you can trust." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Hero />
        <Spotlight />
        <Top100Cards />
        <NewsSection />
        <Collections />
        <RewardsSection />
        <VenueGrid />
        <EventsSection />
        <ConciergeCTA />
      </motion.div>
    </>
  )
}
