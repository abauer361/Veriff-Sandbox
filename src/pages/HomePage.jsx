import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import { HomeHeader } from '../components/PageNav'
import { products } from '../data/products'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <HomeHeader />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-8 md:px-12 lg:py-6">
        <section className="mb-8 shrink-0 space-y-3 md:mb-10">
          <h1 className="text-[2.25rem] font-semibold tracking-tight text-on-surface lg:text-[2.75rem] lg:leading-[1.1]">
            Explore Products
          </h1>
          <p className="max-w-lg text-base leading-7 text-on-surface-variant lg:max-w-xl lg:text-lg lg:leading-8">
            See the JSON Veriff returns. Shape it for your platform.
          </p>
        </section>

        <section className="grid shrink-0 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Card
                key={product.id}
                as="article"
                className="flex flex-col transition-shadow duration-150 hover:shadow-md"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-secondary-container lg:mb-5">
                  <Icon className="size-5 text-primary" strokeWidth={1.75} />
                </div>
                <h2 className="mb-2 text-lg font-semibold tracking-tight text-on-surface">
                  {product.title}
                </h2>
                <p className="mb-5 flex-1 text-sm leading-6 text-on-surface-variant lg:mb-6">
                  {product.description}
                </p>
                <Button to={product.path} className="w-full">
                  Try it
                  <ArrowRight className="size-4" strokeWidth={1.75} />
                </Button>
              </Card>
            )
          })}
        </section>
      </main>
    </div>
  )
}
