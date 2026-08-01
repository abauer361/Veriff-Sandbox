import { Braces, Info, RefreshCw, Shield } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { CodeInline } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import ProductPageShell from '../../components/ProductPageShell'

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
    acceptanceTime: '2026-07-14T13:51:46.195927Z',
    submissionTime: '2026-07-14T13:51:54.858632Z',
    decisionTime: '2026-07-14T13:51:56.822999Z',
    code: 9001,
    id: '1024a47d-877d-44ff-8c1c-c08705143156',
    vendorData: null,
    endUserId: null,
    status: 'approved',
    reason: null,
    reasonCode: null,
    person: {
      firstName: 'Estrella',
      lastName: 'Bauer',
      citizenship: null,
      idNumber: null,
      gender: null,
      dateOfBirth: '1999-01-25',
      yearOfBirth: null,
      placeOfBirth: null,
      nationality: null,
      pepSanctionMatch: 'no match',
    },
    document: {
      number: null,
      type: null,
      country: 'US',
      validFrom: null,
      validUntil: null,
      state: null,
    },
    comments: [],
    additionalVerifiedData: {},
    attemptId: 'e5580381-0dfa-4f6e-8bb1-30871baab984',
  },
  technicalData: {
    ip: null,
  },
}

export default function AmlScreening() {
  return (
    <ProductPageShell
      title="AML Screening Configuration"
      description="Configure automated screening against global watchlists and adverse media to meet your KYC/AML compliance requirements."
    >
      <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <ConfigCard
          icon={Shield}
          title="Screening Lists"
          fill
          className="min-h-[14rem] lg:min-h-0"
        >
          <ul className="divide-y divide-outline-variant/30">
            {SCREENING_LISTS.map((item) => (
              <li key={item} className="py-2 text-sm leading-5 text-on-surface">
                {item}
              </li>
            ))}
          </ul>
        </ConfigCard>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto">
          <ConfigCard icon={RefreshCw} title="Ongoing Monitoring" className="shrink-0">
            <p className="text-sm leading-6 text-on-surface-variant">
              Once enabled, Veriff continuously monitors your customers against
              global watchlists and adverse media. The system runs daily
              background checks and sends webhook notifications when new risks
              are detected.
            </p>
          </ConfigCard>

          <ConfigCard
            icon={Braces}
            title="Data Mapping"
            fill
            className="min-h-0 flex-1 max-lg:min-h-0"
          >
            <div className="flex h-full flex-col justify-between gap-4">
              <p className="text-sm leading-6 text-on-surface-variant">
                Map your customer entities using a unique{' '}
                <CodeInline>endUserId</CodeInline> or{' '}
                <CodeInline>vendorData</CodeInline> identifier. This allows
                Veriff to maintain a persistent profile for ongoing screening.
              </p>
              <div className="flex gap-3 rounded-lg bg-secondary-container/50 p-3">
                <Info
                  className="size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                <p className="text-xs leading-5 text-on-surface-variant">
                  Providing a consistent identifier allows our engine to link
                  subsequent verification attempts and updates to the same
                  persistent entity profile.
                </p>
              </div>
            </div>
          </ConfigCard>
        </div>

        <JsonPanel data={AML_JSON} fill className="min-h-[16rem] lg:min-h-0" />
      </div>
    </ProductPageShell>
  )
}
