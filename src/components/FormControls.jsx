import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

const fieldBase =
  'w-full appearance-none rounded-lg bg-surface px-3 py-2.5 text-sm text-on-surface shadow-xs ring-1 ring-outline-variant/80 outline-none transition-all duration-150 placeholder:text-on-surface-variant/70 hover:ring-outline focus:ring-2 focus:ring-primary/40'

const optionBase =
  'flex cursor-pointer gap-3 rounded-lg px-3 py-3 transition-all duration-150 ring-1'

export function CheckboxOption({ label, checked, onChange }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 ring-1 ${
        checked
          ? 'bg-secondary-container/50 ring-primary/25'
          : 'bg-surface ring-outline-variant/70 hover:bg-surface-container-low hover:ring-outline-variant'
      }`}
    >
      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-150 ${
          checked
            ? 'border-primary bg-primary text-on-primary'
            : 'border-outline-variant bg-surface'
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
      className={`${optionBase} ${
        highlighted || checked
          ? 'bg-secondary-container/40 ring-primary/25'
          : 'bg-transparent ring-outline-variant/50 hover:bg-surface-container-low hover:ring-outline-variant'
      }`}
    >
      <span
        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-150 ${
          checked
            ? 'border-primary bg-primary text-on-primary'
            : 'border-outline-variant bg-surface'
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
        <p className="text-sm font-medium tracking-tight text-on-surface">{label}</p>
        {sublabel && (
          <p className="mt-0.5 text-xs leading-5 text-on-surface-variant">{sublabel}</p>
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
        className={`${fieldBase} pr-10`}
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
        className={`flex ${fieldBase} items-center py-2.5 pl-10 pr-10 text-left ${
          open ? 'ring-2 ring-primary/40' : ''
        }`}
      >
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant" />
        )}
        <span className="truncate">{selected?.label}</span>
        <ChevronDown
          className={`pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 max-h-48 w-full overflow-y-auto rounded-lg bg-surface py-1 shadow-md ring-1 ring-outline-variant/70 ${
            dropUp ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
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
                className={`w-full px-3 py-2 text-left text-sm transition-colors duration-150 hover:bg-surface-container-high ${
                  opt.value === value
                    ? 'bg-secondary-container/50 font-medium text-primary'
                    : 'text-on-surface'
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
      className={`${optionBase} ${
        checked
          ? 'bg-secondary-container/40 ring-primary/25'
          : 'bg-transparent ring-outline-variant/50 hover:bg-surface-container-low hover:ring-outline-variant'
      }`}
    >
      <span
        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-150 ${
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
        <p className="text-sm font-medium tracking-tight text-on-surface">{label}</p>
        {sublabel && (
          <p className="mt-0.5 text-xs leading-5 text-on-surface-variant">{sublabel}</p>
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
      className="rounded-md p-1.5 text-on-surface-variant transition-colors duration-150 hover:bg-surface-container-high hover:text-on-surface"
      aria-label={expanded ? 'Collapse section' : 'Expand section'}
    >
      {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
    </button>
  )
}

export function InfoNote({ children }) {
  return (
    <p className="flex items-start gap-2 text-xs leading-5 text-on-surface-variant">
      <span className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-surface-container-highest text-[9px] font-medium leading-none text-on-surface-variant">
        i
      </span>
      {children}
    </p>
  )
}

export function CodeInline({ children }) {
  return (
    <code className="rounded-md bg-surface-container-high px-1.5 py-0.5 font-mono text-[11px] text-primary">
      {children}
    </code>
  )
}
