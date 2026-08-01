import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SandboxBrand from './SandboxBrand'

const headerShell =
  'sticky top-0 z-40 border-b border-outline-variant/50 bg-background/80 backdrop-blur-xl'

const headerInner = 'mx-auto flex max-w-7xl items-center px-4 py-3.5 md:px-12'

const backLink =
  'inline-flex items-center gap-2 rounded-md text-sm text-on-surface-variant transition-colors duration-150 hover:text-on-surface'

export function HomeHeader() {
  return (
    <header className={headerShell}>
      <div className={headerInner}>
        <Link to="/" className="transition-opacity duration-150 hover:opacity-70">
          <SandboxBrand />
        </Link>
      </div>
    </header>
  )
}

export function ProductHubNav() {
  return (
    <header className={headerShell}>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3.5 md:px-12">
        <Link to="/" className={backLink}>
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          <span>Product Hub</span>
        </Link>
        <Link to="/" className="justify-center transition-opacity duration-150 hover:opacity-70">
          <SandboxBrand />
        </Link>
        <div />
      </div>
    </header>
  )
}

export function SandboxNav({ backLabel = 'Veriff Sandbox', backTo = '/' }) {
  return (
    <header className={headerShell}>
      <div className={headerInner}>
        <Link to={backTo} className={`${backLink} font-medium text-on-surface`}>
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          <span>{backLabel}</span>
        </Link>
      </div>
    </header>
  )
}

export function CenteredTitleNav({ title, backTo = '/' }) {
  return (
    <header className={headerShell}>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3.5 md:px-12">
        <Link to={backTo} className={`${backLink} w-fit`} aria-label="Back">
          <ArrowLeft className="size-4" strokeWidth={1.75} />
        </Link>
        <span className="text-sm font-medium tracking-tight text-on-surface">
          {title}
        </span>
        <div />
      </div>
    </header>
  )
}

export function AgeEstimationNav() {
  return (
    <header className={headerShell}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-12">
        <Link to="/" className={`${backLink} font-medium text-on-surface`}>
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          <span>Age Estimation</span>
        </Link>
        <span className="rounded-md bg-surface-container-high px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-on-surface-variant">
          Internal Tool
        </span>
      </div>
    </header>
  )
}
