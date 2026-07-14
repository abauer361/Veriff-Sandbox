import { Link } from 'react-router-dom'
import { ArrowLeft, Settings } from 'lucide-react'
import SandboxBrand from './SandboxBrand'

export function HomeHeader() {
  return (
    <header className="border-b border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 md:px-12 md:py-5">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <SandboxBrand />
        </Link>
      </div>
    </header>
  )
}

export function ProductHubNav() {
  return (
    <header className="border-b border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3.5 md:px-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          <span>Product Hub</span>
        </Link>
        <Link to="/" className="justify-center transition-opacity hover:opacity-80">
          <SandboxBrand />
        </Link>
        <div />
      </div>
    </header>
  )
}

export function SandboxNav({ backLabel = 'Veriff Sandbox', backTo = '/' }) {
  return (
    <header className="border-b border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-12">
        <Link
          to={backTo}
          className="flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="size-4" />
          <span>{backLabel}</span>
        </Link>
        <Settings className="size-5 text-on-surface-variant" />
      </div>
    </header>
  )
}

export function CenteredTitleNav({ title, backTo = '/' }) {
  return (
    <header className="border-b border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3.5 md:px-12">
        <Link
          to={backTo}
          className="flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <span className="text-sm font-medium text-on-surface">{title}</span>
        <div className="flex justify-end">
          <Settings className="size-5 text-on-surface-variant" />
        </div>
      </div>
    </header>
  )
}

export function AgeEstimationNav() {
  return (
    <header className="border-b border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-on-surface transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="size-4" />
          <span>Age Estimation</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="rounded border border-outline-variant/60 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">
            Internal Tool
          </span>
          <Settings className="size-5 text-on-surface-variant" />
        </div>
      </div>
    </header>
  )
}
