import { useMemo, useState } from 'react'
import { Eye, FileText, Puzzle } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import DocumentPreview from '../../components/DocumentPreview'
import { CheckboxListItem, SelectField } from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import { SandboxNav } from '../../components/PageNav'
import { buildUdocsJsonOutput } from '../../data/udocsResponses'

const DOC_TYPES = [
  {
    value: 'bank_account',
    label: 'Bank Account Ownership',
    documentType: 'bank_account_ownership',
  },
  {
    value: 'source_of_income',
    label: 'Source of Income',
    documentType: 'source_of_income',
  },
  {
    value: 'vehicle_ownership',
    label: 'Vehicle Ownership',
    documentType: 'vehicle_ownership',
  },
  {
    value: 'vehicle_insurance',
    label: 'Vehicle Insurance Policy',
    documentType: 'vehicle_insurance_policy',
  },
  {
    value: 'birth_certificate',
    label: 'Birth Certificate',
    documentType: 'birth_certificate',
  },
]

export default function UnstructuredDocs() {
  const [docType, setDocType] = useState('bank_account')
  const [tampering, setTampering] = useState(true)
  const [addressValidation, setAddressValidation] = useState(false)
  const [addressMatching, setAddressMatching] = useState(false)

  const selectedDoc = DOC_TYPES.find((d) => d.value === docType)

  const jsonOutput = useMemo(
    () =>
      buildUdocsJsonOutput(
        docType,
        { tampering, addressValidation, addressMatching },
        selectedDoc?.documentType,
      ),
    [docType, selectedDoc, tampering, addressValidation, addressMatching],
  )

  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <SandboxNav />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-hidden px-4 py-4 md:px-12 md:py-5">
        <header className="mb-4 shrink-0 space-y-1">
          <h1 className="text-2xl font-bold text-on-surface md:text-[1.75rem] md:leading-8">
            Unstructured Docs Configuration
          </h1>
          <p className="max-w-3xl text-sm leading-5 text-on-surface-variant">
            Configure extractions and checks for non-standard documents to tailor
            the verification process.
          </p>
        </header>

        <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="flex min-h-0 flex-col gap-4 overflow-y-auto">
            <ConfigCard icon={FileText} title="Supported Docs">
              <div className="space-y-3">
                <SelectField
                  value={docType}
                  onChange={setDocType}
                  options={DOC_TYPES}
                />
                <p className="text-xs text-on-surface-variant">
                  Select the document type to configure specific extraction rules.
                </p>
              </div>
            </ConfigCard>

            <ConfigCard icon={Puzzle} title="Add-Ons">
              <div className="space-y-2">
                <CheckboxListItem
                  label="Tampering Checks"
                  sublabel="Detect digital alterations"
                  checked={tampering}
                  onChange={setTampering}
                  highlighted={tampering}
                />
                <CheckboxListItem
                  label="Address Validation"
                  sublabel="Verify against databases"
                  checked={addressValidation}
                  onChange={setAddressValidation}
                />
                <CheckboxListItem
                  label="Address Matching"
                  sublabel="Cross-reference input data"
                  checked={addressMatching}
                  onChange={setAddressMatching}
                />
              </div>
            </ConfigCard>
          </div>

          <ConfigCard icon={Eye} title="Preview" fill className="min-h-0">
            <DocumentPreview docType={docType} className="h-full" />
          </ConfigCard>

          <JsonPanel data={jsonOutput} fill className="min-h-0" />
        </div>
      </main>
    </div>
  )
}
