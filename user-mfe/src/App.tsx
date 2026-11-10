import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import UserPage from './pages/UserPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import './mfe.css'

export default function App() {
  useEffect(() => {
    console.log('[user-mfe] App mounted')
    return () => console.log('[user-mfe] App unmounted')
  }, [])

  return (
    <Routes>
      {/* routes owned by user-mfe */}
      <Route path="/30724/user" element={<UserPage />} />
      <Route path="/30724/login" element={<LoginPage />} />
      <Route path="/30724/register" element={<RegisterPage />} />

      {/* the components this MFE contributes to cart-mfe's routes */}
      <Route path="/30723/checkout/login" element={<LoginPage />} />
      <Route path="/30723/checkout/register" element={<RegisterPage />} />

      <Route path="*" element={<NoComponentHere />} />
    </Routes>
  )
}

function NoComponentHere() {
  return <p className="muted">user-mfe has no component for this path.</p>
}
