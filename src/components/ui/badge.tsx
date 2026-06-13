import { cn } from '@/lib/utils'

interface BadgeProps {
  label: string
  variant?: 'premium' | 'award' | 'trending' | 'rare' | 'featured'
  className?: string
}

const variantStyles = {
  premium: 'bg-champagne-gold text-rich-black',
  award: 'bg-soft-white text-rich-black border border-champagne-gold/30',
  trending: 'bg-champagne-gold/10 text-champagne-gold border border-champagne-gold/20',
  rare: 'bg-rich-black text-soft-white border border-charcoal',
  featured: 'bg-soft-white text-rich-black',
}

export function Badge({ label, variant = 'featured', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest',
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
