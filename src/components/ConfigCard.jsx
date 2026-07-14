export default function ConfigCard({
  icon: Icon,
  title,
  action,
  children,
  className = '',
  dense = false,
  fill = false,
}) {
  return (
    <section
      className={`rounded-lg border border-outline-variant/40 bg-surface-container ${
        fill ? 'flex h-full min-h-0 flex-col' : ''
      } ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-between border-b border-outline-variant/30 ${
          dense ? 'px-3 py-2.5' : 'px-4 py-3.5 md:px-5'
        }`}
      >
        <div className="flex items-center gap-2.5">
          {Icon && <Icon className="size-4 text-primary" strokeWidth={2} />}
          <h2 className="text-sm font-medium text-on-surface">{title}</h2>
        </div>
        {action}
      </div>
      <div
        className={`${dense ? 'p-3 md:p-4' : 'p-4 md:p-5'} ${fill ? 'flex min-h-0 flex-1 flex-col' : ''}`}
      >
        {children}
      </div>
    </section>
  )
}
