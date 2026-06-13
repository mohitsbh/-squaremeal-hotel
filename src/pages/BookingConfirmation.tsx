import { Link, useSearchParams, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Clock, Users, MapPin } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/button'

export default function BookingConfirmation() {
  const [params] = useSearchParams()
  const location = useLocation()
  const state = location.state as { date?: string; time?: string; guests?: number; restaurantName?: string } | null
  const restaurantName = state?.restaurantName || params.get('restaurant') || 'your selected restaurant'
  const date = state?.date || 'Date confirmed via email'
  const time = state?.time || 'Time confirmed via email'
  const guests = state?.guests || 2

  return (
    <>
      <SEO title="Booking Confirmed" description="Your reservation has been confirmed." />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center pt-20 px-5"
      >
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <CheckCircle className="w-20 h-20 text-champagne-gold mx-auto mb-8" />
        </motion.div>

        <h1 className="font-display text-4xl text-rich-black mb-4">Reservation Confirmed</h1>
        <p className="font-body text-lg text-on-surface-variant mb-10">
          Your table at <span className="font-semibold text-rich-black">{restaurantName}</span> has been reserved.
        </p>

        <div className="bg-ivory border border-charcoal/5 p-8 mb-10 text-left space-y-4">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-champagne-gold" />
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">Date</p>
              <p className="font-body text-sm text-rich-black">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-champagne-gold" />
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">Time</p>
              <p className="font-body text-sm text-rich-black">{time}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="w-5 h-5 text-champagne-gold" />
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">Guests</p>
              <p className="font-body text-sm text-rich-black">{guests} Guest{guests > 1 ? 's' : ''}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-2 border-t border-charcoal/5">
            <MapPin className="w-5 h-5 text-champagne-gold" />
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">SquareMeal Rewards</p>
              <p className="font-body text-sm text-champagne-gold">+100 points earned</p>
            </div>
          </div>
        </div>

        <p className="font-body text-sm text-on-surface-variant/60 mb-8">
          A confirmation email has been sent to your registered address. You can manage your booking from your account.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/rewards">
            <Button variant="primary" size="lg">View My Rewards</Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">Return Home</Button>
          </Link>
        </div>
      </div>
    </motion.div>
    </>
  )
}
