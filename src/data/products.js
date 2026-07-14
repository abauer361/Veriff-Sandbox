import {
  Cake,
  CreditCard,
  FileText,
  Fingerprint,
  Landmark,
  MapPin,
} from 'lucide-react'

export const products = [
  {
    id: 'identity-verification',
    path: '/products/identity-verification',
    title: 'Identity Verification',
    description:
      'Our core IDV solution. Verify users globally with real-time feedback and high accuracy.',
    icon: CreditCard,
  },
  {
    id: 'unstructured-docs',
    path: '/products/unstructured-docs',
    title: 'Unstructured Docs',
    description:
      'Automate data extraction from any document type with AI, reducing manual entry.',
    icon: FileText,
  },
  {
    id: 'proof-of-address',
    path: '/products/proof-of-address',
    title: 'Proof of Address',
    description:
      'Extract and verify address information from utility bills and bank statements.',
    icon: MapPin,
  },
  {
    id: 'biometric-auth',
    path: '/products/biometric-auth',
    title: 'Biometric Authentication',
    description:
      'Secure returning users with seamless facial biometric matching against their verified identity.',
    icon: Fingerprint,
  },
  {
    id: 'aml-ongoing',
    path: '/products/aml-ongoing',
    title: 'AML (Ongoing)',
    description:
      'Screen users against global watchlists, PEPs, and adverse media in real-time.',
    icon: Landmark,
  },
  {
    id: 'age-estimation',
    path: '/products/age-estimation',
    title: 'Age Estimation',
    description:
      'Estimate user age from a selfie without requiring an ID document.',
    icon: Cake,
  },
]
