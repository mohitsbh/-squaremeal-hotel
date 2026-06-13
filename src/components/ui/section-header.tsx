import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  action?: { label: string; href: string }
  className?: string
  light?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  action,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6',
        className
      )}
    >
      <div className={cn('max-w-xl', light && 'text-soft-white')}>
        {label && (
          <span className="text-champagne-gold font-label-sm uppercase tracking-[0.3em] mb-4 block">
            {label}
          </span>
        )}
        <h2
          className={cn(
            'font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight',
            light ? 'text-soft-white' : 'text-rich-black'
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'font-body text-lg mt-4 max-w-2xl',
              light ? 'text-soft-white/60' : 'text-on-surface-variant'
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && (
        <a
          href={action.href}
          className={cn(
            'font-label-sm uppercase tracking-widest border-b pb-1 transition-colors flex-shrink-0',
            light
              ? 'text-soft-white border-soft-white hover:text-champagne-gold hover:border-champagne-gold'
              : 'text-rich-black border-rich-black hover:text-champagne-gold hover:border-champagne-gold'
          )}
        >
          {action.label}
        </a>
      )}
    </motion.div>
  )
}
