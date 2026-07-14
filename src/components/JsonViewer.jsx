export default function JsonViewer({ data }) {
  const formatted = JSON.stringify(data, null, 2)

  return (
    <pre className="overflow-x-auto rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 font-mono text-sm leading-5 text-on-surface md:p-6">
      <code>{formatted}</code>
    </pre>
  )
}
