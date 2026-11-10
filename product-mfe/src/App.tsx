import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import LandingPage from './pages/LandingPage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import FavPage from './pages/FavPage.tsx'
import RecommendationAtCartPage from './pages/RecommendationAtCartPage.tsx'
import './mfe.css'

export default function App() {
  useEffect(() => {
    console.log('[product-mfe] App mounted')
    return () => console.log('[product-mfe] App unmounted')
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* routes owned by product-mfe */}
      <Route path="/30722" element={<Navigate to="/" replace />} />
      <Route path="/30722/csc" element={<ProductPage />} />
      <Route path="/30722/fav" element={<FavPage />} />

      {/* the component this MFE contributes to cart-mfe's routes */}
      <Route path="/30723/cart" element={<RecommendationAtCartPage />} />
      <Route path="/30723/checkout" element={<RecommendationAtCartPage />} />
      <Route
        path="/30723/checkout/login"
        element={<RecommendationAtCartPage />}
      />
      <Route
        path="/30723/checkout/register"
        element={<RecommendationAtCartPage />}
      />

      <Route path="*" element={<NoComponentHere />} />
    </Routes>
  )
}

function NoComponentHere() {
  return <p className="muted">product-mfe has no component for this path.</p>
}
