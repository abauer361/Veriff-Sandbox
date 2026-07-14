import { useState } from 'react'
import { Brain, Camera, Eye, Info } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { SelectField } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import { AgeEstimationNav } from '../../components/PageNav'

const CONFIDENCE_OPTIONS = [
  { value: '0.95', label: 'High (0.95)' },
  { value: '0.85', label: 'Medium (0.85)' },
  { value: '0.70', label: 'Low (0.70)' },
]

export default function AgeEstimation() {
  const [minAge, setMinAge] = useState('18')
  const [confidence, setConfidence] = useState('0.95')
  const [applied, setApplied] = useState(false)

  const estimatedAge = 32
  const estimatedGender = 0.613
  const likelyGender = estimatedGender >= 0.5 ? 'Female' : 'Male'

  const jsonOutput = {
    status: 'success',
    verification: {
      id: '12df6045-3846-3e45-946a-1c2d3e4f5a6b',
      status: 'approved',
      additionalVerifiedData: {
        estimatedAge,
        estimatedGender,
        minAgeThreshold: Number(minAge),
        confidenceLevel: Number(confidence),
      },
      decisionTime: '2026-03-07T07:15:00Z',
    },
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <AgeEstimationNav />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-12 md:py-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
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

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs text-on-surface-variant">
                    Min Age Threshold
                  </label>
                  <input
                    type="number"
                    value={minAge}
                    onChange={(e) => setMinAge(e.target.value)}
                    className="w-full rounded border border-outline-variant/50 bg-surface-container-low px-3 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-on-surface-variant">
                    Confidence Level
                  </label>
                  <SelectField
                    value={confidence}
                    onChange={setConfidence}
                    options={CONFIDENCE_OPTIONS}
                  />
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

              <button
                type="button"
                onClick={() => setApplied(true)}
                className="mt-5 w-full rounded bg-primary-container py-2.5 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
              >
                Apply Configuration
              </button>
            </ConfigCard>
          </div>

          <ConfigCard icon={Eye} title="Preview" className="lg:min-h-[520px]">
            <div className="mb-3 flex items-center justify-end gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                Active Feed
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative mb-6 flex aspect-[3/4] w-full max-w-[220px] items-center justify-center rounded bg-surface-container-lowest">
                <div className="flex size-40 items-center justify-center rounded-2xl border-2 border-primary/60 shadow-[0_0_24px_rgba(82,220,195,0.2)]">
                  <div className="flex size-20 flex-col items-center justify-center rounded-xl border border-dashed border-primary/40">
                    <div className="mb-1 size-7 rounded-full border-2 border-dashed border-primary/50" />
                    <div className="flex gap-2">
                      <span className="size-1 rounded-full bg-primary/50" />
                      <span className="size-1 rounded-full bg-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mb-6 inline-flex items-center gap-2 rounded border border-outline-variant/50 px-4 py-2 text-sm text-on-surface transition-colors hover:border-primary/50"
              >
                <Camera className="size-4" />
                Capture Selfie
              </button>
              <div className="grid w-full grid-cols-2 gap-3">
                <div className="rounded border border-outline-variant/30 bg-surface-container-low p-3 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Estimated Age
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary">
                    {applied ? estimatedAge : '—'}
                  </p>
                </div>
                <div className="rounded border border-outline-variant/30 bg-surface-container-low p-3 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Likely Gender
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary">
                    {applied ? likelyGender : '—'}
                  </p>
                </div>
              </div>
            </div>
          </ConfigCard>

          <JsonPanel
            title="Webhook Payload"
            data={jsonOutput}
            className="lg:min-h-[520px]"
          />
        </div>
      </main>
    </div>
  )
}
