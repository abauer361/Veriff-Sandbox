import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import {
  getDocumentPreviewCandidates,
  getDocumentPreviewLabel,
} from '../data/documentPreviews'

export default function DocumentPreview({ docType, className = '' }) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const candidates = getDocumentPreviewCandidates(docType)
    let candidateIndex = 0

    setIsLoading(true)
    setImageSrc(null)

    function tryNextCandidate() {
      if (cancelled) return

      if (candidateIndex >= candidates.length) {
        setImageSrc(null)
        setIsLoading(false)
        return
      }

      const url = candidates[candidateIndex]
      const image = new Image()

      image.onload = () => {
        if (!cancelled) {
          setImageSrc(url)
          setIsLoading(false)
        }
      }

      image.onerror = () => {
        candidateIndex += 1
        tryNextCandidate()
      }

      image.src = url
    }

    tryNextCandidate()

    return () => {
      cancelled = true
    }
  }, [docType])

  const label = getDocumentPreviewLabel(docType)

  return (
    <div
      className={`relative flex h-full min-h-0 flex-col overflow-hidden rounded bg-surface-container-lowest ${className}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={label}
          className="h-full w-full object-contain object-center"
        />
      ) : (
        <div className="absolute inset-0 opacity-10">
          <div className="grid h-full grid-cols-4 gap-2 p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <FileText key={i} className="size-6 text-on-surface-variant" />
            ))}
          </div>
        </div>
      )}

      {!imageSrc && (
        <div className="relative flex flex-1 flex-col items-center justify-center gap-3 px-6 py-4 text-center">
          <FileText className="size-8 text-on-surface-variant" />
          <p className="text-sm text-on-surface-variant">
            {isLoading ? 'Loading document preview...' : 'Document preview unavailable'}
          </p>
          {!isLoading && (
            <p className="font-mono text-xs text-on-surface-variant/80">
              Add /media/documents/{docType}.jpg
            </p>
          )}
        </div>
      )}
    </div>
  )
}
