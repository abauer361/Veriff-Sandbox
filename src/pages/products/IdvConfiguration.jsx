import { useMemo, useState } from 'react'
import { Globe, Search } from 'lucide-react'
import ConfigCard from '../../components/ConfigCard'
import CountryIdPreview from '../../components/CountryIdPreview'
import {
  CheckboxOption,
  CollapseToggle,
  InfoNote,
  SearchSelect,
} from '../../components/FormControls'
import JsonPanel from '../../components/JsonPanel'
import { ProductHubNav } from '../../components/PageNav'
import { buildIdvJsonOutput } from '../../data/idvResponses'

const COUNTRY_OPTIONS = [
  { value: 'USA', label: 'United States of America' },
  { value: 'EST', label: 'Estonia' },
  { value: 'GBR', label: 'United Kingdom' },
  { value: 'FRA', label: 'France' },
  { value: 'BRA', label: 'Brazil' },
]

const DATA_POINTS = [
  { id: 'firstName', label: 'First Name', defaultChecked: true },
  { id: 'lastName', label: 'Last Name', defaultChecked: true },
  { id: 'dateOfBirth', label: 'Date of Birth', defaultChecked: false },
  { id: 'gender', label: 'Gender', defaultChecked: false },
  { id: 'address', label: 'Address', defaultChecked: false },
  { id: 'nationality', label: 'Nationality', defaultChecked: false },
  { id: 'personalNumber', label: 'Personal Number', defaultChecked: true },
  { id: 'documentNumber', label: 'Document Number', defaultChecked: false },
  { id: 'licenseNumber', label: 'License Number', defaultChecked: false },
  { id: 'dateOfIssue', label: 'Issue Date', defaultChecked: false },
  { id: 'expiryDate', label: 'Expiry Date', defaultChecked: false },
  { id: 'weight', label: 'Weight', defaultChecked: true },
]

export default function IdvConfiguration() {
  const [selectedCountry, setSelectedCountry] = useState('USA')
  const [expanded, setExpanded] = useState(true)
  const [selectedFields, setSelectedFields] = useState(() =>
    Object.fromEntries(DATA_POINTS.map((f) => [f.id, f.defaultChecked])),
  )

  const jsonOutput = useMemo(
    () => buildIdvJsonOutput(selectedFields, selectedCountry),
    [selectedFields, selectedCountry],
  )

  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <ProductHubNav />
      <main className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-hidden px-4 py-4 md:px-12 md:py-5">
        <header className="mb-4 shrink-0 space-y-1">
          <h1 className="text-2xl font-bold text-primary md:text-[1.75rem] md:leading-8">
            IDV Configuration
          </h1>
          <p className="text-sm text-on-surface-variant">
            Customize the identity verification flow parameters for your
            integration.
          </p>
        </header>

        <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="flex min-h-0 min-w-0 flex-col gap-4 overflow-y-auto">
            <ConfigCard
              icon={Search}
              title="Data Extraction"
              action={
                <CollapseToggle
                  expanded={expanded}
                  onClick={() => setExpanded(!expanded)}
                />
              }
            >
              {expanded && (
                <div className="space-y-3">
                  <p className="text-xs text-on-surface-variant">
                    Select Data Points to Extract
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {DATA_POINTS.map((field) => (
                      <CheckboxOption
                        key={field.id}
                        label={field.label}
                        checked={selectedFields[field.id]}
                        onChange={(checked) =>
                          setSelectedFields((prev) => ({
                            ...prev,
                            [field.id]: checked,
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </ConfigCard>

            <ConfigCard icon={Globe} title="Country Selection" className="shrink-0">
              <div className="space-y-3">
                <p className="text-xs text-on-surface-variant">
                  Accepted Document Origin
                </p>
                <SearchSelect
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={COUNTRY_OPTIONS}
                  icon={Search}
                />
                <InfoNote>
                  Restricting origin may increase verification friction for
                  international users.
                </InfoNote>
              </div>
            </ConfigCard>
          </div>

          <div className="flex h-full min-h-0 min-w-0 flex-col gap-4">
            <ConfigCard icon={Search} title="ID Preview" fill className="min-h-0 flex-1">
              <CountryIdPreview
                country={selectedCountry}
                countryOptions={COUNTRY_OPTIONS}
                className="h-full"
              />
            </ConfigCard>

            <JsonPanel title="JSON Output" data={jsonOutput} fill className="min-h-0 flex-1" />
          </div>
        </div>
      </main>
    </div>
  )
}
