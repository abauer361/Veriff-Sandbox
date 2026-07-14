import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HomeHeader } from '../components/PageNav'
import { products } from '../data/products'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <HomeHeader />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-8 md:px-12 lg:py-6">
        <section className="mb-6 shrink-0 space-y-3 md:mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface lg:text-[2.75rem] lg:leading-tight">
            Explore Products
          </h1>
          <p className="max-w-2xl text-base leading-7 text-on-surface-variant lg:text-lg lg:leading-7">
            Test and integrate our verification solutions in a secure environment.
            Select a product to begin.
          </p>
        </section>

        <section className="grid shrink-0 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <article
                key={product.id}
                className="flex flex-col rounded-lg border border-outline-variant/40 bg-surface-container p-5 lg:p-6"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary-container lg:mb-5">
                  <Icon
                    className="size-5 text-on-primary-container"
                    strokeWidth={2}
                  />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-on-surface">
                  {product.title}
                </h2>
                <p className="mb-5 flex-1 text-sm leading-6 text-on-surface-variant lg:mb-6">
                  {product.description}
                </p>
                <Link
                  to={product.path}
                  className="inline-flex w-full items-center justify-center gap-2 rounded bg-primary-container py-2.5 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
                >
                  Try it
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}
