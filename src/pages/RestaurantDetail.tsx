import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Star,
  MapPin,
  Award,
  ChefHat,
  ArrowLeft,
  Share2,
  Heart,
  Clock3,
  Users,
  MessageSquare,
  ExternalLink,
  ThumbsUp,
} from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { restaurants, testimonials } from '@/data/restaurants'
import { RestaurantGallery } from '@/components/restaurant/RestaurantGallery'
import { BookingPanel } from '@/components/restaurant/BookingPanel'
import { RestaurantCard } from '@/components/restaurant/RestaurantCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/animations'

export default function RestaurantDetail() {
  const { slug } = useParams()
  const [bookingOpen, setBookingOpen] = useState(false)

  const restaurant = restaurants.find((r) => r.slug === slug)
  const similar = restaurants.filter(
    (r) => r.slug !== slug && (r.cuisine === restaurant?.cuisine || r.area === restaurant?.area)
  ).slice(0, 3)
  const restaurantTestimonials = testimonials.slice(0, 3)

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-rich-black mb-4">Restaurant Not Found</h1>
          <Link to="/discover" className="text-champagne-gold underline">
            Back to Discover
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO title={restaurant.name} description={restaurant.shortDescription} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="pt-20">
        <RestaurantGallery images={restaurant.images} name={restaurant.name} />

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <Link
                  to="/discover"
                  className="inline-flex items-center gap-2 font-body text-sm text-on-surface-variant hover:text-rich-black transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Discover
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.badges.map((badge) => (
                    <Badge
                      key={badge.label}
                      label={badge.label}
                      variant={badge.variant as any}
                    />
                  ))}
                </div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-2">
                      {restaurant.name}
                    </h1>
                    <div className="flex items-center gap-4 text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {restaurant.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-champagne-gold text-champagne-gold" />
                        {restaurant.rating} ({restaurant.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-3 border border-charcoal/10 hover:border-champagne-gold transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 border border-charcoal/10 hover:border-champagne-gold transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-champagne-gold" />
                    <span className="font-body text-sm text-on-surface-variant">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-champagne-gold" />
                    <span className="font-body text-sm text-on-surface-variant">
                      {restaurant.priceRange}
                    </span>
                  </div>
                  {restaurant.michelinStars && (
                    <div className="flex items-center gap-1">
                      {Array.from({ length: restaurant.michelinStars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-champagne-gold text-champagne-gold"
                        />
                      ))}
                      <span className="font-body text-sm text-on-surface-variant ml-1">
                        Michelin
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-12">
                  <h2 className="font-display text-2xl text-rich-black mb-4">About</h2>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
                    {restaurant.description}
                  </p>
                </div>

                {restaurant.chefName && (
                  <div className="mb-12 p-8 bg-ivory border border-charcoal/5">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                        <ChefHat className="w-8 h-8 text-champagne-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-rich-black mb-1">
                          Chef {restaurant.chefName}
                        </h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                          {restaurant.chefStory}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-12">
                  <h2 className="font-display text-2xl text-rich-black mb-4">Features</h2>
                  <div className="flex flex-wrap gap-3">
                    {restaurant.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-ivory font-body text-sm text-on-surface-variant"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-[380px] flex-shrink-0">
              <div className="sticky top-28 bg-soft-white border border-charcoal/5 p-8">
                <h3 className="font-display text-xl text-rich-black mb-6">Make a Reservation</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                      Date
                    </label>
                    <div className="flex items-center gap-3 border border-charcoal/10 px-4 py-3">
                      <Clock3 className="w-4 h-4 text-champagne-gold" />
                      <input
                        type="date"
                        className="border-none p-0 focus:outline-none bg-transparent font-body text-sm text-rich-black w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                      Guests
                    </label>
                    <select className="w-full border border-charcoal/10 px-4 py-3 font-body text-sm bg-transparent focus:outline-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="xl"
                  className="w-full mb-4"
                  onClick={() => setBookingOpen(true)}
                >
                  Book a Table
                </Button>

                <p className="text-center font-body text-xs text-on-surface-variant/60">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-charcoal/5 pt-20">
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl text-rich-black">Reviews & Ratings</h2>
                <a href="https://www.google.com/search?q=SquareMeal+restaurant+reviews" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 font-body text-sm text-champagne-gold hover:underline">
                  <ExternalLink className="w-3.5 h-3.5" /> Google Reviews
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-ivory border border-charcoal/5 p-6 text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-champagne-gold text-champagne-gold" />)}
                  </div>
                  <span className="font-display text-3xl text-rich-black block">{restaurant.rating}</span>
                  <span className="font-body text-sm text-on-surface-variant">{restaurant.reviewCount} reviews</span>
                </div>
                <div className="bg-ivory border border-charcoal/5 p-6 flex flex-col items-center justify-center">
                  <a href="https://www.google.com/search?q=SquareMeal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-champagne-gold hover:underline mb-1">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-body text-sm font-semibold">Rate on Google</span>
                  </a>
                  <p className="font-body text-xs text-on-surface-variant/60">Share your experience</p>
                </div>
                <div className="bg-ivory border border-charcoal/5 p-6 flex flex-col items-center justify-center">
                  <span className="font-body text-sm text-rich-black font-semibold mb-1">SquareMeal Verified</span>
                  <p className="font-body text-xs text-on-surface-variant/60 text-center">Independent reviews from our expert critics and verified diners</p>
                </div>
              </div>

              <h3 className="font-display text-xl text-rich-black mb-6 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-champagne-gold" /> What diners say
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {restaurantTestimonials.map((t) => (
                  <div key={t.id} className="bg-soft-white border border-charcoal/5 p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-champagne-gold text-champagne-gold" />)}
                    </div>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4 italic">"{t.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-champagne-gold/10 flex items-center justify-center rounded-full">
                        <span className="font-display text-sm text-champagne-gold">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-body text-sm text-rich-black font-semibold">{t.name}</p>
                        <p className="font-body text-xs text-on-surface-variant/60">{t.restaurantName}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {similar.length > 0 && (
            <div className="pt-20 border-t border-charcoal/5">
              <h2 className="font-display text-3xl text-rich-black mb-10">
                Similar Venues
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similar.map((r, i) => (
                  <RestaurantCard key={r.id} restaurant={r} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <BookingPanel
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        restaurant={restaurant}
      />
    </motion.div>
    </>
  )
}
