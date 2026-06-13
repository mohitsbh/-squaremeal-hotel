import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, User, Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const megaMenuColumns = [
  {
    title: 'By Location',
    links: [
      { label: 'London restaurants', href: '/restaurants/london' },
      { label: 'Manchester restaurants', href: '/discover' },
      { label: 'Bristol restaurants', href: '/discover' },
      { label: 'Edinburgh restaurants', href: '/discover' },
      { label: 'Birmingham restaurants', href: '/discover' },
      { label: 'Restaurants near me', href: '/restaurants-near-me' },
    ],
  },
  {
    title: 'By Interest',
    links: [
      { label: 'Best restaurants', href: '/restaurants/best' },
      { label: 'Restaurant offers', href: '/offers' },
      { label: 'Afternoon tea', href: '/discover' },
      { label: 'Cheap eats', href: '/discover' },
      { label: 'Romantic restaurants', href: '/discover' },
      { label: 'Outdoor dining', href: '/discover' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Restaurant news', href: '/guides' },
      { label: 'Things to do', href: '/things-to-do' },
      { label: 'Chefs', href: '/guides' },
      { label: 'Drinks & cocktails', href: '/guides' },
      { label: 'Interviews & profiles', href: '/guides' },
      { label: 'Gift Vouchers', href: '/gift-vouchers' },
    ],
  },
]

const navItems = [
  { label: 'Restaurants', href: '/restaurants', mega: true },
  { label: 'Private Dining', href: '/private-dining' },
  { label: 'Wedding Venues', href: '/wedding-venues' },
  { label: 'Event Venues', href: '/event-party-venues' },
  { label: 'Gift Vouchers', href: '/gift-vouchers' },
  { label: 'Rewards', href: '/rewards' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null) }, [location])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header className={cn('fixed top-0 w-full z-50 transition-all duration-500', isTransparent ? 'bg-transparent' : 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-charcoal/5')}>
      <nav className="flex items-center justify-between px-5 md:px-20 max-w-[1440px] mx-auto h-20">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/" className={cn('font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter transition-colors duration-500 flex-shrink-0', isTransparent ? 'text-soft-white' : 'text-rich-black')}>SQUAREMEAL</Link>

          <div className="hidden xl:flex items-center gap-0">
            {navItems.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.mega && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.mega ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={cn('flex items-center gap-0.5 px-2 lg:px-2.5 h-9 text-sm transition-colors duration-300 rounded whitespace-nowrap', isTransparent ? 'text-soft-white/70 hover:text-soft-white hover:bg-soft-white/5' : 'text-on-surface-variant hover:text-rich-black hover:bg-charcoal/5', isActive(item.href) && (isTransparent ? 'text-soft-white' : 'text-rich-black'))}
                  >
                    {item.label}
                    <ChevronDown className={cn('w-2.5 h-2.5 transition-transform duration-200 opacity-40', activeDropdown === item.label && 'rotate-180')} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn('flex items-center px-2 lg:px-2.5 h-9 text-sm transition-colors duration-300 rounded whitespace-nowrap', isTransparent ? 'text-soft-white/70 hover:text-soft-white hover:bg-soft-white/5' : 'text-on-surface-variant hover:text-rich-black hover:bg-charcoal/5', isActive(item.href) && (isTransparent ? 'text-soft-white' : 'text-rich-black'))}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 lg:gap-1.5" ref={dropdownRef}>
          <Link to="/discover" className={cn('p-1.5 rounded transition-colors', isTransparent ? 'text-soft-white/60 hover:text-soft-white hover:bg-soft-white/5' : 'text-on-surface-variant/60 hover:text-rich-black hover:bg-charcoal/5')}>
            <Search className="w-3.5 h-3.5" />
          </Link>
          <a href="tel:02078405222" className={cn('hidden xl:flex items-center gap-1 px-2 py-1.5 text-[11px] font-body transition-colors rounded', isTransparent ? 'text-soft-white/50 hover:text-soft-white hover:bg-soft-white/5' : 'text-on-surface-variant/50 hover:text-rich-black hover:bg-charcoal/5')}>
            <Phone className="w-2.5 h-2.5" /> 020 7840 5222
          </a>
          <Link to="/sign-in" className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded font-label-sm text-[11px] uppercase tracking-wider transition-all duration-300 whitespace-nowrap', isTransparent ? 'border border-soft-white/30 text-soft-white hover:bg-soft-white hover:text-rich-black' : 'border border-rich-black/20 text-rich-black hover:bg-rich-black hover:text-soft-white')}>
            <User className="w-3 h-3" /> Sign In
          </Link>
          <button className={cn('lg:hidden p-2 rounded transition-colors', isTransparent ? 'text-soft-white hover:bg-soft-white/10' : 'text-rich-black hover:bg-charcoal/10')} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {activeDropdown && navItems.find(n => n.mega && n.label === activeDropdown) && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveDropdown(activeDropdown) }}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:block absolute top-20 left-0 right-0 bg-soft-white shadow-xl border-t border-charcoal/5"
          >
            <div className="max-w-[1440px] mx-auto px-20 py-12">
              <div className="grid grid-cols-3 gap-16">
                {megaMenuColumns.map(col => (
                  <div key={col.title}>
                    <h4 className="font-label-sm text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/40 mb-6">{col.title}</h4>
                    <ul className="space-y-0.5">
                      {col.links.map(l => (
                        <li key={l.label}>
                          <Link to={l.href} onClick={() => setActiveDropdown(null)} className="block font-body text-sm text-on-surface-variant hover:text-rich-black py-2.5 px-3 hover:bg-ivory rounded transition-colors">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-charcoal/5 flex items-center justify-between">
                <p className="font-body text-xs text-on-surface-variant/40">Over 7,500 restaurants reviewed by our independent critics</p>
                <Link to="/restaurants" onClick={() => setActiveDropdown(null)} className="font-label-sm text-[11px] uppercase tracking-widest text-champagne-gold hover:underline">View all restaurants</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-ivory border-t border-charcoal/5 overflow-hidden shadow-lg" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
            <div className="px-5 py-6 space-y-1">
              {navItems.map(item => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.mega) { setMobileSubOpen(mobileSubOpen === item.label ? null : item.label) }
                      else { setMobileOpen(false); window.location.href = item.href }
                    }}
                    className="flex items-center justify-between w-full py-3 px-3 rounded hover:bg-soft-white transition-colors"
                  >
                    <span className="font-body text-base text-rich-black">{item.label}</span>
                    {item.mega && <ChevronDown className={cn('w-4 h-4 text-on-surface-variant/40 transition-transform duration-200', mobileSubOpen === item.label && 'rotate-180')} />}
                  </button>
                  {item.mega && mobileSubOpen === item.label && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="ml-4 space-y-0.5 overflow-hidden">
                      {megaMenuColumns.map(col => (
                        <div key={col.title} className="py-2">
                          <h4 className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40 px-3 pb-2">{col.title}</h4>
                          {col.links.map(l => (
                            <Link key={l.label} to={l.href} onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 font-body text-sm text-on-surface-variant hover:text-rich-black hover:bg-soft-white rounded transition-colors">{l.label}</Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <hr className="border-charcoal/10 my-4" />
              <a href="tel:02078405222" className="flex items-center gap-3 py-3 px-3 font-body text-sm text-on-surface-variant hover:text-rich-black rounded hover:bg-soft-white"><Phone className="w-4 h-4" />020 7840 5222 — Concierge</a>
              <Link to="/discover" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-3 px-3 font-body text-sm text-on-surface-variant hover:text-rich-black rounded hover:bg-soft-white"><Search className="w-4 h-4" />Search restaurants</Link>
              <Link to="/restaurants-near-me" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-3 px-3 font-body text-sm text-on-surface-variant hover:text-rich-black rounded hover:bg-soft-white"><MapPin className="w-4 h-4" />Restaurants near me</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-3 px-3 font-body text-sm text-on-surface-variant hover:text-rich-black rounded hover:bg-soft-white"><Phone className="w-4 h-4" />Contact us</Link>
              <hr className="border-charcoal/10 my-4" />
              <Link to="/sign-in" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 bg-rich-black text-soft-white py-3 px-4 rounded font-label-sm text-xs uppercase tracking-wider"><User className="w-4 h-4" />Sign In / Register</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
