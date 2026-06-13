import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Utensils, Sparkles, X } from 'lucide-react'

const suggestions = [
  'romantic dinner in London',
  'best rooftop restaurants',
  'private dining for 20 guests',
  'Michelin-starred restaurants',
  'sushi omakase London',
  'Sunday roast in Cotswolds',
  'business lunch Manchester',
  'vegan fine dining',
]

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [filtered, setFiltered] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (query.length > 0) {
      setFiltered(
        suggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
      )
    } else {
      setFiltered(suggestions.slice(0, 5))
    }
  }, [query])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/discover?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div
          className={`relative flex items-center bg-soft-white border transition-all duration-300 ${
            focused
              ? 'border-champagne-gold shadow-lg shadow-champagne-gold/5'
              : 'border-charcoal/10'
          }`}
        >
          <div className="pl-5 pr-3">
            <Sparkles className="w-4 h-4 text-champagne-gold" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder="Search experiences, cuisines, locations..."
            className="flex-1 py-4 bg-transparent border-none focus:outline-none font-body text-sm text-rich-black placeholder:text-on-surface-variant/40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="px-3 text-on-surface-variant/40 hover:text-rich-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="bg-rich-black text-soft-white px-6 py-4 hover:bg-charcoal transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </form>

      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute top-full left-0 right-0 bg-soft-white border border-charcoal/5 shadow-xl z-50 mt-1"
          >
            <div className="p-4">
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/40 mb-3">
                {query ? 'Suggestions' : 'Trending Searches'}
              </p>
              <div className="space-y-1">
                {filtered.map((suggestion) => (
                  <button
                    key={suggestion}
                    onMouseDown={() => {
                      setQuery(suggestion)
                      navigate(`/discover?q=${encodeURIComponent(suggestion)}`)
                    }}
                    className="w-full text-left px-4 py-3 font-body text-sm text-on-surface-variant hover:bg-ivory hover:text-rich-black transition-colors flex items-center gap-3"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
