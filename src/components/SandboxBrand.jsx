import { ShieldCheck } from 'lucide-react'

export default function SandboxBrand({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex size-8 items-center justify-center rounded-md bg-primary-container">
        <ShieldCheck className="size-[18px] text-on-primary-container" strokeWidth={2.5} />
      </div>
      <span className="text-base font-semibold tracking-tight text-primary md:text-lg">
        Veriff Sandbox
      </span>
    </div>
  )
}
