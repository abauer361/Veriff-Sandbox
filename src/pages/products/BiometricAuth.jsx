import { useState } from 'react'
import { AlertCircle, Eye, Fingerprint } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { CodeInline } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import { CenteredTitleNav } from '../../components/PageNav'

const AUTH_METHODS = [
  {
    id: 'regular',
    title: 'Regular Biometric Authentication',
    description:
      'Verification against a previously stored biometric template. Recommended for standard flows.',
  },
  {
    id: 'selfie',
    title: 'Selfie-to-Selfie',
    description:
      'Direct comparison between two provided selfie images without storing a persistent template.',
  },
]

const JSON_BY_METHOD = {
  regular: {
    status: 'success',
    verification: {
      acceptanceTime: '2026-06-17T16:09:35.873988Z',
      submissionTime: '2026-06-17T16:09:46.934392Z',
      decisionTime: '2026-06-17T16:09:48.540944Z',
      code: 9001,
      id: '744550e8-fe0b-4449-833b-fc9b7f445e64',
      vendorData: 'testVendorData',
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: null,
        lastName: null,
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
        selfieQuality: 'Yes',
      },
      biometricAuthentication: {
        matchedSessionId: 'f3396555-9a42-4c7d-9f65-2d426c6809ca',
        matchedSessionVendorData: 'testVendorData',
        details: {
          faceLiveness: 'Yes',
          mediaNotInjected: 'Yes',
          faceImageQualitySufficient: 'Yes',
          behavioralRisk: 'No',
        },
      },
      attemptId: '094dc066-8ead-4109-8260-c9f7c24dd609',
    },
    technicalData: {
      ip: '44.224.64.122',
    },
  },
  selfie: {
    status: 'success',
    verification: {
      id: '12df6045-3846-3e45-946a-1c2d3e4f5a6b',
      status: 'approved',
      biometricAuthentication: {
        method: 'selfie_to_selfie',
        details: {
          faceMatch: true,
          livenessPassed: true,
        },
      },
    },
  },
}

export default function BiometricAuth() {
  const [method, setMethod] = useState('regular')

  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <CenteredTitleNav title="Biometric Authentication" />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-hidden px-4 py-4 md:px-12 md:py-5">
        <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="flex h-full min-h-0 flex-col gap-4 overflow-y-auto">
            <ConfigCard icon={Fingerprint} title="Authentication Setup">
              <p className="mb-4 text-sm text-on-surface-variant">
                Configure how your users will authenticate biometrically.
              </p>
              <div className="space-y-3">
                {AUTH_METHODS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id)}
                    className={`w-full rounded border px-4 py-3 text-left transition-colors ${
                      method === m.id
                        ? 'border-primary/40 bg-surface-container-high'
                        : 'border-outline-variant/30 hover:border-outline-variant/60'
                    }`}
                  >
                    <p className="text-sm font-medium text-on-surface">{m.title}</p>
                    <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                      {m.description}
                    </p>
                  </button>
                ))}
              </div>
            </ConfigCard>

            <div className="rounded-lg border border-outline-variant/40 bg-surface-container p-4">
              <div className="flex gap-3">
                <AlertCircle className="size-5 shrink-0 text-tertiary" />
                <p className="text-xs leading-5 text-on-surface-variant">
                  Mapping users requires either a UUID v4{' '}
                  <CodeInline>endUserId</CodeInline> or a custom{' '}
                  <CodeInline>vendorData</CodeInline> string (up to 1,000
                  characters). This ensures consistent user tracking across
                  enrollment and authentication sessions.
                </p>
              </div>
            </div>
          </div>

          <ConfigCard icon={Eye} title="Preview" fill className="min-h-0">
            <div className="relative h-full min-h-0 overflow-hidden rounded bg-surface-container-lowest">
              <img
                src="/media/people/Executive%20Bio%20Sample%20Photo.png"
                alt="Biometric scan preview"
                className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </ConfigCard>

          <JsonPanel
            title="Webhook Payload Preview"
            data={JSON_BY_METHOD[method]}
            fill
            className="min-h-0"
          />
        </div>
      </main>
    </div>
  )
}
