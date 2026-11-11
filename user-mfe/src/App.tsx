import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './mfe.css'
import UserPage from './pages/UserPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import { sharedPages, type SharedPageName } from './manifest.ts'

type AppProps = {
  page?: SharedPageName
}

export default function App({ page }: AppProps) {
  useEffect(() => {
    console.log('[user-mfe] App mounted')
    return () => console.log('[user-mfe] App unmounted')
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
      <Route path="/30724/user" element={<UserPage />} />
      <Route path="/30724/login" element={<LoginPage />} />
      <Route path="/30724/register" element={<RegisterPage />} />

      <Route path="*" element={<NoComponentHere />} />
    </Routes>
  )
}

function NoComponentHere() {
  return <p className="muted">user-mfe has no component for this path.</p>
}
