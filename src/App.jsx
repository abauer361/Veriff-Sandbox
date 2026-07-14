import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AgeEstimation from './pages/products/AgeEstimation'
import AmlScreening from './pages/products/AmlScreening'
import BiometricAuth from './pages/products/BiometricAuth'
import IdvConfiguration from './pages/products/IdvConfiguration'
import ProofOfAddress from './pages/products/ProofOfAddress'
import UnstructuredDocs from './pages/products/UnstructuredDocs'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/products/identity-verification"
          element={<IdvConfiguration />}
        />
        <Route
          path="/products/unstructured-docs"
          element={<UnstructuredDocs />}
        />
        <Route path="/products/proof-of-address" element={<ProofOfAddress />} />
        <Route path="/products/biometric-auth" element={<BiometricAuth />} />
        <Route path="/products/aml-ongoing" element={<AmlScreening />} />
        <Route path="/products/age-estimation" element={<AgeEstimation />} />
      </Routes>
    </BrowserRouter>
  )
}
