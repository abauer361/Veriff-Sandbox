import { useMemo, useState } from 'react'
import { Eye, FileText, SlidersHorizontal } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { RadioOption, SelectField } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import PoaDocumentPreview from '../../components/PoaDocumentPreview'
import { SandboxNav } from '../../components/PageNav'
import { buildPoaJsonOutput } from '../../data/poaResponses'

const DOC_OPTIONS = [
  { value: 'utility_bill', label: 'Utility Bill', type: 'UTILITY_BILL' },
  { value: 'bank_statement', label: 'Bank Statement', type: 'BANK_STATEMENT' },
  { value: 'tax_document', label: 'Tax Document', type: 'TAX_DOCUMENT' },
]

const MODES = [
  {
    id: 'standard',
    label: 'Standard',
    sublabel: 'Full extraction rules applied',
  },
  { id: 'lite', label: 'Lite', sublabel: 'Faster, reduced validation' },
  { id: 'capture', label: 'Capture', sublabel: 'Image capture only' },
]

export default function ProofOfAddress() {
  const [docType, setDocType] = useState('utility_bill')
  const [mode, setMode] = useState('standard')

  const jsonOutput = useMemo(
    () => buildPoaJsonOutput(docType, mode),
    [docType, mode],
  )

  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <SandboxNav />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-hidden px-4 py-4 md:px-12 md:py-5">
        <header className="mb-4 shrink-0 space-y-1">
          <h1 className="text-2xl font-bold text-on-surface md:text-[1.75rem] md:leading-8">
            Proof of Address
          </h1>
          <p className="text-sm text-on-surface-variant md:text-base">
            Configure PoA extraction parameters.
          </p>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden">
          <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:items-stretch">
            <div className="flex h-full min-h-0 flex-col gap-4 overflow-y-auto">
              <ConfigCard icon={FileText} title="Acceptable Docs" className="shrink-0">
                <div className="space-y-3">
                  <SelectField
                    value={docType}
                    onChange={setDocType}
                    options={DOC_OPTIONS}
                  />
                  <p className="text-xs text-on-surface-variant">
                    Select allowed PoA document categories.
                  </p>
                </div>
              </ConfigCard>

              <ConfigCard
                icon={SlidersHorizontal}
                title="Extraction Mode"
                fill
                className="min-h-0 flex-1"
              >
                <div className="space-y-2">
                  {MODES.map((m) => (
                    <RadioOption
                      key={m.id}
                      name="extraction-mode"
                      label={m.label}
                      sublabel={m.sublabel}
                      checked={mode === m.id}
                      onChange={() => setMode(m.id)}
                    />
                  ))}
                </div>
              </ConfigCard>
            </div>

            <ConfigCard icon={Eye} title="Preview" fill className="min-h-0">
              <PoaDocumentPreview docType={docType} className="h-full" />
            </ConfigCard>

            <JsonPanel data={jsonOutput} fill className="min-h-0" />
          </div>

          <section className="grid shrink-0 gap-5 rounded-lg border border-outline-variant/40 bg-surface-container p-5 md:grid-cols-[0.9fr_2.1fr] md:p-6">
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                Global Script Support
              </h3>
              <p className="text-sm leading-6 text-on-surface-variant">
                Arabic, Cyrillic, Japanese, and Latin-based scripts are supported
                for automated extraction.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                Required Fields
              </h3>
              <ul className="space-y-1 text-sm text-on-surface-variant">
                <li>• Full Name</li>
                <li>• Residential Address</li>
                <li>• Date of Issue</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
