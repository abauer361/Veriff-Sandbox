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
import ProductPageShell from '../../components/ProductPageShell'
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
    <ProductPageShell
      title="IDV Configuration"
      description="Customize the identity verification flow parameters for your integration."
    >
      <div className="grid min-h-0 min-w-0 flex-1 gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="flex min-h-0 flex-col gap-4">
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

          <ConfigCard icon={Globe} title="Country Selection">
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

        <div className="flex min-h-0 flex-col gap-4">
          <ConfigCard
            icon={Search}
            title="ID Preview"
            fill
            className="h-52 shrink-0"
          >
            <CountryIdPreview
              country={selectedCountry}
              countryOptions={COUNTRY_OPTIONS}
              className="h-full min-h-0"
            />
          </ConfigCard>

          <JsonPanel
            title="JSON Output"
            data={jsonOutput}
            className="max-h-64 shrink-0"
          />
        </div>
      </div>
    </ProductPageShell>
  )
}
