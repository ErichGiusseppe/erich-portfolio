interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'font-label text-[11px] px-3 py-1 rounded-full tracking-wide inline-flex items-center gap-1'

  const variants = {
    default:   'border border-outline-variant/30 text-on-surface-variant',
    primary:   'bg-primary/10 border border-primary/30 text-primary',
    secondary: 'bg-secondary/10 border border-secondary/30 text-secondary',
    outline:   'border border-outline-variant/20 text-outline',
  }

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
