export default function JsonViewer({ data }) {
  const formatted = JSON.stringify(data, null, 2)

  return (
    <pre className="overflow-x-auto rounded-xl bg-surface-container-low p-4 font-mono text-[13px] leading-6 text-on-surface shadow-sm ring-1 ring-outline-variant/60 md:p-6">
      <code>{formatted}</code>
    </pre>
  )
}
