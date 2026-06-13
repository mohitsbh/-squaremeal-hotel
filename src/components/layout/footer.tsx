import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const restaurantLinks = [
  { label: 'Restaurant gift vouchers', href: '/gift-vouchers' },
  { label: 'Browse restaurants by postcode', href: '/discover' },
  { label: 'Find restaurants near me', href: '/discover' },
  { label: 'Suggest a restaurant', href: '/contact' },
]

const companyLinks = [
  { label: 'About SquareMeal', href: '/editorial-policy' },
  { label: 'Contact Us', href: '/contact' },
  { label: "We're hiring", href: '/careers' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]

const exploreLinks = [
  { label: 'London restaurants', href: '/restaurants/london' },
  { label: 'Best restaurants', href: '/restaurants/best' },
  { label: 'Restaurants near me', href: '/restaurants-near-me' },
  { label: 'Restaurant offers', href: '/offers' },
  { label: 'Things to do', href: '/things-to-do' },
  { label: 'Concierge', href: '/concierge' },
  { label: 'FAQs', href: '/faqs' },
]

export function Footer() {
  return (
    <footer className="bg-rich-black text-soft-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3">
            <Link to="/" className="font-display text-3xl text-champagne-gold mb-6 block tracking-tight">
              SQUAREMEAL
            </Link>
            <p className="font-body text-sm text-white/50 max-w-xs mb-8 leading-relaxed">
              SquareMeal was founded in 1990 and is the UK's best-known restaurant, bar and venue website. Offering independent and unbiased restaurant reviews that you can trust.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Restaurants and Bars</h4>
            <ul className="space-y-3">
              {restaurantLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-body text-sm text-white/60 hover:text-soft-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-body text-sm text-white/60 hover:text-soft-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">International Sites</h4>
            <ul className="space-y-3 mb-8">
              <li><a href="https://www.squaremeal.ie" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-soft-white transition-colors">Ireland</a></li>
              <li><a href="https://www.squaremeal.sg" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-soft-white transition-colors">Singapore</a></li>
              <li><a href="https://www.squaremeal.ae" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-soft-white transition-colors">UAE</a></li>
            </ul>
            <h4 className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-body text-sm text-white/60 hover:text-soft-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="font-display text-2xl text-champagne-gold mb-2">Get the app</h4>
              <p className="font-body text-sm text-white/50 mb-4">Download the free app and unlock restaurant rewards with every spend!</p>
              <div className="flex gap-4">
                <a href="https://apps.apple.com/gb/app/squaremeal-restaurant-rewards/id1664037953" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-label-sm text-xs uppercase tracking-widest px-5 py-3 rounded transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  Download on App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.squaremeal.uk.loyalty" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-label-sm text-xs uppercase tracking-widest px-5 py-3 rounded transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                  Google Play
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">Be in the know</h4>
              <p className="font-body text-sm text-white/50 mb-4">Get the latest news, updates and offers from SquareMeal to your inbox.</p>
              <div className="flex border-b border-white/20 max-w-sm">
                <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-none focus:outline-none text-white font-label-sm text-xs uppercase tracking-widest py-3 placeholder:text-white/30 w-full" />
                <button className="text-champagne-gold px-2 flex-shrink-0"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label-sm text-[10px] text-white/40 tracking-[0.1em]">
            &copy; Monomax Ltd 2026. All Rights Reserved. SquareMeal is a trading name of Monomax Ltd. v4.4.0
          </p>
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/squaremeal.uk" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-soft-white transition-colors" aria-label="Facebook"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="https://www.instagram.com/squaremeal.co.uk/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-soft-white transition-colors" aria-label="Instagram"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://www.youtube.com/@SquareMeal" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-soft-white transition-colors" aria-label="YouTube"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a href="https://www.tiktok.com/@squaremealuk" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-soft-white transition-colors" aria-label="TikTok"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
            <a href="https://uk.pinterest.com/squaremeal/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-soft-white transition-colors" aria-label="Pinterest"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.974-5.367 11.974-11.987C23.97 5.367 18.603.001 12.017.001z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
