import { useEffect, useState } from 'react'
import { CreditCard } from 'lucide-react'

const IMAGE_EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png']

function getCountryLabel(countryCode, options = []) {
  return options.find((option) => option.value === countryCode)?.label ?? countryCode
}

export default function CountryIdPreview({
  country,
  countryOptions = [],
  className = '',
}) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    let extensionIndex = 0

    setIsLoading(true)
    setImageSrc(null)

    function tryNextExtension() {
      if (cancelled) return

      if (extensionIndex >= IMAGE_EXTENSIONS.length) {
        setImageSrc(null)
        setIsLoading(false)
        return
      }

      const url = `/media/id-images/${country}.${IMAGE_EXTENSIONS[extensionIndex]}`
      const image = new Image()

      image.onload = () => {
        if (!cancelled) {
          setImageSrc(url)
          setIsLoading(false)
        }
      }

      image.onerror = () => {
        extensionIndex += 1
        tryNextExtension()
      }

      image.src = url
    }

    tryNextExtension()

    return () => {
      cancelled = true
    }
  }, [country])

  const countryLabel = getCountryLabel(country, countryOptions)

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded border border-outline-variant/50 bg-surface-container-low ${className}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${countryLabel} ID document`}
          className="h-full w-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
          <CreditCard className="mb-2 size-7 text-on-surface-variant/50" />
          <p className="text-sm text-on-surface-variant">
            {isLoading ? 'Loading document preview...' : 'Document placeholder'}
          </p>
          {!isLoading && (
            <p className="mt-1 font-mono text-xs text-on-surface-variant/80">
              Add /media/id-images/{country}.jpg
            </p>
          )}
        </div>
      )}
    </div>
  )
}
