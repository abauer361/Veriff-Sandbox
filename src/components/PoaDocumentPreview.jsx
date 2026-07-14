import DocumentPreview from './DocumentPreview'

export default function PoaDocumentPreview({ docType, className = '' }) {
  return (
    <div
      className={`relative flex h-full min-h-[280px] overflow-hidden rounded bg-surface-container-low ${className}`}
    >
      <div className="absolute inset-8 overflow-hidden rounded-sm bg-white shadow-sm">
        <DocumentPreview docType={docType} className="h-full bg-white" />
      </div>
      <div className="pointer-events-none absolute inset-8 border-2 border-primary/60">
        <span className="absolute -left-px -top-px size-4 border-l-2 border-t-2 border-primary" />
        <span className="absolute -right-px -top-px size-4 border-r-2 border-t-2 border-primary" />
        <span className="absolute -bottom-px -left-px size-4 border-b-2 border-l-2 border-primary" />
        <span className="absolute -bottom-px -right-px size-4 border-b-2 border-r-2 border-primary" />
      </div>
    </div>
  )
}
