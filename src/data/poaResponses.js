function buildUtilityBillResponse() {
  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T09:21:42.914887Z',
      submissionTime: '2026-07-14T09:24:35.310425Z',
      decisionTime: '2026-07-14T09:24:47.035486Z',
      code: 9001,
      id: '2f6dd345-267d-44f6-823c-5cc8bb8a2b46',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'SPARKY JOULE',
        lastName: null,
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        addresses: [
          {
            fullAddress: '12345 ENERGY CT',
            parsedAddress: {
              street: 'ENERGY CT',
              city: '',
              state: '',
              postcode: '',
              country: 'us',
              houseNumber: '12345',
              unit: '',
            },
          },
        ],
        pepSanctionMatch: null,
      },
      document: {
        number: null,
        type: null,
        country: null,
        validFrom: '2019-09-07',
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData: {
        proofOfAddress: {
          documentType: 'UTILITY_BILL',
          nameMatch: null,
          nameMatchPercentage: null,
          fraud: {
            riskLevel: 'MEDIUM_RISK',
            reason: 'DIGITAL_PRINT',
            reasonDescription:
              'Original PDF document was converted into an image',
            indicators: [
              'This document matches a known document type that typically exists as a native digital PDF. It was submitted as digital print, which removes underlying digital structure such as selectable text, metadata, or document history. This can limit verification and deeper analysis.',
            ],
          },
        },
      },
      attemptId: '878e8f1b-5626-4929-8439-6f7ef43321d3',
    },
    technicalData: {
      ip: null,
    },
  }
}

function buildBankStatementResponse() {
  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T12:49:58.985839Z',
      submissionTime: '2026-07-14T12:51:41.952824Z',
      decisionTime: '2026-07-14T12:52:02.818498Z',
      code: 9001,
      id: '26502e43-6886-4ef4-a16b-09a9f7350c97',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'John Smith',
        lastName: null,
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        addresses: [
          {
            fullAddress: '2450 Courage St, STE 108 Brownsville, TX 78521',
            parsedAddress: {
              street: 'Courage St',
              city: 'Brownsville',
              state: 'TX',
              postcode: '78521',
              country: 'us',
              houseNumber: '2450',
              unit: 'STE 108',
            },
          },
        ],
        pepSanctionMatch: null,
      },
      document: {
        number: null,
        type: null,
        country: null,
        validFrom: null,
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData: {
        proofOfAddress: {
          documentType: 'BANK_STATEMENT',
          nameMatch: null,
          nameMatchPercentage: null,
          fraud: {
            riskLevel: 'MEDIUM_RISK',
            reason: 'DIGITAL_PRINT',
            reasonDescription:
              'Original PDF document was converted into an image',
            indicators: [
              'This document matches a known document type that typically exists as a native digital PDF. It was submitted as digital print, which removes underlying digital structure such as selectable text, metadata, or document history. This can limit verification and deeper analysis.',
            ],
          },
        },
      },
      attemptId: '5e013f65-5759-4f7a-8af8-81eeaee0ceba',
    },
    technicalData: {
      ip: null,
    },
  }
}

function buildTaxDocumentResponse() {
  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T12:52:15.200256Z',
      submissionTime: '2026-07-14T12:52:53.399228Z',
      decisionTime: '2026-07-14T12:53:15.832114Z',
      code: 9001,
      id: 'e9a1c736-49be-4ba6-8958-9c83481bb96d',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: 'Jane A DOE',
        lastName: null,
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        addresses: [
          {
            fullAddress: '123 Elm Street Anywhere Else, PA 23456',
            parsedAddress: {
              street: 'Elm Street',
              city: 'Anywhere Else',
              state: 'PA',
              postcode: '23456',
              country: 'us',
              houseNumber: '123',
              unit: '',
            },
          },
        ],
        pepSanctionMatch: null,
      },
      document: {
        number: null,
        type: null,
        country: null,
        validFrom: '2014-12-31',
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData: {
        proofOfAddress: {
          documentType: 'TAX_DOCUMENT',
          nameMatch: null,
          nameMatchPercentage: null,
          fraud: {
            riskLevel: 'LOW_RISK',
            reason: 'NOT_ORIGINAL_IMAGE',
            reasonDescription:
              'Document is not original; it has been resaved or is a copy of the original',
            indicators: [
              'We found possible visual pattern differences in some characters. This may indicate document tampering.',
              'This image appears to be a reproduction rather than the original file. It shows signs of post-processing, such as cropping, re-saving, re-printing, or metadata changes. These changes may reduce confidence in the image’s authenticity or conceal signs of editing.\n- Detected changes to original file: Image resized or cropped\n- Detected changes to original file: JPEG re-saved as PNG',
              'This document matches a known document type that typically exists as a native digital PDF. It was submitted as scanned copy, which removes underlying digital structure such as selectable text, metadata, or document history. This can limit verification and deeper analysis.',
            ],
          },
        },
      },
      attemptId: '3ec49d5e-0b6a-43d3-b5d7-cbe325aea5ca',
    },
    technicalData: {
      ip: null,
    },
  }
}

function buildCaptureResponse() {
  return {
    status: 'success',
    verification: {
      acceptanceTime: '2026-07-14T13:22:44.985502Z',
      submissionTime: '2026-07-14T13:23:06.031511Z',
      decisionTime: '2026-07-14T13:23:06.537310Z',
      code: 9001,
      id: '812eb049-0868-4219-b07b-f717fcb60982',
      vendorData: null,
      endUserId: null,
      status: 'approved',
      reason: null,
      reasonCode: null,
      person: {
        firstName: null,
        lastName: null,
        citizenship: null,
        idNumber: null,
        gender: null,
        dateOfBirth: null,
        yearOfBirth: null,
        placeOfBirth: null,
        nationality: null,
        pepSanctionMatch: null,
      },
      document: {
        number: null,
        type: null,
        country: null,
        validFrom: null,
        validUntil: null,
        state: null,
      },
      comments: [],
      additionalVerifiedData: {},
      attemptId: '55eadac3-7d02-46e6-9022-e93b84586b9a',
    },
    technicalData: {
      ip: null,
    },
  }
}

export function buildPoaJsonOutput(docType, mode = 'standard') {
  if (mode === 'capture') {
    return buildCaptureResponse()
  }

  let response

  if (docType === 'bank_statement') {
    response = buildBankStatementResponse()
  } else if (docType === 'tax_document') {
    response = buildTaxDocumentResponse()
  } else {
    response = buildUtilityBillResponse()
  }

  if (mode !== 'lite') {
    return response
  }

  const { fraud, ...proofOfAddressWithoutFraud } =
    response.verification.additionalVerifiedData.proofOfAddress

  return {
    ...response,
    verification: {
      ...response.verification,
      additionalVerifiedData: {
        ...response.verification.additionalVerifiedData,
        proofOfAddress: proofOfAddressWithoutFraud,
      },
    },
  }
}
