import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary',
  secondary:
    'border border-outline-variant bg-surface-container text-on-surface hover:border-primary/50 hover:bg-surface-container-high',
  ghost: 'text-primary hover:bg-surface-container-high',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded px-4 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
