import { ShieldCheck } from 'lucide-react'

export default function SandboxBrand({ className = '' }) {
  return (
    <div className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs">
        <ShieldCheck className="size-[17px] text-on-primary" strokeWidth={2.25} />
      </div>
      <span className="truncate text-[15px] font-semibold tracking-tight text-on-surface md:text-base">
        Veriff Sandbox
      </span>
    </div>
  )
}
