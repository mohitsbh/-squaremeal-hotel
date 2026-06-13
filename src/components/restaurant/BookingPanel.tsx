import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Restaurant } from '@/types'

interface BookingPanelProps {
  open: boolean
  onClose: () => void
  restaurant: Restaurant
}

const timeSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']

const days = Array.from({ length: 30 }, (_, i) => i + 1)

export function BookingPanel({ open, onClose, restaurant }: BookingPanelProps) {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState<number>(1)
  const [selectedTime, setSelectedTime] = useState('19:00')
  const [guests, setGuests] = useState(2)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-rich-black/40 z-[60]"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[440px] bg-soft-white shadow-2xl z-[70] overflow-y-auto"
          >
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="font-display text-2xl text-rich-black mb-1">Book Your Table</h2>
                  <p className="font-label-sm text-xs uppercase tracking-widest text-champagne-gold">
                    {restaurant.name}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-ivory transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-8">
                <label className="font-label-sm text-xs uppercase tracking-widest block mb-4 text-on-surface-variant">
                  Select Date
                </label>
                <div className="grid grid-cols-7 gap-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div
                      key={d}
                      className="aspect-square flex items-center justify-center font-label-sm text-[10px] text-on-surface-variant/30"
                    >
                      {d}
                    </div>
                  ))}
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center font-body text-sm transition-colors ${
                        selectedDate === day
                          ? 'bg-rich-black text-soft-white'
                          : 'text-rich-black hover:bg-ivory'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="font-label-sm text-xs uppercase tracking-widest block mb-4 text-on-surface-variant">
                  Select Time
                </label>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`flex-none px-6 py-3 font-body text-sm transition-colors ${
                        selectedTime === time
                          ? 'bg-rich-black text-soft-white'
                          : 'border border-charcoal/10 hover:border-champagne-gold hover:text-champagne-gold'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <p className="mt-4 font-body text-sm text-secondary flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Smart Tip: Popular time for couples.
                </p>
              </div>

              <div className="mb-10">
                <label className="font-label-sm text-xs uppercase tracking-widest block mb-4 text-on-surface-variant">
                  Guests
                </label>
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-2">
                  <span className="font-display text-3xl text-rich-black">
                    {String(guests).padStart(2, '0')}
                  </span>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="p-1 hover:text-champagne-gold transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setGuests(Math.min(20, guests + 1))}
                      className="p-1 hover:text-champagne-gold transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <Button variant="primary" size="xl" className="w-full text-sm" onClick={() => {
                const today = new Date()
                const month = today.toLocaleString('default', { month: 'long' })
                const year = today.getFullYear()
                navigate(`/booking/confirmation?restaurant=${encodeURIComponent(restaurant.name)}`, {
                  state: {
                    date: `${month} ${selectedDate}, ${year}`,
                    time: selectedTime,
                    guests,
                    restaurantName: restaurant.name,
                  }
                })
              }}>
                Confirm Reservation
              </Button>

              <p className="mt-6 font-label-sm text-[10px] text-on-surface-variant/60 text-center uppercase tracking-widest">
                Free cancellation up to 24 hours before.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
