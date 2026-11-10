import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import CartPage from './pages/CartPage.tsx'
import CheckoutPage from './pages/CheckoutPage.tsx'
import AskToLoginPage from './pages/AskToLoginPage.tsx'
import './mfe.css'

export default function App() {
  useEffect(() => {
    console.log('[cart-mfe] App mounted')
    return () => console.log('[cart-mfe] App unmounted')
  }, [])

  return (
    <Routes>
      {/* routes owned by cart-mfe */}
      <Route path="/30723/cart" element={<CartPage />} />
      <Route path="/30723/checkout" element={<CheckoutPage />} />
      <Route path="/30723/checkout/login" element={<AskToLoginPage />} />
      <Route path="/30723/checkout/register" element={<AskToLoginPage />} />

      <Route path="*" element={<NoComponentHere />} />
    </Routes>
  )
}

function NoComponentHere() {
  return <p className="muted">cart-mfe has no component for this path.</p>
}
