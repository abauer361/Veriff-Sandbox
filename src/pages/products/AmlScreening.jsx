import { Braces, Info, RefreshCw, Shield } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { CodeInline } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import { CenteredTitleNav } from '../../components/PageNav'

const SCREENING_LISTS = [
  'Sanctions',
  'PEP Class 1',
  'PEP Class 2',
  'PEP Class 3',
  'PEP Class 4',
  'Law Enforcement and Regulatory Watchlist',
  'Financial and Economic Crime',
  'Violent & Organized Crime',
  'Terrorism & Security',
  'Regulatory & Professional Conduct',
  'Other',
]

const AML_JSON = {
  status: 'success',
  verification: {
    id: '12df6045-3846-3e45-946a-1c2d3e4f5a6b',
    code: 9001,
    person: {
      firstName: 'John',
      lastName: 'Doe',
    },
    document: {
      type: 'PASSPORT',
      country: 'GBR',
    },
    status: 'approved',
  },
  aml: {
    status: 'match_found',
    timestamp: '2026-03-07T07:15:00Z',
    matches: [
      {
        type: 'sanction',
        source: 'OFAC',
        name: 'John Doe',
        severity: 'critical',
        matchScore: 0.98,
      },
      {
        type: 'pep',
        source: 'PEP Class 2',
        name: 'John Doe',
        severity: 'high',
        matchScore: 0.85,
      },
    ],
  },
}

export default function AmlScreening() {
  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <CenteredTitleNav title="Biometric Authentication" />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-hidden px-4 py-4 md:px-12 md:py-5">
        <header className="mb-4 shrink-0 space-y-1">
          <h1 className="text-2xl font-bold text-on-surface md:text-[1.75rem] md:leading-8">
            AML Screening Configuration
          </h1>
          <p className="max-w-3xl text-sm leading-5 text-on-surface-variant">
            Configure automated screening against global watchlists and adverse
            media to meet your KYC/AML compliance requirements.
          </p>
        </header>

        <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <ConfigCard icon={Shield} title="Screening Lists" fill>
            <ul className="divide-y divide-outline-variant/20">
              {SCREENING_LISTS.map((item) => (
                <li key={item} className="py-2 text-sm leading-5 text-on-surface">
                  {item}
                </li>
              ))}
            </ul>
          </ConfigCard>

          <div className="flex h-full min-h-0 flex-col gap-4">
            <ConfigCard icon={RefreshCw} title="Ongoing Monitoring">
              <p className="text-sm leading-6 text-on-surface-variant">
                Once enabled, Veriff continuously monitors your customers against
                global watchlists and adverse media. The system runs daily
                background checks and sends webhook notifications when new risks
                are detected.
              </p>
            </ConfigCard>

            <ConfigCard icon={Braces} title="Data Mapping" fill className="min-h-0 flex-1">
              <div className="flex h-full flex-col justify-between gap-4">
                <p className="text-sm leading-6 text-on-surface-variant">
                  Map your customer entities using a unique{' '}
                  <CodeInline>endUserId</CodeInline> or{' '}
                  <CodeInline>vendorData</CodeInline> identifier. This allows
                  Veriff to maintain a persistent profile for ongoing screening.
                </p>
                <div className="flex gap-3 rounded border-l-2 border-primary bg-surface-container-low p-3">
                  <Info className="size-4 shrink-0 text-primary" />
                  <p className="text-xs leading-5 text-on-surface-variant">
                    Providing a consistent identifier allows our engine to link
                    subsequent verification attempts and updates to the same
                    persistent entity profile.
                  </p>
                </div>
              </div>
            </ConfigCard>
          </div>

          <JsonPanel data={AML_JSON} fill />
        </div>
      </main>
    </div>
  )
}
