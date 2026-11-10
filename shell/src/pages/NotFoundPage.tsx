import { Link, useLocation } from 'react-router'

// No entry in shellRoutes matches, so the shell mounts no MFE at all.
export default function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <div className="shell-page">
      <p>This is the 404 page from the shell.</p>
      <p className="muted">
        No shell route matches <code>{pathname}</code>.
      </p>
      <nav className="page-links">
        <Link to="/">→ back to /</Link>
      </nav>
    </div>
  )
}
