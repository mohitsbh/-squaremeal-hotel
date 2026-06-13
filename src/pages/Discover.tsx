import { useState } from 'react'
import { motion } from 'framer-motion'
import { Map, Grid3X3 } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { restaurants } from '@/data/restaurants'
import { RestaurantCard } from '@/components/restaurant/RestaurantCard'
import { SearchBar } from '@/components/search/SearchBar'

const cuisines = ['All', 'Modern British', 'French', 'Italian', 'Indian', 'Spanish', 'Japanese', 'Mexican', 'West African', 'Brazilian', 'Mediterranean', 'Chinese']
const locations = ['All', 'London', 'Bristol', 'Edinburgh', 'Birmingham', 'Manchester', 'UK']
const priceRanges = ['All', '££', '£££', '££££']

export default function Discover() {
  const [activeCuisine, setActiveCuisine] = useState('All')
  const [activeLocation, setActiveLocation] = useState('All')
  const [activePrice, setActivePrice] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')

  const filtered = restaurants.filter((r) => {
    if (activeCuisine !== 'All' && r.cuisine !== activeCuisine) return false
    if (activeLocation !== 'All' && r.area !== activeLocation && r.location !== activeLocation) return false
    if (activePrice !== 'All' && r.priceRange !== activePrice) return false
    return true
  })

  return (
    <>
      <SEO title="Discover the Best Restaurants" description="Browse over 7,500 UK restaurant reviews, from Michelin-starred gems to hidden culinary treasures. London Top 100 and UK Top 100 restaurant lists for 2026." />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="font-display text-4xl md:text-5xl text-rich-black mb-2">
                Refined Dining
              </h1>
              <p className="font-body text-on-surface-variant max-w-xl">
                Curated selections from the world&apos;s most prestigious culinary masters
                and hidden artisanal gems.
              </p>
            </div>
            <SearchBar />
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setActiveCuisine(cuisine)}
                className={`px-4 py-2 font-label-sm text-[10px] uppercase tracking-widest transition-colors ${
                  activeCuisine === cuisine
                    ? 'bg-rich-black text-soft-white'
                    : 'bg-transparent text-on-surface-variant border border-charcoal/10 hover:border-champagne-gold hover:text-champagne-gold'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {locations.slice(0, 4).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLocation(loc)}
                  className={`px-4 py-2 font-label-sm text-[10px] uppercase tracking-widest transition-colors ${
                    activeLocation === loc
                      ? 'bg-rich-black text-soft-white'
                      : 'bg-transparent text-on-surface-variant border border-charcoal/10 hover:border-champagne-gold hover:text-champagne-gold'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
                className="flex items-center gap-2 px-4 py-2 border border-charcoal/10 font-label-sm text-[10px] uppercase tracking-widest hover:bg-ivory transition-colors"
              >
                {viewMode === 'grid' ? (
                  <Map className="w-3.5 h-3.5" />
                ) : (
                  <Grid3X3 className="w-3.5 h-3.5" />
                )}
                {viewMode === 'grid' ? 'Map View' : 'Grid View'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((restaurant, i) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-on-surface-variant">
                No restaurants match your filters. Try adjusting your criteria.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-[600px] bg-rich-black relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(circle, #262626 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-soft-white">
            <h3 className="font-display text-3xl mb-4">Explore the Map</h3>
            <p className="font-body opacity-60">
              Interacting with culinary destinations across the city.
            </p>
          </div>
        </div>
      )}
    </motion.div>
    </>
  )
}
