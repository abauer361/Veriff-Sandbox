import DocumentPreview from './DocumentPreview'

export default function PoaDocumentPreview({ docType, className = '' }) {
  return (
    <div
      className={`relative flex h-full min-h-0 overflow-hidden rounded-lg bg-surface-container-low ${className}`}
    >
      <div className="absolute inset-[7%] overflow-hidden rounded-md bg-surface shadow-sm ring-1 ring-outline-variant/40">
        <DocumentPreview docType={docType} className="h-full bg-surface" />
      </div>
      <div className="pointer-events-none absolute inset-[7%] ring-2 ring-primary/50">
        <span className="absolute -left-px -top-px size-3.5 border-l-2 border-t-2 border-primary" />
        <span className="absolute -right-px -top-px size-3.5 border-r-2 border-t-2 border-primary" />
        <span className="absolute -bottom-px -left-px size-3.5 border-b-2 border-l-2 border-primary" />
        <span className="absolute -bottom-px -right-px size-3.5 border-b-2 border-r-2 border-primary" />
      </div>
    </div>
  )
}
