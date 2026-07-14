import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

function highlightJson(json, indent = 2) {
  const formatted = JSON.stringify(json, null, indent)
  return formatted
    .replace(/"([^"]+)":/g, '<span class="text-secondary">"$1"</span>:')
    .replace(/: "([^"]*)"/g, ': <span class="text-primary">"$1"</span>')
    .replace(/: (\d+\.?\d*)/g, ': <span class="text-primary">$1</span>')
    .replace(/: (true|false)/g, ': <span class="text-primary">$1</span>')
    .replace(/: (null)/g, ': <span class="text-on-surface-variant">$1</span>')
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
      className={`flex min-w-0 flex-col overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container ${
        fill ? 'h-full min-h-0' : ''
      } ${className}`}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-outline-variant/30 px-4 py-3.5 md:px-5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-sm text-on-surface-variant">&lt;&gt;</span>
          <h2 className="font-mono text-sm text-on-surface-variant">{title}</h2>
        </div>
        {showCopy && (
          <button
            type="button"
            onClick={handleCopy}
            className="text-on-surface-variant transition-colors hover:text-primary"
            aria-label="Copy JSON"
          >
            {copied ? (
              <Check className="size-4 text-primary" />
            ) : (
              <Copy className="size-4" />
            )}
          </button>
        )}
      </div>
      <pre
        className={`min-h-0 min-w-0 w-full max-w-full overflow-x-auto overflow-y-auto p-4 font-mono text-xs leading-5 text-on-surface md:p-5 md:text-sm md:leading-6 ${
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
