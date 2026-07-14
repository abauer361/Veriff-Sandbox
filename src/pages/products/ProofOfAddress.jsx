import { useMemo, useState } from 'react'
import { Eye, FileText, SlidersHorizontal } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import { RadioOption, SelectField } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import { SandboxNav } from '../../components/PageNav'

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

  const selectedDoc = DOC_OPTIONS.find((d) => d.value === docType)

  const jsonOutput = useMemo(
    () => ({
      status: mode === 'capture' ? 'submitted' : 'approved',
      document: {
        type: selectedDoc?.type,
        issue_date: '2023-10-15',
      },
      extracted_data:
        mode === 'capture'
          ? null
          : {
              first_name: 'Jane',
              last_name: 'Doe',
              address: {
                full_address: '123 Secure Lane',
                parsed: mode === 'standard',
              },
            },
      extraction_mode: mode,
    }),
    [selectedDoc, mode],
  )

  return (
    <div className="flex min-h-dvh flex-col">
      <SandboxNav />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-12 md:py-10">
        <header className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-on-surface md:text-4xl">
            Proof of Address
          </h1>
          <p className="text-sm text-on-surface-variant md:text-base">
            Configure PoA extraction parameters.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <ConfigCard icon={FileText} title="Acceptable Docs">
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

            <ConfigCard icon={SlidersHorizontal} title="Extraction Mode">
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

          <ConfigCard icon={Eye} title="Preview" className="lg:min-h-[400px]">
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded bg-surface-container-low p-6">
              <div className="relative w-full max-w-[220px] rotate-[-4deg] rounded bg-white/90 p-3 shadow-lg">
                <div className="space-y-1 text-[8px] leading-tight text-gray-800">
                  <p className="text-[10px] font-bold">Electricity Statement</p>
                  <p className="text-gray-500">Account: ****4821</p>
                  <div className="mt-2 h-16 rounded bg-gray-100" />
                  <p>Jane Doe</p>
                  <p>123 Secure Lane</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-8 border-2 border-primary/60">
                <span className="absolute -left-px -top-px size-4 border-l-2 border-t-2 border-primary" />
                <span className="absolute -right-px -top-px size-4 border-r-2 border-t-2 border-primary" />
                <span className="absolute -bottom-px -left-px size-4 border-b-2 border-l-2 border-primary" />
                <span className="absolute -bottom-px -right-px size-4 border-b-2 border-r-2 border-primary" />
              </div>
            </div>
          </ConfigCard>

          <JsonPanel data={jsonOutput} className="lg:min-h-[400px]" />
        </div>

        <section className="mt-5 grid gap-5 rounded-lg border border-outline-variant/40 bg-surface-container p-5 md:grid-cols-2 md:p-6">
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
      </main>
    </div>
  )
}
