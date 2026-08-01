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
      className={`w-full min-w-0 max-w-full overflow-hidden rounded-xl bg-surface shadow-sm ring-1 ring-outline-variant/60 ${
        fill ? 'flex flex-col lg:h-full lg:min-h-0' : ''
      } ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-between ${
          dense ? 'px-3 py-2.5' : 'px-4 py-3.5 md:px-5'
        }`}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          {Icon && (
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-secondary-container">
              <Icon className="size-3.5 text-primary" strokeWidth={2} />
            </span>
          )}
          <h2 className="truncate text-sm font-medium tracking-tight text-on-surface">
            {title}
          </h2>
        </div>
        {action}
      </div>
      <div
        className={`border-t border-outline-variant/50 ${
          dense ? 'p-3 md:p-4' : 'p-4 md:p-5'
        } ${fill ? 'flex min-h-0 flex-1 flex-col overflow-y-auto' : ''}`}
      >
        {children}
      </div>
    </section>
  )
}
