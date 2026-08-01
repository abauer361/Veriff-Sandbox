import { useMemo, useState } from 'react'
import { Eye, FileText, SlidersHorizontal } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { RadioOption, SelectField } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import PoaDocumentPreview from '../../components/PoaDocumentPreview'
import ProductPageShell from '../../components/ProductPageShell'
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
    <ProductPageShell
      title="Proof of Address"
      description="Configure PoA extraction parameters."
    >
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 overflow-hidden">
        <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div className="flex min-h-0 flex-col gap-4 overflow-y-auto">
            <ConfigCard
              icon={FileText}
              title="Acceptable Docs"
              className="shrink-0"
            >
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

          <ConfigCard
            icon={Eye}
            title="Preview"
            fill
            className="min-h-[16rem] lg:min-h-0"
          >
            <PoaDocumentPreview docType={docType} className="h-full min-h-0" />
          </ConfigCard>

          <JsonPanel
            data={jsonOutput}
            fill
            className="min-h-[16rem] lg:min-h-0"
          />
        </div>

        <section className="grid shrink-0 gap-4 rounded-xl bg-surface px-4 py-3 shadow-sm ring-1 ring-outline-variant/60 md:grid-cols-[0.9fr_2.1fr] md:px-5">
          <div>
            <h3 className="mb-1 text-[11px] font-medium uppercase tracking-[0.1em] text-on-surface-variant">
              Global Script Support
            </h3>
            <p className="text-xs leading-5 text-on-surface-variant md:text-sm md:leading-5">
              Arabic, Cyrillic, Japanese, and Latin-based scripts are supported
              for automated extraction.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-[11px] font-medium uppercase tracking-[0.1em] text-on-surface-variant">
              Required Fields
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-on-surface-variant md:text-sm">
              <li>Full Name</li>
              <li>Residential Address</li>
              <li>Date of Issue</li>
            </ul>
          </div>
        </section>
      </div>
    </ProductPageShell>
  )
}
