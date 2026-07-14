const US_SAMPLE_ADDRESS = [
  {
    fullAddress: '123 NORTH STREET SACRAMENTO, CA 00000-1234',
    parsedAddress: {
      street: 'north street',
      houseNumber: '123',
      city: 'sacramento',
      state: 'ca',
      postcode: '00000-1234',
      country: null,
      unit: null,
    },
  },
]

const GBR_SAMPLE_ADDRESS = [
  {
    fullAddress: 'NOWAK',
    parsedAddress: {
      street: null,
      houseNumber: null,
      city: null,
      state: null,
      postcode: null,
      country: null,
      unit: null,
    },
  },
]

function buildUsVerification(selectedFields) {
  const person = {}

  if (selectedFields.firstName) person.firstName = 'JANICE'
  if (selectedFields.lastName) person.lastName = 'SAMPLE'
  if (selectedFields.dateOfBirth) person.dateOfBirth = '1957-11-26'
  if (selectedFields.gender) person.gender = 'F'
  if (selectedFields.nationality) person.nationality = null
  if (selectedFields.address) person.addresses = US_SAMPLE_ADDRESS
  if (selectedFields.weight) person.weight = '160 lb'

  const document = {
    type: 'DRIVERS_LICENSE',
    country: 'US',
    state: 'CA',
  }

  if (selectedFields.documentNumber) document.number = 'I1234567'
  if (selectedFields.dateOfIssue) document.validFrom = '2025-11-09'
  if (selectedFields.expiryDate) document.validUntil = '2030-11-26'

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-13T23:01:06.593107Z',
      submissionTime: '2026-07-13T23:02:24.718093Z',
      decisionTime: '2026-07-13T23:02:31.599009Z',
      code: null,
      id: 'd999810a-e198-4095-80f7-0cd2b2278fc5',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person,
      document,
      comments: [],
      additionalVerifiedData: {},
      attemptId: '59dc41fe-1291-4c64-af44-edc69d474995',
    },
    technicalData: {
      ip: '90.191.9.111',
    },
  }
}

function buildEstoniaVerification(selectedFields) {
  const person = {}

  if (selectedFields.firstName) person.firstName = 'HUGO MARTIN'
  if (selectedFields.lastName) person.lastName = 'MÖLDER'
  person.citizenship = null
  person.idNumber = '38910239121'
  if (selectedFields.gender) person.gender = 'M'
  if (selectedFields.dateOfBirth) person.dateOfBirth = '1989-10-23'
  person.yearOfBirth = null
  person.placeOfBirth = null
  if (selectedFields.nationality) person.nationality = 'EE'
  if (selectedFields.address) person.addresses = []
  person.pepSanctionMatch = null

  const document = {}

  if (selectedFields.documentNumber) document.number = 'AS0003822'
  document.type = 'ID_CARD'
  document.country = 'EE'
  if (selectedFields.dateOfIssue) document.validFrom = '2025-10-02'
  if (selectedFields.expiryDate) document.validUntil = '2030-10-02'
  document.state = null

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-13T23:18:15.533195Z',
      submissionTime: '2026-07-13T23:19:00.064503Z',
      decisionTime: '2026-07-13T23:19:10.626899Z',
      code: null,
      id: '84d15e4f-aaf7-4b45-98d2-ec8ca3bfec37',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person,
      document,
      comments: [],
      additionalVerifiedData: {},
      attemptId: '8f474055-d23b-4b7c-b193-4e3ce0c982db',
    },
    technicalData: {
      ip: '90.191.9.111',
    },
  }
}

function buildUnitedKingdomVerification(selectedFields) {
  const person = {}

  if (selectedFields.firstName) person.firstName = 'ANNA'
  if (selectedFields.lastName) person.lastName = 'FIRST NAMES PHOTOGRAPHY'
  person.citizenship = null
  person.idNumber = null
  if (selectedFields.gender) person.gender = null
  if (selectedFields.dateOfBirth) person.dateOfBirth = null
  person.yearOfBirth = null
  person.placeOfBirth = null
  if (selectedFields.nationality) person.nationality = null
  if (selectedFields.address) person.addresses = GBR_SAMPLE_ADDRESS
  person.pepSanctionMatch = null

  const document = {}

  if (selectedFields.documentNumber) document.number = null
  document.type = 'DRIVERS_LICENSE'
  document.country = 'UK'
  if (selectedFields.dateOfIssue) document.validFrom = '1959-05-22'
  if (selectedFields.expiryDate) document.validUntil = null
  document.state = null

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-13T23:19:05.139272Z',
      submissionTime: '2026-07-13T23:19:59.054490Z',
      decisionTime: '2026-07-13T23:20:06.679124Z',
      code: null,
      id: '4c25ad77-4637-42ed-b23d-10bb1adb342d',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person,
      document,
      comments: [],
      additionalVerifiedData: {},
      attemptId: '883cec72-3c9f-4be9-a440-fca759d7051d',
    },
    technicalData: {
      ip: '90.191.9.111',
    },
  }
}

