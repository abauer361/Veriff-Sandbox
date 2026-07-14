const DOCUMENT_PREVIEW_IMAGES = {
  bank_account:
    '/media/documents/9a17146f-15eb-4e08-a8d2-b997794ff249_page-0001.jpg',
  source_of_income: '/media/documents/source_of_income.png',
  vehicle_ownership: '/media/documents/vehicle_ownership.jpeg',
  vehicle_insurance: '/media/documents/vehicle_insurance.jpg',
  birth_certificate: '/media/documents/birth_certificate.jpg',
  utility_bill: '/media/documents/utility_bill.webp',
  bank_statement: '/media/documents/bank_statement.jpg',
  tax_document: '/media/documents/tax_document.png',
}

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'svg']

export function getDocumentPreviewCandidates(docType) {
  const mapped = DOCUMENT_PREVIEW_IMAGES[docType]
  const defaults = IMAGE_EXTENSIONS.map(
    (extension) => `/media/documents/${docType}.${extension}`,
  )

  return [...(mapped ? [mapped] : []), ...defaults].filter(
    (path, index, paths) => paths.indexOf(path) === index,
  )
}

export function getDocumentPreviewLabel(docType) {
  const labels = {
    bank_account: 'Commerce Bank Statement',
    source_of_income: 'Source of Income Document',
    vehicle_ownership: 'Vehicle Ownership Document',
    vehicle_insurance: 'Vehicle Insurance Policy',
    birth_certificate: 'Birth Certificate',
    utility_bill: 'Utility Bill',
    bank_statement: 'Bank Statement',
    tax_document: 'Tax Document',
  }

  return labels[docType] ?? 'Document Preview'
}
