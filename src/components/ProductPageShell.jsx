import { ProductHubNav } from './PageNav'

/**
 * Shared product page chrome: locks to the viewport on large screens so
 * panels stretch and scroll internally instead of pushing the page.
 */
export default function ProductPageShell({ title, description, children }) {
  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <ProductHubNav />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-y-auto px-4 py-3 md:px-12 md:py-4 lg:overflow-hidden">
        {(title || description) && (
          <header className="mb-3 shrink-0 space-y-0.5">
            {title && (
              <h1 className="text-xl font-semibold tracking-tight text-on-surface md:text-2xl md:leading-8">
                {title}
              </h1>
            )}
            {description && (
              <p className="max-w-3xl text-sm leading-5 text-on-surface-variant">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </main>
    </div>
  )
}
