import { useEffect, useRef, useState } from 'react'
import { Brain, Eye, Info } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import JsonPanel from '../../components/JsonPanel'
import { AgeEstimationNav } from '../../components/PageNav'

export default function AgeEstimation() {
  const estimatedAge = 30
  const estimatedGender = 0.29370000000000007

  const setupRef = useRef(null)
  const [panelHeight, setPanelHeight] = useState(null)

  useEffect(() => {
    const node = setupRef.current
    if (!node) return

    const updateHeight = () => {
      setPanelHeight(node.getBoundingClientRect().height)
    }

    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(node)
    window.addEventListener('resize', updateHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  const matchedPanelStyle = panelHeight
    ? ({ '--panel-height': `${panelHeight}px` })
    : undefined

  const jsonOutput = {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T14:06:18.320858Z',
      submissionTime: '2026-07-14T14:06:31.960166Z',
      decisionTime: '2026-07-14T14:06:34.446277Z',
      code: 9001,
      id: '70188e34-c8ab-4e99-a362-54aec44104af',
      vendorData: '12345',
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'John',
        lastName: 'Doe',
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        pepSanctionMatch: null,
      },
      document: {
        number: null,
        type: null,
        country: null,
        validFrom: null,
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData: {
        estimatedAge,
        estimatedGender,
      },
      attemptId: '133fb4ca-cd02-4915-b861-d18e652fe51b',
    },
    technicalData: {
      ip: '54.76.48.105',
    },
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <AgeEstimationNav />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-12 md:py-10">
        <div
          className="grid gap-5 lg:grid-cols-3 lg:items-start"
          style={matchedPanelStyle}
        >
          <div ref={setupRef}>
            <ConfigCard icon={Brain} title="Age Estimation Setup">
              <p className="mb-4 text-sm leading-6 text-on-surface-variant">
                Estimate an end-user&apos;s age from selfie images. You receive
                age and gender data in the webhook payload.
              </p>

              <div className="mb-5 space-y-3">
                <div className="rounded border border-outline-variant/30 bg-surface-container-low p-3">
                  <p className="text-sm font-medium text-on-surface">
                    Selfie-based estimation
                  </p>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    Analyze facial features to calculate age probability
                    distribution.
                  </p>
                </div>
                <div className="rounded border border-outline-variant/30 bg-surface-container-low p-3">
                  <p className="text-sm font-medium text-on-surface">
                    Gender distribution analysis
                  </p>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    Includes probability scoring for gender identification.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-3 rounded border border-outline-variant/30 bg-surface-container-low p-3">
                <Info className="size-4 shrink-0 text-on-surface-variant" />
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">
                    Gender Logic
                  </p>
                  <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                    Values closer to <code className="text-primary">0.0</code>{' '}
                    indicate male and <code className="text-primary">1.0</code>{' '}
                    indicate female.
                  </p>
                </div>
              </div>
            </ConfigCard>
          </div>

          <ConfigCard
            icon={Eye}
            title="Preview"
            fill
            className={`min-h-0 overflow-hidden ${panelHeight ? 'lg:h-[var(--panel-height)]' : ''}`}
          >
            <div className="relative h-full min-h-0 overflow-hidden rounded bg-surface-container-lowest">
              <img
                src="/media/people/Alanson_Headshot.jpg"
                alt="Age estimation preview"
                className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </ConfigCard>

          <JsonPanel
            title="Webhook Payload"
            data={jsonOutput}
            fill
            className={`min-h-0 overflow-hidden ${panelHeight ? 'lg:h-[var(--panel-height)]' : ''}`}
          />
        </div>
      </main>
    </div>
  )
}
