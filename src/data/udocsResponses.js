function buildBankAccountOwnershipResponse({
  tampering,
  addressValidation,
  addressMatching,
}) {
  const additionalVerifiedData = {}

  if (addressValidation) {
    additionalVerifiedData.proofOfAddress = {
      addressValidationResult: {
        components: null,
        status: 'found',
        addressType: null,
        validations: {
          countryExists: {
            result: 'true',
          },
        },
      },
    }
  }

  if (addressMatching) {
    additionalVerifiedData.addressMatching = {
      matchPercentage: null,
      matchThreshold: 80,
      result: null,
      addresses: [
        {
          fullAddress: '1234 Anywhere Dr. Small Town, MO 12345-6789',
          parsedAddress: null,
        },
        {
          fullAddress: '1234 Anywhere Dr. Small Town, MO 12345-6789',
          parsedAddress: null,
        },
      ],
    }
  }

  const udocs = {
    metadata: {
      pageCount: 1,
    },
    extraction: {
      fullName: 'Jane Customer',
      fullAddress: '1234 Anywhere Dr. Small Town, MO 12345-6789',
      bankAccountNumber: '000009752',
      issueDate: '2003-06-05',
      occupation: '',
      income: '',
      issuer: 'Commerce Bank',
      currency: '$',
    },
    classification: {
      documentType: 'financial',
      documentSubType: 'bank_statement',
      countryCode: 'us',
      language: 'en',
      issuer: 'commerce_bank',
    },
    validations: {
      matchingResults: [
        {
          type: 'full_name',
          match: true,
          originalValue: 'Jane Customer',
          extractedValue: 'Jane Customer',
          matchThreshold: 80,
          matchPercentage: 100,
        },
        {
          type: 'bank_account',
          match: true,
          originalValue: '000009752',
          extractedValue: '000009752',
        },
      ],
      documentExpiration: {
        isIssueDateInRange: true,
      },
    },
  }

  if (tampering) {
    udocs.fraud = {
      riskLevel: 'LOW_RISK',
      reason: 'TRUSTED_PDF',
      reasonDescription: 'Document is genuine and originates from a trusted issuer',
      indicators: [],
    }
  }

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T05:33:02.451236Z',
      submissionTime: '2026-07-14T05:33:17.860294Z',
      decisionTime: '2026-07-14T05:33:36.723932Z',
      code: 9001,
      id: 'c0b58958-7bf1-499a-8a1f-ba5850e86891',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'Jane Customer',
        lastName: null,
        fullName: 'Jane Customer',
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        addresses: [
          {
            fullAddress: '1234 Anywhere Dr. Small Town, MO 12345-6789',
          },
        ],
        pepSanctionMatch: null,
      },
      document: {
        number: '000009752',
        type: 'BANK_STATEMENT',
        country: 'US',
        validFrom: '2003-06-05',
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData,
      udocs,
      attemptId: '4ea021a7-3602-4ff6-a81f-0e0a05a74ace',
    },
    technicalData: {
      ip: null,
    },
  }
}

function buildSourceOfIncomeResponse({
  tampering,
  addressValidation,
  addressMatching,
}) {
  const additionalVerifiedData = {}

  if (addressValidation) {
    additionalVerifiedData.proofOfAddress = {
      addressValidationResult: {
        components: null,
        status: 'not_found',
        addressType: null,
        validations: {
          countryExists: {
            result: 'skipped',
          },
        },
      },
    }
  }

  if (addressMatching) {
    additionalVerifiedData.addressMatching = {
      matchPercentage: null,
      matchThreshold: 80,
      result: null,
      addresses: [
        {
          fullAddress: '8 Perth St Island Bay Wellington',
          parsedAddress: null,
        },
        {
          fullAddress: '8 Perth St, Island Bay, Wellington',
          parsedAddress: null,
        },
      ],
    }
  }

  const udocs = {
    metadata: {
      pageCount: 1,
    },
    extraction: {
      fullName: 'Francis Freemantle',
      fullAddress: '8 Perth St, Island Bay, Wellington',
      issueDate: '2022-10-19',
      occupation: 'Restaurant',
      income: '1187.48',
      issuer: 'PayHero',
      currency: ' $',
    },
    classification: {
      documentType: 'financial',
      documentSubType: 'employer_payslip',
      countryCode: 'nz',
      language: 'en',
      issuer: 'payhero',
    },
    validations: {
      matchingResults: [
        {
          type: 'full_name',
          match: true,
          originalValue: 'Francis Freemantle',
          extractedValue: 'Francis Freemantle',
          matchThreshold: 80,
          matchPercentage: 100,
        },
      ],
      documentExpiration: {
        isIssueDateInRange: true,
      },
    },
  }

  if (tampering) {
    udocs.fraud = {
      riskLevel: 'LOW_RISK',
      reason: 'TRUSTED_PDF',
      reasonDescription: 'Document is genuine and originates from a trusted issuer',
      indicators: [],
    }
  }

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T06:27:33.064231Z',
      submissionTime: '2026-07-14T06:27:44.314731Z',
      decisionTime: '2026-07-14T06:28:05.930730Z',
      code: 9001,
      id: '5340b73e-e9a3-47e9-bf64-584888d14732',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'Francis Freemantle',
        lastName: null,
        fullName: 'Francis Freemantle',
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        addresses: [
          {
            fullAddress: '8 Perth St, Island Bay, Wellington',
          },
        ],
        pepSanctionMatch: null,
      },
      document: {
        number: '123123123',
        type: 'EMPLOYER_PAYSLIP',
        country: 'NZ',
        validFrom: '2022-10-19',
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData,
      udocs,
      attemptId: '1c0f3387-8b55-45b7-bc71-b6cf79de777b',
    },
    technicalData: {
      ip: null,
    },
  }
}

