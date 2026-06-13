import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const variants = {
  primary:
    'bg-champagne-gold text-rich-black hover:bg-subtle-gold border border-champagne-gold shadow-lg shadow-champagne-gold/20',
  secondary:
    'bg-rich-black text-soft-white hover:bg-charcoal border border-white/20',
  outline:
    'bg-transparent text-rich-black border border-rich-black/20 hover:border-champagne-gold hover:text-champagne-gold',
  ghost: 'bg-transparent text-rich-black hover:bg-ivory',
}

const sizes = {
  sm: 'px-4 py-2 text-[11px]',
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-4 text-sm',
  xl: 'px-10 py-5 text-sm',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'font-label-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
