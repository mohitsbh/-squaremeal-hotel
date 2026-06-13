import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <SEO title="Sign In" description="Sign in to your SquareMeal account to manage bookings, collect Rewards Points, and access exclusive offers." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex">
        <div className="hidden md:flex w-1/2 bg-rich-black relative overflow-hidden items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 30% 40%, #C9A86A 0%, transparent 60%), radial-gradient(circle at 70% 60%, #C9A86A 0%, transparent 40%)' }} />
          <div className="relative z-10 text-center px-16">
            <Link to="/" className="font-display text-5xl text-champagne-gold tracking-tight mb-8 block">SQUAREMEAL</Link>
            <p className="font-body text-lg text-soft-white/60 max-w-md mx-auto leading-relaxed">Sign in to manage your bookings, collect Rewards Points, and discover the UK's finest dining experiences.</p>
            <div className="mt-12 space-y-6">
              {['Earn 100 Rewards Points per restaurant booking', 'Access exclusive member offers and events', 'Manage your bookings and preferences', 'Save your favourite restaurants and venues'].map(item => (
                <div key={item} className="flex items-center gap-3 text-soft-white/80 font-body text-sm">
                  <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center px-5 md:px-16 py-20 bg-ivory">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full max-w-md">
            <Link to="/" className="md:hidden font-display text-3xl text-champagne-gold mb-10 block text-center">SQUAREMEAL</Link>
            <h1 className="font-display text-3xl md:text-4xl text-rich-black mb-2">Welcome back</h1>
            <p className="font-body text-sm text-on-surface-variant mb-10">Sign in to your SquareMeal account to continue.</p>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                  <input type="email" placeholder="you@example.com" className="w-full bg-soft-white border border-charcoal/10 px-12 py-4 font-body text-sm text-rich-black placeholder:text-on-surface-variant/30 focus:outline-none focus:border-champagne-gold/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                  <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="w-full bg-soft-white border border-charcoal/10 px-12 py-4 font-body text-sm text-rich-black placeholder:text-on-surface-variant/30 focus:outline-none focus:border-champagne-gold/50 transition-colors" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 hover:text-on-surface-variant transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-champagne-gold" />
                  <span className="font-body text-xs text-on-surface-variant">Remember me</span>
                </label>
                <a href="#" className="font-body text-xs text-champagne-gold hover:underline">Forgot password?</a>
              </div>
              <button type="submit" className="w-full bg-rich-black text-soft-white font-label-sm text-xs uppercase tracking-[0.25em] py-4 hover:bg-charcoal transition-colors flex items-center justify-center gap-2">
                Sign In <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="mt-8 text-center font-body text-sm text-on-surface-variant">
              Don't have an account?{' '}
              <a href="#" className="text-champagne-gold hover:underline">Create one</a>
            </p>
            <p className="mt-6 text-center">
              <Link to="/" className="font-body text-xs text-on-surface-variant/50 hover:text-on-surface-variant transition-colors">Back to home</Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
