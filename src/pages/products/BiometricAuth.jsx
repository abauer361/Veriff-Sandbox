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
      id: '12df6045-3846-3e45-946a-1c2d3e4f5a6b',
      endUserId: 'a1b2c35d-e8f7-9012-3456-7890abcdef12',
      status: 'approved',
      biometricAuthentication: {
        matchedSessionId: 'd46e5f6a-7890-1234-5678-90abcdef1234',
        matchedSessionEndUserId: 'a1b2c35d-e8f7-9012-3456-7890abcdef12',
        details: {
          faceMatch: true,
          livenessPassed: true,
        },
      },
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
    <div className="flex min-h-dvh flex-col">
      <CenteredTitleNav title="Biometric Authentication" />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-12 md:py-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
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

          <ConfigCard icon={Eye} title="Preview" className="lg:min-h-[480px]">
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded bg-surface-container-lowest py-10">
              <div className="relative flex size-48 items-center justify-center rounded-2xl border-2 border-primary/60 shadow-[0_0_30px_rgba(82,220,195,0.15)]">
                <div className="flex size-24 flex-col items-center justify-center rounded-xl border border-dashed border-primary/40">
                  <div className="mb-1 size-8 rounded-full border-2 border-dashed border-primary/50" />
                  <div className="flex gap-3">
                    <span className="size-1.5 rounded-full bg-primary/50" />
                    <span className="size-1.5 rounded-full bg-primary/50" />
                  </div>
                  <div className="mt-1 h-1 w-6 rounded-full border border-primary/40" />
                </div>
              </div>
            </div>
          </ConfigCard>

          <JsonPanel
            title="Webhook Payload Preview"
            data={JSON_BY_METHOD[method]}
            className="lg:min-h-[480px]"
          />
        </div>
      </main>
    </div>
  )
}
