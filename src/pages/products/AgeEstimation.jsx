import { Brain, Eye, Info } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import JsonPanel from '../../components/JsonPanel'
import ProductPageShell from '../../components/ProductPageShell'

export default function AgeEstimation() {
  const estimatedAge = 30
  const estimatedGender = 0.29370000000000007

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
    <ProductPageShell
      title="Age Estimation"
      description="Estimate an end-user's age from selfie images. Age and gender data arrive in the webhook payload."
    >
      <div className="grid w-full min-w-0 gap-4 lg:min-h-0 lg:flex-1 lg:grid-cols-3 lg:items-stretch">
        <div className="flex min-w-0 flex-col gap-4 lg:min-h-0 lg:overflow-y-auto">
          <ConfigCard icon={Brain} title="Age Estimation Setup">
            <div className="mb-4 space-y-3">
              <div className="rounded-lg bg-surface-container-low p-3 ring-1 ring-outline-variant/40">
                <p className="text-sm font-medium tracking-tight text-on-surface">
                  Selfie-based estimation
                </p>
                <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                  Analyze facial features to calculate age probability
                  distribution.
                </p>
              </div>
              <div className="rounded-lg bg-surface-container-low p-3 ring-1 ring-outline-variant/40">
                <p className="text-sm font-medium tracking-tight text-on-surface">
                  Gender distribution analysis
                </p>
                <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                  Includes probability scoring for gender identification.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-surface-container-low p-3 ring-1 ring-outline-variant/40">
              <Info
                className="size-4 shrink-0 text-on-surface-variant"
                strokeWidth={1.75}
              />
              <div className="min-w-0">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-on-surface-variant">
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
          className="min-h-64 min-w-0 lg:min-h-0"
        >
          <div className="relative h-full min-h-0 overflow-hidden rounded-lg bg-surface-container-low">
            <img
              src="/media/people/Alanson_Headshot.jpg"
              alt="Age estimation preview"
              className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-on-surface/15" />
          </div>
        </ConfigCard>

        <JsonPanel
          title="JSON Preview"
          data={jsonOutput}
          fill
          className="min-h-72 min-w-0 lg:min-h-0"
        />
      </div>
    </ProductPageShell>
  )
}
