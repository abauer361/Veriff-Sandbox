import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

function highlightJson(json, indent = 2) {
  const formatted = JSON.stringify(json, null, indent)
  return formatted
    .replace(/"([^"]+)":/g, '<span class="text-code-key">"$1"</span>:')
    .replace(/: "([^"]*)"/g, ': <span class="text-code-string">"$1"</span>')
    .replace(/: (\d+\.?\d*)/g, ': <span class="text-code-number">$1</span>')
    .replace(/: (true|false)/g, ': <span class="text-code-boolean">$1</span>')
    .replace(/: (null)/g, ': <span class="text-code-null">$1</span>')
}

export default function JsonPanel({
  title = 'response.json',
  data,
  className = '',
  showCopy = true,
  compact = false,
  fill = false,
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      className={`flex min-w-0 flex-col overflow-hidden rounded-xl bg-surface shadow-sm ring-1 ring-outline-variant/60 ${
        fill ? 'h-full min-h-0' : ''
      } ${className}`}
    >
      <div className="flex shrink-0 items-center justify-between px-4 py-3 md:px-5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[11px] text-on-surface-variant">
            {'</>'}
          </span>
          <h2 className="font-mono text-[13px] font-medium tracking-tight text-on-surface">
            {title}
          </h2>
        </div>
        {showCopy && (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md p-1.5 text-on-surface-variant transition-colors duration-150 hover:bg-surface-container-high hover:text-on-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={copied ? 'Copied' : 'Copy JSON'}
          >
            {copied ? (
              <Check className="size-3.5 text-primary" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </button>
        )}
      </div>
      <pre
        className={`min-h-0 min-w-0 w-full max-w-full overflow-x-auto overflow-y-auto border-t border-outline-variant/50 bg-surface-container-low p-4 font-mono text-[12px] leading-5 text-on-surface md:p-5 md:text-[13px] md:leading-6 ${
          fill || !compact ? 'flex-1' : ''
        }`}
      >
        <code
          className="block w-max min-w-full whitespace-pre"
          dangerouslySetInnerHTML={{
            __html: highlightJson(data, 2),
          }}
        />
      </pre>
    </section>
  )
}
