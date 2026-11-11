import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import LandingPage from './pages/LandingPage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import FavPage from './pages/FavPage.tsx'
import './mfe.css'
import { sharedPages, type SharedPageName } from './manifest.ts'


type AppProps = {
  page?: SharedPageName
}

export default function App({page}: AppProps) {
  useEffect(() => {
    console.log('[product-mfe] App mounted')
    return () => console.log('[product-mfe] App unmounted')
  }, [])

  if (page) {
    const NamedPage = sharedPages[page]
    if (!NamedPage) {
      return <NoComponentHere />
    }
    return <NamedPage />
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/30722" element={<Navigate to="/" replace />} />
      <Route path="/30722/csc" element={<ProductPage />} />
      <Route path="/30722/fav" element={<FavPage />} />

      <Route path="*" element={<NoComponentHere />} />
    </Routes>
  )
}

function NoComponentHere() {
  return <p className="muted">product-mfe has no component for this path.</p>
}