function buildFranceVerification(selectedFields) {
  const person = {}

  if (selectedFields.firstName) person.firstName = 'MAËLIS-GAËLLE MARIE'
  if (selectedFields.lastName) person.lastName = 'MARTIN'
  person.citizenship = null
  person.idNumber = null
  if (selectedFields.gender) person.gender = 'F'
  if (selectedFields.dateOfBirth) person.dateOfBirth = '1990-07-13'
  person.yearOfBirth = null
  person.placeOfBirth = null
  if (selectedFields.nationality) person.nationality = 'FR'
  if (selectedFields.address) person.addresses = []
  person.pepSanctionMatch = null

  const document = {}

  if (selectedFields.documentNumber) document.number = 'D2H6862M2'
  document.type = 'ID_CARD'
  document.country = 'FR'
  if (selectedFields.dateOfIssue) document.validFrom = null
  if (selectedFields.expiryDate) document.validUntil = '2030-02-11'
  document.state = null

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-13T23:20:04.836210Z',
      submissionTime: '2026-07-13T23:20:39.522817Z',
      decisionTime: '2026-07-13T23:20:44.727991Z',
      code: null,
      id: '36a75954-17b6-4eb9-ab37-2b282a3cfb36',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person,
      document,
      comments: [],
      additionalVerifiedData: {},
      attemptId: '2d8f92bc-3ca1-4e44-a5a2-7412237b0a02',
    },
    technicalData: {
      ip: '90.191.9.111',
    },
  }
}

function buildGenericVerification(selectedFields, selectedCountry) {
  const person = {}

  if (selectedFields.firstName) person.firstName = 'JANE'
  if (selectedFields.lastName) person.lastName = 'DOE'
  if (selectedFields.dateOfBirth) person.dateOfBirth = '1990-05-15'
  if (selectedFields.gender) person.gender = 'F'
  if (selectedFields.nationality) person.nationality = selectedCountry
  if (selectedFields.address) {
    person.addresses = [
      {
        fullAddress: '123 Example Street',
        parsedAddress: {
          street: 'example street',
          houseNumber: '123',
          city: 'example city',
          state: null,
          postcode: null,
          country: selectedCountry,
          unit: null,
        },
      },
    ]
  }

  const document = {
    type: 'PASSPORT',
    country: selectedCountry,
  }

  if (selectedFields.documentNumber) document.number = 'AB1234567'
  if (selectedFields.dateOfIssue) document.validFrom = '2020-01-15'
  if (selectedFields.expiryDate) document.validUntil = '2030-01-15'

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-13T23:01:06.593107Z',
      submissionTime: '2026-07-13T23:02:24.718093Z',
      decisionTime: '2026-07-13T23:02:31.599009Z',
      code: null,
      id: 'd999810a-e198-4095-80f7-0cd2b2278fc5',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person,
      document,
      comments: [],
      additionalVerifiedData: {},
      attemptId: '59dc41fe-1291-4c64-af44-edc69d474995',
    },
    technicalData: {
      ip: '90.191.9.111',
    },
  }
}

function buildBrazilVerification(selectedFields) {
  const person = {}

  if (selectedFields.firstName) person.firstName = 'FERNANDA DE CARVALHO'
  if (selectedFields.lastName) person.lastName = 'DA SILVA'
  person.citizenship = null
  person.idNumber = null
  if (selectedFields.gender) person.gender = null
  if (selectedFields.dateOfBirth) person.dateOfBirth = '1976-05-18'
  person.yearOfBirth = null
  person.placeOfBirth = null
  if (selectedFields.nationality) person.nationality = 'BR'
  if (selectedFields.address) person.addresses = []
  person.pepSanctionMatch = null

  const document = {}

  if (selectedFields.documentNumber) document.number = null
  document.type = 'ID_CARD'
  document.country = 'BR'
  if (selectedFields.dateOfIssue) document.validFrom = null
  if (selectedFields.expiryDate) document.validUntil = null
  document.state = null

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-13T23:31:42.052266Z',
      submissionTime: '2026-07-13T23:32:24.834066Z',
      decisionTime: '2026-07-13T23:32:38.130077Z',
      code: null,
      id: '70f82617-0e8c-46f2-b1cf-d63954548d5c',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person,
      document,
      comments: [],
      additionalVerifiedData: {},
      attemptId: '6436057c-6b6e-49c1-88db-33eeb2bd1b7d',
    },
    technicalData: {
      ip: '90.191.9.111',
    },
  }
}

export function buildIdvJsonOutput(selectedFields, selectedCountry) {
  if (selectedCountry === 'USA') {
    return buildUsVerification(selectedFields)
  }

  if (selectedCountry === 'EST') {
    return buildEstoniaVerification(selectedFields)
  }

  if (selectedCountry === 'GBR') {
    return buildUnitedKingdomVerification(selectedFields)
  }

  if (selectedCountry === 'FRA') {
    return buildFranceVerification(selectedFields)
  }

  if (selectedCountry === 'BRA') {
    return buildBrazilVerification(selectedFields)
  }

  return buildGenericVerification(selectedFields, selectedCountry)
}