function buildVehicleOwnershipResponse({
  tampering,
  addressValidation,
  addressMatching,
}) {
  const additionalVerifiedData = {}

  if (addressValidation) {
    additionalVerifiedData.proofOfAddress = {
      addressValidationResult: {
        components: null,
        status: 'found',
        addressType: null,
        validations: {
          countryExists: {
            result: 'true',
          },
        },
      },
    }
  }

  if (addressMatching) {
    additionalVerifiedData.addressMatching = {
      matchPercentage: null,
      matchThreshold: 80,
      result: null,
      addresses: [
        {
          fullAddress: '800 E Miller Rd, Brooktondale NY',
          parsedAddress: null,
        },
        {
          fullAddress: '800 E MILLER RD B BROOKTONDALE NY 14817',
          parsedAddress: null,
        },
      ],
    }
  }

  const udocs = {
    metadata: {
      pageCount: 1,
    },
    extraction: {
      fullName: 'DONALD ECKERSON',
      fullAddress: '800 E MILLER RD B BROOKTONDALE NY 14817',
      documentNumber: '180091DG',
      vehicleIdentificationNumber: '5J6YH28729L005246',
      vehicleRegistrationNumber: 'AVZ1324',
    },
    classification: {
      documentType: 'government',
      documentSubType: 'vehicle_registration',
      countryCode: 'us',
      language: 'en',
      issuer: 'new_york_state',
    },
    validations: {
      matchingResults: [
        {
          type: 'full_name',
          match: true,
          originalValue: 'Donald Eckerson',
          extractedValue: 'DONALD ECKERSON',
          matchThreshold: 80,
          matchPercentage: 100,
        },
      ],
    },
  }

  if (tampering) {
    udocs.fraud = {
      riskLevel: 'LOW_RISK',
      reason: 'RESAVED_OR_PREPROCESSED',
      reasonDescription:
        'Document is not original; it has been resaved or is a copy of the original',
      indicators: [
        'We found possible visual pattern differences in some characters. This may indicate document tampering.',
        'This image appears to be a reproduction rather than the original file. It shows signs of post-processing, such as cropping, re-saving, re-printing, or metadata changes. These changes may reduce confidence in the image’s authenticity or conceal signs of editing.\n- Detected changes to original file: Re-saved multiple times',
      ],
    }
  }

  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T06:44:47.477296Z',
      submissionTime: '2026-07-14T06:44:52.199120Z',
      decisionTime: '2026-07-14T06:45:14.070711Z',
      code: 9001,
      id: '4f6b3cfa-fd92-4bd1-aef5-c1998c6cafe6',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'DONALD ECKERSON',
        lastName: null,
        fullName: 'DONALD ECKERSON',
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        addresses: [
          {
            fullAddress: '800 E MILLER RD B BROOKTONDALE NY 14817',
          },
        ],
        pepSanctionMatch: null,
      },
      document: {
        number: '180091DG',
        type: 'VEHICLE_REGISTRATION',
        country: 'US',
        validFrom: null,
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData,
      udocs,
      attemptId: '74a20714-58da-49c7-9c87-fe9fe1091f30',
    },
    technicalData: {
      ip: null,
    },
  }
}

function buildDefaultResponse(documentType) {
  return {
    status: 'success',
    verification: {
      id: 'v_8f9a2b1c',
      document_type: documentType,
      extracted_data: {
        first_name: 'Jane',
        last_name: 'Doe',
        address: '123 Main St, Anytown',
        issue_date: '2023-10-24',
      },
    },
  }
}

export function buildUdocsJsonOutput(docType, options, documentType) {
  if (docType === 'bank_account') {
    return buildBankAccountOwnershipResponse(options)
  }

  if (docType === 'source_of_income') {
    return buildSourceOfIncomeResponse(options)
  }

  if (docType === 'vehicle_ownership') {
    return buildVehicleOwnershipResponse(options)
  }

  return buildDefaultResponse(documentType)
}
