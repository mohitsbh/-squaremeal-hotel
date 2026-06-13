import { cn } from '@/lib/utils'

interface GradientOverlayProps {
  className?: string
  variant?: 'default' | 'full' | 'dark'
}

export function GradientOverlay({ className, variant = 'default' }: GradientOverlayProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        variant === 'default' && 'bg-gradient-to-t from-rich-black via-transparent to-transparent opacity-60',
        variant === 'full' &&
          'bg-gradient-to-t from-rich-black/80 via-rich-black/20 to-transparent',
        variant === 'dark' &&
          'bg-gradient-to-t from-rich-black via-rich-black/40 to-transparent',
        className
      )}
    />
  )
}
