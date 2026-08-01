import { ProductHubNav } from './PageNav'

/**
 * Shared product page chrome: locks to the viewport on large screens so
 * panels stretch and scroll internally. On smaller screens the page scrolls
 * normally so every panel stays reachable.
 */
export default function ProductPageShell({ title, description, children }) {
  return (
    <div className="flex min-h-dvh w-full max-w-full flex-col overflow-x-hidden lg:h-dvh lg:overflow-hidden">
      <ProductHubNav />
      <main className="mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col px-4 py-3 pb-8 md:px-12 md:py-4 lg:min-h-0 lg:overflow-hidden lg:pb-4">
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
