import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-primary text-on-primary shadow-xs hover:bg-primary/90 active:scale-[0.98] disabled:bg-surface-container-highest disabled:text-on-surface-variant disabled:shadow-none disabled:active:scale-100',
  secondary:
    'bg-surface text-on-surface shadow-xs ring-1 ring-outline-variant/80 hover:bg-surface-container-low hover:ring-outline-variant active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100',
  ghost:
    'text-primary hover:bg-secondary-container/60 active:bg-secondary-container disabled:opacity-50 disabled:hover:bg-transparent',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  className = '',
  disabled,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium tracking-tight transition-all duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled || undefined}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
