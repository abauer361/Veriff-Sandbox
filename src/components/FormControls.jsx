import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

export function CheckboxOption({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded border border-outline-variant/40 bg-surface-container-low px-3 py-2.5 transition-colors hover:border-primary/30">
      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded-sm border ${
          checked
            ? 'border-primary bg-primary text-on-primary'
            : 'border-outline-variant bg-surface-container-high'
        }`}
      >
        {checked && <Check className="size-3" strokeWidth={3} />}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className="text-sm text-on-surface">{label}</span>
    </label>
  )
}

export function CheckboxListItem({ label, sublabel, checked, onChange, highlighted }) {
  return (
    <label
      className={`flex cursor-pointer gap-3 rounded border px-3 py-3 transition-colors ${
        highlighted || checked
          ? 'border-primary/30 bg-surface-container-high'
          : 'border-outline-variant/30 bg-transparent hover:border-outline-variant/60'
      }`}
    >
      <span
        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-sm border ${
          checked
            ? 'border-primary bg-primary text-on-primary'
            : 'border-outline-variant bg-surface-container-high'
        }`}
      >
        {checked && <Check className="size-3" strokeWidth={3} />}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div>
        <p className="text-sm font-medium text-on-surface">{label}</p>
        {sublabel && (
          <p className="mt-0.5 text-xs text-on-surface-variant">{sublabel}</p>
        )}
      </div>
    </label>
  )
}

export function SelectField({ value, onChange, options, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded border border-outline-variant/50 bg-surface-container-low px-3 py-2.5 pr-10 text-sm text-on-surface outline-none transition-colors focus:border-primary"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant" />
    </div>
  )
}

export function SearchSelect({ value, onChange, options, icon: Icon }) {
  const [open, setOpen] = useState(false)
  const [dropUp, setDropUp] = useState(false)
  const containerRef = useRef(null)

  const selected = options.find((opt) => opt.value === value)

  function toggleOpen() {
    if (!open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const estimatedMenuHeight = options.length * 40 + 8
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top
      setDropUp(spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow)
    }
    setOpen((current) => !current)
  }

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event) {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center rounded border border-outline-variant/50 bg-surface-container-low py-2.5 pl-10 pr-10 text-left text-sm text-on-surface outline-none transition-colors hover:border-primary/30 focus:border-primary"
      >
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant" />
        )}
        <span className="truncate">{selected?.label}</span>
        <ChevronDown
          className={`pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 max-h-48 w-full overflow-y-auto rounded border border-outline-variant/50 bg-surface-container py-1 shadow-lg ${
            dropUp ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
        >
          {options.map((opt) => (
            <li key={opt.value} role="option" aria-selected={opt.value === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-surface-container-high ${
                  opt.value === value ? 'bg-surface-container-high text-primary' : 'text-on-surface'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function RadioOption({ label, sublabel, checked, onChange, name }) {
  return (
    <label
      className={`flex cursor-pointer gap-3 rounded border px-3 py-3 transition-colors ${
        checked
          ? 'border-primary/40 bg-surface-container-high'
          : 'border-outline-variant/30 hover:border-outline-variant/60'
      }`}
    >
      <span
        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2 ${
          checked ? 'border-primary' : 'border-outline-variant'
        }`}
      >
        {checked && <span className="size-2 rounded-full bg-primary" />}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div>
        <p className="text-sm font-medium text-on-surface">{label}</p>
        {sublabel && (
          <p className="mt-0.5 text-xs text-on-surface-variant">{sublabel}</p>
        )}
      </div>
    </label>
  )
}

export function CollapseToggle({ expanded, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-on-surface-variant transition-colors hover:text-primary"
      aria-label={expanded ? 'Collapse section' : 'Expand section'}
    >
      {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
    </button>
  )
}

export function InfoNote({ children }) {
  return (
    <p className="flex items-start gap-2 text-xs leading-5 text-on-surface-variant">
      <span className="mt-0.5 size-3.5 shrink-0 rounded-full border border-on-surface-variant/50 text-center text-[9px] leading-3.5">
        i
      </span>
      {children}
    </p>
  )
}

export function CodeInline({ children }) {
  return (
    <code className="rounded bg-surface-container-high px-1.5 py-0.5 font-mono text-xs text-primary">
      {children}
    </code>
  )
}
